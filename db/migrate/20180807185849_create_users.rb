class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false, index: true
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true
      t.text :user_catchphrase
      t.text :user_description
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
