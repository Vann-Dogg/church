import React, { Component } from 'react'
import * as ReactBS from 'react-bootstrap'
import axios from 'axios'
import Link from 'next/link'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    componentDidMount() {
        const rest = process.env.NEXT_PUBLIC_REST_LINK;
        const url = rest+'wp-json/menus/v1/menus/menu';
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result.items
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div className="ml-auto">Помилка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="ml-auto">Завантаження...</div>;
        } else {
            return (
                <ReactBS.Nav className="ml-auto">
                {items.map(item => (
                    <Link href={item.url}>
                        <ReactBS.Nav.Link href={item.url}>{item.title}</ReactBS.Nav.Link>
                    </Link>
                ))}
                </ReactBS.Nav>
            );
        }
    }
}