$(document).ready(function(){
  var tweetCount = 0; 
  var display = 0; 
  
  var $feedBody = $('.feedBody');
  var index = streams.home.length - 1;

  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    var timeCreated = streams.home[display].created_at;
    timeCreated = moment(tweet.created_at).fromNow();
    
    $tweet.addClass('tweetStyle');
    $tweet.html(
      "<div class='tweetContent'>" +
        "<div class='tweetAvatar'>" + 
          "<div class='avatar'>" + 
          "</div>" + 
        "</div>" + 
        "<div class='tweetBlock'>" + 
    
          "<span class='tweet_user'> " + "@" + tweet.user + "</span>" + ': ' + 
          "<span class='date'>" + timeCreated + "</span>" +
          "<span class='tweetText'>" + tweet.message + "</div></div>" +
          
        "</div>" +
      "</div>"
      );
    tweetCount++; 

    $tweet.appendTo($feedBody);
    index -= 1;
  }

});