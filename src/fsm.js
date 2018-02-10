// дописать get states and trigger, после этого проверить будет ли работать

class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
		this.config=config;
		this.p=null;
		this.n=null;
		this.place=config.initial;
	}

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {// возвращает активное состояние
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
			this.p=this.place;
			this.place=state;
		}
	}

    /**
     * Changes state according to event transition rules.
     * @param event
     */
   trigger(event) {
		if(!this.config.states[this.place].transitions[event]){
			throw new Error ("event isn't exist");
		} else {
			this.p=this.place;
            this.place=this.config.states[this.place].transitions[event];}
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
	 
    getStates(event) {//будет работать только для этой схемы, в дальнейшем можно попробовать сделать с помощью перебора объекта
		if (event==undefined) {
			return ["normal","busy","hungry","sleeping"];
		} else if (event=="study") {
			return ["normal"];
		} else if (event=="get_tired") {
			return ["sleeping"];
		} else if (event=="get_hungry") {
			return ["busy", "sleeping"];	                           
		} else if (event=="eat") {
				return ["normal"];
		}else if(event=="get_up") {
				return ["normal"]
		}else{ return []}		 
	}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {// если есть возможность отходит на одно состояние назад
		if (this.p!=null) {
		this.n=this.place;
		this.place=this.p;
		this.p=null;
		return true;
		} else {return false};
	}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {// если есть возможность(если был один шаг назад), то можно перейти вперед к тому состоянию которое было
		if (this.n!=null) {
			this.place=this.n;
			this.p=this.place;
			this.n=null;
			return true;
			}else{return false;}
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

