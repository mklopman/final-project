class User < ApplicationRecord
	has_secure_password
	has_many :posts, :dependent => :destroy
	has_many :messages, :dependent => :destroy

has_secure_password
  before_validation :downcase_email
  validates :email,
      presence: true,
      uniqueness: true,
      format: {
        with: /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/,
        message: "Invalid email address"
      },
      length: {
        minimum: 5,
        message: "Huh? Shouldn't your email address be more than 5 characters?"
      }
  validates :password, presence: true
  validates :name, presence: true
  
  private
  def downcase_email
    self.email = email.downcase if email.present?
  end


end