import {photos} from './data'
import cx from 'classnames'

interface photoProps{
    isActive:boolean
}
function Photos({isActive}:photoProps){
    return(
        <div className={cx('text-3xl p-10 bg-sky bg-cover min-h-lvh text-center',isActive?'':'hidden')}>
            <h3 className='pt-20 pb-8'>Photo Order</h3>
            <div className='whitespace-break-spaces text-2xl leading-loose'>{photos}</div>
        </div>
    )
}

export default Photos;