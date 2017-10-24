module Api::V1
  class StoriesController < ApplicationController
    def index
      @stories = Story.order('created_at DESC')
      render json: @stories
    end

    def create
      @story = Story.create(story_params)
      render json: @story
    end

    def update
      @story = Story.find(params[:id])
      @story.update_attributes(story_params)
      render json: @story
    end

    def destroy
      @story = Story.find(params[:id])
      if @story.destroy
        head :no_content, status: :ok
      else
        render json: @story.error, status: :unprocessable_entity
      end
    end

    private
      def story_params
        params.require(:story).permit(:title, :body)
      end
  end
end
