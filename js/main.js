
$( document ).ready(function() {

var text = "I am a dirty little robot"
function voicePlay(text){
if(responsiveVoice.voiceSupport()) {

responsiveVoice.speak(text);
}}
voicePlay(text)

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
  //
  // var options = { enableGestures: true};
  //

  var l = null;
  var r = null;



  Leap.loop(/*options,*/ function(frame){

    // var crossProduct = Leap.vec3.create();
    // var direction = frame.hands[0].direction;
    // var normal = frame.hands[0].palmNormal;
    //
    // Leap.vec3.cross(crossProduct, direction, normal);

    // var crossProduct = Leap.vec3.create();
    // var direction = hand.direction;
    // var normal = hand.palmNormal;
    //
    // Leap.vec3.cross(crossProduct, direction, normal);
    //

    // if(frame.valid && frame.gestures.length > 0){
    // frame.gestures.forEach(function(gesture){
    //     switch (gesture.type){
    //       case "circle":
    //           console.log("Circle Gesture");
    //           break;
    //       case "keyTap":
    //           console.log("Key Tap Gesture");
    //           break;
    //       case "screenTap":
    //           console.log("Screen Tap Gesture");
    //           break;
    //       case "swipe":
    //           console.log("Swipe Gesture");
    //           break;
    //     }
    //   });
    // }

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


    if(l && r){

      var lf = l.fingers;
      var rf = r.fingers;

      if(
        // both index fingers extended
        (lf[1].extended && rf[1].extended)
        // no other fingers on L extended
        && (!lf[0].extended && !lf[2].extended && !lf[3].extended && !lf[4].extended)
        // no other fingers on R extended
        && (!rf[0].extended && !rf[2].extended && !rf[3].extended && !rf[4].extended)
      ){

        var xdist = lf[1].tipPosition[0] - rf[1].tipPosition[0];
        var ydist = lf[1].tipPosition[1] - rf[1].tipPosition[1];
        var zdist = lf[1].tipPosition[2] - rf[1].tipPosition[2];
        var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

        if ( dist < 20 ){
          frameString += 'INDEX EXTEND TEST!' + dist + '<br>';
        }

      }

    } // both l & r visible




    for (var i = 0; i < frame.hands.length; i++) {
      // hand = frame.hands[i];
      // handString = concatData("hand_type", hand.type);
      // handString += concatData("pinch_strength", hand.pinchStrength);
      // handString += concatData("grab_strength", hand.grabStrength);
      // handString += concatData("confidence", hand.confidence);



      // if ( frame.hands.length === 2 && (hand.type === 'left' && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended) && (hand.type === 'right' && hand.fingers[1].extended )){
      //   console.log("Letter 'A' MOUTHFUCKER!");
      //
      //
      // } else if (frame.hands.length === 2 && (hand.type === 'right' && hand.fingers[1].extended)){
      // // console.log("two hands right index extended!!!");
      //
      // }else if (hand.type === 'right' && hand.fingers[1].extended){
      //   // console.log("right index only!!!");
      //
      // }else if (hand.type === 'left' && hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended){
      //   // console.log("all extended!!!");
      //
      // }else if (hand.type === 'left' && hand.fingers[0].extended){
      //   // console.log("thumb!!!");
      //
      // }else if (hand.type === 'left' && hand.fingers[1].extended){
      //   // console.log("Index!!!");
      //
      // }else if (hand.type === 'left' && hand.fingers[2].extended){
      //   // console.log("Middle!!!");
      //
      // }else if (hand.type === 'left' && hand.fingers[3].extended){
      //   // console.log("Ring!!!");
      //
      // }else if (hand.type === 'left' && hand.fingers[4].extended){
      //   // console.log("Pinky!!!");
      //
      // }

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
      // console.log(handString);
    }

    output.innerHTML = frameString;
  })
})
