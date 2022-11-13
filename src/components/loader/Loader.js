import styled from './loader.module.css'

const Loader = () => {
  return (
    <div>
      <div className={styled.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default Loader
