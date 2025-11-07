// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsvariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#comment Nsvariable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#expires Nsvariable#expires}
  */
  readonly expires?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#id Nsvariable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#iffull Nsvariable#iffull}
  */
  readonly iffull?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#ifnovalue Nsvariable#ifnovalue}
  */
  readonly ifnovalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#ifvaluetoobig Nsvariable#ifvaluetoobig}
  */
  readonly ifvaluetoobig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#init Nsvariable#init}
  */
  readonly init?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#name Nsvariable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#scope Nsvariable#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#type Nsvariable#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable citrixadc_nsvariable}
*/
export class Nsvariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsvariable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsvariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsvariable to import
  * @param importFromId The id of the existing Nsvariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsvariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsvariable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsvariable citrixadc_nsvariable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsvariableConfig
  */
  public constructor(scope: Construct, id: string, config: NsvariableConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsvariable',
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
    this._comment = config.comment;
    this._expires = config.expires;
    this._id = config.id;
    this._iffull = config.iffull;
    this._ifnovalue = config.ifnovalue;
    this._ifvaluetoobig = config.ifvaluetoobig;
    this._init = config.init;
    this._name = config.name;
    this._scope = config.scope;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: number; 
  public get expires() {
    return this.getNumberAttribute('expires');
  }
  public set expires(value: number) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
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

  // iffull - computed: true, optional: true, required: false
  private _iffull?: string; 
  public get iffull() {
    return this.getStringAttribute('iffull');
  }
  public set iffull(value: string) {
    this._iffull = value;
  }
  public resetIffull() {
    this._iffull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iffullInput() {
    return this._iffull;
  }

  // ifnovalue - computed: true, optional: true, required: false
  private _ifnovalue?: string; 
  public get ifnovalue() {
    return this.getStringAttribute('ifnovalue');
  }
  public set ifnovalue(value: string) {
    this._ifnovalue = value;
  }
  public resetIfnovalue() {
    this._ifnovalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnovalueInput() {
    return this._ifnovalue;
  }

  // ifvaluetoobig - computed: true, optional: true, required: false
  private _ifvaluetoobig?: string; 
  public get ifvaluetoobig() {
    return this.getStringAttribute('ifvaluetoobig');
  }
  public set ifvaluetoobig(value: string) {
    this._ifvaluetoobig = value;
  }
  public resetIfvaluetoobig() {
    this._ifvaluetoobig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifvaluetoobigInput() {
    return this._ifvaluetoobig;
  }

  // init - computed: true, optional: true, required: false
  private _init?: string; 
  public get init() {
    return this.getStringAttribute('init');
  }
  public set init(value: string) {
    this._init = value;
  }
  public resetInit() {
    this._init = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initInput() {
    return this._init;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      expires: cdktf.numberToTerraform(this._expires),
      id: cdktf.stringToTerraform(this._id),
      iffull: cdktf.stringToTerraform(this._iffull),
      ifnovalue: cdktf.stringToTerraform(this._ifnovalue),
      ifvaluetoobig: cdktf.stringToTerraform(this._ifvaluetoobig),
      init: cdktf.stringToTerraform(this._init),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires: {
        value: cdktf.numberToHclTerraform(this._expires),
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
      iffull: {
        value: cdktf.stringToHclTerraform(this._iffull),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifnovalue: {
        value: cdktf.stringToHclTerraform(this._ifnovalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifvaluetoobig: {
        value: cdktf.stringToHclTerraform(this._ifvaluetoobig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init: {
        value: cdktf.stringToHclTerraform(this._init),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
