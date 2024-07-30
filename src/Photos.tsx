import {photos} from './data'
import cx from 'classnames'

interface photoProps{
    isActive:boolean
}
function Photos({isActive}:photoProps){
    return(
        <div className={cx('text-3xl',isActive?'':'hidden')}>
            <h3>Photo Order</h3>
            <div>{photos}</div>
        </div>
    )
}

export default Photos;