// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHmDplaneStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#id DataThunderSlbHmDplaneStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#stats DataThunderSlbHmDplaneStats#stats}
  */
  readonly stats?: DataThunderSlbHmDplaneStatsStats;
}
export interface DataThunderSlbHmDplaneStatsStats {
  /**
  * Current HM Entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#curr_entries DataThunderSlbHmDplaneStats#curr_entries}
  */
  readonly currEntries?: number;
  /**
  * Entry deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#entry_deleted DataThunderSlbHmDplaneStats#entry_deleted}
  */
  readonly entryDeleted?: number;
  /**
  * Entry Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_entry_create_failed DataThunderSlbHmDplaneStats#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Entry creation out of memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_entry_create_oom DataThunderSlbHmDplaneStats#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Error in creating HM internal VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_entry_create_vip_failed DataThunderSlbHmDplaneStats#err_entry_create_vip_failed}
  */
  readonly errEntryCreateVipFailed?: number;
  /**
  * Entry insert failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_entry_insert_failed DataThunderSlbHmDplaneStats#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Error in initiating TCP connection for HM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_hm_tcp_conn_sent DataThunderSlbHmDplaneStats#err_hm_tcp_conn_sent}
  */
  readonly errHmTcpConnSent?: number;
  /**
  * Error HTTP2 callback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_http2_callback DataThunderSlbHmDplaneStats#err_http2_callback}
  */
  readonly errHttp2Callback?: number;
  /**
  * Error HTTP2 version mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_http2_ver_mismatch DataThunderSlbHmDplaneStats#err_http2_ver_mismatch}
  */
  readonly errHttp2VerMismatch?: number;
  /**
  * Error allocating L4 session for HM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_l4_sess_alloc DataThunderSlbHmDplaneStats#err_l4_sess_alloc}
  */
  readonly errL4SessAlloc?: number;
  /**
  * L7 session process TCP data failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_l7_sess_process_tcp_data_failed DataThunderSlbHmDplaneStats#err_l7_sess_process_tcp_data_failed}
  */
  readonly errL7SessProcessTcpDataFailed?: number;
  /**
  * L7 session process TCP established failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_l7_sess_process_tcp_estab_failed DataThunderSlbHmDplaneStats#err_l7_sess_process_tcp_estab_failed}
  */
  readonly errL7SessProcessTcpEstabFailed?: number;
  /**
  * Error no HM entry found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_no_hm_entry DataThunderSlbHmDplaneStats#err_no_hm_entry}
  */
  readonly errNoHmEntry?: number;
  /**
  * Error SSL server SYN timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_server_syn_timeout DataThunderSlbHmDplaneStats#err_server_syn_timeout}
  */
  readonly errServerSynTimeout?: number;
  /**
  * Error creating smart-nat instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_smart_nat_alloc DataThunderSlbHmDplaneStats#err_smart_nat_alloc}
  */
  readonly errSmartNatAlloc?: number;
  /**
  * Error obtaining smart-nat source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_smart_nat_port_alloc DataThunderSlbHmDplaneStats#err_smart_nat_port_alloc}
  */
  readonly errSmartNatPortAlloc?: number;
  /**
  * Error SSL cert name mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#err_ssl_cert_name_mismatch DataThunderSlbHmDplaneStats#err_ssl_cert_name_mismatch}
  */
  readonly errSslCertNameMismatch?: number;
  /**
  * Total TCP connections sent for HM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#hm_tcp_conn_sent DataThunderSlbHmDplaneStats#hm_tcp_conn_sent}
  */
  readonly hmTcpConnSent?: number;
  /**
  * Total smart-nat allocation successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#smart_nat_alloc DataThunderSlbHmDplaneStats#smart_nat_alloc}
  */
  readonly smartNatAlloc?: number;
  /**
  * Total smart-nat allocation failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#smart_nat_alloc_failed DataThunderSlbHmDplaneStats#smart_nat_alloc_failed}
  */
  readonly smartNatAllocFailed?: number;
  /**
  * Total smart-nat release successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#smart_nat_release DataThunderSlbHmDplaneStats#smart_nat_release}
  */
  readonly smartNatRelease?: number;
  /**
  * Total smart-nat release failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#smart_nat_release_failed DataThunderSlbHmDplaneStats#smart_nat_release_failed}
  */
  readonly smartNatReleaseFailed?: number;
  /**
  * Total HM Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_created DataThunderSlbHmDplaneStats#total_created}
  */
  readonly totalCreated?: number;
  /**
  * Total HM entries freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_freed DataThunderSlbHmDplaneStats#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Total HM entries inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_inserted DataThunderSlbHmDplaneStats#total_inserted}
  */
  readonly totalInserted?: number;
  /**
  * Total maintenace response received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_maintenance_received DataThunderSlbHmDplaneStats#total_maintenance_received}
  */
  readonly totalMaintenanceReceived?: number;
  /**
  * Total HTTP received response with match 200 response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_match_default_resp_code DataThunderSlbHmDplaneStats#total_match_default_resp_code}
  */
  readonly totalMatchDefaultRespCode?: number;
  /**
  * Total HTTP received response with match response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_match_resp_code DataThunderSlbHmDplaneStats#total_match_resp_code}
  */
  readonly totalMatchRespCode?: number;
  /**
  * Total HM entries ready to free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_ready_to_free DataThunderSlbHmDplaneStats#total_ready_to_free}
  */
  readonly totalReadyToFree?: number;
  /**
  * Total start server QUIC connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_server_quic_conn DataThunderSlbHmDplaneStats#total_server_quic_conn}
  */
  readonly totalServerQuicConn?: number;
  /**
  * Total start server QUIC connections error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_server_quic_conn_err DataThunderSlbHmDplaneStats#total_server_quic_conn_err}
  */
  readonly totalServerQuicConnErr?: number;
  /**
  * Total TCP errors in health-checks sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_tcp_err DataThunderSlbHmDplaneStats#total_tcp_err}
  */
  readonly totalTcpErr?: number;
  /**
  * Total HTTP received response with wrong response code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#total_wrong_status_received DataThunderSlbHmDplaneStats#total_wrong_status_received}
  */
  readonly totalWrongStatusReceived?: number;
}

