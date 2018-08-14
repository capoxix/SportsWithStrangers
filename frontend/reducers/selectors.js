export const getFilteredEvents = ({events, cities}) => {
  let result = [];
  for (let id in events) {
  	if (events[id].done === cities) {
  		result.push(events[id]);
  	}
  }
  return result;
};
