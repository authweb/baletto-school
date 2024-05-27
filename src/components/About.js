import React from 'react';

import image1 from '../assets/image/1.jpeg';
import image2 from '../assets/image/2.jpeg';
import image3 from '../assets/image/3.jpeg';
import image4 from '../assets/image/4.jpeg';

function About() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8">О НАС</h2>
            <div className="grid grid-cols-1 gap-8">
                <div className="flex items-center">
                    <div className="w-full md:w-3/4 mx-auto">
                        <div className="flex md:flex-row">
                            <div className="w-1/2 pr-4">
                                <img src={image1} alt="Изображение" className="w-full rounded-xl" />
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="p-4 rounded-xl">
                                    <h4 className="text-xl font-bold mb-4">BALLETTO - ЭТО ЭМОЦИИ</h4>
                                    <p>Школа BALLETTO работает с 2020 года. За это время мы многого достигли благодаря профессионализму и творческому подходу к своему делу. Наши ученики являются победителями всероссийских конкурсов, где занимают призовые места, а также регулярно участвуют в отчетных концертах. Наши ученики поступают в Красноярский хореографический колледж. Танец - это эстетика и грация для каждого ребенка.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-full md:w-3/4 mx-auto">
                        <div className="flex md:flex-row">
                            <div className="w-1/2 pr-4 flex flex-col justify-center">
                                <div className="p-4 rounded-xl">
                                    <h4 className="text-xl font-bold mb-4">"УПОРСТВО ПОБЕЖДАЕТ ТАЛАНТ"</h4>
                                    <p>Выходя на сцену, наши ученики получают удовольствие. Они знают, для успеха нужно не только стараться, но и любить своё дело. Balletto растит алмазы каждый день. Присоединяйся к нам уже сегодня!</p>
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <img src={image2} alt="Изображение" className="w-full rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-full md:w-3/4 mx-auto">
                        <div className="flex md:flex-row">
                            <div className="w-1/2 pr-4">
                                <img src={image3} alt="Изображение" className="w-full rounded-xl" />
                            </div>
                            <div className="w-1/2 flex flex-col justify-center">
                                <div className="p-4 rounded-xl">
                                    <h4 className="text-xl font-bold mb-4">МОТИВАЦИОННАЯ СИСТЕМА</h4>
                                    <p>Мы создаём мотивационную систему для детей: за каждое посещение, за каждый личный результат, за участие в концертах дети получают баллы, которые могут обменять на подарки от нашей школы. Такая система мотивации помогает с интересом достигать личных успехов!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-full md:w-3/4 mx-auto">
                        <div className="flex md:flex-row">
                            <div className="w-1/2 pr-4 flex flex-col justify-center">
                                <div className="p-4 rounded-xl">
                                    <h4 className="text-xl font-bold mb-4"><a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">СВОЕ ПРОИЗВОДСТВО ОДЕЖДЫ</a></h4>
                                    <p>Мы сами производим одежду, и можем сшить её под ваши параметры. Также у нас вы можете приобрести аксессуары для занятий танцем — ассортимент представлен <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">по ссылке</a></p>
                                </div>
                            </div>
                            <div className="w-1/2"><img src={image4} alt="Изображение" className="w-full rounded-xl" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
