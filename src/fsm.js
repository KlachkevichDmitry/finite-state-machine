// дописать get states and trigger, после этого проверить будет ли работать

class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
		//-необходимы свойства, config - состояние объекта from spec
		//-в config есть первоначальное состояния: initial(config.initial="normal")
		//- хранить массив здесь????? и будет ли работать без массива, может быть необходимо хранить только два значения в памяти
		//- состояния предыдущее и последующее
		this.config=config;
		this.p=null;
		this.n=null;
		this.place=config.initial;

	}

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {// возвращает активное состояние+
		return this.place;
	}

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {// 1) первый тест: должно выкидывать ошибку если не существует такого состояния+
		if (this.config.states[state]==null) {
		throw error
		} else {
			this.undo=this.place;
			this.place=state;
		}
	}

	
			/* 
		const config = {
    initial: 'normal',
    states: {
        normal: {
            transitions: {
                study: 'busy',
            }
        },
        busy: {
            transitions: {
                get_tired: 'sleeping',
                get_hungry: 'hungry',
            }
        },
        hungry: {
            transitions: {
                eat: 'normal'
            },
        },
        sleeping: {
            transitions: {
                get_hungry: 'hungry',
                get_up: 'normal',
            },
        },
    }
};*/
    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {//определяет из какого состояния и куда переходить 
	
	}

    /**
     * Resets FSM state to initial.
     */
    reset() {// сбрасывает все к началу, place через config initial
		this.place=this.config.initial;
		this.undo=null;
		this.redo=null;
	}

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {//
		
	}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {// если есть возможность отходит на одно состояние назад
		if (this.p!=null) {
		this.state=this.p;
		this.n=this.p;
		return true;} else {return false}
		//должно проходить все тесты когда все методы будут готовы	
	}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {// если есть возможность(если был один шаг назад), то можно перейти вперед к тому состоянию которое было
		if (this.n!=null) {
			this.p=this.state;
			this.state=this.n;
			return true;} else {return false;}
			//должно проходить все тесты когда все методы будут готовы
			
			
	}

    /**
     * Clears transition history
     */
    clearHistory() {//очищает историю, тоесть предыдущие и последующие состояния
		this.p=null;
		this.n=null;
	}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/

