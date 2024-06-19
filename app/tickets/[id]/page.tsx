import React from "react";
import prisma from "@/prisma/db"; // Ensure this path is correct
import TicketDetail from "./TicketDetail";

interface Props {
  params: { id: string };
}

const ViewTicket = async ({ params }: Props) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!ticket) {
      return <p className="text-destructive">Ticket Not Found!</p>;
    }

    const users = await prisma.user.findMany();

    return <TicketDetail ticket={ticket} users={users} />;
  } catch (error) {
    console.error(error);
    return (
      <p className="text-destructive">
        An error occurred while fetching the ticket.
      </p>
    );
  }
};

export default ViewTicket;
