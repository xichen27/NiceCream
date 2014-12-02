class IceCream < ActiveRecord::Base

	validates :flavor, :creamery_id, presence: true

	has_many :reviews

	has_many(
		:reviewers,
		through: :reviews,
		source: :user
	)

	has_many :refrigeratings

	has_many(
		:nice_boxes,
		through: :refrigeratings,
		source: :nice_box
	)

	has_many(
		:fans,
		through: :nice_boxes,
		source: :user
	)

	belongs_to :creamery
end
