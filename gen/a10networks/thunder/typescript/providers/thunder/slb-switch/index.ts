// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbSwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch#id SlbSwitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch#uuid SlbSwitch#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch#sampling_enable SlbSwitch#sampling_enable}
  */
  readonly samplingEnable?: SlbSwitchSamplingEnable[] | cdktf.IResolvable;
}
export interface SlbSwitchSamplingEnable {
  /**
  * 'all': all; 'fwlb': FWLB; 'licexpire_drop': License Expire Drop; 'bwl_drop': BW Limit Drop; 'rx_kernel': Received kernel; 'rx_arp_req': ARP REQ Rcvd; 'rx_arp_resp': ARP RESP Rcvd; 'vlan_flood': VLAN Flood; 'l2_def_vlan_drop': L2 Default Vlan FWD Drop; 'ipv4_noroute_drop': IPv4 No Route Drop; 'ipv6_noroute_drop': IPv6 No Route Drop; 'prot_down_drop': Prot Down Drop; 'l2_forward': L2 Forward; 'l3_forward_ip': L3 IP Forward; 'l3_forward_ipv6': L3 IPv6 Forward; 'l4_process': L4 Process; 'unknown_prot_drop': Unknown Prot Drop; 'ttl_exceeded_drop': TTL Exceeded Drop; 'linkdown_drop': Link Down Drop; 'sport_drop': SPORT Drop; 'incorrect_len_drop': Incorrect Length Drop; 'ip_defrag': IP Defrag; 'acl_deny': ACL Denys; 'ipfrag_tcp': IP(TCP) Fragment Rcvd; 'ipfrag_overlap': IP Fragment Overlap; 'ipfrag_timeout': IP Fragment Timeout; 'ipfrag_overload': IP Frag Overload Drops; 'ipfrag_reasmoks': IP Fragment Reasm OKs; 'ipfrag_reasmfails': IP Fragment Reasm Fails; 'land_drop': Anomaly Land Attack Drop; 'ipoptions_drop': Anomaly IP OPT Drops; 'badpkt_drop': Bad Pkt Drop; 'pingofdeath_drop': Anomaly PingDeath Drop; 'allfrag_drop': Anomaly All Frag Drop; 'tcpnoflag_drop': Anomaly TCP noFlag Drop; 'tcpsynfrag_drop': Anomaly SYN Frag Drop; 'tcpsynfin_drop': Anomaly TCP SYNFIN Drop; 'ipsec_drop': IPSec Drop; 'bpdu_rcvd': BPDUs Received; 'bpdu_sent': BPDUs Sent; 'ctrl_syn_rate_drop': SYN rate exceeded Drop; 'ip_defrag_invalid_len': IP Invalid Length Frag; 'ipv4_frag_6rd_ok': IPv4 Frag 6RD OK; 'ipv4_frag_6rd_drop': IPv4 Frag 6RD Dropped; 'no_ip_drop': No IP Drop; 'ipv6frag_udp': IPv6 Frag UDP; 'ipv6frag_udp_dropped': IPv6 Frag UDP Dropped; 'ipv6frag_tcp_dropped': IPv6 Frag TCP Dropped; 'ipv6frag_ipip_ok': IPv6 Frag IPIP OKs; 'ipv6frag_ipip_dropped': IPv6 Frag IPIP Drop; 'ip_frag_oversize': IP Fragment oversize; 'ip_frag_too_many': IP Fragment too many; 'ipv4_novlanfwd_drop': IPv4 No L3 VLAN FWD Drop; 'ipv6_novlanfwd_drop': IPv6 No L3 VLAN FWD Drop; 'fpga_error_pkt1': FPGA Error PKT1; 'fpga_error_pkt2': FPGA Error PKT2; 'max_arp_drop': Max ARP Drop; 'ipv6frag_tcp': IPv6 Frag TCP; 'ipv6frag_icmp': IPv6 Frag ICMP; 'ipv6frag_ospf': IPv6 Frag OSPF; 'ipv6frag_esp': IPv6 Frag ESP; 'l4_in_ctrl_cpu': L4 In Ctrl CPU; 'mgmt_svc_drop': Management Service Drop; 'jumbo_frag_drop': Jumbo Frag Drop; 'ipv6_jumbo_frag_drop': IPv6 Jumbo Frag Drop; 'ipipv6_jumbo_frag_drop': IPIPv6 Jumbo Frag Drop; 'ipv6_ndisc_dad_solicits': IPv6 DAD on Solicits; 'ipv6_ndisc_dad_adverts': IPv6 DAD on Adverts; 'ipv6_ndisc_mac_changes': IPv6 DAD MAC Changed; 'ipv6_ndisc_out_of_memory': IPv6 DAD Out-of-memory; 'sp_non_ctrl_pkt_drop': Shared IP mode non ctrl packet to linux drop; 'urpf_pkt_drop': URPF check packet drop; 'fw_smp_zone_mismatch': FW SMP Zone Mismatch; 'ipfrag_udp': IP(UDP) Fragment Rcvd; 'ipfrag_icmp': IP(ICMP) Fragment Rcvd; 'ipfrag_ospf': IP(OSPF) Fragment Rcvd; 'ipfrag_esp': IP(ESP) Fragment Rcvd; 'ipfrag_tcp_dropped': IP Frag TCP Dropped; 'ipfrag_udp_dropped': IP Frag UDP Dropped; 'ipfrag_ipip_dropped': IP Frag IPIP Drop; 'redirect_fwd_fail': Redirect failed in the fwd direction; 'redirect_fwd_sent': Redirect succeeded in the fwd direction; 'redirect_rev_fail': Redirect failed in the rev direction; 'redirect_rev_sent': Redirect succeeded in the rev direction; 'redirect_setup_fail': Redirect connection setup failed; 'ip_frag_sent': IP frag sent; 'invalid_rx_arp_pkt': Invalid ARP PKT Rcvd; 'invalid_sender_mac_arp_drop': ARP PKT dropped due to invalid sender MAC; 'dev_based_arp_drop': ARP PKT dropped due to interface state checks; 'scaleout_arp_drop': ARP PKT dropped due to scaleout checks; 'virtual_ip_not_found_arp_drop': ARP PKT dropped due to virtual IP not found; 'inactive_static_nat_pool_arp_drop': ARP PKT dropped due to inactive static nat pool; 'inactive_nat_pool_arp_drop': ARP PKT dropped due to inactive nat pool; 'scaleout_hairpin_arp_drop': ARP PKT dropped due to scaleout hairpin checks; 'self_grat_arp_drop': Self generated grat ARP PKT dropped; 'self_grat_nat_ip_arp_drop': Self generated grat ARP PKT dropped for NAT IP; 'ip_not_found_arp_drop': ARP PKT dropped due to IP not found; 'dev_link_down_arp_drop': ARP PKT dropped due to interface is down; 'lacp_tx_intf_err_drop': LACP interface error corrected; 'service_chain_sent': Service Chain Packets Sent; 'service_chain_rcvd': Service Chain Packets Rcvd; 'unnumbered_nat_error': Unnumbered NAT error; 'unnumbered_unsupported_drop': Unsupported protocol for unnumbered; 'ipv6frag_gre_dropped': IPv6 Frag gre Drop; 'ipv6_ndisc_dad_prefix_mismatch_drop': IPv6 DAD on Advertise drop for prefix mismatch; 'bw_ignore_limit': BW Limit ignored packets count; 'ppsl_drop_egr': Packet-Per-Sec Limit Drop at egress; 'ppsl_drop_ing': Packet-Per-Sec Limit Drop at ingress; 'ppsl_ignore_limit': Packet-Per-Sec Limit ignored packets count; 'closed_port_syn_drop': Linux Closed Port SYN Drop; 'ip_icmp_error_drop': IP ICMP Error Drop; 'tls13_drop_req': TLS13-Request-Per-Sec Limit Drop at ingress; 'tls13_ignore_req': TLS13-Request-Per-Sec Limit ignored packets count; 'tls12_drop_req': TLS12-Request-Per-Sec Limit Drop at ingress; 'tls12_ignore_req': TLS12-Request-Per-Sec Limit ignored packets count; 'tls12_tls13_drop_req': TLS12--TLS13-Request-Per-Sec Limit Drop at ingress; 'tls12_tls13_ignore_req': TLS12-TLS13-Request-Per-Sec Limit ignored packets count; 'mac_movement': MAC movement; 'ipv4-src-routed-pkt-drop': IPv4 source routed packet drop; 'ipv6-src-routed-pkt-drop': IPv6 source routed packet drop; 'ipv4-rpf-drop': IPv4 RPF drop; 'ipv6-rpf-drop': IPv6 RPF drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch#counters1 SlbSwitch#counters1}
  */
  readonly counters1?: string;
}

export function slbSwitchSamplingEnableToTerraform(struct?: SlbSwitchSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbSwitchSamplingEnableToHclTerraform(struct?: SlbSwitchSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbSwitchSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SlbSwitchSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbSwitchSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SlbSwitchSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbSwitchSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SlbSwitchSamplingEnableOutputReference {
    return new SlbSwitchSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch thunder_slb_switch}
*/
export class SlbSwitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbSwitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbSwitch to import
  * @param importFromId The id of the existing SlbSwitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbSwitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_switch thunder_slb_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbSwitchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbSwitchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_switch',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbSwitchSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbSwitchSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(slbSwitchSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbSwitchSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbSwitchSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
