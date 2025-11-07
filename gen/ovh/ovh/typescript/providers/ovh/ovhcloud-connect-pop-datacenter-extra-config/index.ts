// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OvhcloudConnectPopDatacenterExtraConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#bgp_neighbor_area OvhcloudConnectPopDatacenterExtraConfig#bgp_neighbor_area}
  */
  readonly bgpNeighborArea?: number;
  /**
  * Router IP for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#bgp_neighbor_ip OvhcloudConnectPopDatacenterExtraConfig#bgp_neighbor_ip}
  */
  readonly bgpNeighborIp?: string;
  /**
  * ID of the datacenter configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#config_datacenter_id OvhcloudConnectPopDatacenterExtraConfig#config_datacenter_id}
  */
  readonly configDatacenterId: number;
  /**
  * ID of the pop configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#config_pop_id OvhcloudConnectPopDatacenterExtraConfig#config_pop_id}
  */
  readonly configPopId: number;
  /**
  * Static route next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#next_hop OvhcloudConnectPopDatacenterExtraConfig#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#service_name OvhcloudConnectPopDatacenterExtraConfig#service_name}
  */
  readonly serviceName: string;
  /**
  * Static route ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#subnet OvhcloudConnectPopDatacenterExtraConfig#subnet}
  */
  readonly subnet?: string;
  /**
  * Type of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#type OvhcloudConnectPopDatacenterExtraConfig#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config ovh_ovhcloud_connect_pop_datacenter_extra_config}
*/
export class OvhcloudConnectPopDatacenterExtraConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_ovhcloud_connect_pop_datacenter_extra_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvhcloudConnectPopDatacenterExtraConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvhcloudConnectPopDatacenterExtraConfig to import
  * @param importFromId The id of the existing OvhcloudConnectPopDatacenterExtraConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvhcloudConnectPopDatacenterExtraConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_ovhcloud_connect_pop_datacenter_extra_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/ovhcloud_connect_pop_datacenter_extra_config ovh_ovhcloud_connect_pop_datacenter_extra_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvhcloudConnectPopDatacenterExtraConfigConfig
  */
  public constructor(scope: Construct, id: string, config: OvhcloudConnectPopDatacenterExtraConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_ovhcloud_connect_pop_datacenter_extra_config',
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
    this._bgpNeighborArea = config.bgpNeighborArea;
    this._bgpNeighborIp = config.bgpNeighborIp;
    this._configDatacenterId = config.configDatacenterId;
    this._configPopId = config.configPopId;
    this._nextHop = config.nextHop;
    this._serviceName = config.serviceName;
    this._subnet = config.subnet;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_neighbor_area - computed: true, optional: true, required: false
  private _bgpNeighborArea?: number; 
  public get bgpNeighborArea() {
    return this.getNumberAttribute('bgp_neighbor_area');
  }
  public set bgpNeighborArea(value: number) {
    this._bgpNeighborArea = value;
  }
  public resetBgpNeighborArea() {
    this._bgpNeighborArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborAreaInput() {
    return this._bgpNeighborArea;
  }

  // bgp_neighbor_ip - computed: true, optional: true, required: false
  private _bgpNeighborIp?: string; 
  public get bgpNeighborIp() {
    return this.getStringAttribute('bgp_neighbor_ip');
  }
  public set bgpNeighborIp(value: string) {
    this._bgpNeighborIp = value;
  }
  public resetBgpNeighborIp() {
    this._bgpNeighborIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborIpInput() {
    return this._bgpNeighborIp;
  }

  // config_datacenter_id - computed: false, optional: false, required: true
  private _configDatacenterId?: number; 
  public get configDatacenterId() {
    return this.getNumberAttribute('config_datacenter_id');
  }
  public set configDatacenterId(value: number) {
    this._configDatacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configDatacenterIdInput() {
    return this._configDatacenterId;
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // next_hop - computed: true, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
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
      bgp_neighbor_area: cdktf.numberToTerraform(this._bgpNeighborArea),
      bgp_neighbor_ip: cdktf.stringToTerraform(this._bgpNeighborIp),
      config_datacenter_id: cdktf.numberToTerraform(this._configDatacenterId),
      config_pop_id: cdktf.numberToTerraform(this._configPopId),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      service_name: cdktf.stringToTerraform(this._serviceName),
      subnet: cdktf.stringToTerraform(this._subnet),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_neighbor_area: {
        value: cdktf.numberToHclTerraform(this._bgpNeighborArea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_neighbor_ip: {
        value: cdktf.stringToHclTerraform(this._bgpNeighborIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_datacenter_id: {
        value: cdktf.numberToHclTerraform(this._configDatacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_pop_id: {
        value: cdktf.numberToHclTerraform(this._configPopId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_hop: {
        value: cdktf.stringToHclTerraform(this._nextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
