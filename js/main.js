

$( document ).ready(function() {

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

  var options = { enableGestures: true};

  Leap.loop(options, function(frame){
    frameString = concatData("frame_id", frame.id);
    frameString += concatData("num_hands", frame.hands.length);
    frameString += concatData("num_fingers", frame.fingers.length);
    frameString += "<br>";

    // having a fit over the extra argument in for loop. WTF does it even mean?
    for (var i = 0; i < frame.hands.length; i++) {
      hand = frame.hands[i];
      handString = concatData("hand_type", hand.type);
      handString += concatData("pinch_strength", hand.pinchStrength);
      handString += concatData("grab_strength", hand.grabStrength);
      handString += concatData("confidence", hand.confidence);

      handString += '<br>'

      for (var j = 0; j < hand.fingers.length; j++) {
        finger = hand.fingers[j];
        fingerString += concatData("finger_type", finger.type) + " (" + getFingerName(finger.type) + ")"
        fingerString += concatData("finger_dip", finger.dipPosition);
        fingerString += concatData("finger_pip", finger.pipPosition);
        fingerString += concatData("finger_mcp", finger.mcpPosition);

        fingerString += '<br>'

      }

      frameString += handString;
      frameString += fingerString;
    }

    output.innerHTML = frameString;

  })



  // may not need below code. double check. Leap.js library may manage this already.

  // var ws;
  //
  // // Support both the WebSocket and MozWebSocket objects
  // if ((typeof(WebSocket) == 'undefined') &&
  //     (typeof(MozWebSocket) != 'undefined')) {
  //   WebSocket = MozWebSocket;
  // }
  //
  // // Create the socket with event handlers
  // function connectToWebSocket() {
  //   // Create and open the socket
  //   ws = new WebSocket("ws://localhost:6437/v4.json");
  //
  //   // On successful connection
  //   ws.onopen = function(event) {
  //     var enableMessage = JSON.stringify({enableGestures: true});
  //     ws.send(enableMessage); // Enable gestures
  //     var backgroundMessage = JSON.stringify({background: true});
  //     ws.send(backgroundMessage); // Get frames in background
  //     console.log("open");
  //   };
  //
  //   // On message received
  //   ws.onmessage = function(event) {
  //       var obj = JSON.parse(event.data);
  //       var str = JSON.stringify(obj, undefined, 2);
  //       if(obj.id){
  //           console.log("Frame data for " + obj.id);
  //       } else {
  //           console.log("message " + event.data);
  //       }
  //   };
  //
  //   // On socket close
  //   ws.onclose = function(event) {
  //     ws = null;
  //     console.log("close");
  //   }
  //
  //   // On socket error
  //   ws.onerror = function(event) {
  //     console.log("error");
  //   };
  // }
  //
  // connectToWebSocket();

})
