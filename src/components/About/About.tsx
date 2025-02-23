

function About() {
  return (
    
    <section id="about">
      <div className="mt-20 h-[100vh]">
        <h2 className="text-secondary font-playfair text-4xl text-center">
          About
        </h2>
        <div className="w-1/2 border-t border-secondary my-6 mx-auto" />
        <div className="mt-5 mx-8 bg-secondary h-[80vh] rounded-xl flex ">
            <div className="max-w-lg md:p-10 p-8">
                <p className="text-body font-poppins text-sm">
                In a world that moves too fast, YourCharm was born from the desire to slow down, cherish the moment, and wear a piece of magic every day. Inspired by the timeless tradition of charms—symbols of luck, love, and transformation—Charm Bar is more than just jewelry;
                 it’s a manifestation of your dreams, desires, and destiny.
                 Every charm holds a story. A whisper of a wish. A spark of energy. 
                 A reminder of who you are and who you’re becoming. At YourCharm, we curate hand-crafted, luxurious charms infused with meaning, intention, and artistry. 
                 Whether it’s a token of love, a symbol of strength, or a sign of new beginnings, each piece is designed to align with your journey and reflect your inner radiance.
                 Crafted with the finest materials and adorned with delicate details, our charms bring together the elegance of high-end jewelry with the personal touch of manifestation. We believe that true luxury lies in intention—the intention to create, to cherish, and to manifest the life you desire.
                 Join us at YourCharm, where elegance meets energy, where style meets soul, and where every charm is a piece of your story waiting to be told.
                 Wear your magic. Manifest your dreams. 
                </p>
            </div>
            <div className="w-1/2 hidden lg:block justify-self-end items-end justify-items-end">
            <img src="./src/assets/about.jpg" className="h-[80vh] " alt="" />

            </div>
        </div>
      </div>
    </section>
  )
}

export default About
