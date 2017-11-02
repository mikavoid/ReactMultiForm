export default function () {
    return [
        {
            "id": 0,
            "name": "Step 0",
            "depends_on": false,
            "next_condition": {
                "interet_general": "coucou"
            },
            "questions": {
                "default": [{
                        "id": "type_de_projet",
                        "label": "Catégorie de votre projet",
                        "type": "select",
                        "items": [
                            {text: "Culture", value:"Culture"},
                            {text: "Sport", value:"Sport"}
                        ],
                        "required": true
                    },
                    {
                        "id": "sport",
                        "label": "Sport",
                        "type": "textarea",
                        "placeholder": "Sport",
                        "row": 300,
                        "value": "Sporttsfbgrbgt"
                    },
                    {
                        "id": "check",
                        "label": "Un checkbox",
                        "type": "checkbox",
                        "items" : [
                            {text: "Le choix 1", value:"1"},
                            {text: "Le choix 2", value:"2", checked: true},
                            {text: "Le choix 3", value:"3", checked: true},
                            {text: "Le choix 4", value:"4"}
                        ]
                    },
                    {
                        "id": "interet_general",
                        "label": "Interet general",
                        "type": "radio",
                        "items" : [
                            {text: "Oui", value:"oui"},
                            {text: "Non", value:"non", checked: true}
                        ]
                    }
                ]
            }
        },

        {
            "id": 1,
            "name": "Step 2",
            "depends_on": ["type_de_projet"],
            "next_condition": false,
            "questions": {
                "culture": [{
                    "id": "culture",
                    "label": "Culture",
                    "type": "text",
                    "placeholder": "culture"
                }],
                "sport": [{
                    "id": "sport",
                    "label": "Sport",
                    "type": "text",
                    "placeholder": "Sport"
                }],
                "default": [{
                    "id": "default",
                    "label": "Default",
                    "type": "text",
                    "placeholder": "Default"
                }]
            }
        },



        // Modele
        {
            "id": 2,
            "name": "Step 1",
            "depends_on": false,
            "next_condition": {
                "interet_general": "coucou"
            },
            "questions": {
                "default": [{
                        "id": "interet_general",
                        "label": "Interet général",
                        "type": "text",
                        "placeholder": "blabla",
                        "required": true
                    },
                    {
                        "id": "select",
                        "label": "Un select",
                        "type": "radio",
                        "items" : [
                            {text: "Le choix 1", value:"1"},
                            {text: "Le choix 2", value:"2", selected: true},
                            {text: "Le choix 3", value:"3"},
                            {text: "Le choix 4", value:"4"}
                        ],
                        "multiple": false
                    },
                    {
                        "id": "radio",
                        "label": "Un radio",
                        "type": "radio",
                        "items" : [
                            {text: "Le choix 1", value:"1"},
                            {text: "Le choix 2", value:"2", checked: true},
                            {text: "Le choix 3", value:"3"},
                            {text: "Le choix 4", value:"4"}
                        ]
                    },
                    {
                        "id": "check",
                        "label": "Un checkbox",
                        "type": "checkbox",
                        "items" : [
                            {text: "Le choix 1", value:"1"},
                            {text: "Le choix 2", value:"2", checked: true},
                            {text: "Le choix 3", value:"3"},
                            {text: "Le choix 4", value:"4"}
                        ]
                    },
                    {
                        "id": "interet_general_2",
                        "label": "Interet général 2",
                        "type": "text",
                        "placeholder": "blabldfsga 2"
                    },
                    {
                        "id": "interet_general_3",
                        "label": "Interet général 3",
                        "type": "textarea",
                        "placeholder": "blabla 2"
                    }
                ]
            }
        }

        
    ]
}