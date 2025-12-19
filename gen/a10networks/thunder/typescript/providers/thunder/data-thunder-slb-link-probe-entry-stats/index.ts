// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbLinkProbeEntryStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#id DataThunderSlbLinkProbeEntryStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#stats DataThunderSlbLinkProbeEntryStats#stats}
  */
  readonly stats?: DataThunderSlbLinkProbeEntryStatsStats;
}
export interface DataThunderSlbLinkProbeEntryStatsStats {
  /**
  * Current Entry Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#curr_entries DataThunderSlbLinkProbeEntryStats#curr_entries}
  */
  readonly currEntries?: number;
  /**
  * Entry Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_entry_create_failed DataThunderSlbLinkProbeEntryStats#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Entry Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_entry_create_oom DataThunderSlbLinkProbeEntryStats#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Entry Insert Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_entry_insert_failed DataThunderSlbLinkProbeEntryStats#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Error allocating L4 session for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_l4_sess_alloc DataThunderSlbLinkProbeEntryStats#err_l4_sess_alloc}
  */
  readonly errL4SessAlloc?: number;
  /**
  * Error in initiating TCP connection for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_probe_tcp_conn_send DataThunderSlbLinkProbeEntryStats#err_probe_tcp_conn_send}
  */
  readonly errProbeTcpConnSend?: number;
  /**
  * Error creating Smart NAT Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_smart_nat_alloc DataThunderSlbLinkProbeEntryStats#err_smart_nat_alloc}
  */
  readonly errSmartNatAlloc?: number;
  /**
  * Error obtaining Smart NAT source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_smart_nat_port_alloc DataThunderSlbLinkProbeEntryStats#err_smart_nat_port_alloc}
  */
  readonly errSmartNatPortAlloc?: number;
  /**
  * Probe Template Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_tmpl_probe_create_failed DataThunderSlbLinkProbeEntryStats#err_tmpl_probe_create_failed}
  */
  readonly errTmplProbeCreateFailed?: number;
  /**
  * Probe Template Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#err_tmpl_probe_create_oom DataThunderSlbLinkProbeEntryStats#err_tmpl_probe_create_oom}
  */
  readonly errTmplProbeCreateOom?: number;
  /**
  * TCP connection sent for probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#probe_tcp_conn_sent DataThunderSlbLinkProbeEntryStats#probe_tcp_conn_sent}
  */
  readonly probeTcpConnSent?: number;
  /**
  * Total Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_created DataThunderSlbLinkProbeEntryStats#total_created}
  */
  readonly totalCreated?: number;
  /**
  * Total Entry Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_freed DataThunderSlbLinkProbeEntryStats#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Total HTTP Probes Sent out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_http_probes_sent DataThunderSlbLinkProbeEntryStats#total_http_probes_sent}
  */
  readonly totalHttpProbesSent?: number;
  /**
  * Total HTTP responses not matching probe template config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_http_response_bad DataThunderSlbLinkProbeEntryStats#total_http_response_bad}
  */
  readonly totalHttpResponseBad?: number;
  /**
  * Total HTTP responses matching probe template config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_http_response_good DataThunderSlbLinkProbeEntryStats#total_http_response_good}
  */
  readonly totalHttpResponseGood?: number;
  /**
  * Total HTTP responses received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_http_response_received DataThunderSlbLinkProbeEntryStats#total_http_response_received}
  */
  readonly totalHttpResponseReceived?: number;
  /**
  * Total Entry Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_inserted DataThunderSlbLinkProbeEntryStats#total_inserted}
  */
  readonly totalInserted?: number;
  /**
  * Total Entry Ready To Free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_ready_to_free DataThunderSlbLinkProbeEntryStats#total_ready_to_free}
  */
  readonly totalReadyToFree?: number;
  /**
  * Total TCP errors in probes sent out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#total_tcp_err DataThunderSlbLinkProbeEntryStats#total_tcp_err}
  */
  readonly totalTcpErr?: number;
}

