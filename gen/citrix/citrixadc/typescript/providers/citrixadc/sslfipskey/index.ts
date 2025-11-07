// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslfipskeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#curve Sslfipskey#curve}
  */
  readonly curve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#exponent Sslfipskey#exponent}
  */
  readonly exponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#fipskeyname Sslfipskey#fipskeyname}
  */
  readonly fipskeyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#id Sslfipskey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#inform Sslfipskey#inform}
  */
  readonly inform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#iv Sslfipskey#iv}
  */
  readonly iv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#key Sslfipskey#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#keytype Sslfipskey#keytype}
  */
  readonly keytype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#modulus Sslfipskey#modulus}
  */
  readonly modulus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#wrapkeyname Sslfipskey#wrapkeyname}
  */
  readonly wrapkeyname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey citrixadc_sslfipskey}
*/
export class Sslfipskey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslfipskey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslfipskey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslfipskey to import
  * @param importFromId The id of the existing Sslfipskey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslfipskey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslfipskey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslfipskey citrixadc_sslfipskey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslfipskeyConfig
  */
  public constructor(scope: Construct, id: string, config: SslfipskeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslfipskey',
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
    this._curve = config.curve;
    this._exponent = config.exponent;
    this._fipskeyname = config.fipskeyname;
    this._id = config.id;
    this._inform = config.inform;
    this._iv = config.iv;
    this._key = config.key;
    this._keytype = config.keytype;
    this._modulus = config.modulus;
    this._wrapkeyname = config.wrapkeyname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // curve - computed: true, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // exponent - computed: true, optional: true, required: false
  private _exponent?: string; 
  public get exponent() {
    return this.getStringAttribute('exponent');
  }
  public set exponent(value: string) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
  }

  // fipskeyname - computed: false, optional: false, required: true
  private _fipskeyname?: string; 
  public get fipskeyname() {
    return this.getStringAttribute('fipskeyname');
  }
  public set fipskeyname(value: string) {
    this._fipskeyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fipskeynameInput() {
    return this._fipskeyname;
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

  // inform - computed: true, optional: true, required: false
  private _inform?: string; 
  public get inform() {
    return this.getStringAttribute('inform');
  }
  public set inform(value: string) {
    this._inform = value;
  }
  public resetInform() {
    this._inform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informInput() {
    return this._inform;
  }

  // iv - computed: true, optional: true, required: false
  private _iv?: string; 
  public get iv() {
    return this.getStringAttribute('iv');
  }
  public set iv(value: string) {
    this._iv = value;
  }
  public resetIv() {
    this._iv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ivInput() {
    return this._iv;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // keytype - computed: false, optional: false, required: true
  private _keytype?: string; 
  public get keytype() {
    return this.getStringAttribute('keytype');
  }
  public set keytype(value: string) {
    this._keytype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytypeInput() {
    return this._keytype;
  }

  // modulus - computed: true, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // wrapkeyname - computed: true, optional: true, required: false
  private _wrapkeyname?: string; 
  public get wrapkeyname() {
    return this.getStringAttribute('wrapkeyname');
  }
  public set wrapkeyname(value: string) {
    this._wrapkeyname = value;
  }
  public resetWrapkeyname() {
    this._wrapkeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrapkeynameInput() {
    return this._wrapkeyname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      curve: cdktf.stringToTerraform(this._curve),
      exponent: cdktf.stringToTerraform(this._exponent),
      fipskeyname: cdktf.stringToTerraform(this._fipskeyname),
      id: cdktf.stringToTerraform(this._id),
      inform: cdktf.stringToTerraform(this._inform),
      iv: cdktf.stringToTerraform(this._iv),
      key: cdktf.stringToTerraform(this._key),
      keytype: cdktf.stringToTerraform(this._keytype),
      modulus: cdktf.numberToTerraform(this._modulus),
      wrapkeyname: cdktf.stringToTerraform(this._wrapkeyname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      curve: {
        value: cdktf.stringToHclTerraform(this._curve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exponent: {
        value: cdktf.stringToHclTerraform(this._exponent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fipskeyname: {
        value: cdktf.stringToHclTerraform(this._fipskeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inform: {
        value: cdktf.stringToHclTerraform(this._inform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iv: {
        value: cdktf.stringToHclTerraform(this._iv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytype: {
        value: cdktf.stringToHclTerraform(this._keytype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modulus: {
        value: cdktf.numberToHclTerraform(this._modulus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrapkeyname: {
        value: cdktf.stringToHclTerraform(this._wrapkeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
