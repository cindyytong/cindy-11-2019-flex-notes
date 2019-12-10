require 'byebug'
######### Week 4 Day 2 #########

################################## 
# Core Concepts:
################################## 
# Study guide: https://open.appacademy.io/learn/swe-in-person-nyc/ruby/study-guide---ruby-2
# 1. Object Oriented Programming 
# A. Encapsulation
    # Good reading: https://stackoverflow.com/questions/3534449/why-does-ruby-have-both-private-and-protected-methods 

    # a. private - only used within the class definition for specific instance, must be invoked on implicit receiver (i.e. (self).method(args))
    # b. protected - can be called on different instances of the same class, can be called with or without an explicit receiver but the receiver is always of the same family
    # c. order methods by public, protected then private and alphabetically for each section  
# B. Inheritance 
    # Subclass receives everything from the parent class
    # We can overwrite methods that are inherited 
    # Modules are used to keep code dry and share across classes 
        ## - include modules with instance variables 
        ## - extend modules with class variables 
    # Super 
        ## - additional resource: https://medium.com/rubycademy/the-super-keyword-a75b67f46f05 
# 2. Error Handling
    # raise by default will return a RuntimeError 
    # begin ... end - specifies code that needs to run on its own; def...end is a begin ... end block  
    # rescue - can specify which errors to rescue, takes a single argument, default is StandardError 
    # ensure - code that always runs  
    # retry - returns to begin and re-executes codde 
# 3. Projects 
    # a. error handling 
    # b. Chess 
        ## Singleton 
        ## Board#initialize

################################## 
#1A. Encapsulation 
################################## 
class Receiver
  def public_message
    p "This is a public message"
  end

  def self_private_message 
    self.private_message
  end

  def access_private 
    puts self 
    private_message  
  end 

  def self_protected_message 
    self.protected_message
  end

  def access_protected 
    puts self 
    protected_message 
  end 

  protected 
  def protected_message 
    puts "This is a protected message"
  end 

  private
  def private_message
    puts "This is a private message"
  end
end
 
## setter methods 

# class Dog 
#     def initialize(name, age)
#         @name = name 
#         @age = age
#     end

#     def bark 
#         puts "woof"
#     end 

#     def rename(new_name)
#         self.name = new_name  
#     end 

#     def compare_age(other_dog)
#         age > other_dog.age 
#     end 

#     protected 
#     attr_reader :age 

#     private 
#     attr_reader :name 
#     def name=(new_name)
#         @name = new_name 
#     end 
# end 

# ################################## 
# #1B. Inheritance 
# ################################## 
# module Walkable 
#     def walk
#         puts 'From Walkable: I like walking in the morning' 
#     end 
# end 

# class Dog  
#     # include Walkable  
#     attr_reader :color 
#     def initialize(color)
#         @color = color 
#     end 

#     def walk 
#         puts "From Dog Class: I like walking"
#     end 
#     include Walkable
# end 

# blue = Dog.new("blue")
# blue.walk  # From Yorkie Class: I like walking

# ################################## 
# # 2. Errors:
# ################################## 
class CustomError < ArgumentError 
end 

def get_input
    input = gets.chomp 
    raise CustomError.new("Wrong password!") unless input == '1234'
end 

def enter_password 
    begin
        puts "whats the password"
        get_input 
    rescue CustomError, NotImplementedError => e # only one error is rescued at one time 
        puts e.message 
        # retry 
    ensure puts "this code always runs"
    end
    puts "thanks"
end 


################################## 
#3. Projects 
################################## 

# Singleton 
    # Docs: https://ruby-doc.org/stdlib-2.5.1/libdoc/singleton/rdoc/Singleton.html 

require 'singleton'

class NullPiece 
    include Singleton 
end 

# piece = NullPiece.new 
# piece2 = NullPiece.instance 
# piece3 = NullPiece.instance 
# piece2 == piece3