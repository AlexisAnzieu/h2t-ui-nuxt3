import { eventHandler, send } from 'h3';

export default eventHandler(async (req) => {
    try {
        const result = await fetch(`http://${process.env.STATIC_IP}:8080/api`);
        const data = await result.json();
        return send(req, JSON.stringify(data));
    } catch (error) {
        return send(req, JSON.stringify({ msg: 'Error' }));
    }
});