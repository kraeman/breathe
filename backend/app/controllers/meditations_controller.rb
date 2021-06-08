class MeditationsController < ApplicationController
      def index
        meditations = Meditation.all
        # array = []
        innerHash = {}
        meditations.each do |med|
          id = med.id
          r = med.audio
          audio = Rails.application.routes.url_helpers.rails_blob_url(r, only_path: true)
          innerHash[id] = audio
        end
        # byebug
        render json: {message: "Attached to File", med_hash: innerHash}

      end
    
      def show
        meditation = Meditation.find(meditation_params[:id])
        render json: meditation
      end
    
      def create
        # byebug
        meditation = Meditation.new()
        # byebug
        meditation.audio.attach(params["audiozzzzzzz"])
        if meditation.save
        # byebug
        
          render json: {id: meditation.id}
        end
      end
    
      def update
        meditation = Meditation.find(meditation_params[:id])
        if meditation.update(meditation_params)
          render json: meditation
        end
      end
    
      def destroy
        # byebug
        meditation = Meditation.find(params[:id])
        meditation.destroy
      end

      def attach_audio
        meditation = Meditation.find(params[:id])
        a = meditation.audio.attach(meditation_params[:audio])
        url = Rails.application.routes.url_helpers.rails_blob_url(a.first, only_path: true)
        render json: {message: "Attached to File", url: url}
      end
    
      private

        def meditation_params
          params.require(:meditation).permit(:text, :audio, :id)
        end
end
