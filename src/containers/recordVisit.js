const recordVisit = (page) => {
    fetch('https://geoip-db.com/json/geoip.php')
        .then(res => { return res.json(); })
        .then(res => {
            var q = {
                method: 'POST',
                body: {
                    location: res.city ? `${res.city} ${res.postal}, ${res.country_code}` : res.country_name,
                    page: page,
                    browser: window.navigator.userAgent,
                    ip: res.IPv4,
                    time: Date(Date.now()).toLocaleString().substring(0, 24),
                    ref: document.referrer
                }
            }
            q.body = JSON.stringify(q.body);
            fetch(`https://battleshipsjs.herokuapp.com/visit/`, q)
                .catch(err => { console.log(err) });

        })
}

export default recordVisit;