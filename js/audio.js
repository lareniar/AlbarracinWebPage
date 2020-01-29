document.write(`<div class="audio-container">
<div class="audiosvg-container">
  <h1 class="play-text">play</h1>
  <h1 class="pause-text">pause</h1>
  <div class="active-box" onclick="pauseAudio()"></div>
  <svg class="audiosvg" onclick="playAudio()" viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
    <style type="text/css">
                              .st0{fill:none;stroke:#486CA3;stroke-width:5.6943;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                      .st1{fill:#7691BA;}
                                      .st2{fill:none;stroke:#1A478C;stroke-width:5.8983;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                      .st3{fill:#1A478C;}
                                      .st4{fill:#486CA3;}
                                      .st5{fill:none;stroke:#1A478C;stroke-width:7.5924;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                      .st6{fill:#FFFFFF;}
                                      .st7{fill:none;stroke:#7691BA;stroke-width:13.2866;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                      .st8{fill:none;stroke:#486CA3;stroke-width:4.4082;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                      .st9{fill:none;stroke:#fff;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
                                  </style>
    <g>
      <g>
        <path class="st1" d="M72.5,38.6c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.2-0.1,0.3-0.2c0.1,0,0.2-0.1,0.3-0.1
                                                  h4.6c0.2,0,0.4,0.1,0.5,0.2c0.1,0.1,0.3,0.2,0.3,0.3l0.5,1l9.5,24.4c0.1,0.2,0.1,0.4-0.1,0.6c-0.1,0.2-0.4,0.2-0.7,0.2h-5.2
                                                  c-0.3,0-0.5-0.1-0.6-0.2c-0.2-0.1-0.3-0.3-0.4-0.5c-0.2-0.6-0.5-1.2-0.7-1.8c-0.2-0.6-0.5-1.2-0.7-1.8H71
                                                  c-0.2,0.6-0.5,1.2-0.7,1.8c-0.2,0.6-0.5,1.2-0.7,1.8c-0.2,0.4-0.5,0.7-0.9,0.7h-5.3c-0.2,0-0.4-0.1-0.6-0.2
                                                  c-0.2-0.1-0.2-0.3-0.1-0.5L72.5,38.6z M75.8,46.3c-0.2,0.6-0.5,1.3-0.7,2c-0.2,0.7-0.5,1.4-0.7,2.1c-0.2,0.7-0.5,1.4-0.7,2.1
                                                  c-0.2,0.7-0.5,1.4-0.7,2h5.5L75.8,46.3z"/>
                                              <path class="st1" d="M99.3,54c0,0.9,0.1,1.6,0.4,2.3c0.2,0.6,0.6,1.1,1,1.5c0.4,0.4,0.9,0.7,1.4,0.9s1.1,0.3,1.7,0.3
                                                  c0.6,0,1.2-0.1,1.7-0.3c0.5-0.2,1-0.5,1.4-0.9c0.4-0.4,0.7-0.9,1-1.5s0.4-1.3,0.4-2.1V38.7c0-0.2,0.1-0.4,0.2-0.6
                                                  c0.1-0.2,0.4-0.2,0.6-0.2h5.3c0.3,0,0.5,0.1,0.6,0.2c0.2,0.2,0.2,0.3,0.2,0.5v15.2c0,2.1-0.3,3.9-0.9,5.3
                                                  c-0.6,1.4-1.4,2.6-2.5,3.4c-1,0.9-2.3,1.5-3.6,1.9s-2.8,0.6-4.3,0.6c-1.5,0-3-0.2-4.3-0.6c-1.4-0.4-2.6-1-3.6-1.9
                                                  c-1-0.9-1.9-2-2.5-3.5c-0.6-1.4-0.9-3.2-0.9-5.2V38.7c0-0.2,0.1-0.4,0.2-0.5c0.1-0.2,0.3-0.2,0.5-0.2h5.4c0.2,0,0.4,0.1,0.6,0.2
                                                  c0.2,0.2,0.3,0.3,0.3,0.6V54z"/>
                                              <path class="st1" d="M143.5,51.3c0,1.3-0.2,2.5-0.5,3.6c-0.3,1.1-0.8,2.2-1.4,3.2c-0.6,1-1.3,1.9-2.2,2.7
                                                  c-0.8,0.8-1.8,1.5-2.8,2.1c-1,0.6-2.1,1-3.3,1.3c-1.2,0.3-2.4,0.5-3.7,0.5h-8.9c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.3-0.3-0.3-0.6
                                                  V38.7c0-0.3,0.1-0.5,0.2-0.6c0.1-0.2,0.3-0.2,0.6-0.2h8.9c1.3,0,2.5,0.2,3.6,0.5s2.3,0.8,3.3,1.3c1,0.6,1.9,1.3,2.8,2.1
                                                  c0.8,0.8,1.6,1.7,2.2,2.7c0.6,1,1.1,2.1,1.4,3.2S143.5,50,143.5,51.3z M127,44.3v13.8h1.5c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8-0.1
                                                  c0.9-0.1,1.7-0.3,2.5-0.7s1.5-0.8,2-1.4c0.6-0.6,1-1.3,1.4-2.1c0.3-0.8,0.5-1.7,0.5-2.6c0-1-0.2-1.9-0.6-2.8
                                                  c-0.4-0.8-0.9-1.6-1.5-2.2c-0.6-0.6-1.4-1.1-2.3-1.4c-0.9-0.3-1.8-0.5-2.8-0.5H127z"/>
                                              <path class="st1" d="M148.2,38.7c0-0.2,0.1-0.4,0.2-0.6c0.1-0.2,0.3-0.2,0.6-0.2h5.3c0.2,0,0.4,0.1,0.6,0.2s0.3,0.3,0.3,0.6v25.1
                                                  c0,0.5-0.3,0.8-0.9,0.8H149c-0.5,0-0.8-0.3-0.8-0.8V38.7z"/>
                                              <path class="st1" d="M159.8,51.3c0-1.3,0.2-2.5,0.5-3.7s0.8-2.3,1.4-3.3s1.3-2,2.2-2.8c0.8-0.8,1.8-1.6,2.8-2.2
                                                  c1-0.6,2.1-1.1,3.3-1.4s2.4-0.5,3.7-0.5c1.3,0,2.5,0.2,3.7,0.5s2.3,0.8,3.3,1.4c1,0.6,2,1.3,2.8,2.2c0.8,0.8,1.6,1.8,2.2,2.8
                                                  c0.6,1,1.1,2.1,1.4,3.3s0.5,2.4,0.5,3.7s-0.2,2.5-0.5,3.7c-0.3,1.2-0.8,2.3-1.4,3.3c-0.6,1-1.3,1.9-2.2,2.8
                                                  c-0.8,0.8-1.8,1.6-2.8,2.2c-1,0.6-2.1,1.1-3.3,1.4c-1.2,0.3-2.4,0.5-3.7,0.5c-1.3,0-2.5-0.2-3.7-0.5c-1.2-0.3-2.3-0.8-3.3-1.4
                                                  c-1-0.6-1.9-1.3-2.8-2.2s-1.6-1.8-2.2-2.8s-1.1-2.1-1.4-3.3C159.9,53.8,159.8,52.5,159.8,51.3z M166.7,51.3c0,1,0.2,1.9,0.5,2.8
                                                  c0.3,0.9,0.8,1.6,1.4,2.3c0.6,0.6,1.3,1.1,2.1,1.5c0.8,0.4,1.7,0.5,2.7,0.5c1,0,1.9-0.2,2.7-0.5s1.6-0.9,2.2-1.5
                                                  c0.6-0.6,1.1-1.4,1.4-2.3c0.3-0.9,0.5-1.8,0.5-2.8c0-1-0.2-1.9-0.5-2.8c-0.3-0.9-0.8-1.6-1.4-2.3c-0.6-0.6-1.3-1.2-2.2-1.5
                                                  s-1.7-0.6-2.7-0.6c-1,0-1.9,0.2-2.7,0.6c-0.8,0.4-1.5,0.9-2.1,1.5c-0.6,0.6-1.1,1.4-1.4,2.3C166.9,49.3,166.7,50.3,166.7,51.3z"/>
        </g>
      <g>
        <g id="svg-audio">
                                                  <circle class="st5" cx="125.5" cy="154" r="66.3"/>
                                                  <path class="st3" d="M64.3,179.5c5.1,12.2,13.7,22.6,24.6,29.8l36.6-55.2L64.3,179.5z"/>
                                                  <polygon class="st3" points="181.4,118.5 170.8,106.4 125.5,154 			"/>
                                                  <g>
                                                      <g id="hover-circle">
                                                          <circle class="st4" cx="125.5" cy="154" r="24.7"/>
                                                      </g>
                                                      
                                                      <g id="ripple-circle">
                                                          <circle class="st9" cx="125.5" cy="154" r="9.6"/>
                                                          <circle class="st9" cx="125.5" cy="154" r="9.6"/>
                                                          <circle class="st9" cx="125.5" cy="154" r="9.6"/>
                                                      </g>
                                                      <circle class="st3" cx="125.5" cy="154" r="9.6"/>
                                                  </g>
                                              </g>
                                              <path class="st2" d="M202.8,128.2H214c3.8,0,6.8-2.4,6.8-5.4V18.7c0-3-3.1-5.4-6.8-5.4H36c-3.8,0-6.8,2.4-6.8,5.4v104.1
                                                  c0,3,3.1,5.4,6.8,5.4h13.1"/>
                                              <path class="st7" d="M160,196.7l12.2,16.5c2.5,3.3,6.4,6.3,11.6,7.4"/>
                                              <circle class="st8" cx="203.1" cy="224.6" r="9.9"/>
                                              <g>
                                                  <g>
                                                      <circle class="st1" cx="189" cy="82.3" r="4.4"/>
                                                      <circle class="st4" cx="189" cy="98.1" r="4.4"/>
                                                  </g>
                                              </g>
                                              <path class="st4" d="M169.5,197.3c1.9,2.5,1.5,6-1,8l-2.2,1.7c-2.5,1.9-6,1.5-8-1l-7.3-9.4c-1.9-2.5-1.5-6,1-8l2.2-1.7
                                                  c2.5-1.9,6-1.5,8,1L169.5,197.3z"/>
                                              <path class="st8" d="M160,196.7l12.2,16.5c2.5,3.3,6.4,6.3,11.6,7.4c6.1,1.2,19.2,3.8,19.2,3.8"/>
                                          </g>
                                          <g id="svg-line">
                                              <line class="st0" x1="162.7" y1="236.7" x2="87.3" y2="236.7"/>
                                          </g>
                                      </g>
                                      </svg>
</div>
</div>
</div>`)

