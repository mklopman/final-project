class Api::PostsController < ApplicationController

def index
  @posts = Post.order(:date)
  render :json => {:posts => @posts}
end

def show
  @post = Post.find(params[:id])
  render :json => {:post => @post} 
end

def create 
  @post = Post.new(post_params)
  puts params
  if @post.valid?
     @post.save
     render :json => {:post => @post}
  else
     render json: @post.errors.full_messages, status: :unprocessable_entity
        end
end

def destroy 
        @post = Post.find(params[:id])
        @post.destroy
        redirect_to "/posts" 
end


private
	def post_params 
		params.permit(:name, :title, :content, :team, :location, :event, :date, :user_id)
	end





end