import React from 'react'
import cha1 from '../assets/ch1.avif';
import ChaCard from './ChaCard';
import ChaGolpo from './ChaGolpo';

const MainPage = () => {
  return (
    <div
      className='flex flex-col bg-gradient-to-r from-zinc-800 via-slate-300 to-zinc-400 min-h-screen justify-center items-center text-white p-6 md:p-12'
    >
      <div
        className='flex flex-col md:flex-row w-full max-w-7xl justify-between items-center gap-12 shadow-xl p-6 md:p-12 bg-white/10 backdrop-blur-lg rounded-lg'
      >
        <div
          className='flex flex-col items-start justify-center p-8 gap-2'
        >
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>এক কাপ চা, হাজারো গল্পের শুরু।</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>চা শুধু পানীয় নয়, এক অনুভূতি।</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>সকাল হোক বা সন্ধ্যা, চা ছাড়া অসম্পূর্ণ।</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>এক চুমুক চায়ে শান্তি, আরেক চুমুকে স্বস্তি।</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>মন খারাপ? এক কাপ চা নাও।</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>বৃষ্টির দিনে চা আর বই, এর চেয়ে ভালো আর কি আছে?</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>চা আমাদের আড্ডার সঙ্গী।</p>
          <p className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>চা মানেই সতেজতা, চা মানেই আরাম।</p>
        </div>
        <img src={cha1} alt="cha love" className='w-sm rounded-full shadow-xl' />
      </div>
      <h1 className='mt-12 text-2xl font-semibold text-center text-zinc-800'>এক কাপ চায়ে আমি তোমাকে চাই</h1>
      <div
        className='grid grid-cols-1 md:grid-cols-3 gap-12 shadow-xl p-6 md:p-12 bg-white/10 backdrop-blur-lg rounded-lg mt-12 w-full max-w-7xl'
      >
        <ChaCard image='https://images.ctfassets.net/e8bhhtr91vp3/4v9X0NPdU6zsq1UwHXfYpV/01f6e8e5099ed9a7a9d7bf336d76b1fd/image.png?w=1600&q=60' mainText='ব্ল্যাক টি' subText='ব্ল্যাক টি একটি শক্তিশালী এবং সুগন্ধি চা যা সাধারণত দুধ বা মিষ্টির সাথে উপভোগ করা হয়।' />
          <ChaCard image='https://images.immediate.co.uk/production/volatile/sites/30/2024/03/Green-tea440-af7dd17.jpg?quality=90&resize=440,400' mainText='গ্রিন টি' subText='সবুজ চা একটি জনপ্রিয় পানীয় যার স্বাদ তাজা এবং রঙ সবুজ। সারা বিশ্বের মানুষ এর স্বাস্থ্যগত সুবিধার জন্য এটি উপভোগ করে।' />
        <ChaCard image='https://media.istockphoto.com/id/490736031/photo/cup-of-oolong-tea-and-accessories.jpg?s=612x612&w=0&k=20&c=VtJcGQSet-QaGxcM-TMvb6HGoohTS4qF1-jMPoAvu5Q=' mainText='ওলং টি' subText='ওলং চা একটি আধা-অক্সিডাইজড চা যা সবুজ এবং ব্ল্যাক চায়ের মধ্যে একটি সেতুবন্ধন তৈরি করে। এর স্বাদ মিষ্টি এবং ফুলের।' />
        <ChaCard image='https://media.istockphoto.com/id/1146980588/photo/delicious-green-tea-in-beautiful-glass-bowl-on-table.jpg?s=612x612&w=0&k=20&c=fFG2mlHclNox1W2pyqTLl2H7JAQvHCvV3xTgSAnCs40=' mainText='হোয়াইট টি' subText='হোয়াইট চা একটি সূক্ষ্ম এবং হালকা চা যা সাধারণত কম প্রক্রিয়াজাত করা হয়। এর স্বাদ মিষ্টি এবং নরম।' />
        <ChaCard image='https://static.toiimg.com/photo/69385334.cms' mainText='হার্বাল টি' subText='হার্বাল চা একটি তাজা এবং সুগন্ধি পানীয় যা বিভিন্ন হার্বস, ফুল এবং ফল থেকে তৈরি হয়। এটি সাধারণত ক্যাফেইন মুক্ত।' />
        <ChaCard image='https://t3.ftcdn.net/jpg/01/14/29/06/360_F_114290636_cgs2Ar8JacznGKbfpTH8G36Z4uCOkGGD.jpg' mainText='দুধ চা' subText='দুধ চা একটি জনপ্রিয় পানীয় যা সাধারণত দুধ, চিনি এবং মশলা দিয়ে তৈরি হয়। এটি সারা বিশ্বে জনপ্রিয়।' />
        <ChaCard image='https://media.istockphoto.com/id/1297483389/photo/masala-tea-chai.jpg?s=612x612&w=0&k=20&c=Pv-QROSSywNh_qzHIIjHJeJB7OT0ujrKQsSiTgOmJAs=' mainText='মশালা চায়ে' subText='মশলা চা হল একটি সুস্বাদু এবং সুগন্ধযুক্ত ভারতীয় চা মিশ্রণ, যা মশলা এবং ভেষজের সমৃদ্ধ সংমিশ্রণে মিশ্রিত, যা ভারত এবং তার বাইরেও উপভোগ করা একটি উষ্ণ এবং আরামদায়ক পানীয় প্রদান করে।' />
        <ChaCard image='https://theflavourtrail.com/cdn/shop/files/kadha__copy.jpg?v=1720085887&width=3200' mainText='কাটিং চায়ে' subText='চায়ের দোকানে ছোট কাঁচের গ্লাসে অর্ধেক দেওয়া এই চা ভারতের এক জনপ্রিয় পানীয়।' />
        <ChaCard image='https://tastecooking.com/wp-content/uploads/2018/01/irani_chai_pour_header.jpg.jpeg' mainText='ইরানী চায়ে' subText='ইরানি চা হল একটি ঘন ও সুগন্ধযুক্ত চায়ের মিশ্রণ, যা ইরান থেকে উদ্ভূত এবং ভারতে জনপ্রিয়তা লাভ করেছে। এটি এর কড়া স্বাদ এবং ইরানি ও ভারতীয় উভয় সম্প্রদায়ে এর সাংস্কৃতিক গুরুত্বের জন্য পরিচিত।' />
        </div>
        <h1 className='mt-12 text-2xl font-semibold text-slate-800'>বলো কেনটা বানাই</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 shadow-xl p-6 md:p-12 bg-white/10 backdrop-blur-lg rounded-lg mt-12 w-full max-w-7xl'>
          <ChaCard image='https://mittalteas.com/cdn/shop/articles/g_6f8b943a-1a69-40f2-984c-e5cca7194185_jpg.webp?v=1692608994' mainText='চা তৈরির পদ্ধতি' subText='চা তৈরির পদ্ধতি হল চা পাতা, পানি এবং অন্যান্য উপকরণ মিশিয়ে একটি সুস্বাদু পানীয় তৈরি করা।' />
          <ChaCard image='https://cdn.banglatribune.net/contents/cache/images/800x450x1/uploads/media/2020/07/02/42bc99cba474d1fce831c107946279c4-5efdf5e219621.jpg?jadewits_media_id=676594' mainText='চা তৈরির উপকরণ' subText='চা তৈরির উপকরণ হল চা পাতা, পানি, দুধ, চিনি এবং মশলা।' />
          <ChaCard image='https://c.ndtvimg.com/2024-01/egs7meno_masala-chai_625x300_17_January_24.jpg?im=FeatureCrop,algorithm=dnn,width=384,height=384' mainText='চা তৈরির টিপস' subText='চা তৈরির টিপস হল চা পাতা সঠিক পরিমাণে ব্যবহার করা, পানি সঠিক তাপমাত্রায় গরম করা এবং চা সময়মতো ছেঁকে ফেলা।' />
          </div>
      <h1 className='mt-12 text-2xl font-semibold text-black'>চা নিয়ে কিছু মজার তথ্য</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 shadow-xl p-6 md:p-12 bg-white/10 backdrop-blur-lg rounded-lg mt-12 w-full max-w-7xl'>
        <ChaCard image='https://upload.wikimedia.org/wikipedia/commons/3/37/Nice_Cup_of_Tea.jpg' mainText='চা বিশ্বের দ্বিতীয় সর্বাধিক ব্যবহৃত পানীয়' subText='চা হল বিশ্বের দ্বিতীয় সর্বাধিক ব্যবহৃত পানীয়, জল ছাড়া।' />
        <ChaCard image='https://media.npr.org/assets/img/2016/01/26/greentea_wide-abddae743d1f88ab4668ac421513cc2eea557550.jpg?s=1400&c=100&f=jpeg' mainText='চা পাতা প্রাচীন চীনে আবিষ্কৃত হয়েছিল' subText='চা পাতা প্রাচীন চীনে আবিষ্কৃত হয়েছিল এবং এটি হাজার হাজার বছর ধরে ব্যবহৃত হচ্ছে।' />
        <ChaCard image='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPqwODRy6SyZsCdCExhlpkfNmBVgZXTXgvRLmjHidExRlMWo66J-LbX0FzVlliLJeIHmnVwVzrSYhjTOMtFj_b0j6OQeJa6Ax16NtQt8C7xVuF-B_yLPRz-J0BB-6Whg3EG3xcus0Q8KUO/s1600/1479965407.jpg' mainText='চা বিভিন্ন স্বাদে পাওয়া যায়' subText='চা বিভিন্ন স্বাদে পাওয়া যায়, যেমন সবুজ চা, ব্ল্যাক চা, ওলং চা এবং হার্বাল চা।' />
        <ChaCard image='https://assets.telegraphindia.com/abp/2024/Dec/1734931007_tea-1.jpg' mainText='চা স্বাস্থ্যকর পানীয়' subText='চা একটি স্বাস্থ্যকর পানীয়, যা অ্যান্টিঅক্সিডেন্ট এবং অন্যান্য পুষ্টি উপাদানে সমৃদ্ধ।' />
        <ChaCard image='https://resize.indiatvnews.com/en/resize/newbucket/355_-/2025/02/herbal-tea-2-1738761871.webp' mainText='চা তৈরির প্রক্রিয়া সহজ' subText='চা তৈরির প্রক্রিয়া খুবই সহজ, যা যে কেউ করতে পারে।' />
        <ChaCard image='https://www.sangbadpratidin.in/wp-content/uploads/2025/05/masala-milk-tea.jpg' mainText='চা বিশ্বের বিভিন্ন সংস্কৃতিতে জনপ্রিয়' subText='চা বিশ্বের বিভিন্ন সংস্কৃতিতে জনপ্রিয়, যেমন চীনা, জাপানি, ভারতীয় এবং ব্রিটিশ সংস্কৃতি।' />
        <ChaCard image='https://binnifood.com/wp-content/uploads/2024/09/%E0%A6%9A%E0%A6%BE-%E0%A6%95%E0%A6%A4-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0-3.jpg' mainText='চা তৈরির জন্য বিভিন্ন উপকরণ ব্যবহার করা হয়' subText='চা তৈরির জন্য বিভিন্ন উপকরণ ব্যবহার করা হয়, যেমন দুধ, চিনি, মশলা এবং ফল।' />
        <ChaCard image='https://b.zmtcdn.com/data/pictures/1/21050291/9bcef61b0c4af48ebd9d8e07810ee378_featured_v2.jpg' mainText='চা তৈরির জন্য বিভিন্ন পদ্ধতি রয়েছে' subText='চা তৈরির জন্য বিভিন্ন পদ্ধতি রয়েছে, যেমন ফিল্টার চা, কড়াই চা এবং মাইক্রোওয়েভ চা।' />
        <ChaCard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpW4uHGi23z1xFvd7HPI3nrTcTTpXnRH_NRA&s' mainText='চা তৈরির জন্য বিভিন্ন সরঞ্জাম ব্যবহার করা হয়' subText='চা তৈরির জন্য বিভিন্ন সরঞ্জাম ব্যবহার করা হয়, যেমন চা পট, চা কাপ এবং চা স্ট্রেনার।' />
    </div>
      <h1 className='mt-12 text-2xl font-semibold text-gray-900'>চা নিয়ে কিছু মজার গল্প</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 shadow-xl p-6 md:p-12 bg-white/10 backdrop-blur-lg rounded-lg mt-12 w-full max-w-7xl'>
        <ChaGolpo image='https://cochincollege.edu.in/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-10-at-8.55.42-AM-scaled.jpeg' heading='আড্ডার প্রাণ: কলেজ ক্যান্টিনের চা' story='কলেজ ক্যান্টিনের সেই ছোট চায়ের দোকানটা আমাদের সবার প্রিয় জায়গা ছিল। ক্লাস শেষ হতেই সবাই ঝাঁপিয়ে পড়তাম সেখানে। এক কাপ গরম চা আর তার সাথে চলত জমজমাট আড্ডা। প্রেম, পরীক্ষার টেনশন, ভবিষ্যৎ পরিকল্পনা - সবকিছুর আলোচনা হত সেই চায়ের টেবিলে। সেই চা শুধু ক্লান্তি দূর করত না, বরং বন্ধুত্বের বন্ধনকে আরও মজবুত করত। আজও যখন বন্ধুদের সাথে দেখা হয়, সেই ক্যান্টিনের চায়ের স্মৃতিগুলো আমাদের মুখে হাসি ফুটিয়ে তোলে।' />
        <ChaGolpo image='https://s3.amazonaws.com/somewherein/pictures/biplobersagar/biplobersagar-1466454411-f0b4146_xlarge.jpg' heading='বৃষ্টির দুপুরে মায়ের হাতে চা' story='বৃষ্টি ভেজা এক দুপুরে যখন চারপাশ ভিজে যাচ্ছিল, আর মনটা কেমন যেন উদাস ছিল, তখন মা এক কাপ ধোঁয়া ওঠা চা নিয়ে ঘরে এলেন। চায়ে আদার গন্ধ আর দুধের মিষ্টি স্বাদ মনটাকে নিমেষে শান্ত করে দিল। মায়ের হাতের সেই চা শুধু পানীয় ছিল না, তাতে মেশানো ছিল ভালোবাসা আর আরামের পরশ। সেই মুহূর্তটা আজও আমার স্মৃতিতে গেঁথে আছে, যখন এক কাপ চা মায়ের স্নেহের প্রতিচ্ছবি হয়ে উঠেছিল।' />
        <ChaGolpo image='https://khulnagazette.com/wp-content/uploads/2023/12/pic-1-1703051225.jpg' heading='ট্রেন যাত্রার সঙ্গী: ভাঁড়ের চা' story='ট্রেন যাত্রায় ভাঁড়ের চায়ের একটা আলাদা আকর্ষণ আছে। একবার এক দীর্ঘ ট্রেন যাত্রায় ক্লান্ত হয়ে পড়েছিলাম। বাইরে অন্ধকার আর গুঁড়ি গুঁড়ি বৃষ্টি। ঠিক সেই সময় একজন চা-ওয়ালা "চা-চা-গরম চা" হাঁকতে হাঁকতে পাশ দিয়ে যাচ্ছিলেন। একটা ভাঁড়ের চা হাতে নিয়ে প্রথম চুমুক দিতেই মনে হলো যেন প্রাণ ফিরে পেলাম। মাটির ভাঁড়ের নিজস্ব গন্ধ আর চায়ের উষ্ণতা, সব মিলিয়ে এক অদ্ভুত ভালো লাগার সৃষ্টি হয়েছিল। সেই চা শুধু ক্লান্তি দূর করেনি, বরং যাত্রাপথের এক অবিচ্ছেদ্য অংশ হয়ে উঠেছিল।' />
        <ChaGolpo image='https://assets.roar.media/Bangla/2017/01/tea_teapot_tea_leaves_service_chinese_hieroglyphs_chest_45346_1920x1080.jpg?w=1200' heading='কঠিন সময়ে সান্ত্বনার চা' story='একবার একটি কঠিন পরিস্থিতির মধ্যে দিয়ে যাচ্ছিলাম। মানসিক চাপ আর দুশ্চিন্তায় রাতের ঘুম চলে গিয়েছিল। ভোরবেলা যখন হতাশ হয়ে বসেছিলাম, তখন একজন শুভাকাঙ্ক্ষী আমার পাশে এসে বসলেন। তিনি কিছু না বলে শুধু এক কাপ গরম চা এগিয়ে দিলেন। সেই চায়ের কাপে চুমুক দিতেই মনে হলো যেন মনের সব ভার হালকা হয়ে যাচ্ছে। সেই চা শুধু আমাকে জাগিয়ে রাখেনি, বরং একজন মানুষের সহানুভূতি আর সমর্থনের প্রতীক হয়ে উঠেছিল। সেই দিন আমি বুঝেছিলাম, এক কাপ চা কতটা মানসিক শক্তি জোগাতে পারে।' />
    </div>

    </div>
  )
}

export default MainPage
