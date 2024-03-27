import React from 'react';


const DelEmoji = (getUserId) => {
  return (
    <>
     <div> User {getUserId} successfully removed !</div>
    <svg viewBox="0 0 800 800" style={{ marginTop: '-54px', marginLeft: '190px' }} width="80px" height="80px">

<defs><radialGradient id="ccclaymoji-grad-dark" r="93%" cx="20%" cy="20%">
      <stop offset="70%" stop-color="hsl(41, 100%, 67%)" stop-opacity="0"></stop>
      <stop offset="97%" stop-color="#c89924" stop-opacity="1"></stop>
    </radialGradient><radialGradient id="ccclaymoji-grad-light" r="65%" cx="28%" cy="20%">
    <stop offset="0%" stop-color="#fffd88" stop-opacity="0.75"></stop>
    <stop offset="100%" stop-color="hsl(41, 100%, 67%)" stop-opacity="0"></stop>
  </radialGradient><filter id="ccclaymoji-blur" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feGaussianBlur stdDeviation="31" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><filter id="inner-blur" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><filter id="eye-shadow" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feDropShadow stdDeviation="10" dx="10" dy="10" flood-color="#000000" flood-opacity="0.2" x="0%" y="0%" width="100%" height="100%" result="dropShadow"></feDropShadow>
</filter><linearGradient gradientTransform="rotate(-25)" id="eye-light" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="20%" stop-color="#555555" stop-opacity="1"></stop>
      <stop offset="100%" stop-color="black" stop-opacity="0"></stop>
    </linearGradient><linearGradient id="mouth-light" x1="50%" y1="0%" x2="50%" y2="100%">
    <stop offset="0%" stop-color="#ff8b76" stop-opacity="1"></stop>
    <stop offset="100%" stop-color="hsla(353, 94%, 45%, 1.00)" stop-opacity="0"></stop>
  </linearGradient><filter id="mouth-shadow" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
	<feDropShadow stdDeviation="10" dx="10" dy="10" flood-color="#a40000" flood-opacity="0.2" x="0%" y="0%" width="100%" height="100%" result="dropShadow"></feDropShadow>
</filter></defs><g stroke-linecap="round"><path d="M204 450.0000016040236C204 513.6306215501153 163.63061994609166 565.2129396094144 100 565.2129396094144C36.36966037735849 565.2129396094144 -4 513.6306215501153 -4 450.0000016040236C-4 386.36966198138214 36.36966037735849 334.7870635986328 100 334.7870635986328C163.63061994609166 334.7870635986328 204 386.36966198138214 204 450.0000016040236Z " fill="#c89924" opacity="0" filter="url(#ccclaymoji-blur)"></path><path d="M504 399.9999985755862C504 460.3758553530798 460.3758567774936 509.3196916702153 400 509.3196916702153C339.62440920716114 509.3196916702153 296 460.3758553530798 296 399.9999985755862C296 339.6244077827473 339.62440920716114 290.68030548095703 400 290.68030548095703C460.3758567774936 290.68030548095703 504 339.6244077827473 504 399.9999985755862Z " fill="hsl(41, 100%, 67%)"></path><path d="M504 399.9999985755862C504 460.3758553530798 460.3758567774936 509.3196916702153 400 509.3196916702153C339.62440920716114 509.3196916702153 296 460.3758553530798 296 399.9999985755862C296 339.6244077827473 339.62440920716114 290.68030548095703 400 290.68030548095703C460.3758567774936 290.68030548095703 504 339.6244077827473 504 399.9999985755862Z " fill="url(#ccclaymoji-grad-dark)"></path><path d="M504 399.9999985755862C504 460.3758553530798 460.3758567774936 509.3196916702153 400 509.3196916702153C339.62440920716114 509.3196916702153 296 460.3758553530798 296 399.9999985755862C296 339.6244077827473 339.62440920716114 290.68030548095703 400 290.68030548095703C460.3758567774936 290.68030548095703 504 339.6244077827473 504 399.9999985755862Z " fill="url(#ccclaymoji-grad-light)"></path><ellipse rx="22" ry="20.5" cx="372" cy="375" fill="black" filter="url(#eye-shadow)"></ellipse><ellipse rx="22" ry="20.5" cx="372" cy="375" fill="url(#eye-light)" filter="url(#inner-blur)"></ellipse><ellipse rx="22" ry="19.5" cx="431" cy="375" fill="black" filter="url(#eye-shadow)"></ellipse><ellipse rx="22" ry="19.5" cx="431" cy="375" fill="url(#eye-light)" filter="url(#inner-blur)"></ellipse><path d="M371.5 441.75Q402.5 470.75 438.5 441.75 " stroke-width="19" stroke="hsla(353, 94%, 45%, 1.00)" fill="none" filter="url(#mouth-shadow)" transform="rotate(360, 400, 400)"></path><path d="M371.5 441.75Q402.5 470.75 438.5 441.75 " stroke-width="6.333333333333333" stroke="url(#mouth-light)" fill="none" filter="url(#inner-blur)" transform="rotate(360, 400, 400)"></path></g></svg>
</>
  );
};

export default DelEmoji;