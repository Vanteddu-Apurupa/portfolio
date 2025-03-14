export const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          My Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card 1 */}
          <div className="p-6 rounded-xl border border-white/10 flex items-center hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <img src="/images/klu.jpeg" alt="University Logo" className="w-24 h-24 mr-6" />
            <div>
              <h3 className="text-xl font-bold mb-2">Koneru Lakshmaiah Educational Foundation</h3>
              <p className="text-gray-400 mb-2">Guntur, Andhra Pradesh</p>
              <ul className="text-gray-400 list-disc list-inside">
                <li>Bachelor of Technology</li>
                <li>Computer Science and Engineering</li>
                <li>2022-2026</li>
                <li>CGPA: 9.53/10</li>
              </ul>
            </div>
          </div>

          {/* Education Card 2 */}
          <div className="p-6 rounded-xl border border-white/10 flex items-center hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <img src="/images/scjc.webp" alt="College Logo" className="w-24 h-24 mr-6" />
            <div>
              <h3 className="text-xl font-bold mb-2">Sri Chaitanya Junior College</h3>
              <p className="text-gray-400 mb-2">Hyderabad, Telangana</p>
              <ul className="text-gray-400 list-disc list-inside">
                <li>INTERMEDIATE</li>
                <li>Score: 945/1000</li>
              </ul>
            </div>
          </div>

          {/* Education Card 3 (Centered Below)*/}
          <div className="p-6 rounded-xl border border-white/10 flex items-center hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition col-span-1 md:col-span-2 mx-auto">
            <img src="/images/SC.png" alt="School Logo" className="w-24 h-24 mr-6" />
            <div>
              <h3 className="text-xl font-bold mb-2">Sri Chaitanya School</h3>
              <p className="text-gray-400 mb-2">Hyderabad, Telangana</p>
              <ul className="text-gray-400 list-disc list-inside">
                <li>State Board of Secondary Education</li>
                <li>CGPA: 9.3/10</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;


// export const Education = () => {
//   return (
//     <section id="education" className="min-h-screen flex items-center justify-center py-20">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//           My Education
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Education Card 1 */}
//           <div className="p-6 rounded-xl border border-white/10 flex items-center hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//             {/* University Logo */}
//             <img src="src/components/images/klu.jpeg" alt="University Logo" className="w-24 h-24 mr-6" />

//             {/* Education Details */}
//             <div>
//               <h3 className="text-xl font-bold mb-2">Koneru Lakshmaiah Educational Foundation</h3>
//               <p className="text-gray-400 mb-2">Guntur, Andhra Pradesh</p>
//               <ul className="text-gray-400 list-disc list-inside">
//                 <li>Bachelor of Technology</li>
//                 <li>Computer Science and Engineering</li>
//                 <li>2022-2026</li>
//                 <li>CGPA: 9.53/10</li>
//               </ul>
//             </div>
//           </div>

//           {/* Education Card 2 */}
//           <div className="p-6 rounded-xl border border-white/10 flex items-center hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//             {/* University Logo */}
//             <img src="src/components/images/klu.jpeg" alt="University Logo" className="w-24 h-24 mr-6" />

//             {/* Education Details */}
//             <div>
//               <h3 className="text-xl font-bold mb-2">Koneru Lakshmaiah Educational Foundation</h3>
//               <p className="text-gray-400 mb-2">Guntur, Andhra Pradesh</p>
//               <ul className="text-gray-400 list-disc list-inside">
//                 <li>Bachelor of Technology</li>
//                 <li>Computer Science and Engineering</li>
//                 <li>2022-2026</li>
//                 <li>CGPA: 9.53/10</li>
//               </ul>
//             </div>
//           </div>


//           {/* Education Card 3 */}
//           <div className="p-6 rounded-xl border border-white/10 flex items-center hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//             {/* University Logo */}
//             <img src="src/components/images/klu.jpeg" alt="University Logo" className="w-24 h-24 mr-6" />

//             {/* Education Details */}
//             <div>
//               <h3 className="text-xl font-bold mb-2">Koneru Lakshmaiah Educational Foundation</h3>
//               <p className="text-gray-400 mb-2">Guntur, Andhra Pradesh</p>
//               <ul className="text-gray-400 list-disc list-inside">
//                 <li>Bachelor of Technology</li>
//                 <li>Computer Science and Engineering</li>
//                 <li>2022-2026</li>
//                 <li>CGPA: 9.53/10</li>
//               </ul>
//             </div>
//           </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// // export const Education = () => {
// //   return (
// //     <section id="education" className="min-h-screen flex items-center justify-center py-20">
// //       <div className="max-w-5xl mx-auto px-4">
// //         <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
// //           My Education
// //         </h2>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
// //             {/* University Logo */}
// //             <img src="src/components/images/klu.jpeg" alt="University Logo" className="w-24 h-24 md:mr-6" />

// //             {/* Education Details */}
// //             <div>
// //               <h3 className="text-xl font-bold mb-2">Koneru Lakshmaiah Educational Foundation</h3>
// //               <p className="text-white-600 mb-2">Guntur, Andhra Pradesh</p>
// //               <ul className="text-white-600 list-disc list-inside">
// //                 <li>Bachelor of Technology</li>
// //                 <li>Computer Science and Engineering</li>
// //                 <li>2022-2026</li>
// //                 <li>CGPA: 9.53/10 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
// //             {/* University Logo */}
// //             <img src="src/components/images/klu.jpeg" alt="University Logo" className="w-24 h-24 md:mr-6" />

// //             {/* Education Details */}
// //             <div>
// //               <h3 className="text-xl font-bold mb-2">Koneru Lakshmaiah Educational Foundation</h3>
// //               <p className="text-white-600 mb-2">Guntur, Andhra Pradesh</p>
// //               <ul className="text-white-600 list-disc list-inside">
// //                 <li>Bachelor of Technology</li>
// //                 <li>Computer Science and Engineering</li>
// //                 <li>2022-2026</li>
// //                 <li>CGPA: 9.53/10 </li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>


        
// //       </div>
// //     </section>
// //   );
// // };
