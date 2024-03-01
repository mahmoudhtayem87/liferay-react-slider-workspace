/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';
import {createRoot} from 'react-dom';

import App from './App';

class WebComponent extends HTMLElement {
    connectedCallback() {
        this.root = createRoot(this);

        this.root.render(<App
            url={this.getAttribute('url')}
            title={this.getAttribute('title')}
            subtitle={this.getAttribute('subtitle')}
            image={this.getAttribute('image')}
            height={this.getAttribute('height')}
            action={this.getAttribute('action')}
            actiontitle={this.getAttribute('actiontitle')}
            route={this.getAttribute('route')}
        />, this);
    }
    disconnectedCallback() {
        this.root.unmount();

        delete this.root;
    }
}

const ELEMENT_ID = 'liferay-react-slider-custom-element';

if (!customElements.get(ELEMENT_ID)) {
    customElements.define(ELEMENT_ID, WebComponent);
}

