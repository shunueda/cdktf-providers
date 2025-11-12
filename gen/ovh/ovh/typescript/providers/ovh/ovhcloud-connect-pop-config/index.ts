// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OvhcloudConnectPopConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customer Private AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#customer_bgp_area OvhcloudConnectPopConfig#customer_bgp_area}
  */
  readonly customerBgpArea?: number;
  /**
  * ID of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#interface_id OvhcloudConnectPopConfig#interface_id}
  */
  readonly interfaceId: number;
  /**
  * OVH Private AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#ovh_bgp_area OvhcloudConnectPopConfig#ovh_bgp_area}
  */
  readonly ovhBgpArea?: number;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#service_name OvhcloudConnectPopConfig#service_name}
  */
  readonly serviceName: string;
  /**
  * Subnet should be a /30, first IP for OVH, second IP for customer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#subnet OvhcloudConnectPopConfig#subnet}
  */
  readonly subnet?: string;
  /**
  * Type of the pop configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#type OvhcloudConnectPopConfig#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config ovh_ovhcloud_connect_pop_config}
*/
export class OvhcloudConnectPopConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ovhcloud_connect_pop_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvhcloudConnectPopConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvhcloudConnectPopConfig to import
  * @param importFromId The id of the existing OvhcloudConnectPopConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvhcloudConnectPopConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ovhcloud_connect_pop_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_config ovh_ovhcloud_connect_pop_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvhcloudConnectPopConfigConfig
  */
  public constructor(scope: Construct, id: string, config: OvhcloudConnectPopConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ovhcloud_connect_pop_config',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerBgpArea = config.customerBgpArea;
    this._interfaceId = config.interfaceId;
    this._ovhBgpArea = config.ovhBgpArea;
    this._serviceName = config.serviceName;
    this._subnet = config.subnet;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_bgp_area - computed: true, optional: true, required: false
  private _customerBgpArea?: number; 
  public get customerBgpArea() {
    return this.getNumberAttribute('customer_bgp_area');
  }
  public set customerBgpArea(value: number) {
    this._customerBgpArea = value;
  }
  public resetCustomerBgpArea() {
    this._customerBgpArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerBgpAreaInput() {
    return this._customerBgpArea;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // interface_id - computed: false, optional: false, required: true
  private _interfaceId?: number; 
  public get interfaceId() {
    return this.getNumberAttribute('interface_id');
  }
  public set interfaceId(value: number) {
    this._interfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdInput() {
    return this._interfaceId;
  }

  // ovh_bgp_area - computed: true, optional: true, required: false
  private _ovhBgpArea?: number; 
  public get ovhBgpArea() {
    return this.getNumberAttribute('ovh_bgp_area');
  }
  public set ovhBgpArea(value: number) {
    this._ovhBgpArea = value;
  }
  public resetOvhBgpArea() {
    this._ovhBgpArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovhBgpAreaInput() {
    return this._ovhBgpArea;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
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
      customer_bgp_area: cdktf.numberToTerraform(this._customerBgpArea),
      interface_id: cdktf.numberToTerraform(this._interfaceId),
      ovh_bgp_area: cdktf.numberToTerraform(this._ovhBgpArea),
      service_name: cdktf.stringToTerraform(this._serviceName),
      subnet: cdktf.stringToTerraform(this._subnet),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customer_bgp_area: {
        value: cdktf.numberToHclTerraform(this._customerBgpArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_id: {
        value: cdktf.numberToHclTerraform(this._interfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ovh_bgp_area: {
        value: cdktf.numberToHclTerraform(this._ovhBgpArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
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
