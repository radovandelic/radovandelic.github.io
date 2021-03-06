import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/forms.css";
import { uploadImage, errors } from "../data/text";

class StyledForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kitchenName: "default",
            message: "",
        };
    }

    componentWillMount = () => {
        const { kitchen, lang } = this.props;
        const url = `http://0.0.0.0:9000/api/kitchens/${kitchen.id}`;
        fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then(kitchen => {
                this.setState({ images: kitchen.images });
                document.getElementById("image").value = "";
            })
            .catch(err => {
                this.setState({ message: errors[lang].errorMessageConnect });
            });

    }

    submit = (e) => {
        e.preventDefault();
        const { kitchen, user, lang } = this.props;
        const url = `http://0.0.0.0:9000/api/kitchens/${kitchen.id}/images/upload`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_token: user.access_token,
                image: this.state.image,
            }),
        })
            .then(res => res.json())
            .then(kitchen => {
                this.setState({ images: kitchen.images, kitchenName: kitchen.name, image: null, message: uploadImage[lang].uploadedMsg });
                document.getElementById("image").value = "";
            })
            .catch(err => {
                this.setState({ message: uploadImage[lang].errorMsg });
            });
    }

    handleFile = (e) => {
        const { lang } = this.props;
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onload = (upload) => {
            this.setState({
                image: upload.target.result,
            });
        };
        reader.onerror = (err) => {
            console.log(err);
            this.setState({ message: uploadImage[lang].errorReading });
        };
        reader.readAsDataURL(file);
    }

    delete = (e) => {
        e.preventDefault();
        const { kitchen, user, lang } = this.props;
        const images = [];
        const url = `http://0.0.0.0:9000/api/kitchens/${kitchen.id}/images/delete`;
        for (const image of this.state.images) {
            if (this.refs[image._id].checked) {
                images.push(image);
            }
        }
        fetch(url, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                access_token: user.access_token,
                images,
            }),
        })
            .then(res => res.json())
            .then(kitchen => {
                this.setState({ images: kitchen.images, kitchenName: kitchen.name, image: null, message: uploadImage[lang].uploadedMsg });
                document.getElementById("image").value = "";
            })
            .catch(err => {
                this.setState({ message: uploadImage[lang].errorMsg });
            });
    }

    render = () => {
        const { lang } = this.props;
        if (this.state.images) {
            var Images = [];
            for (const image of this.state.images) {
                Images.push(<div key={image._id} className="image-grid">
                    <img src={image.thumbnail} alt={this.state.kitchenName} />
                    <input type="checkbox" value={image._id} ref={image._id} />
                </div>
                );
            }
        }

        return (
            <div>
                <form onSubmit={this.submit} id="form" className="form-container image-upload">
                    <div className="form-group" >
                        <label htmlFor="image">{uploadImage[lang].uploadImg}</label>
                        <input type="file" accept="image/*" field="image" id="image" onChange={this.handleFile} />
                    </div>
                    {this.state.image ?
                        <img src={this.state.image} alt="kitchen" className="upload-thumb" />
                        :
                        null
                    }
                    <button id="submit" type="submit" className="mb-4 btn btn-orange">{uploadImage[lang].upload}</button>
                    <h4 className="uploaded-message">{this.state.message}</h4>
                </form>
                {Images ?
                    <form className="images-container" onSubmit={this.delete} >
                        <div >
                            {Images}
                        </div>
                        <br />
                        <button id="delete" type="submit" className="mb-4 btn btn-danger">
                            <i className="fa fa-trash" aria-hidden="true"></i>&nbsp; {uploadImage[lang].remove}
                        </button>
                    </form>

                    : null
                }
            </div>

        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
    kitchen: state.kitchen,
    lang: state.user.lang,
});

export default connect(
    mapStateToProps,
    null
)(StyledForm);