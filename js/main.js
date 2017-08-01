
$( document ).ready(function() {

  function voicePlay(text){
    if(responsiveVoice.voiceSupport()) {
    responsiveVoice.speak(text);
    }
  }

  var concatData = function(id, data) {
    return id + ": " + data + "<br>"
  }

  function getFingerName(fingerType){
    switch (fingerType) {
      case 0:
        return 'Thumb';
      break;

      case 1:
        return 'Index';
      break;

      case 2:
        return 'Middle';
      break;

      case 3:
        return 'Ring';
      break;

      case 4:
        return 'Pinky';
      break;
    }
  }

  function concatJointPosition(id, position){
    return id + ": " + position[0] + ", " + position[1] + ", " + position[2] + "<br>"

  }

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

      if(//LETTER A
        // all finger on L hand extended and index on R hand extended.
        (lf[0].extended && lf[1].extended && lf[2].extended && lf[3].extended && lf[4].extended && rf[1].extended)
        // no other fingers on R extended
        && (!rf[0].extended && !rf[2].extended && !rf[3].extended && !rf[4].extended)
        ){
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

      } else if( //LETTER B
          // pinky, ring and middle finger on R and L hand extended.
        lf[2].extended && lf[3].extended && lf[4].extended && rf[2].extended && rf[3].extended && rf[4].extended
      ){
        // var xdist = lf[0].tipPosition[0] - rf[1].tipPosition[0];
        // var ydist = lf[0].tipPosition[1] - rf[1].tipPosition[1];
        // var zdist = lf[0].tipPosition[2] - rf[1].tipPosition[2];
        // var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

        if ( dist < 20 ){
          frameString += 'YOU MADE THE LETTER "B" MOUTHFUCKER' + dist + '<br>';
          text = 'B'
          voicePlay(text)
        }
      }
      // else if (//LETTER D
      // ) {
      //
      // } else if (//LETTER E
      // ) {
      //
      // } else if (//LETTER F
      // ) {
      //
      // } else if (//LETTER G
      // ) {
      //
      // } else if (//LETTER H
      // ) {
      //
      // } else if (//LETTER I
      // ) {
      //
      // } else if (//LETTER J
      // ) {
      //
      // } else if (//LETTER K
      // ) {
      //
      // } else if (//LETTER L
      // ) {
      //
      // } else if (//LETTER M
      // ) {
      //
      // } else if (//LETTER N
      // ) {
      //
      // } else if (//LETTER O
      // ) {
      //
      // } else if (//LETTER P
      // ) {
      //
      // } else if (//LETTER Q
      // ) {
      //
      // } else if (//LETTER R
      // ) {
      //
      // } else if (//LETTER S
      // ) {
      //
      // } else if (//LETTER T
      // ) {
      //
      // } else if (//LETTER U
      // ) {
      //
      // } else if (//LETTER V
      // ) {
      //
      // } else if (//LETTER W
      // ) {
      //
      // } else if (//LETTER X
      // ) {
      //
      // } else if (//LETTER Y
      // ) {
      //
      // } else if (//LETTER Z
      // ) {
      //
      // }
    } else if ((l && !r) || (!l && r)){
      var hand = frame.hands[0];

        if ( hand.fingers[2].extended && !hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[3].extended && !hand.fingers[4].extended) /*If someone flipped the bird*/{
            $("#celine").attr("src", $("#celine").attr("src").replace("autoplay=0", "autoplay=1"));

        }
        else if ( //LETTER C
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
        }
      }


    for (var i = 0; i < frame.hands.length; i++) {
      // hand = frame.hands[i];
      // handString = concatData("hand_type", hand.type);
      // handString += concatData("pinch_strength", hand.pinchStrength);
      // handString += concatData("grab_strength", hand.grabStrength);
      // handString += concatData("confidence", hand.confidence);




      // handString += '<br>'


      // fingerString = concatJointPosition("finger_thumb_dip", hand.thumb.dipPosition);

      // for (var j = 0; j < hand.fingers.length; j++) {
      //   finger = hand.fingers[j];
      //   fingerString += concatData("finger_type", finger.type) + " (" + getFingerName(finger.type) + ") <br>"
      //   fingerString += concatData("finger_dip", finger.dipPosition);
      //   fingerString += concatData("finger_pip", finger.pipPosition);
      //   fingerString += concatData("finger_mcp", finger.mcpPosition);
      //
      //   fingerString += '<br>'
      //
      // }

      frameString += handString;
      frameString += fingerString;

    } //close frame.hands.length loop

    output.innerHTML = frameString;
  }) //close Leap.Loop
}) //close document ready
