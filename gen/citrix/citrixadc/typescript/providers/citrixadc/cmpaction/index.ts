// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmpactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#addvaryheader Cmpaction#addvaryheader}
  */
  readonly addvaryheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#cmptype Cmpaction#cmptype}
  */
  readonly cmptype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#deltatype Cmpaction#deltatype}
  */
  readonly deltatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#id Cmpaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#name Cmpaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#varyheadervalue Cmpaction#varyheadervalue}
  */
  readonly varyheadervalue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction citrixadc_cmpaction}
*/
export class Cmpaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cmpaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cmpaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cmpaction to import
  * @param importFromId The id of the existing Cmpaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cmpaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cmpaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/cmpaction citrixadc_cmpaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmpactionConfig
  */
  public constructor(scope: Construct, id: string, config: CmpactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cmpaction',
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
    this._addvaryheader = config.addvaryheader;
    this._cmptype = config.cmptype;
    this._deltatype = config.deltatype;
    this._id = config.id;
    this._name = config.name;
    this._varyheadervalue = config.varyheadervalue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addvaryheader - computed: true, optional: true, required: false
  private _addvaryheader?: string; 
  public get addvaryheader() {
    return this.getStringAttribute('addvaryheader');
  }
  public set addvaryheader(value: string) {
    this._addvaryheader = value;
  }
  public resetAddvaryheader() {
    this._addvaryheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addvaryheaderInput() {
    return this._addvaryheader;
  }

  // cmptype - computed: false, optional: false, required: true
  private _cmptype?: string; 
  public get cmptype() {
    return this.getStringAttribute('cmptype');
  }
  public set cmptype(value: string) {
    this._cmptype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cmptypeInput() {
    return this._cmptype;
  }

  // deltatype - computed: false, optional: true, required: false
  private _deltatype?: string; 
  public get deltatype() {
    return this.getStringAttribute('deltatype');
  }
  public set deltatype(value: string) {
    this._deltatype = value;
  }
  public resetDeltatype() {
    this._deltatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltatypeInput() {
    return this._deltatype;
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

  // varyheadervalue - computed: true, optional: true, required: false
  private _varyheadervalue?: string; 
  public get varyheadervalue() {
    return this.getStringAttribute('varyheadervalue');
  }
  public set varyheadervalue(value: string) {
    this._varyheadervalue = value;
  }
  public resetVaryheadervalue() {
    this._varyheadervalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varyheadervalueInput() {
    return this._varyheadervalue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addvaryheader: cdktf.stringToTerraform(this._addvaryheader),
      cmptype: cdktf.stringToTerraform(this._cmptype),
      deltatype: cdktf.stringToTerraform(this._deltatype),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      varyheadervalue: cdktf.stringToTerraform(this._varyheadervalue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addvaryheader: {
        value: cdktf.stringToHclTerraform(this._addvaryheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmptype: {
        value: cdktf.stringToHclTerraform(this._cmptype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deltatype: {
        value: cdktf.stringToHclTerraform(this._deltatype),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      varyheadervalue: {
        value: cdktf.stringToHclTerraform(this._varyheadervalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
