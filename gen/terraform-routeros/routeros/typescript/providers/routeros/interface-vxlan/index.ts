// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceVxlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#___path___ InterfaceVxlan#___path___}
  */
  readonly path?: string;
  /**
  * Whether to allow Fast Path processing. Fragmented and flooded packets over VXLAN are redirected via a slow path. Fast Path is disabled for VXLAN interface that uses IPv6 VTEP version or VRF. The setting is available since RouterOS version 7.8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#allow_fast_path InterfaceVxlan#allow_fast_path}
  */
  readonly allowFastPath?: boolean | cdktf.IResolvable;
  /**
  * Address Resolution Protocol mode:
  *   * disabled - the interface will not use ARP
  *   * enabled - the interface will use ARP
  *   * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface
  *   * proxy-arp - the router performs proxy ARP on the interface and sends replies to other interfaces
  *   * reply-only - the interface will only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be successful, a valid static entry must already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#arp InterfaceVxlan#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in IP/Settings, default is 30s. Can use postfix `ms`, `s`, `m`, `h`, `d` for milliseconds, seconds, minutes, hours or days. If no postfix is set then seconds (s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#arp_timeout InterfaceVxlan#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Setting controls whether a UDP checksum is calculated in the transmitted outer VXLAN packets:
  *     - `no` - the UDP checksum is set to zero in transmitted outer packets. This also allows receiving VXLAN packets over IPv6 that have a zero UDP checksum.
  *     - `yes` - the UDP checksum is calculated in transmitted outer packets.
  * If hardware offloading is used for packet transmission, this setting is ignored, and the behavior defaults to sending packets with a zero UDP checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#checksum InterfaceVxlan#checksum}
  */
  readonly checksum?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#comment InterfaceVxlan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#disabled InterfaceVxlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The Don't Fragment (DF) flag controls whether a packet can be broken into smaller packets, called fragments, before being sent over a network. When configuring VXLAN, this setting determines the presence of the DF flag on the outer IPv4 header and can control packet fragmentation if the encapsulated packet exceeds the outgoing interface MTU. This setting has three options:
  *   * disabled - the DF flag is not set on the outer IPv4 header, which means that packets can be fragmented if they are too large to be sent over the outgoing interface. This also allows packet fragmentation when VXLAN uses IPv6 underlay. 
  *   * enabled - the DF flag is always set on the outer IPv4 header, which means that packets will not be fragmented and will be dropped if they exceed the outgoing interface's MTU. This also avoids packet fragmentation when VXLAN uses IPv6 underlay.
  *   * inherit - The DF flag on the outer IPv4 header is based on the inner IPv4 DF flag. If the inner IPv4 header has the DF flag set, the outer IPv4 header will also have it set. If the packet exceeds the outgoing interface's MTU and DF is set, it will be dropped. If the inner packet is non-IP, the outer IPv4 header will not have the DF flag set and packets can be fragmented. If the inner packet is IPv6, the outer IPv4 header will always set the DF flag and packets cannot be fragmented. Note that when VXLAN uses IPv6 underlay, this setting does not have any effect and is treated the same as disabled. The setting is available since RouterOS version 7.8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#dont_fragment InterfaceVxlan#dont_fragment}
  */
  readonly dontFragment?: string;
  /**
  * When specified, a multicast group address can be used to forward broadcast, unknown-unicast, and multicast traffic between VTEPs. This property requires specifying the interface setting. The interface will use IGMP or MLD to join the specified multicast group, make sure to add the necessary PIM and IGMP/MDL configuration. When this property is set, the vteps-ip-version automatically gets updated to the used multicast IP version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#group InterfaceVxlan#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#hw InterfaceVxlan#hw}
  */
  readonly hw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#id InterfaceVxlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface name used for multicast forwarding. This property requires specifying the group setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#interface InterfaceVxlan#interface}
  */
  readonly interface?: string;
  /**
  * Setting controls whether inner source MAC addresses and remote VTEP IP/IPv6 addresses are learned dynamically from received packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#learning InterfaceVxlan#learning}
  */
  readonly learning?: boolean | cdktf.IResolvable;
  /**
  * Specifies the local source address for the VXLAN interface. If not set, one IP address of the egress interface will be selected as a source address for VXLAN packets. When the property is set, the vteps-ip-version automatically gets updated to the used local IP version. The setting is available since RouterOS version 7.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#local_address InterfaceVxlan#local_address}
  */
  readonly localAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#loop_protect InterfaceVxlan#loop_protect}
  */
  readonly loopProtect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#loop_protect_disable_time InterfaceVxlan#loop_protect_disable_time}
  */
  readonly loopProtectDisableTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#loop_protect_send_interval InterfaceVxlan#loop_protect_send_interval}
  */
  readonly loopProtectSendInterval?: string;
  /**
  * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#mac_address InterfaceVxlan#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Limits the maximum number of MAC addresses that VXLAN can store in the forwarding database (FDB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#max_fdb_size InterfaceVxlan#max_fdb_size}
  */
  readonly maxFdbSize?: number;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#mtu InterfaceVxlan#mtu}
  */
  readonly mtu?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#name InterfaceVxlan#name}
  */
  readonly name: string;
  /**
  * Used UDP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#port InterfaceVxlan#port}
  */
  readonly port?: number;
  /**
  * Changes the Remote Checksum Offload (RCO) settings for VXLAN interface. RCO is a technique for eliding the inner checksum of an encapsulated datagram, allowing the outer checksum to be offloaded by network driver. It does, however, involve a change to the encapsulation protocols, which the receiver must also support. For this reason, it is disabled by default and setting is available to ensure compatibility with systems that rely on this feature.
  * If hardware offloading is used, this setting is ignored, and the behavior defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#rem_csum InterfaceVxlan#rem_csum}
  */
  readonly remCsum?: string;
  /**
  * VXLAN Network Identifier (VNI).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#vni InterfaceVxlan#vni}
  */
  readonly vni?: number;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#vrf InterfaceVxlan#vrf}
  */
  readonly vrf?: string;
  /**
  * Used IP protocol version for statically configured VTEPs. The RouterOS VXLAN interface does not support dual-stack, any configured remote VTEPs with the opposite IP version will be ignored. When multicast group or local-address properties are set, the vteps-ip-version automatically gets updated to the used IP version. The setting is available since RouterOS version 7.6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#vteps_ip_version InterfaceVxlan#vteps_ip_version}
  */
  readonly vtepsIpVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan routeros_interface_vxlan}
