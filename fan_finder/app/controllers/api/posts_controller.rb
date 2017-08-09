class Api::PostsController < ApplicationController

def index
        @posts = Post.all
        render :json => {:posts => @posts}
end

def show
        @post = Post.find(params[:id])
        render :json => {:post => @post} 
end

def create 
        @post = Post.create(post_params) 
        if @post.valid?
           @post.save
           render :json => {:post => @post}
        else
           render json: @post.errors.full_messages, status: :unprocessable_entity
        end
end






private
	def post_params 
		params.permit(:title, :content, :team, :location, :event, :date, :user_id)
	end





end