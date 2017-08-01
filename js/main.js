
$( document ).ready(function() {

  function voicePlay(text){
    if(responsiveVoice.voiceSupport()) {
    responsiveVoice.speak(text);
    }  //checks to see if browser supports text to speech
  }  //close voicePlay function - converts string to audible speech



  var output = document.getElementById('output');
  var frameString = "", handString = "", fingerString = "";
  var hand, finger;

  var l = null;
  var r = null;



  Leap.loop(function(frame){

    // var crossProduct = Leap.vec3.create();
    // var direction = hand.direction;
    // var normal = hand.palmNormal;
    //
    // Leap.vec3.cross(crossProduct, direction, normal);

    frameString = concatData("frame_id", frame.id);
    frameString += concatData("num_hands", frame.hands.length);

    if( frame.hands.length > 1 ){
      frameString += concatData("hands[0].type", frame.hands[0].type);
      frameString += concatData("hands[1].type", frame.hands[1].type);

      if( frame.hands[0].type === "left") {
        l = frame.hands[0];
        r = frame.hands[1];
      } else {
        l = frame.hands[1];
        r = frame.hands[0];
      }

    } else if( frame.hands.length > 0 ){
      frameString += concatData("hands[0].type", frame.hands[0].type);

      if( frame.hands[0].type === "left") {
        l = frame.hands[0];
        r = null;
      } else {
        r = frame.hands[0];
        l = null;
      }

    } else if( frame.hands.length === 0 ){
      l = null;
      r = null;
    }

    frameString += concatData("num_fingers", frame.fingers.length);
    frameString += "<br>";




    if(l && r){ // both l & r visible

      var lf = l.fingers;
      var rf = r.fingers;
      var lExtended = lf[0].extended && lf[1].extended && lf[2].extended && lf[3].extended && lf[4].extended
      var rExtended = rf[0].extended && rf[1].extended && rf[2].extended && rf[3].extended && rf[4].extended

      if (lExtended) {
        if (rf[1].extended && !rf[0].extended && !rf[2].extended && !rf[3].extended && !rf[4].extended) {

          var xdist = lf[0].tipPosition[0] - rf[1].tipPosition[0];
          var ydist = lf[0].tipPosition[1] - rf[1].tipPosition[1];
          var zdist = lf[0].tipPosition[2] - rf[1].tipPosition[2];
          var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

          console.log(dist);
          if ( dist < 20 ){
            frameString += 'YOU MADE THE LETTER "A" MOUTHFUCKER' + dist + '<br>';
            text = 'A'
            voicePlay(text)
          }
        } //LETTER A
      }

      // if(//LETTER A
      //   // all finger on L hand extended and index on R hand extended.
      //   (lf[0].extended && lf[1].extended && lf[2].extended && lf[3].extended && lf[4].extended && rf[1].extended)
      //   // no other fingers on R extended
      //   && (!rf[0].extended && !rf[2].extended && !rf[3].extended && !rf[4].extended)
      //   ){
      //   var xdist = lf[0].tipPosition[0] - rf[1].tipPosition[0];
      //   var ydist = lf[0].tipPosition[1] - rf[1].tipPosition[1];
      //   var zdist = lf[0].tipPosition[2] - rf[1].tipPosition[2];
      //   var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );
      //   console.log(dist);
      //   if ( dist < 20 ){
      //     frameString += 'YOU MADE THE LETTER "A" MOUTHFUCKER' + dist + '<br>';
      //     text = 'A'
      //     voicePlay(text)
      //   }
      //
      //   }
        if ( lf[2].extended && lf[3].extended && lf[4].extended && rf[2].extended && rf[3].extended && rf[4].extended){

          var xdistL = lf[0].tipPosition[0] - lf[1].tipPosition[0];
          var ydistL = lf[0].tipPosition[1] - lf[1].tipPosition[1];
          var zdistL = lf[0].tipPosition[2] - lf[1].tipPosition[2];
          var lDist = Math.sqrt( xdistL*xdistL + ydistL*ydistL + zdistL*zdistL );

          var xdistR = rf[0].tipPosition[0] - rf[1].tipPosition[0];
          var ydistR = rf[0].tipPosition[1] - rf[1].tipPosition[1];
          var zdistR = rf[0].tipPosition[2] - rf[1].tipPosition[2];
          var rDist = Math.sqrt( xdistR*xdistR + ydistR*ydistR + zdistR*zdistR );


          if ( lDist < 20 && rDist < 20 ){
            frameString += 'YOU MADE THE LETTER "B" MOUTHFUCKER' + dist + '<br>';
            text = 'B'
            voicePlay(text)
          }
        } //LETTER B

        // else if (//LETTER D
        // lf[1].extended && rf[0].extended && rf[1].extended
        // ){
        //   var xdistI = lf[0].tipPosition[0] - rf[1].tipPosition[0];
        //   var ydistI = lf[0].tipPosition[1] - rf[1].tipPosition[1];
        //   var zdistI = lf[0].tipPosition[2] - rf[1].tipPosition[2];
        //   var iDist = Math.sqrt( xdistI*xdistI + ydistI*ydistI + zdistI*zdistI );
        //
        //   var xdistT = lf[0].tipPosition[0] - rf[1].tipPosition[0];
        //   var ydistT = lf[0].tipPosition[1] - rf[1].tipPosition[1];
        //   var zdistT = lf[0].tipPosition[2] - rf[1].tipPosition[2];
        //   var tDist = Math.sqrt( xdistT*xdistT + ydistT*ydistT + zdistT*zdistT );
        //
        //
        //   if ( lDist < 20 && rDist < 20 ){
        //     frameString += 'YOU MADE THE LETTER "D" MOUTHFUCKER' + dist + '<br>';
        //     text = 'D'
        //     voicePlay(text)
        //   }
        // }
    } else if ((l && !r) || (!l && r)){
      var hand = frame.hands[0];

        if ( hand.fingers[2].extended && !hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[3].extended && !hand.fingers[4].extended) /*If someone flipped the bird*/{
            $("#celine").attr("src", $("#celine").attr("src").replace("autoplay=0", "autoplay=1"));

        } else if ( //LETTER C
        hand.fingers[0].extended && hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended
        ) {
          var xdist = hand.fingers[0].tipPosition[0] - hand.fingers[1].tipPosition[0];
          var ydist = hand.fingers[0].tipPosition[1] - hand.fingers[1].tipPosition[1];
          var zdist = hand.fingers[0].tipPosition[2] - hand.fingers[1].tipPosition[2];
          var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

            if ( dist > 70 && dist < 105 ){
              frameString += 'YOU MADE THE LETTER "C" MOUTHFUCKER' + dist + '<br>';
              text = 'C'
              voicePlay(text)
            }
        } else if ( //HELLO
        hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended
        ) {
          $("#oh-hi-mark").attr("src", $("#oh-hi-mark").attr("src").replace("autoplay=0", "autoplay=1&start=6"));
        }
      }


    for (var i = 0; i < frame.hands.length; i++) {

      frameString += handString;
      frameString += fingerString;

    } //close frame.hands.length loop

    output.innerHTML = frameString;
  }) //close Leap.Loop
}) //close document ready
