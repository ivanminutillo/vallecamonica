import React from 'react'
import './style.scss'
import {Check} from '../../icons'
import { translate } from 'react-i18next'

const Todo = (props) => {
    const {t} = props
    return (
        <section className='section todo'>
        <div className='section_wrapper'>
            <div className='wrapper_tagline '><h5 className='bold'>{t('milestones.title')}</h5></div>
            <div className='wrapper_info'>
                <div className='wrapper_todo'>
                        <div className='todo_item'>
                            <span><Check width={20} height={20} color={"#59C25B"} /></span>
                            <h5>{t('milestones.one')}</h5>
                        </div>
                        <div className='todo_item'>
                            <span><Check width={20} height={20} color={"#59C25B"} /></span>
                            <h5>{t('milestones.two')}</h5>
                        </div>
                        <div className='todo_item'>
                            <span><Check width={20} height={20} color={"#59C25B"} /></span>
                            <h5>{t('milestones.three')}</h5>
                        </div>
                        <div className='todo_item'>
                            <span><Check width={20} height={20} color={"#59C25B"} /></span>
                            <h5>{t('milestones.four')}</h5>
                        </div>
                        <div className='todo_item'>
                            <span><Check width={20} height={20} color={"#59C25B"} /></span>
                            <h5>{t('milestones.five')}</h5>
                        </div>
                        <div className='todo_item'>
                            <span><Check width={20} height={20} color={"#59C25B"} /></span>
                            <h5>{t('milestones.six')}</h5>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    )
}

export default translate('translations')(Todo)
