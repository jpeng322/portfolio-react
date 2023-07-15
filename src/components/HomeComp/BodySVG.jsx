import { useState, useEffect } from "react";







const BodySVG = () => {

    const [normalEyes, setNormalEyes] = useState("")
    const [smileEyes, setSmileEyes] = useState("hidden")
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        if (counter < 11) {
            setTimeout(() => {
                if (normalEyes === "") {
                    setNormalEyes("hidden")
                    setSmileEyes("")
                }
                else {
                    if (smileEyes === "") {
                        setNormalEyes("")
                        setSmileEyes("hidden")
                    }
                }
                // console.log("CHANGED EYES", counter)
            }, 2000)
        }
        setCounter(prevCounter => prevCounter + 1)
    }, [normalEyes, smileEyes])
    return (
        <div className="jacky-container animate__animated animate__fadeIn animate__delay-2s">
            <svg id="jacky-svg" width="175" height="225" viewBox="0 0 175 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 3">
                    <g id="Group 2">
                        <g id="body smile">
                            <path id="Vector" d="M84.7775 75.9629C84.7775 75.9629 66.7675 96.5329 46.9375 103.923C32.1475 109.433 55.4475 108.133 53.8975 223.243L102.448 224.893V102.623C102.448 102.623 94.0875 95.4729 84.7875 75.9629H84.7775Z" fill="#180979" />
                            <path id="Vector_2" d="M128.028 75.9629C128.028 75.9629 123.388 95.0129 154.788 103.923C169.218 108.013 173.368 107.173 174.827 222.283L102.438 224.883V102.613C102.438 102.613 119.248 95.4629 128.028 75.9529V75.9629Z" fill="#180979" />
                            <g id="Frame 1">
                                <path id="Vector_3" d="M84.0175 96.6529V150.073C84.0175 150.753 86.9175 150.273 86.9175 149.293V95.8729C86.9175 95.1929 84.0175 95.6729 84.0175 96.6529Z" fill="white" />
                                <path id="Vector_4" d="M121.938 96.6529V150.073C121.938 150.733 124.838 150.263 124.838 149.293V95.8729C124.838 95.2129 121.938 95.6829 121.938 96.6529Z" fill="white" />
                            </g>
                            <path id="Vector_5" d="M136.107 78.8129C139.617 93.4729 121.037 103.123 102.437 103.123C83.8375 103.123 64.6575 91.5929 68.7675 78.8129C72.2175 68.0929 83.8375 54.5029 102.437 54.5029C121.037 54.5029 132.987 65.7529 136.107 78.8129Z" fill="#180979" />
                            <path id="Vector_6" d="M87.8575 57.0229C87.8575 57.0229 89.5175 74.0629 87.3575 79.7229C86.8175 81.1329 87.6175 82.8029 89.1075 84.5029C95.7175 92.0229 107.328 92.4329 114.848 85.8329L120.238 81.1029C120.238 81.1029 114.267 75.7729 118.878 53.5629" fill="#FAB7A4" />
                            <path id="Vector_7" d="M80.6175 41.2729C80.6175 41.2729 77.7075 35.3829 76.4175 41.2729C76.4175 41.2729 76.2675 49.4529 77.4875 50.8329C77.4875 50.8329 79.4775 52.2829 79.7075 53.6629C79.7075 53.6629 81.2375 55.5729 82.2275 53.6629" fill="#F9B2A0" />
                            <path id="Vector_8" d="M80.2775 44.0429C80.2775 44.0429 79.3175 41.6929 78.6675 43.2129C78.6675 43.2129 77.7475 47.0629 78.4375 49.0129C78.4375 49.0129 78.1275 50.0829 82.2175 51.0729" fill="#F4A897" />
                            <path id="Vector_9" d="M125.667 40.4929C125.667 40.4929 128.577 34.6029 129.867 40.4929C129.867 40.4929 130.017 48.6729 128.797 50.0529C128.797 50.0529 126.807 51.5029 126.577 52.8829C126.577 52.8829 125.047 54.7929 124.057 52.8829" fill="#F9B2A0" />
                            <path id="Vector_10" d="M125.788 43.3129C125.788 43.3129 126.748 39.7529 127.398 41.2729C127.558 42.1729 128.148 46.7929 127.628 48.2729C127.628 48.2729 127.938 49.3429 123.848 50.3329" fill="#F4A897" />
                            <path id="Vector_11" d="M88.0275 59.9729L88.4175 72.1729C88.4175 72.1729 113.367 83.2229 120.977 59.2129L94.3375 42.1529L88.0275 59.9729Z" fill="#E18987" />
                            <path id="Vector_12" d="M125.038 28.4329C125.038 28.4329 121.088 6.38291 102.438 9.11291C102.438 9.11291 78.4275 7.50291 79.3675 30.2029C79.3675 30.2029 78.4275 52.5729 84.5675 61.2729C84.5675 61.2729 99.2175 80.7529 112.128 71.0929C112.128 71.0929 120.948 64.8129 122.368 58.8629C122.368 58.8629 127.088 51.4629 125.048 28.4429L125.038 28.4329Z" fill="#FAB7A4" />
                            <path id="Vector_13" d="M93.2975 1.52292C89.2675 2.31292 85.7675 4.79293 81.9975 6.43293C78.5275 7.94293 74.6875 9.84293 73.5775 13.4629C75.9575 12.1629 78.3275 10.8629 80.7075 9.57293C78.1075 12.1629 76.0275 15.2629 74.5975 18.6429C75.8875 16.7429 77.5875 15.1229 79.5375 13.9029C78.2775 16.3429 77.0075 18.8129 76.2475 21.4529C75.4875 24.0929 75.2375 26.9529 76.0575 29.5829C76.8275 32.0629 79.1875 37.0529 79.4775 39.6329C80.3075 34.5229 81.4175 26.7929 84.0775 22.3529C84.6875 22.8629 85.0975 23.5929 85.2175 24.3829C85.2675 23.3029 85.3175 22.2029 85.6875 21.1929C86.0575 20.1829 86.7775 19.2329 87.7975 18.8829C87.1375 21.9129 86.4675 24.9429 85.8075 27.9729C87.5375 24.2929 89.3575 20.4929 92.4875 17.8929C90.8075 20.2129 89.6075 22.8829 88.9975 25.6929C89.8775 24.4429 90.3275 22.9329 91.2175 21.6929C92.5175 19.8929 94.6575 18.7929 95.7675 16.8729C94.9175 18.7429 94.0575 20.6229 93.2075 22.4929C94.3075 20.4429 95.9275 18.6729 97.8675 17.3829C96.9875 19.8529 96.4775 22.4429 96.3475 25.0629C97.1175 22.7229 98.4175 20.5729 100.107 18.7929C99.9375 20.2729 99.5475 21.7329 98.9575 23.1029C99.9875 21.5529 101.017 20.0029 102.047 18.4529C103.447 16.3429 105.047 14.0829 107.467 13.3529C106.887 15.5629 106.217 17.7529 105.447 19.9029C107.017 17.4129 108.847 15.0729 110.887 12.9529C111.197 13.4929 111.447 14.0829 111.617 14.6829C111.547 13.4529 112.827 12.4429 114.047 12.5129C115.267 12.5829 116.327 13.4729 116.927 14.5429C117.527 15.6129 117.747 16.8529 117.957 18.0629C118.087 18.7929 118.217 19.5229 118.347 20.2629C118.397 20.5629 118.457 20.8629 118.587 21.1329C118.857 21.6729 119.397 22.0229 119.877 22.3829C123.537 25.1029 124.377 36.5229 125.527 40.9429C127.727 37.8329 128.157 27.0429 127.977 23.2429C127.867 21.0129 127.737 18.6929 126.637 16.7529C125.807 15.2929 124.427 14.0229 124.307 12.3429C124.267 11.8329 124.357 11.3029 124.247 10.7929C124.137 10.2829 123.757 9.77292 123.247 9.77292C123.407 9.14292 123.477 8.48292 123.457 7.83292C123.287 8.05292 123.107 8.26293 122.937 8.48293C122.787 7.81293 122.647 7.13293 122.497 6.46293C121.497 7.04293 120.387 7.42293 119.247 7.57293C119.477 7.57293 119.707 7.46293 119.867 7.29293C119.297 6.22293 118.177 5.47293 116.977 5.35293C117.257 5.30293 117.547 5.25292 117.827 5.20292C116.817 4.01292 115.777 2.79292 114.367 2.11292C112.937 1.42292 111.297 1.38293 109.707 1.34293C104.277 1.23293 98.6175 0.512918 93.2875 1.56292L93.2975 1.52292Z" fill="#231F20" />
                            <g id="Group">
                                <path id="Vector_14" d="M85.4675 30.3129C88.5475 28.3729 92.4475 27.7829 95.9675 28.7329L85.4675 30.3129Z" fill="#775039" />
                                <path id="Vector_15" d="M86.7375 32.4729C87.1275 32.2329 87.5375 32.0029 87.9475 31.8029C88.0075 31.7729 88.6575 31.4729 88.2775 31.6429C87.8975 31.8129 88.5575 31.5429 88.6275 31.5129C89.4475 31.2129 90.2875 31.0229 91.1375 30.8629C91.4175 30.8229 91.3675 30.8229 90.9875 30.8829C91.0975 30.8729 91.2175 30.8529 91.3275 30.8429C91.4975 30.8229 91.6775 30.8129 91.8475 30.8029C92.3075 30.7729 92.7675 30.7729 93.2375 30.8029C93.4075 30.8029 93.5875 30.8229 93.7575 30.8429C93.8775 30.8529 93.9875 30.8629 94.0975 30.8729C93.7175 30.8229 93.6675 30.8129 93.9475 30.8529C94.4075 30.9329 94.8575 31.0229 95.3075 31.1429C96.5675 31.4729 98.0775 30.7229 98.3875 29.3929C98.6975 28.0629 97.9975 26.6729 96.6375 26.3129C92.4575 25.2229 87.8875 25.8729 84.2175 28.1529C83.1075 28.8429 82.5775 30.4229 83.3175 31.5729C84.0575 32.7229 85.5475 33.2029 86.7375 32.4729Z" fill="#231F20" />
                            </g>
                            <g id="Group_2">
                                <path id="Vector_16" d="M108.198 28.7229L110.058 28.2729C111.228 27.9929 112.418 27.7029 113.628 27.7129C114.708 27.7129 115.767 27.9629 116.827 28.2029C117.807 28.4229 118.778 28.6529 119.758 28.8729" fill="#775039" />
                                <path id="Vector_17" d="M108.868 31.1329C109.768 30.9129 110.658 30.6929 111.568 30.4829C111.848 30.4229 112.127 30.3629 112.407 30.3129C112.547 30.2829 113.138 30.1129 112.588 30.2729C112.998 30.1529 113.547 30.2029 113.967 30.2229C114.087 30.2229 114.877 30.2929 114.267 30.2229C114.477 30.2429 114.697 30.2929 114.907 30.3329C115.367 30.4229 115.828 30.5229 116.278 30.6329C117.218 30.8529 118.157 31.0629 119.107 31.2829C120.377 31.5729 121.877 30.8929 122.187 29.5329C122.477 28.2629 121.807 26.7729 120.437 26.4529C118.317 25.9629 116.147 25.3129 113.967 25.2129C111.787 25.1129 109.627 25.8029 107.547 26.3029C106.277 26.6129 105.397 28.1229 105.797 29.3829C106.227 30.7029 107.508 31.4529 108.878 31.1329H108.868Z" fill="#231F20" />
                            </g>
                            <path id="Vector_18" className={smileEyes} d="M93.0775 55.7129C93.0775 55.7129 102.878 53.4729 113.088 53.9329C113.088 53.9329 111.198 60.1229 104.598 58.9829C104.598 58.9829 103.338 58.7529 100.408 59.5529C100.408 59.5529 95.4175 60.1229 93.0675 55.7129H93.0775Z" fill="white" />
                            <path id="Vector_19" d="M99.9875 32.9229C99.9875 32.9229 102.247 31.2029 105.117 32.9229" stroke="#BCBEC0" strokeMiterlimit="10" />
                            <path id="Vector_20" d="M105.418 33.6829C105.418 33.6829 105.738 29.5729 115.448 30.0429C115.448 30.0429 121.238 29.6929 120.948 34.4129C120.948 34.4129 121.487 42.4529 113.607 42.4829C113.607 42.4829 105.528 43.6729 105.408 33.6929L105.418 33.6829Z" stroke="#231F20" strokeWidth="0.25" strokeMiterlimit="10" />
                            <path id="Vector_21" d="M105.417 33.9629C105.417 33.9629 103.957 34.3329 104.897 32.7029C104.897 32.7029 106.477 28.3729 119.087 29.4929C119.087 29.4929 127.337 29.4029 120.957 33.8529C120.957 33.8529 121.697 28.6929 110.987 30.2029C110.987 30.2029 105.807 30.5629 105.407 33.9729L105.417 33.9629Z" fill="#3C2317" />
                            <path id="Vector_22" d="M99.6875 33.6829C99.6875 33.6829 99.3675 29.5729 89.6575 30.0429C89.6575 30.0429 83.8675 29.6929 84.1575 34.4129C84.1575 34.4129 83.6175 42.4529 91.4975 42.4829C91.4975 42.4829 99.5775 43.6729 99.6975 33.6929L99.6875 33.6829Z" stroke="#231F20" strokeWidth="0.25" strokeMiterlimit="10" />
                            <path id="Vector_23" d="M99.6875 33.9629C99.6875 33.9629 101.148 34.3329 100.208 32.7029C100.208 32.7029 98.6275 28.3729 86.0175 29.4929C86.0175 29.4929 77.7675 29.4029 84.1475 33.8529C84.1475 33.8529 83.4075 28.6929 94.1175 30.2029C94.1175 30.2029 99.2975 30.5629 99.6975 33.9729L99.6875 33.9629Z" fill="#3C2317" />
                            <path id="Vector_24" d="M103.217 36.8729C103.217 36.8729 96.5575 49.3929 104.508 47.2529" stroke="#F7A197" strokeWidth="2" strokeMiterlimit="10" />
                            <path id="Vector_25" d="M146.538 222.823V148.143L154.798 222.823H146.538Z" fill="#211A4E" />
                            <path id="Vector_26" d="M79.3175 75.1729C79.3175 75.1729 75.4775 83.6529 85.4675 90.4729" stroke="#211A4E" strokeMiterlimit="10" />
                            <path id="Vector_27" d="M110.758 93.5029C110.758 93.5029 137.428 84.2029 123.378 72.0129" stroke="#211A4E" strokeMiterlimit="10" />
                            <path id="Vector_28" d="M84.1375 82.7629C84.1375 82.7629 88.5575 95.8429 100.797 94.2229" stroke="#211A4E" strokeMiterlimit="10" />
                            <path id="Vector_29" className={smileEyes} d="M87.7175 36.3529C87.4575 36.5429 87.7775 36.3229 87.8375 36.2729C88.0375 36.1429 88.2375 36.0229 88.4475 35.9129C88.9275 35.6529 89.6575 35.3329 90.2875 35.1629C92.2075 34.6229 94.0975 35.1029 95.4575 36.5829C95.7075 36.8529 96.7975 36.2829 96.4875 35.9429C93.9175 33.1429 89.6875 34.1729 86.9375 36.1729C86.7775 36.2929 86.6575 36.5329 86.8975 36.6229C87.1575 36.7229 87.5175 36.5029 87.7175 36.3629V36.3529Z" fill="#231F20" />
                            <path id="Vector_30" className={smileEyes} d="M110.617 36.5829C111.237 35.9429 112.047 35.4429 112.877 35.1229C113.597 34.8429 114.387 34.7229 115.157 34.8429C116.287 35.0229 117.227 35.6729 118.037 36.4529C118.237 36.6429 118.627 36.7729 118.887 36.6429C119.147 36.5129 119.057 36.2229 118.887 36.0529C117.177 34.3929 114.857 33.4529 112.497 34.1829C111.437 34.5129 110.367 35.1129 109.587 35.9229C109.177 36.3429 110.267 36.9429 110.627 36.5729L110.617 36.5829Z" fill="#231F20" />
                        </g>
                        <g id="Vector_31">
                            <path d="M12.4216 48.4275L13.7916 42.5675C13.7916 42.5675 10.2616 41.5275 13.1116 31.1675L14.6816 20.5675V11.2575C14.6816 11.2575 14.9216 8.04752 17.3316 8.60752C17.3316 8.60752 20.3016 8.84753 19.2616 19.5275C19.2616 19.5275 20.2216 21.5375 21.2716 19.7675L23.3016 3.95753C23.4216 2.99753 23.9016 2.09753 24.6916 1.53753C25.3216 1.09753 26.1416 0.847528 27.0216 1.42753C27.9016 2.00753 28.3116 3.09754 28.1716 4.13754L26.0016 20.9775C26.0016 20.9775 26.7216 23.6275 28.3316 20.8975L32.0516 3.43752C32.2516 2.47752 32.6816 1.56752 33.3516 0.857521C34.0916 0.077521 35.1216 -0.482479 36.1916 0.607521C37.0116 1.43752 37.2716 2.66752 37.0116 3.79752C35.9416 8.42752 32.5116 23.2275 32.5116 23.2275C32.5116 23.2275 31.3116 27.9475 33.8816 24.2175L39.4916 6.89753C39.7916 5.98753 40.3616 5.15753 41.1816 4.66753C41.8716 4.24753 42.7316 4.03753 43.5216 4.70753C44.3116 5.37753 44.5016 6.44753 44.2016 7.39753L38.0616 26.3575C38.0616 26.3575 36.6916 30.5375 40.3116 29.7275C40.3116 29.7275 50.1916 23.9475 50.9116 29.8875C50.9116 29.8875 50.5616 30.5075 44.2216 33.9375C43.1516 34.5175 42.1616 35.2375 41.2616 36.0675C39.6016 37.6175 36.9716 40.0775 36.5416 40.5675C36.5416 40.5675 35.1716 45.7875 29.7916 46.6675L28.3416 52.0475L15.4916 57.1875L12.4416 48.4375L12.4216 48.4275Z" fill="#FAB7A4" />
                            <path d="M67.6254 97.99C67.6254 97.99 80.0954 120.04 71.2754 139.55C71.2754 139.55 30.6854 152.11 1.09543 137C1.09543 137 -3.78457 88.4 7.05543 45L34.1154 52.01L25.9054 102.95C25.6354 105.69 27.5854 107.97 29.7654 107.42L67.6254 97.99Z" fill="#180979" />
                        </g>
                    </g>
                    <g id="normal mouth" className={normalEyes}>
                        <path id="Vector_32" d="M94.4533 57.0343C95.9133 57.8743 97.6834 58.1443 99.3434 58.2143C103.663 58.4043 107.933 56.8243 111.673 54.7943C113.043 54.0443 111.283 52.5443 110.203 53.1343C106.843 54.9643 103.083 56.4243 99.1933 56.2943C98.6033 56.2743 98.3734 56.2543 97.7434 56.1443C97.3334 56.0743 96.9334 55.9743 96.5334 55.8643C96.9334 55.9843 96.4233 55.8243 96.3233 55.7843C96.2233 55.7443 96.1334 55.7143 96.0334 55.6643C95.8934 55.6043 95.4633 55.3643 96.0033 55.6643C95.4833 55.3643 94.7533 55.2243 94.2633 55.6643C93.8333 56.0443 93.9533 56.7443 94.4533 57.0243V57.0343Z" fill="#E18987" />
                    </g>
                    <g id="open eyes" className={normalEyes}>
                        <path id="Vector_33" d="M113.925 37.58C114.519 37.58 115 36.5547 115 35.29C115 34.0253 114.519 33 113.925 33C113.331 33 112.85 34.0253 112.85 35.29C112.85 36.5547 113.331 37.58 113.925 37.58Z" fill="#231F20" stroke="#231F20" strokeMiterlimit="10" />
                        <path id="Vector_34" d="M91.075 38.09C91.6687 38.09 92.15 37.0647 92.15 35.8C92.15 34.5353 91.6687 33.51 91.075 33.51C90.4813 33.51 90 34.5353 90 35.8C90 37.0647 90.4813 38.09 91.075 38.09Z" fill="#231F20" stroke="#231F20" strokeMiterlimit="10" />
                    </g>
                </g>
            </svg>

        </div>
    );
}

export default BodySVG;