// Do not generate like this
// if(cond)with(cond2)if(cond3)debugger;else ok();
//
//
// See https://github.com/Constellation/escodegen/issues/49
if (cond) {
    with (cond2) {
        if (cond3) {
            debugger;
        }
    }
} else {
    ok();
}
