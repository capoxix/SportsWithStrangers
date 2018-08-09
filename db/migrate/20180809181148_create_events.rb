class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.integer :user_id, null: false, index:true
      t.integer :city_id, null: false, index: true
      t.integer :category_id, null: false, index: true
      t.datetime :date_time, null: false
      t.string :address, null: false
      t.string :country, null: false
      t.text :description, null: false
      t.integer :num_of_members, null: false
    end
  end
end
