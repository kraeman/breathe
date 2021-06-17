class MeditationSerializer
  include JSONAPI::Serializer
  attributes :title, :audio, :comments, :id

  # def audio
  #   return rails_blob_path()
  # end
  
end
