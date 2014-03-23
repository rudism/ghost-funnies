#Funnies

A [Ghost](http://ghost.org) theme specifically tailored for webcomics.

- Minimal
- Single page (uses [historyjs](http://historyjs.net) for state management)
- Responsive

To use, you must set your posts-per-page to a number greater than the total number of posts you have (or will ever have). The theme works by loading all of your post urls into a javascript array, and loading each one as-needed when the user clicks the navigation buttons.

Each post must have a div with the class "comic" which contains the actual comic image. For example:

    <div class="comic">
        ![My Comic](/mycomic/url.png)
    </div>
    
    This is the post associated with the above comic.

The content of that div will be pulled out of the post and placed between the top and bottom comic navigation controls. The remainder of the post will be placed below the bottom navigation control.
