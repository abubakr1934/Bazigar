import React from 'react'
import '../App.css'
function Clock() {
  return (
    <div class="container spacing">           
            <div class="data_security">
                <div class="col-md-8">
                    <div class="text-center text-md-start mb-2 mb-md-0">
                        <div class="subtitle">
                            <h3>100% Data Security</h3>
                        </div>
                        <p>Play stress-free and enjoy Bazigar's safe money transfer. </p>
                    </div>
                </div>
            </div>
            <div class="time_ticking">
                <div class="row justify-content-between align-items-center">
                    <div class="col-md-6">
                        <div class="text-center text-md-start">
                            <div class="subtitle">
                                <h3>Time is Ticking</h3>
                            </div>
                            <p>With Bazigar's time-bound games you don't have to worry about getting addicted to the game. You can play the games as a quick refreshment while winning money at the same time.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-center text-md-end">
                            <img src="https://bazigar.in/assets/website/images/home-page/stopwatch.gif" alt="stopwatch" class="stopWatch" width="90%" height="90%"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="row">
                    <div class="col-md-10 text-center text-md-start">
                        <div class="subtitle">
                            <h3>About BAZIGAR</h3>
                        </div>
                        <p class="color-secondary">
                        Bazigar is a tournament-based gaming platform where 5X cash prizes are guaranteed for the winner. The higher you score, the bigger your reward – it is that simple. Whether you love intense gaming or just want to play for fun, Bazigar is just the game for you!
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Clock
