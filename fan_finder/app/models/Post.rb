class Post < ApplicationRecord
	validates :title, presence: true
	validates :team, presence: true
	validates :location, presence: true
	validates :event, presence: true
	validates :user_id, presence: true
	validates :content, presence: true
	validates :name, presence: true


	belongs_to :user
	has_many :messages, :dependent => :destroy







end

