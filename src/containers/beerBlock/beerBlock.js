import React from'react'
import classes from './beerBlock.module.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

function yearsDiff(dt) { 
    let tmp = new Date(dt)
    let DifMs = Date.now() - tmp;
    let deltaDt = new Date(DifMs); // miliseconds from epoch
    return Math.abs(deltaDt.getUTCFullYear() - 1970);
  }

class BeerBlock extends React.Component {
   
    render() {
        console.log(this.props);
        return (
            <div className={classes.framegent}>
                <h3 className={classes.titleh3}>{this.props.name}</h3>
                <div className='Map'>
                {this.props.latitude ? <YMaps>
                    <Map defaultState={{ center: [this.props.latitude, this.props.longitude], zoom: 9,  width:240, height:120 }}>
                        <Placemark defaultGeometry={[this.props.latitude, this.props.longitude]} />
                    </Map>
                    </YMaps> : <p className={classes.noMap}> MAP IS NOT AVALIABLE </p>}
                </div>
                <div className={classes.contentAlign}>
                    { this.props.website_url ? 
                        <a className={classes.website} href={this.props.website_url} target='_blank' rel='noreferrer'>{this.props.website_url}</a> 
                    :
                        <p className={classes.website}>No link</p>
                    }
                    <p className={classes.lastupd}>Last update:{ yearsDiff(this.props.updated_at) } years ago</p>
                </div>
            </div>                        
        )
    }
};


export default BeerBlock