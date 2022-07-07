# Portfolio Website

This is a digital portfolio showcasing my work as a graphic designer and a developer-in-training.

## Planning

When starting this project, I thought it would be best to start off with a digital prototype to design my portfolio site.
I wanted to spend time thinking about what design would be represent my current brand as a professional.
I thought I would also take the opportunity to not just think of this as a portfolio for my development work, but also for my graphic design work.

This is what I came up after designing:

<img src="./images/homepage.png" alt="May be a homepage design" width="200">
<img src="./images/about-me.png" alt="May be a about me page design" width="200">
<img src="./images/projects.png" alt="May be a projects page design" width="200">
<img src="./images/contact.png" alt="May be a contact page design" width="200">

## Implementation

With my digital prototype at hand, I had a clear goal for the implementation of the HTML and CSS.
I kept all my content within semantic tags, and used non-semantic tags (e.g., divs) to group elements together for CSS.
For the stylesheet, I used SCSS to create different modules and partials to keep my code as clean as I could.
I created different modules for the pages, and with the majority of the style established in the homepage, I only had to make minor adjustments to the styling for the other pages.
I also created modules for elements that would be the same across the site, such as the headings and the buttons, which was useful in maintaining consistency in the design.

I was quite challenged with implementing responsive design for the site as I didn't think about what it would look like on smaller screens.
One example of this challenge was with my contact links. In the desktop version, my contact links were fixed on the bottom-right corner of the screen.
However, for smaller screens (and portrait orientation), having this aside section in the bottom-right corner did not make sense visually and practically, as I wouldn't have wanted users to accidentally click on a link.

I was also quite challenged with creating modular code with my CSS. There were times where I felt as though some style declarations for the same element across multiple files.
However, considering that this was my first time using SCSS, I think I was able to be fairly consistent with writing modular code.

I also decided to leave out the illustrations section of my projects page. This was because I felt that this section would not be adding much to my portfolio.
