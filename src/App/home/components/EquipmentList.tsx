import React, { Component } from 'react';

import { getPlatforms } from '../../../Controllers/Api/PlatformsApi';
import { getComponents } from '../../../Controllers/Api/ComponentsApi';

import { SearchBox} from './SearchBox';
import { ItemCount } from './ItemCount';

export interface EquipmentListProps {

}

export interface EquipmentListState {
    components: number,
    platforms: number
}

export class EquipmentList extends Component<EquipmentListProps, EquipmentListState> {
    state: EquipmentListState = {
        components: 0,
        platforms: 0
    };

    componentDidMount() {
        getPlatforms()
            .then(data => this.setState(() => ({ platforms: data.length })));

        getComponents()
            .then(data => this.setState(() => ({ components: data.length })));
    }

    render() {
        return (
            <div className="card p-2">
                <h5 className="text-center">Equipment</h5>
                <div style={{ height: 284 }}>
                    <ItemCount name="Component" count={this.state.components}/>
                    <ItemCount name="Platform" count={this.state.platforms}/>
                    <SearchBox/>
                </div>
            </div>
        );
    }
}

