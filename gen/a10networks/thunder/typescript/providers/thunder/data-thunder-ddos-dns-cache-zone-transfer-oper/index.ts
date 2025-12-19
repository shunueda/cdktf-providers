// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDnsCacheZoneTransferOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dns_cache_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#dns_cache_name DataThunderDdosDnsCacheZoneTransferOper#dns_cache_name}
  */
  readonly dnsCacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#id DataThunderDdosDnsCacheZoneTransferOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#oper DataThunderDdosDnsCacheZoneTransferOper#oper}
  */
  readonly oper?: DataThunderDdosDnsCacheZoneTransferOperOper;
}
export interface DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct {
  /**
  * Total Cached FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#cached_fqdn DataThunderDdosDnsCacheZoneTransferOper#cached_fqdn}
  */
  readonly cachedFqdn?: number;
  /**
  * Total Cached FQDN in the Second Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#cached_fqdn_second_pass DataThunderDdosDnsCacheZoneTransferOper#cached_fqdn_second_pass}
  */
  readonly cachedFqdnSecondPass?: number;
  /**
  * DNS message pending Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#dns_message_pending_processed DataThunderDdosDnsCacheZoneTransferOper#dns_message_pending_processed}
  */
  readonly dnsMessagePendingProcessed?: number;
  /**
  * DNS Message Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#dns_message_processed DataThunderDdosDnsCacheZoneTransferOper#dns_message_processed}
  */
  readonly dnsMessageProcessed?: number;
  /**
  * Records Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#records_processed DataThunderDdosDnsCacheZoneTransferOper#records_processed}
  */
  readonly recordsProcessed?: number;
  /**
  * Serial Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#serial_number DataThunderDdosDnsCacheZoneTransferOper#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * TCP connection Begin Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#tcp_connection_begin_time DataThunderDdosDnsCacheZoneTransferOper#tcp_connection_begin_time}
  */
  readonly tcpConnectionBeginTime?: string;
  /**
  * TCP Connection End Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#tcp_connection_end_time DataThunderDdosDnsCacheZoneTransferOper#tcp_connection_end_time}
  */
  readonly tcpConnectionEndTime?: string;
  /**
  * Total Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#total_failure DataThunderDdosDnsCacheZoneTransferOper#total_failure}
  */
  readonly totalFailure?: string;
  /**
  * Total FQDN Node in Cache Instance Table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#total_node_in_table DataThunderDdosDnsCacheZoneTransferOper#total_node_in_table}
  */
  readonly totalNodeInTable?: number;
  /**
  * Update Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#update_status DataThunderDdosDnsCacheZoneTransferOper#update_status}
  */
  readonly updateStatus?: string;
  /**
  * Zone Transfer Begin Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_transfer_begin_time DataThunderDdosDnsCacheZoneTransferOper#zone_transfer_begin_time}
  */
  readonly zoneTransferBeginTime?: string;
  /**
  * Zone Transfer End Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_transfer_end_time DataThunderDdosDnsCacheZoneTransferOper#zone_transfer_end_time}
  */
  readonly zoneTransferEndTime?: string;
  /**
  * Zone Transfer Result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_transfer_result DataThunderDdosDnsCacheZoneTransferOper#zone_transfer_result}
  */
  readonly zoneTransferResult?: string;
}

export function dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructToTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached_fqdn: cdktf.numberToTerraform(struct!.cachedFqdn),
    cached_fqdn_second_pass: cdktf.numberToTerraform(struct!.cachedFqdnSecondPass),
    dns_message_pending_processed: cdktf.numberToTerraform(struct!.dnsMessagePendingProcessed),
    dns_message_processed: cdktf.numberToTerraform(struct!.dnsMessageProcessed),
    records_processed: cdktf.numberToTerraform(struct!.recordsProcessed),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    tcp_connection_begin_time: cdktf.stringToTerraform(struct!.tcpConnectionBeginTime),
    tcp_connection_end_time: cdktf.stringToTerraform(struct!.tcpConnectionEndTime),
    total_failure: cdktf.stringToTerraform(struct!.totalFailure),
    total_node_in_table: cdktf.numberToTerraform(struct!.totalNodeInTable),
    update_status: cdktf.stringToTerraform(struct!.updateStatus),
    zone_transfer_begin_time: cdktf.stringToTerraform(struct!.zoneTransferBeginTime),
    zone_transfer_end_time: cdktf.stringToTerraform(struct!.zoneTransferEndTime),
    zone_transfer_result: cdktf.stringToTerraform(struct!.zoneTransferResult),
  }
}


