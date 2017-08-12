class Api::MessagesController < ApplicationController
  # before_action :require_user
  before_action :set_comment, only: [:update, :destroy]

  def index
    @messages = Message.all
    render :json => {:messages => @messages}
  end

  def create
    @message = Message.new(message_params)
    # if @message.valid?
    #    @message.save
    #    render :json => {:message => @message}
    # end
    # TODO: add back logic pased on post_id here and in the permits below
    # @post = Post.find(params[:message][:post_id])
    # unless @message.save
    #   flash[:message] = @message.errors.messages
    # end
    # redirect_back fallback_location: @post
  end

  def update
    unless @message.update(message_params)
      flash[:message] = @message.errors.messages
    end
    redirect_back fallback_location: @message.post
  end

  def destroy
    @message.destroy
    redirect_back fallback_location: @message
  end

  private
  def set_message
    @message = message.find(params[:id])
  end
  def message_params
    params.permit(:name, :message, :user_id)
    # params.require(:message).permit(:content, :user_id, :post_id)
  end
end