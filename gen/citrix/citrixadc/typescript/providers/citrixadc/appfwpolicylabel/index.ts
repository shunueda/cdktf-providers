// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwpolicylabelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel#id Appfwpolicylabel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel#labelname Appfwpolicylabel#labelname}
  */
  readonly labelname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel#newname Appfwpolicylabel#newname}
  */
  readonly newname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel#policylabeltype Appfwpolicylabel#policylabeltype}
  */
  readonly policylabeltype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel citrixadc_appfwpolicylabel}
*/
export class Appfwpolicylabel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwpolicylabel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwpolicylabel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwpolicylabel to import
  * @param importFromId The id of the existing Appfwpolicylabel that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwpolicylabel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwpolicylabel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwpolicylabel citrixadc_appfwpolicylabel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwpolicylabelConfig
  */
  public constructor(scope: Construct, id: string, config: AppfwpolicylabelConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwpolicylabel',
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
    this._id = config.id;
    this._labelname = config.labelname;
    this._newname = config.newname;
    this._policylabeltype = config.policylabeltype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // labelname - computed: false, optional: false, required: true
  private _labelname?: string; 
  public get labelname() {
    return this.getStringAttribute('labelname');
  }
  public set labelname(value: string) {
    this._labelname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelnameInput() {
    return this._labelname;
  }

  // newname - computed: true, optional: true, required: false
  private _newname?: string; 
  public get newname() {
    return this.getStringAttribute('newname');
  }
  public set newname(value: string) {
    this._newname = value;
  }
  public resetNewname() {
    this._newname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newnameInput() {
    return this._newname;
  }

  // policylabeltype - computed: true, optional: true, required: false
  private _policylabeltype?: string; 
  public get policylabeltype() {
    return this.getStringAttribute('policylabeltype');
  }
  public set policylabeltype(value: string) {
    this._policylabeltype = value;
  }
  public resetPolicylabeltype() {
    this._policylabeltype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policylabeltypeInput() {
    return this._policylabeltype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      labelname: cdktf.stringToTerraform(this._labelname),
      newname: cdktf.stringToTerraform(this._newname),
      policylabeltype: cdktf.stringToTerraform(this._policylabeltype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labelname: {
        value: cdktf.stringToHclTerraform(this._labelname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      newname: {
        value: cdktf.stringToHclTerraform(this._newname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policylabeltype: {
        value: cdktf.stringToHclTerraform(this._policylabeltype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