TweenMax.set('#ripple-circle circle', {scale:0.5, transformOrigin:'50% 50%'});
TweenMax.fromTo('#svg-line', 2, {x:-2.5}, {x:2.5,repeat:-1,ease:Elastic.easeInOut, yoyo:true});
TweenMax.fromTo('.loading-image', 2, {scale:1, autoAlpha:1}, {scale:0.75, autoAlpha:0.5, transformOrigin:'50% 50%',ease:Bounce.easeIn,yoyo:true, repeat:-1});
TweenMax.to('#inner-circ', 2, {rotation:360, transformOrigin:'50% 50%', repeat:-1});
TweenMax.to('#outer-circ', 4, {rotation:-360, transformOrigin:'50% 50%', repeat:-1});

$('.audiosvg').hover(function(){
	hoverCircle = $(this).find('#hover-circle .st4')
	$(hoverCircle).css({'fill': '#7691BA'});
  TweenMax.to('.play-text', 0.35, {autoAlpha: 1, y:-70, transformOrigin:'50% 50%', ease:Back.easeOut});
}, function(){
	$(hoverCircle).css({'fill': '#486CA3'});
  TweenMax.to('.play-text', 0.35, {autoAlpha: 0, y:0, transformOrigin:'50% 50%', ease:Back.easeIn});
});

