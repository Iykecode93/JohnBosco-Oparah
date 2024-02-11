import emailJs from '@emailjs/browser';

const client = emailJs({
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    public_key: process.env.PUBLIC_KEY,
});

export default client;