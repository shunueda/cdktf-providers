// https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsrConfig extends cdktf.TerraformMetaArguments {
  /**
  * The security object CSR Country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#c Csr#c}
  */
  readonly c?: string;
  /**
  * The security object CSR Common Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#cn Csr#cn}
  */
  readonly cn: string;
  /**
  * The security object CSR DNS Names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#dnsnames Csr#dnsnames}
  */
  readonly dnsnames?: string[];
  /**
  * The security object CSR Email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#e Csr#e}
  */
  readonly e?: string;
  /**
  * Email value for CSR in Subject Alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#email Csr#email}
  */
  readonly email?: string[];
  /**
  * The security object CSR IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#ips Csr#ips}
  */
  readonly ips?: string[];
  /**
  * The security object kid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#kid Csr#kid}
  */
  readonly kid: string;
  /**
  * The security object CSR Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#l Csr#l}
  */
  readonly l?: string;
  /**
  * The security object CSR Organisation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#o Csr#o}
  */
  readonly o?: string;
  /**
  * The security object CSR Organisational Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#ou Csr#ou}
  */
  readonly ou?: string;
  /**
  * The security object CSR State.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#st Csr#st}
  */
  readonly st?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr dsm_csr}
*/
export class Csr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dsm_csr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Csr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Csr to import
  * @param importFromId The id of the existing Csr that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Csr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dsm_csr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortanix/dsm/0.5.36/docs/resources/csr dsm_csr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsrConfig
  */
  public constructor(scope: Construct, id: string, config: CsrConfig) {
    super(scope, id, {
      terraformResourceType: 'dsm_csr',
      terraformGeneratorMetadata: {
        providerName: 'dsm',
        providerVersion: '0.5.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._c = config.c;
    this._cn = config.cn;
    this._dnsnames = config.dnsnames;
    this._e = config.e;
    this._email = config.email;
    this._ips = config.ips;
    this._kid = config.kid;
    this._l = config.l;
    this._o = config.o;
    this._ou = config.ou;
    this._st = config.st;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // c - computed: false, optional: true, required: false
  private _c?: string; 
  public get c() {
    return this.getStringAttribute('c');
  }
  public set c(value: string) {
    this._c = value;
  }
  public resetC() {
    this._c = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cInput() {
    return this._c;
  }

  // cn - computed: false, optional: false, required: true
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
  }

  // dnsnames - computed: false, optional: true, required: false
  private _dnsnames?: string[]; 
  public get dnsnames() {
    return this.getListAttribute('dnsnames');
  }
  public set dnsnames(value: string[]) {
    this._dnsnames = value;
  }
  public resetDnsnames() {
    this._dnsnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsnamesInput() {
    return this._dnsnames;
  }

  // e - computed: false, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // l - computed: false, optional: true, required: false
  private _l?: string; 
  public get l() {
    return this.getStringAttribute('l');
  }
  public set l(value: string) {
    this._l = value;
  }
  public resetL() {
    this._l = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lInput() {
    return this._l;
  }

  // o - computed: false, optional: true, required: false
  private _o?: string; 
  public get o() {
    return this.getStringAttribute('o');
  }
  public set o(value: string) {
    this._o = value;
  }
  public resetO() {
    this._o = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oInput() {
    return this._o;
  }

  // ou - computed: false, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // st - computed: false, optional: true, required: false
  private _st?: string; 
  public get st() {
    return this.getStringAttribute('st');
  }
  public set st(value: string) {
    this._st = value;
  }
  public resetSt() {
    this._st = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stInput() {
    return this._st;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      c: cdktf.stringToTerraform(this._c),
      cn: cdktf.stringToTerraform(this._cn),
      dnsnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsnames),
      e: cdktf.stringToTerraform(this._e),
      email: cdktf.listMapper(cdktf.stringToTerraform, false)(this._email),
      ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ips),
      kid: cdktf.stringToTerraform(this._kid),
      l: cdktf.stringToTerraform(this._l),
      o: cdktf.stringToTerraform(this._o),
      ou: cdktf.stringToTerraform(this._ou),
      st: cdktf.stringToTerraform(this._st),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      c: {
        value: cdktf.stringToHclTerraform(this._c),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn: {
        value: cdktf.stringToHclTerraform(this._cn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      e: {
        value: cdktf.stringToHclTerraform(this._e),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._email),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ips),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kid: {
        value: cdktf.stringToHclTerraform(this._kid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l: {
        value: cdktf.stringToHclTerraform(this._l),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      o: {
        value: cdktf.stringToHclTerraform(this._o),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      st: {
        value: cdktf.stringToHclTerraform(this._st),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
