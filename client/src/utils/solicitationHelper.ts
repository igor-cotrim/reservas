import { reservationApiModel, reservationModel } from "@/models";

export const formatReservationData = (
  reservation: reservationApiModel
): reservationModel => {
  return {
    id: reservation.id,
    title: reservation.attributes?.title,
    start: new Date(reservation.attributes.start),
    end: new Date(reservation.attributes.end),
    isSemester: reservation.attributes.isSemester,
    status: reservation.attributes.status,
    ambience: {
      id: reservation.attributes.ambience?.data.id!,
      value: reservation.attributes.ambience?.data.attributes.value!,
      availability:
        reservation.attributes.ambience?.data.attributes.availability!,
      numberOfMachines:
        reservation.attributes.ambience?.data.attributes.numberOfMachines,
      peopleCapacity:
        reservation.attributes.ambience?.data.attributes.peopleCapacity,
    },
    requester: {
      id: reservation.attributes.requester?.data.id!,
      name: reservation.attributes.requester?.data.attributes.username!,
      type: reservation.attributes.requester?.data.attributes.type!,
    },
  };
};

export const getStatusStyleAndText = (status: string) => {
  let statusClass = "";
  let statusText = "";

  if (status === "approved") {
    statusClass = "text-green-400";
    statusText = "Aprovado";
  } else if (status === "pending") {
    statusClass = "text-orange-400";
    statusText = "Pendente";
  } else {
    statusClass = "text-red-400";
    statusText = "Reprovado";
  }

  return { statusClass, statusText };
};