export function dataThunderSlbHmDplaneStatsStatsToTerraform(struct?: DataThunderSlbHmDplaneStatsStatsOutputReference | DataThunderSlbHmDplaneStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_entries: cdktf.numberToTerraform(struct!.currEntries),
    entry_deleted: cdktf.numberToTerraform(struct!.entryDeleted),
    err_entry_create_failed: cdktf.numberToTerraform(struct!.errEntryCreateFailed),
    err_entry_create_oom: cdktf.numberToTerraform(struct!.errEntryCreateOom),
    err_entry_create_vip_failed: cdktf.numberToTerraform(struct!.errEntryCreateVipFailed),
    err_entry_insert_failed: cdktf.numberToTerraform(struct!.errEntryInsertFailed),
    err_hm_tcp_conn_sent: cdktf.numberToTerraform(struct!.errHmTcpConnSent),
    err_http2_callback: cdktf.numberToTerraform(struct!.errHttp2Callback),
    err_http2_ver_mismatch: cdktf.numberToTerraform(struct!.errHttp2VerMismatch),
    err_l4_sess_alloc: cdktf.numberToTerraform(struct!.errL4SessAlloc),
    err_l7_sess_process_tcp_data_failed: cdktf.numberToTerraform(struct!.errL7SessProcessTcpDataFailed),
    err_l7_sess_process_tcp_estab_failed: cdktf.numberToTerraform(struct!.errL7SessProcessTcpEstabFailed),
    err_no_hm_entry: cdktf.numberToTerraform(struct!.errNoHmEntry),
    err_server_syn_timeout: cdktf.numberToTerraform(struct!.errServerSynTimeout),
    err_smart_nat_alloc: cdktf.numberToTerraform(struct!.errSmartNatAlloc),
    err_smart_nat_port_alloc: cdktf.numberToTerraform(struct!.errSmartNatPortAlloc),
    err_ssl_cert_name_mismatch: cdktf.numberToTerraform(struct!.errSslCertNameMismatch),
    hm_tcp_conn_sent: cdktf.numberToTerraform(struct!.hmTcpConnSent),
    smart_nat_alloc: cdktf.numberToTerraform(struct!.smartNatAlloc),
    smart_nat_alloc_failed: cdktf.numberToTerraform(struct!.smartNatAllocFailed),
    smart_nat_release: cdktf.numberToTerraform(struct!.smartNatRelease),
    smart_nat_release_failed: cdktf.numberToTerraform(struct!.smartNatReleaseFailed),
    total_created: cdktf.numberToTerraform(struct!.totalCreated),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_inserted: cdktf.numberToTerraform(struct!.totalInserted),
    total_maintenance_received: cdktf.numberToTerraform(struct!.totalMaintenanceReceived),
    total_match_default_resp_code: cdktf.numberToTerraform(struct!.totalMatchDefaultRespCode),
    total_match_resp_code: cdktf.numberToTerraform(struct!.totalMatchRespCode),
    total_ready_to_free: cdktf.numberToTerraform(struct!.totalReadyToFree),
    total_server_quic_conn: cdktf.numberToTerraform(struct!.totalServerQuicConn),
    total_server_quic_conn_err: cdktf.numberToTerraform(struct!.totalServerQuicConnErr),
    total_tcp_err: cdktf.numberToTerraform(struct!.totalTcpErr),
    total_wrong_status_received: cdktf.numberToTerraform(struct!.totalWrongStatusReceived),
  }
}


