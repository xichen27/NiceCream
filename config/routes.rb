Rails.application.routes.draw do
	root to: "static_pages#root"
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
  	resources :ice_creams
  	resources :reviews
  end
end

