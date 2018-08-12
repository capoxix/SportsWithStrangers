export const getAllCities = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/cities`
  });
};

export const getAllCategories = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories`
  });
};
