// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAcosEventsLocalLoggingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#id DataThunderAcosEventsLocalLoggingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#stats DataThunderAcosEventsLocalLoggingStats#stats}
  */
  readonly stats?: DataThunderAcosEventsLocalLoggingStatsStats;
}
export interface DataThunderAcosEventsLocalLoggingStatsStats {
  /**
  * Number of logs Dropped, Disk reached threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#disk_over_thres DataThunderAcosEventsLocalLoggingStats#disk_over_thres}
  */
  readonly diskOverThres?: number;
  /**
  * Local logging Stopped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#freed DataThunderAcosEventsLocalLoggingStats#freed}
  */
  readonly freed?: number;
  /**
  * Number of bytes successfully stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_bytes DataThunderAcosEventsLocalLoggingStats#in_bytes}
  */
  readonly inBytes?: number;
  /**
  * Number of backlog bytes loaded from disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_bytes_backlog DataThunderAcosEventsLocalLoggingStats#in_bytes_backlog}
  */
  readonly inBytesBacklog?: number;
  /**
  * Number of old bytes discarded to fit in new logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_discard_bytes DataThunderAcosEventsLocalLoggingStats#in_discard_bytes}
  */
  readonly inDiscardBytes?: number;
  /**
  * Number of old logs discarded to fit in new logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_discard_logs DataThunderAcosEventsLocalLoggingStats#in_discard_logs}
  */
  readonly inDiscardLogs?: number;
  /**
  * Number of logs successfully stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_logs DataThunderAcosEventsLocalLoggingStats#in_logs}
  */
  readonly inLogs?: number;
  /**
  * Number of backlogs loaded from disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_logs_backlog DataThunderAcosEventsLocalLoggingStats#in_logs_backlog}
  */
  readonly inLogsBacklog?: number;
  /**
  * Number of logs Dropped, failed without disk space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#in_store_fail_no_space DataThunderAcosEventsLocalLoggingStats#in_store_fail_no_space}
  */
  readonly inStoreFailNoSpace?: number;
  /**
  * Local logging Init Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#init_fail DataThunderAcosEventsLocalLoggingStats#init_fail}
  */
  readonly initFail?: number;
  /**
  * Local logging Init Successful
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#init_pass DataThunderAcosEventsLocalLoggingStats#init_pass}
  */
  readonly initPass?: number;
  /**
  * Number of logs Dropped, Local logging not inited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#not_inited DataThunderAcosEventsLocalLoggingStats#not_inited}
  */
  readonly notInited?: number;
  /**
  * Number of bytes sent to log-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#out_bytes DataThunderAcosEventsLocalLoggingStats#out_bytes}
  */
  readonly outBytes?: number;
  /**
  * Number of errors during send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#out_error DataThunderAcosEventsLocalLoggingStats#out_error}
  */
  readonly outError?: number;
  /**
  * Number of logs sent to log servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#out_logs DataThunderAcosEventsLocalLoggingStats#out_logs}
  */
  readonly outLogs?: number;
  /**
  * Number of logs Dropped, Rate limited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#rate_limited DataThunderAcosEventsLocalLoggingStats#rate_limited}
  */
  readonly rateLimited?: number;
  /**
  * Total number of remaining bytes yet to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#remaining_bytes DataThunderAcosEventsLocalLoggingStats#remaining_bytes}
  */
  readonly remainingBytes?: number;
  /**
  * Total number of remaining logs yet to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#remaining_logs DataThunderAcosEventsLocalLoggingStats#remaining_logs}
  */
  readonly remainingLogs?: number;
  /**
  * Number of logs sent to be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#sent_to_store DataThunderAcosEventsLocalLoggingStats#sent_to_store}
  */
  readonly sentToStore?: number;
  /**
  * Number of Logs sent to be stored Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#sent_to_store_fail DataThunderAcosEventsLocalLoggingStats#sent_to_store_fail}
  */
  readonly sentToStoreFail?: number;
  /**
  * Number of logs failed to be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#store_fail DataThunderAcosEventsLocalLoggingStats#store_fail}
  */
  readonly storeFail?: number;
}

