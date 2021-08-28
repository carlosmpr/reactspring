import React from 'react'

export default function AnimateDiv() {
    function LoopFunction() {
        const n = useRef(0)
        const styles = useSpring({
          loop: () => 3 > n.current++,
          from: { x: 0 },
          to: { x: 100 },
        })
      
        return (
          <animated.div
            style={{
              width: 80,
              height: 80,
              backgroundColor: '#46e891',
              borderRadius: 16,
              ...styles,
            }}
          />
        )
      }
