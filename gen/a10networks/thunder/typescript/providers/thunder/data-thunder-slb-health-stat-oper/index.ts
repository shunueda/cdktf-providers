// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHealthStatOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#id DataThunderSlbHealthStatOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#oper DataThunderSlbHealthStatOper#oper}
  */
  readonly oper?: DataThunderSlbHealthStatOperOper;
}
export interface DataThunderSlbHealthStatOperOperHealthCheckListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#down_cause DataThunderSlbHealthStatOper#down_cause}
  */
  readonly downCause?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#down_state DataThunderSlbHealthStatOper#down_state}
  */
  readonly downState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#health_monitor DataThunderSlbHealthStatOper#health_monitor}
  */
  readonly healthMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#ip_address DataThunderSlbHealthStatOper#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#partition_id DataThunderSlbHealthStatOper#partition_id}
  */
  readonly partitionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#port DataThunderSlbHealthStatOper#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#reason DataThunderSlbHealthStatOper#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#retries DataThunderSlbHealthStatOper#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#server DataThunderSlbHealthStatOper#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#ssl_cipher DataThunderSlbHealthStatOper#ssl_cipher}
  */
  readonly sslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#ssl_ticket DataThunderSlbHealthStatOper#ssl_ticket}
  */
  readonly sslTicket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#ssl_version DataThunderSlbHealthStatOper#ssl_version}
  */
  readonly sslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#status DataThunderSlbHealthStatOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#total_retry DataThunderSlbHealthStatOper#total_retry}
  */
  readonly totalRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#up_cause DataThunderSlbHealthStatOper#up_cause}
  */
  readonly upCause?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#up_retries DataThunderSlbHealthStatOper#up_retries}
  */
  readonly upRetries?: number;
}

export function dataThunderSlbHealthStatOperOperHealthCheckListStructToTerraform(struct?: DataThunderSlbHealthStatOperOperHealthCheckListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_cause: cdktf.numberToTerraform(struct!.downCause),
    down_state: cdktf.numberToTerraform(struct!.downState),
    health_monitor: cdktf.stringToTerraform(struct!.healthMonitor),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    partition_id: cdktf.numberToTerraform(struct!.partitionId),
    port: cdktf.stringToTerraform(struct!.port),
    reason: cdktf.stringToTerraform(struct!.reason),
    retries: cdktf.numberToTerraform(struct!.retries),
    server: cdktf.stringToTerraform(struct!.server),
    ssl_cipher: cdktf.stringToTerraform(struct!.sslCipher),
    ssl_ticket: cdktf.numberToTerraform(struct!.sslTicket),
    ssl_version: cdktf.stringToTerraform(struct!.sslVersion),
    status: cdktf.stringToTerraform(struct!.status),
    total_retry: cdktf.numberToTerraform(struct!.totalRetry),
    up_cause: cdktf.numberToTerraform(struct!.upCause),
    up_retries: cdktf.numberToTerraform(struct!.upRetries),
  }
}


