const attendee = {
 attendeeId: "T001",
 name: "Alice Smith",
 event: "JavaScript Conference",
 ticketType: "VIP",
 ticketPrice: 150.00
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
}

function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

function removeEventProperty(attendee) {
  delete attendee.event;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};