import {
    Field,
    PrivateKey,
    PublicKey,
    SmartContract,
    State,
    state,
    UInt64,
} from 'snarkyjs';

class Test extends SmartContract{
    @state(Field) value: State<Field>;

    constructor(initialBalance: UInt64, address: PublicKey, x: Field) {
        super(address);
        this.balance.addInPlace(initialBalance);
        this.value = State.init(x);
    }
}