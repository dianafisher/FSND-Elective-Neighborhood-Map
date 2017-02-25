var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: '',
        nicknames: ['Cutie Pie', 'Sweetie Pie', 'Catty Cat Cat', 'Mr. Whiskers']
    },
    {
        clickCount: 0,
        name: 'Shadow',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: '',
        nicknames: ['Shooby', 'Scooby']
    },
    {
        clickCount: 0,
        name: 'Scaredy',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: '',
        nicknames: ['Bashful']
    },
    {
        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: '',
        nicknames: ['Lion', 'Tyger']
    },
    {
        clickCount: 0,
        name: 'Stripey',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: '',
        nicknames: ['Zzzzz']
    }
];

var ViewModel = function() {
    // store the outer 'this' which represents the ViewModel
    var self = this;

    this.cats = ko.observableArray([]);

    // create Cat objects
    initialCats.forEach(function(catItem){
        self.cats.push( new Cat(catItem) );
    });

    // 'this' represents the binding context when increment counter is clicked.
    this.currentCat = ko.observable( this.cats()[0] );

    this.incrementCounter = function() {
        // 'this' represents the ViewModel, which does not have a clickCount.
        // this.clickCount(this.clickCount() + 1);

        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };

    this.catClicked = function() {
        console.log('ViewModel: cat clicked!');
        console.log(this);
        console.log(this.name);

        // switch current cat to be the selected cat
        console.log(self.currentCat);
        self.currentCat(this);
    };
};

var Cat = function(data) {
    var self = this;
    self.clickCount = ko.observable(data.clickCount);
    self.name = ko.observable(data.name);
    self.imgSrc = ko.observable(data.imgSrc);
    self.imgAttribution = ko.observable(data.imgAttribution);
    self.nicknames = ko.observableArray(data.nicknames);

    self.title = ko.computed(function(){
        var title;
        var clicks = self.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;
    });

    // this.title = ko.computed(function(){
    //     var title;
    //     var clicks = this.clickCount();
    //     if (clicks < 10) {
    //         title = 'Newborn';
    //     } else if (clicks < 50) {
    //         title = 'Infant';
    //     } else if (clicks < 100) {
    //         title = 'Child';
    //     } else if (clicks < 200) {
    //         title = 'Teen';
    //     } else if (clicks < 500) {
    //         title = 'Adult';
    //     } else {
    //         title = Ninja;
    //     }
    //     return title;
    // }, this);

    /*
    *   The second parameter to ko.computed (the bit where we passed 'this' in the above example)
        defines the value of this when evaluating the computed observable. Without passing it in,
        it would not have been possible to refer to this.firstName() or this.lastName().
    */

};

ko.applyBindings(new ViewModel());