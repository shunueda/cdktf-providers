// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpServerLeaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#___path___ IpDhcpServerLease#___path___}
  */
  readonly path?: string;
  /**
  * The IP address of the DHCP lease to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#address IpDhcpServerLease#address}
  */
  readonly address: string;
  /**
  * Address list to which address will be added if lease is bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#address_lists IpDhcpServerLease#address_lists}
  */
  readonly addressLists?: string;
  /**
  * Creates a single simple queue entry for both IPv4 and IPv6 addresses, uses the MAC address and DUID for identification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#allow_dual_stack_queue IpDhcpServerLease#allow_dual_stack_queue}
  */
  readonly allowDualStackQueue?: boolean | cdktf.IResolvable;
  /**
  * Send all replies as broadcasts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#always_broadcast IpDhcpServerLease#always_broadcast}
  */
  readonly alwaysBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Whether to block access for this DHCP client (true|false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#block_access IpDhcpServerLease#block_access}
  */
  readonly blockAccess?: boolean | cdktf.IResolvable;
  /**
  * If specified, must match DHCP 'client identifier' option of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#client_id IpDhcpServerLease#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#comment IpDhcpServerLease#comment}
  */
  readonly comment?: string;
  /**
  * Add additional DHCP options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#dhcp_option IpDhcpServerLease#dhcp_option}
  */
  readonly dhcpOption?: string;
  /**
  * Add additional set of DHCP options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#dhcp_option_set IpDhcpServerLease#dhcp_option_set}
  */
  readonly dhcpOptionSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#disabled IpDhcpServerLease#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#id IpDhcpServerLease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify where to place dynamic simple queue entries for static DCHP leases with rate-limit parameter set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#insert_queue_before IpDhcpServerLease#insert_queue_before}
  */
  readonly insertQueueBefore?: string;
  /**
  * Time that the client may use the address. If set to 0s lease will never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#lease_time IpDhcpServerLease#lease_time}
  */
  readonly leaseTime?: string;
  /**
  * The MAC addreess of the DHCP lease to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#mac_address IpDhcpServerLease#mac_address}
  */
  readonly macAddress: string;
  /**
  * Adds a dynamic simple queue to limit IP's bandwidth to a specified rate. Requires the lease to be static.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#rate_limit IpDhcpServerLease#rate_limit}
  */
  readonly rateLimit?: string;
  /**
  * Server name which serves this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#server IpDhcpServerLease#server}
  */
  readonly server?: string;
  /**
  * When this option is set server uses source MAC address instead of received CHADDR to assign address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#use_src_mac IpDhcpServerLease#use_src_mac}
  */
  readonly useSrcMac?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease routeros_ip_dhcp_server_lease}
