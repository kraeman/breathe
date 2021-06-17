class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :content, :meditation_id, :id
  belongs_to :meditation
end
