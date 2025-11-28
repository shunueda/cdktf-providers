// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVrrpConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#___path___ InterfaceVrrp#___path___}
  */
  readonly path?: string;
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#arp InterfaceVrrp#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#arp_timeout InterfaceVrrp#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Authentication method to use for VRRP advertisement packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#authentication InterfaceVrrp#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#comment InterfaceVrrp#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the mode for connection tracking synchronization. This setting is only relevant when `sync-connection-tracking=yes` is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#connection_tracking_mode InterfaceVrrp#connection_tracking_mode}
  */
  readonly connectionTrackingMode?: string;
  /**
  * Specifies UDP port for connection tracking synchronization. This setting is only relevant when `sync-connection-tracking=yes` is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#connection_tracking_port InterfaceVrrp#connection_tracking_port}
  */
  readonly connectionTrackingPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#disabled InterfaceVrrp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only `group_authority` will be taken into account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#group_authority InterfaceVrrp#group_authority}
  */
  readonly groupAuthority?: string;
  /**
  * Allows combining multiple VRRP interfaces to maintain the same VRRP status within the group. `group_authority` was previously called `group_master`, `group_master` is kept for compatibility with scripts, but if both are set only `group_authority` will be taken into account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#group_master InterfaceVrrp#group_master}
  */
  readonly groupMaster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#id InterfaceVrrp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#interface InterfaceVrrp#interface}
  */
  readonly interface: string;
  /**
  * VRRP update interval in seconds. Defines how often master sends advertisement packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#interval InterfaceVrrp#interval}
  */
  readonly interval?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#name InterfaceVrrp#name}
  */
  readonly name: string;
  /**
  * Script to execute when the node is switched to the backup state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#on_backup InterfaceVrrp#on_backup}
  */
  readonly onBackup?: string;
  /**
  * Script to execute when the node fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#on_fail InterfaceVrrp#on_fail}
  */
  readonly onFail?: string;
  /**
  * Script to execute when the node is switched to master state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#on_master InterfaceVrrp#on_master}
  */
  readonly onMaster?: string;
  /**
  * Password required for authentication. Can be ignored if authentication is not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#password InterfaceVrrp#password}
  */
  readonly password?: string;
  /**
  * Whether the master node always has the priority. When set to `no` the backup node will not be elected to be a master until the current master fails, even if the backup node has higher priority than the current master. This setting is ignored if the owner router becomes available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#preemption_mode InterfaceVrrp#preemption_mode}
  */
  readonly preemptionMode?: boolean | cdktf.IResolvable;
  /**
  * Priority of VRRP node used in Master election algorithm. A higher number means higher priority. `255` is reserved for the router that owns VR IP and `0` is reserved for the Master router to indicate that it is releasing responsibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#priority InterfaceVrrp#priority}
  */
  readonly priority?: number;
  /**
  * Specifies the remote address of the other VRRP router for syncing connection tracking. If not set, the system autodetects the remote address via VRRP. The remote address is used only if `sync_connection_tracking = true`.Sync connection tracking uses UDP port 8275.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#remote_address InterfaceVrrp#remote_address}
  */
  readonly remoteAddress?: string;
  /**
  * Synchronize connection tracking entries from Master to Backup device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#sync_connection_tracking InterfaceVrrp#sync_connection_tracking}
  */
  readonly syncConnectionTracking?: boolean | cdktf.IResolvable;
  /**
  * A protocol that will be used by VRRPv3. Valid only if the version is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#v3_protocol InterfaceVrrp#v3_protocol}
  */
  readonly v3Protocol?: string;
  /**
  * Which VRRP version to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#version InterfaceVrrp#version}
  */
  readonly version?: number;
  /**
  * Virtual Router identifier. Each Virtual router must have a unique id number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#vrid InterfaceVrrp#vrid}
  */
  readonly vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp routeros_interface_vrrp}
