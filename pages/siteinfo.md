---
permalink: /siteinfo/
layout: page
title: "Site Info | K. Sreeman Reddy"
subheadline: "Home for all things about and by K. Sreeman Reddy (KSR)."
header:
  image_fullwidth: header.jpg
breadcrumbs: true
---
The main purpose of this site is to maintain some academic and non academic things related to me. You can contact me using the links given in the footer. This is an upgrade over my <a href="{{site.baseurl}}/oldsite" target="_blank">old site</a>.

This site is made using <a href="https://github.com/Phlow/feeling-responsive" target="_blank">Feeling Responsive</a> and <a href="https://github.com/TWiStErRob/twisterrob.github.io" target="_blank">TWiStErRob</a> which are based on <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>

<div class="small-6 medium-3 large-3 large-offset-1 columns">
{% for service_item in site.data.services %}
	{% if forloop.first == true %}
		<h5 class="shadow-black">{{ service_item.menu_name }}</h5>
	{% endif %}
{% endfor %}
	
<ul class="no-bullet shadow-black">
{% for service_item in site.data.services %}
	{% if service_item.url contains 'http' %}{% assign domain = '' %}{% else %}{% assign domain = site.baseurl %}{% endif %}
	<li {% if service_item.class %}class="{{ service_item.class }}" {% endif %}>
		<a href="{{ domain }}{{ service_item.url }}" {% if service_item.url contains 'http' %}target="_blank" {% endif %} title="{{ service_item.title }}">{{ service_item.name }}</a>
	</li>
{% endfor %}
</ul>
</div>