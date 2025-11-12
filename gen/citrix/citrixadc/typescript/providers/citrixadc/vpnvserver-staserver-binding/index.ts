// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnvserverStaserverBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding#id VpnvserverStaserverBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding#name VpnvserverStaserverBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding#staaddresstype VpnvserverStaserverBinding#staaddresstype}
  */
  readonly staaddresstype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding#staserver VpnvserverStaserverBinding#staserver}
  */
  readonly staserver: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding citrixadc_vpnvserver_staserver_binding}
*/
export class VpnvserverStaserverBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnvserver_staserver_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnvserverStaserverBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnvserverStaserverBinding to import
  * @param importFromId The id of the existing VpnvserverStaserverBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnvserverStaserverBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnvserver_staserver_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/vpnvserver_staserver_binding citrixadc_vpnvserver_staserver_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnvserverStaserverBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VpnvserverStaserverBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnvserver_staserver_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._name = config.name;
    this._staaddresstype = config.staaddresstype;
    this._staserver = config.staserver;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      staaddresstype: cdktf.stringToTerraform(this._staaddresstype),
      staserver: cdktf.stringToTerraform(this._staserver),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
