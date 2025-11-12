// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state#id VrrpAState#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state#uuid VrrpAState#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state#sampling_enable VrrpAState#sampling_enable}
  */
  readonly samplingEnable?: VrrpAStateSamplingEnable[] | cdktf.IResolvable;
}
export interface VrrpAStateSamplingEnable {
  /**
  * 'all': all; 'sync_pkt_tx_counter': Conn Sync Sent counter; 'sync_pkt_rcv_counter': Conn Sync Received counter; 'sync_rx_create_counter': Conn Sync Create Session Received counter; 'sync_rx_del_counter': Conn Sync Del Session Received counter; 'sync_rx_update_age_counter': Conn Sync Update Age Received counter; 'sync_tx_create_counter': Conn Sync Create Session Sent counter; 'sync_tx_del_counter': Conn Sync Del Session Sent counter; 'sync_tx_update_age_counter': Conn Sync Update Age Sent counter; 'sync_rx_persist_create_counter': Conn Sync Create Persist Session Pkts Received counter; 'sync_rx_persist_del_counter': Conn Sync Delete Persist Session Pkts Received counter; 'sync_rx_persist_update_age_counter': Conn Sync Update Persist Age Pkts Received counter; 'sync_tx_persist_create_counter': Conn Sync Create Persist Session Pkts Sent counter; 'sync_tx_persist_del_counter': Conn Sync Delete Persist Session Pkts Sent counter; 'sync_tx_persist_update_age_counter': Conn Sync Update Persist Age Pkts Sent counter; 'query_pkt_tx_counter': Conn Query sent counter; 'query_pkt_rcv_counter': Conn Query Received counter; 'sync_tx_smp_radius_table_counter': Conn Sync Update LSN RADIUS Sent counter; 'sync_rx_smp_radius_table_counter': Conn Sync Update LSN RADIUS Received counter; 'query_tx_max_packed': Max Query Msg Per Packet; 'query_tx_min_packed': Min Query Msg Per Packet; 'query_pkt_invalid_idx_counter': Conn Query Invalid Interface; 'query_tx_get_buff_failed': Conn Query Get Buff Failure; 'query_rx_zero_info_counter': Conn Query Packet Empty; 'query_rx_full_info_counter': Conn Query Packet Full; 'query_rx_unk_counter': Conn Query Unknown Type; 'sync_pkt_invalid_idx_counter': Conn Sync Invalid Interface; 'sync_tx_get_buff_failed': Conn Sync Get Buff Failure; 'sync_tx_total_info_counter': Conn Sync Total Info Pkts Sent counter; 'sync_tx_create_ext_bit_counter': Conn Sync Create with Ext Sent counter; 'sync_tx_update_seqnos_counter': Conn Sync Update Seq Num Sent counter; 'sync_tx_min_packed': Max Sync Msg Per Packet; 'sync_tx_max_packed': Min Sync Msg Per Packet; 'sync_rx_len_invalid': Conn Sync Length Invalid; 'sync_persist_rx_len_invalid': Persist Conn Sync Length Invalid; 'sync_persist_rx_proto_not_supported': Persist Conn Sync Protocol Invalid; 'sync_persist_rx_type_invalid': Persist Conn Sync Type Invalid; 'sync_persist_rx_cannot_process_mandatory': Persist Conn Sync Process Mandatory Invalid; 'sync_persist_rx_ext_bit_process_error': Persist Conn Sync Proc Ext Bit Failure; 'sync_persist_rx_no_such_vport': Persist Conn Sync Virt Port Not Found; 'sync_persist_rx_vporttype_not_supported': Persist Conn Sync Virt Port Type Invalid; 'sync_persist_rx_no_such_rport': Persist Conn Sync Real Port Not Found; 'sync_persist_rx_no_such_sg_group': Persist Conn Sync No Service Group Found; 'sync_persist_rx_no_sg_group_info': Persist Conn Sync No Service Group Info Found; 'sync_persist_rx_conn_get_failed': Persist Conn Sync Get Conn Failure; 'sync_rx_no_such_vport': Conn Sync Virt Port Not Found; 'sync_rx_no_such_rport': Conn Sync Real Port Not Found; 'sync_rx_cannot_process_mandatory': Conn Sync Process Mandatory Invalid; 'sync_rx_ext_bit_process_error': Conn Sync Proc Ext Bit Failure; 'sync_rx_create_ext_bit_counter': Conn Sync Create with Ext Received counter; 'sync_rx_conn_exists': Conn Sync Create Conn Exists; 'sync_rx_conn_get_failed': Conn Sync Get Conn Failure; 'sync_rx_proto_not_supported': Conn Sync Protocol Invalid; 'sync_rx_no_dst_for_vport_inline': Conn Sync 'dst' not found for vport inline; 'sync_rx_no_such_nat_pool': Conn Sync NAT Pool Error; 'sync_rx_no_such_sg_node': Conn Sync no SG node found; 'sync_rx_del_no_such_session': Conn Sync Del Conn not Found; 'sync_rx_type_invalid': Conn Sync Type Invalid; 'sync_rx_zero_info_counter': Conn Sync Packet Empty; 'sync_rx_dcmsg_counter': Conn Sync forward CPU; 'sync_rx_total_info_counter': Conn Sync Total Info Pkts Received counter; 'sync_rx_update_seqnos_counter': Conn Sync Update Seq Num Received counter; 'sync_rx_unk_counter': Conn Sync Unknown Type; 'sync_rx_apptype_not_supported': Conn Sync App Type Invalid; 'sync_query_dcmsg_counter': Conn Sync query forward CPU; 'sync_get_buff_failed_rt': Conn Sync Get Buff Failure No Route; 'sync_get_buff_failed_port': Conn Sync Get Buff Failure Wrong Port; 'sync_rx_lsn_create_sby': Conn Sync LSN Create Standby; 'sync_rx_nat_create_sby': Conn Sync NAT Create Standby; 'sync_rx_nat_alloc_sby': Conn Sync NAT Alloc Standby; 'sync_rx_insert_tuple': Conn Sync Insert Tuple; 'sync_rx_sfw': Conn Sync SFW; 'sync_rx_create_static_sby': Conn Sync Create Static Standby; 'sync_rx_ext_pptp': Conn Sync Ext PPTP; 'sync_rx_ext_rtsp': Conn Sync Ext RTSP; 'sync_rx_reserve_ha': Conn Sync Reserve HA Conn; 'sync_rx_seq_deltas': Conn Sync Seq Deltas Failure; 'sync_rx_ftp_control': Conn Sync FTP Control Failure; 'sync_rx_ext_lsn_acl': Conn Sync LSN ACL Failure; 'sync_rx_ext_lsn_ac_idle_timeout': Conn Sync LSN ACL Idle Timeout Failure; 'sync_rx_ext_sip_alg': Conn Sync SIP TCP ALG Failure; 'sync_rx_ext_h323_alg': Conn Sync H323 TCP ALG Failure; 'sync_rx_ext_nat_mac': Conn Sync NAT MAC Failure; 'sync_tx_lsn_fullcone': Conn Sync Update LSN Fullcone Sent counter; 'sync_rx_lsn_fullcone': Conn Sync Update LSN Fullcone Received counter; 'sync_err_lsn_fullcone': Conn Sync LSN Fullcone Failure; 'sync_tx_update_sctp_conn_addr': Update SCTP Addresses Sent; 'sync_rx_update_sctp_conn_addr': Update SCTP Addresses Received; 'sync_rx_ext_nat_alg_tcp_info': Conn Sync NAT ALG TCP Information; 'sync_rx_ext_dcfw_rule_id': Conn Sync FIREWALL session rule ID information Failure; 'sync_rx_ext_dcfw_log': Conn Sync FIREWALL session logging information Failure; 'sync_rx_estab_counter': Conn Sync rcv established state; 'sync_tx_estab_counter': Conn Sync send established state; 'sync_rx_zone_failure_counter': Conn Sync Zone Failure; 'sync_rx_ext_fw_http_logging': FW HTTP Logging Sync Failures; 'sync_rx_ext_dcfw_rule_idle_timeout': Conn Sync FIREWALL session rule idle timeout information Failure; 'sync_rx_ext_fw_gtp_info': FW GTP Info Received; 'sync_rx_not_expect_sync_pkt': unexpected session sync packets; 'sync_rx_ext_fw_apps': Conn Sync FIREWALL application information Failure; 'sync_tx_mon_entity': Acos Monitoring Entities Sync Messages Sent; 'sync_rx_mon_entity': Acos monitoring Entities Sync Messages Received; 'sync_rx_ext_fw_gtp_log_info': FW GTP Log Info Received; 'sync_rx_ext_fw_gtp_u_info': FW GTP U Info Received; 'sync_rx_ext_fw_gtp_ext_info': FW GTP Ext Info Received; 'sync_rx_ext_fw_gtp_log_ext_info': FW GTP Ext Log Info Received; 'sync_rx_ddos_drop_counter': Conn Sync receive ddos protect packet; 'sync_rx_invalid_sync_packet_counter': Conn Sync receive invalid packet; 'sync_pkt_empty_buff_counter': Conn Sync drop sending packet for empty buffer; 'sync_pkt_no_sending_vgrp_counter': Conn Sync drop sending packet for invalid sending virtual group; 'sync_pkt_no_receiving_vgrp_counter': Conn Sync drop sending packet for invalid receiving virtual group; 'query_pkt_no_receiving_ip_counter': Conn Sync drop sending packet for invalid receiving ip; 'sync_pkt_failed_buff_copy_counter': Conn Sync drop sending packet for failure in sending buffer copy; 'sync_rx_bad_protocol_counter': Conn Sync receive packet with bad protocol; 'sync_rx_no_vgrp_counter': Conn Sync receive packet with no virtual group; 'sync_rx_by_inactive_peer_counter': Conn Sync receive packet by inactive peer; 'sync_rx_table_entry_update_counter': Conn Sync receive packet with table entry update; 'sync_rx_table_entry_create_counter': Conn Sync receive packet with table entry create;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state#counters1 VrrpAState#counters1}
  */
  readonly counters1?: string;
  /**
  * 'sync_rx_table_entry_del_counter': Conn Sync receive packet with table entry delete; 'sync_rx_aflex_update_counter': Conn Sync receive packet with aflex update; 'sync_rx_aflex_create_counter': Conn Sync receive packet with aflex create; 'sync_rx_aflex_del_counter': Conn Sync receive packet with aflex delete; 'sync_rx_aflex_frag_counter': Conn Sync receive packet with aflex fragment; 'query_rx_invalid_partition_counter': Conn Sync receive query packet with invalid partition; 'query_rx_invalid_ha_group_counter': Conn Sync receive query packet with invalid ha group; 'query_rx_invalid_sync_version_counter': Conn Sync receive query packet with invalid sync version; 'query_rx_invalid_msg_dir_counter': Conn Sync receive query packet with invalid message dir; 'sync_rx_out_of_order_pkt_counter': total number of out of order packets received; 'sync_rx_unreached_pkt_counter': total number of unreached packets; 'sync_rx_ext_fw_gtp_echo_ext_info': FW GTP Echo Ext Info Received; 'sync_rx_smp_create_counter': Sync Create SMP Session Pkts Received counter; 'sync_rx_smp_delete_counter': Sync Delete SMP Session Pkts Received counter; 'sync_rx_smp_update_counter': Sync Update SMP Session Pkts Received counter; 'sync_tx_smp_create_counter': Sync Create SMP Session Pkts Sent counter; 'sync_tx_smp_delete_counter': Sync Delete SMP Session Pkts Sent counter; 'sync_tx_smp_update_counter': Sync Update SMP Session Pkts Sent counter; 'sync_rx_smp_clear_counter': Sync Clear SMP Session Pkts Received counter; 'sync_tx_smp_clear_counter': Sync Clear SMP Session Pkts Sent counter; 'sync_rx_ext_fw_so_shadow_ext_info': FW Scaleout Shadow Ext Info Received; 'sync_tx_aflex_table_entry_add_counter': Sync send packet with aflex table entry add; 'sync_rx_aflex_table_entry_add_counter': Sync receive packet with aflex table entry add; 'sync_tx_aflex_table_entry_append_counter': Sync send packet with aflex table entry append; 'sync_rx_aflex_table_entry_append_counter': Sync receive packet with aflex table entry append; 'sync_tx_aflex_table_entry_delete_counter': Sync send packet with aflex table entry delete; 'sync_rx_aflex_table_entry_delete_counter': Sync receive packet with aflex table entry delete; 'sync_tx_aflex_table_entry_incr_counter': Sync send packet with aflex table entry incr; 'sync_rx_aflex_table_entry_incr_counter': Sync receive packet with aflex table entry incr; 'sync_tx_aflex_table_entry_lookup_counter': Sync send packet with aflex table entry lookup; 'sync_rx_aflex_table_entry_lookup_counter': Sync receive packet with aflex table entry lookup; 'sync_tx_aflex_table_entry_lifetime_counter': Sync send packet with aflex table entry lifetime; 'sync_rx_aflex_table_entry_lifetime_counter': Sync receive packet with aflex table entry lifetime; 'sync_tx_aflex_table_entry_replace_counter': Sync send packet with aflex table entry replace; 'sync_rx_aflex_table_entry_replace_counter': Sync receive packet with aflex table entry replace; 'sync_tx_aflex_table_entry_set_counter': Sync send packet with aflex table entry set; 'sync_rx_aflex_table_entry_set_counter': Sync receive packet with aflex table entry set; 'sync_tx_aflex_table_entry_timeout_counter': Sync send packet with aflex table entry timeout; 'sync_rx_aflex_table_entry_timeout_counter': Sync receive packet with aflex table entry timeout; 'sync_tx_aflex_table_entry_fastsync_counter': Sync send packet with aflex table entry fast sync; 'sync_rx_aflex_table_entry_fastsync_counter': Sync receive packet with aflex table entry fast sync; 'sync_tx_aflex_table_entry_error_counter': Error on send packet with aflex table entry; 'sync_tx_aflex_table_entry_not_eligible_counter': send of aflex table entry not eligible; 'sync_rx_ext_fw_limit_entry': Sync FW Limit Entry Info Failure; 'sync_tx_fw_set_dscp_counter': Conn Sync send fw set dscp counter; 'sync_rx_fw_set_dscp_counter': Conn Sync receive fw set dscp counter; 'dns_cache_sync_tx_create_counter': DNS Cache Sync Create Sent counter; 'dns_cache_sync_rx_create_counter': DNS Cache Sync Create Received counter; 'dns_cache_sync_tx_del_counter': DNS Cache Sync Del Sent counter; 'dns_cache_sync_rx_del_counter': DNS Cache Sync Del Received counter; 'dns_cache_sync_tx_frag_counter': DNS Cache Sync Frag Sent counter; 'dns_cache_sync_rx_frag_counter': DNS Cache Sync Frag Received counter; 'dns_cache_sync_tx_error_counter': DNS Cache Sync Error Sent counter; 'dns_cache_sync_rx_error_counter': DNS Cache Sync Error Received counter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state#counters2 VrrpAState#counters2}
  */
  readonly counters2?: string;
}

export function vrrpAStateSamplingEnableToTerraform(struct?: VrrpAStateSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
  }
}


export function vrrpAStateSamplingEnableToHclTerraform(struct?: VrrpAStateSamplingEnable | cdktf.IResolvable): any {
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
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpAStateSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VrrpAStateSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpAStateSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
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

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }
}

export class VrrpAStateSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VrrpAStateSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VrrpAStateSamplingEnableOutputReference {
    return new VrrpAStateSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state thunder_vrrp_a_state}
*/
export class VrrpAState extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAState to import
  * @param importFromId The id of the existing VrrpAState that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_state thunder_vrrp_a_state} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAStateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VrrpAStateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_state',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _samplingEnable = new VrrpAStateSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VrrpAStateSamplingEnable[] | cdktf.IResolvable) {
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
      sampling_enable: cdktf.listMapper(vrrpAStateSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
        value: cdktf.listMapperHcl(vrrpAStateSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpAStateSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
