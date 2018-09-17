export const getFilteredEvents = ({events, cityId}) => {
  let result = [];
  for (let id in events) {
  	if (events[id].city_id === cityId) {
  		result.push(events[id]);
  	}
  }
  return result;
};

export const getHostedEvents = ({events, currentUser}) => {
  let result = [];
  for (let id in events){
    if(events[id].user_id === currentUser.id) result.push(events[id]);
  }

  return result.sort(function (a,b){
    return new Date(a.date_time).getTime() - new Date(b.date_time).getTime();
  });
};

export const getJoinedEvents = ({events, currentUser, joinedEvents}) => {
  let result = [];

  for (let id in joinedEvents){
    let joinEvent = joinedEvents[id];

    for(let eventId in events) {
      if(joinEvent.event_id == eventId){
        let eventwithJoinEventId = Object.assign({}, events[eventId], {joinId: id});
        result.push(eventwithJoinEventId);
      }
    }
  }
  return result.sort(function (a,b){
    return new Date(a.date_time).getTime() - new Date(b.date_time).getTime();
  });
};

export const getWaitlistedEvents = ({events, currentUser}) => {
  let result = [];
  for (let id in events){
    if(currentUser.waiting_event_ids.includes(events[id].id))
    result.push(events[id]);
  }
  return result.sort(function (a,b){
    return new Date(a.date_time).getTime() - new Date(b.date_time).getTime();
  });
};
