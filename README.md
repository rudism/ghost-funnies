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

##Notes

If you want to post a video and have it be responsive, you need to wrap it in a couple extra divs.

    <div class="comic">
        <div class="video-wrapper">
            <div class="js-video vimeo widescreen">
                <!-- iframe embed code goes here -->
            </div>
        </div>
    </div>

The vimeo class on the inner div is optional (leave it out for Youtube videos) and the widescreen class is also optional (leave it out if the video you are embedding is not widescreen).

##Example

See my webcomic [Cectic](http://www.cectic.com) for a live example.

##Screenshot

![Screenshot](https://raw.githubusercontent.com/wiki/rudism/ghost-funnies/images/ghost-funnies-example.png)
