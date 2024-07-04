import React from "react";
import Menu from "../components/Menu.jsx";
import Comment from "../components/Comment.jsx";

const BlogPage = () => {
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString(); // Format the date as a string
  const timeString = currentDate.toLocaleTimeString(); // Format the time as a string
  return (
    <div className="c max-container ">
      <div className="inf mt-[80px] flex-col items-center gap-4 max-[1024px]:items-start">
        <div className="imagee flex-1 max-w-[1440px]">
          <img
            src="/reclaim2.jpg"
            alt="main"
            className="object-cover max-h-[600px] w-full"
          />
        </div>
        <div className="text flex-1">
          <h1 className="text-5xl font-Poppins mb-[50px] leading-normal max-[1024px]:text-4xl max-w-[900px] max-sm:text-3xl">
            Reclaim Your Calm: How Nature and Hiking Heal the Mind and Body
          </h1>
          <div className="useer flex items-center gap-5">
            <div className="userimg">
              <img
                src="/user.jpg"
                alt="user"
                className="w-[50px] h-[50px] p-1 object-cover rounded-full flex items-center justify-center border border-1 border-slate-400"
              />
            </div>
            <div className="textc flex flex-col text-slate-400">
              <span className="font-semibold">Naveed</span>
              <span>{dateString}</span>
              <span>{timeString}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cont mt-6 flex  gap-8 mb-8">
        <div className="posst flex-4">
          <div className="des text-xl leading-loose max-w-[900px] bg-lightcriBlue p-5 rounded-md">
            <p className="">
              Imagine you're sitting by a serene mountain lake, the only sounds
              being the gentle rustling of leaves and the occasional bird call.
              This isn't just a beautiful scene; it's a tonic for your mind and
              body. Peace of mind is more than just a nice to have it’s a
              fundamental component of your health.
              <br />
              <br />
              Stress and anxiety are modern epidemics. Research shows that
              chronic stress can lead to serious health issues, including heart
              disease, high blood pressure, diabetes, and mental health
              disorders like depression and anxiety. On the flip side, peace of
              mind promotes relaxation, reduces stress hormones, and helps the
              body recover from the wear and tear of daily life. <br />
              <br />
              One of the best ways to achieve this elusive peace is by immersing
              yourself in nature. The benefits of nature for mental health are
              well-documented. For instance, a study from Stanford University
              found that walking in nature can reduce rumination, a key factor
              in depression. Similarly, research published in the journal
              *Environmental Health Perspectives* found that people who spend
              time in green spaces are less likely to experience psychological
              stress. <br />
              <br />
              Hiking adventures are particularly beneficial. They combine the
              physical benefits of exercise with the mental benefits of being in
              nature. When you're hiking, your body releases endorphins, which
              naturally improve your mood. Additionally, the act of hiking,
              especially on trails that require focus and attention, can be a
              form of moving meditation, helping to clear your mind and reduce
              stress. <br />
              <br />
              Imagine the crisp air filling your lungs as you ascend a forest
              trail, or the sense of accomplishment when you reach the summit
              and take in a breath taking view. These experiences are more than
              just enjoyable—they’re therapeutic. A study by the University of
              Michigan found that group nature walks are linked with
              significantly lower depression, less perceived stress, and
              enhanced mental well-being. <br />
              <br />
              So, how can you plan a trip that maximizes these benefits and
              makes it truly enjoyable? <br />
              <br />
            </p>
            <li>
              <strong>Choose Your Destination Wisely:</strong>
              <p>
                Pick a place that excites you. It could be a national park, a
                forest reserve, or a mountain trail. Ensure it matches your
                fitness level and adventure appetite.
              </p>
            </li>
            <li>
              <strong>Prepare Properly:</strong>
              <p>
                Make sure you have the right gear—comfortable hiking boots,
                appropriate clothing, a map, and a first-aid kit. Check the
                weather forecast and plan your route accordingly.
              </p>
            </li>
            <li>
              <strong>Travel Light: </strong>
              <p>
                Only bring essentials. Carrying a heavy load can detract from
                the experience and make the hike more tiring than relaxing.
              </p>
            </li>
            <li>
              <strong>Stay Safe:</strong>
              <p>
                Let someone know your plans, carry a charged phone, and never
                hike alone in unfamiliar territory. Safety should always come
                first.
              </p>
            </li>
            <li>
              <strong>Be Present: </strong>
              <p>
                Leave your stress behind. Take in the sights, sounds, and
                smells. Engage all your senses to fully immerse yourself in the
                experience.
              </p>
            </li>
            <li>
              <strong>Capture the Moments:</strong>
              <p>
                While it's important to be present, capturing a few photos can
                help you remember the experience and provide a mental escape for
                future stressful times.
              </p>
            </li>
            <li>
              <strong>Reflect:</strong>
              <p>
                After your hike, take some time to reflect on how you felt. Did
                you notice a reduction in stress? Did you feel more connected to
                yourself and the world around you?
              </p>
            </li>
            <p>
              If a multi-day hiking adventure feels too daunting, even a short
              walk in a local park can offer significant benefits. The key is to
              make nature a regular part of your life. Studies show that
              spending just 20 minutes in a park can make you feel more relaxed
              and improve your mental health. So, next time life feels
              overwhelming, consider swapping the hustle and bustle of the city
              for the tranquility of nature. Whether it’s a weekend hike or a
              week-long adventure, the peace of mind you’ll gain is worth every
              step.
            </p>
          </div>
          <Comment />
        </div>

        <Menu className="flex-1" />
      </div>
    </div>
  );
};

export default BlogPage;
