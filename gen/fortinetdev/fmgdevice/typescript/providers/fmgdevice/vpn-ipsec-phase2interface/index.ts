// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecPhase2InterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#add_route VpnIpsecPhase2Interface#add_route}
  */
  readonly addRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke1 VpnIpsecPhase2Interface#addke1}
  */
  readonly addke1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke2 VpnIpsecPhase2Interface#addke2}
  */
  readonly addke2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke3 VpnIpsecPhase2Interface#addke3}
  */
  readonly addke3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke4 VpnIpsecPhase2Interface#addke4}
  */
  readonly addke4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke5 VpnIpsecPhase2Interface#addke5}
  */
  readonly addke5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke6 VpnIpsecPhase2Interface#addke6}
  */
  readonly addke6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#addke7 VpnIpsecPhase2Interface#addke7}
  */
  readonly addke7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#auto_discovery_forwarder VpnIpsecPhase2Interface#auto_discovery_forwarder}
  */
  readonly autoDiscoveryForwarder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#auto_discovery_sender VpnIpsecPhase2Interface#auto_discovery_sender}
  */
  readonly autoDiscoverySender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#auto_negotiate VpnIpsecPhase2Interface#auto_negotiate}
  */
  readonly autoNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#comments VpnIpsecPhase2Interface#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#device_name VpnIpsecPhase2Interface#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#device_vdom VpnIpsecPhase2Interface#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dhcp_ipsec VpnIpsecPhase2Interface#dhcp_ipsec}
  */
  readonly dhcpIpsec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dhgrp VpnIpsecPhase2Interface#dhgrp}
  */
  readonly dhgrp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#diffserv VpnIpsecPhase2Interface#diffserv}
  */
  readonly diffserv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#diffservcode VpnIpsecPhase2Interface#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_addr_type VpnIpsecPhase2Interface#dst_addr_type}
  */
  readonly dstAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_end_ip VpnIpsecPhase2Interface#dst_end_ip}
  */
  readonly dstEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_end_ip6 VpnIpsecPhase2Interface#dst_end_ip6}
  */
  readonly dstEndIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_name VpnIpsecPhase2Interface#dst_name}
  */
  readonly dstName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_name6 VpnIpsecPhase2Interface#dst_name6}
  */
  readonly dstName6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_port VpnIpsecPhase2Interface#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_start_ip VpnIpsecPhase2Interface#dst_start_ip}
  */
  readonly dstStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_start_ip6 VpnIpsecPhase2Interface#dst_start_ip6}
  */
  readonly dstStartIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_subnet VpnIpsecPhase2Interface#dst_subnet}
  */
  readonly dstSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#dst_subnet6 VpnIpsecPhase2Interface#dst_subnet6}
  */
  readonly dstSubnet6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#encapsulation VpnIpsecPhase2Interface#encapsulation}
  */
  readonly encapsulation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#id VpnIpsecPhase2Interface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#inbound_dscp_copy VpnIpsecPhase2Interface#inbound_dscp_copy}
  */
  readonly inboundDscpCopy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#initiator_ts_narrow VpnIpsecPhase2Interface#initiator_ts_narrow}
  */
  readonly initiatorTsNarrow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#ipv4_df VpnIpsecPhase2Interface#ipv4_df}
  */
  readonly ipv4Df?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#keepalive VpnIpsecPhase2Interface#keepalive}
  */
  readonly keepalive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#keylife_type VpnIpsecPhase2Interface#keylife_type}
  */
  readonly keylifeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#keylifekbs VpnIpsecPhase2Interface#keylifekbs}
  */
  readonly keylifekbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#keylifeseconds VpnIpsecPhase2Interface#keylifeseconds}
  */
  readonly keylifeseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#l2tp VpnIpsecPhase2Interface#l2tp}
  */
  readonly l2Tp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#name VpnIpsecPhase2Interface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#pfs VpnIpsecPhase2Interface#pfs}
  */
  readonly pfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#phase1name VpnIpsecPhase2Interface#phase1name}
  */
  readonly phase1Name?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#proposal VpnIpsecPhase2Interface#proposal}
  */
  readonly proposal?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#protocol VpnIpsecPhase2Interface#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#replay VpnIpsecPhase2Interface#replay}
  */
  readonly replay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#route_overlap VpnIpsecPhase2Interface#route_overlap}
  */
  readonly routeOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#single_source VpnIpsecPhase2Interface#single_source}
  */
  readonly singleSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_addr_type VpnIpsecPhase2Interface#src_addr_type}
  */
  readonly srcAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_end_ip VpnIpsecPhase2Interface#src_end_ip}
  */
  readonly srcEndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_end_ip6 VpnIpsecPhase2Interface#src_end_ip6}
  */
  readonly srcEndIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_name VpnIpsecPhase2Interface#src_name}
  */
  readonly srcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_name6 VpnIpsecPhase2Interface#src_name6}
  */
  readonly srcName6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_port VpnIpsecPhase2Interface#src_port}
  */
  readonly srcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_start_ip VpnIpsecPhase2Interface#src_start_ip}
  */
  readonly srcStartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_start_ip6 VpnIpsecPhase2Interface#src_start_ip6}
  */
  readonly srcStartIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_subnet VpnIpsecPhase2Interface#src_subnet}
  */
  readonly srcSubnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#src_subnet6 VpnIpsecPhase2Interface#src_subnet6}
  */
  readonly srcSubnet6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface fmgdevice_vpn_ipsec_phase2interface}
