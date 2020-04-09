# todo-list-aagali
todo-list-aagali created by GitHub Classroom
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        
        .cont{
            width: 90%;
            margin: 50px auto;
        }
        div{
            text-transform: capitalize;
        }
        input{          
            padding: 5px;          
        }
        button{
            border: none;
            padding: 7px;
            background: #3333ff;
            border-radius: 3px;
            color: white;
            cursor: pointer;
            outline: none;
        }
        .myList{
            margin: 30px;
        }
        .under{
            border-bottom: 1px solid #ddd;
            background: transparent;
            margin-bottom: 10px;
            padding: 6px;
            height: 30px;
            cursor: pointer;
        }
        .under:hover{
            border-bottom: 1px solid black;
            color: green;
            font-size: 18px;
            transition: .3s ease-in-out;
        }
        .mydiv{
            display: none;
            position: absolute;
            left: 80%;
        }
        .under:hover .mydiv{
            display: inline-block;
        }
        span{
            padding: 0 5px;
        }
        .green{
            color: green;
        }
        .red{
            color: red;
        }
    </style>
</head>
<body>
    <section class="cont">
        <h1>My To-do,s List</h1>
        <input type="text" placeholder="New Task...">
        <button>Add to list</button>
        <div class="myList">
            <div class="under">learn html
                <div class="mydiv">
                    <span class="green">Mat as Done</span>|<span class="red">Delet</span>
                </div>
            </div>
           
            <div class="under">learn css
                <div class="mydiv">
                    <span class="green">Mat as Done</span>|<span class="red">Delet</span>
                </div>
            </div>
            <div class="under">learn jvaascript
                <div class="mydiv">
                    <span class="green">Mat as Done</span>|<span class="red">Delet</span>
                </div>
            </div>
            <div class="under">learn php
                <div class="mydiv">
                    <span class="green">Mat as Done</span>|<span class="red">Delet</span>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
