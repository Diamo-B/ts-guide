namespace calculator{
    export class BasicCalculator{
        private _model;
        constructor(model: string){this._model = model}
        public getModel(){
            return this._model;
        }
    }
}