*/
export class InterfaceVxlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_vxlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceVxlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceVxlan to import
  * @param importFromId The id of the existing InterfaceVxlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceVxlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_vxlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_vxlan routeros_interface_vxlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceVxlanConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceVxlanConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_vxlan',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
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
    this._allowFastPath = config.allowFastPath;
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._checksum = config.checksum;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._dontFragment = config.dontFragment;
    this._group = config.group;
    this._hw = config.hw;
    this._id = config.id;
    this._interface = config.interface;
    this._learning = config.learning;
    this._localAddress = config.localAddress;
    this._loopProtect = config.loopProtect;
    this._loopProtectDisableTime = config.loopProtectDisableTime;
    this._loopProtectSendInterval = config.loopProtectSendInterval;
    this._macAddress = config.macAddress;
    this._maxFdbSize = config.maxFdbSize;
    this._mtu = config.mtu;
    this._name = config.name;
    this._port = config.port;
    this._remCsum = config.remCsum;
    this._vni = config.vni;
    this._vrf = config.vrf;
    this._vtepsIpVersion = config.vtepsIpVersion;
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

  // allow_fast_path - computed: false, optional: true, required: false
  private _allowFastPath?: boolean | cdktf.IResolvable; 
  public get allowFastPath() {
    return this.getBooleanAttribute('allow_fast_path');
  }
  public set allowFastPath(value: boolean | cdktf.IResolvable) {
    this._allowFastPath = value;
  }
  public resetAllowFastPath() {
    this._allowFastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFastPathInput() {
    return this._allowFastPath;
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

  // checksum - computed: false, optional: true, required: false
  private _checksum?: boolean | cdktf.IResolvable; 
  public get checksum() {
    return this.getBooleanAttribute('checksum');
  }
  public set checksum(value: boolean | cdktf.IResolvable) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
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

  // dont_fragment - computed: false, optional: true, required: false
  private _dontFragment?: string; 
  public get dontFragment() {
    return this.getStringAttribute('dont_fragment');
  }
  public set dontFragment(value: string) {
    this._dontFragment = value;
  }
  public resetDontFragment() {
    this._dontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontFragmentInput() {
    return this._dontFragment;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hw - computed: false, optional: true, required: false
  private _hw?: boolean | cdktf.IResolvable; 
  public get hw() {
    return this.getBooleanAttribute('hw');
  }
  public set hw(value: boolean | cdktf.IResolvable) {
    this._hw = value;
  }
  public resetHw() {
    this._hw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwInput() {
    return this._hw;
  }

  // hw_offloaded - computed: true, optional: false, required: false
  public get hwOffloaded() {
    return this.getBooleanAttribute('hw_offloaded');
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // l2mtu - computed: true, optional: false, required: false
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }

  // learning - computed: false, optional: true, required: false
  private _learning?: boolean | cdktf.IResolvable; 
  public get learning() {
    return this.getBooleanAttribute('learning');
  }
  public set learning(value: boolean | cdktf.IResolvable) {
    this._learning = value;
  }
  public resetLearning() {
    this._learning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningInput() {
    return this._learning;
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

  // loop_protect - computed: false, optional: true, required: false
  private _loopProtect?: string; 
  public get loopProtect() {
    return this.getStringAttribute('loop_protect');
  }
  public set loopProtect(value: string) {
    this._loopProtect = value;
  }
  public resetLoopProtect() {
    this._loopProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectInput() {
    return this._loopProtect;
  }

  // loop_protect_disable_time - computed: false, optional: true, required: false
  private _loopProtectDisableTime?: string; 
  public get loopProtectDisableTime() {
    return this.getStringAttribute('loop_protect_disable_time');
  }
  public set loopProtectDisableTime(value: string) {
    this._loopProtectDisableTime = value;
  }
  public resetLoopProtectDisableTime() {
    this._loopProtectDisableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectDisableTimeInput() {
    return this._loopProtectDisableTime;
  }

  // loop_protect_send_interval - computed: false, optional: true, required: false
  private _loopProtectSendInterval?: string; 
  public get loopProtectSendInterval() {
    return this.getStringAttribute('loop_protect_send_interval');
  }
  public set loopProtectSendInterval(value: string) {
    this._loopProtectSendInterval = value;
  }
  public resetLoopProtectSendInterval() {
    this._loopProtectSendInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopProtectSendIntervalInput() {
    return this._loopProtectSendInterval;
  }

  // loop_protect_status - computed: true, optional: false, required: false
  public get loopProtectStatus() {
    return this.getStringAttribute('loop_protect_status');
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // max_fdb_size - computed: false, optional: true, required: false
  private _maxFdbSize?: number; 
  public get maxFdbSize() {
    return this.getNumberAttribute('max_fdb_size');
  }
  public set maxFdbSize(value: number) {
    this._maxFdbSize = value;
  }
  public resetMaxFdbSize() {
    this._maxFdbSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFdbSizeInput() {
    return this._maxFdbSize;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // rem_csum - computed: false, optional: true, required: false
  private _remCsum?: string; 
  public get remCsum() {
    return this.getStringAttribute('rem_csum');
  }
  public set remCsum(value: string) {
    this._remCsum = value;
  }
  public resetRemCsum() {
    this._remCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remCsumInput() {
    return this._remCsum;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // vteps_ip_version - computed: false, optional: true, required: false
  private _vtepsIpVersion?: string; 
  public get vtepsIpVersion() {
    return this.getStringAttribute('vteps_ip_version');
  }
  public set vtepsIpVersion(value: string) {
    this._vtepsIpVersion = value;
  }
  public resetVtepsIpVersion() {
    this._vtepsIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepsIpVersionInput() {
    return this._vtepsIpVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allow_fast_path: cdktf.booleanToTerraform(this._allowFastPath),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      checksum: cdktf.booleanToTerraform(this._checksum),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dont_fragment: cdktf.stringToTerraform(this._dontFragment),
      group: cdktf.stringToTerraform(this._group),
      hw: cdktf.booleanToTerraform(this._hw),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      learning: cdktf.booleanToTerraform(this._learning),
      local_address: cdktf.stringToTerraform(this._localAddress),
      loop_protect: cdktf.stringToTerraform(this._loopProtect),
      loop_protect_disable_time: cdktf.stringToTerraform(this._loopProtectDisableTime),
      loop_protect_send_interval: cdktf.stringToTerraform(this._loopProtectSendInterval),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      max_fdb_size: cdktf.numberToTerraform(this._maxFdbSize),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      rem_csum: cdktf.stringToTerraform(this._remCsum),
      vni: cdktf.numberToTerraform(this._vni),
      vrf: cdktf.stringToTerraform(this._vrf),
      vteps_ip_version: cdktf.stringToTerraform(this._vtepsIpVersion),
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
      allow_fast_path: {
        value: cdktf.booleanToHclTerraform(this._allowFastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      checksum: {
        value: cdktf.booleanToHclTerraform(this._checksum),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      dont_fragment: {
        value: cdktf.stringToHclTerraform(this._dontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw: {
        value: cdktf.booleanToHclTerraform(this._hw),
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
      learning: {
        value: cdktf.booleanToHclTerraform(this._learning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect: {
        value: cdktf.stringToHclTerraform(this._loopProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_disable_time: {
        value: cdktf.stringToHclTerraform(this._loopProtectDisableTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_protect_send_interval: {
        value: cdktf.stringToHclTerraform(this._loopProtectSendInterval),
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
      max_fdb_size: {
        value: cdktf.numberToHclTerraform(this._maxFdbSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rem_csum: {
        value: cdktf.stringToHclTerraform(this._remCsum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vteps_ip_version: {
        value: cdktf.stringToHclTerraform(this._vtepsIpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
