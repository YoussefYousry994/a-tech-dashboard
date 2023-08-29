import Arrow from "../../../public/icons/arrow down.svg";
const Calendar = () => {
  return (
    <div className="w-80 h-36 relative mb-4">
      <div className="w-10 h-20 left-[252px] top-[63px] absolute bg-yellow-400 rounded-lg" />
      <div className="w-7 h-7 left-[258px] top-[94.50px] absolute bg-zinc-800 rounded-full" />
      <div className="left-[316.50px] top-[103.50px] absolute text-gray-900 text-xs font-medium">
        24
      </div>
      <div className="left-[264.75px] top-[103.50px] absolute text-white text-xs font-medium">
        25
      </div>
      <div className="left-[216.75px] top-[103.50px] absolute text-gray-900 text-xs font-medium">
        26
      </div>
      <div className="left-[167.25px] top-[103.50px] absolute text-gray-900 text-xs font-medium">
        27
      </div>
      <div className="left-[113.25px] top-[103.50px] absolute text-gray-900 text-xs font-medium">
        28
      </div>
      <div className="left-[59.25px] top-[103.50px] absolute text-gray-900 text-xs font-medium">
        29
      </div>
      <div className="left-[6px] top-[103.50px] absolute text-gray-900 text-xs font-medium">
        30
      </div>
      <div className="origin-top-left w-28  left-[6px] top-[11.25px] absolute">
        {/* <div className="btn__custom"> */}
        <button
          type="button"
          className="px-3  text-sm font-medium text-center inline-flex items-center text-gray-400 bg-purple-50 rounded-lg hover:bg-purple-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 4.4375C12.8075 4.4375 13.0625 4.1825 13.0625 3.875V1.625C13.0625 1.3175 12.8075 1.0625 12.5 1.0625C12.1925 1.0625 11.9375 1.3175 11.9375 1.625V3.875C11.9375 4.1825 12.1925 4.4375 12.5 4.4375Z"
              fill="#1C1C28"
            />
            <path
              d="M6.5 4.4375C6.8075 4.4375 7.0625 4.1825 7.0625 3.875V1.625C7.0625 1.3175 6.8075 1.0625 6.5 1.0625C6.1925 1.0625 5.9375 1.3175 5.9375 1.625V3.875C5.9375 4.1825 6.1925 4.4375 6.5 4.4375Z"
              fill="#1C1C28"
            />
            <path
              d="M3.125 7.50497H15.875C16.1825 7.50497 16.4375 7.24997 16.4375 6.94247C16.4375 6.63497 16.1825 6.37997 15.875 6.37997H3.125C2.8175 6.37997 2.5625 6.63497 2.5625 6.94247C2.5625 7.24997 2.8175 7.50497 3.125 7.50497Z"
              fill="#1C1C28"
            />
            <path
              d="M6.5 17.1875H12.5C15.2375 17.1875 16.8125 15.6125 16.8125 12.875V6.5C16.8125 3.7625 15.2375 2.1875 12.5 2.1875H6.5C3.7625 2.1875 2.1875 3.7625 2.1875 6.5V12.875C2.1875 15.6125 3.7625 17.1875 6.5 17.1875ZM12.5 3.3125C14.645 3.3125 15.6875 4.355 15.6875 6.5V12.875C15.6875 15.02 14.645 16.0625 12.5 16.0625H6.5C4.355 16.0625 3.3125 15.02 3.3125 12.875V6.5C3.3125 4.355 4.355 3.3125 6.5 3.3125H12.5Z"
              fill="#1C1C28"
            />
            <path
              d="M12.125 11C12.2225 11 12.32 10.9775 12.41 10.94C12.5 10.9025 12.5825 10.85 12.6575 10.7825C12.725 10.7075 12.7775 10.625 12.815 10.535C12.8525 10.445 12.875 10.3475 12.875 10.25C12.875 10.055 12.7925 9.86002 12.6575 9.71752C12.5825 9.65002 12.5 9.5975 12.41 9.56C12.275 9.5 12.125 9.485 11.975 9.515C11.93 9.5225 11.885 9.5375 11.84 9.56C11.795 9.575 11.75 9.59752 11.705 9.62752C11.6675 9.65752 11.63 9.68752 11.5925 9.71752C11.5625 9.75502 11.525 9.79251 11.5025 9.83001C11.4725 9.87501 11.45 9.92001 11.435 9.96501C11.4125 10.01 11.3975 10.055 11.39 10.1C11.3825 10.1525 11.375 10.1975 11.375 10.25C11.375 10.445 11.4575 10.64 11.5925 10.7825C11.735 10.9175 11.93 11 12.125 11Z"
              fill="#1C1C28"
            />
            <path
              d="M9.5 11C9.695 11 9.88999 10.9175 10.0325 10.7825C10.0625 10.745 10.0925 10.7075 10.1225 10.67C10.1525 10.625 10.175 10.58 10.19 10.535C10.2125 10.49 10.2275 10.445 10.235 10.4C10.2425 10.3475 10.25 10.3025 10.25 10.25C10.25 10.1525 10.2275 10.055 10.19 9.96499C10.1525 9.87499 10.1 9.7925 10.0325 9.7175C9.82249 9.5075 9.485 9.43999 9.215 9.55999C9.1175 9.59749 9.04251 9.65 8.96751 9.7175C8.83251 9.86 8.75 10.055 8.75 10.25C8.75 10.3025 8.75749 10.3475 8.76499 10.4C8.77249 10.445 8.78749 10.49 8.80999 10.535C8.82499 10.58 8.84751 10.625 8.87751 10.67C8.90751 10.7075 8.93751 10.745 8.96751 10.7825C9.04251 10.85 9.1175 10.9025 9.215 10.94C9.305 10.9775 9.4025 11 9.5 11Z"
              fill="#1C1C28"
            />
            <path
              d="M12.125 13.625C12.2225 13.625 12.32 13.6025 12.41 13.565C12.5 13.5275 12.5825 13.475 12.6575 13.4075C12.725 13.3325 12.7775 13.2575 12.815 13.16C12.8525 13.07 12.875 12.9725 12.875 12.875C12.875 12.68 12.7925 12.485 12.6575 12.3425C12.5825 12.275 12.5 12.2225 12.41 12.185C12.1325 12.065 11.8025 12.1325 11.5925 12.3425C11.5625 12.38 11.525 12.4175 11.5025 12.455C11.4725 12.5 11.45 12.545 11.435 12.59C11.4125 12.635 11.3975 12.68 11.39 12.7325C11.3825 12.7775 11.375 12.83 11.375 12.875C11.375 13.07 11.4575 13.265 11.5925 13.4075C11.735 13.5425 11.93 13.625 12.125 13.625Z"
              fill="#1C1C28"
            />
          </svg>
          مارس 2023
          <img src={Arrow} alt="icon" />
        </button>

        <div className="w-28 left-[220px] top-[5px] absolute text-gray-900  text-base font-medium">
          تقويم المواعيد
        </div>
        {/* </div> */}
      </div>
      <div className="origin-top-left rotate-180 w-24 h-9 left-[-238.75px] top-0 absolute">
        <div className="w-3 h-3 left-[-87.75px] top-[12.75px] absolute" />
      </div>

      <div className="w-80 h-px left-0 top-[53.25px] absolute border border-gray-100"></div>
      <div className="w-80 h-px left-0 top-[150px] absolute border border-gray-100"></div>
      <div className="left-[55.50px] top-[78px] absolute text-zinc-400 text-xs font-normal">
        الخميس
      </div>
      <div className="left-[3px] top-[78px] absolute text-zinc-400 text-xs font-normal">
        الجمعة
      </div>
      <div className="left-[113.25px] top-[78px] absolute text-zinc-400 text-xs font-normal">
        الأربعاء
      </div>
      <div className="left-[165px] top-[78px] absolute text-zinc-400 text-xs font-normal">
        الثلاثاء
      </div>
      <div className="left-[214.50px] top-[78px] absolute text-zinc-400 text-xs font-normal">
        الإثنين
      </div>
      <div className="left-[264.75px] top-[78px] absolute text-zinc-800 text-xs font-normal">
        الاحد
      </div>
      <div className="left-[314.25px] top-[78px] absolute text-zinc-400 text-xs font-normal">
        السبت
      </div>
      <div className="w-1 h-1 left-[322.50px] top-[120.75px] absolute bg-rose-500 rounded-full" />
      <div className="w-3 h-1 left-[270.75px] top-[129px] absolute">
        <div className="w-1 h-1 left-0 top-0 absolute bg-zinc-800 bg-opacity-10 rounded-full" />
        <div className="w-1 h-1 left-[6.75px] top-0 absolute bg-zinc-800 bg-opacity-10 rounded-full" />
      </div>
      <div className="w-1 h-1 left-[126px] top-[120.75px] absolute bg-emerald-400 rounded-full" />
      <div className="w-1 h-1 left-[175.50px] top-[120.75px] absolute bg-emerald-400 rounded-full" />
      <div className="w-1 h-1 left-[12px] top-[120.75px] absolute bg-emerald-400 rounded-full" />
      <div className="w-1 h-1 left-[119.25px] top-[120.75px] absolute bg-amber-500 rounded-full" />
      <div className="w-1 h-1 left-[168.75px] top-[120.75px] absolute bg-amber-500 rounded-full" />
      <div className="w-1 h-1 left-[112.50px] top-[120.75px] absolute bg-indigo-500 rounded-full" />
    </div>
  );
};

export default Calendar;
