###############################################################################
#                         VMI IMPORT SCRIPT GENERATOR
#
# 1. Run:         gem install rubyXL      //ASUMES YOU HAVE RUBYGEMS INSTALLED
# 2. Run Script:  ruby importer.rb
# 3. Outputs files to ./output/table_name.json
#
###############################################################################


require 'rubygems'
require 'rubyXL'
require 'json'

workbook = RubyXL::Parser.parse("./config-file.xlsx")
output_path = './output/'

workbook.each_with_index do |worksheet, index|
  puts "Begin Rendering '#{worksheet.sheet_name}'"
  table      = worksheet.get_table[:table]
  table_name = worksheet.sheet_name.downcase.gsub(/\s/, '-')
  # REMOVE HEADERS
  table.shift
  json = table

  puts "Saving  '#{worksheet.sheet_name}' to './output/#{table_name}'\n\n"
  File.open("#{output_path}#{table_name}.json", "w+") do |f|
    f.puts(json)
  end
end
