import os
import subprocess

#script that uses pandoc to generate a single html file from markdown files in a directory

#to go around the generated html of each article
b1 = '<div class="block" id="b-index">' 
b2 = '</div>'

path = "../md Tech Blog/" #path of articles
template = open("./template.html").read()

#generated html goes in between of these two parts
t1 = template[:template.find("<!---->")] #first part of html template
t2 = template[template.find("<!---->")+8:] #second pard of html template

articles = os.listdir(path)
code = t1

for filename in articles:
    if filename.endswith(".md") or filename.endswith(".txt"):
        #pandoc = subprocess.Popen(['pandoc', path + filename], stdout = subprocess.PIPE)
        #output = str(pandoc.communicate())
        output = subprocess.check_output(['pandoc', path + filename], universal_newlines=True)
        print(output)
        code = code + b1 + output + b2

code = code + t2

f = open("index.html", "w")
f.write(code)
f.close()