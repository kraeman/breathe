class CommentsController < ApplicationController
      # def index
      #   comments = Comment.all
      #   hash = {}
      #   comments.each do |comment|
      #     comment_id = comment.id
      #     content = comment.content
      #     meditation_id = comment.meditation_id
      #     hash[comment_id] = {}
      #     hash[comment_id]["text"] = content
      #     hash[comment_id]["meditation_id"] = meditation_id
      #   end
      #   #serializer
      #   render json: hash
      # end
    
      def create
        comment = Comment.new()
        comment.content = comment_params["content"]
        comment.meditation_id = comment_params['meditation_id']
        if comment.save 
          # byebug
          render json: CommentSerializer.new(comment)
        end
      end
    
      private
        def comment_params
          params.require(:comment).permit(:content, :meditation_id)
        end

end
