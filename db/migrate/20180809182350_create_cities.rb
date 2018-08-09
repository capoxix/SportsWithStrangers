class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.string :name, null: false
    end
  end
end
