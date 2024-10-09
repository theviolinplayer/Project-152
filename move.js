AFRAME.registerComponent('move', {
    schema: {
        axis_x: { type: 'number', default: -10 }
    },
    init: function () {
        let counter = 0;
        const carEntity = this.el;

        window.addEventListener('click', function () {
            counter++;
            let position = carEntity.getAttribute('position');
            position.x = -10 + counter * 2;
            carEntity.setAttribute('position', position);

            if (counter >= 5) {
                counter = 0;
                carEntity.setAttribute('position', { x: -10, y: position.y, z: position.z });
            }
        });
    }
});
