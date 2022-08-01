class Book {
    constructor(title, discription, author) {
            this.title = title,
            this.discription = discription,
            this.author = author
    }
}

class Library {

    Books = [];


    Add(Book) {

        this.Books.push(Book);

    };

    GetList() {

        return console.log("Library:", this.Books);

    };

    GetListId(id) {
        return this.Books.forEach(function (d) {
            if (id == Object.keys(d)[0]) {
                console.log(d);
            }
        })
    };

    RemoveBookId(id) {

        for (var i = this.Books.length; i--;) {

            if (Object.keys(this.Books[i])[0] == id) {

                this.Books.splice(i, 1);
                
            }
        }
    };

    EditBookId(id, title, discription, author){
        for (var i = this.Books.length; i--;) {

            if (Object.keys(this.Books[i])[0] == id) {

                var obj = Object.values(this.Books[i]);    
                obj.forEach(function(x){
                    x.title = title,
                    x.discription = discription,
                    x.author = author
                });
                
                
            }
        }
        
    };

}

const one = new Book("Software", "Development", "Carls")

const two = new Book("front", "Development", "Carls")

const three = new Book("back", "Development", "Carls")


let add = new Library()

add.Add({"1": one})

add.Add({"2": two})

add.Add({"3": three})

add.GetList()

add.GetListId("2")

add.RemoveBookId("1")

add.EditBookId("2", "FullStack", "Dev", "Me")

add.GetList()