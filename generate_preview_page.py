#! /home/nginx/preview_generator/.venv/bin/python
import csv
from jinja2 import Environment, FileSystemLoader

# Load the CSV file
data = []
with open('./banner_list.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        data.append(row)

# Set up Jinja2 environment
env = Environment(loader=FileSystemLoader('.'))
template = env.get_template('./templates/template_nova.html')

# Render the template with data
output = template.render(
    cliente='BANCO DO BRASIL',
    campanha='SKATE - POS-EVENTO',
    periodo='JULHO/2025',
    rows=data
)

# Save the output to a file
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(output)
