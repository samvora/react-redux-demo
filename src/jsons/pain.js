export const questions = {
    id:1,
    question: "Do you have any of these symptoms?",
    descriptions: [
        "Fever >100.3",
        "Chest Pain",
        "Shortness of Breath",
        "Dizziness",
    ],
    options: [
        {
            id:2,
            label: 'Yes',
            answer: {
                title: 'Group A',
                descriptions: [
                    "Urgent Care",
                    "Emergency Room",
                ],
            }, options: [],

        },
        {
            id:3,
            label: 'No',
            answer: null,
            question: 'How long have you had shoulder pain for?',
            options: [
                {
                    id:4,
                    label: 'Less than 3 weeks',
                    answer: {
                        title: 'Group B',
                        descriptions: [
                            "Primary Care Physician",
                            "Physical Therapist",
                            "Acupuncturist",
                        ],
                    }, options: [],
                },
                {
                    id:5,
                    label: 'More than 3 weeks',
                    answer: null,
                    question: 'Which statement is most accurate?',
                    options: [
                        {
                            id:6,
                            label: 'I am interested in undergoing a surgical procedure in the near future.',
                            answer: {
                                title: '',
                                descriptions: [
                                    "Shoulder Surgeon",
                                    "Ortho Sports Medicine",
                                ],
                            }, options: [],
                        },
                        {
                            id:7,
                            label: 'I am not considering surgery at this time',
                            answer: null,
                            question: 'Which statement is most accurate?',
                            options: [
                                {
                                    id:8,
                                    label: 'I am looking for conservative type treatments such as manual or massage therapy, stretching, and exercises',
                                    answer: {
                                        title: 'PT',
                                    },
                                    options: [],
                                },
                                {
                                    id:9,
                                    label: ' I am looking to undergo diagnostic imaging studies (MRI/xray) or be prescribed medications for my condition.',
                                    answer: {
                                        title: 'PMR, Sports Med (FM), Pain Management',
                                    }, options: [],
                                },
                                {
                                    id:10,
                                    label: 'I am not sure what type of treatment I am looking for',
                                    answer: {
                                        title: 'PMR, Sports Med, Pain Management',
                                    }, options: [],
                                },
                            ]
                        }

                    ]
                }
            ]

        }
    ]

}