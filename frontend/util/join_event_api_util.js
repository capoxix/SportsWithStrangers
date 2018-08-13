export const createJoinedEvent = joined_event => {
  return $.ajax({
    method: "POST",
    url: "/api/joined_events",
    data: {joined_event}
  });
};

export const deleteJoinedEvent = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/joined_events/${id}`,
  });
};

// export const getJoinedEvent = (user_id) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/joined_events/${user_id}`,
//   });
// };
