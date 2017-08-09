class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
    	t.belongs_to :post, foreign_key: true, index: true
      	t.belongs_to :user, foreign_key: true, index: true
      	t.string :content
    end
  end
end
