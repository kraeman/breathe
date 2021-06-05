class MeditationSerializer
  include JSONAPI::Serializer
  attributes :title, :author, :audio

  def audio
    return rails_blob_path()
  end
  
end
