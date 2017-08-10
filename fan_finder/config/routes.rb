Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	namespace :api do 
		resources :posts  
		resources :messages, only:[:create, :update, :destroy]
		get "/api/users/validate", to: "api/users#validate"
  		post "/api/users", to: "api/users#create"
  		post "/api/login", to: "api/sessions#create"
	end
end
