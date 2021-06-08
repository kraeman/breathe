class CommentsController < ApplicationController

      def index
        comments = Comment.all
        hash = {}
        comments.each do |com|
          cid = com.id
          c = com.content
          mid = com.meditation_id
          hash[cid] = {}
          hash[cid]["text"] = c
          hash[cid]["meditation_id"] = mid
        end
        # byebug
        render json: hash
      end
    
      def show
        comment = Comment.find(comment_params[:id])
        render json: CommentSerializer.new(comment)
      end
    
      def create
        comment = Comment.new()
        comment.content = params["content"]
        comment.meditation_id = params['meditation_id']
        comment.save
        # byebug
          #errors
      
      end
    
      def update
        if comment.update(comment_params)
          render json: comment
        else
          #errors
        end
      end
    
      def destroy
        if comment.destroy
          render json: {message: "Comment destroyed"}
        else
          render json: {message: "Errors: #{comment.errors.full_messages}"}
        end
      end
    
      private
        def comment_params
          params.require(:comment).permit(:content)
        end

end