export function dataThunderSlbLinkProbeEntryStatsStatsToTerraform(struct?: DataThunderSlbLinkProbeEntryStatsStatsOutputReference | DataThunderSlbLinkProbeEntryStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_entries: cdktf.numberToTerraform(struct!.currEntries),
    err_entry_create_failed: cdktf.numberToTerraform(struct!.errEntryCreateFailed),
    err_entry_create_oom: cdktf.numberToTerraform(struct!.errEntryCreateOom),
    err_entry_insert_failed: cdktf.numberToTerraform(struct!.errEntryInsertFailed),
    err_l4_sess_alloc: cdktf.numberToTerraform(struct!.errL4SessAlloc),
    err_probe_tcp_conn_send: cdktf.numberToTerraform(struct!.errProbeTcpConnSend),
    err_smart_nat_alloc: cdktf.numberToTerraform(struct!.errSmartNatAlloc),
    err_smart_nat_port_alloc: cdktf.numberToTerraform(struct!.errSmartNatPortAlloc),
    err_tmpl_probe_create_failed: cdktf.numberToTerraform(struct!.errTmplProbeCreateFailed),
    err_tmpl_probe_create_oom: cdktf.numberToTerraform(struct!.errTmplProbeCreateOom),
    probe_tcp_conn_sent: cdktf.numberToTerraform(struct!.probeTcpConnSent),
    total_created: cdktf.numberToTerraform(struct!.totalCreated),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_http_probes_sent: cdktf.numberToTerraform(struct!.totalHttpProbesSent),
    total_http_response_bad: cdktf.numberToTerraform(struct!.totalHttpResponseBad),
    total_http_response_good: cdktf.numberToTerraform(struct!.totalHttpResponseGood),
    total_http_response_received: cdktf.numberToTerraform(struct!.totalHttpResponseReceived),
    total_inserted: cdktf.numberToTerraform(struct!.totalInserted),
    total_ready_to_free: cdktf.numberToTerraform(struct!.totalReadyToFree),
    total_tcp_err: cdktf.numberToTerraform(struct!.totalTcpErr),
  }
}


