

        const buttons = document.querySelectorAll('button')
        const displayElement = document.querySelector('input')


    /////////////////////////////////////////////
        function Calculator (displayElement) {
            this.displayElement = displayElement;
            this.operatorCheck = true;
            this.displayContent = '';
            this.equalsCheck = false  // 버튼 클릭 여부 확인용
            
        

        // 실행 메서드
        this.appendNumber = function(number) {
            
            if(this.equalsCheck) {
                this.displayContent = number;
                this.equalsCheck = false;
        }
            else {
                this.displayContent +=number
            }

            return this.operatorCheck = false
        }

        this.updateDisplay = function() {
            return this.displayElement.value = this.displayContent
        }

        this.appendOperator = function (operator) {
            if (this.operatorCheck) {
                this.equalsCheck = false
                console.log('dont print')
            }

            else {
                this.equalsCheck = false
                this.displayContent += operator
                this.operatorCheck = true
            }
        }

        // eval() 함수로 산술연산자 계산 가능
        this.compute = function () {
            if (this.operatorCheck) {
                console.log("Dont move")
            }    
            
            else {
                this.equalsCheck = true
                return this.displayContent = eval(this.displayContent) 
            }
            
        }
        
            

        this.clear = function() {
            this.displayContent = ''
            this.displayElement.value=0
            this.operatorCheck = true
        }
    }
    ///////////////////////////////////////////////////


        const calculator = new Calculator(displayElement)
    

        buttons.forEach(button => {
            button.addEventListener('click', () => {

                switch (button.dataset.type) {
                    case 'operator':
                        calculator.appendOperator(button.innerText)
                        calculator.updateDisplay()
                        break;

                    case 'ac':
                        calculator.clear()
                        break;
                    
                    case 'equals':
                    calculator.compute()
                    calculator.updateDisplay()
                    break;

                    default:
                    calculator.appendNumber(button.innerText)
                    calculator.updateDisplay()
                    break;
                }
            })
        })
        
