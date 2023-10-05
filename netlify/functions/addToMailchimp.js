const axios = require('axios');
require('dotenv').config();

exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { email, name, result } = JSON.parse(event.body);

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID;
    const serverPrefix = apiKey.split('-')[1];

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members/`;

    try {
        const response = await axios.post(url, {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: name,
                // Add other merge fields if needed
            }
        }, {
            headers: {
                Authorization: `apikey ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        // Handle segment logic based on the 'result' here if needed

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Added to Mailchimp successfully!" })
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response.status : 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};
