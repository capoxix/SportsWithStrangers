export const createWaitlist = waitlist => {
  return $.ajax({
    method: "POST",
    url: "/api/waitlists",
    data: {waitlist}
  });
};
