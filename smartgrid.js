const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1200px',
        fields: '15px'
    },
    breakPoints: {
        md: {
            width: "991px"
        },
        sm: {
            width: "767px"
        },
        xs: {
            width: "560px"
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/sass/global', settings); 