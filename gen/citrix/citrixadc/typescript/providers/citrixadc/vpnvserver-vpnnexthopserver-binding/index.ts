// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnvserverVpnnexthopserverBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding#id VpnvserverVpnnexthopserverBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding#name VpnvserverVpnnexthopserverBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding#nexthopserver VpnvserverVpnnexthopserverBinding#nexthopserver}
  */
  readonly nexthopserver: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding citrixadc_vpnvserver_vpnnexthopserver_binding}
*/
export class VpnvserverVpnnexthopserverBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_vpnvserver_vpnnexthopserver_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnvserverVpnnexthopserverBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnvserverVpnnexthopserverBinding to import
  * @param importFromId The id of the existing VpnvserverVpnnexthopserverBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnvserverVpnnexthopserverBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_vpnvserver_vpnnexthopserver_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/vpnvserver_vpnnexthopserver_binding citrixadc_vpnvserver_vpnnexthopserver_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnvserverVpnnexthopserverBindingConfig
  */
  public constructor(scope: Construct, id: string, config: VpnvserverVpnnexthopserverBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_vpnvserver_vpnnexthopserver_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._nexthopserver = config.nexthopserver;
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

  // nexthopserver - computed: false, optional: false, required: true
  private _nexthopserver?: string; 
  public get nexthopserver() {
    return this.getStringAttribute('nexthopserver');
  }
  public set nexthopserver(value: string) {
    this._nexthopserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopserverInput() {
    return this._nexthopserver;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nexthopserver: cdktf.stringToTerraform(this._nexthopserver),
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
      nexthopserver: {
        value: cdktf.stringToHclTerraform(this._nexthopserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
