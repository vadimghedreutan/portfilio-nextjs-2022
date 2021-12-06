import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

function Card({ img, alt, title, description, link }) {
  const animation = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  const defaultVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring' },
    },
    hidden: { opacity: 0, y: 50 },
  }

  return (
    <motion.a
      href={link}
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={defaultVariants}
      className="p-1 sm:p-2 bg-indigo-50 cursor-pointer"
    >
      <div className="card">
        <img src={img} alt={alt} />
        <div className="card-content">
          <div className="card-title text-sm text-gray-500">{title}</div>
          <div className="card-description pt-1 text-xs sm:text-sm text-gray-500 truncate">
            {description}
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default Card
