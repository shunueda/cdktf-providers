// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PingerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#c Pinger#c}
  */
  readonly c?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#forcenew_id_set Pinger#forcenew_id_set}
  */
  readonly forcenewIdSet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#hostname Pinger#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#i Pinger#i}
  */
  readonly i?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#id Pinger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#n Pinger#n}
  */
  readonly n?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#p Pinger#p}
  */
  readonly p?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#q Pinger#q}
  */
  readonly q?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#s Pinger#s}
  */
  readonly s?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#t Pinger#t}
  */
  readonly t?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger citrixadc_pinger}
*/
export class Pinger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_pinger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pinger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pinger to import
  * @param importFromId The id of the existing Pinger that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pinger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_pinger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pinger citrixadc_pinger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PingerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PingerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_pinger',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._forcenewIdSet = config.forcenewIdSet;
    this._hostname = config.hostname;
    this._i = config.i;
    this._id = config.id;
    this._n = config.n;
    this._p = config.p;
    this._q = config.q;
    this._s = config.s;
    this._t = config.t;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // c - computed: true, optional: true, required: false
  private _c?: number; 
  public get c() {
    return this.getNumberAttribute('c');
  }
  public set c(value: number) {
    this._c = value;
  }
  public resetC() {
    this._c = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cInput() {
    return this._c;
  }

  // forcenew_id_set - computed: true, optional: true, required: false
  private _forcenewIdSet?: string[]; 
  public get forcenewIdSet() {
    return cdktf.Fn.tolist(this.getListAttribute('forcenew_id_set'));
  }
  public set forcenewIdSet(value: string[]) {
    this._forcenewIdSet = value;
  }
  public resetForcenewIdSet() {
    this._forcenewIdSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcenewIdSetInput() {
    return this._forcenewIdSet;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // i - computed: true, optional: true, required: false
  private _i?: number; 
  public get i() {
    return this.getNumberAttribute('i');
  }
  public set i(value: number) {
    this._i = value;
  }
  public resetI() {
    this._i = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iInput() {
    return this._i;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // n - computed: true, optional: true, required: false
  private _n?: boolean | cdktf.IResolvable; 
  public get n() {
    return this.getBooleanAttribute('n');
  }
  public set n(value: boolean | cdktf.IResolvable) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // p - computed: true, optional: true, required: false
  private _p?: string; 
  public get p() {
    return this.getStringAttribute('p');
  }
  public set p(value: string) {
    this._p = value;
  }
  public resetP() {
    this._p = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pInput() {
    return this._p;
  }

  // q - computed: true, optional: true, required: false
  private _q?: boolean | cdktf.IResolvable; 
  public get q() {
    return this.getBooleanAttribute('q');
  }
  public set q(value: boolean | cdktf.IResolvable) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // s - computed: true, optional: true, required: false
  private _s?: number; 
  public get s() {
    return this.getNumberAttribute('s');
  }
  public set s(value: number) {
    this._s = value;
  }
  public resetS() {
    this._s = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sInput() {
    return this._s;
  }

  // t - computed: true, optional: true, required: false
  private _t?: number; 
  public get t() {
    return this.getNumberAttribute('t');
  }
  public set t(value: number) {
    this._t = value;
  }
  public resetT() {
    this._t = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tInput() {
    return this._t;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      c: cdktf.numberToTerraform(this._c),
      forcenew_id_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forcenewIdSet),
      hostname: cdktf.stringToTerraform(this._hostname),
      i: cdktf.numberToTerraform(this._i),
      id: cdktf.stringToTerraform(this._id),
      n: cdktf.booleanToTerraform(this._n),
      p: cdktf.stringToTerraform(this._p),
      q: cdktf.booleanToTerraform(this._q),
      s: cdktf.numberToTerraform(this._s),
      t: cdktf.numberToTerraform(this._t),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      c: {
        value: cdktf.numberToHclTerraform(this._c),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forcenew_id_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forcenewIdSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      i: {
        value: cdktf.numberToHclTerraform(this._i),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n: {
        value: cdktf.booleanToHclTerraform(this._n),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      p: {
        value: cdktf.stringToHclTerraform(this._p),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q: {
        value: cdktf.booleanToHclTerraform(this._q),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      s: {
        value: cdktf.numberToHclTerraform(this._s),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      t: {
        value: cdktf.numberToHclTerraform(this._t),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
