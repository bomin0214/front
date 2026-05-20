import { useState } from "react";
import Image from "../assets/pic.jpg";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <img src={Image} alt="profile" className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-200 hover:scale-105" />
                        <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900">김보민</h1>
                        <p className="text-lg text-gray-600">Frontend Developer</p>
                        <div className="flex gap-2 mt-2">
                            <span className="bg-blue-50 text-blue-600 text-xs border border-blue-200 px-3 py-1 rounded-full">React</span>
                            <span className="bg-purple-50 text-purple-600 text-xs border border-purple-200 px-3 py-1 rounded-full">Tailwind</span>
                            <span className="bg-green-50 text-green-600 text-xs border border-green-200 px-3 py-1 rounded-full">UX/UI</span>   
                        </div>
                    </div>
                    <div className="mt-8 border-b border0gray-200 flex gap-6">
                        {["about", "projects", "contact"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 text-sm font-medium transition-colors 
                                    ${activeTab === tab 
                                        ? "text-blue-600 border-b-2 border-blue-600" 
                                        : "text-gray-500 hover:text-gray-800"}`}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className="mt-6 min-h-30">
                        {activeTab === "about" && (
                            <p className="text-gray-700 leading-relaxed">
                                안녕하세요! 저는 프론트엔드 개발자 김보민입니다. React와 Tailwind CSS를 활용하여 사용자 친화적인 웹 애플리케이션을 만드는 것을 좋아합니다. UX/UI 디자인에도 관심이 많아, 아름답고 직관적인 인터페이스를 구현하는 데 열정을 가지고 있습니다.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
