class button {
    constructor(operator) {
        this.input1 = parseFloat(document.getElementById('input1').value);
        this.input2 = parseFloat(document.getElementById('input2').value);
        this.operator = operator;
        this.operasi_hasil = `${this.input1} ${operator} ${this.input2}`;
        this.nilai_hasil = 0;

        this.set_operasi();
        this.set_hasil();
    }
    /* untuk mengisi operasi yang sedang dilakukan */
    set_operasi() {
        document.getElementById("operasi-hasil").innerHTML = this.operasi_hasil;
    }
    /* mendapat hasil setelah operasi */
    get_hasil() {
        switch (this.operator) {
            case '+':
                this.nilai_hasil = this.input1 + this.input2;
                break;
            case '-':
                this.nilai_hasil = this.input1 - this.input2;
                break;
            case '%':
                this.nilai_hasil = this.input1 % this.input2;
                break;
            case '*':
                this.nilai_hasil = this.input1 * this.input2;
                break;
            case '/':
                this.nilai_hasil = this.input1 / this.input2;
                break;
            case '^':
                this.nilai_hasil = Math.pow(this.input1, this.input2);
                break;
        }
        // this.nilai_hasil = this.nilai_hasil.toPrecision(10);
        this.nilai_hasil = this.nilai_hasil.toFixed(1);
    }
    /* untuk mengisi nilai pada kolom hasil */
    set_hasil() {
        this.get_hasil();
        document.getElementById("nilai-hasil").innerHTML = this.nilai_hasil;
    }
}


/* buat objek baru sesuai operator */
function tambah() {
    var operasi_tambah = new button("+");
}

function kurang() {
    var operasi_kurang = new button("-");
}

function mod() {
    var operasi_mod = new button("%");
}

function kali() {
    var operasi_kali = new button("*");
}

function bagi() {
    var operasi_bagi = new button("/");
}

function pangkat() {
    var operasi_pangkat = new button("^");
}