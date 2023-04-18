// function setNativeValue(element, value) {
//     let lastValue = element.value;
//     element.value = value;
//     let event = new Event("input", { target: element, bubbles: true });
//     // React 15
//     event.simulated = true;
//     // React 16
//     let tracker = element._valueTracker;
//     if (tracker) {
//         tracker.setValue(lastValue);
//     }
//     element.dispatchEvent(event);
// }

const fuegoPlayerContainer = document.getElementById('fuegoPlayerContainer');

let actionId = '';

const actions = {
    'CompleteCheckLandingTableFinal': (id) => {
        const rows = document.querySelectorAll('.TopicItemPersonalizedTable-topicItem').length;
        console.log(`%cRemaining ${rows}`, 'color: blue; font-size: 35px;');
        const button = document.getElementById('CompleteCheckLandingTableFinal-TopicLaunch_stocksales_4');
        if (button) {
            setTimeout(() => {
                button.click();
                actionId = id;
            }, 1500);
        };
    },
    'stk-transaction-summary-entry-views-0': (id) => {
        const messageContainer = fuegoPlayerContainer.querySelector('div[data-automation-id="stk-transaction-summary-entry-views-0-validation-highlight-label"]');
        const isError = messageContainer.firstChild.classList.value.includes('error');
        if (isError) return;
        const button = document.getElementById('stk-transaction-summary-entry-views-0-actions-1-action_Next');
        if (button) {
            button.click();
            actionId = id;
        };
    },
    'stk-uncommon-views-0': (id) => {
        const checkbox = document.getElementById('stk-uncommon-views-0-fields-0-multiSelect-choices-7');
        if (checkbox) {
            checkbox.checked = true;
            const button = document.getElementById('stk-uncommon-views-0-actions-1-action_Next');
            if (button) {
                button.click();
                actionId = id;
            };
        }        
    },
    'stk-cost-basis-views-0': (id) => {
        console.log('COST BASIS!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('COST BASIS!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('COST BASIS!!!!!!!!!!!!!!!!!!!!!!!!!');
        const radio = document.getElementById('stk-cost-basis-views-0-fields-0-choice-KnowCostBasis-choices-1');
        radio.click();
        // const input = document.getElementById('stk-cost-basis-views-0-fields-0-choice-KnowCostBasis-choices-1-choiceDetail-input-CorrectedBasisAmt');
        // setNativeValue(input, '$0');
        // setTimeout(() => {
        //     const button = document.getElementById('stk-cost-basis-views-0-actions-1-action_Next');
        //     fuegoPlayerContainer.click();
        //     if (button) button.click();
        // }, 1500);
    }
}

const config = { childList: true };

const containerObserver = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        console.log('mutation: ', mutations);
        if (mutation.type === 'childList') {
            if (mutation.addedNodes.length > 0) {
                const fuegoRootNode = fuegoPlayerContainer.querySelector('.fuego-root-node');
                const form = fuegoRootNode.querySelector('form');
                const div = form.firstChild;
                const automationId = div.dataset.automationId;
                if (automationId !== actionId) {
                    console.log('execute action for: ', automationId);
                    actions[automationId](automationId);
                }
            } else {
                console.log('stop observing root node...');
            }
        }
    } 
})

containerObserver.observe(fuegoPlayerContainer, config);