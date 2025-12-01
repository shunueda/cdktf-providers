// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpRelayConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#___path___ IpDhcpRelay#___path___}
  */
  readonly path?: string;
  /**
  * Adds DHCP relay agent information if enabled according to RFC 3046. Agent Circuit ID Sub-option contains mac address of an interface, Agent Remote ID Sub-option contains MAC address of the client from which request was received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#add_relay_info IpDhcpRelay#add_relay_info}
  */
  readonly addRelayInfo?: boolean | cdktf.IResolvable;
  /**
  * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#delay_threshold IpDhcpRelay#delay_threshold}
  */
  readonly delayThreshold?: string;
  /**
  * List of DHCP servers' IP addresses which should the DHCP requests be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#dhcp_server IpDhcpRelay#dhcp_server}
  */
  readonly dhcpServer: string;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#dhcp_server_vrf IpDhcpRelay#dhcp_server_vrf}
  */
  readonly dhcpServerVrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#disabled IpDhcpRelay#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#id IpDhcpRelay#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name the DHCP relay will be working on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#interface IpDhcpRelay#interface}
  */
  readonly interface: string;
  /**
  * The unique IP address of this DHCP relay needed for DHCP server to distinguish relays. If set to 0.0.0.0 - the IP address will be chosen automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#local_address IpDhcpRelay#local_address}
  */
  readonly localAddress?: string;
  /**
  * Descriptive name for the relay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#name IpDhcpRelay#name}
  */
  readonly name: string;
  /**
  * Specified string will be used to construct Option 82 instead of client's MAC address. Option 82 consist of: interface from which packets was received + client mac address or relay-info-remote-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#relay_info_remote_id IpDhcpRelay#relay_info_remote_id}
  */
  readonly relayInfoRemoteId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay routeros_ip_dhcp_relay}
*/
export class IpDhcpRelay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_relay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpRelay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpRelay to import
  * @param importFromId The id of the existing IpDhcpRelay that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpRelay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_relay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ip_dhcp_relay routeros_ip_dhcp_relay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpRelayConfig
  */
  public constructor(scope: Construct, id: string, config: IpDhcpRelayConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_relay',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._addRelayInfo = config.addRelayInfo;
    this._delayThreshold = config.delayThreshold;
    this._dhcpServer = config.dhcpServer;
    this._dhcpServerVrf = config.dhcpServerVrf;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._localAddress = config.localAddress;
    this._name = config.name;
    this._relayInfoRemoteId = config.relayInfoRemoteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // add_relay_info - computed: false, optional: true, required: false
  private _addRelayInfo?: boolean | cdktf.IResolvable; 
  public get addRelayInfo() {
    return this.getBooleanAttribute('add_relay_info');
  }
  public set addRelayInfo(value: boolean | cdktf.IResolvable) {
    this._addRelayInfo = value;
  }
  public resetAddRelayInfo() {
    this._addRelayInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRelayInfoInput() {
    return this._addRelayInfo;
  }

  // delay_threshold - computed: false, optional: true, required: false
  private _delayThreshold?: string; 
  public get delayThreshold() {
    return this.getStringAttribute('delay_threshold');
  }
  public set delayThreshold(value: string) {
    this._delayThreshold = value;
  }
  public resetDelayThreshold() {
    this._delayThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayThresholdInput() {
    return this._delayThreshold;
  }

  // dhcp_server - computed: false, optional: false, required: true
  private _dhcpServer?: string; 
  public get dhcpServer() {
    return this.getStringAttribute('dhcp_server');
  }
  public set dhcpServer(value: string) {
    this._dhcpServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer;
  }

  // dhcp_server_vrf - computed: false, optional: true, required: false
  private _dhcpServerVrf?: string; 
  public get dhcpServerVrf() {
    return this.getStringAttribute('dhcp_server_vrf');
  }
  public set dhcpServerVrf(value: string) {
    this._dhcpServerVrf = value;
  }
  public resetDhcpServerVrf() {
    this._dhcpServerVrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerVrfInput() {
    return this._dhcpServerVrf;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // relay_info_remote_id - computed: false, optional: true, required: false
  private _relayInfoRemoteId?: string; 
  public get relayInfoRemoteId() {
    return this.getStringAttribute('relay_info_remote_id');
  }
  public set relayInfoRemoteId(value: string) {
    this._relayInfoRemoteId = value;
  }
  public resetRelayInfoRemoteId() {
    this._relayInfoRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayInfoRemoteIdInput() {
    return this._relayInfoRemoteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_relay_info: cdktf.booleanToTerraform(this._addRelayInfo),
      delay_threshold: cdktf.stringToTerraform(this._delayThreshold),
      dhcp_server: cdktf.stringToTerraform(this._dhcpServer),
      dhcp_server_vrf: cdktf.stringToTerraform(this._dhcpServerVrf),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      local_address: cdktf.stringToTerraform(this._localAddress),
      name: cdktf.stringToTerraform(this._name),
      relay_info_remote_id: cdktf.stringToTerraform(this._relayInfoRemoteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_relay_info: {
        value: cdktf.booleanToHclTerraform(this._addRelayInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_threshold: {
        value: cdktf.stringToHclTerraform(this._delayThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server: {
        value: cdktf.stringToHclTerraform(this._dhcpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server_vrf: {
        value: cdktf.stringToHclTerraform(this._dhcpServerVrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
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
      relay_info_remote_id: {
        value: cdktf.stringToHclTerraform(this._relayInfoRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