export function dataThunderAcosEventsLocalLoggingStatsStatsToTerraform(struct?: DataThunderAcosEventsLocalLoggingStatsStatsOutputReference | DataThunderAcosEventsLocalLoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_over_thres: cdktf.numberToTerraform(struct!.diskOverThres),
    freed: cdktf.numberToTerraform(struct!.freed),
    in_bytes: cdktf.numberToTerraform(struct!.inBytes),
    in_bytes_backlog: cdktf.numberToTerraform(struct!.inBytesBacklog),
    in_discard_bytes: cdktf.numberToTerraform(struct!.inDiscardBytes),
    in_discard_logs: cdktf.numberToTerraform(struct!.inDiscardLogs),
    in_logs: cdktf.numberToTerraform(struct!.inLogs),
    in_logs_backlog: cdktf.numberToTerraform(struct!.inLogsBacklog),
    in_store_fail_no_space: cdktf.numberToTerraform(struct!.inStoreFailNoSpace),
    init_fail: cdktf.numberToTerraform(struct!.initFail),
    init_pass: cdktf.numberToTerraform(struct!.initPass),
    not_inited: cdktf.numberToTerraform(struct!.notInited),
    out_bytes: cdktf.numberToTerraform(struct!.outBytes),
    out_error: cdktf.numberToTerraform(struct!.outError),
    out_logs: cdktf.numberToTerraform(struct!.outLogs),
    rate_limited: cdktf.numberToTerraform(struct!.rateLimited),
    remaining_bytes: cdktf.numberToTerraform(struct!.remainingBytes),
    remaining_logs: cdktf.numberToTerraform(struct!.remainingLogs),
    sent_to_store: cdktf.numberToTerraform(struct!.sentToStore),
    sent_to_store_fail: cdktf.numberToTerraform(struct!.sentToStoreFail),
    store_fail: cdktf.numberToTerraform(struct!.storeFail),
  }
}


