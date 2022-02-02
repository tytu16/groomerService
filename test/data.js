const TuschhoffAccount = () => {
    return ({
        "id": "0",
        "accountName": "Tuschhoffs",
        "addressOne": "363",
        "addressTwo": "Crown Pt",
        "addressCity": "Columbia",
        "addressState": "MO",
        "addressZip": "65203",
        "garageCd": "",
        "person": [
            {
                "id": "0",
                "isPrimary": true,
                "firstName": "Tessa",
                "lastName": "Tuschhoff",
                "email": "tesnic2336@yahoo.com",
                "phone": [
                    {
                        "id": "0",
                        "phoneNumber": "(573) 587 - 1541",
                        "phoneType": "Cell",
                        "textable": true
                    }
                ],
                "note": [
                    {
                        "id": "0",
                        "label": "Occupation",
                        "message": "Librarian"
                    }
                ]
            },
            {
                "id": "1",
                "isPrimary": false,
                "firstName": "Tyler",
                "lastName": "Tuschhoff",
                "email": "ttuschhoff11@gmail.com",
                "phone": [
                    {
                        "id": "0",
                        "phoneNumber": "(573) 275 - 2610",
                        "phoneType": "Cell",
                        "textable": true
                    },
                    {
                        "id": "1",
                        "phoneNumber": "(573) 334 - 4341",
                        "phoneType": "Home",
                        "textable": false
                    }
                ],
                "note": [
                    {
                        "id": "0",
                        "label": "Works from home",
                        "message": "...in his underwear"
                    }
                ]
            }
        ],
        "pet": [
            {
                "id": "0",
                "name": "Jiji",
                "breed": "Maine Coon",
                "maleFemale": "Male",
                "weight": "14.4",
                "wUnits": "lb",
                "ageYr": "1",
                "ageMn": "4",
                "dateEntered": "1/30/2022",
                "note": [
                    {
                        "id": "0",
                        "label": "Biig Kittty",
                        "message": ""
                    }
                ]
            }
        ],
        "note": [
            {
                "id": "0",
                "label": "Front door doesn't latch",
                "message": ""
            }
        ]
    });
}


const McNallyAccount = () => {
    return ({
        "id": "1",
        "accountName": "McNally",
        "addressOne": "3535 Dana Dr",
        "addressTwo": "",
        "addressCity": "Jackson",
        "addressState": "MO",
        "addressZip": "63755",
        "garageCd": "2517",
        "person": [
            {
                "id": "0",
                "isPrimary": true,
                "firstName": "Lynn",
                "lastName": "McNally",
                "email": "lynnmc@outlook.com",
                "phone": [
                    {
                        "id": "0",
                        "phoneNumber": "(573) 334 - 9666",
                        "phoneType": "Cell",
                        "textable": true
                    }
                ],
                "note": [
                    {
                        "id": "0",
                        "label": "Dog Groomer",
                        "message": ""
                    }
                ]
            }
        ],
        "pet": [
            {
                "id": "0",
                "name": "Mya",
                "breed": "Quicksy",
                "maleFemale": "Female",
                "weight": "30",
                "wUnits": "lb",
                "ageYr": "15",
                "ageMn": "0",
                "dateEntered": "1/30/2022",
                "note": [
                    {
                        "id": "0",
                        "label": "Old, sweet, smart",
                        "message": ""
                    }
                ]
            },
            {
                "id": "1",
                "name": "Coda",
                "breed": "Sheepish",
                "maleFemale": "Male",
                "weight": "50",
                "wUnits": "lb",
                "ageYr": "8",
                "ageMn": "0",
                "dateEntered": "1/30/2022",
                "note": [
                    {
                        "id": "0",
                        "label": "No bubble",
                        "message": "Scared of everything"
                    }
                ]
            }
        ],
        "note": [
            {
                "id": "0",
                "label": "Dogs will run out",
                "message": ""
            }
        ]
    });
}

export const ProfileOne = () => {
    return ({
        id: "0",
        firstName: "Master",
        lastName: "Defender",
        email: "tyler",//"theOneTrue@groom.com",
        phone: [{
                phoneNumber: "(573) 334 - 9666",
                phoneType: "Cell",
                textable: true
            }],
        isPaid: true,
        accounts: [TuschhoffAccount(), McNallyAccount()]
    });
}