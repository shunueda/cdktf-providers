// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OvhcloudConnectPopDatacenterConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the pop configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config#config_pop_id OvhcloudConnectPopDatacenterConfig#config_pop_id}
  */
  readonly configPopId: number;
  /**
  * ID of the datacenter linked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config#datacenter_id OvhcloudConnectPopDatacenterConfig#datacenter_id}
  */
  readonly datacenterId: number;
  /**
  * OVH Private AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config#ovh_bgp_area OvhcloudConnectPopDatacenterConfig#ovh_bgp_area}
  */
  readonly ovhBgpArea?: number;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config#service_name OvhcloudConnectPopDatacenterConfig#service_name}
  */
  readonly serviceName: string;
  /**
  * Subnet should be a /28 min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config#subnet OvhcloudConnectPopDatacenterConfig#subnet}
  */
  readonly subnet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config ovh_ovhcloud_connect_pop_datacenter_config}
*/
export class OvhcloudConnectPopDatacenterConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ovhcloud_connect_pop_datacenter_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvhcloudConnectPopDatacenterConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvhcloudConnectPopDatacenterConfig to import
  * @param importFromId The id of the existing OvhcloudConnectPopDatacenterConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvhcloudConnectPopDatacenterConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ovhcloud_connect_pop_datacenter_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_config ovh_ovhcloud_connect_pop_datacenter_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvhcloudConnectPopDatacenterConfigConfig
  */
  public constructor(scope: Construct, id: string, config: OvhcloudConnectPopDatacenterConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ovhcloud_connect_pop_datacenter_config',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configPopId = config.configPopId;
    this._datacenterId = config.datacenterId;
    this._ovhBgpArea = config.ovhBgpArea;
    this._serviceName = config.serviceName;
    this._subnet = config.subnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_pop_id - computed: false, optional: false, required: true
  private _configPopId?: number; 
  public get configPopId() {
    return this.getNumberAttribute('config_pop_id');
  }
  public set configPopId(value: number) {
    this._configPopId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configPopIdInput() {
    return this._configPopId;
  }

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: number; 
  public get datacenterId() {
    return this.getNumberAttribute('datacenter_id');
  }
  public set datacenterId(value: number) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_pop_id: cdktf.numberToTerraform(this._configPopId),
      datacenter_id: cdktf.numberToTerraform(this._datacenterId),
      ovh_bgp_area: cdktf.numberToTerraform(this._ovhBgpArea),
      service_name: cdktf.stringToTerraform(this._serviceName),
      subnet: cdktf.stringToTerraform(this._subnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_pop_id: {
        value: cdktf.numberToHclTerraform(this._configPopId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      datacenter_id: {
        value: cdktf.numberToHclTerraform(this._datacenterId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
