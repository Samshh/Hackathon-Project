import HomeBtn from '../../components/HomeLogo';
import RegistrationChoice from './components/RegistrationChoice';
export default function RegisterPage() {
  return (
    <main className="flex max-w-[90rem] mx-auto px-[3.5rem] pt-[1rem] pb-[3.5rem] h-screen overflow-hidden min-h-[51.875rem]">
      <div className="w-1/2 flex flex-col justify-start items-start">
        <HomeBtn />
        <svg width="615" height="924" viewBox="0 0 615 924" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M238.805 434.696C242.497 485.079 480.31 633.414 481.697 637.576C482.622 640.35 407.675 812.992 407.675 812.992L428.463 821.07C428.463 821.07 543.42 638.23 537.515 618.748C529.061 590.855 352.999 435.232 352.999 435.232L238.805 434.696Z"
            fill="#B28B67"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M413.145 786.999L447.086 799.354C518.654 718.604 546.707 651.977 541.592 618.03C536.477 584.083 357.713 434.819 357.713 434.819L236.371 434.819C240.511 551.499 460.934 638.02 463.883 642.992C466.831 647.964 437.817 696.662 413.145 786.999Z"
            fill="#2F3676"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M404.513 807.216C403.688 806.386 402.33 806.402 401.563 807.286C398.94 810.312 393.524 816.844 392.104 820.745C390.21 825.949 388.31 836.563 388.31 836.563C394.347 838.76 496.817 876.057 496.817 876.057C496.817 876.057 506.136 863.613 497.429 859.182C488.722 854.75 483.022 851.658 483.022 851.658L439.997 810.069C439.592 809.678 438.944 809.698 438.564 810.114L431.733 817.593C431.733 817.593 421.865 818.459 416.591 816.539C412.699 815.123 407.154 809.872 404.513 807.216Z"
            fill="#E4E4E4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M266.149 434.696L160.209 689.025L56.0874 904.04H80.6531L349.42 434.696H266.149Z"
            fill="#997659"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.2168 890.881C57.1571 890.383 55.8867 890.862 55.4686 891.956C54.0385 895.696 51.1826 903.687 51.1826 907.838C51.1826 913.376 53.0277 924 53.0277 924C59.452 924 168.499 924 168.499 924C168.499 924 173 909.12 163.303 907.933C153.605 906.747 147.191 905.791 147.191 905.791L92.5367 881.426C92.0221 881.196 91.4197 881.437 91.205 881.958L87.3445 891.323C87.3445 891.323 78.3671 895.511 72.7543 895.511C68.6132 895.511 61.6063 892.474 58.2168 890.881Z"
            fill="#E4E4E4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.49 859.373L120.075 869.609C162.281 807.56 338.911 553.136 358.277 434.696H236.758C172.085 520.316 105.72 796.297 65.49 859.373Z"
            fill="#5C63AB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M306.962 169.048C320.22 177.038 333.246 180.899 339.361 179.323C354.693 175.371 356.103 119.279 344.239 97.1662C332.376 75.0531 271.386 65.4147 268.312 109.228C267.245 124.434 273.63 138.005 283.064 149.078L266.149 227.919H315.284L306.962 169.048Z"
            fill="#B28B67"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M316.234 71.68C309.758 70.618 292.321 69.8879 289.106 69.8883C287.051 69.8883 284.824 70.3578 283.607 68.471C282.61 66.9258 282.975 64.3126 282.678 62.5196C282.332 60.4366 281.842 58.3806 281.346 56.3297C279.934 50.4938 277.798 44.9417 274.811 39.7289C269.205 29.9491 260.992 22.2886 250.624 17.831C239.174 12.909 226.218 11.782 213.903 12.7804C200.724 13.8485 188.794 18.1991 176.35 22.2933C164.492 26.1948 152.073 27.7305 139.671 25.8252C127.175 23.9059 117.734 17.1334 107.194 10.7054C96.4044 4.1248 84.0739 -0.179177 71.3186 0.810206C59.4119 1.73407 48.4381 6.65034 38.5925 13.2178C29.3808 19.3624 21.7799 26.7552 17.4887 37.16C12.8722 48.3524 12.8765 60.6379 20.4679 70.5294C31.4714 84.8672 51.899 88.5749 68.8938 88.2063C78.724 87.9937 88.3783 86.1993 97.6591 82.9351C110.036 78.5816 120.732 71.203 132.311 65.2162C137.745 62.4069 143.362 60.0996 149.249 58.4376C154.963 56.8242 160.59 56.0841 165.763 59.5354C171.235 63.1866 176.138 66.7731 182.398 69.0588C188.404 71.2515 194.765 72.478 201.164 72.4285C213.612 72.3323 225.884 68.4535 237.975 65.8554C247.835 63.7371 258.384 61.6259 268.436 63.6622C272.631 64.512 278.757 66.2664 280.272 70.6255C254.774 75.2468 244.76 106.781 251.948 129.93C255.828 142.424 279.149 157.03 288.216 150.461C293.961 146.3 290.473 140.837 288.216 137.23C283.894 130.324 282.415 121.453 290.413 116.644C297.312 112.497 304.566 122.345 304.703 122.335C306.599 122.185 322.983 112.919 334.271 99.3981C345.407 100.058 347.096 92.7155 344.437 86.7105C341.778 80.7056 325.181 73.1483 316.234 71.68Z"
            fill="#191847"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M488.648 442.138L423.343 394.183L408.906 429.869L473.576 456.686C491.865 478.17 502.092 487.127 504.257 483.555C506.083 480.543 504.656 477.724 503.342 475.127C502.318 473.104 501.362 471.216 502.066 469.478C503.672 465.507 515.958 465.925 527.6 466.82C539.242 467.715 535.849 462.535 533.042 459.977C521.158 452.864 506.36 446.918 488.648 442.138ZM146.173 526.637C152.172 514.465 172.604 395.838 172.604 395.838L215.387 396.006C215.387 396.006 175.762 523.923 172.604 531.749C168.501 541.917 175.47 556.689 180.195 566.706C180.926 568.256 181.604 569.691 182.178 570.979C175.621 573.913 172.472 570.366 169.151 566.628C165.4 562.405 161.432 557.936 152.09 562.283C148.48 563.962 145.065 565.947 141.728 567.887C130.202 574.587 119.613 580.741 105.209 571.854C102.925 570.444 100.423 565.139 106.469 560.993C121.533 550.664 143.24 532.587 146.173 526.637Z"
            fill="#B28B67"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M294.186 216.315L311.89 213.278C377.574 270.02 404.553 379.028 485.065 436.773L465.686 460.794C326.012 443.5 291.392 310.537 294.186 216.315Z"
            fill="#2D3B89"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M217.014 438.791C217.014 438.791 323.489 438.791 373.655 438.791C380.813 438.791 379.464 428.455 378.43 423.24C366.488 363.048 319.873 298.165 319.873 212.484L274.69 205.399C237.318 265.504 224.394 339.506 217.014 438.791Z"
            fill="#DDE3E9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M199.4 481.784C192.361 498.692 185.457 513.445 178.952 524.777H145.358C141.744 407.915 185.988 317.993 223.015 263.773C214.794 263.186 207.373 259.745 202.683 251.281C186.168 221.482 192.132 205.076 209.781 199.683C219.486 196.718 228.613 198.742 239.539 201.165C248.479 203.148 258.624 205.397 271.275 205.399C271.279 205.399 271.283 205.399 271.288 205.399C272.513 205.399 273.629 205.481 274.642 205.638L289.634 206.494C289.634 206.494 350.508 412.801 323.212 481.784H199.4Z"
            fill="#5872FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M199.4 481.784C208.637 459.599 218.109 433.706 227.224 406.964C230.617 436.413 236.268 465.992 245.676 481.784H199.4Z"
            fill="black"
            fill-opacity="0.1"
          />
        </svg>
      </div>
      <div className="w-1/2">
        <RegistrationChoice />
      </div>
    </main>
  );
}
