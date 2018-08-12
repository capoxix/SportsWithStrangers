json.cities do
  @cities.each do |city|
    json.set! city.id do
      json.extract! city, :id, :name
    end
  end
end
