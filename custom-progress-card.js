import { LitElement, html, css } from 'lit-element';

class CustomProgressCard extends LitElement {

    static get properties() {
        return {
            hass: {},
            config: {},
            brightness: { type: Number }
        };
    }

    static get styles() {
        return css`
            .card {
                padding: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .progress-bar {
                width: 100%;
                background-color: #f3f3f3;
                border-radius: 8px;
                overflow: hidden;
                position: relative;
            }
            .progress-bar-fill {
                height: 24px;
                background-color: #03a9f4;
                transition: width 0.25s;
            }
        `;
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error('You need to define an entity');
        }
        this.config = config;
    }

    getCardSize() {
        return 1;
    }

    render() {
        const stateObj = this.hass.states[this.config.entity];
        this.brightness = stateObj ? stateObj.attributes.brightness : 0;

        return html`
            <ha-card class="card">
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${this.brightness}%"></div>
                </div>
            </ha-card>
        `;
    }
}

customElements.define('custom-progress-card', CustomProgressCard);