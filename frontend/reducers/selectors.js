export const getFilteredEvents = ({events, cityId}) => {
  let result = [];
  for (let id in events) {
  	if (events[id].city_id === cityId) {
  		result.push(events[id]);
  	}
  }
  return result;
  //array of events where city matches given city
};

export const getHostedEvents = ({events, currentUser}) => {
  let result = [];
  for (let id in events){
    if(events[id].user_id === currentUser.id) result.push(events[id]);
  }

  return result;
};

export const getJoinedEvents = ({events, currentUser}) => {
  let result = [];
  for (let id in events){
    if(currentUser.attending_event_ids.includes(events[id].id))
    result.push(events[id]);
  }
  return result;
};

export const getWaitlistedEvents = ({events, currentUser}) => {
  let result = [];
  for (let id in events){
    if(currentUser.waiting_event_ids.includes(events[id].id))
    result.push(events[id]);
  }
  return result;
};
