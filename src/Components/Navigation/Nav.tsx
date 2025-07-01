import logo from './../../assets/logo.svg'
export default function Nav() {
    return (
        <div className="absolute z-[999] top-0 bottom-0 left-5 flex items-center  ">
            <div
                style={{
                    boxShadow: '0 0 4px 0 rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)', // pour Safari
                }}
                className=" w-[78px] h-[95%] bg-[#FFFFFF0D] rounded-[100px] flex flex-col justify-center"
            >
                <div className="flex flex-col flex-2/12 items-center justify-center">
                    <img src={logo} alt="logo" />
                    <hr />
                </div>

                <div className="flex flex-col"></div>
            </div>
        </div>
    );
}