$('.audiosvg').click(function(){
	var spinDisc = $(this).find('#svg-audio');
	var rippleCircle = $(this).find('#ripple-circle circle');
	var activeBox = $(this).prev();
	TweenMax.set(spinDisc, {rotation:0, transformOrigin:'50% 50%'});
	TweenMax.to(spinDisc, 2, {rotation:360, transformOrigin:'50% 50%',repeat:-1,ease:Linear.easeNone});
	TweenMax.staggerTo(rippleCircle, 2.1, {scale:20, transformOrigin:'50% 50%', autoAlpha: 0, repeat:-1, ease:Linear.easeNone},0.7);
	$(activeBox).show();
  TweenMax.set('.play-text', {autoAlpha: 0, y:0, transformOrigin:'50% 50%'});
  TweenMax.set('.pause-text', {autoAlpha: 0, y:0, transformOrigin:'50% 50%'});
});

$('.active-box').click(function(){
	$(this).hide();
	TweenMax.killTweensOf($(this).next().find('#svg-audio'));
	TweenMax.killTweensOf($(this).next().find('#ripple-circle circle'));
	TweenMax.set('#ripple-circle circle', {scale:0.5, transformOrigin:'50% 50%'});
  TweenMax.set('.play-text', {autoAlpha: 0, y:0, transformOrigin:'50% 50%'});
  TweenMax.set('.pause-text', {autoAlpha: 0, y:0, transformOrigin:'50% 50%'});
});

$('.active-box').hover(function(){
	hoverCircle = $(this).parent().find('#hover-circle .st4')
	$(hoverCircle).css({'fill': '#7691BA'});
  TweenMax.to('.pause-text', 0.35, {autoAlpha: 1, y:-70, transformOrigin:'50% 50%', ease:Back.easeOut});
}, function(){
	$(hoverCircle).css({'fill': '#486CA3'});
  TweenMax.to('.pause-text', 0.35, {autoAlpha: 0, y:0, transformOrigin:'50% 50%', ease:Back.easeIn});
});

var audioMp3 = new Audio();
audioMp3.src = 'http://www.qingli.life/music/Beyond_Jupiter.mp3';

function playAudio(){
	audioMp3.play();
}

function pauseAudio(){
	audioMp3.pause();
}

$('.circles').click(function(){
	TweenMax.to('.socialmedia-overlay', 1, {css:{'top':0},ease:Bounce.easeOut});
	TweenMax.to('.fa-angle-up', 0.5, {autoAlpha: 1, ease:Power2.easeOut,delay:1});
	TweenMax.staggerFrom('.socialmedia-content div', 0.5, {scale:0.1, transformOrigin:'50% 50%', autoAlpha: 0, ease:Back.easeOut, delay:0.75},0.5);

})
$('.fa-angle-up').click(function(){
	TweenMax.to('.socialmedia-overlay', 0.5, {css:{'top':'-100%'},ease:Power2.easeInOut});
	TweenMax.to(this, 0.5, {autoAlpha: 0, ease:Power2.easeOut});
})