// $('.tweetButton').click(function() {

  $(document).ready(function(){
    var $feedBody = $('.feedBody');

    var tweetCount = 0; 
    var display = 0; 
    


    var index = streams.home.length - 1;
    var $generateTweet = $('.generateBtn')
    var $handler = $('.userLink')
    var $tweetContent = $('.tweet-Content');
    var $tweetAvatar = $('.tweetAvatar');
    var $avatar = $('.avatar');
    var $tweetBlock = $('.tweetBlock');
    var $tweetStyle = $('.tweetStyle');
    // $generateTweet.prependTo($feedBody);



     var loadTweets = function () {

      for (var i = 0; i < streams.home.length; i++) {
        var $tweet = $('<div class="tweetStyle"></div>');
        var tweet = streams.home[index];
        var timeCreated = streams.home[display].created_at;
        var timeCreatedMoment = moment(tweet.created_at).fromNow();
        // $('a').addClass("test");
        // $('a').attr({'user': tweet.user});
        // $('.userLink').data({this.user, tweet.user});
 
        // $tweet;
        // $tweet.addClass('tweetStyle');
        $tweet.html(
          "<div class='tweetContent'>" +
            "<div class='tweetAvatar'>" + 
              "<div class='avatar'>" + 
              "</div>" + 
            "</div>" + 
            "<div class='tweetBlock'>" + 
              "<span class='tweet_user'><a class='userLink'> " + "@" + tweet.user + "</a></span>" + ': ' + 
              "<span class='date'>" + timeCreatedMoment + "</span>" +
              "<span class='date mini'>  " + timeCreated + "</span>" +
              "<span class='tweetText'>" + tweet.message + "</span>" +
              
            "</div>" +
          "</div>"
        );

        tweetCount++; 

        $tweet.appendTo($feedBody);
        index -= 1;
      }
    }

    loadTweets()

    $('.generateBtn').on('click', function(event){
      location.reload();
    });

    $('.userLink').on('click', function() {
      var name = $(this).text().slice(2);
      $feedBody.html('');

      for (var i = 0; i < streams.home.length; i++) {
        var tweet = streams.home[i];
        if (tweet.user === name) {
          $tweet = $('<div class="tweetStyle"></div>');
          // $tweet.text('[' +  tweet.created_at + '] @' + tweet.user + ': ' + tweet.message);
          $tweet.html(
          "<div class='tweetContent'>" +
            "<div class='tweetAvatar'>" + 
              "<div class='avatar'>" + 
              "</div>" + 
            "</div>" + 
            "<div class='tweetBlock'>" + 
              "<span class='tweet_user'><a class='userLink'> " + "@" + tweet.user + "</a></span>" + ': ' + 
              "<span class='date'>" + moment(tweet.created_at).fromNow() + "</span>" +
              "<span class='date mini'>  " + tweet.created_at + "</span>" +
              "<span class='tweetText'>" + tweet.message + "</span>" + 
            "</div>" + 
          "</div>"
          );
          // $tweet.html();
          $feedBody.prepend($tweet);
        }
      }
    });

  });

// };