*/
export class InterfaceVrrp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_vrrp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVrrp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVrrp to import
  * @param importFromId The id of the existing InterfaceVrrp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVrrp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_vrrp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/resources/interface_vrrp routeros_interface_vrrp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVrrpConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVrrpConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_vrrp',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
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
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._authentication = config.authentication;
    this._comment = config.comment;
    this._connectionTrackingMode = config.connectionTrackingMode;
    this._connectionTrackingPort = config.connectionTrackingPort;
    this._disabled = config.disabled;
    this._groupAuthority = config.groupAuthority;
    this._groupMaster = config.groupMaster;
    this._id = config.id;
    this._interface = config.interface;
    this._interval = config.interval;
    this._name = config.name;
    this._onBackup = config.onBackup;
    this._onFail = config.onFail;
    this._onMaster = config.onMaster;
    this._password = config.password;
    this._preemptionMode = config.preemptionMode;
    this._priority = config.priority;
    this._remoteAddress = config.remoteAddress;
    this._syncConnectionTracking = config.syncConnectionTracking;
    this._v3Protocol = config.v3Protocol;
    this._version = config.version;
    this._vrid = config.vrid;
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

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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

  // connection_tracking_mode - computed: false, optional: true, required: false
  private _connectionTrackingMode?: string; 
  public get connectionTrackingMode() {
    return this.getStringAttribute('connection_tracking_mode');
  }
  public set connectionTrackingMode(value: string) {
    this._connectionTrackingMode = value;
  }
  public resetConnectionTrackingMode() {
    this._connectionTrackingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTrackingModeInput() {
    return this._connectionTrackingMode;
  }

  // connection_tracking_port - computed: false, optional: true, required: false
  private _connectionTrackingPort?: number; 
  public get connectionTrackingPort() {
    return this.getNumberAttribute('connection_tracking_port');
  }
  public set connectionTrackingPort(value: number) {
    this._connectionTrackingPort = value;
  }
  public resetConnectionTrackingPort() {
    this._connectionTrackingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTrackingPortInput() {
    return this._connectionTrackingPort;
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

  // group_authority - computed: false, optional: true, required: false
  private _groupAuthority?: string; 
  public get groupAuthority() {
    return this.getStringAttribute('group_authority');
  }
  public set groupAuthority(value: string) {
    this._groupAuthority = value;
  }
  public resetGroupAuthority() {
    this._groupAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAuthorityInput() {
    return this._groupAuthority;
  }

  // group_master - computed: false, optional: true, required: false
  private _groupMaster?: string; 
  public get groupMaster() {
    return this.getStringAttribute('group_master');
  }
  public set groupMaster(value: string) {
    this._groupMaster = value;
  }
  public resetGroupMaster() {
    this._groupMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMasterInput() {
    return this._groupMaster;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // mtu - computed: true, optional: false, required: false
  public get mtu() {
    return this.getNumberAttribute('mtu');
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

  // on_backup - computed: false, optional: true, required: false
  private _onBackup?: string; 
  public get onBackup() {
    return this.getStringAttribute('on_backup');
  }
  public set onBackup(value: string) {
    this._onBackup = value;
  }
  public resetOnBackup() {
    this._onBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBackupInput() {
    return this._onBackup;
  }

  // on_fail - computed: false, optional: true, required: false
  private _onFail?: string; 
  public get onFail() {
    return this.getStringAttribute('on_fail');
  }
  public set onFail(value: string) {
    this._onFail = value;
  }
  public resetOnFail() {
    this._onFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailInput() {
    return this._onFail;
  }

  // on_master - computed: false, optional: true, required: false
  private _onMaster?: string; 
  public get onMaster() {
    return this.getStringAttribute('on_master');
  }
  public set onMaster(value: string) {
    this._onMaster = value;
  }
  public resetOnMaster() {
    this._onMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMasterInput() {
    return this._onMaster;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // preemption_mode - computed: false, optional: true, required: false
  private _preemptionMode?: boolean | cdktf.IResolvable; 
  public get preemptionMode() {
    return this.getBooleanAttribute('preemption_mode');
  }
  public set preemptionMode(value: boolean | cdktf.IResolvable) {
    this._preemptionMode = value;
  }
  public resetPreemptionMode() {
    this._preemptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionModeInput() {
    return this._preemptionMode;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // remote_address - computed: false, optional: true, required: false
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  public resetRemoteAddress() {
    this._remoteAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // sync_connection_tracking - computed: false, optional: true, required: false
  private _syncConnectionTracking?: boolean | cdktf.IResolvable; 
  public get syncConnectionTracking() {
    return this.getBooleanAttribute('sync_connection_tracking');
  }
  public set syncConnectionTracking(value: boolean | cdktf.IResolvable) {
    this._syncConnectionTracking = value;
  }
  public resetSyncConnectionTracking() {
    this._syncConnectionTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConnectionTrackingInput() {
    return this._syncConnectionTracking;
  }

  // v3_protocol - computed: false, optional: true, required: false
  private _v3Protocol?: string; 
  public get v3Protocol() {
    return this.getStringAttribute('v3_protocol');
  }
  public set v3Protocol(value: string) {
    this._v3Protocol = value;
  }
  public resetV3Protocol() {
    this._v3Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v3ProtocolInput() {
    return this._v3Protocol;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      authentication: cdktf.stringToTerraform(this._authentication),
      comment: cdktf.stringToTerraform(this._comment),
      connection_tracking_mode: cdktf.stringToTerraform(this._connectionTrackingMode),
      connection_tracking_port: cdktf.numberToTerraform(this._connectionTrackingPort),
      disabled: cdktf.booleanToTerraform(this._disabled),
      group_authority: cdktf.stringToTerraform(this._groupAuthority),
      group_master: cdktf.stringToTerraform(this._groupMaster),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      on_backup: cdktf.stringToTerraform(this._onBackup),
      on_fail: cdktf.stringToTerraform(this._onFail),
      on_master: cdktf.stringToTerraform(this._onMaster),
      password: cdktf.stringToTerraform(this._password),
      preemption_mode: cdktf.booleanToTerraform(this._preemptionMode),
      priority: cdktf.numberToTerraform(this._priority),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      sync_connection_tracking: cdktf.booleanToTerraform(this._syncConnectionTracking),
      v3_protocol: cdktf.stringToTerraform(this._v3Protocol),
      version: cdktf.numberToTerraform(this._version),
      vrid: cdktf.numberToTerraform(this._vrid),
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
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
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
      connection_tracking_mode: {
        value: cdktf.stringToHclTerraform(this._connectionTrackingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_tracking_port: {
        value: cdktf.numberToHclTerraform(this._connectionTrackingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_authority: {
        value: cdktf.stringToHclTerraform(this._groupAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_master: {
        value: cdktf.stringToHclTerraform(this._groupMaster),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
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
      on_backup: {
        value: cdktf.stringToHclTerraform(this._onBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_fail: {
        value: cdktf.stringToHclTerraform(this._onFail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_master: {
        value: cdktf.stringToHclTerraform(this._onMaster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preemption_mode: {
        value: cdktf.booleanToHclTerraform(this._preemptionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_connection_tracking: {
        value: cdktf.booleanToHclTerraform(this._syncConnectionTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      v3_protocol: {
        value: cdktf.stringToHclTerraform(this._v3Protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