export function dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructToHclTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.cachedFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cached_fqdn_second_pass: {
      value: cdktf.numberToHclTerraform(struct!.cachedFqdnSecondPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_message_pending_processed: {
      value: cdktf.numberToHclTerraform(struct!.dnsMessagePendingProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_message_processed: {
      value: cdktf.numberToHclTerraform(struct!.dnsMessageProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    records_processed: {
      value: cdktf.numberToHclTerraform(struct!.recordsProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connection_begin_time: {
      value: cdktf.stringToHclTerraform(struct!.tcpConnectionBeginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connection_end_time: {
      value: cdktf.stringToHclTerraform(struct!.tcpConnectionEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_failure: {
      value: cdktf.stringToHclTerraform(struct!.totalFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_node_in_table: {
      value: cdktf.numberToHclTerraform(struct!.totalNodeInTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_status: {
      value: cdktf.stringToHclTerraform(struct!.updateStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_begin_time: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferBeginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_end_time: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_result: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedFqdn = this._cachedFqdn;
    }
    if (this._cachedFqdnSecondPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedFqdnSecondPass = this._cachedFqdnSecondPass;
    }
    if (this._dnsMessagePendingProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMessagePendingProcessed = this._dnsMessagePendingProcessed;
    }
    if (this._dnsMessageProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMessageProcessed = this._dnsMessageProcessed;
    }
    if (this._recordsProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordsProcessed = this._recordsProcessed;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._tcpConnectionBeginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionBeginTime = this._tcpConnectionBeginTime;
    }
    if (this._tcpConnectionEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionEndTime = this._tcpConnectionEndTime;
    }
    if (this._totalFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailure = this._totalFailure;
    }
    if (this._totalNodeInTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodeInTable = this._totalNodeInTable;
    }
    if (this._updateStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStatus = this._updateStatus;
    }
    if (this._zoneTransferBeginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferBeginTime = this._zoneTransferBeginTime;
    }
    if (this._zoneTransferEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferEndTime = this._zoneTransferEndTime;
    }
    if (this._zoneTransferResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferResult = this._zoneTransferResult;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedFqdn = undefined;
      this._cachedFqdnSecondPass = undefined;
      this._dnsMessagePendingProcessed = undefined;
      this._dnsMessageProcessed = undefined;
      this._recordsProcessed = undefined;
      this._serialNumber = undefined;
      this._tcpConnectionBeginTime = undefined;
      this._tcpConnectionEndTime = undefined;
      this._totalFailure = undefined;
      this._totalNodeInTable = undefined;
      this._updateStatus = undefined;
      this._zoneTransferBeginTime = undefined;
      this._zoneTransferEndTime = undefined;
      this._zoneTransferResult = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedFqdn = value.cachedFqdn;
      this._cachedFqdnSecondPass = value.cachedFqdnSecondPass;
      this._dnsMessagePendingProcessed = value.dnsMessagePendingProcessed;
      this._dnsMessageProcessed = value.dnsMessageProcessed;
      this._recordsProcessed = value.recordsProcessed;
      this._serialNumber = value.serialNumber;
      this._tcpConnectionBeginTime = value.tcpConnectionBeginTime;
      this._tcpConnectionEndTime = value.tcpConnectionEndTime;
      this._totalFailure = value.totalFailure;
      this._totalNodeInTable = value.totalNodeInTable;
      this._updateStatus = value.updateStatus;
      this._zoneTransferBeginTime = value.zoneTransferBeginTime;
      this._zoneTransferEndTime = value.zoneTransferEndTime;
      this._zoneTransferResult = value.zoneTransferResult;
    }
  }

  // cached_fqdn - computed: false, optional: true, required: false
  private _cachedFqdn?: number; 
  public get cachedFqdn() {
    return this.getNumberAttribute('cached_fqdn');
  }
  public set cachedFqdn(value: number) {
    this._cachedFqdn = value;
  }
  public resetCachedFqdn() {
    this._cachedFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedFqdnInput() {
    return this._cachedFqdn;
  }

  // cached_fqdn_second_pass - computed: false, optional: true, required: false
  private _cachedFqdnSecondPass?: number; 
  public get cachedFqdnSecondPass() {
    return this.getNumberAttribute('cached_fqdn_second_pass');
  }
  public set cachedFqdnSecondPass(value: number) {
    this._cachedFqdnSecondPass = value;
  }
  public resetCachedFqdnSecondPass() {
    this._cachedFqdnSecondPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedFqdnSecondPassInput() {
    return this._cachedFqdnSecondPass;
  }

  // dns_message_pending_processed - computed: false, optional: true, required: false
  private _dnsMessagePendingProcessed?: number; 
  public get dnsMessagePendingProcessed() {
    return this.getNumberAttribute('dns_message_pending_processed');
  }
  public set dnsMessagePendingProcessed(value: number) {
    this._dnsMessagePendingProcessed = value;
  }
  public resetDnsMessagePendingProcessed() {
    this._dnsMessagePendingProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMessagePendingProcessedInput() {
    return this._dnsMessagePendingProcessed;
  }

  // dns_message_processed - computed: false, optional: true, required: false
  private _dnsMessageProcessed?: number; 
  public get dnsMessageProcessed() {
    return this.getNumberAttribute('dns_message_processed');
  }
  public set dnsMessageProcessed(value: number) {
    this._dnsMessageProcessed = value;
  }
  public resetDnsMessageProcessed() {
    this._dnsMessageProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMessageProcessedInput() {
    return this._dnsMessageProcessed;
  }

  // records_processed - computed: false, optional: true, required: false
  private _recordsProcessed?: number; 
  public get recordsProcessed() {
    return this.getNumberAttribute('records_processed');
  }
  public set recordsProcessed(value: number) {
    this._recordsProcessed = value;
  }
  public resetRecordsProcessed() {
    this._recordsProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsProcessedInput() {
    return this._recordsProcessed;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // tcp_connection_begin_time - computed: false, optional: true, required: false
  private _tcpConnectionBeginTime?: string; 
  public get tcpConnectionBeginTime() {
    return this.getStringAttribute('tcp_connection_begin_time');
  }
  public set tcpConnectionBeginTime(value: string) {
    this._tcpConnectionBeginTime = value;
  }
  public resetTcpConnectionBeginTime() {
    this._tcpConnectionBeginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionBeginTimeInput() {
    return this._tcpConnectionBeginTime;
  }

  // tcp_connection_end_time - computed: false, optional: true, required: false
  private _tcpConnectionEndTime?: string; 
  public get tcpConnectionEndTime() {
    return this.getStringAttribute('tcp_connection_end_time');
  }
  public set tcpConnectionEndTime(value: string) {
    this._tcpConnectionEndTime = value;
  }
  public resetTcpConnectionEndTime() {
    this._tcpConnectionEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionEndTimeInput() {
    return this._tcpConnectionEndTime;
  }

  // total_failure - computed: false, optional: true, required: false
  private _totalFailure?: string; 
  public get totalFailure() {
    return this.getStringAttribute('total_failure');
  }
  public set totalFailure(value: string) {
    this._totalFailure = value;
  }
  public resetTotalFailure() {
    this._totalFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailureInput() {
    return this._totalFailure;
  }

  // total_node_in_table - computed: false, optional: true, required: false
  private _totalNodeInTable?: number; 
  public get totalNodeInTable() {
    return this.getNumberAttribute('total_node_in_table');
  }
  public set totalNodeInTable(value: number) {
    this._totalNodeInTable = value;
  }
  public resetTotalNodeInTable() {
    this._totalNodeInTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodeInTableInput() {
    return this._totalNodeInTable;
  }

  // update_status - computed: false, optional: true, required: false
  private _updateStatus?: string; 
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
  public set updateStatus(value: string) {
    this._updateStatus = value;
  }
  public resetUpdateStatus() {
    this._updateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStatusInput() {
    return this._updateStatus;
  }

  // zone_transfer_begin_time - computed: false, optional: true, required: false
  private _zoneTransferBeginTime?: string; 
  public get zoneTransferBeginTime() {
    return this.getStringAttribute('zone_transfer_begin_time');
  }
  public set zoneTransferBeginTime(value: string) {
    this._zoneTransferBeginTime = value;
  }
  public resetZoneTransferBeginTime() {
    this._zoneTransferBeginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferBeginTimeInput() {
    return this._zoneTransferBeginTime;
  }

  // zone_transfer_end_time - computed: false, optional: true, required: false
  private _zoneTransferEndTime?: string; 
  public get zoneTransferEndTime() {
    return this.getStringAttribute('zone_transfer_end_time');
  }
  public set zoneTransferEndTime(value: string) {
    this._zoneTransferEndTime = value;
  }
  public resetZoneTransferEndTime() {
    this._zoneTransferEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferEndTimeInput() {
    return this._zoneTransferEndTime;
  }

  // zone_transfer_result - computed: false, optional: true, required: false
  private _zoneTransferResult?: string; 
  public get zoneTransferResult() {
    return this.getStringAttribute('zone_transfer_result');
  }
  public set zoneTransferResult(value: string) {
    this._zoneTransferResult = value;
  }
  public resetZoneTransferResult() {
    this._zoneTransferResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferResultInput() {
    return this._zoneTransferResult;
  }
}

export class DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructOutputReference {
    return new DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#stats_count DataThunderDdosDnsCacheZoneTransferOper#stats_count}
  */
  readonly statsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#stats_name DataThunderDdosDnsCacheZoneTransferOper#stats_name}
  */
  readonly statsName?: string;
}

export function dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsToTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats_count: cdktf.numberToTerraform(struct!.statsCount),
    stats_name: cdktf.stringToTerraform(struct!.statsName),
  }
}


export function dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsToHclTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats_count: {
      value: cdktf.numberToHclTerraform(struct!.statsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_name: {
      value: cdktf.stringToHclTerraform(struct!.statsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsCount = this._statsCount;
    }
    if (this._statsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsName = this._statsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statsCount = undefined;
      this._statsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statsCount = value.statsCount;
      this._statsName = value.statsName;
    }
  }

  // stats_count - computed: false, optional: true, required: false
  private _statsCount?: number; 
  public get statsCount() {
    return this.getNumberAttribute('stats_count');
  }
  public set statsCount(value: number) {
    this._statsCount = value;
  }
  public resetStatsCount() {
    this._statsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsCountInput() {
    return this._statsCount;
  }

  // stats_name - computed: false, optional: true, required: false
  private _statsName?: string; 
  public get statsName() {
    return this.getStringAttribute('stats_name');
  }
  public set statsName(value: string) {
    this._statsName = value;
  }
  public resetStatsName() {
    this._statsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsNameInput() {
    return this._statsName;
  }
}

export class DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsOutputReference {
    return new DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct {
  /**
  * Estimated Next Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#estimated_next_update DataThunderDdosDnsCacheZoneTransferOper#estimated_next_update}
  */
  readonly estimatedNextUpdate?: string;
  /**
  * Last Complete Serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#last_complete_serial DataThunderDdosDnsCacheZoneTransferOper#last_complete_serial}
  */
  readonly lastCompleteSerial?: string;
  /**
  * Last Complete Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#last_complete_update DataThunderDdosDnsCacheZoneTransferOper#last_complete_update}
  */
  readonly lastCompleteUpdate?: string;
  /**
  * Last Update Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#last_update DataThunderDdosDnsCacheZoneTransferOper#last_update}
  */
  readonly lastUpdate?: string;
  /**
  * Remaining Seconds Before Expiring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#remain_expiration_time DataThunderDdosDnsCacheZoneTransferOper#remain_expiration_time}
  */
  readonly remainExpirationTime?: string;
  /**
  * Sflow Source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#sflow_source_id DataThunderDdosDnsCacheZoneTransferOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_name DataThunderDdosDnsCacheZoneTransferOper#zone_name}
  */
  readonly zoneName?: string;
}

export function dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructToTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    estimated_next_update: cdktf.stringToTerraform(struct!.estimatedNextUpdate),
    last_complete_serial: cdktf.stringToTerraform(struct!.lastCompleteSerial),
    last_complete_update: cdktf.stringToTerraform(struct!.lastCompleteUpdate),
    last_update: cdktf.stringToTerraform(struct!.lastUpdate),
    remain_expiration_time: cdktf.stringToTerraform(struct!.remainExpirationTime),
    sflow_source_id: cdktf.stringToTerraform(struct!.sflowSourceId),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructToHclTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    estimated_next_update: {
      value: cdktf.stringToHclTerraform(struct!.estimatedNextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_complete_serial: {
      value: cdktf.stringToHclTerraform(struct!.lastCompleteSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_complete_update: {
      value: cdktf.stringToHclTerraform(struct!.lastCompleteUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_update: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remain_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.remainExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimatedNextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedNextUpdate = this._estimatedNextUpdate;
    }
    if (this._lastCompleteSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCompleteSerial = this._lastCompleteSerial;
    }
    if (this._lastCompleteUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCompleteUpdate = this._lastCompleteUpdate;
    }
    if (this._lastUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdate = this._lastUpdate;
    }
    if (this._remainExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainExpirationTime = this._remainExpirationTime;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._estimatedNextUpdate = undefined;
      this._lastCompleteSerial = undefined;
      this._lastCompleteUpdate = undefined;
      this._lastUpdate = undefined;
      this._remainExpirationTime = undefined;
      this._sflowSourceId = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._estimatedNextUpdate = value.estimatedNextUpdate;
      this._lastCompleteSerial = value.lastCompleteSerial;
      this._lastCompleteUpdate = value.lastCompleteUpdate;
      this._lastUpdate = value.lastUpdate;
      this._remainExpirationTime = value.remainExpirationTime;
      this._sflowSourceId = value.sflowSourceId;
      this._zoneName = value.zoneName;
    }
  }

  // estimated_next_update - computed: false, optional: true, required: false
  private _estimatedNextUpdate?: string; 
  public get estimatedNextUpdate() {
    return this.getStringAttribute('estimated_next_update');
  }
  public set estimatedNextUpdate(value: string) {
    this._estimatedNextUpdate = value;
  }
  public resetEstimatedNextUpdate() {
    this._estimatedNextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedNextUpdateInput() {
    return this._estimatedNextUpdate;
  }

  // last_complete_serial - computed: false, optional: true, required: false
  private _lastCompleteSerial?: string; 
  public get lastCompleteSerial() {
    return this.getStringAttribute('last_complete_serial');
  }
  public set lastCompleteSerial(value: string) {
    this._lastCompleteSerial = value;
  }
  public resetLastCompleteSerial() {
    this._lastCompleteSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCompleteSerialInput() {
    return this._lastCompleteSerial;
  }

  // last_complete_update - computed: false, optional: true, required: false
  private _lastCompleteUpdate?: string; 
  public get lastCompleteUpdate() {
    return this.getStringAttribute('last_complete_update');
  }
  public set lastCompleteUpdate(value: string) {
    this._lastCompleteUpdate = value;
  }
  public resetLastCompleteUpdate() {
    this._lastCompleteUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCompleteUpdateInput() {
    return this._lastCompleteUpdate;
  }

  // last_update - computed: false, optional: true, required: false
  private _lastUpdate?: string; 
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }
  public set lastUpdate(value: string) {
    this._lastUpdate = value;
  }
  public resetLastUpdate() {
    this._lastUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateInput() {
    return this._lastUpdate;
  }

  // remain_expiration_time - computed: false, optional: true, required: false
  private _remainExpirationTime?: string; 
  public get remainExpirationTime() {
    return this.getStringAttribute('remain_expiration_time');
  }
  public set remainExpirationTime(value: string) {
    this._remainExpirationTime = value;
  }
  public resetRemainExpirationTime() {
    this._remainExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainExpirationTimeInput() {
    return this._remainExpirationTime;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: string; 
  public get sflowSourceId() {
    return this.getStringAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: string) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructOutputReference {
    return new DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheZoneTransferOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#debug_mode DataThunderDdosDnsCacheZoneTransferOper#debug_mode}
  */
  readonly debugMode?: number;
  /**
  * Estimated Next Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#estimated_next_update DataThunderDdosDnsCacheZoneTransferOper#estimated_next_update}
  */
  readonly estimatedNextUpdate?: string;
  /**
  * Local IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#local_ip DataThunderDdosDnsCacheZoneTransferOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Remaining Seconds Before Expiring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#remain_expiration_time DataThunderDdosDnsCacheZoneTransferOper#remain_expiration_time}
  */
  readonly remainExpirationTime?: string;
  /**
  * Remote IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#remote_ip DataThunderDdosDnsCacheZoneTransferOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Sflow Source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#sflow_source_id DataThunderDdosDnsCacheZoneTransferOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#statistics DataThunderDdosDnsCacheZoneTransferOper#statistics}
  */
  readonly statistics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#status DataThunderDdosDnsCacheZoneTransferOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#total_fqdn_in_table DataThunderDdosDnsCacheZoneTransferOper#total_fqdn_in_table}
  */
  readonly totalFqdnInTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone DataThunderDdosDnsCacheZoneTransferOper#zone}
  */
  readonly zone?: string;
  /**
  * Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_name DataThunderDdosDnsCacheZoneTransferOper#zone_name}
  */
  readonly zoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zt_statistics DataThunderDdosDnsCacheZoneTransferOper#zt_statistics}
  */
  readonly ztStatistics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zts_sflow_source_id DataThunderDdosDnsCacheZoneTransferOper#zts_sflow_source_id}
  */
  readonly ztsSflowSourceId?: string;
  /**
  * zone_transfer_history_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_transfer_history_list DataThunderDdosDnsCacheZoneTransferOper#zone_transfer_history_list}
  */
  readonly zoneTransferHistoryList?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct[] | cdktf.IResolvable;
  /**
  * zone_transfer_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_transfer_statistics DataThunderDdosDnsCacheZoneTransferOper#zone_transfer_statistics}
  */
  readonly zoneTransferStatistics?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics[] | cdktf.IResolvable;
  /**
  * zone_transfer_status_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#zone_transfer_status_list DataThunderDdosDnsCacheZoneTransferOper#zone_transfer_status_list}
  */
  readonly zoneTransferStatusList?: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDnsCacheZoneTransferOperOperToTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperOutputReference | DataThunderDdosDnsCacheZoneTransferOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_mode: cdktf.numberToTerraform(struct!.debugMode),
    estimated_next_update: cdktf.stringToTerraform(struct!.estimatedNextUpdate),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    remain_expiration_time: cdktf.stringToTerraform(struct!.remainExpirationTime),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    sflow_source_id: cdktf.stringToTerraform(struct!.sflowSourceId),
    statistics: cdktf.numberToTerraform(struct!.statistics),
    status: cdktf.stringToTerraform(struct!.status),
    total_fqdn_in_table: cdktf.stringToTerraform(struct!.totalFqdnInTable),
    zone: cdktf.stringToTerraform(struct!.zone),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
    zt_statistics: cdktf.numberToTerraform(struct!.ztStatistics),
    zts_sflow_source_id: cdktf.stringToTerraform(struct!.ztsSflowSourceId),
    zone_transfer_history_list: cdktf.listMapper(dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructToTerraform, true)(struct!.zoneTransferHistoryList),
    zone_transfer_statistics: cdktf.listMapper(dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsToTerraform, true)(struct!.zoneTransferStatistics),
    zone_transfer_status_list: cdktf.listMapper(dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructToTerraform, true)(struct!.zoneTransferStatusList),
  }
}


export function dataThunderDdosDnsCacheZoneTransferOperOperToHclTerraform(struct?: DataThunderDdosDnsCacheZoneTransferOperOperOutputReference | DataThunderDdosDnsCacheZoneTransferOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_mode: {
      value: cdktf.numberToHclTerraform(struct!.debugMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    estimated_next_update: {
      value: cdktf.stringToHclTerraform(struct!.estimatedNextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remain_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.remainExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.numberToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_fqdn_in_table: {
      value: cdktf.stringToHclTerraform(struct!.totalFqdnInTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zt_statistics: {
      value: cdktf.numberToHclTerraform(struct!.ztStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zts_sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.ztsSflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_history_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructToHclTerraform, true)(struct!.zoneTransferHistoryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructList",
    },
    zone_transfer_statistics: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsToHclTerraform, true)(struct!.zoneTransferStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsList",
    },
    zone_transfer_status_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructToHclTerraform, true)(struct!.zoneTransferStatusList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheZoneTransferOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsCacheZoneTransferOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMode = this._debugMode;
    }
    if (this._estimatedNextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedNextUpdate = this._estimatedNextUpdate;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._remainExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainExpirationTime = this._remainExpirationTime;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._totalFqdnInTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFqdnInTable = this._totalFqdnInTable;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    if (this._ztStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztStatistics = this._ztStatistics;
    }
    if (this._ztsSflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztsSflowSourceId = this._ztsSflowSourceId;
    }
    if (this._zoneTransferHistoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferHistoryList = this._zoneTransferHistoryList?.internalValue;
    }
    if (this._zoneTransferStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferStatistics = this._zoneTransferStatistics?.internalValue;
    }
    if (this._zoneTransferStatusList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferStatusList = this._zoneTransferStatusList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheZoneTransferOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugMode = undefined;
      this._estimatedNextUpdate = undefined;
      this._localIp = undefined;
      this._remainExpirationTime = undefined;
      this._remoteIp = undefined;
      this._sflowSourceId = undefined;
      this._statistics = undefined;
      this._status = undefined;
      this._totalFqdnInTable = undefined;
      this._zone = undefined;
      this._zoneName = undefined;
      this._ztStatistics = undefined;
      this._ztsSflowSourceId = undefined;
      this._zoneTransferHistoryList.internalValue = undefined;
      this._zoneTransferStatistics.internalValue = undefined;
      this._zoneTransferStatusList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugMode = value.debugMode;
      this._estimatedNextUpdate = value.estimatedNextUpdate;
      this._localIp = value.localIp;
      this._remainExpirationTime = value.remainExpirationTime;
      this._remoteIp = value.remoteIp;
      this._sflowSourceId = value.sflowSourceId;
      this._statistics = value.statistics;
      this._status = value.status;
      this._totalFqdnInTable = value.totalFqdnInTable;
      this._zone = value.zone;
      this._zoneName = value.zoneName;
      this._ztStatistics = value.ztStatistics;
      this._ztsSflowSourceId = value.ztsSflowSourceId;
      this._zoneTransferHistoryList.internalValue = value.zoneTransferHistoryList;
      this._zoneTransferStatistics.internalValue = value.zoneTransferStatistics;
      this._zoneTransferStatusList.internalValue = value.zoneTransferStatusList;
    }
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: number; 
  public get debugMode() {
    return this.getNumberAttribute('debug_mode');
  }
  public set debugMode(value: number) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // estimated_next_update - computed: false, optional: true, required: false
  private _estimatedNextUpdate?: string; 
  public get estimatedNextUpdate() {
    return this.getStringAttribute('estimated_next_update');
  }
  public set estimatedNextUpdate(value: string) {
    this._estimatedNextUpdate = value;
  }
  public resetEstimatedNextUpdate() {
    this._estimatedNextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedNextUpdateInput() {
    return this._estimatedNextUpdate;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // remain_expiration_time - computed: false, optional: true, required: false
  private _remainExpirationTime?: string; 
  public get remainExpirationTime() {
    return this.getStringAttribute('remain_expiration_time');
  }
  public set remainExpirationTime(value: string) {
    this._remainExpirationTime = value;
  }
  public resetRemainExpirationTime() {
    this._remainExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainExpirationTimeInput() {
    return this._remainExpirationTime;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: string; 
  public get sflowSourceId() {
    return this.getStringAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: string) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: number; 
  public get statistics() {
    return this.getNumberAttribute('statistics');
  }
  public set statistics(value: number) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // total_fqdn_in_table - computed: false, optional: true, required: false
  private _totalFqdnInTable?: string; 
  public get totalFqdnInTable() {
    return this.getStringAttribute('total_fqdn_in_table');
  }
  public set totalFqdnInTable(value: string) {
    this._totalFqdnInTable = value;
  }
  public resetTotalFqdnInTable() {
    this._totalFqdnInTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFqdnInTableInput() {
    return this._totalFqdnInTable;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // zt_statistics - computed: false, optional: true, required: false
  private _ztStatistics?: number; 
  public get ztStatistics() {
    return this.getNumberAttribute('zt_statistics');
  }
  public set ztStatistics(value: number) {
    this._ztStatistics = value;
  }
  public resetZtStatistics() {
    this._ztStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztStatisticsInput() {
    return this._ztStatistics;
  }

  // zts_sflow_source_id - computed: false, optional: true, required: false
  private _ztsSflowSourceId?: string; 
  public get ztsSflowSourceId() {
    return this.getStringAttribute('zts_sflow_source_id');
  }
  public set ztsSflowSourceId(value: string) {
    this._ztsSflowSourceId = value;
  }
  public resetZtsSflowSourceId() {
    this._ztsSflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztsSflowSourceIdInput() {
    return this._ztsSflowSourceId;
  }

  // zone_transfer_history_list - computed: false, optional: true, required: false
  private _zoneTransferHistoryList = new DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStructList(this, "zone_transfer_history_list", false);
  public get zoneTransferHistoryList() {
    return this._zoneTransferHistoryList;
  }
  public putZoneTransferHistoryList(value: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferHistoryListStruct[] | cdktf.IResolvable) {
    this._zoneTransferHistoryList.internalValue = value;
  }
  public resetZoneTransferHistoryList() {
    this._zoneTransferHistoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferHistoryListInput() {
    return this._zoneTransferHistoryList.internalValue;
  }

  // zone_transfer_statistics - computed: false, optional: true, required: false
  private _zoneTransferStatistics = new DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatisticsList(this, "zone_transfer_statistics", false);
  public get zoneTransferStatistics() {
    return this._zoneTransferStatistics;
  }
  public putZoneTransferStatistics(value: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatistics[] | cdktf.IResolvable) {
    this._zoneTransferStatistics.internalValue = value;
  }
  public resetZoneTransferStatistics() {
    this._zoneTransferStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferStatisticsInput() {
    return this._zoneTransferStatistics.internalValue;
  }

  // zone_transfer_status_list - computed: false, optional: true, required: false
  private _zoneTransferStatusList = new DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStructList(this, "zone_transfer_status_list", false);
  public get zoneTransferStatusList() {
    return this._zoneTransferStatusList;
  }
  public putZoneTransferStatusList(value: DataThunderDdosDnsCacheZoneTransferOperOperZoneTransferStatusListStruct[] | cdktf.IResolvable) {
    this._zoneTransferStatusList.internalValue = value;
  }
  public resetZoneTransferStatusList() {
    this._zoneTransferStatusList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferStatusListInput() {
    return this._zoneTransferStatusList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper thunder_ddos_dns_cache_zone_transfer_oper}
*/
export class DataThunderDdosDnsCacheZoneTransferOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_zone_transfer_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDnsCacheZoneTransferOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDnsCacheZoneTransferOper to import
  * @param importFromId The id of the existing DataThunderDdosDnsCacheZoneTransferOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDnsCacheZoneTransferOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_zone_transfer_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_zone_transfer_oper thunder_ddos_dns_cache_zone_transfer_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDnsCacheZoneTransferOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDnsCacheZoneTransferOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_zone_transfer_oper',
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
    this._dnsCacheName = config.dnsCacheName;
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_cache_name - computed: false, optional: false, required: true
  private _dnsCacheName?: string; 
  public get dnsCacheName() {
    return this.getStringAttribute('dns_cache_name');
  }
  public set dnsCacheName(value: string) {
    this._dnsCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheNameInput() {
    return this._dnsCacheName;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDnsCacheZoneTransferOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDnsCacheZoneTransferOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_cache_name: cdktf.stringToTerraform(this._dnsCacheName),
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDdosDnsCacheZoneTransferOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_cache_name: {
        value: cdktf.stringToHclTerraform(this._dnsCacheName),
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
      oper: {
        value: dataThunderDdosDnsCacheZoneTransferOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDnsCacheZoneTransferOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