export function dataThunderSlbHmDplaneStatsStatsToHclTerraform(struct?: DataThunderSlbHmDplaneStatsStatsOutputReference | DataThunderSlbHmDplaneStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_entries: {
      value: cdktf.numberToHclTerraform(struct!.currEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_deleted: {
      value: cdktf.numberToHclTerraform(struct!.entryDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_vip_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateVipFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_insert_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryInsertFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_hm_tcp_conn_sent: {
      value: cdktf.numberToHclTerraform(struct!.errHmTcpConnSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_http2_callback: {
      value: cdktf.numberToHclTerraform(struct!.errHttp2Callback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_http2_ver_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.errHttp2VerMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_l4_sess_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errL4SessAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_l7_sess_process_tcp_data_failed: {
      value: cdktf.numberToHclTerraform(struct!.errL7SessProcessTcpDataFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_l7_sess_process_tcp_estab_failed: {
      value: cdktf.numberToHclTerraform(struct!.errL7SessProcessTcpEstabFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_no_hm_entry: {
      value: cdktf.numberToHclTerraform(struct!.errNoHmEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_server_syn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.errServerSynTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_smart_nat_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errSmartNatAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_smart_nat_port_alloc: {
      value: cdktf.numberToHclTerraform(struct!.errSmartNatPortAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_ssl_cert_name_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.errSslCertNameMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hm_tcp_conn_sent: {
      value: cdktf.numberToHclTerraform(struct!.hmTcpConnSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_alloc: {
      value: cdktf.numberToHclTerraform(struct!.smartNatAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.smartNatAllocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_release: {
      value: cdktf.numberToHclTerraform(struct!.smartNatRelease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_release_failed: {
      value: cdktf.numberToHclTerraform(struct!.smartNatReleaseFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_created: {
      value: cdktf.numberToHclTerraform(struct!.totalCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_inserted: {
      value: cdktf.numberToHclTerraform(struct!.totalInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_maintenance_received: {
      value: cdktf.numberToHclTerraform(struct!.totalMaintenanceReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_match_default_resp_code: {
      value: cdktf.numberToHclTerraform(struct!.totalMatchDefaultRespCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_match_resp_code: {
      value: cdktf.numberToHclTerraform(struct!.totalMatchRespCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ready_to_free: {
      value: cdktf.numberToHclTerraform(struct!.totalReadyToFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_server_quic_conn: {
      value: cdktf.numberToHclTerraform(struct!.totalServerQuicConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_server_quic_conn_err: {
      value: cdktf.numberToHclTerraform(struct!.totalServerQuicConnErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_err: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_wrong_status_received: {
      value: cdktf.numberToHclTerraform(struct!.totalWrongStatusReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHmDplaneStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHmDplaneStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntries = this._currEntries;
    }
    if (this._entryDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryDeleted = this._entryDeleted;
    }
    if (this._errEntryCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateFailed = this._errEntryCreateFailed;
    }
    if (this._errEntryCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateOom = this._errEntryCreateOom;
    }
    if (this._errEntryCreateVipFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateVipFailed = this._errEntryCreateVipFailed;
    }
    if (this._errEntryInsertFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryInsertFailed = this._errEntryInsertFailed;
    }
    if (this._errHmTcpConnSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.errHmTcpConnSent = this._errHmTcpConnSent;
    }
    if (this._errHttp2Callback !== undefined) {
      hasAnyValues = true;
      internalValueResult.errHttp2Callback = this._errHttp2Callback;
    }
    if (this._errHttp2VerMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errHttp2VerMismatch = this._errHttp2VerMismatch;
    }
    if (this._errL4SessAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errL4SessAlloc = this._errL4SessAlloc;
    }
    if (this._errL7SessProcessTcpDataFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errL7SessProcessTcpDataFailed = this._errL7SessProcessTcpDataFailed;
    }
    if (this._errL7SessProcessTcpEstabFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errL7SessProcessTcpEstabFailed = this._errL7SessProcessTcpEstabFailed;
    }
    if (this._errNoHmEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.errNoHmEntry = this._errNoHmEntry;
    }
    if (this._errServerSynTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.errServerSynTimeout = this._errServerSynTimeout;
    }
    if (this._errSmartNatAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatAlloc = this._errSmartNatAlloc;
    }
    if (this._errSmartNatPortAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatPortAlloc = this._errSmartNatPortAlloc;
    }
    if (this._errSslCertNameMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSslCertNameMismatch = this._errSslCertNameMismatch;
    }
    if (this._hmTcpConnSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmTcpConnSent = this._hmTcpConnSent;
    }
    if (this._smartNatAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatAlloc = this._smartNatAlloc;
    }
    if (this._smartNatAllocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatAllocFailed = this._smartNatAllocFailed;
    }
    if (this._smartNatRelease !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatRelease = this._smartNatRelease;
    }
    if (this._smartNatReleaseFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatReleaseFailed = this._smartNatReleaseFailed;
    }
    if (this._totalCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCreated = this._totalCreated;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInserted = this._totalInserted;
    }
    if (this._totalMaintenanceReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaintenanceReceived = this._totalMaintenanceReceived;
    }
    if (this._totalMatchDefaultRespCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMatchDefaultRespCode = this._totalMatchDefaultRespCode;
    }
    if (this._totalMatchRespCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMatchRespCode = this._totalMatchRespCode;
    }
    if (this._totalReadyToFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReadyToFree = this._totalReadyToFree;
    }
    if (this._totalServerQuicConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServerQuicConn = this._totalServerQuicConn;
    }
    if (this._totalServerQuicConnErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalServerQuicConnErr = this._totalServerQuicConnErr;
    }
    if (this._totalTcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpErr = this._totalTcpErr;
    }
    if (this._totalWrongStatusReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalWrongStatusReceived = this._totalWrongStatusReceived;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHmDplaneStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currEntries = undefined;
      this._entryDeleted = undefined;
      this._errEntryCreateFailed = undefined;
      this._errEntryCreateOom = undefined;
      this._errEntryCreateVipFailed = undefined;
      this._errEntryInsertFailed = undefined;
      this._errHmTcpConnSent = undefined;
      this._errHttp2Callback = undefined;
      this._errHttp2VerMismatch = undefined;
      this._errL4SessAlloc = undefined;
      this._errL7SessProcessTcpDataFailed = undefined;
      this._errL7SessProcessTcpEstabFailed = undefined;
      this._errNoHmEntry = undefined;
      this._errServerSynTimeout = undefined;
      this._errSmartNatAlloc = undefined;
      this._errSmartNatPortAlloc = undefined;
      this._errSslCertNameMismatch = undefined;
      this._hmTcpConnSent = undefined;
      this._smartNatAlloc = undefined;
      this._smartNatAllocFailed = undefined;
      this._smartNatRelease = undefined;
      this._smartNatReleaseFailed = undefined;
      this._totalCreated = undefined;
      this._totalFreed = undefined;
      this._totalInserted = undefined;
      this._totalMaintenanceReceived = undefined;
      this._totalMatchDefaultRespCode = undefined;
      this._totalMatchRespCode = undefined;
      this._totalReadyToFree = undefined;
      this._totalServerQuicConn = undefined;
      this._totalServerQuicConnErr = undefined;
      this._totalTcpErr = undefined;
      this._totalWrongStatusReceived = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currEntries = value.currEntries;
      this._entryDeleted = value.entryDeleted;
      this._errEntryCreateFailed = value.errEntryCreateFailed;
      this._errEntryCreateOom = value.errEntryCreateOom;
      this._errEntryCreateVipFailed = value.errEntryCreateVipFailed;
      this._errEntryInsertFailed = value.errEntryInsertFailed;
      this._errHmTcpConnSent = value.errHmTcpConnSent;
      this._errHttp2Callback = value.errHttp2Callback;
      this._errHttp2VerMismatch = value.errHttp2VerMismatch;
      this._errL4SessAlloc = value.errL4SessAlloc;
      this._errL7SessProcessTcpDataFailed = value.errL7SessProcessTcpDataFailed;
      this._errL7SessProcessTcpEstabFailed = value.errL7SessProcessTcpEstabFailed;
      this._errNoHmEntry = value.errNoHmEntry;
      this._errServerSynTimeout = value.errServerSynTimeout;
      this._errSmartNatAlloc = value.errSmartNatAlloc;
      this._errSmartNatPortAlloc = value.errSmartNatPortAlloc;
      this._errSslCertNameMismatch = value.errSslCertNameMismatch;
      this._hmTcpConnSent = value.hmTcpConnSent;
      this._smartNatAlloc = value.smartNatAlloc;
      this._smartNatAllocFailed = value.smartNatAllocFailed;
      this._smartNatRelease = value.smartNatRelease;
      this._smartNatReleaseFailed = value.smartNatReleaseFailed;
      this._totalCreated = value.totalCreated;
      this._totalFreed = value.totalFreed;
      this._totalInserted = value.totalInserted;
      this._totalMaintenanceReceived = value.totalMaintenanceReceived;
      this._totalMatchDefaultRespCode = value.totalMatchDefaultRespCode;
      this._totalMatchRespCode = value.totalMatchRespCode;
      this._totalReadyToFree = value.totalReadyToFree;
      this._totalServerQuicConn = value.totalServerQuicConn;
      this._totalServerQuicConnErr = value.totalServerQuicConnErr;
      this._totalTcpErr = value.totalTcpErr;
      this._totalWrongStatusReceived = value.totalWrongStatusReceived;
    }
  }

  // curr_entries - computed: false, optional: true, required: false
  private _currEntries?: number; 
  public get currEntries() {
    return this.getNumberAttribute('curr_entries');
  }
  public set currEntries(value: number) {
    this._currEntries = value;
  }
  public resetCurrEntries() {
    this._currEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesInput() {
    return this._currEntries;
  }

  // entry_deleted - computed: false, optional: true, required: false
  private _entryDeleted?: number; 
  public get entryDeleted() {
    return this.getNumberAttribute('entry_deleted');
  }
  public set entryDeleted(value: number) {
    this._entryDeleted = value;
  }
  public resetEntryDeleted() {
    this._entryDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryDeletedInput() {
    return this._entryDeleted;
  }

  // err_entry_create_failed - computed: false, optional: true, required: false
  private _errEntryCreateFailed?: number; 
  public get errEntryCreateFailed() {
    return this.getNumberAttribute('err_entry_create_failed');
  }
  public set errEntryCreateFailed(value: number) {
    this._errEntryCreateFailed = value;
  }
  public resetErrEntryCreateFailed() {
    this._errEntryCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateFailedInput() {
    return this._errEntryCreateFailed;
  }

  // err_entry_create_oom - computed: false, optional: true, required: false
  private _errEntryCreateOom?: number; 
  public get errEntryCreateOom() {
    return this.getNumberAttribute('err_entry_create_oom');
  }
  public set errEntryCreateOom(value: number) {
    this._errEntryCreateOom = value;
  }
  public resetErrEntryCreateOom() {
    this._errEntryCreateOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateOomInput() {
    return this._errEntryCreateOom;
  }

  // err_entry_create_vip_failed - computed: false, optional: true, required: false
  private _errEntryCreateVipFailed?: number; 
  public get errEntryCreateVipFailed() {
    return this.getNumberAttribute('err_entry_create_vip_failed');
  }
  public set errEntryCreateVipFailed(value: number) {
    this._errEntryCreateVipFailed = value;
  }
  public resetErrEntryCreateVipFailed() {
    this._errEntryCreateVipFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateVipFailedInput() {
    return this._errEntryCreateVipFailed;
  }

  // err_entry_insert_failed - computed: false, optional: true, required: false
  private _errEntryInsertFailed?: number; 
  public get errEntryInsertFailed() {
    return this.getNumberAttribute('err_entry_insert_failed');
  }
  public set errEntryInsertFailed(value: number) {
    this._errEntryInsertFailed = value;
  }
  public resetErrEntryInsertFailed() {
    this._errEntryInsertFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryInsertFailedInput() {
    return this._errEntryInsertFailed;
  }

  // err_hm_tcp_conn_sent - computed: false, optional: true, required: false
  private _errHmTcpConnSent?: number; 
  public get errHmTcpConnSent() {
    return this.getNumberAttribute('err_hm_tcp_conn_sent');
  }
  public set errHmTcpConnSent(value: number) {
    this._errHmTcpConnSent = value;
  }
  public resetErrHmTcpConnSent() {
    this._errHmTcpConnSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errHmTcpConnSentInput() {
    return this._errHmTcpConnSent;
  }

  // err_http2_callback - computed: false, optional: true, required: false
  private _errHttp2Callback?: number; 
  public get errHttp2Callback() {
    return this.getNumberAttribute('err_http2_callback');
  }
  public set errHttp2Callback(value: number) {
    this._errHttp2Callback = value;
  }
  public resetErrHttp2Callback() {
    this._errHttp2Callback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errHttp2CallbackInput() {
    return this._errHttp2Callback;
  }

  // err_http2_ver_mismatch - computed: false, optional: true, required: false
  private _errHttp2VerMismatch?: number; 
  public get errHttp2VerMismatch() {
    return this.getNumberAttribute('err_http2_ver_mismatch');
  }
  public set errHttp2VerMismatch(value: number) {
    this._errHttp2VerMismatch = value;
  }
  public resetErrHttp2VerMismatch() {
    this._errHttp2VerMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errHttp2VerMismatchInput() {
    return this._errHttp2VerMismatch;
  }

  // err_l4_sess_alloc - computed: false, optional: true, required: false
  private _errL4SessAlloc?: number; 
  public get errL4SessAlloc() {
    return this.getNumberAttribute('err_l4_sess_alloc');
  }
  public set errL4SessAlloc(value: number) {
    this._errL4SessAlloc = value;
  }
  public resetErrL4SessAlloc() {
    this._errL4SessAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errL4SessAllocInput() {
    return this._errL4SessAlloc;
  }

  // err_l7_sess_process_tcp_data_failed - computed: false, optional: true, required: false
  private _errL7SessProcessTcpDataFailed?: number; 
  public get errL7SessProcessTcpDataFailed() {
    return this.getNumberAttribute('err_l7_sess_process_tcp_data_failed');
  }
  public set errL7SessProcessTcpDataFailed(value: number) {
    this._errL7SessProcessTcpDataFailed = value;
  }
  public resetErrL7SessProcessTcpDataFailed() {
    this._errL7SessProcessTcpDataFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errL7SessProcessTcpDataFailedInput() {
    return this._errL7SessProcessTcpDataFailed;
  }

  // err_l7_sess_process_tcp_estab_failed - computed: false, optional: true, required: false
  private _errL7SessProcessTcpEstabFailed?: number; 
  public get errL7SessProcessTcpEstabFailed() {
    return this.getNumberAttribute('err_l7_sess_process_tcp_estab_failed');
  }
  public set errL7SessProcessTcpEstabFailed(value: number) {
    this._errL7SessProcessTcpEstabFailed = value;
  }
  public resetErrL7SessProcessTcpEstabFailed() {
    this._errL7SessProcessTcpEstabFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errL7SessProcessTcpEstabFailedInput() {
    return this._errL7SessProcessTcpEstabFailed;
  }

  // err_no_hm_entry - computed: false, optional: true, required: false
  private _errNoHmEntry?: number; 
  public get errNoHmEntry() {
    return this.getNumberAttribute('err_no_hm_entry');
  }
  public set errNoHmEntry(value: number) {
    this._errNoHmEntry = value;
  }
  public resetErrNoHmEntry() {
    this._errNoHmEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errNoHmEntryInput() {
    return this._errNoHmEntry;
  }

  // err_server_syn_timeout - computed: false, optional: true, required: false
  private _errServerSynTimeout?: number; 
  public get errServerSynTimeout() {
    return this.getNumberAttribute('err_server_syn_timeout');
  }
  public set errServerSynTimeout(value: number) {
    this._errServerSynTimeout = value;
  }
  public resetErrServerSynTimeout() {
    this._errServerSynTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errServerSynTimeoutInput() {
    return this._errServerSynTimeout;
  }

  // err_smart_nat_alloc - computed: false, optional: true, required: false
  private _errSmartNatAlloc?: number; 
  public get errSmartNatAlloc() {
    return this.getNumberAttribute('err_smart_nat_alloc');
  }
  public set errSmartNatAlloc(value: number) {
    this._errSmartNatAlloc = value;
  }
  public resetErrSmartNatAlloc() {
    this._errSmartNatAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSmartNatAllocInput() {
    return this._errSmartNatAlloc;
  }

  // err_smart_nat_port_alloc - computed: false, optional: true, required: false
  private _errSmartNatPortAlloc?: number; 
  public get errSmartNatPortAlloc() {
    return this.getNumberAttribute('err_smart_nat_port_alloc');
  }
  public set errSmartNatPortAlloc(value: number) {
    this._errSmartNatPortAlloc = value;
  }
  public resetErrSmartNatPortAlloc() {
    this._errSmartNatPortAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSmartNatPortAllocInput() {
    return this._errSmartNatPortAlloc;
  }

  // err_ssl_cert_name_mismatch - computed: false, optional: true, required: false
  private _errSslCertNameMismatch?: number; 
  public get errSslCertNameMismatch() {
    return this.getNumberAttribute('err_ssl_cert_name_mismatch');
  }
  public set errSslCertNameMismatch(value: number) {
    this._errSslCertNameMismatch = value;
  }
  public resetErrSslCertNameMismatch() {
    this._errSslCertNameMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSslCertNameMismatchInput() {
    return this._errSslCertNameMismatch;
  }

  // hm_tcp_conn_sent - computed: false, optional: true, required: false
  private _hmTcpConnSent?: number; 
  public get hmTcpConnSent() {
    return this.getNumberAttribute('hm_tcp_conn_sent');
  }
  public set hmTcpConnSent(value: number) {
    this._hmTcpConnSent = value;
  }
  public resetHmTcpConnSent() {
    this._hmTcpConnSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmTcpConnSentInput() {
    return this._hmTcpConnSent;
  }

  // smart_nat_alloc - computed: false, optional: true, required: false
  private _smartNatAlloc?: number; 
  public get smartNatAlloc() {
    return this.getNumberAttribute('smart_nat_alloc');
  }
  public set smartNatAlloc(value: number) {
    this._smartNatAlloc = value;
  }
  public resetSmartNatAlloc() {
    this._smartNatAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatAllocInput() {
    return this._smartNatAlloc;
  }

  // smart_nat_alloc_failed - computed: false, optional: true, required: false
  private _smartNatAllocFailed?: number; 
  public get smartNatAllocFailed() {
    return this.getNumberAttribute('smart_nat_alloc_failed');
  }
  public set smartNatAllocFailed(value: number) {
    this._smartNatAllocFailed = value;
  }
  public resetSmartNatAllocFailed() {
    this._smartNatAllocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatAllocFailedInput() {
    return this._smartNatAllocFailed;
  }

  // smart_nat_release - computed: false, optional: true, required: false
  private _smartNatRelease?: number; 
  public get smartNatRelease() {
    return this.getNumberAttribute('smart_nat_release');
  }
  public set smartNatRelease(value: number) {
    this._smartNatRelease = value;
  }
  public resetSmartNatRelease() {
    this._smartNatRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatReleaseInput() {
    return this._smartNatRelease;
  }

  // smart_nat_release_failed - computed: false, optional: true, required: false
  private _smartNatReleaseFailed?: number; 
  public get smartNatReleaseFailed() {
    return this.getNumberAttribute('smart_nat_release_failed');
  }
  public set smartNatReleaseFailed(value: number) {
    this._smartNatReleaseFailed = value;
  }
  public resetSmartNatReleaseFailed() {
    this._smartNatReleaseFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatReleaseFailedInput() {
    return this._smartNatReleaseFailed;
  }

  // total_created - computed: false, optional: true, required: false
  private _totalCreated?: number; 
  public get totalCreated() {
    return this.getNumberAttribute('total_created');
  }
  public set totalCreated(value: number) {
    this._totalCreated = value;
  }
  public resetTotalCreated() {
    this._totalCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCreatedInput() {
    return this._totalCreated;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_inserted - computed: false, optional: true, required: false
  private _totalInserted?: number; 
  public get totalInserted() {
    return this.getNumberAttribute('total_inserted');
  }
  public set totalInserted(value: number) {
    this._totalInserted = value;
  }
  public resetTotalInserted() {
    this._totalInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInsertedInput() {
    return this._totalInserted;
  }

  // total_maintenance_received - computed: false, optional: true, required: false
  private _totalMaintenanceReceived?: number; 
  public get totalMaintenanceReceived() {
    return this.getNumberAttribute('total_maintenance_received');
  }
  public set totalMaintenanceReceived(value: number) {
    this._totalMaintenanceReceived = value;
  }
  public resetTotalMaintenanceReceived() {
    this._totalMaintenanceReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaintenanceReceivedInput() {
    return this._totalMaintenanceReceived;
  }

  // total_match_default_resp_code - computed: false, optional: true, required: false
  private _totalMatchDefaultRespCode?: number; 
  public get totalMatchDefaultRespCode() {
    return this.getNumberAttribute('total_match_default_resp_code');
  }
  public set totalMatchDefaultRespCode(value: number) {
    this._totalMatchDefaultRespCode = value;
  }
  public resetTotalMatchDefaultRespCode() {
    this._totalMatchDefaultRespCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMatchDefaultRespCodeInput() {
    return this._totalMatchDefaultRespCode;
  }

  // total_match_resp_code - computed: false, optional: true, required: false
  private _totalMatchRespCode?: number; 
  public get totalMatchRespCode() {
    return this.getNumberAttribute('total_match_resp_code');
  }
  public set totalMatchRespCode(value: number) {
    this._totalMatchRespCode = value;
  }
  public resetTotalMatchRespCode() {
    this._totalMatchRespCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMatchRespCodeInput() {
    return this._totalMatchRespCode;
  }

  // total_ready_to_free - computed: false, optional: true, required: false
  private _totalReadyToFree?: number; 
  public get totalReadyToFree() {
    return this.getNumberAttribute('total_ready_to_free');
  }
  public set totalReadyToFree(value: number) {
    this._totalReadyToFree = value;
  }
  public resetTotalReadyToFree() {
    this._totalReadyToFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReadyToFreeInput() {
    return this._totalReadyToFree;
  }

  // total_server_quic_conn - computed: false, optional: true, required: false
  private _totalServerQuicConn?: number; 
  public get totalServerQuicConn() {
    return this.getNumberAttribute('total_server_quic_conn');
  }
  public set totalServerQuicConn(value: number) {
    this._totalServerQuicConn = value;
  }
  public resetTotalServerQuicConn() {
    this._totalServerQuicConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServerQuicConnInput() {
    return this._totalServerQuicConn;
  }

  // total_server_quic_conn_err - computed: false, optional: true, required: false
  private _totalServerQuicConnErr?: number; 
  public get totalServerQuicConnErr() {
    return this.getNumberAttribute('total_server_quic_conn_err');
  }
  public set totalServerQuicConnErr(value: number) {
    this._totalServerQuicConnErr = value;
  }
  public resetTotalServerQuicConnErr() {
    this._totalServerQuicConnErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalServerQuicConnErrInput() {
    return this._totalServerQuicConnErr;
  }

  // total_tcp_err - computed: false, optional: true, required: false
  private _totalTcpErr?: number; 
  public get totalTcpErr() {
    return this.getNumberAttribute('total_tcp_err');
  }
  public set totalTcpErr(value: number) {
    this._totalTcpErr = value;
  }
  public resetTotalTcpErr() {
    this._totalTcpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpErrInput() {
    return this._totalTcpErr;
  }

  // total_wrong_status_received - computed: false, optional: true, required: false
  private _totalWrongStatusReceived?: number; 
  public get totalWrongStatusReceived() {
    return this.getNumberAttribute('total_wrong_status_received');
  }
  public set totalWrongStatusReceived(value: number) {
    this._totalWrongStatusReceived = value;
  }
  public resetTotalWrongStatusReceived() {
    this._totalWrongStatusReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalWrongStatusReceivedInput() {
    return this._totalWrongStatusReceived;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats thunder_slb_hm_dplane_stats}
*/
export class DataThunderSlbHmDplaneStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_hm_dplane_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHmDplaneStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHmDplaneStats to import
  * @param importFromId The id of the existing DataThunderSlbHmDplaneStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHmDplaneStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_hm_dplane_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_hm_dplane_stats thunder_slb_hm_dplane_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHmDplaneStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHmDplaneStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_hm_dplane_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSlbHmDplaneStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbHmDplaneStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderSlbHmDplaneStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderSlbHmDplaneStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHmDplaneStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
