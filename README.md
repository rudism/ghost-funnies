#Funnies

A [Ghost](http://ghost.org) theme specifically tailored for webcomics. Currently compatible with all versions of Ghost up to and including 0.4.2.

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

##Notes

###Videos

If you want to post a video and have it be responsive, you need to wrap it in a couple extra divs.

    <div class="comic">
        <div class="video-wrapper">
            <div class="js-video vimeo widescreen">
                <!-- iframe embed code goes here -->
            </div>
        </div>
    </div>

The vimeo class on the inner div is optional (leave it out for Youtube videos) and the widescreen class is also optional (leave it out if the video you are embedding is not widescreen).

###Page Views

The asynchronous nature of this theme has the unfortunate side effect of double- or triple-counting entry page views if you're hosting on Ghost Pro. There are two entry flows that cause this, as follows:

1. User enters on index page (viewcount: 1), latest comic is retrieved asynchronously and displayed (viewcount: 2).
2. User enters on specific post (viewcount: 1), browser redirects to index page (viewcount: 2), specific post is retrieved asynchronously and displayed (viewcount: 3).

I'm not sure if there's an easy way to prevent this, or if that would even be permitted by Ghost Pro.

###Analytics

There is no analytics in the template by default, however you can add it to post.hbs, index.hbs, and integrate java event tracking into app.js if you desire. Keep in mind that the same double-counting issue explained in the previous section may apply here as well.

##Example

See my webcomic [Cectic](http://www.cectic.com) for a live example.

##Screenshot

![Screenshot](https://raw.githubusercontent.com/wiki/rudism/ghost-funnies/images/ghost-funnies-example.png)
