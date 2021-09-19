import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://i.ytimg.com/vi/mzdHVXa5L5E/maxresdefault.jpg" profileSrc="http://pm1.narvii.com/7550/2d334b131aaee42d54aed3f64da1d31d51cc21b3r1-256-256v2_00.jpg" title="Tomioka Giyu"/>
            <Story image="https://w0.peakpx.com/wallpaper/12/1004/HD-wallpaper-shinobu-kochou-hashira-demon-slayer-shinobu-kochou-kimetsu-no-yaiba.jpg" profileSrc="https://pbs.twimg.com/media/E6X__qAWQAMX643.jpg" title="Kocho chinobu"/>
            <Story image="https://www.anime-planet.com/images/characters/145805.jpg?t=1562445151" profileSrc="http://pm1.narvii.com/7279/d235bf5f96231f927de14344c3ea70c9931678d6r1-828-804v2_uhq.jpg" title="Zenitzu"/>
            <Story image="https://images.goodsmile.info/cgm/images/product/20200417/9432/69028/large/6320610812415595673c8e1150b347a9.jpg" profileSrc="http://gamervip.net/wp-content/uploads/2021/01/Demon-Slayer-PS4-Update_12-31-20.jpg" title="Kamado Tanjiro"/>
            <Story image="https://static.wikia.nocookie.net/e8889749-a16a-4db4-8247-730e0dd16f0f/scale-to-width/755" profileSrc="https://cdn.shopify.com/s/files/1/0090/7034/6276/products/rengoku_kyojuro_600x.jpg?v=1614227290" title="Kyojuro Rengoku"/>
        </div>
    )
}

export default StoryReel;
