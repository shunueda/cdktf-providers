// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosLoggingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#id DataThunderDdosLoggingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#stats DataThunderDdosLoggingStats#stats}
  */
  readonly stats?: DataThunderDdosLoggingStatsStats;
}
export interface DataThunderDdosLoggingStatsStats {
  /**
  * Log Message Out of Memory Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#log_msg_oom DataThunderDdosLoggingStats#log_msg_oom}
  */
  readonly logMsgOom?: number;
  /**
  * Log Message Per CPU Quota Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#log_msg_quota_exceed DataThunderDdosLoggingStats#log_msg_quota_exceed}
  */
  readonly logMsgQuotaExceed?: number;
  /**
  * Log Message Send Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#log_msg_send_err DataThunderDdosLoggingStats#log_msg_send_err}
  */
  readonly logMsgSendErr?: number;
  /**
  * Log Message Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#log_msg_sent DataThunderDdosLoggingStats#log_msg_sent}
  */
  readonly logMsgSent?: number;
  /**
  * Log Message Queue Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#log_queue_full DataThunderDdosLoggingStats#log_queue_full}
  */
  readonly logQueueFull?: number;
}

export function dataThunderDdosLoggingStatsStatsToTerraform(struct?: DataThunderDdosLoggingStatsStatsOutputReference | DataThunderDdosLoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_msg_oom: cdktf.numberToTerraform(struct!.logMsgOom),
    log_msg_quota_exceed: cdktf.numberToTerraform(struct!.logMsgQuotaExceed),
    log_msg_send_err: cdktf.numberToTerraform(struct!.logMsgSendErr),
    log_msg_sent: cdktf.numberToTerraform(struct!.logMsgSent),
    log_queue_full: cdktf.numberToTerraform(struct!.logQueueFull),
  }
}


export function dataThunderDdosLoggingStatsStatsToHclTerraform(struct?: DataThunderDdosLoggingStatsStatsOutputReference | DataThunderDdosLoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_msg_oom: {
      value: cdktf.numberToHclTerraform(struct!.logMsgOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_msg_quota_exceed: {
      value: cdktf.numberToHclTerraform(struct!.logMsgQuotaExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_msg_send_err: {
      value: cdktf.numberToHclTerraform(struct!.logMsgSendErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_msg_sent: {
      value: cdktf.numberToHclTerraform(struct!.logMsgSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_queue_full: {
      value: cdktf.numberToHclTerraform(struct!.logQueueFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosLoggingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosLoggingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logMsgOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMsgOom = this._logMsgOom;
    }
    if (this._logMsgQuotaExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMsgQuotaExceed = this._logMsgQuotaExceed;
    }
    if (this._logMsgSendErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMsgSendErr = this._logMsgSendErr;
    }
    if (this._logMsgSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMsgSent = this._logMsgSent;
    }
    if (this._logQueueFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueueFull = this._logQueueFull;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosLoggingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logMsgOom = undefined;
      this._logMsgQuotaExceed = undefined;
      this._logMsgSendErr = undefined;
      this._logMsgSent = undefined;
      this._logQueueFull = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logMsgOom = value.logMsgOom;
      this._logMsgQuotaExceed = value.logMsgQuotaExceed;
      this._logMsgSendErr = value.logMsgSendErr;
      this._logMsgSent = value.logMsgSent;
      this._logQueueFull = value.logQueueFull;
    }
  }

  // log_msg_oom - computed: false, optional: true, required: false
  private _logMsgOom?: number; 
  public get logMsgOom() {
    return this.getNumberAttribute('log_msg_oom');
  }
  public set logMsgOom(value: number) {
    this._logMsgOom = value;
  }
  public resetLogMsgOom() {
    this._logMsgOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgOomInput() {
    return this._logMsgOom;
  }

  // log_msg_quota_exceed - computed: false, optional: true, required: false
  private _logMsgQuotaExceed?: number; 
  public get logMsgQuotaExceed() {
    return this.getNumberAttribute('log_msg_quota_exceed');
  }
  public set logMsgQuotaExceed(value: number) {
    this._logMsgQuotaExceed = value;
  }
  public resetLogMsgQuotaExceed() {
    this._logMsgQuotaExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgQuotaExceedInput() {
    return this._logMsgQuotaExceed;
  }

  // log_msg_send_err - computed: false, optional: true, required: false
  private _logMsgSendErr?: number; 
  public get logMsgSendErr() {
    return this.getNumberAttribute('log_msg_send_err');
  }
  public set logMsgSendErr(value: number) {
    this._logMsgSendErr = value;
  }
  public resetLogMsgSendErr() {
    this._logMsgSendErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgSendErrInput() {
    return this._logMsgSendErr;
  }

  // log_msg_sent - computed: false, optional: true, required: false
  private _logMsgSent?: number; 
  public get logMsgSent() {
    return this.getNumberAttribute('log_msg_sent');
  }
  public set logMsgSent(value: number) {
    this._logMsgSent = value;
  }
  public resetLogMsgSent() {
    this._logMsgSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMsgSentInput() {
    return this._logMsgSent;
  }

  // log_queue_full - computed: false, optional: true, required: false
  private _logQueueFull?: number; 
  public get logQueueFull() {
    return this.getNumberAttribute('log_queue_full');
  }
  public set logQueueFull(value: number) {
    this._logQueueFull = value;
  }
  public resetLogQueueFull() {
    this._logQueueFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueueFullInput() {
    return this._logQueueFull;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats thunder_ddos_logging_stats}
*/
export class DataThunderDdosLoggingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_logging_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosLoggingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosLoggingStats to import
  * @param importFromId The id of the existing DataThunderDdosLoggingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosLoggingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_logging_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_logging_stats thunder_ddos_logging_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosLoggingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosLoggingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_logging_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderDdosLoggingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosLoggingStatsStats) {
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
      stats: dataThunderDdosLoggingStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosLoggingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosLoggingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
