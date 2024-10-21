import Ticket from '../models/ticket.model.js';

export default class TicketDAO {
    async createTicket(ticket) {
        const newTicket = new Ticket(ticket);
        return await newTicket.save();
    }

    async getTicketsByUserId(userId) {
        return await Ticket.find({ userId });
    }
}