*/
export class IpDhcpServerLease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_server_lease";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpServerLease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpServerLease to import
  * @param importFromId The id of the existing IpDhcpServerLease that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpServerLease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_server_lease", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/ip_dhcp_server_lease routeros_ip_dhcp_server_lease} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpServerLeaseConfig
  */
  public constructor(scope: Construct, id: string, config: IpDhcpServerLeaseConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_server_lease',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._address = config.address;
    this._addressLists = config.addressLists;
    this._allowDualStackQueue = config.allowDualStackQueue;
    this._alwaysBroadcast = config.alwaysBroadcast;
    this._blockAccess = config.blockAccess;
    this._clientId = config.clientId;
    this._comment = config.comment;
    this._dhcpOption = config.dhcpOption;
    this._dhcpOptionSet = config.dhcpOptionSet;
    this._disabled = config.disabled;
    this._id = config.id;
    this._insertQueueBefore = config.insertQueueBefore;
    this._leaseTime = config.leaseTime;
    this._macAddress = config.macAddress;
    this._rateLimit = config.rateLimit;
    this._server = config.server;
    this._useSrcMac = config.useSrcMac;
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

  // active_address - computed: true, optional: false, required: false
  public get activeAddress() {
    return this.getStringAttribute('active_address');
  }

  // active_client_id - computed: true, optional: false, required: false
  public get activeClientId() {
    return this.getStringAttribute('active_client_id');
  }

  // active_hostname - computed: true, optional: false, required: false
  public get activeHostname() {
    return this.getStringAttribute('active_hostname');
  }

  // active_mac_address - computed: true, optional: false, required: false
  public get activeMacAddress() {
    return this.getStringAttribute('active_mac_address');
  }

  // active_server - computed: true, optional: false, required: false
  public get activeServer() {
    return this.getStringAttribute('active_server');
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_lists - computed: false, optional: true, required: false
  private _addressLists?: string; 
  public get addressLists() {
    return this.getStringAttribute('address_lists');
  }
  public set addressLists(value: string) {
    this._addressLists = value;
  }
  public resetAddressLists() {
    this._addressLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListsInput() {
    return this._addressLists;
  }

  // agent_circuit_id - computed: true, optional: false, required: false
  public get agentCircuitId() {
    return this.getStringAttribute('agent_circuit_id');
  }

  // agent_remote_id - computed: true, optional: false, required: false
  public get agentRemoteId() {
    return this.getStringAttribute('agent_remote_id');
  }

  // allow_dual_stack_queue - computed: false, optional: true, required: false
  private _allowDualStackQueue?: boolean | cdktf.IResolvable; 
  public get allowDualStackQueue() {
    return this.getBooleanAttribute('allow_dual_stack_queue');
  }
  public set allowDualStackQueue(value: boolean | cdktf.IResolvable) {
    this._allowDualStackQueue = value;
  }
  public resetAllowDualStackQueue() {
    this._allowDualStackQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDualStackQueueInput() {
    return this._allowDualStackQueue;
  }

  // always_broadcast - computed: false, optional: true, required: false
  private _alwaysBroadcast?: boolean | cdktf.IResolvable; 
  public get alwaysBroadcast() {
    return this.getBooleanAttribute('always_broadcast');
  }
  public set alwaysBroadcast(value: boolean | cdktf.IResolvable) {
    this._alwaysBroadcast = value;
  }
  public resetAlwaysBroadcast() {
    this._alwaysBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysBroadcastInput() {
    return this._alwaysBroadcast;
  }

  // block_access - computed: false, optional: true, required: false
  private _blockAccess?: boolean | cdktf.IResolvable; 
  public get blockAccess() {
    return this.getBooleanAttribute('block_access');
  }
  public set blockAccess(value: boolean | cdktf.IResolvable) {
    this._blockAccess = value;
  }
  public resetBlockAccess() {
    this._blockAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAccessInput() {
    return this._blockAccess;
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dhcp_option - computed: false, optional: true, required: false
  private _dhcpOption?: string; 
  public get dhcpOption() {
    return this.getStringAttribute('dhcp_option');
  }
  public set dhcpOption(value: string) {
    this._dhcpOption = value;
  }
  public resetDhcpOption() {
    this._dhcpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionInput() {
    return this._dhcpOption;
  }

  // dhcp_option_set - computed: false, optional: true, required: false
  private _dhcpOptionSet?: string; 
  public get dhcpOptionSet() {
    return this.getStringAttribute('dhcp_option_set');
  }
  public set dhcpOptionSet(value: string) {
    this._dhcpOptionSet = value;
  }
  public resetDhcpOptionSet() {
    this._dhcpOptionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionSetInput() {
    return this._dhcpOptionSet;
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // expires_after - computed: true, optional: false, required: false
  public get expiresAfter() {
    return this.getStringAttribute('expires_after');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // insert_queue_before - computed: false, optional: true, required: false
  private _insertQueueBefore?: string; 
  public get insertQueueBefore() {
    return this.getStringAttribute('insert_queue_before');
  }
  public set insertQueueBefore(value: string) {
    this._insertQueueBefore = value;
  }
  public resetInsertQueueBefore() {
    this._insertQueueBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertQueueBeforeInput() {
    return this._insertQueueBefore;
  }

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: string; 
  public get leaseTime() {
    return this.getStringAttribute('lease_time');
  }
  public set leaseTime(value: string) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // radius - computed: true, optional: false, required: false
  public get radius() {
    return this.getStringAttribute('radius');
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: string; 
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }
  public set rateLimit(value: string) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // src_mac_address - computed: true, optional: false, required: false
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // use_src_mac - computed: false, optional: true, required: false
  private _useSrcMac?: boolean | cdktf.IResolvable; 
  public get useSrcMac() {
    return this.getBooleanAttribute('use_src_mac');
  }
  public set useSrcMac(value: boolean | cdktf.IResolvable) {
    this._useSrcMac = value;
  }
  public resetUseSrcMac() {
    this._useSrcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSrcMacInput() {
    return this._useSrcMac;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      address: cdktf.stringToTerraform(this._address),
      address_lists: cdktf.stringToTerraform(this._addressLists),
      allow_dual_stack_queue: cdktf.booleanToTerraform(this._allowDualStackQueue),
      always_broadcast: cdktf.booleanToTerraform(this._alwaysBroadcast),
      block_access: cdktf.booleanToTerraform(this._blockAccess),
      client_id: cdktf.stringToTerraform(this._clientId),
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_option: cdktf.stringToTerraform(this._dhcpOption),
      dhcp_option_set: cdktf.stringToTerraform(this._dhcpOptionSet),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      insert_queue_before: cdktf.stringToTerraform(this._insertQueueBefore),
      lease_time: cdktf.stringToTerraform(this._leaseTime),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      rate_limit: cdktf.stringToTerraform(this._rateLimit),
      server: cdktf.stringToTerraform(this._server),
      use_src_mac: cdktf.booleanToTerraform(this._useSrcMac),
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
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_lists: {
        value: cdktf.stringToHclTerraform(this._addressLists),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_dual_stack_queue: {
        value: cdktf.booleanToHclTerraform(this._allowDualStackQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_broadcast: {
        value: cdktf.booleanToHclTerraform(this._alwaysBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_access: {
        value: cdktf.booleanToHclTerraform(this._blockAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option: {
        value: cdktf.stringToHclTerraform(this._dhcpOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option_set: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionSet),
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
      insert_queue_before: {
        value: cdktf.stringToHclTerraform(this._insertQueueBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.stringToHclTerraform(this._leaseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.stringToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_src_mac: {
        value: cdktf.booleanToHclTerraform(this._useSrcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
