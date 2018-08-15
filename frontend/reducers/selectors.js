export const getFilteredEvents = ({events, cityId}) => {
  let result = [];
  for (let id in events) {
  	if (events[id].city_id === cityId) {
  		result.push(events[id]);
  	}
  }
  return result;
};
