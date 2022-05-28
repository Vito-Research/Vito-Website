import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PresentationControls, Environment, ContactShadows, Html, useScroll, ScrollControls } from '@react-three/drei'
import filePath from "./scene.gltf"
// import texture from './texture_0.png'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useSpring, animated, config } from '@react-spring/three'
import { forwardRef } from 'react'
import useRefs from 'react-use-refs'

export default function WatchApp() {
  return (
    
    <Canvas style={{ backgroundColor: "white" }} shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50}}>
      
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
      <ScrollControls pages={5}>
      
      <Watch rotation={[-Math.PI / 3, 0.2, 3.2]} position={[0, 0.45, 0]} scale={10.0} />
      </ScrollControls>
       
      
      <ContactShadows rotation-x={Math.PI / 2} position={[0, -1.4, 0]} opacity={0.75} width={10} height={10} blur={2.6} far={2} />
      <Environment preset="city" />
    </Canvas>
    
  )
}

function Watch(props) {
  const [lastr, setR] = useState(1)
  const { scale } = useSpring({ scale: lastr == 2 ? 1 : lastr == 3 ? 2 : 1 })
  const { rotation } = useSpring({ rotation: lastr == 2 ? 1.2 : lastr == 3 ? 1.5 : 1 })
  
  const scroll = useScroll()
 
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, filePath)
  const { nodes, materials } = useGLTF(filePath)
  const [left, right] = useRefs()
  useFrame((state) => {
    const r1 = scroll.range(0 / 4, 1 / 4)
    const r2 = scroll.range(1 / 4, 1 / 4)
    const r3 = scroll.visible(4 / 5, 1 / 5)
    
    let t = state.clock.getElapsedTime()
    if(r1 ? 1 : r2 ? 2 : 3 != lastr) {
      //gltf.nodes.Scene.rotateX(lastr == 3 ? t * 90 : 0);
      
    }
    
    setR(r3 ? 3 : r2 ? 2 : 1)
    // right.current.classList.toggle('show', r2)
    // left.current.classList.toggle('show', r3)
  })
  console.log(gltf);
  return (
    <group ref={ref} {...props} dispose={null}>
      
       <animated.primitive object={gltf.scene}  scale={scale} rotation-x={rotation}/>
       <Tag ref={right} position={[0.12, -0.25, 0]} head="up to" stat="13x" expl={`faster\ngraphics\nperformance²`} />
       <Tag ref={left} position={[-0.04, 0.13, 0]} head="up to" stat="13x" expl={`faster\ngraphics\nperformance²`} />
      {/* <mesh geometry={nodes.Scene.geometry} material={materials.Material}>
        <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -350, 50]} transform occlude>
          <div className="annotation">
            6.550 $ <span style={{ fontSize: '1.5em' }}>🥲</span>
          </div>
        </Html>
      </mesh> */}
      {/* <mesh castShadow receiveShadow geometry={nodes.metascan_202111221} material={materials} /> */}
    </group>
  )
}
const Tag = forwardRef(({ head, stat, expl, ...props }, ref) => {
  return (
    <Html ref={ref} className="data" center {...props}>
      <div>{head}</div>
      <h1>{stat}</h1>
      <h2>{expl}</h2>
    </Html>
  )
})