import React, { Component } from 'react';

export interface SearchBoxProps {

}

export interface SearchBoxState {

}

export class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                        <label htmlFor="searchBox" className="pl-2">Search Platforms</label>
                        <div className="input-group mb-3 pl-2">
                            <input type="search" id="searchBox" className="form-control"
                                   placeholder="Search Names/Aliases" aria-label="Search Names/Aliases"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    <i className="fa fa-search"/> Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


