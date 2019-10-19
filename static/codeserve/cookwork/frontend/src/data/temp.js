export default {
    registerKitchen: [
        {
            id: "phone",
        },
        {
            id: "description",
            type: "textarea",
        },
        {
            id: "address",
        },
        {
            id: "postalCode",
            type: "number",
            min: "1000",
            max: "9999",
        },
        {
            id: "region",
            type: "select",
            options: [
                "Antwerpen",
                "Brabant",
                "Bruxelles",
                "Hainaut",
                "Liege",
                "Limburg",
                "Luxembourg",
                "Namur",
                "EastFlanders",
                "WestFlanders",
            ],
        },
        {
            id: "size",
            type: "number",
            min: "1",
            max: "2000",
        },
        {
            id: "days",
            type: "select",
            time: true,
        },
        {
            id: "hours",
            type: "select",
            time: true,
        },
        {
            id: "capacity",
        },
        {
            id: "price",
            type: "number",
            min: "15",
            max: "500",
        },
        {
            id: "rent",
            type: "number",
            min: "100",
            max: "50000",
        },
    ],
};