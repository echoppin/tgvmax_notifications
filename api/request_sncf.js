const axios = require('axios');

async function get_price(body) {

    const response = await axios.post(
        'https://www.sncf-connect.com/bff/api/v1/itineraries', {
            'schedule': {
                'outward': {
                    'date': body.date,
                    'arrivalAt': false
                }
            },
            'mainJourney': {
                'origin': {
                    'id': body.origin_id,
                    'label': body.origin_label,
                    'geolocation': false,
                    'isEditable': true
                },
                'destination': {
                    'label': body.destination_label,
                    'id': body.destination_id,
                    'geolocation': false
                }
            },
            'passengers': [{
                'id': '8193f39d-446a-4551-b0b4-bd1d0d4d83c4',
                'age': 23,
                'dateOfBirth': '1999-01-02',
                'discountCards': [{
                    'code': 'TGV_MAX',
                    'number': '29090125515984649',
                    'label': 'MAX JEUNE'
                }],
                'typology': 'YOUNG',
                'displayName': '4 - 29 ans',
                'withoutSeatAssignment': false
            }],
            'pets': [],
            'itineraryId': '379ee45b-1e29-40d7-8974-adb033826740',
            'forceDisplayResults': true,
            'trainExpected': true,
            'wishBike': false,
            'strictMode': false,
            'directJourney': false,
            'metadataY': {
                'decisionAction': 'DESTINATION'
            }
        }, {
            headers: {
                'authority': 'www.sncf-connect.com',
                'accept-language': 'fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6',
                'cookie': 'x-visitor-id=fba9f9050ddb4f94c6296c48f85a5f10651; x-user-device-id=3ec56d2b-2ae8-428a-9614-c3d0116cf3af; _pin_unauth=dWlkPU1XVTVaRGxrT0RrdFlqVTFNeTAwWVRobExUaG1NV1F0T1dFNFkyVXdZekF4TUdNMA; country_code=AT; __Secure-cms-account=eyJpc0xvZ2dlZEluIjpmYWxzZX0=; x-correlationid=9631442d-da17-4782-a00d-8b9173ede1a2; _cs_ex=1665136153; _cs_c=1; _gcl_au=1.1.1280036467.1665827031; _MFB_=eyIzMDU3OCI6MTY2NTgyNzAzMX18eyI2NTI4MSI6MTY2NTgyNzAzMX18Mnx8fFtdfHx8MjkuMzAyODkwNzU0ODg2MzAyfA==; _tt_enable_cookie=1; _ttp=c6523eaf-0b10-4516-944c-a92865a9fd85; _clck=s4lurq|1|f5q|0; VARSESSION=edibenp001var; CMSSESSION=edimazp101cms; _uetsid=df5bada04c6d11ed86d767849c06aed7; _uetvid=6ac80650890611ecac1069df81ea7c12; _derived_epik=dj0yJnU9UG9ROWZkLWFvNHB4UGR4a3NMM1dZSjY4dEV3cGVFZ00mbj1qQVJGSlA3Vko2NDJxZGkzSEVYWFpRJm09MSZ0PUFBQUFBR05La3ZFJnJtPTEmcnQ9QUFBQUFHTktrdkU; cto_bundle=S6xSy19hQkIlMkJmVlZWTiUyQmt1UHJ1UkMyMEdyMFN3RDVmaUliZ09QaFYlMkIlMkJtS2lwZHZjUzFJaTJobnIzb2VCS0xBTDFkQ3RFVVB5dDd0RUtHeTRtOSUyQjJaclh2YmtCWlBWSGRweFR1a1diNUFYQTNURmlTaEpXVGtQRE50V1BiM0dzWCUyRk13ancwemcwWGZmZjhDQVklMkZYUURvQ05YZ2Z3UXhsRnpzazZ6NGJQWHlMbWFJUSUzRA; _clsk=1jufka7|1665831953883|19|0|a.clarity.ms/collect; ABTasty=uid=v3xp6qj96fe9w6na&fst=1665828982399&pst=1665828982399&cst=1665831491989&ns=2&pvt=26&pvis=14&th=890013.1108697.23.13.3.1.1665827028942.1665832839424.1_890014.1108700.17.14.2.1.1665827080503.1665832839433.1_890026.1108732.23.13.3.1.1665827028960.1665832839440.1_890027.1108735.17.14.2.1.1665827080510.1665832839443.1; ABTastySession=mrasn=&sen=59&lp=https%253A%252F%252Fwww.sncf-connect.com%252F; x-nav-session-id=7b05eee1-4711-4277-b868-705c0729392c|1665833155272|0|; datadome=DHA0yMmzASnwSIQpglxxfFcvJb-LFaa~Ef-SgxcnyCiw_8ZCpYZkbLLbiYXYQ6iZx~9LGpR5JDrCBRGI5owR9e9EqZaB5RI~a--ylkqNRFF5FRCKu.f78ZCtJSxk3qw; x-ivts-sas=84',
                'origin': 'https://www.sncf-connect.com',
                'referer': 'https://www.sncf-connect.com/app/home/shop/results/outward',
                'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                'x-api-env': 'production',
                'x-app-version': '20221011.0.0-2022101100-48b7523756',
                'x-attribution-referrer': 'https://www.sncf-connect.com/',
                'x-bff-key': 'ah1MPO-izehIHD-QZZ9y88n-kku876',
                'x-client-app-id': 'front-web',
                'x-client-channel': 'web',
                'x-con-ex': 'fbaefe708060d5e4b91985e2c884a5f8b70',
                'x-con-id': 'fba9f9050ddb4f94c6296c48f85a5f10651',
                'x-con-s': 'CPg47AAPg47AAAHABBENCkCsAP_AAH_AAAAAIPkEqCLMAWJiQWBoAOtAAQFYwAAiIEAABAAAAwABgAJAAKQAkmAIIAFABCAKAAAEICJAAQAkAADAAEAAAAEAACEAAAAIAAAABiAAAAAAAAAAAAAAAQAAAAAAgAAAAAAAgAAAAAIAAEAAAQAAJABAAAgkAADBAAAAwAAAAAAYAAAIACgAAAgfvAqAAQAAsAB4AFQAMgAcgA-AEAAMYAaABqADkAHkARABFACYAE-ALgAugBiAD1AH4AfwBCADRAIGAQUAhABFgCOAFXALqAYEA2gBxADyAI9AU0AvMBlgDTQGqgNYAcBA5MDlAHZgP3AIHQAYAAgkQQgAwABBIgpABgACCRAaADAAEEiBUAGAAIJECIAMAAQSICQAYAAgkQMgAwABBIgA.f_gAD_gAAAAA',
                'x-con-v': '91,210,google,c:facebook-yVzxAR44,c:snapinc-yhYnJZfT,c:tiktok-iJYQeF9m,284,c:omniture-adobe-analytics,281,27,c:contentsq-dd6Ffweb,c:microsoft,c:pinterest-gtgUFHnf,c:batch-LgBh7Kz7,c:sncfconne-4ra8mePH,c:webloyalty-DKjexkp4',
                'x-device-class': 'desktop',
                'x-device-os-version': 'Windows (10)',
                'x-instana-l': '1,correlationType=web;correlationId=7a898df5633e2c7b',
                'x-instana-s': '7a898df5633e2c7b',
                'x-instana-t': '7a898df5633e2c7b',
                'x-market-locale': 'fr_FR',
                'x-nav-current-path': '/app/home/shop/results/outward',
                'x-nav-previous-page': 'DevisAller',
                'x-visitor-type': '1'
            }
        }
    );

    console.log(response.data);
    return response.data
}

module.exports = { get_price }