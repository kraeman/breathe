class MeditationSerializer
  include JSONAPI::Serializer
  attributes :title, :author, :audio
  
end
