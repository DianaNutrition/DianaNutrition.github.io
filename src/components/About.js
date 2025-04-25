import React from "react";

function About() {
  // Sample testimonial data - you can replace with your actual testimonials
  const testimonials = [
    {
      id: 1,
      text: "Excellent results! Highly recommended for anyone—whether or not you’re physically active.",
      author: "Victor Al Abrego",
    },
    {
      id: 2,
      text: "Excellent consultation! Thorough review of data and in-depth explanations. Great listener. Very kind and professional. Thank you!",
      author: "Iliana Estevez",
    },
    {
      id: 3,
      text: "Diana provides very attentive care, makes you feel comfortable, and is very professional. She explains the data she collects in detail, and the meal plans she suggests are easy to follow and prepare.",
      author: "Jen Medero",
    },
    {
      id: 4,
      text: "Great service—she’s always willing to answer any questions and pays close attention to my specific needs in order to maintain a personalized nutrition plan. Very professional and approachable. I was very pleased.",
      author: "Claudia Ortiz",
    },
    {
      id: 5,
      text: "The best nutritionist—100% recommended! She’s very kind, answers all your questions, and her meal plans are excellent.",
      author: "Omar Santana",
    },
    {
      id: 6,
      text: "Very good service. She explains everything clearly during the consultation. The plan is tailored to the goals you want to achieve. Very professional.",
      author: "Daniel Madrigal",
    },
  ];

  return (
    <section className="bg-white rounded-lg shadow-lg mb-12 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-auto">
          <img
            src={require(`../data/profile.jpeg`)}
            alt="Diana Chávez, Nutrition Specialist"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              My name is Diana Chávez, and I'm a certified nutrition and
              wellness professional. My passion is to guide individuals on their
              journey to better health by creating personalized nutrition and
              lifestyle plans that truly fit their unique needs. Since 2018,
              I've been helping people build healthier lifestyles that are
              realistic, sustainable, and most importantly personalized.
            </p>
            <p className="text-gray-600 mb-4">
              My main focus is to help people understand their body, their
              needs, and how to nourish themselves in a way that works for them.
              Each person is different—and that's why personalization is at the
              heart of everything I do. Whether your goal is to feel more
              energized, stronger, or simply improve your overall well-being,
              I'm here to support you with tailored advice that works for you.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, I've placed a strong emphasis on sports nutrition,
              which has shown me just how powerful movement is. Exercise is
              essential—not just for athletes, but for everyone. It helps us
              stay strong, independent, and resilient, especially as we grow
              older. The choices we make today can truly shape the way we age
              tomorrow.
            </p>
            <p className="text-gray-600">
              My mission is simple: to help improve your quality of life through
              balanced nutrition, mindful eating, and movement.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <div className="bg-gray-50 p-8 border-t border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Testimonials
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {/* Star rating - 5 stars for all testimonials */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              <div className="mt-auto">
                <p className="text-sm text-gray-500">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
