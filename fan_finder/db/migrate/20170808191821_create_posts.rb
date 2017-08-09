class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
    	t.belongs_to :user, foreign_key: true, index:true
      	t.string :title
      	t.string :content
      	t.string :team
      	t.string :event
      	t.string :date
      	t.string :location
    end
  end
end