export function dataThunderAcosEventsLocalLoggingStatsStatsToHclTerraform(struct?: DataThunderAcosEventsLocalLoggingStatsStatsOutputReference | DataThunderAcosEventsLocalLoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_over_thres: {
      value: cdktf.numberToHclTerraform(struct!.diskOverThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    freed: {
      value: cdktf.numberToHclTerraform(struct!.freed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_bytes_backlog: {
      value: cdktf.numberToHclTerraform(struct!.inBytesBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_discard_bytes: {
      value: cdktf.numberToHclTerraform(struct!.inDiscardBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_discard_logs: {
      value: cdktf.numberToHclTerraform(struct!.inDiscardLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_logs: {
      value: cdktf.numberToHclTerraform(struct!.inLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_logs_backlog: {
      value: cdktf.numberToHclTerraform(struct!.inLogsBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_store_fail_no_space: {
      value: cdktf.numberToHclTerraform(struct!.inStoreFailNoSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    init_fail: {
      value: cdktf.numberToHclTerraform(struct!.initFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    init_pass: {
      value: cdktf.numberToHclTerraform(struct!.initPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_inited: {
      value: cdktf.numberToHclTerraform(struct!.notInited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_error: {
      value: cdktf.numberToHclTerraform(struct!.outError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_logs: {
      value: cdktf.numberToHclTerraform(struct!.outLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limited: {
      value: cdktf.numberToHclTerraform(struct!.rateLimited),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remaining_bytes: {
      value: cdktf.numberToHclTerraform(struct!.remainingBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remaining_logs: {
      value: cdktf.numberToHclTerraform(struct!.remainingLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sent_to_store: {
      value: cdktf.numberToHclTerraform(struct!.sentToStore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sent_to_store_fail: {
      value: cdktf.numberToHclTerraform(struct!.sentToStoreFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    store_fail: {
      value: cdktf.numberToHclTerraform(struct!.storeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsLocalLoggingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAcosEventsLocalLoggingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskOverThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskOverThres = this._diskOverThres;
    }
    if (this._freed !== undefined) {
      hasAnyValues = true;
      internalValueResult.freed = this._freed;
    }
    if (this._inBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBytes = this._inBytes;
    }
    if (this._inBytesBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.inBytesBacklog = this._inBytesBacklog;
    }
    if (this._inDiscardBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inDiscardBytes = this._inDiscardBytes;
    }
    if (this._inDiscardLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inDiscardLogs = this._inDiscardLogs;
    }
    if (this._inLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLogs = this._inLogs;
    }
    if (this._inLogsBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLogsBacklog = this._inLogsBacklog;
    }
    if (this._inStoreFailNoSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.inStoreFailNoSpace = this._inStoreFailNoSpace;
    }
    if (this._initFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.initFail = this._initFail;
    }
    if (this._initPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.initPass = this._initPass;
    }
    if (this._notInited !== undefined) {
      hasAnyValues = true;
      internalValueResult.notInited = this._notInited;
    }
    if (this._outBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outBytes = this._outBytes;
    }
    if (this._outError !== undefined) {
      hasAnyValues = true;
      internalValueResult.outError = this._outError;
    }
    if (this._outLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outLogs = this._outLogs;
    }
    if (this._rateLimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimited = this._rateLimited;
    }
    if (this._remainingBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingBytes = this._remainingBytes;
    }
    if (this._remainingLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingLogs = this._remainingLogs;
    }
    if (this._sentToStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentToStore = this._sentToStore;
    }
    if (this._sentToStoreFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentToStoreFail = this._sentToStoreFail;
    }
    if (this._storeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeFail = this._storeFail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsLocalLoggingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskOverThres = undefined;
      this._freed = undefined;
      this._inBytes = undefined;
      this._inBytesBacklog = undefined;
      this._inDiscardBytes = undefined;
      this._inDiscardLogs = undefined;
      this._inLogs = undefined;
      this._inLogsBacklog = undefined;
      this._inStoreFailNoSpace = undefined;
      this._initFail = undefined;
      this._initPass = undefined;
      this._notInited = undefined;
      this._outBytes = undefined;
      this._outError = undefined;
      this._outLogs = undefined;
      this._rateLimited = undefined;
      this._remainingBytes = undefined;
      this._remainingLogs = undefined;
      this._sentToStore = undefined;
      this._sentToStoreFail = undefined;
      this._storeFail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskOverThres = value.diskOverThres;
      this._freed = value.freed;
      this._inBytes = value.inBytes;
      this._inBytesBacklog = value.inBytesBacklog;
      this._inDiscardBytes = value.inDiscardBytes;
      this._inDiscardLogs = value.inDiscardLogs;
      this._inLogs = value.inLogs;
      this._inLogsBacklog = value.inLogsBacklog;
      this._inStoreFailNoSpace = value.inStoreFailNoSpace;
      this._initFail = value.initFail;
      this._initPass = value.initPass;
      this._notInited = value.notInited;
      this._outBytes = value.outBytes;
      this._outError = value.outError;
      this._outLogs = value.outLogs;
      this._rateLimited = value.rateLimited;
      this._remainingBytes = value.remainingBytes;
      this._remainingLogs = value.remainingLogs;
      this._sentToStore = value.sentToStore;
      this._sentToStoreFail = value.sentToStoreFail;
      this._storeFail = value.storeFail;
    }
  }

  // disk_over_thres - computed: false, optional: true, required: false
  private _diskOverThres?: number; 
  public get diskOverThres() {
    return this.getNumberAttribute('disk_over_thres');
  }
  public set diskOverThres(value: number) {
    this._diskOverThres = value;
  }
  public resetDiskOverThres() {
    this._diskOverThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskOverThresInput() {
    return this._diskOverThres;
  }

  // freed - computed: false, optional: true, required: false
  private _freed?: number; 
  public get freed() {
    return this.getNumberAttribute('freed');
  }
  public set freed(value: number) {
    this._freed = value;
  }
  public resetFreed() {
    this._freed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freedInput() {
    return this._freed;
  }

  // in_bytes - computed: false, optional: true, required: false
  private _inBytes?: number; 
  public get inBytes() {
    return this.getNumberAttribute('in_bytes');
  }
  public set inBytes(value: number) {
    this._inBytes = value;
  }
  public resetInBytes() {
    this._inBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBytesInput() {
    return this._inBytes;
  }

  // in_bytes_backlog - computed: false, optional: true, required: false
  private _inBytesBacklog?: number; 
  public get inBytesBacklog() {
    return this.getNumberAttribute('in_bytes_backlog');
  }
  public set inBytesBacklog(value: number) {
    this._inBytesBacklog = value;
  }
  public resetInBytesBacklog() {
    this._inBytesBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inBytesBacklogInput() {
    return this._inBytesBacklog;
  }

  // in_discard_bytes - computed: false, optional: true, required: false
  private _inDiscardBytes?: number; 
  public get inDiscardBytes() {
    return this.getNumberAttribute('in_discard_bytes');
  }
  public set inDiscardBytes(value: number) {
    this._inDiscardBytes = value;
  }
  public resetInDiscardBytes() {
    this._inDiscardBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inDiscardBytesInput() {
    return this._inDiscardBytes;
  }

  // in_discard_logs - computed: false, optional: true, required: false
  private _inDiscardLogs?: number; 
  public get inDiscardLogs() {
    return this.getNumberAttribute('in_discard_logs');
  }
  public set inDiscardLogs(value: number) {
    this._inDiscardLogs = value;
  }
  public resetInDiscardLogs() {
    this._inDiscardLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inDiscardLogsInput() {
    return this._inDiscardLogs;
  }

  // in_logs - computed: false, optional: true, required: false
  private _inLogs?: number; 
  public get inLogs() {
    return this.getNumberAttribute('in_logs');
  }
  public set inLogs(value: number) {
    this._inLogs = value;
  }
  public resetInLogs() {
    this._inLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLogsInput() {
    return this._inLogs;
  }

  // in_logs_backlog - computed: false, optional: true, required: false
  private _inLogsBacklog?: number; 
  public get inLogsBacklog() {
    return this.getNumberAttribute('in_logs_backlog');
  }
  public set inLogsBacklog(value: number) {
    this._inLogsBacklog = value;
  }
  public resetInLogsBacklog() {
    this._inLogsBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLogsBacklogInput() {
    return this._inLogsBacklog;
  }

  // in_store_fail_no_space - computed: false, optional: true, required: false
  private _inStoreFailNoSpace?: number; 
  public get inStoreFailNoSpace() {
    return this.getNumberAttribute('in_store_fail_no_space');
  }
  public set inStoreFailNoSpace(value: number) {
    this._inStoreFailNoSpace = value;
  }
  public resetInStoreFailNoSpace() {
    this._inStoreFailNoSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inStoreFailNoSpaceInput() {
    return this._inStoreFailNoSpace;
  }

  // init_fail - computed: false, optional: true, required: false
  private _initFail?: number; 
  public get initFail() {
    return this.getNumberAttribute('init_fail');
  }
  public set initFail(value: number) {
    this._initFail = value;
  }
  public resetInitFail() {
    this._initFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initFailInput() {
    return this._initFail;
  }

  // init_pass - computed: false, optional: true, required: false
  private _initPass?: number; 
  public get initPass() {
    return this.getNumberAttribute('init_pass');
  }
  public set initPass(value: number) {
    this._initPass = value;
  }
  public resetInitPass() {
    this._initPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initPassInput() {
    return this._initPass;
  }

  // not_inited - computed: false, optional: true, required: false
  private _notInited?: number; 
  public get notInited() {
    return this.getNumberAttribute('not_inited');
  }
  public set notInited(value: number) {
    this._notInited = value;
  }
  public resetNotInited() {
    this._notInited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInitedInput() {
    return this._notInited;
  }

  // out_bytes - computed: false, optional: true, required: false
  private _outBytes?: number; 
  public get outBytes() {
    return this.getNumberAttribute('out_bytes');
  }
  public set outBytes(value: number) {
    this._outBytes = value;
  }
  public resetOutBytes() {
    this._outBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outBytesInput() {
    return this._outBytes;
  }

  // out_error - computed: false, optional: true, required: false
  private _outError?: number; 
  public get outError() {
    return this.getNumberAttribute('out_error');
  }
  public set outError(value: number) {
    this._outError = value;
  }
  public resetOutError() {
    this._outError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outErrorInput() {
    return this._outError;
  }

  // out_logs - computed: false, optional: true, required: false
  private _outLogs?: number; 
  public get outLogs() {
    return this.getNumberAttribute('out_logs');
  }
  public set outLogs(value: number) {
    this._outLogs = value;
  }
  public resetOutLogs() {
    this._outLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outLogsInput() {
    return this._outLogs;
  }

  // rate_limited - computed: false, optional: true, required: false
  private _rateLimited?: number; 
  public get rateLimited() {
    return this.getNumberAttribute('rate_limited');
  }
  public set rateLimited(value: number) {
    this._rateLimited = value;
  }
  public resetRateLimited() {
    this._rateLimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitedInput() {
    return this._rateLimited;
  }

  // remaining_bytes - computed: false, optional: true, required: false
  private _remainingBytes?: number; 
  public get remainingBytes() {
    return this.getNumberAttribute('remaining_bytes');
  }
  public set remainingBytes(value: number) {
    this._remainingBytes = value;
  }
  public resetRemainingBytes() {
    this._remainingBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingBytesInput() {
    return this._remainingBytes;
  }

  // remaining_logs - computed: false, optional: true, required: false
  private _remainingLogs?: number; 
  public get remainingLogs() {
    return this.getNumberAttribute('remaining_logs');
  }
  public set remainingLogs(value: number) {
    this._remainingLogs = value;
  }
  public resetRemainingLogs() {
    this._remainingLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingLogsInput() {
    return this._remainingLogs;
  }

  // sent_to_store - computed: false, optional: true, required: false
  private _sentToStore?: number; 
  public get sentToStore() {
    return this.getNumberAttribute('sent_to_store');
  }
  public set sentToStore(value: number) {
    this._sentToStore = value;
  }
  public resetSentToStore() {
    this._sentToStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentToStoreInput() {
    return this._sentToStore;
  }

  // sent_to_store_fail - computed: false, optional: true, required: false
  private _sentToStoreFail?: number; 
  public get sentToStoreFail() {
    return this.getNumberAttribute('sent_to_store_fail');
  }
  public set sentToStoreFail(value: number) {
    this._sentToStoreFail = value;
  }
  public resetSentToStoreFail() {
    this._sentToStoreFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentToStoreFailInput() {
    return this._sentToStoreFail;
  }

  // store_fail - computed: false, optional: true, required: false
  private _storeFail?: number; 
  public get storeFail() {
    return this.getNumberAttribute('store_fail');
  }
  public set storeFail(value: number) {
    this._storeFail = value;
  }
  public resetStoreFail() {
    this._storeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeFailInput() {
    return this._storeFail;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats thunder_acos_events_local_logging_stats}
*/
export class DataThunderAcosEventsLocalLoggingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_local_logging_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAcosEventsLocalLoggingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAcosEventsLocalLoggingStats to import
  * @param importFromId The id of the existing DataThunderAcosEventsLocalLoggingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAcosEventsLocalLoggingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_local_logging_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_local_logging_stats thunder_acos_events_local_logging_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAcosEventsLocalLoggingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAcosEventsLocalLoggingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_local_logging_stats',
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
  private _stats = new DataThunderAcosEventsLocalLoggingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAcosEventsLocalLoggingStatsStats) {
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
      stats: dataThunderAcosEventsLocalLoggingStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAcosEventsLocalLoggingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAcosEventsLocalLoggingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
