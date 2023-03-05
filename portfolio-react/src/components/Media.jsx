const Media = () => {
    return (
        //  <div className="left-media">
        <div className="new-media mt-3 mt-xl-4 me-xl-2">
            <a href="https://github.com/jpeng322" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-github">
                    <title>GitHub</title>
                    <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                    </path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/jacky-peng-322p/>" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-linkedin">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                    </path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>

            <a href="https://docs.google.com/document/d/1ivUrJ2jyC47fNAqGV3gozHcKCmA93VHY5DZw1DZKAB8/export?format=pdf"
                target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                    <title>Resume PDF</title>
                    <path
                        d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                        fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
                    <path d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160" fill="none"
                        stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="32" />
                </svg>
            </a>
            {/* <div className='line'></div> */}
        </div>
    );
}

export default Media;