export function dataThunderSlbLinkProbeEntryStatsStatsToHclTerraform(struct?: DataThunderSlbLinkProbeEntryStatsStatsOutputReference | DataThunderSlbLinkProbeEntryStatsStats): any {
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
    err_entry_insert_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryInsertFailed),
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
    err_probe_tcp_conn_send: {
      value: cdktf.numberToHclTerraform(struct!.errProbeTcpConnSend),
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
    err_tmpl_probe_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errTmplProbeCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_tmpl_probe_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errTmplProbeCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_tcp_conn_sent: {
      value: cdktf.numberToHclTerraform(struct!.probeTcpConnSent),
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
    total_http_probes_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpProbesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http_response_bad: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpResponseBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http_response_good: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpResponseGood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http_response_received: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpResponseReceived),
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
    total_ready_to_free: {
      value: cdktf.numberToHclTerraform(struct!.totalReadyToFree),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbLinkProbeEntryStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbLinkProbeEntryStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntries = this._currEntries;
    }
    if (this._errEntryCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateFailed = this._errEntryCreateFailed;
    }
    if (this._errEntryCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateOom = this._errEntryCreateOom;
    }
    if (this._errEntryInsertFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryInsertFailed = this._errEntryInsertFailed;
    }
    if (this._errL4SessAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errL4SessAlloc = this._errL4SessAlloc;
    }
    if (this._errProbeTcpConnSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.errProbeTcpConnSend = this._errProbeTcpConnSend;
    }
    if (this._errSmartNatAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatAlloc = this._errSmartNatAlloc;
    }
    if (this._errSmartNatPortAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSmartNatPortAlloc = this._errSmartNatPortAlloc;
    }
    if (this._errTmplProbeCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errTmplProbeCreateFailed = this._errTmplProbeCreateFailed;
    }
    if (this._errTmplProbeCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errTmplProbeCreateOom = this._errTmplProbeCreateOom;
    }
    if (this._probeTcpConnSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTcpConnSent = this._probeTcpConnSent;
    }
    if (this._totalCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCreated = this._totalCreated;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalHttpProbesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpProbesSent = this._totalHttpProbesSent;
    }
    if (this._totalHttpResponseBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpResponseBad = this._totalHttpResponseBad;
    }
    if (this._totalHttpResponseGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpResponseGood = this._totalHttpResponseGood;
    }
    if (this._totalHttpResponseReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpResponseReceived = this._totalHttpResponseReceived;
    }
    if (this._totalInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInserted = this._totalInserted;
    }
    if (this._totalReadyToFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReadyToFree = this._totalReadyToFree;
    }
    if (this._totalTcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpErr = this._totalTcpErr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbLinkProbeEntryStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currEntries = undefined;
      this._errEntryCreateFailed = undefined;
      this._errEntryCreateOom = undefined;
      this._errEntryInsertFailed = undefined;
      this._errL4SessAlloc = undefined;
      this._errProbeTcpConnSend = undefined;
      this._errSmartNatAlloc = undefined;
      this._errSmartNatPortAlloc = undefined;
      this._errTmplProbeCreateFailed = undefined;
      this._errTmplProbeCreateOom = undefined;
      this._probeTcpConnSent = undefined;
      this._totalCreated = undefined;
      this._totalFreed = undefined;
      this._totalHttpProbesSent = undefined;
      this._totalHttpResponseBad = undefined;
      this._totalHttpResponseGood = undefined;
      this._totalHttpResponseReceived = undefined;
      this._totalInserted = undefined;
      this._totalReadyToFree = undefined;
      this._totalTcpErr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currEntries = value.currEntries;
      this._errEntryCreateFailed = value.errEntryCreateFailed;
      this._errEntryCreateOom = value.errEntryCreateOom;
      this._errEntryInsertFailed = value.errEntryInsertFailed;
      this._errL4SessAlloc = value.errL4SessAlloc;
      this._errProbeTcpConnSend = value.errProbeTcpConnSend;
      this._errSmartNatAlloc = value.errSmartNatAlloc;
      this._errSmartNatPortAlloc = value.errSmartNatPortAlloc;
      this._errTmplProbeCreateFailed = value.errTmplProbeCreateFailed;
      this._errTmplProbeCreateOom = value.errTmplProbeCreateOom;
      this._probeTcpConnSent = value.probeTcpConnSent;
      this._totalCreated = value.totalCreated;
      this._totalFreed = value.totalFreed;
      this._totalHttpProbesSent = value.totalHttpProbesSent;
      this._totalHttpResponseBad = value.totalHttpResponseBad;
      this._totalHttpResponseGood = value.totalHttpResponseGood;
      this._totalHttpResponseReceived = value.totalHttpResponseReceived;
      this._totalInserted = value.totalInserted;
      this._totalReadyToFree = value.totalReadyToFree;
      this._totalTcpErr = value.totalTcpErr;
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

  // err_probe_tcp_conn_send - computed: false, optional: true, required: false
  private _errProbeTcpConnSend?: number; 
  public get errProbeTcpConnSend() {
    return this.getNumberAttribute('err_probe_tcp_conn_send');
  }
  public set errProbeTcpConnSend(value: number) {
    this._errProbeTcpConnSend = value;
  }
  public resetErrProbeTcpConnSend() {
    this._errProbeTcpConnSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errProbeTcpConnSendInput() {
    return this._errProbeTcpConnSend;
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

  // err_tmpl_probe_create_failed - computed: false, optional: true, required: false
  private _errTmplProbeCreateFailed?: number; 
  public get errTmplProbeCreateFailed() {
    return this.getNumberAttribute('err_tmpl_probe_create_failed');
  }
  public set errTmplProbeCreateFailed(value: number) {
    this._errTmplProbeCreateFailed = value;
  }
  public resetErrTmplProbeCreateFailed() {
    this._errTmplProbeCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errTmplProbeCreateFailedInput() {
    return this._errTmplProbeCreateFailed;
  }

  // err_tmpl_probe_create_oom - computed: false, optional: true, required: false
  private _errTmplProbeCreateOom?: number; 
  public get errTmplProbeCreateOom() {
    return this.getNumberAttribute('err_tmpl_probe_create_oom');
  }
  public set errTmplProbeCreateOom(value: number) {
    this._errTmplProbeCreateOom = value;
  }
  public resetErrTmplProbeCreateOom() {
    this._errTmplProbeCreateOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errTmplProbeCreateOomInput() {
    return this._errTmplProbeCreateOom;
  }

  // probe_tcp_conn_sent - computed: false, optional: true, required: false
  private _probeTcpConnSent?: number; 
  public get probeTcpConnSent() {
    return this.getNumberAttribute('probe_tcp_conn_sent');
  }
  public set probeTcpConnSent(value: number) {
    this._probeTcpConnSent = value;
  }
  public resetProbeTcpConnSent() {
    this._probeTcpConnSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTcpConnSentInput() {
    return this._probeTcpConnSent;
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

  // total_http_probes_sent - computed: false, optional: true, required: false
  private _totalHttpProbesSent?: number; 
  public get totalHttpProbesSent() {
    return this.getNumberAttribute('total_http_probes_sent');
  }
  public set totalHttpProbesSent(value: number) {
    this._totalHttpProbesSent = value;
  }
  public resetTotalHttpProbesSent() {
    this._totalHttpProbesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpProbesSentInput() {
    return this._totalHttpProbesSent;
  }

  // total_http_response_bad - computed: false, optional: true, required: false
  private _totalHttpResponseBad?: number; 
  public get totalHttpResponseBad() {
    return this.getNumberAttribute('total_http_response_bad');
  }
  public set totalHttpResponseBad(value: number) {
    this._totalHttpResponseBad = value;
  }
  public resetTotalHttpResponseBad() {
    this._totalHttpResponseBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpResponseBadInput() {
    return this._totalHttpResponseBad;
  }

  // total_http_response_good - computed: false, optional: true, required: false
  private _totalHttpResponseGood?: number; 
  public get totalHttpResponseGood() {
    return this.getNumberAttribute('total_http_response_good');
  }
  public set totalHttpResponseGood(value: number) {
    this._totalHttpResponseGood = value;
  }
  public resetTotalHttpResponseGood() {
    this._totalHttpResponseGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpResponseGoodInput() {
    return this._totalHttpResponseGood;
  }

  // total_http_response_received - computed: false, optional: true, required: false
  private _totalHttpResponseReceived?: number; 
  public get totalHttpResponseReceived() {
    return this.getNumberAttribute('total_http_response_received');
  }
  public set totalHttpResponseReceived(value: number) {
    this._totalHttpResponseReceived = value;
  }
  public resetTotalHttpResponseReceived() {
    this._totalHttpResponseReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpResponseReceivedInput() {
    return this._totalHttpResponseReceived;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats thunder_slb_link_probe_entry_stats}
*/
export class DataThunderSlbLinkProbeEntryStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_link_probe_entry_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbLinkProbeEntryStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbLinkProbeEntryStats to import
  * @param importFromId The id of the existing DataThunderSlbLinkProbeEntryStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbLinkProbeEntryStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_link_probe_entry_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_link_probe_entry_stats thunder_slb_link_probe_entry_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbLinkProbeEntryStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbLinkProbeEntryStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_link_probe_entry_stats',
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
  private _stats = new DataThunderSlbLinkProbeEntryStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbLinkProbeEntryStatsStats) {
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
      stats: dataThunderSlbLinkProbeEntryStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbLinkProbeEntryStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbLinkProbeEntryStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
