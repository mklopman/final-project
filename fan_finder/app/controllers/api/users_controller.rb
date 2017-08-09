class UsersController < ApplicationController
  
	def show
    @user = User.find(params[:id]) 

  end

  def new 
    @user = User.new
    @users = User.all
  end

  def create 
    @user = User.new(user_params)
   if @user.save
     session[:user_id] = @user.id 
     redirect_to @user 
   else
     redirect_to '/signup' 
   end
 end
  

private
   def user_params 
     params.require(:user).permit(:name, :email, :password_digest)
   end


end