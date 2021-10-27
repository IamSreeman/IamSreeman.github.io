---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
permalink: /index.html
layout: frontpage
header:
 image_fullwidth: header.jpg
widget1:
  title: "Projects"
  url: /projects/
  image: projects.jpg
  text: "Check out my projects."
widget2:
  title: "About"
  url: /about/
  image: me.jpg
  text: "Check out to know about me."
widget3:
  title: "Notes"
  url: /notes/
  image: notes.png
  text: "Check out my notes."
---
<div style="text-align: center">
	<p align="center">
		Hi, this is a personal website of <a href="{{site.baseurl}}/about" >K. Sreeman Reddy</a>. Check out the <a href="{{site.baseurl}}/projects">projects</a> page. Other links are there in the navigation bar. For MA 109 resources check the <a href="{{site.baseurl}}/MA109">MA109 page</a>. You can find some <a href="{{site.baseurl}}/quotes">quotes here</a>.
	</p>
</div>