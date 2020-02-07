import React from 'react';

const card = props => {
    return (
      <div>
        <div class="left">
            left div
            <button id="left-button">
              swipe left
            </button>
        </div>
        <div class="center" id="content">
          <div class='internal'>
            div 1
          </div>
          <div class='internal'>
            div 2
          </div>
          <div class='internal'>
            div 3
          </div>
          <div class='internal'>
            div 4
          </div>
          <div class='internal'>
            div 5
          </div>
          <div class='internal'>
            div 6
          </div>
          <div class='internal'>
            div 7
          </div>
          <div class='internal'>
            div 8
          </div>
        </div>
        <div class="right">
          <button id="right-button">
              swipe right
            </button>
            right div
        </div>
      </div>
    )
}