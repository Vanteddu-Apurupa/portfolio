export const Home = () => {
    return( 
    <section 
    id="home" 
    className="min-h-screen flex items-center justify-center relative"
    >
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hello, I&apos;m Apurupa
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I&apos;m a full-stack developer passionate about crafting clean, scalable web 
                applications. My goal is to build solutions that deliver exceptional 
                performance while providing a seamless and delightful user experience.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/Vanteddu-Apurupa" 
                    className="bg-blue-500 text-while py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)">
                        GitHub
                        </a>
                    <a
                       href="https://www.linkedin.com/in/vanteddu-apurupa-b6159624b/"
                       className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration 
                       hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                        Linkedin
                    </a>
                </div>
        </div>
       
    </section>
    )
}