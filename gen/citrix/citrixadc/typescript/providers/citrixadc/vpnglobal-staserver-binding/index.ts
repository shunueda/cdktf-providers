// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnglobalStaserverBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding#gotopriorityexpression VpnglobalStaserverBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding#id VpnglobalStaserverBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding#staaddresstype VpnglobalStaserverBinding#staaddresstype}
  */
  readonly staaddresstype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding#staserver VpnglobalStaserverBinding#staserver}
  */
  readonly staserver: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding citrixadc_vpnglobal_staserver_binding}
*/
export class VpnglobalStaserverBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnglobal_staserver_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnglobalStaserverBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnglobalStaserverBinding to import
  * @param importFromId The id of the existing VpnglobalStaserverBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnglobalStaserverBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnglobal_staserver_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/vpnglobal_staserver_binding citrixadc_vpnglobal_staserver_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnglobalStaserverBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VpnglobalStaserverBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnglobal_staserver_binding',
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
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._id = config.id;
    this._staaddresstype = config.staaddresstype;
    this._staserver = config.staserver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
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

  // staaddresstype - computed: true, optional: true, required: false
  private _staaddresstype?: string; 
  public get staaddresstype() {
    return this.getStringAttribute('staaddresstype');
  }
  public set staaddresstype(value: string) {
    this._staaddresstype = value;
  }
  public resetStaaddresstype() {
    this._staaddresstype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staaddresstypeInput() {
    return this._staaddresstype;
  }

  // staserver - computed: false, optional: false, required: true
  private _staserver?: string; 
  public get staserver() {
    return this.getStringAttribute('staserver');
  }
  public set staserver(value: string) {
    this._staserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staserverInput() {
    return this._staserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      id: cdktf.stringToTerraform(this._id),
      staaddresstype: cdktf.stringToTerraform(this._staaddresstype),
      staserver: cdktf.stringToTerraform(this._staserver),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gotopriorityexpression: {
        value: cdktf.stringToHclTerraform(this._gotopriorityexpression),
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
      staaddresstype: {
        value: cdktf.stringToHclTerraform(this._staaddresstype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      staserver: {
        value: cdktf.stringToHclTerraform(this._staserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
