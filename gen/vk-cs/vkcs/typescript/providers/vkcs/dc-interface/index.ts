// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable BGP announce of subnet attached to interface. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#bgp_announce_enabled DcInterface#bgp_announce_enabled}
  */
  readonly bgpAnnounceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Direct Connect Router ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#dc_router_id DcInterface#dc_router_id}
  */
  readonly dcRouterId: string;
  /**
  * Description of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#description DcInterface#description}
  */
  readonly description?: string;
  /**
  * IP Address of the interface. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#ip_address DcInterface#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Name of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#name DcInterface#name}
  */
  readonly name?: string;
  /**
  * Network ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#network_id DcInterface#network_id}
  */
  readonly networkId: string;
  /**
  * The `region` to fetch availability zones from, defaults to the provider's `region`. Changing this creates a new interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#region DcInterface#region}
  */
  readonly region?: string;
  /**
  * Subnet ID to attach. Changing this creates a new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#subnet_id DcInterface#subnet_id}
  */
  readonly subnetId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface vkcs_dc_interface}
*/
export class DcInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_dc_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcInterface to import
  * @param importFromId The id of the existing DcInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_dc_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/dc_interface vkcs_dc_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DcInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_dc_interface',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpAnnounceEnabled = config.bgpAnnounceEnabled;
    this._dcRouterId = config.dcRouterId;
    this._description = config.description;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._networkId = config.networkId;
    this._region = config.region;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_announce_enabled - computed: true, optional: true, required: false
  private _bgpAnnounceEnabled?: boolean | cdktf.IResolvable; 
  public get bgpAnnounceEnabled() {
    return this.getBooleanAttribute('bgp_announce_enabled');
  }
  public set bgpAnnounceEnabled(value: boolean | cdktf.IResolvable) {
    this._bgpAnnounceEnabled = value;
  }
  public resetBgpAnnounceEnabled() {
    this._bgpAnnounceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAnnounceEnabledInput() {
    return this._bgpAnnounceEnabled;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dc_router_id - computed: false, optional: false, required: true
  private _dcRouterId?: string; 
  public get dcRouterId() {
    return this.getStringAttribute('dc_router_id');
  }
  public set dcRouterId(value: string) {
    this._dcRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcRouterIdInput() {
    return this._dcRouterId;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_netmask - computed: true, optional: false, required: false
  public get ipNetmask() {
    return this.getNumberAttribute('ip_netmask');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sdn - computed: true, optional: false, required: false
  public get sdn() {
    return this.getStringAttribute('sdn');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_announce_enabled: cdktf.booleanToTerraform(this._bgpAnnounceEnabled),
      dc_router_id: cdktf.stringToTerraform(this._dcRouterId),
      description: cdktf.stringToTerraform(this._description),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      region: cdktf.stringToTerraform(this._region),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_announce_enabled: {
        value: cdktf.booleanToHclTerraform(this._bgpAnnounceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dc_router_id: {
        value: cdktf.stringToHclTerraform(this._dcRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
