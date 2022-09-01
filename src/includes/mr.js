import { useEffect } from "react"
import { useRef, useState } from "react"

export default function({className , textColor,bgColor,hoverBgColor}){
    const region = document.getElementById('region')
    const mr = document.getElementById('mr')
    const [coordinates,setCoordinates]= useState({
        X:0,
        Y:0,
    })
    
    useEffect(()=>{
        document.onmousemove= (e)=>{
            setCoordinates({
                X:e.clientX +4,
                Y:e.clientY +4,
            })
            region.style.left = (e.clientX+35) + 'px'
            region.style.top = (e.clientY+35) + 'px'
            mr.onmouseleave = ()=>{
                region.style.display='none'
            }
            mr.onmouseenter = ()=>{
                region.style.display = 'block'
            }
           // region.style.transform =`translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%),0)`
        }
        console.log(coordinates)
        //region.style.transform =`translate3d(${coordinates.X}px,${coordinates.Y}px,0)`
    },[coordinates])
    return(
        <div className={className}>
    
{/*  */}
<p id='region'  className={`text-xl font-sand ${textColor} w-auto fixed transform duration-300 translate-x-[-50%] translate-y-[-50%]   z-[99999] font-semibold `}></p>
<svg id='mr' className="  stroke-slate-800  " width="462" height="508" viewBox="0 0 462 508"  xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_2)">
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M21.6678 303.415L20.8824 303.599L20.9286 303.23L20.8362 302.676L21.5754 302.445L21.6678 302.999V303.415Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M398.198 126.215H398.152L237.145 238.76L177.362 245.549L153.754 236.589L152.83 236.266H152.737L151.675 219.502L151.074 209.342L150.427 199.182L149.965 196.55L148.117 191.285L147.748 188.699L148.21 185.974L149.457 183.342L152.645 178.816L153.384 177.846L157.126 175.26L161.839 171.981L165.904 169.164L168.26 167.501L170.57 166.716L176.9 165.793L178.24 165.423L186.509 161.452L190.344 160.389L190.852 159.743L190.991 158.311V54.7716H194.779H308.431H312.22H315.407L316.147 54.5407L316.378 54.0327V52.1393V51.5389V49.9225V44.0575V40.1782V35.8371V31.1727V21.5207V16.8564L316.331 12.5153V8.58982V5.26473V2.67855V1.06219V0.461823L323.77 5.40328L331.208 10.2985L338.646 15.24L346.13 20.1353L353.569 25.0306L361.007 29.9258L368.445 34.8211L375.883 39.7164L383.321 44.6116L390.76 49.4607L398.198 54.356L405.636 59.2051L411.965 63.3153L418.249 67.4716L424.578 71.5818L430.861 75.692L435.435 78.6476L441.949 83.0811L448.463 87.5607L455.024 91.9942L461.538 96.4276L453.222 96.4738H428.228H419.912H394.918L395.287 99.7989L395.98 106.403L396.35 109.682L396.719 112.961L397.089 116.286L397.828 122.844L398.198 126.215V126.215Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Tiris-Zemmour"/>
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M179.903 408.109L179.302 408.386L178.886 408.848L178.84 409.54L178.471 410.002L176.992 410.233L175.791 410.741L175.098 411.48L173.897 411.619L173.065 412.311L172.095 414.159L171.079 414.62L170.293 414.805L169.6 415.175L169.184 415.498L168.722 415.729L168.26 415.59H167.752L166.089 416.098L165.719 416.468L165.304 416.791L164.195 417.068L161.469 420.208L161.099 420.901L160.776 421.732L160.822 423.164L160.591 424.503L160.499 425.935L158.743 428.567L158.004 430.091L157.45 432.123L156.526 434.017L153.338 435.217L149.827 435.587L148.025 437.757L147.794 440.898L147.101 441.96L131.762 446.116L130.145 446.809L129.73 448.425L129.545 450.134L128.806 451.012L127.697 451.658L126.958 451.935L127.142 451.289L127.235 450.781L126.865 450.735H126.542L126.172 450.827L125.849 451.012L125.572 451.289L124.925 452.259L124.648 452.536L124.047 453.044L123.446 453.367L123.123 453.505H122.846L122.522 453.459L122.199 453.228L121.876 452.951L121.645 452.582L121.46 452.212L121.136 451.15L120.952 450.827L120.721 450.596L120.12 450.134L119.797 449.949L118.318 449.488L117.671 449.164L117.533 448.518L117.764 447.825L117.718 447.502L117.579 447.132L117.209 446.671L117.117 446.393L117.209 446.07L117.44 445.47L117.394 445.193L117.163 444.916L116.84 444.731L116.101 444.454L115.777 444.223L115.084 443.438L114.853 443.207L113.606 442.468L111.342 440.436L110.095 438.912L109.217 438.312L108.94 438.035L108.293 437.203L107.969 437.019L107.554 436.926L106.676 436.88L106.26 436.695L106.075 436.372L106.029 435.679L105.89 435.402L105.521 435.217L104.089 435.356L103.719 435.171L103.673 434.894L103.858 434.109L103.904 433.693L103.719 433.416L103.442 433.185L101.039 432.262L100.3 432.308L99.9306 432.447L98.9604 433.047L98.5908 433.232L98.2212 433.324L97.8054 433.37H97.3896L95.865 433.047H95.4492L93.8784 433.509H93.4626L93.0468 433.463L91.9842 432.955L91.6608 432.862H91.2912L90.0438 433.185L89.5818 433.232L83.16 432.77L82.005 433.047L81.312 432.955L80.9424 432.447L80.6652 431.892L81.2658 431.107L84.9618 428.706L90.09 425.843L93.0006 424.596L94.1556 423.58L94.941 422.471L104.32 415.452L117.902 395.132L126.357 387.373L136.891 379.476L166.412 357.401L173.573 368.623L172.511 379.568L172.003 386.219H172.141L171.079 399.565L176.161 404.922L179.903 408.109V408.109Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Brakna"/>
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M26.2878 315.884H26.1492L26.334 315.237L27.6276 312.789L29.0598 310.757L29.4756 310.665L29.799 310.988L29.337 311.727L28.7364 312.328L28.2744 312.836L27.6276 313.99L26.2878 315.884V315.884ZM23.1462 312.466L22.9152 312.789L22.638 312.559L22.4532 311.681L22.638 310.896L23.1924 310.665L23.4696 310.711V311.127L23.3772 311.912L23.1462 312.466V312.466ZM28.4592 305.677L27.3042 311.081L26.3802 313.575L24.8556 315.837L24.2088 315.006L24.0702 314.729L24.1164 314.406L24.2088 314.036V313.667L23.9316 313.251L23.6544 312.512L23.9316 311.773L24.9942 310.111L25.0866 309.972L25.0404 308.772L25.0866 308.448L25.41 307.709L25.872 307.063L26.4264 306.878L26.9346 307.386L27.6276 305.77L28.1358 305.169L28.4592 305.677V305.677ZM24.255 276.86L24.024 276.999L23.562 276.814L23.2848 276.075L23.4696 275.475L23.8392 275.244L24.1626 275.336L24.3474 275.567L24.255 276.86V276.86ZM105.244 246.288L109.817 253.908L47.1702 253.677L56.9646 270.302L32.571 316.253L30.492 320.086L29.106 321.795L28.875 321.703L28.9674 321.564L29.8452 320.04L30.0762 319.255L30.3996 318.747L30.492 318.47L30.3534 318.193L30.1224 318.054L29.8914 318.008L29.7528 318.193L29.568 318.147L27.489 320.456L26.3802 321.333L27.951 318.054L27.3966 318.331L25.872 319.624L25.3638 320.225L25.0866 320.594L24.8556 321.056L24.8094 321.518L24.9942 321.98V322.211L24.6708 322.996L24.5784 323.365L24.486 323.457L24.255 323.55H24.024L23.793 323.504L23.6544 323.365L23.6082 323.319V323.18L23.562 322.949L23.4696 322.626L23.5158 321.656L23.562 321.333L23.9316 320.687L24.9018 319.671L25.0866 318.978L25.2252 318.147L25.5948 317.731L26.103 317.408L26.6574 316.946L30.261 311.45L30.492 311.265L30.723 311.081L30.954 310.896L31.0002 310.48L31.0464 309.695L31.185 309.418L31.416 309.28L31.5084 309.141L32.1552 308.402L32.34 308.171V307.756L32.2476 307.386L32.0628 307.063L31.7856 306.786L32.109 306.555L32.2938 306.232L32.34 305.862V305.447L31.7394 305.77L31.5546 306.001L31.416 305.354L31.9704 304.384L31.7856 303.784L31.0926 303.368L30.6306 303.692L30.3534 304.292L30.261 304.615L29.6142 304.985L29.3832 304.8L29.337 304.338L29.4756 303.784L29.7066 303.368L29.9376 302.999L32.1552 300.736L32.7558 299.766L33.0792 298.565L32.8944 297.596L31.7856 295.564L31.3236 294.455L31.6008 294.501L31.878 294.455L32.109 294.363L32.34 294.178L33.1716 292.885L33.495 292.1L33.6336 291.315L33.495 290.576L33.264 289.976L32.2014 288.313L31.9704 288.175L31.416 288.128L31.0464 287.944L30.9078 287.574L30.7692 287.205L30.6306 287.02L30.03 286.651L28.9674 284.018L28.644 283.649L28.2744 283.418L28.0434 283.187L27.951 282.771L28.0434 282.633L28.2744 282.54L28.413 282.448L28.3206 282.217L28.2282 282.079L27.9972 281.571L27.8124 280.832L26.4264 277.091L26.0568 276.537L25.5024 276.306L25.179 275.798L25.1328 274.782L24.948 274.089L24.3474 274.366L23.562 273.858V273.535L25.2714 273.073L25.7334 272.842L24.9942 272.75L23.6544 272.935L23.0538 272.842L22.5456 272.196L22.8228 271.919L22.2684 270.764L22.0374 270.579L21.2058 270.256L20.9748 272.011L21.252 275.89L20.7438 277.414L20.328 276.814L19.866 276.352L18.8958 275.752L18.6186 275.382L18.1104 274.459L17.7408 273.997L17.2788 273.627L16.1238 273.027L15.8466 272.75L15.8004 272.288L15.9852 272.057L16.2162 272.011L16.3548 271.919L16.3086 271.549L16.1238 271.226L16.0776 270.949L15.8928 270.348L15.477 269.84L14.4144 269.009L14.2758 268.686V267.947L14.1372 267.624L13.5366 266.931L13.0746 265.037L12.8436 264.576L12.474 264.114L12.1968 263.513L12.0582 262.867L11.9658 262.267L11.8272 262.451L11.55 262.636L11.4576 262.821L10.9032 262.267L10.7184 261.666L10.5798 261.02L10.395 260.327L10.164 260.004L9.84061 259.727L9.51721 259.357L9.37861 258.803L9.19381 258.387L8.26981 257.14L8.08501 256.586L7.99261 256.032L7.80781 255.385L7.34581 254.231L6.60661 253.353L6.09841 253.631L5.12821 255.478L3.51121 257.695L3.14161 258.018L2.91061 258.48L3.18781 259.219L3.60361 258.988L3.64981 259.68L3.41881 261.158L3.37261 262.451L3.18781 262.821L2.81821 263.052L1.98661 263.329L1.66321 263.652L1.61701 263.975L1.80181 264.299L2.17141 264.714L2.44861 265.361V265.638V266.1L2.07901 267.808L1.75561 268.686L1.38601 269.148L0.462006 264.807L0.600606 263.606L1.47841 259.911L1.75561 258.664L3.32641 254.046L4.06561 250.167L4.71241 246.657L5.08201 246.334H10.9956H15.3846H31.0464H41.5338H53.2224H65.7426L78.6324 246.288H91.5684H105.244V246.288Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Dakhlet-Nouadhibou' />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M109.817 253.908L110.557 254.97L108.062 322.765V328.815L108.016 339.806H106.491L33.2178 339.991L32.1552 337.404L30.492 334.633L28.2744 332.047L27.5814 331.355L27.3966 331.262L27.258 330.985L26.9808 330.939L26.6112 330.893L26.2878 330.708L25.641 330.292L24.1626 329.877L23.562 329.507L23.2848 329.045L22.638 327.337L22.5456 326.644L22.1298 325.859L21.4368 325.259L20.9748 324.658L21.483 324.012L23.7006 324.612L25.7796 324.335L27.6276 323.273L28.875 321.703L29.106 321.795L30.492 320.086L32.571 316.253L56.9646 270.302L47.1702 253.677L109.817 253.908V253.908Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Inchiri"/>
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M39.9168 383.956L40.194 381.046L39.7782 373.888L38.8542 364.005L39.2238 364.051L49.3416 363.913L49.3878 372.964L49.3416 383.956H39.9168V383.956Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Nouakchott" />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M166.412 357.401L136.891 379.476L126.357 387.373L117.902 395.132L104.32 415.452L94.941 422.471L94.1556 423.58L93.0006 424.596L90.09 425.843L84.9618 428.706L81.2658 431.107L80.6652 431.892L80.619 431.8L80.1108 431.292L79.695 431.061L78.8634 431.431L78.4938 431.661L78.2166 432.031L78.1242 432.585L78.0318 432.816L77.847 433.093L77.616 433.232L77.3388 433.37L77.0616 433.416L76.7844 433.324L76.4148 432.908L76.0914 432.493L75.768 432.077L75.2136 431.939L74.7054 432.077L74.382 432.447L74.2896 432.955L74.5206 433.509L75.1212 434.109L75.2598 434.34L75.2136 434.617L75.075 434.848L74.844 435.033L74.0124 435.31L69.993 435.956L69.3924 436.003L67.5906 435.725H66.3894L65.7888 435.864L64.218 436.557L63.7098 436.695H63.1554L62.6934 436.464L62.4162 436.141L62.1852 435.725L61.8618 435.402L61.2612 435.356L60.753 435.633L60.291 436.049L59.367 437.342L58.9974 437.711L58.5354 437.942L57.981 437.988L56.364 437.665L55.8096 437.757L55.3476 438.035L54.516 438.773L54.0078 439.097L53.4534 439.281L52.899 439.328L52.2984 439.189L51.4206 438.773L51.0972 438.681L49.8498 438.589L48.1404 438.035L47.5398 437.988L46.6158 438.173H46.2924L44.9988 437.85L44.4906 437.896L42.966 438.589L42.6888 438.635L42.4578 438.589L41.9958 438.404L41.6724 438.358L41.3952 438.404L41.118 438.543L40.8408 438.727L39.963 438.866L39.0852 438.773L38.346 438.358L37.6992 437.711L37.2372 437.019L36.96 436.741L36.6366 436.511L36.1284 436.418L35.7126 436.511L35.2506 436.695L34.1418 437.48L33.7722 437.665L33.3564 437.757L32.9406 437.711L31.6932 437.48L30.8154 437.665L30.03 438.173L29.337 438.82L28.8288 439.559L28.5054 440.297L28.3206 441.868L26.796 448.518L26.6112 448.98L26.3802 449.349L25.8258 449.765L24.4398 450.088L23.8854 450.55L23.6082 451.335L23.4234 454.013L22.7766 455.584L22.2684 457.292L22.0374 457.754L21.945 462.003L21.5754 464.173L20.7438 465.651L21.2982 459.047L21.2058 455.584L20.8362 447.687L21.2058 445.147L21.483 444.454L22.5456 442.422L22.8228 440.482L23.1462 439.882L23.562 438.866V434.617L23.8392 432.908L26.8422 425.196L27.6738 423.857L28.2282 421.178L28.875 419.885L30.6768 417.345L33.8646 410.279L34.0956 409.309L34.65 408.617L38.1612 397.487L39.27 392.638L39.5472 387.373L39.9168 383.956H49.3416L49.3878 372.964L49.3416 363.913L39.2238 364.051L38.8542 364.005L38.5308 360.311L38.115 358.879L36.1746 354.584L35.2506 349.643L34.6038 348.026L34.9734 347.103L34.881 345.994L33.4488 340.499L33.2178 339.991L106.491 339.806H108.016H144.791L166.412 357.401V357.401Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Trarza"/>
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M226.195 390.421L225.733 391.714L225.641 393.007L226.241 394.3L226.981 398.272L229.475 403.537L229.66 404.922L229.383 406.308L229.891 407.739L229.706 408.524L229.383 409.217L228.782 412.588L229.106 413.42L229.706 414.02L229.937 414.99L229.337 419.747V420.855L229.522 421.917L229.568 422.61L229.429 423.303L229.937 424.226L229.66 424.78L229.291 425.288L229.522 426.166L230.307 426.674L231.139 427.69L231.323 428.244L231.601 428.752L232.294 428.798L233.033 429.121L233.587 429.814L234.003 430.461L233.911 431.8L234.465 432.955L235.25 434.109L236.359 434.617L236.96 434.709L237.56 434.894L238.669 434.34L239.085 434.848L239.686 434.617L240.24 434.479L240.471 434.848L240.425 435.356L239.963 435.91L239.085 435.956V436.926L238.207 437.527L237.884 438.219L235.943 439.281H235.158L234.511 439.466L233.957 439.928L234.326 440.852L235.851 441.313L236.313 441.591L236.405 442.422L236.082 443.299L235.759 443.669L235.528 444.084L235.343 445.193L235.112 445.747L235.019 446.347L235.481 447.271L235.158 447.825L235.297 448.425L236.544 448.887L237.607 449.765L238.207 450.919L238.3 452.212L238.115 453.321L238.069 454.383L237.653 455.076V456.138L237.514 456.415L238.253 457.2L240.61 459.093L241.718 460.571L244.768 480.522H244.675L243.936 480.66H242.365L240.101 480.291L239.501 480.337L239.085 480.707L238.946 481.445L238.993 483.062L238.715 483.893L238.392 484.216L237.791 484.54L237.376 485.186L237.052 485.232H236.683L236.267 485.371L235.666 485.971L235.389 486.618L235.019 488.049L234.604 488.742L233.587 489.666L233.264 490.312L232.709 492.529L232.34 493.176L231.139 491.282L229.706 489.897L228.69 487.865L227.443 486.664L217.972 479.598L217.232 478.813L213.767 473.733L212.797 472.902L211.919 472.532L209.794 472.071L209.471 472.117H209.332L209.425 472.301L209.517 472.44L209.609 472.532L209.794 472.625L209.887 472.809V472.994V473.225L209.794 473.41L209.471 473.779L209.009 474.01L207.992 474.287L207.392 474.657L206.052 476.088L204.943 476.689L203.927 476.596L202.957 476.273L202.772 476.227L203.095 474.611L204.019 472.809L204.204 470.824L204.666 468.884L206.144 467.268L206.468 466.298L206.653 465.328L206.699 464.774L206.93 464.312L207.761 463.665L208.223 462.696L208.131 462.326L208.085 461.911L208.362 461.31L208.778 460.802L209.748 460.294L210.349 459.371L206.329 458.724L203.696 456.969L203.141 456.831L202.587 456.969L201.94 456.831L201.432 456.415L199.492 456.692L199.076 456.276L198.614 455.999L198.29 456.6L198.475 457.523L198.891 458.355L199.214 459.232L198.937 459.879L198.429 460.248L197.921 460.433L197.69 461.079L197.782 461.726H196.997L195.98 461.587L194.918 461.726L193.948 462.003L193.255 461.587L192.515 460.756L191.36 460.525L190.852 458.955L191.176 456.138L190.344 456.184L189.605 455.953L189.189 455.353L187.849 453.967L186.186 453.459L185.909 453.736L185.77 453.967L185.123 453.736L184.523 453.367L183.183 453.413L182.767 452.628L182.536 449.534L181.936 448.887L181.058 448.703L180.457 448.287L179.81 448.102L179.071 448.333L178.378 448.703L176.946 449.996L175.468 450.134L175.283 448.933L176.022 446.255L175.976 444.639L175.745 444.038L175.652 442.699L175.375 442.052L175.421 440.805L173.989 440.39L166.828 439.143L165.904 439.466L165.073 440.297L164.518 440.39L164.056 440.159H163.409L162.901 440.205L162.716 439.466V438.82L163.456 438.127L163.871 437.249V436.511L163.317 436.003L162.994 435.125L162.855 434.155L162.254 433.001L161.146 432.354L160.268 431.754L160.083 430.83L160.175 429.075L160.684 427.413L161.423 425.889L160.591 424.503L160.822 423.164L160.776 421.732L161.099 420.901L161.469 420.208L164.195 417.068L165.304 416.791L165.719 416.468L166.089 416.098L167.752 415.59H168.26L168.722 415.729L169.184 415.498L169.6 415.175L170.293 414.805L171.079 414.62L172.095 414.159L173.065 412.311L173.897 411.619L175.098 411.48L175.791 410.741L176.992 410.233L178.471 410.002L178.84 409.54L178.886 408.848L179.302 408.386L179.903 408.109L183.506 411.572L189.559 413.835L194.964 415.544L200.878 413.466L207.715 414.066L209.332 411.942L209.378 409.356L209.656 403.86L210.672 401.689L210.025 399.519L211.55 398.872L211.319 397.348L209.84 396.979L210.949 396.286L212.15 395.501L213.305 395.178L213.536 393.977L212.982 392.915L213.213 392.638L213.167 392.315L212.797 391.668L212.104 390.652L210.672 389.174L210.487 388.666L209.286 386.727L210.118 386.773L208.685 384.048L207.761 382.385L207.577 381.97L206.791 381.231L207.299 380.076L208.501 379.43L208.547 377.49L210.672 377.629L210.857 376.428L211.966 376.336L214.368 376.428L215.431 376.613L215.8 376.474L216.124 376.844L217.001 376.936L217.972 376.289L220.143 375.597L221.159 375.689L221.529 374.858L222.823 373.103L221.852 372.133L222.869 371.394L224.07 369.963L225.271 369.085L227.997 367.931L229.106 367.977L230.261 367.192L226.195 390.421V390.421Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Assaba'/>
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M202.772 476.227L201.848 476.088V477.428L201.755 477.843L200.785 478.905L200.277 480.152L199.723 482.923L198.429 485.648L198.29 486.295L198.059 488.142L197.366 490.22L197.274 491.051L197.32 491.421L197.413 491.929L197.366 492.344L196.951 493.915L196.858 495.115L196.812 495.3L197.182 495.577L197.413 495.485L197.597 495.3H197.828L198.29 495.669L198.568 496.085L198.66 496.639L198.568 497.378L198.29 497.979L198.106 498.671L197.921 500.057L197.967 500.288L198.059 500.472L198.337 500.842V501.073L198.106 501.211L197.828 501.304L197.69 501.35L197.551 501.535L197.366 501.765L197.182 501.996L197.043 502.366L196.72 502.874L196.165 503.382L195.472 503.751L193.948 504.075L193.439 504.536L192.562 505.783L191.869 506.245L191.129 506.43H190.39L189.697 506.245L189.42 506.476L189.235 507.076L188.912 507.538L188.496 507.307L186.925 505.876L186.325 505.599L185.539 505.737L183.922 506.291L183.091 506.43L182.259 506.291L181.612 505.968L179.533 504.305L177.177 503.197L176.53 502.643L175.237 501.119L174.728 500.796V500.38L173.851 497.286L173.666 496.916L173.342 496.547L172.927 496.316L172.049 496.085L171.633 495.854L170.986 495.346L168.907 494.145L168.445 493.499L168.122 493.222L167.798 493.083L167.198 493.176L165.997 493.545L165.581 493.591L164.611 493.176L163.502 492.113L165.026 486.664L166.181 484.078L169.462 478.721L171.494 476.135L172.326 475.673L172.973 475.026L173.25 473.502L174.128 471.516L180.55 465.651L181.335 464.543L181.797 463.573L182.629 462.834L184.338 462.372L186.232 462.649L188.773 461.403L191.36 460.525L192.515 460.756L193.255 461.587L193.948 462.003L194.918 461.726L195.98 461.587L196.997 461.726H197.782L197.69 461.079L197.921 460.433L198.429 460.248L198.937 459.879L199.214 459.232L198.891 458.355L198.475 457.523L198.29 456.6L198.614 455.999L199.076 456.276L199.492 456.692L201.432 456.415L201.94 456.831L202.587 456.969L203.141 456.831L203.696 456.969L206.329 458.724L210.349 459.371L209.748 460.294L208.778 460.802L208.362 461.31L208.085 461.911L208.131 462.326L208.223 462.696L207.761 463.665L206.93 464.312L206.699 464.774L206.653 465.328L206.468 466.298L206.144 467.268L204.666 468.884L204.204 470.824L204.019 472.809L203.095 474.611L202.772 476.227V476.227Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Guidimaka'/>
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M191.36 460.525L188.773 461.403L186.232 462.649L184.338 462.372L182.629 462.834L181.797 463.573L181.335 464.543L180.55 465.651L174.128 471.516L173.25 473.502L172.973 475.026L172.326 475.673L171.494 476.135L169.462 478.721L166.181 484.078L165.026 486.664L163.502 492.113L163.178 491.79L162.254 491.513L162.208 491.375L162.07 491.051V490.728L162.254 489.758V489.435L162.162 489.112L161.977 488.835L161.608 488.604L161.238 488.511H160.822L160.037 488.696L159.667 488.65L159.344 488.557L159.02 488.28L158.143 487.403L157.912 486.941L158.327 486.664L159.575 486.803L160.222 486.664L160.406 486.156L160.175 485.509L159.713 485.001L157.45 483.431L156.988 482.969L156.71 482.369L156.526 481.723V480.429L156.479 480.106L156.295 479.829L155.925 479.321L155.786 479.044L155.648 477.982L155.509 477.659L155.278 477.335L154.678 477.058L154.123 477.151L153.569 477.474L153.061 477.843L152.506 478.213L151.952 478.305L150.797 477.982L150.566 477.843L150.473 477.474L150.381 477.151V476.781L150.566 475.303L150.52 474.795L150.242 474.333L149.827 473.918L149.365 473.687L148.487 473.41L148.21 473.317L147.517 472.809L147.239 472.717L146.685 472.671L145.576 472.856L145.022 472.902L144.652 471.932L144.606 471.563L144.652 471.239L144.791 470.916L145.345 470.039L145.391 469.761L145.345 469.438L145.207 469.115L144.791 468.515L144.514 468.237L144.236 468.007L143.636 467.637L143.405 467.452L143.174 467.175L143.128 466.852L143.22 466.529L143.359 466.159L143.451 465.836L143.405 465.097L143.22 464.404L142.897 463.804L142.25 463.019L142.065 462.788L141.973 462.511V462.188L142.111 461.541L142.157 461.218L142.065 460.895L141.834 460.571L140.91 459.832L140.587 459.509L140.309 459.14L140.032 458.724L139.524 457.431L139.478 457.108L139.432 456.415L139.339 456.138L139.108 455.861L138.092 455.122L137.907 454.891L137.584 454.383L137.399 454.198L136.844 454.152L135.458 454.706L135.089 454.429L135.135 453.829L135.782 452.628L135.736 452.074L135.458 452.028L135.274 452.074L135.043 452.12L134.534 452.351L132.548 452.767L131.393 453.228L131.116 453.321L130.977 453.367H130.284L130.053 453.413L129.037 453.967L128.806 454.013L128.528 453.967L128.436 453.921L128.205 453.69L128.113 453.644L127.882 453.552L127.789 453.505L127.743 453.459L127.651 453.321V453.228L127.466 453.136L127.05 452.951L126.911 452.859L126.773 452.443L126.958 451.935L127.697 451.658L128.806 451.012L129.545 450.134L129.73 448.425L130.145 446.809L131.762 446.116L147.101 441.96L147.794 440.898L148.025 437.757L149.827 435.587L153.338 435.217L156.526 434.017L157.45 432.123L158.004 430.091L158.743 428.567L160.499 425.935L160.591 424.503L161.423 425.889L160.684 427.413L160.175 429.075L160.083 430.83L160.268 431.754L161.146 432.354L162.254 433.001L162.855 434.155L162.994 435.125L163.317 436.003L163.871 436.511V437.249L163.456 438.127L162.716 438.82V439.466L162.901 440.205L163.409 440.159H164.056L164.518 440.39L165.073 440.297L165.904 439.466L166.828 439.143L173.989 440.39L175.421 440.805L175.375 442.052L175.652 442.699L175.745 444.038L175.976 444.639L176.022 446.255L175.283 448.933L175.468 450.134L176.946 449.996L178.378 448.703L179.071 448.333L179.81 448.102L180.457 448.287L181.058 448.703L181.936 448.887L182.536 449.534L182.767 452.628L183.183 453.413L184.523 453.367L185.123 453.736L185.77 453.967L185.909 453.736L186.186 453.459L187.849 453.967L189.189 455.353L189.605 455.953L190.344 456.184L191.176 456.138L190.852 458.955L191.36 460.525V460.525Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Gorgol' />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M403.234 173.551L402.956 174.198L342.989 309.741L342.481 310.896L228.69 311.45H227.858L213.259 323.55L212.428 330.292L212.243 331.724L203.696 327.06L195.657 332.648L178.702 343.824L174.359 348.627L166.412 357.401L144.791 339.806H108.016L108.062 328.815V322.765L110.557 254.97L109.817 253.908L105.244 246.288H115.777H126.218H135.089H146.315H147.886H153.384L152.968 239.776L152.737 236.266H152.83L153.754 236.589L177.362 245.549L237.145 238.76L398.152 126.215H398.198L398.475 128.986L399.076 134.62L399.676 140.208L399.953 142.748L400.462 147.689L401.016 152.677L401.524 157.619L402.079 162.56L402.587 167.501L403.141 172.443L403.234 173.551V173.551Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Adrar' />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M304.273 477.889L304.366 477.797L304.55 477.566L305.936 476.181L305.521 463.758L301.871 455.722L309.309 445.562L308.385 442.837L313.79 437.342L316.193 434.617L322.522 427.551L331.115 418.038L324.694 410.88L319.519 405.107L298.775 407.832L298.868 407.601L342.481 310.896L342.989 309.741L402.956 174.198L403.234 173.551L403.649 177.384L404.204 182.326L404.712 187.267L405.266 192.163L405.775 197.104L406.329 201.999L406.837 206.895L407.392 211.79L407.9 216.731L408.962 226.522L409.517 231.371L410.579 241.161L411.088 246.011L411.642 250.906L412.15 255.755L412.705 260.65L412.936 263.005L413.49 268.178L414.091 273.35L414.322 275.705L414.83 280.047L415.338 285.08L415.892 290.068L416.447 295.102L416.955 300.089L417.509 305.077L418.572 315.099L419.126 320.086L419.681 325.582L419.958 327.891L420.189 330.2L421.067 338.559L421.436 342.253L421.806 345.948L422.591 353.291L422.961 356.985L423.331 360.68L423.746 364.328L424.116 368.023L424.486 371.671L425.271 379.014L425.641 382.57L426.01 386.172L426.38 389.728L426.749 393.284L427.119 396.84L427.858 403.952L428.228 407.508L428.597 411.064L429.337 418.176L429.752 421.732L430.122 425.288L430.492 428.798L430.861 432.354L431.231 435.91L431.369 437.48L431.693 438.127L432.062 438.727L433.541 439.789L434.927 440.713L436.59 441.868L438.068 442.93L439.593 443.992L441.118 445.054L441.487 445.424L441.533 445.932L441.349 447.086L440.656 450.827L439.963 454.521L439.27 458.216L438.577 461.911L437.884 465.697L437.191 469.531L436.451 473.317L435.666 477.659L435.62 477.843V477.936L435.574 477.982H435.527L435.435 477.936H429.521H424.486H419.542H416.816H413.906H403.511H391.868L379.441 477.889H373.065H366.597H341.326H329.683H324.324H319.288H316.054H307.738H304.273V477.889Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Hodeh-el-chargui' />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M298.775 407.832L319.519 405.107L324.694 410.88L331.115 418.038L322.522 427.551L316.193 434.617L313.79 437.342L308.385 442.837L309.309 445.562L301.871 455.722L305.521 463.758L305.936 476.181L304.55 477.566L304.366 477.797L304.273 477.889H303.673H291.245L291.476 474.333L291.984 471.655L291.892 470.362L290.968 469.992L290.275 470.454L287.965 473.225L287.41 474.241V475.396L288.011 477.843L288.427 480.014L279.094 480.429L277.292 480.799L276.553 481.122L274.382 482.369L272.95 482.739L268.607 482.323L264.218 482.969L262.693 482.923L261.815 482.692L260.476 481.815L259.69 481.445L259.413 481.399L258.72 481.538H258.397L255.163 480.245L254.654 480.152L252.853 480.291L251.79 480.106L247.955 480.014L247.401 480.152L246.662 479.968L246.061 480.06L244.768 480.522L241.718 460.571L240.61 459.093L238.253 457.2L237.514 456.415L237.653 456.138V455.076L238.069 454.383L238.115 453.321L238.3 452.212L238.207 450.919L237.607 449.765L236.544 448.887L235.297 448.425L235.158 447.825L235.481 447.271L235.019 446.347L235.112 445.747L235.343 445.193L235.528 444.084L235.759 443.669L236.082 443.299L236.405 442.422L236.313 441.591L235.851 441.313L234.326 440.852L233.957 439.928L234.511 439.466L235.158 439.281H235.943L237.884 438.219L238.207 437.527L239.085 436.926V435.956L239.963 435.91L240.425 435.356L240.471 434.848L240.24 434.479L239.686 434.617L239.085 434.848L238.669 434.34L237.56 434.894L236.96 434.709L236.359 434.617L235.25 434.109L234.465 432.955L233.911 431.8L234.003 430.461L233.587 429.814L233.033 429.121L232.294 428.798L231.601 428.752L231.323 428.244L231.139 427.69L230.307 426.674L229.522 426.166L229.291 425.288L229.66 424.78L229.937 424.226L229.429 423.303L229.568 422.61L229.522 421.917L229.337 420.855V419.747L229.937 414.99L229.706 414.02L229.106 413.42L228.782 412.588L229.383 409.217L229.706 408.524L229.891 407.739L229.383 406.308L229.66 404.922L229.475 403.537L226.981 398.272L226.241 394.3L225.641 393.007L225.733 391.714L226.195 390.421L238.207 393.931L254.285 398.503L277.2 397.025L277.477 397.256L298.775 407.832V407.832Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Hodh-el-garbi' />
<path onMouseEnter={(e)=>{region.innerHTML=e.target.id}} onMouseLeave={(e)=>{region.innerHTML=''}} className={` stroke-transparent fill-tranparent ${hoverBgColor}`} d="M298.775 407.832L277.477 397.256L277.2 397.025L254.285 398.503L238.207 393.931L226.195 390.421L230.261 367.192L229.106 367.977L227.997 367.931L225.271 369.085L224.07 369.963L222.869 371.394L221.852 372.133L222.823 373.103L221.529 374.858L221.159 375.689L220.143 375.597L217.972 376.289L217.001 376.936L216.124 376.844L215.8 376.474L215.431 376.613L214.368 376.428L211.966 376.336L210.857 376.428L210.672 377.629L208.547 377.49L208.501 379.43L207.299 380.076L206.791 381.231L207.577 381.97L207.761 382.385L208.685 384.048L210.118 386.773L209.286 386.727L210.487 388.666L210.672 389.174L212.104 390.652L212.797 391.668L213.167 392.315L213.213 392.638L212.982 392.915L213.536 393.977L213.305 395.178L212.15 395.501L210.949 396.286L209.84 396.979L211.319 397.348L211.55 398.872L210.025 399.519L210.672 401.689L209.656 403.86L209.378 409.356L209.332 411.942L207.715 414.066L200.878 413.466L194.964 415.544L189.559 413.835L183.506 411.572L179.903 408.109L176.161 404.922L171.079 399.565L172.141 386.219H172.003L172.511 379.568L173.573 368.623L166.412 357.401L174.359 348.627L178.702 343.824L195.657 332.648L203.696 327.06L212.243 331.724L212.428 330.292L213.259 323.55L227.858 311.45H228.69L342.481 310.896L298.868 407.601L298.775 407.832V407.832Z" fill="#7C7C7C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id='Taganet'/>
</g> fill-tranparent
<defs>
<clipPath id="clip0_2_2">
<rect width="462" height="508" fill="white"/>
</clipPath>
</defs>
</svg>


        </div>
    )
}