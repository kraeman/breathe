class MeditationSerializer
  include JSONAPI::Serializer
  attributes :title, :audio, :comments, :id
end
