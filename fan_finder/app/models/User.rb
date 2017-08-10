class User < ApplicationRecord
	has_secure_password
	has_many :posts, :dependent => :destroy
	has_many :messages, :dependent => :destroy

has_secure_password

  # we want there to be a unique, secure token for each user
  has_secure_token :auth_token

  # down case the email before validation to ensure uniqueness
  before_validation :downcase_email

  # make sure there is a password confirmation
  validates :password_confirmation, presence: true
  validates :password, confirmation: true, presence: true

  # make sure the email is the correct format, unique, and present
  validates :email,
    presence: true,
    uniqueness: true,
    format: {
      with: /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/,
      message: "Invalid email address"
    }

  # make sure there is a name
  validates :name, presence: true

  def json_hash
    {
      :name => self.name,
      :email => self.email,
      :token => self.auth_token,
      :id => self.id
    }
  end

  private

  def downcase_email
    self.email = email.downcase if email.present?
  end

end