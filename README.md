### React Photo App 
## Requirements:
    User Details

    When viewing the details of a user, the user detail page should include the following: 

    The most recently uploaded photo. There should be a small thumbnail image of the photo and the date it was uploaded. 

    The photo of the user that has the most comments on it. There should be a small thumbnail of the photo and the comments count.

    A user should be able to delete any of the things that he or she owns on the site. This includes:

    Any of hers/his/their photos
    Any comments that she/he/they have made (this includes comments made on other users’ photos)
    The entire user account. If the user chooses to delete her/his/their account, there should be a final warning prompt, followed by the user being logged out and all the details of his/her account destroyed from the database. This means that, in addition to the User object being destroyed, you should also handle the deleting of all photos and comments created by this user. Essentially, we will treat the user as never having existed in the first place. Other things added for other stories implemented (e.g. activities, visibility, mentions, etc) should also be covered.
    Hints:
    When a user deletes various objects, you need to consider any associated information that must also be deleted. This will be done on the server and you may have to do some research into how to properly destroy objects with associations. 
    Make sure a user can’t delete anything that he or she does not own.
    

    User Story
    Implement a like button for each photo to allow the user to like the photo. It can be a button, icon or whatever you like.
    Clicking on the like button makes the user like the photo (and visually changes the like button to an unlike button). Clicking the unlike button on a photo that has already been liked by the same user should unlike the photo.
    The number of likes of a photo should never be greater than the total number of users.
    If a user has already liked a photo, there should be some sort of visual indication on the page that the user has already liked the photo. This visual indication should be removed if the user unlikes the photo.
    Next to the like button, it should display the number of likes for that photo. This count should be updated (visually) immediately upon liking or unliking the photo.
    A user’s photos page should be sorted by the number of likes in descending order (most liked photos at the top). If photos have the same number of likes, sort by the timestamp in reverse chronological order (most recent first). This doesn’t need to change immediately when a user likes / unlikes a photo - you are allowed to wait until the page refreshes.
    Favorite list of photos for users
    A logged-in user should be able to favorite photos and have a user-specific list of favorites appear on a new page (path: /favorites). That page should be dedicated to showing a list of favorited photos of that user. Users should be able to remove favorited photos from that list.

    Users should be able to intuitively mark any photo as favorite by clicking on a button appearing next to any photo shown on any user's list of photos.

## Prototyping
    1.Log in/Sign-up
        Create a separate component, LogIn/SignUp, write class and extends React.Component, in return have two divs; first div is for log in , second will have Sign Up button linked to Sign up page, Log in div will have form with the following fields: Log in, Password and a submit Button;
        