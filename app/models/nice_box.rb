class NiceBox < ActiveRecord::Base
	validates :name, :user_id, presence: true

	has_many :refregiratings

	has_many(
		:refregirated_ice_creams,
		through: :refregiratings,
		source: :ice_cream
	)

	belongs_to: :user
end
