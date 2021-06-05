class MeditationsController < ApplicationController
      def index
        meditations = Meditation.all
        array = []
        meditations.each do |med|
          r = med.audio
          audio = Rails.application.routes.url_helpers.rails_blob_url(r, only_path: true)
          array << audio
        end
        byebug
        render json: {message: "Attached to File", audio_array: array}

      end
    
      def show
        meditation = Meditation.find(meditation_params[:id])
        render json: meditation
      end
    
      def create
        # byebug
        meditation = Meditation.new()
        meditation.audio.attach(params["audiozzzzzzz"])
        meditation.save
        # byebug
        # url = Rails.application.routes.url_helpers.rails_blob_url(r.first, only_path: true)
        # render json: {message: "Attached to File", url: url}
      end
    
      def update
        meditation = Meditation.find(meditation_params[:id])
        if meditation.update(meditation_params)
          render json: meditation
        end
      end
    
      def destroy
        meditation = Meditation.find(meditation_params[:id])
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
          params.require(:meditation).permit(:text, :audio)
        end
end
