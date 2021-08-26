import React from'react'

const getDate = (date) =>{
    const currentDay = Date.parse( new Date() );
    const days = Math.round(currentDay - Date.parse(new Date(date))) / 86400000;
    if (days > 30){
        if (days >60){
            if (days > 365){
                if (days > 730){
                    return Math.round(days/365) + ' years ago'
                }
                return 'one year ago'
            }
            return Math.round(days/30) + ' month ago'
        }
        return  'one month ago'
    }
    if (days > 1){
        return Math.round(days) + ' days ago'
    }
    return 'one day ago'
};

class BeerBlock extends React.Component {
   
    render() {
        return (
            <div className='framegent'>
                <h3 className='titleh3'>{this.props.name}</h3>
                <div className='fakeMap'>MAP IS NOT AVAILABLE</div>
                <div className='contentAlign'>
                    { this.props.website_url ? 
                        <a className='website' href={this.props.website_url} target='_blank' rel='noreferrer'>{this.props.website_url}</a> 
                    :
                        <p className='website'>No link</p>
                    }
                    <p className='lastupd'>Last update:{ getDate(this.props.updated_at) }</p>
                </div>
            </div>                        
        )
    }
};


export default BeerBlock