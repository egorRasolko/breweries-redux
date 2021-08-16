import React from'react'

function yearsDiff(dt) { 
    let tmp = new Date(dt)
    let DifMs = Date.now() - tmp;
    let deltaDt = new Date(DifMs); // miliseconds from epoch
    return Math.abs(deltaDt.getUTCFullYear() - 1970);
  }

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
                    <p className='lastupd'>Last update:{ yearsDiff(this.props.updated_at) } years ago</p>
                </div>
            </div>                        
        )
    }
};


export default BeerBlock