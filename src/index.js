class Sprite {
    constructor(opts) {
        opts = Object.assign({}, Sprite.defaults, opts);
        this.map = opts.map;
        this.flipX = opts.flipX;
        this.flipY = opts.flipY;
    }
}
Sprite.defaults = {
    map: [],
    flipX: false,
    flipY: false
};
const render = (sprite) => {
    console.log(sprite);
    if (sprite.flipX) {
        for (let y = sprite.map.length; y > 0; y--) {
            for (let x = sprite.map[y].length; x > 0; x--) {
                console.log(sprite.map[y][x]);
            }
        }
        return;
    }
    for (let y = 0; y < sprite.map.length; y++) {
        for (let x = 0; x < sprite.map[y].length; x++) {
            console.log(sprite.map[y][x]);
        }
    }
};
render(new Sprite({
    map: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    flipX: true
}));
