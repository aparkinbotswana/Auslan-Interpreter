
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

  // Leap.loop(function(frame){
  var processFrame = function(frame){
    //following code sets left and right hands in variable instead of trying to access them from array.

    if( frame.hands.length > 1 ){

      if( frame.hands[0].type === "left") {
        l = frame.hands[0];
        r = frame.hands[1];
      } else {
        l = frame.hands[1];
        r = frame.hands[0];
      }

    } else if( frame.hands.length > 0 ){

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

// if (lf[1].extended && rf[1].extended) {
//
// var xdist = lf[1].tipPosition[0] - rf[1].tipPosition[0];
// var ydist = lf[1].tipPosition[1] - rf[1].tipPosition[1];
// var zdist = lf[1].tipPosition[2] - rf[1].tipPosition[2];
// var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );
//
// frameString = 'INDEX EXTEND TEST! ' + dist;
//
// }

    if(l && r){ // both l & r visible
      var lf = l.fingers;
      var rf = r.fingers;
      var lExtended = lf[0].extended && lf[1].extended && lf[2].extended && lf[3].extended && lf[4].extended
      var rExtended = rf[0].extended && rf[1].extended && rf[2].extended && rf[3].extended && rf[4].extended

      if (lExtended) {

        if (rf[1].extended && !rf[0].extended && !rf[2].extended && !rf[3].extended && !rf[4].extended) {

          var xdistA = lf[0].tipPosition[0] - rf[1].tipPosition[0];
          var ydistA = lf[0].tipPosition[1] - rf[1].tipPosition[1];
          var zdistA = lf[0].tipPosition[2] - rf[1].tipPosition[2];
          var distA = Math.sqrt( xdistA*xdistA + ydistA*ydistA + zdistA*zdistA );
          // distance between index and thumb
          // measuring for distance with letter A

          var xdistI = lf[2].tipPosition[0] - rf[1].tipPosition[0];
          var ydistI = lf[2].tipPosition[1] - rf[1].tipPosition[1];
          var zdistI = lf[2].tipPosition[2] - rf[1].tipPosition[2];
          var distI = Math.sqrt( xdistI*xdistI + ydistI*ydistI + zdistI*zdistI );
          // distance between index and middle finger
          // measuring for distance with letter I

          var xdistO = lf[3].tipPosition[0] - rf[1].tipPosition[0];
          var ydistO = lf[3].tipPosition[1] - rf[1].tipPosition[1];
          var zdistO = lf[3].tipPosition[2] - rf[1].tipPosition[2];
          var distO = Math.sqrt( xdistO*xdistO + ydistO*ydistO + zdistO*zdistO );
          // distance between index and ring finger
          // measuring for distance with letter O

          var xdistU = lf[4].tipPosition[0] - rf[1].tipPosition[0];
          var ydistU = lf[4].tipPosition[1] - rf[1].tipPosition[1];
          var zdistU = lf[4].tipPosition[2] - rf[1].tipPosition[2];
          var distU = Math.sqrt( xdistU*xdistU + ydistU*ydistU + zdistU*zdistU );
          // distance between index and pinky finger
          // measuring for distance with letter U

          var xdistY = lf[0].pipPosition[0] - rf[1].tipPosition[0];
          var ydistY = lf[0].pipPosition[1] - rf[1].tipPosition[1];
          var zdistY = lf[0].pipPosition[2] - rf[1].tipPosition[2];
          var distY = Math.sqrt( xdistY*xdistY + ydistY*ydistY + zdistY*zdistY );
          // distance between index and base of thumb
          // measuring for distance with letter Y

          var xdistE = lf[1].tipPosition[0] - rf[1].tipPosition[0];
          var ydistE = lf[1].tipPosition[1] - rf[1].tipPosition[1];
          var zdistE = lf[1].tipPosition[2] - rf[1].tipPosition[2];
          var distE = Math.sqrt( xdistE*xdistE + ydistE*ydistE + zdistE*zdistE );
          // distance between index tip of left hand and index tip of right hand
          // measuring for distance with letter E

          if ( distA < 20 ){
            frameString = "A";
            text = 'A'
            voicePlay(text)
          } // LETTER A
          else if ( distE < 20 ){
            frameString = "E";
            text = 'E'
            voicePlay(text)
          } // LETTER E
          else if ( distI < 20 ){
            frameString = "I";
            text = 'I'
            voicePlay(text)
          } // LETTER I
          else if ( distO < 20 ){
            frameString = "O";
            text = 'O'
            voicePlay(text)
          } // LETTER O
          else if ( distU < 20 ){
            frameString = "U";
            text = 'U'
            voicePlay(text)
          } // LETTER U
          else if (distY < 20) {
            frameString = "Y";
            text = 'Y'
            voicePlay(text)
          } // LETTER Y
        } // A I O U Y closing
        else if (rf[1].extended && rf[2].extended) {
          var xdistBase = lf[2].mcpPosition[0] - rf[2].tipPosition[0];
          var ydistBase = lf[2].mcpPosition[1] - rf[2].tipPosition[1];
          var zdistBase = lf[2].mcpPosition[2] - rf[2].tipPosition[2];
          var distBase = Math.sqrt( xdistBase*xdistBase + ydistBase*ydistBase + zdistBase*zdistBase );
          // distance between tip of middle finger right hand and base of middle finger left hand

          var xdistWrist = lf[2].carpPosition[0] - rf[2].tipPosition[0];
          var ydistWrist = lf[2].carpPosition[1] - rf[2].tipPosition[1];
          var zdistWrist = lf[2].carpPosition[2] - rf[2].tipPosition[2];
          var distWrist = Math.sqrt( xdistWrist*xdistWrist + ydistWrist*ydistWrist + zdistWrist*zdistWrist );
          // distance between tip of index finger right hand and wrist left hand

          if ( distBase < 20 && distWrist < 20 ){
            frameString = "V";
            text = 'V'
            voicePlay(text)
          }
        } // LETTER V
        else if (rExtended) {
          var xdistZ = lf[2].mcpPosition[0] - rf[2].tipPosition[0];
          var ydistZ = lf[2].mcpPosition[1] - rf[2].tipPosition[1];
          var zdistZ = lf[2].mcpPosition[2] - rf[2].tipPosition[2];
          var distZ = Math.sqrt( xdistZ*xdistZ + ydistZ*ydistZ + zdistZ*zdistZ );
          // distance between middle and palm
          // measuring for distance with letter Z

          var xdistW = lf[1].mcpPosition[0] - rf[1].mcpPosition[0];
          var ydistW = lf[1].mcpPosition[1] - rf[1].mcpPosition[1];
          var zdistW = lf[1].mcpPosition[2] - rf[1].mcpPosition[2];
          var distW = Math.sqrt( xdistW*xdistW + ydistW*ydistW + zdistW*zdistW );
          // distance between middle and palm
          // measuring for distance with letter W

          if ( distZ < 50 ){
            frameString = "Z";
            text = 'Z'
            voicePlay(text)
          } // LETTER Z
          else if ( distW < 20 ){
            frameString = "W";
            text = 'W'
            voicePlay(text)
          } // LETTER W
        } // Both hands fully extended closing
      } // left hand extended closing

      else if ( lf[2].extended && lf[3].extended && lf[4].extended && rf[2].extended && rf[3].extended && rf[4].extended){

        var xdistL = lf[0].tipPosition[0] - lf[1].tipPosition[0];
        var ydistL = lf[0].tipPosition[1] - lf[1].tipPosition[1];
        var zdistL = lf[0].tipPosition[2] - lf[1].tipPosition[2];
        var lDist = Math.sqrt( xdistL*xdistL + ydistL*ydistL + zdistL*zdistL );

        var xdistR = rf[0].tipPosition[0] - rf[1].tipPosition[0];
        var ydistR = rf[0].tipPosition[1] - rf[1].tipPosition[1];
        var zdistR = rf[0].tipPosition[2] - rf[1].tipPosition[2];
        var rDist = Math.sqrt( xdistR*xdistR + ydistR*ydistR + zdistR*zdistR );

        var xdistThumb = rf[0].tipPosition[0] - lf[0].tipPosition[0];
        var ydistThumb = rf[0].tipPosition[1] - lf[0].tipPosition[1];
        var zdistThumb = rf[0].tipPosition[2] - lf[0].tipPosition[2];
        var thumbDist = Math.sqrt( xdistThumb*xdistThumb + ydistThumb*ydistThumb + zdistThumb*zdistThumb );


        if ( lDist < 20 && rDist < 20 && thumbDist < 20  ){
          frameString = "B";
          text = 'B'
          voicePlay(text)
        }
      } //LETTER B
      else if (lf[1].extended && rf[1].extended) {
        var xdist = lf[1].pipPosition[0] - rf[1].pipPosition[0];
        var ydist = lf[1].pipPosition[1] - rf[1].pipPosition[1];
        var zdist = lf[1].pipPosition[2] - rf[1].pipPosition[2];
        var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );
        // distance between the mid point of both index fingers, crossed over
        // measuring for distance with letter X

        if ( dist < 20 ){
          frameString = "X";
          text = 'X'
          voicePlay(text)
        } // LETTER X
      }
      else if (lf[1].extended) {
        var xdistLeft = lf[1].tipPosition[0] - rf[1].tipPosition[0];
        var ydistLeft = lf[1].tipPosition[1] - rf[1].tipPosition[1];
        var zdistLeft = lf[1].tipPosition[2] - rf[1].tipPosition[2];
        var distLeft = Math.sqrt( xdistLeft*xdistLeft + ydistLeft*ydistLeft + zdistLeft*zdistLeft );
        //left index to right index
        // measuring for distance with letter P

        var xdistRight = rf[0].tipPosition[0] - rf[1].tipPosition[0];
        var ydistRight = rf[0].tipPosition[1] - rf[1].tipPosition[1];
        var zdistRight = rf[0].tipPosition[2] - rf[1].tipPosition[2];
        var distRight = Math.sqrt( xdistRight*xdistRight + ydistRight*ydistRight + zdistRight*zdistRight );
        // right index to right thumb

        if ( distLeft < 20 && distRight < 20 ){
          frameString = "P";
          text = 'P'
          voicePlay(text)
        } // LETTER P
      }
      else if (
      lf[1].extended && rf[0].extended && rf[1].extended
      ){
        var xdistI = lf[1].tipPosition[0] - rf[1].tipPosition[0];
        var ydistI = lf[1].tipPosition[1] - rf[1].tipPosition[1];
        var zdistI = lf[1].tipPosition[2] - rf[1].tipPosition[2];
        var iDist = Math.sqrt( xdistI*xdistI + ydistI*ydistI + zdistI*zdistI );

        var xdistT = lf[1].mcpPosition[0] - rf[0].tipPosition[0];
        var ydistT = lf[1].mcpPosition[1] - rf[0].tipPosition[1];
        var zdistT = lf[1].mcpPosition[2] - rf[0].tipPosition[2];
        var tDist = Math.sqrt( xdistT*xdistT + ydistT*ydistT + zdistT*zdistT );


        if ( iDist < 20 && tDist < 50 && tDist > 15 ){
          frameString = "D";
          text = 'D'
          voicePlay(text)
        }
      } //LETTER D
      else if (lf[1].extended && rf[2].extended && rf[3].extended && rf[4].extended) {

      }
      else if (!lExtended && !rExtended) {

        var xdistg = lf[1].mcpPosition[0] - rf[4].mcpPosition[0];
        var ydistg = lf[1].mcpPosition[1] - rf[4].mcpPosition[1];
        var zdistg = lf[1].mcpPosition[2] - rf[4].mcpPosition[2];
        var Distg = Math.sqrt( xdistg*xdistg + ydistg*ydistg + zdistg*zdistg );

        var xdists = lf[4].mcpPosition[0] - rf[4].mcpPosition[0];
        var ydists = lf[4].mcpPosition[1] - rf[4].mcpPosition[1];
        var zdists = lf[4].mcpPosition[2] - rf[4].mcpPosition[2];
        var Dists = Math.sqrt( xdists*xdists + ydists*ydists + zdists*zdists );


        if ( Distg < 20 ){
          frameString = "G";
          text = 'G'
          voicePlay(text)
        } //LETTER G
        else if (Dists < 20) {
          frameString = "S";
          text = 'S'
          voicePlay(text)
        } // LETTER S
      }
    }//Close both hands visible if statement
    else if ((l && !r) || (!l && r)){
      var hand = frame.hands[0];

      if (hand.fingers[0].extended && hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended) {

        var xdist = hand.fingers[0].tipPosition[0] - hand.fingers[1].tipPosition[0];
        var ydist = hand.fingers[0].tipPosition[1] - hand.fingers[1].tipPosition[1];
        var zdist = hand.fingers[0].tipPosition[2] - hand.fingers[1].tipPosition[2];
        var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

          if ( dist > 70 && dist < 105 ){
            frameString = "C";
            text = 'C'
            voicePlay(text)
          }
        } //LETTER C
      // else if ( hand.fingers[2].extended && !hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[3].extended && !hand.fingers[4].extended){
      //     $("#celine").attr("src", $("#celine").attr("src").replace("autoplay=0", "autoplay=1"));
      // }  //If someone flipped the bird
      // else if (hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended
      // ) {
      //   $("#oh-hi-mark").attr("src", $("#oh-hi-mark").attr("src").replace("autoplay=0", "autoplay=1&start=6"));
      // } //HELLO
    } //Close single hand only if statement
    output.innerHTML = frameString;
  };

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  // following code to render hands
  function getParam(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
    var controller, cursor, initScene, riggedHand, stats;

    window.scene = null;

    window.renderer = null;

    window.camera = null;

    initScene = function(element) {
      var axis, pointLight;
      window.scene = new THREE.Scene();
      window.renderer = new THREE.WebGLRenderer({
        alpha: true
      });

      console.log('renderer', window.renderer);

      renderer.setClearColor(0x2F394D, 1);
      renderer.setSize(window.innerWidth, window.innerHeight);
      element.appendChild(renderer.domElement);
      // axis = new THREE.AxisHelper(40);
      // scene.add(axis);
      scene.add(new THREE.AmbientLight(0x888888));
      pointLight = new THREE.PointLight(0xFFffff);
      pointLight.position = new THREE.Vector3(-20, 10, 0);
      pointLight.lookAt(new THREE.Vector3(50, 0, 0));
      scene.add(pointLight);
      window.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
      var x = 0;
      var y = 50;
      var z = 20;
      camera.position.set(x, y, z);
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      window.controls = new THREE.TrackballControls(camera);
      scene.add(camera);
      window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        controls.handleResize();
        return renderer.render(scene, camera);
      }, false);
      return renderer.render(scene, camera);
    };

    // via Detector.js:
  var webglAvailable  = ( function () { try { var canvas = document.createElement( 'canvas' ); return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ); } catch( e ) { return false; } } )();

    if (webglAvailable) {
      console.log('webgl init');
      initScene(document.getElementById('hands'));
    }

    window.controller = controller = new Leap.Controller;

    controller.use('handHold').use('transform', {
      position: new THREE.Vector3(1, 0, 0)
    }).use('handEntry').use('screenPosition').use('riggedHand', {
      parent: scene,
      renderer: renderer,
      scale: getParam('scale'),
      positionScale: getParam('positionScale'),
      helper: true,
      offset: new THREE.Vector3(0, 10, 12),
      renderFn: function() {
        renderer.render(scene, camera);
        return controls.update();
      },
      materialOptions: {
        wireframe: getParam('wireframe')
      },
      dotsMode: getParam('dots'),
      // stats: stats,
      camera: camera,
      boneLabels: function(boneMesh, leapHand) {
        if (boneMesh.name.indexOf('Finger_03') === 0) {
          return leapHand.pinchStrength;
        }
      },
      boneColors: function(boneMesh, leapHand) {
        if ((boneMesh.name.indexOf('Finger_0') === 0) || (boneMesh.name.indexOf('Finger_1') === 0)) {
          return {
            hue: 0.6,
            saturation: leapHand.pinchStrength
          };
        }
      },
      checkWebGL: true
    })
    .on('frame', processFrame)
    .connect();

    if (getParam('screenPosition')) {
      cursor = document.createElement('div');
      cursor.style.width = '50px';
      cursor.style.height = '50px';
      cursor.style.position = 'absolute';
      cursor.style.zIndex = '10';
      cursor.style.backgroundColor = 'green';
      cursor.style.opacity = '0.8';
      cursor.style.color = 'white';
      cursor.style.fontFamily = 'curior';
      cursor.style.textAlign = 'center';
      cursor.innerHTML = "&lt;div&gt;";
      document.body.appendChild(cursor);
      controller.on('frame', function(frame) {
        var hand, handMesh, screenPosition;
        if (hand = frame.hands[0]) {
          handMesh = frame.hands[0].data('riggedHand.mesh');
          screenPosition = handMesh.screenPosition(hand.fingers[1].tipPosition, camera);
          cursor.style.left = screenPosition.x;
          return cursor.style.bottom = screenPosition.y;
        }
      });
    }

    if (getParam('scenePosition')) {
      window.sphere = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshBasicMaterial(0x0000ff));
      scene.add(sphere);
      controller.on('frame', function(frame) {
        var hand, handMesh;
        if (hand = frame.hands[0]) {
          handMesh = frame.hands[0].data('riggedHand.mesh');
          return handMesh.scenePosition(hand.indexFinger.tipPosition, sphere.position);
        }
      });
    }

    if (getParam('playback')) {
      controller.use('playback', {
        recording: 'examples/confidence2-49fps.json.lz',
        autoPlay: true,
        pauseOnHand: true
      });
    }

    if (getParam('boneHand')) {
      riggedHand = controller.plugins.riggedHand;
      controller.use('boneHand', {
        renderer: riggedHand.renderer,
        scene: riggedHand.parent,
        camera: riggedHand.camera,
        render: function() {}
      });
    }
//////////////////////////////////////////////////////////////////////////////
}); //close document ready
