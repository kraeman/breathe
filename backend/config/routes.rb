Rails.application.routes.draw do
  resources :comments
  resources :meditations
  post '/audio', to: "meditations#attach_audio"
  
end
