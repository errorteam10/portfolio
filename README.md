
# portfolio
This is a professional portfolio template made by Brent Dalling. Below we will show you how to use it. 
(A lot of data elements and so forth.)

# Installation

Extract the project folder to the desired directory / upload to your webhost. This is important so that people can find your website.

# Requirements 
There are some requirements for this project. They are already included in the files. However, if you need them, they are listed below.

[Bootstrap 4](http://getbootstrap.com)
[Jquery](http://jquery.com)
[Font Awesome](http://fontawesome.com)

# Editing
Everything in the custom CSS file and JS file is fully editable.  You should have knowledge into how web development basics work before you begin editing these files as small changes may break it. So let's dive in. 

## core.js
In the core.js file, you will notice a bunch of simple methods and listeners. On page load, anything requiring attributes launches. For example, background images, href's, button obfuscation, and more immediately are executed. Because of this, you may want a loader image to start the page with. But below I will show you how to use these pre-built listeners and methods to add dynamic elements to your application.

### Background Images
Background images make parts of our site look good such as backgrounds or content. We make it really easy to change the background images without diving into the CSS files and sifting through the code. To change a background image, simply add the below code to any HTML element you want the image on.

	data-background-image="//<image-address-here>"
To The HTML like so:

	<div data-background-image="//<image-address-here>" class="<your-class-here>">
		 <!-- Div Content Here --> 
	</div>


### A Href Links
In HTML, links are given to a small number of elements. Usually href tags. We refer to a link such as href="#something". because only a href tags can "link" to another element. It makes it hard to style and structure what you need. However, in our project, we have made a simple method that looks for the **data-link** attribute and applies click actions to the attributes parent. That means cards, images, text, can all be links without utilizing the a href tag. Simply add the below code to any HTML element.

	data-link="#something"
or 
	`
