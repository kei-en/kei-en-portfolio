import React from 'react';
import { motion } from 'framer-motion';

export default function About({ ref, inView }) {
  return (
    <motion.div 
      ref={ref}
      layout
      style={inView ? {opacity: 1} : {position: "sticky", top: '6%', zIndex: 2, }}
      className={" h-[calc(100vh-4rem)] bg-grey w-[94%] m-auto mb-20 p-2 rounded-lg overflow-y-scroll"}
    >
        <motion.h2 className={"font-monoton text-center text-3xl p-4"}>About</motion.h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis autem cumque corrupti blanditiis accusantium temporibus magni molestiae iusto. Ipsum eligendi sequi, cumque voluptas totam omnis itaque est dolores repellendus ea quas, quidem ullam enim fugiat ex neque cum debitis. Aliquid cupiditate incidunt deleniti harum culpa provident obcaecati, earum tempora. Doloremque fugit commodi quasi quisquam, fuga aut nam, neque placeat atque ea labore adipisci nihil obcaecati cumque quia, est sapiente eius in eveniet quo. Consequatur, commodi provident voluptatum cupiditate in libero dolorem. Sed iste dolorem maxime voluptatibus labore, deleniti commodi ipsa excepturi quas accusamus ad incidunt voluptatum quo ducimus asperiores!</p>
    </motion.div>
  )
}
