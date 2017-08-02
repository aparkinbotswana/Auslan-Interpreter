
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

    // var crossProduct = Leap.vec3.create();
    // var direction = hand.direction;
    // var normal = hand.palmNormal;
    //
    // Leap.vec3.cross(crossProduct, direction, normal);

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

    if(l && r){ // both l & r visible
      var lf = l.fingers;
      var rf = r.fingers;
      var lExtended = lf[0].extended && lf[1].extended && lf[2].extended && lf[3].extended && lf[4].extended
      var rExtended = rf[0].extended && rf[1].extended && rf[2].extended && rf[3].extended && rf[4].extended

  //       var xdistT = lf[1].mcpPosition[0] - rf[0].tipPosition[0];
  //       var ydistT = lf[1].mcpPosition[1] - rf[0].tipPosition[1];
  //       var zdistT = lf[1].mcpPosition[2] - rf[0].tipPosition[2];
  //       var tDist = Math.sqrt( xdistT*xdistT + ydistT*ydistT + zdistT*zdistT );
  // console.log(tDist);

      if (lExtended) {
        if (rf[1].extended && !rf[0].extended && !rf[2].extended && !rf[3].extended && !rf[4].extended) {

          var xdist = lf[0].tipPosition[0] - rf[1].tipPosition[0];
          var ydist = lf[0].tipPosition[1] - rf[1].tipPosition[1];
          var zdist = lf[0].tipPosition[2] - rf[1].tipPosition[2];
          var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

          if ( dist < 20 ){
            frameString += 'YOU MADE THE LETTER "A" MOUTHFUCKER' + dist + '<br>';
            text = 'A'
            voicePlay(text)
          }
        } //LETTER A

        else if (rf[1].extended) {
          var xdist = lf[2].tipPosition[0] - rf[1].tipPosition[0];
          var ydist = lf[2].tipPosition[1] - rf[1].tipPosition[1];
          var zdist = lf[2].tipPosition[2] - rf[1].tipPosition[2];
          var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );
  console.log('i');
          if ( dist < 20 ){
            console.log('i here');
            frameString += 'YOU MADE THE LETTER "I" MOUTHFUCKER' + dist + '<br>';
            text = 'I'
            voicePlay(text)
          }
        } //LETTER I

        else if (rf[1].extended){

          var xdist = lf[3].tipPosition[0] - rf[1].tipPosition[0];
          var ydist = lf[3].tipPosition[1] - rf[1].tipPosition[1];
          var zdist = lf[3].tipPosition[2] - rf[1].tipPosition[2];
          var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );
  console.log('o');
          if ( dist < 20 ){
            frameString += 'YOU MADE THE LETTER "O" MOUTHFUCKER' + dist + '<br>';
            text = 'O'
            voicePlay(text)
          }
        } //LETTER O

        else if (rf[1].extended){

          var xdist = lf[4].tipPosition[0] - rf[1].tipPosition[0];
          var ydist = lf[4].tipPosition[1] - rf[1].tipPosition[1];
          var zdist = lf[4].tipPosition[2] - rf[1].tipPosition[2];
          var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );
  console.log('u');
          if ( dist < 20 ){
            frameString += 'YOU MADE THE LETTER "U" MOUTHFUCKER' + dist + '<br>';
            text = 'U'
            voicePlay(text)
          }
        } //LETTER U
      }

      else if ( lf[2].extended && lf[3].extended && lf[4].extended && rf[2].extended && rf[3].extended && rf[4].extended){

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
          frameString += 'YOU MADE THE LETTER "D" MOUTHFUCKER' + dist + '<br>';
          text = 'D'
          voicePlay(text)
        }
      } //LETTER D
    }//Close both hands visible if statement
    else if ((l && !r) || (!l && r)){
      var hand = frame.hands[0];

      if ( hand.fingers[2].extended && !hand.fingers[0].extended && !hand.fingers[1].extended && !hand.fingers[3].extended && !hand.fingers[4].extended) /*If someone flipped the bird*/{
          $("#celine").attr("src", $("#celine").attr("src").replace("autoplay=0", "autoplay=1"));

      }
      else if (hand.fingers[0].extended && hand.fingers[1].extended && !hand.fingers[2].extended && !hand.fingers[3].extended && !hand.fingers[4].extended) {

        var xdist = hand.fingers[0].tipPosition[0] - hand.fingers[1].tipPosition[0];
        var ydist = hand.fingers[0].tipPosition[1] - hand.fingers[1].tipPosition[1];
        var zdist = hand.fingers[0].tipPosition[2] - hand.fingers[1].tipPosition[2];
        var dist = Math.sqrt( xdist*xdist + ydist*ydist + zdist*zdist );

          if ( dist > 70 && dist < 105 ){
            frameString += 'YOU MADE THE LETTER "C" MOUTHFUCKER' + dist + '<br>';
            text = 'C'
            voicePlay(text)
          }
      } //LETTER C
      // else if (hand.fingers[0].extended && hand.fingers[1].extended && hand.fingers[2].extended && hand.fingers[3].extended && hand.fingers[4].extended
      // ) {
      //   $("#oh-hi-mark").attr("src", $("#oh-hi-mark").attr("src").replace("autoplay=0", "autoplay=1&start=6"));
      // } //HELLO
    } //Close single hand only if statement

    for (var i = 0; i < frame.hands.length; i++) {

      frameString += handString;
      frameString += fingerString;

    } //close frame.hands.length loop

    output.innerHTML = frameString;
  };


    // http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
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
      axis = new THREE.AxisHelper(40);
      scene.add(axis);
      scene.add(new THREE.AmbientLight(0x888888));
      pointLight = new THREE.PointLight(0xFFffff);
      pointLight.position = new THREE.Vector3(-20, 10, 0);
      pointLight.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(pointLight);
      window.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
      var x = -30;
      var y = 15;
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
    //
    // stats = new Stats();
    //
    // stats.domElement.style.position = 'absolute';
    //
    // stats.domElement.style.left = '0px';
    //
    // stats.domElement.style.top = '0px';
    //
    // document.body.appendChild(stats.domElement);

    window.controller = controller = new Leap.Controller;

    controller.use('handHold').use('transform', {
      position: new THREE.Vector3(1, 0, 0)
    }).use('handEntry').use('screenPosition').use('riggedHand', {
      parent: scene,
      renderer: renderer,
      scale: getParam('scale'),
      positionScale: getParam('positionScale'),
      helper: true,
      offset: new THREE.Vector3(0, 0, 0),
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


   //close Leap.Loop
}); //close document ready
