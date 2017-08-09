Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	namespace :api do 
		resources :users 
		resources :posts  
		resources :messages, only:[:create, :update, :destroy]
	end
end
