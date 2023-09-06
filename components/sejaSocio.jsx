import Image from "next/image";
import Link from "next/link";

function sejaSocio () {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 pb-20 pt-32">
        <div className="ml-2 pl-10 pt-10 pr-10">
            <div className="origin-top-left bg-gradient-to-b from-zinc-800 to-neutral-900 rounded-tl-[10px] rounded-tr-[10px] pl-3 pt-3 pb-3 text-white">
            </div>
            <div className="origin-top-left bg-neutral-900 mt-1 p-10 pb-18 text-white grid grid-cols-2 gap-3">
                <div className="text-[22px]">
                </div>
                <div className="pl-8 text-[22px]">
                </div>
            </div>
        </div>
        <div className="pl-10 pt-10 pr-20">
        </div>
    </div>
    );
};
export default sejaSocio;