export function dataThunderSlbHealthStatOperOperHealthCheckListStructToHclTerraform(struct?: DataThunderSlbHealthStatOperOperHealthCheckListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_cause: {
      value: cdktf.numberToHclTerraform(struct!.downCause),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    down_state: {
      value: cdktf.numberToHclTerraform(struct!.downState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_monitor: {
      value: cdktf.stringToHclTerraform(struct!.healthMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_id: {
      value: cdktf.numberToHclTerraform(struct!.partitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_cipher: {
      value: cdktf.stringToHclTerraform(struct!.sslCipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ticket: {
      value: cdktf.numberToHclTerraform(struct!.sslTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_version: {
      value: cdktf.stringToHclTerraform(struct!.sslVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_retry: {
      value: cdktf.numberToHclTerraform(struct!.totalRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_cause: {
      value: cdktf.numberToHclTerraform(struct!.upCause),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_retries: {
      value: cdktf.numberToHclTerraform(struct!.upRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthStatOperOperHealthCheckListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbHealthStatOperOperHealthCheckListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downCause !== undefined) {
      hasAnyValues = true;
      internalValueResult.downCause = this._downCause;
    }
    if (this._downState !== undefined) {
      hasAnyValues = true;
      internalValueResult.downState = this._downState;
    }
    if (this._healthMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitor = this._healthMonitor;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._partitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionId = this._partitionId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._sslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipher = this._sslCipher;
    }
    if (this._sslTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTicket = this._sslTicket;
    }
    if (this._sslVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVersion = this._sslVersion;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._totalRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRetry = this._totalRetry;
    }
    if (this._upCause !== undefined) {
      hasAnyValues = true;
      internalValueResult.upCause = this._upCause;
    }
    if (this._upRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.upRetries = this._upRetries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthStatOperOperHealthCheckListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downCause = undefined;
      this._downState = undefined;
      this._healthMonitor = undefined;
      this._ipAddress = undefined;
      this._partitionId = undefined;
      this._port = undefined;
      this._reason = undefined;
      this._retries = undefined;
      this._server = undefined;
      this._sslCipher = undefined;
      this._sslTicket = undefined;
      this._sslVersion = undefined;
      this._status = undefined;
      this._totalRetry = undefined;
      this._upCause = undefined;
      this._upRetries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downCause = value.downCause;
      this._downState = value.downState;
      this._healthMonitor = value.healthMonitor;
      this._ipAddress = value.ipAddress;
      this._partitionId = value.partitionId;
      this._port = value.port;
      this._reason = value.reason;
      this._retries = value.retries;
      this._server = value.server;
      this._sslCipher = value.sslCipher;
      this._sslTicket = value.sslTicket;
      this._sslVersion = value.sslVersion;
      this._status = value.status;
      this._totalRetry = value.totalRetry;
      this._upCause = value.upCause;
      this._upRetries = value.upRetries;
    }
  }

  // down_cause - computed: false, optional: true, required: false
  private _downCause?: number; 
  public get downCause() {
    return this.getNumberAttribute('down_cause');
  }
  public set downCause(value: number) {
    this._downCause = value;
  }
  public resetDownCause() {
    this._downCause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downCauseInput() {
    return this._downCause;
  }

  // down_state - computed: false, optional: true, required: false
  private _downState?: number; 
  public get downState() {
    return this.getNumberAttribute('down_state');
  }
  public set downState(value: number) {
    this._downState = value;
  }
  public resetDownState() {
    this._downState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downStateInput() {
    return this._downState;
  }

  // health_monitor - computed: false, optional: true, required: false
  private _healthMonitor?: string; 
  public get healthMonitor() {
    return this.getStringAttribute('health_monitor');
  }
  public set healthMonitor(value: string) {
    this._healthMonitor = value;
  }
  public resetHealthMonitor() {
    this._healthMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInput() {
    return this._healthMonitor;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // partition_id - computed: false, optional: true, required: false
  private _partitionId?: number; 
  public get partitionId() {
    return this.getNumberAttribute('partition_id');
  }
  public set partitionId(value: number) {
    this._partitionId = value;
  }
  public resetPartitionId() {
    this._partitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIdInput() {
    return this._partitionId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
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

  // ssl_cipher - computed: false, optional: true, required: false
  private _sslCipher?: string; 
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }
  public set sslCipher(value: string) {
    this._sslCipher = value;
  }
  public resetSslCipher() {
    this._sslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherInput() {
    return this._sslCipher;
  }

  // ssl_ticket - computed: false, optional: true, required: false
  private _sslTicket?: number; 
  public get sslTicket() {
    return this.getNumberAttribute('ssl_ticket');
  }
  public set sslTicket(value: number) {
    this._sslTicket = value;
  }
  public resetSslTicket() {
    this._sslTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTicketInput() {
    return this._sslTicket;
  }

  // ssl_version - computed: false, optional: true, required: false
  private _sslVersion?: string; 
  public get sslVersion() {
    return this.getStringAttribute('ssl_version');
  }
  public set sslVersion(value: string) {
    this._sslVersion = value;
  }
  public resetSslVersion() {
    this._sslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVersionInput() {
    return this._sslVersion;
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

  // total_retry - computed: false, optional: true, required: false
  private _totalRetry?: number; 
  public get totalRetry() {
    return this.getNumberAttribute('total_retry');
  }
  public set totalRetry(value: number) {
    this._totalRetry = value;
  }
  public resetTotalRetry() {
    this._totalRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRetryInput() {
    return this._totalRetry;
  }

  // up_cause - computed: false, optional: true, required: false
  private _upCause?: number; 
  public get upCause() {
    return this.getNumberAttribute('up_cause');
  }
  public set upCause(value: number) {
    this._upCause = value;
  }
  public resetUpCause() {
    this._upCause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upCauseInput() {
    return this._upCause;
  }

  // up_retries - computed: false, optional: true, required: false
  private _upRetries?: number; 
  public get upRetries() {
    return this.getNumberAttribute('up_retries');
  }
  public set upRetries(value: number) {
    this._upRetries = value;
  }
  public resetUpRetries() {
    this._upRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetriesInput() {
    return this._upRetries;
  }
}

export class DataThunderSlbHealthStatOperOperHealthCheckListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbHealthStatOperOperHealthCheckListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbHealthStatOperOperHealthCheckListStructOutputReference {
    return new DataThunderSlbHealthStatOperOperHealthCheckListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbHealthStatOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#clear_ssl_ticket DataThunderSlbHealthStatOper#clear_ssl_ticket}
  */
  readonly clearSslTicket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#method DataThunderSlbHealthStatOper#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#monitor DataThunderSlbHealthStatOper#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#num_pins DataThunderSlbHealthStatOper#num_pins}
  */
  readonly numPins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#num_pins_stat_down DataThunderSlbHealthStatOper#num_pins_stat_down}
  */
  readonly numPinsStatDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#num_pins_stat_else DataThunderSlbHealthStatOper#num_pins_stat_else}
  */
  readonly numPinsStatElse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#num_pins_stat_unkn DataThunderSlbHealthStatOper#num_pins_stat_unkn}
  */
  readonly numPinsStatUnkn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#num_pins_stat_up DataThunderSlbHealthStatOper#num_pins_stat_up}
  */
  readonly numPinsStatUp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#num_ssl_tickets DataThunderSlbHealthStatOper#num_ssl_tickets}
  */
  readonly numSslTickets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#total_stat DataThunderSlbHealthStatOper#total_stat}
  */
  readonly totalStat?: number;
  /**
  * health_check_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#health_check_list DataThunderSlbHealthStatOper#health_check_list}
  */
  readonly healthCheckList?: DataThunderSlbHealthStatOperOperHealthCheckListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbHealthStatOperOperToTerraform(struct?: DataThunderSlbHealthStatOperOperOutputReference | DataThunderSlbHealthStatOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_ssl_ticket: cdktf.numberToTerraform(struct!.clearSslTicket),
    method: cdktf.stringToTerraform(struct!.method),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    num_pins: cdktf.numberToTerraform(struct!.numPins),
    num_pins_stat_down: cdktf.numberToTerraform(struct!.numPinsStatDown),
    num_pins_stat_else: cdktf.numberToTerraform(struct!.numPinsStatElse),
    num_pins_stat_unkn: cdktf.numberToTerraform(struct!.numPinsStatUnkn),
    num_pins_stat_up: cdktf.numberToTerraform(struct!.numPinsStatUp),
    num_ssl_tickets: cdktf.numberToTerraform(struct!.numSslTickets),
    total_stat: cdktf.numberToTerraform(struct!.totalStat),
    health_check_list: cdktf.listMapper(dataThunderSlbHealthStatOperOperHealthCheckListStructToTerraform, true)(struct!.healthCheckList),
  }
}


export function dataThunderSlbHealthStatOperOperToHclTerraform(struct?: DataThunderSlbHealthStatOperOperOutputReference | DataThunderSlbHealthStatOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_ssl_ticket: {
      value: cdktf.numberToHclTerraform(struct!.clearSslTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_pins: {
      value: cdktf.numberToHclTerraform(struct!.numPins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pins_stat_down: {
      value: cdktf.numberToHclTerraform(struct!.numPinsStatDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pins_stat_else: {
      value: cdktf.numberToHclTerraform(struct!.numPinsStatElse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pins_stat_unkn: {
      value: cdktf.numberToHclTerraform(struct!.numPinsStatUnkn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_pins_stat_up: {
      value: cdktf.numberToHclTerraform(struct!.numPinsStatUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_ssl_tickets: {
      value: cdktf.numberToHclTerraform(struct!.numSslTickets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_stat: {
      value: cdktf.numberToHclTerraform(struct!.totalStat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_list: {
      value: cdktf.listMapperHcl(dataThunderSlbHealthStatOperOperHealthCheckListStructToHclTerraform, true)(struct!.healthCheckList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbHealthStatOperOperHealthCheckListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHealthStatOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHealthStatOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearSslTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSslTicket = this._clearSslTicket;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._numPins !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPins = this._numPins;
    }
    if (this._numPinsStatDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPinsStatDown = this._numPinsStatDown;
    }
    if (this._numPinsStatElse !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPinsStatElse = this._numPinsStatElse;
    }
    if (this._numPinsStatUnkn !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPinsStatUnkn = this._numPinsStatUnkn;
    }
    if (this._numPinsStatUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPinsStatUp = this._numPinsStatUp;
    }
    if (this._numSslTickets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSslTickets = this._numSslTickets;
    }
    if (this._totalStat !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalStat = this._totalStat;
    }
    if (this._healthCheckList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckList = this._healthCheckList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHealthStatOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clearSslTicket = undefined;
      this._method = undefined;
      this._monitor = undefined;
      this._numPins = undefined;
      this._numPinsStatDown = undefined;
      this._numPinsStatElse = undefined;
      this._numPinsStatUnkn = undefined;
      this._numPinsStatUp = undefined;
      this._numSslTickets = undefined;
      this._totalStat = undefined;
      this._healthCheckList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clearSslTicket = value.clearSslTicket;
      this._method = value.method;
      this._monitor = value.monitor;
      this._numPins = value.numPins;
      this._numPinsStatDown = value.numPinsStatDown;
      this._numPinsStatElse = value.numPinsStatElse;
      this._numPinsStatUnkn = value.numPinsStatUnkn;
      this._numPinsStatUp = value.numPinsStatUp;
      this._numSslTickets = value.numSslTickets;
      this._totalStat = value.totalStat;
      this._healthCheckList.internalValue = value.healthCheckList;
    }
  }

  // clear_ssl_ticket - computed: false, optional: true, required: false
  private _clearSslTicket?: number; 
  public get clearSslTicket() {
    return this.getNumberAttribute('clear_ssl_ticket');
  }
  public set clearSslTicket(value: number) {
    this._clearSslTicket = value;
  }
  public resetClearSslTicket() {
    this._clearSslTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSslTicketInput() {
    return this._clearSslTicket;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // num_pins - computed: false, optional: true, required: false
  private _numPins?: number; 
  public get numPins() {
    return this.getNumberAttribute('num_pins');
  }
  public set numPins(value: number) {
    this._numPins = value;
  }
  public resetNumPins() {
    this._numPins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPinsInput() {
    return this._numPins;
  }

  // num_pins_stat_down - computed: false, optional: true, required: false
  private _numPinsStatDown?: number; 
  public get numPinsStatDown() {
    return this.getNumberAttribute('num_pins_stat_down');
  }
  public set numPinsStatDown(value: number) {
    this._numPinsStatDown = value;
  }
  public resetNumPinsStatDown() {
    this._numPinsStatDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPinsStatDownInput() {
    return this._numPinsStatDown;
  }

  // num_pins_stat_else - computed: false, optional: true, required: false
  private _numPinsStatElse?: number; 
  public get numPinsStatElse() {
    return this.getNumberAttribute('num_pins_stat_else');
  }
  public set numPinsStatElse(value: number) {
    this._numPinsStatElse = value;
  }
  public resetNumPinsStatElse() {
    this._numPinsStatElse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPinsStatElseInput() {
    return this._numPinsStatElse;
  }

  // num_pins_stat_unkn - computed: false, optional: true, required: false
  private _numPinsStatUnkn?: number; 
  public get numPinsStatUnkn() {
    return this.getNumberAttribute('num_pins_stat_unkn');
  }
  public set numPinsStatUnkn(value: number) {
    this._numPinsStatUnkn = value;
  }
  public resetNumPinsStatUnkn() {
    this._numPinsStatUnkn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPinsStatUnknInput() {
    return this._numPinsStatUnkn;
  }

  // num_pins_stat_up - computed: false, optional: true, required: false
  private _numPinsStatUp?: number; 
  public get numPinsStatUp() {
    return this.getNumberAttribute('num_pins_stat_up');
  }
  public set numPinsStatUp(value: number) {
    this._numPinsStatUp = value;
  }
  public resetNumPinsStatUp() {
    this._numPinsStatUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPinsStatUpInput() {
    return this._numPinsStatUp;
  }

  // num_ssl_tickets - computed: false, optional: true, required: false
  private _numSslTickets?: number; 
  public get numSslTickets() {
    return this.getNumberAttribute('num_ssl_tickets');
  }
  public set numSslTickets(value: number) {
    this._numSslTickets = value;
  }
  public resetNumSslTickets() {
    this._numSslTickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSslTicketsInput() {
    return this._numSslTickets;
  }

  // total_stat - computed: false, optional: true, required: false
  private _totalStat?: number; 
  public get totalStat() {
    return this.getNumberAttribute('total_stat');
  }
  public set totalStat(value: number) {
    this._totalStat = value;
  }
  public resetTotalStat() {
    this._totalStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalStatInput() {
    return this._totalStat;
  }

  // health_check_list - computed: false, optional: true, required: false
  private _healthCheckList = new DataThunderSlbHealthStatOperOperHealthCheckListStructList(this, "health_check_list", false);
  public get healthCheckList() {
    return this._healthCheckList;
  }
  public putHealthCheckList(value: DataThunderSlbHealthStatOperOperHealthCheckListStruct[] | cdktf.IResolvable) {
    this._healthCheckList.internalValue = value;
  }
  public resetHealthCheckList() {
    this._healthCheckList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckListInput() {
    return this._healthCheckList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper thunder_slb_health_stat_oper}
*/
export class DataThunderSlbHealthStatOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_health_stat_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHealthStatOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHealthStatOper to import
  * @param importFromId The id of the existing DataThunderSlbHealthStatOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHealthStatOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_health_stat_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_health_stat_oper thunder_slb_health_stat_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHealthStatOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHealthStatOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_health_stat_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbHealthStatOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHealthStatOperOper) {
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
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbHealthStatOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbHealthStatOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHealthStatOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
