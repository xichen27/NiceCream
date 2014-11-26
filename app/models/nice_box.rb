class NiceBox < ActiveRecord::Base
	validates :name, :user_id, presence: true

	has_many :refrigeratings

	has_many(
		:refrigerated_ice_creams,
		through: :refrigeratings,
		source: :ice_cream
	)

	belongs_to :user
end
