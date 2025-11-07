// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallManagementAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access#id FirewallManagementAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource to be enabled firewall management access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access#management_access_resource_name FirewallManagementAccess#management_access_resource_name}
  */
  readonly managementAccessResourceName: string;
  /**
  * Name of the transit firenet gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access#transit_firenet_gateway_name FirewallManagementAccess#transit_firenet_gateway_name}
  */
  readonly transitFirenetGatewayName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access aviatrix_firewall_management_access}
*/
export class FirewallManagementAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firewall_management_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallManagementAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallManagementAccess to import
  * @param importFromId The id of the existing FirewallManagementAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallManagementAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firewall_management_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_management_access aviatrix_firewall_management_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallManagementAccessConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallManagementAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firewall_management_access',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
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
    this._managementAccessResourceName = config.managementAccessResourceName;
    this._transitFirenetGatewayName = config.transitFirenetGatewayName;
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

  // management_access_resource_name - computed: false, optional: false, required: true
  private _managementAccessResourceName?: string; 
  public get managementAccessResourceName() {
    return this.getStringAttribute('management_access_resource_name');
  }
  public set managementAccessResourceName(value: string) {
    this._managementAccessResourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAccessResourceNameInput() {
    return this._managementAccessResourceName;
  }

  // transit_firenet_gateway_name - computed: false, optional: false, required: true
  private _transitFirenetGatewayName?: string; 
  public get transitFirenetGatewayName() {
    return this.getStringAttribute('transit_firenet_gateway_name');
  }
  public set transitFirenetGatewayName(value: string) {
    this._transitFirenetGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitFirenetGatewayNameInput() {
    return this._transitFirenetGatewayName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      management_access_resource_name: cdktf.stringToTerraform(this._managementAccessResourceName),
      transit_firenet_gateway_name: cdktf.stringToTerraform(this._transitFirenetGatewayName),
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
      management_access_resource_name: {
        value: cdktf.stringToHclTerraform(this._managementAccessResourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_firenet_gateway_name: {
        value: cdktf.stringToHclTerraform(this._transitFirenetGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