*/
export class VpnIpsecPhase2Interface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_ipsec_phase2interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecPhase2Interface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecPhase2Interface to import
  * @param importFromId The id of the existing VpnIpsecPhase2Interface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecPhase2Interface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_ipsec_phase2interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ipsec_phase2interface fmgdevice_vpn_ipsec_phase2interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecPhase2InterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecPhase2InterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_ipsec_phase2interface',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addRoute = config.addRoute;
    this._addke1 = config.addke1;
    this._addke2 = config.addke2;
    this._addke3 = config.addke3;
    this._addke4 = config.addke4;
    this._addke5 = config.addke5;
    this._addke6 = config.addke6;
    this._addke7 = config.addke7;
    this._autoDiscoveryForwarder = config.autoDiscoveryForwarder;
    this._autoDiscoverySender = config.autoDiscoverySender;
    this._autoNegotiate = config.autoNegotiate;
    this._comments = config.comments;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dhcpIpsec = config.dhcpIpsec;
    this._dhgrp = config.dhgrp;
    this._diffserv = config.diffserv;
    this._diffservcode = config.diffservcode;
    this._dstAddrType = config.dstAddrType;
    this._dstEndIp = config.dstEndIp;
    this._dstEndIp6 = config.dstEndIp6;
    this._dstName = config.dstName;
    this._dstName6 = config.dstName6;
    this._dstPort = config.dstPort;
    this._dstStartIp = config.dstStartIp;
    this._dstStartIp6 = config.dstStartIp6;
    this._dstSubnet = config.dstSubnet;
    this._dstSubnet6 = config.dstSubnet6;
    this._encapsulation = config.encapsulation;
    this._id = config.id;
    this._inboundDscpCopy = config.inboundDscpCopy;
    this._initiatorTsNarrow = config.initiatorTsNarrow;
    this._ipv4Df = config.ipv4Df;
    this._keepalive = config.keepalive;
    this._keylifeType = config.keylifeType;
    this._keylifekbs = config.keylifekbs;
    this._keylifeseconds = config.keylifeseconds;
    this._l2Tp = config.l2Tp;
    this._name = config.name;
    this._pfs = config.pfs;
    this._phase1Name = config.phase1Name;
    this._proposal = config.proposal;
    this._protocol = config.protocol;
    this._replay = config.replay;
    this._routeOverlap = config.routeOverlap;
    this._singleSource = config.singleSource;
    this._srcAddrType = config.srcAddrType;
    this._srcEndIp = config.srcEndIp;
    this._srcEndIp6 = config.srcEndIp6;
    this._srcName = config.srcName;
    this._srcName6 = config.srcName6;
    this._srcPort = config.srcPort;
    this._srcStartIp = config.srcStartIp;
    this._srcStartIp6 = config.srcStartIp6;
    this._srcSubnet = config.srcSubnet;
    this._srcSubnet6 = config.srcSubnet6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_route - computed: true, optional: true, required: false
  private _addRoute?: string; 
  public get addRoute() {
    return this.getStringAttribute('add_route');
  }
  public set addRoute(value: string) {
    this._addRoute = value;
  }
  public resetAddRoute() {
    this._addRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRouteInput() {
    return this._addRoute;
  }

  // addke1 - computed: true, optional: true, required: false
  private _addke1?: string[]; 
  public get addke1() {
    return cdktf.Fn.tolist(this.getListAttribute('addke1'));
  }
  public set addke1(value: string[]) {
    this._addke1 = value;
  }
  public resetAddke1() {
    this._addke1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke1Input() {
    return this._addke1;
  }

  // addke2 - computed: true, optional: true, required: false
  private _addke2?: string[]; 
  public get addke2() {
    return cdktf.Fn.tolist(this.getListAttribute('addke2'));
  }
  public set addke2(value: string[]) {
    this._addke2 = value;
  }
  public resetAddke2() {
    this._addke2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke2Input() {
    return this._addke2;
  }

  // addke3 - computed: true, optional: true, required: false
  private _addke3?: string[]; 
  public get addke3() {
    return cdktf.Fn.tolist(this.getListAttribute('addke3'));
  }
  public set addke3(value: string[]) {
    this._addke3 = value;
  }
  public resetAddke3() {
    this._addke3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke3Input() {
    return this._addke3;
  }

  // addke4 - computed: true, optional: true, required: false
  private _addke4?: string[]; 
  public get addke4() {
    return cdktf.Fn.tolist(this.getListAttribute('addke4'));
  }
  public set addke4(value: string[]) {
    this._addke4 = value;
  }
  public resetAddke4() {
    this._addke4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke4Input() {
    return this._addke4;
  }

  // addke5 - computed: true, optional: true, required: false
  private _addke5?: string[]; 
  public get addke5() {
    return cdktf.Fn.tolist(this.getListAttribute('addke5'));
  }
  public set addke5(value: string[]) {
    this._addke5 = value;
  }
  public resetAddke5() {
    this._addke5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke5Input() {
    return this._addke5;
  }

  // addke6 - computed: true, optional: true, required: false
  private _addke6?: string[]; 
  public get addke6() {
    return cdktf.Fn.tolist(this.getListAttribute('addke6'));
  }
  public set addke6(value: string[]) {
    this._addke6 = value;
  }
  public resetAddke6() {
    this._addke6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke6Input() {
    return this._addke6;
  }

  // addke7 - computed: true, optional: true, required: false
  private _addke7?: string[]; 
  public get addke7() {
    return cdktf.Fn.tolist(this.getListAttribute('addke7'));
  }
  public set addke7(value: string[]) {
    this._addke7 = value;
  }
  public resetAddke7() {
    this._addke7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addke7Input() {
    return this._addke7;
  }

  // auto_discovery_forwarder - computed: true, optional: true, required: false
  private _autoDiscoveryForwarder?: string; 
  public get autoDiscoveryForwarder() {
    return this.getStringAttribute('auto_discovery_forwarder');
  }
  public set autoDiscoveryForwarder(value: string) {
    this._autoDiscoveryForwarder = value;
  }
  public resetAutoDiscoveryForwarder() {
    this._autoDiscoveryForwarder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoveryForwarderInput() {
    return this._autoDiscoveryForwarder;
  }

  // auto_discovery_sender - computed: true, optional: true, required: false
  private _autoDiscoverySender?: string; 
  public get autoDiscoverySender() {
    return this.getStringAttribute('auto_discovery_sender');
  }
  public set autoDiscoverySender(value: string) {
    this._autoDiscoverySender = value;
  }
  public resetAutoDiscoverySender() {
    this._autoDiscoverySender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDiscoverySenderInput() {
    return this._autoDiscoverySender;
  }

  // auto_negotiate - computed: true, optional: true, required: false
  private _autoNegotiate?: string; 
  public get autoNegotiate() {
    return this.getStringAttribute('auto_negotiate');
  }
  public set autoNegotiate(value: string) {
    this._autoNegotiate = value;
  }
  public resetAutoNegotiate() {
    this._autoNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoNegotiateInput() {
    return this._autoNegotiate;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dhcp_ipsec - computed: true, optional: true, required: false
  private _dhcpIpsec?: string; 
  public get dhcpIpsec() {
    return this.getStringAttribute('dhcp_ipsec');
  }
  public set dhcpIpsec(value: string) {
    this._dhcpIpsec = value;
  }
  public resetDhcpIpsec() {
    this._dhcpIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpsecInput() {
    return this._dhcpIpsec;
  }

  // dhgrp - computed: true, optional: true, required: false
  private _dhgrp?: string[]; 
  public get dhgrp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhgrp'));
  }
  public set dhgrp(value: string[]) {
    this._dhgrp = value;
  }
  public resetDhgrp() {
    this._dhgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhgrpInput() {
    return this._dhgrp;
  }

  // diffserv - computed: true, optional: true, required: false
  private _diffserv?: string; 
  public get diffserv() {
    return this.getStringAttribute('diffserv');
  }
  public set diffserv(value: string) {
    this._diffserv = value;
  }
  public resetDiffserv() {
    this._diffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservInput() {
    return this._diffserv;
  }

  // diffservcode - computed: true, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // dst_addr_type - computed: true, optional: true, required: false
  private _dstAddrType?: string; 
  public get dstAddrType() {
    return this.getStringAttribute('dst_addr_type');
  }
  public set dstAddrType(value: string) {
    this._dstAddrType = value;
  }
  public resetDstAddrType() {
    this._dstAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrTypeInput() {
    return this._dstAddrType;
  }

  // dst_end_ip - computed: false, optional: true, required: false
  private _dstEndIp?: string; 
  public get dstEndIp() {
    return this.getStringAttribute('dst_end_ip');
  }
  public set dstEndIp(value: string) {
    this._dstEndIp = value;
  }
  public resetDstEndIp() {
    this._dstEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEndIpInput() {
    return this._dstEndIp;
  }

  // dst_end_ip6 - computed: false, optional: true, required: false
  private _dstEndIp6?: string; 
  public get dstEndIp6() {
    return this.getStringAttribute('dst_end_ip6');
  }
  public set dstEndIp6(value: string) {
    this._dstEndIp6 = value;
  }
  public resetDstEndIp6() {
    this._dstEndIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEndIp6Input() {
    return this._dstEndIp6;
  }

  // dst_name - computed: true, optional: true, required: false
  private _dstName?: string[]; 
  public get dstName() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_name'));
  }
  public set dstName(value: string[]) {
    this._dstName = value;
  }
  public resetDstName() {
    this._dstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNameInput() {
    return this._dstName;
  }

  // dst_name6 - computed: true, optional: true, required: false
  private _dstName6?: string[]; 
  public get dstName6() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_name6'));
  }
  public set dstName6(value: string[]) {
    this._dstName6 = value;
  }
  public resetDstName6() {
    this._dstName6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstName6Input() {
    return this._dstName6;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // dst_start_ip - computed: false, optional: true, required: false
  private _dstStartIp?: string; 
  public get dstStartIp() {
    return this.getStringAttribute('dst_start_ip');
  }
  public set dstStartIp(value: string) {
    this._dstStartIp = value;
  }
  public resetDstStartIp() {
    this._dstStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstStartIpInput() {
    return this._dstStartIp;
  }

  // dst_start_ip6 - computed: false, optional: true, required: false
  private _dstStartIp6?: string; 
  public get dstStartIp6() {
    return this.getStringAttribute('dst_start_ip6');
  }
  public set dstStartIp6(value: string) {
    this._dstStartIp6 = value;
  }
  public resetDstStartIp6() {
    this._dstStartIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstStartIp6Input() {
    return this._dstStartIp6;
  }

  // dst_subnet - computed: true, optional: true, required: false
  private _dstSubnet?: string[]; 
  public get dstSubnet() {
    return this.getListAttribute('dst_subnet');
  }
  public set dstSubnet(value: string[]) {
    this._dstSubnet = value;
  }
  public resetDstSubnet() {
    this._dstSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnetInput() {
    return this._dstSubnet;
  }

  // dst_subnet6 - computed: false, optional: true, required: false
  private _dstSubnet6?: string; 
  public get dstSubnet6() {
    return this.getStringAttribute('dst_subnet6');
  }
  public set dstSubnet6(value: string) {
    this._dstSubnet6 = value;
  }
  public resetDstSubnet6() {
    this._dstSubnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSubnet6Input() {
    return this._dstSubnet6;
  }

  // encapsulation - computed: true, optional: true, required: false
  private _encapsulation?: string; 
  public get encapsulation() {
    return this.getStringAttribute('encapsulation');
  }
  public set encapsulation(value: string) {
    this._encapsulation = value;
  }
  public resetEncapsulation() {
    this._encapsulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationInput() {
    return this._encapsulation;
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

  // inbound_dscp_copy - computed: true, optional: true, required: false
  private _inboundDscpCopy?: string; 
  public get inboundDscpCopy() {
    return this.getStringAttribute('inbound_dscp_copy');
  }
  public set inboundDscpCopy(value: string) {
    this._inboundDscpCopy = value;
  }
  public resetInboundDscpCopy() {
    this._inboundDscpCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundDscpCopyInput() {
    return this._inboundDscpCopy;
  }

  // initiator_ts_narrow - computed: true, optional: true, required: false
  private _initiatorTsNarrow?: string; 
  public get initiatorTsNarrow() {
    return this.getStringAttribute('initiator_ts_narrow');
  }
  public set initiatorTsNarrow(value: string) {
    this._initiatorTsNarrow = value;
  }
  public resetInitiatorTsNarrow() {
    this._initiatorTsNarrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorTsNarrowInput() {
    return this._initiatorTsNarrow;
  }

  // ipv4_df - computed: true, optional: true, required: false
  private _ipv4Df?: string; 
  public get ipv4Df() {
    return this.getStringAttribute('ipv4_df');
  }
  public set ipv4Df(value: string) {
    this._ipv4Df = value;
  }
  public resetIpv4Df() {
    this._ipv4Df = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DfInput() {
    return this._ipv4Df;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: string; 
  public get keepalive() {
    return this.getStringAttribute('keepalive');
  }
  public set keepalive(value: string) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keylife_type - computed: true, optional: true, required: false
  private _keylifeType?: string; 
  public get keylifeType() {
    return this.getStringAttribute('keylife_type');
  }
  public set keylifeType(value: string) {
    this._keylifeType = value;
  }
  public resetKeylifeType() {
    this._keylifeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylifeTypeInput() {
    return this._keylifeType;
  }

  // keylifekbs - computed: false, optional: true, required: false
  private _keylifekbs?: number; 
  public get keylifekbs() {
    return this.getNumberAttribute('keylifekbs');
  }
  public set keylifekbs(value: number) {
    this._keylifekbs = value;
  }
  public resetKeylifekbs() {
    this._keylifekbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylifekbsInput() {
    return this._keylifekbs;
  }

  // keylifeseconds - computed: true, optional: true, required: false
  private _keylifeseconds?: number; 
  public get keylifeseconds() {
    return this.getNumberAttribute('keylifeseconds');
  }
  public set keylifeseconds(value: number) {
    this._keylifeseconds = value;
  }
  public resetKeylifeseconds() {
    this._keylifeseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keylifesecondsInput() {
    return this._keylifeseconds;
  }

  // l2tp - computed: false, optional: true, required: false
  private _l2Tp?: string; 
  public get l2Tp() {
    return this.getStringAttribute('l2tp');
  }
  public set l2Tp(value: string) {
    this._l2Tp = value;
  }
  public resetL2Tp() {
    this._l2Tp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TpInput() {
    return this._l2Tp;
  }

  // name - computed: false, optional: true, required: false
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

  // pfs - computed: true, optional: true, required: false
  private _pfs?: string; 
  public get pfs() {
    return this.getStringAttribute('pfs');
  }
  public set pfs(value: string) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs;
  }

  // phase1name - computed: true, optional: true, required: false
  private _phase1Name?: string[]; 
  public get phase1Name() {
    return cdktf.Fn.tolist(this.getListAttribute('phase1name'));
  }
  public set phase1Name(value: string[]) {
    this._phase1Name = value;
  }
  public resetPhase1Name() {
    this._phase1Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1NameInput() {
    return this._phase1Name;
  }

  // proposal - computed: true, optional: true, required: false
  private _proposal?: string[]; 
  public get proposal() {
    return cdktf.Fn.tolist(this.getListAttribute('proposal'));
  }
  public set proposal(value: string[]) {
    this._proposal = value;
  }
  public resetProposal() {
    this._proposal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalInput() {
    return this._proposal;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replay - computed: true, optional: true, required: false
  private _replay?: string; 
  public get replay() {
    return this.getStringAttribute('replay');
  }
  public set replay(value: string) {
    this._replay = value;
  }
  public resetReplay() {
    this._replay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayInput() {
    return this._replay;
  }

  // route_overlap - computed: true, optional: true, required: false
  private _routeOverlap?: string; 
  public get routeOverlap() {
    return this.getStringAttribute('route_overlap');
  }
  public set routeOverlap(value: string) {
    this._routeOverlap = value;
  }
  public resetRouteOverlap() {
    this._routeOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOverlapInput() {
    return this._routeOverlap;
  }

  // single_source - computed: true, optional: true, required: false
  private _singleSource?: string; 
  public get singleSource() {
    return this.getStringAttribute('single_source');
  }
  public set singleSource(value: string) {
    this._singleSource = value;
  }
  public resetSingleSource() {
    this._singleSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSourceInput() {
    return this._singleSource;
  }

  // src_addr_type - computed: true, optional: true, required: false
  private _srcAddrType?: string; 
  public get srcAddrType() {
    return this.getStringAttribute('src_addr_type');
  }
  public set srcAddrType(value: string) {
    this._srcAddrType = value;
  }
  public resetSrcAddrType() {
    this._srcAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrTypeInput() {
    return this._srcAddrType;
  }

  // src_end_ip - computed: false, optional: true, required: false
  private _srcEndIp?: string; 
  public get srcEndIp() {
    return this.getStringAttribute('src_end_ip');
  }
  public set srcEndIp(value: string) {
    this._srcEndIp = value;
  }
  public resetSrcEndIp() {
    this._srcEndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEndIpInput() {
    return this._srcEndIp;
  }

  // src_end_ip6 - computed: false, optional: true, required: false
  private _srcEndIp6?: string; 
  public get srcEndIp6() {
    return this.getStringAttribute('src_end_ip6');
  }
  public set srcEndIp6(value: string) {
    this._srcEndIp6 = value;
  }
  public resetSrcEndIp6() {
    this._srcEndIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEndIp6Input() {
    return this._srcEndIp6;
  }

  // src_name - computed: true, optional: true, required: false
  private _srcName?: string[]; 
  public get srcName() {
    return cdktf.Fn.tolist(this.getListAttribute('src_name'));
  }
  public set srcName(value: string[]) {
    this._srcName = value;
  }
  public resetSrcName() {
    this._srcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNameInput() {
    return this._srcName;
  }

  // src_name6 - computed: true, optional: true, required: false
  private _srcName6?: string[]; 
  public get srcName6() {
    return cdktf.Fn.tolist(this.getListAttribute('src_name6'));
  }
  public set srcName6(value: string[]) {
    this._srcName6 = value;
  }
  public resetSrcName6() {
    this._srcName6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcName6Input() {
    return this._srcName6;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // src_start_ip - computed: false, optional: true, required: false
  private _srcStartIp?: string; 
  public get srcStartIp() {
    return this.getStringAttribute('src_start_ip');
  }
  public set srcStartIp(value: string) {
    this._srcStartIp = value;
  }
  public resetSrcStartIp() {
    this._srcStartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcStartIpInput() {
    return this._srcStartIp;
  }

  // src_start_ip6 - computed: false, optional: true, required: false
  private _srcStartIp6?: string; 
  public get srcStartIp6() {
    return this.getStringAttribute('src_start_ip6');
  }
  public set srcStartIp6(value: string) {
    this._srcStartIp6 = value;
  }
  public resetSrcStartIp6() {
    this._srcStartIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcStartIp6Input() {
    return this._srcStartIp6;
  }

  // src_subnet - computed: true, optional: true, required: false
  private _srcSubnet?: string[]; 
  public get srcSubnet() {
    return this.getListAttribute('src_subnet');
  }
  public set srcSubnet(value: string[]) {
    this._srcSubnet = value;
  }
  public resetSrcSubnet() {
    this._srcSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnetInput() {
    return this._srcSubnet;
  }

  // src_subnet6 - computed: false, optional: true, required: false
  private _srcSubnet6?: string; 
  public get srcSubnet6() {
    return this.getStringAttribute('src_subnet6');
  }
  public set srcSubnet6(value: string) {
    this._srcSubnet6 = value;
  }
  public resetSrcSubnet6() {
    this._srcSubnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSubnet6Input() {
    return this._srcSubnet6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_route: cdktf.stringToTerraform(this._addRoute),
      addke1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke1),
      addke2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke2),
      addke3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke3),
      addke4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke4),
      addke5: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke5),
      addke6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke6),
      addke7: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addke7),
      auto_discovery_forwarder: cdktf.stringToTerraform(this._autoDiscoveryForwarder),
      auto_discovery_sender: cdktf.stringToTerraform(this._autoDiscoverySender),
      auto_negotiate: cdktf.stringToTerraform(this._autoNegotiate),
      comments: cdktf.stringToTerraform(this._comments),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dhcp_ipsec: cdktf.stringToTerraform(this._dhcpIpsec),
      dhgrp: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhgrp),
      diffserv: cdktf.stringToTerraform(this._diffserv),
      diffservcode: cdktf.stringToTerraform(this._diffservcode),
      dst_addr_type: cdktf.stringToTerraform(this._dstAddrType),
      dst_end_ip: cdktf.stringToTerraform(this._dstEndIp),
      dst_end_ip6: cdktf.stringToTerraform(this._dstEndIp6),
      dst_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstName),
      dst_name6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstName6),
      dst_port: cdktf.numberToTerraform(this._dstPort),
      dst_start_ip: cdktf.stringToTerraform(this._dstStartIp),
      dst_start_ip6: cdktf.stringToTerraform(this._dstStartIp6),
      dst_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstSubnet),
      dst_subnet6: cdktf.stringToTerraform(this._dstSubnet6),
      encapsulation: cdktf.stringToTerraform(this._encapsulation),
      id: cdktf.stringToTerraform(this._id),
      inbound_dscp_copy: cdktf.stringToTerraform(this._inboundDscpCopy),
      initiator_ts_narrow: cdktf.stringToTerraform(this._initiatorTsNarrow),
      ipv4_df: cdktf.stringToTerraform(this._ipv4Df),
      keepalive: cdktf.stringToTerraform(this._keepalive),
      keylife_type: cdktf.stringToTerraform(this._keylifeType),
      keylifekbs: cdktf.numberToTerraform(this._keylifekbs),
      keylifeseconds: cdktf.numberToTerraform(this._keylifeseconds),
      l2tp: cdktf.stringToTerraform(this._l2Tp),
      name: cdktf.stringToTerraform(this._name),
      pfs: cdktf.stringToTerraform(this._pfs),
      phase1name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._phase1Name),
      proposal: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proposal),
      protocol: cdktf.numberToTerraform(this._protocol),
      replay: cdktf.stringToTerraform(this._replay),
      route_overlap: cdktf.stringToTerraform(this._routeOverlap),
      single_source: cdktf.stringToTerraform(this._singleSource),
      src_addr_type: cdktf.stringToTerraform(this._srcAddrType),
      src_end_ip: cdktf.stringToTerraform(this._srcEndIp),
      src_end_ip6: cdktf.stringToTerraform(this._srcEndIp6),
      src_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcName),
      src_name6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcName6),
      src_port: cdktf.numberToTerraform(this._srcPort),
      src_start_ip: cdktf.stringToTerraform(this._srcStartIp),
      src_start_ip6: cdktf.stringToTerraform(this._srcStartIp6),
      src_subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcSubnet),
      src_subnet6: cdktf.stringToTerraform(this._srcSubnet6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_route: {
        value: cdktf.stringToHclTerraform(this._addRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addke1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke3),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke5: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke5),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      addke7: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addke7),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_discovery_forwarder: {
        value: cdktf.stringToHclTerraform(this._autoDiscoveryForwarder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_discovery_sender: {
        value: cdktf.stringToHclTerraform(this._autoDiscoverySender),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_negotiate: {
        value: cdktf.stringToHclTerraform(this._autoNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ipsec: {
        value: cdktf.stringToHclTerraform(this._dhcpIpsec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhgrp: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhgrp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      diffserv: {
        value: cdktf.stringToHclTerraform(this._diffserv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diffservcode: {
        value: cdktf.stringToHclTerraform(this._diffservcode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_addr_type: {
        value: cdktf.stringToHclTerraform(this._dstAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_end_ip: {
        value: cdktf.stringToHclTerraform(this._dstEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_end_ip6: {
        value: cdktf.stringToHclTerraform(this._dstEndIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_name6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstName6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_port: {
        value: cdktf.numberToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_start_ip: {
        value: cdktf.stringToHclTerraform(this._dstStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_start_ip6: {
        value: cdktf.stringToHclTerraform(this._dstStartIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstSubnet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dst_subnet6: {
        value: cdktf.stringToHclTerraform(this._dstSubnet6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encapsulation: {
        value: cdktf.stringToHclTerraform(this._encapsulation),
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
      inbound_dscp_copy: {
        value: cdktf.stringToHclTerraform(this._inboundDscpCopy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initiator_ts_narrow: {
        value: cdktf.stringToHclTerraform(this._initiatorTsNarrow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_df: {
        value: cdktf.stringToHclTerraform(this._ipv4Df),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive: {
        value: cdktf.stringToHclTerraform(this._keepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keylife_type: {
        value: cdktf.stringToHclTerraform(this._keylifeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keylifekbs: {
        value: cdktf.numberToHclTerraform(this._keylifekbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keylifeseconds: {
        value: cdktf.numberToHclTerraform(this._keylifeseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2tp: {
        value: cdktf.stringToHclTerraform(this._l2Tp),
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
      pfs: {
        value: cdktf.stringToHclTerraform(this._pfs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._phase1Name),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proposal: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proposal),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replay: {
        value: cdktf.stringToHclTerraform(this._replay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_overlap: {
        value: cdktf.stringToHclTerraform(this._routeOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_source: {
        value: cdktf.stringToHclTerraform(this._singleSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_addr_type: {
        value: cdktf.stringToHclTerraform(this._srcAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_end_ip: {
        value: cdktf.stringToHclTerraform(this._srcEndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_end_ip6: {
        value: cdktf.stringToHclTerraform(this._srcEndIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_name6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcName6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      src_port: {
        value: cdktf.numberToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_start_ip: {
        value: cdktf.stringToHclTerraform(this._srcStartIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_start_ip6: {
        value: cdktf.stringToHclTerraform(this._srcStartIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_subnet: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcSubnet),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      src_subnet6: {
        value: cdktf.stringToHclTerraform(this._srcSubnet6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
