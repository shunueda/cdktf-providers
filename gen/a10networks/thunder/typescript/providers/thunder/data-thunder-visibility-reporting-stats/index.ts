// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityReportingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#id DataThunderVisibilityReportingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#stats DataThunderVisibilityReportingStats#stats}
  */
  readonly stats?: DataThunderVisibilityReportingStatsStats;
}
export interface DataThunderVisibilityReportingStatsStats {
  /**
  * Total reporting buffer allocation failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#buffer_alloc_failure DataThunderVisibilityReportingStats#buffer_alloc_failure}
  */
  readonly bufferAllocFailure?: number;
  /**
  * Total jobs dequeued
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#dequeued DataThunderVisibilityReportingStats#dequeued}
  */
  readonly dequeued?: number;
  /**
  * Total enqueue jobs failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#enqueue_fail DataThunderVisibilityReportingStats#enqueue_fail}
  */
  readonly enqueueFail?: number;
  /**
  * Total enqueue jobs passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#enqueue_pass DataThunderVisibilityReportingStats#enqueue_pass}
  */
  readonly enqueuePass?: number;
  /**
  * Total log transmit failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#log_transmit_failure DataThunderVisibilityReportingStats#log_transmit_failure}
  */
  readonly logTransmitFailure?: number;
  /**
  * Total notification jobs in queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#notif_jobs_in_queue DataThunderVisibilityReportingStats#notif_jobs_in_queue}
  */
  readonly notifJobsInQueue?: number;
}

export function dataThunderVisibilityReportingStatsStatsToTerraform(struct?: DataThunderVisibilityReportingStatsStatsOutputReference | DataThunderVisibilityReportingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_alloc_failure: cdktf.numberToTerraform(struct!.bufferAllocFailure),
    dequeued: cdktf.numberToTerraform(struct!.dequeued),
    enqueue_fail: cdktf.numberToTerraform(struct!.enqueueFail),
    enqueue_pass: cdktf.numberToTerraform(struct!.enqueuePass),
    log_transmit_failure: cdktf.numberToTerraform(struct!.logTransmitFailure),
    notif_jobs_in_queue: cdktf.numberToTerraform(struct!.notifJobsInQueue),
  }
}


export function dataThunderVisibilityReportingStatsStatsToHclTerraform(struct?: DataThunderVisibilityReportingStatsStatsOutputReference | DataThunderVisibilityReportingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.bufferAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dequeued: {
      value: cdktf.numberToHclTerraform(struct!.dequeued),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue_fail: {
      value: cdktf.numberToHclTerraform(struct!.enqueueFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enqueue_pass: {
      value: cdktf.numberToHclTerraform(struct!.enqueuePass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_transmit_failure: {
      value: cdktf.numberToHclTerraform(struct!.logTransmitFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notif_jobs_in_queue: {
      value: cdktf.numberToHclTerraform(struct!.notifJobsInQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityReportingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityReportingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferAllocFailure = this._bufferAllocFailure;
    }
    if (this._dequeued !== undefined) {
      hasAnyValues = true;
      internalValueResult.dequeued = this._dequeued;
    }
    if (this._enqueueFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueueFail = this._enqueueFail;
    }
    if (this._enqueuePass !== undefined) {
      hasAnyValues = true;
      internalValueResult.enqueuePass = this._enqueuePass;
    }
    if (this._logTransmitFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTransmitFailure = this._logTransmitFailure;
    }
    if (this._notifJobsInQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifJobsInQueue = this._notifJobsInQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityReportingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferAllocFailure = undefined;
      this._dequeued = undefined;
      this._enqueueFail = undefined;
      this._enqueuePass = undefined;
      this._logTransmitFailure = undefined;
      this._notifJobsInQueue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferAllocFailure = value.bufferAllocFailure;
      this._dequeued = value.dequeued;
      this._enqueueFail = value.enqueueFail;
      this._enqueuePass = value.enqueuePass;
      this._logTransmitFailure = value.logTransmitFailure;
      this._notifJobsInQueue = value.notifJobsInQueue;
    }
  }

  // buffer_alloc_failure - computed: false, optional: true, required: false
  private _bufferAllocFailure?: number; 
  public get bufferAllocFailure() {
    return this.getNumberAttribute('buffer_alloc_failure');
  }
  public set bufferAllocFailure(value: number) {
    this._bufferAllocFailure = value;
  }
  public resetBufferAllocFailure() {
    this._bufferAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferAllocFailureInput() {
    return this._bufferAllocFailure;
  }

  // dequeued - computed: false, optional: true, required: false
  private _dequeued?: number; 
  public get dequeued() {
    return this.getNumberAttribute('dequeued');
  }
  public set dequeued(value: number) {
    this._dequeued = value;
  }
  public resetDequeued() {
    this._dequeued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dequeuedInput() {
    return this._dequeued;
  }

  // enqueue_fail - computed: false, optional: true, required: false
  private _enqueueFail?: number; 
  public get enqueueFail() {
    return this.getNumberAttribute('enqueue_fail');
  }
  public set enqueueFail(value: number) {
    this._enqueueFail = value;
  }
  public resetEnqueueFail() {
    this._enqueueFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueueFailInput() {
    return this._enqueueFail;
  }

  // enqueue_pass - computed: false, optional: true, required: false
  private _enqueuePass?: number; 
  public get enqueuePass() {
    return this.getNumberAttribute('enqueue_pass');
  }
  public set enqueuePass(value: number) {
    this._enqueuePass = value;
  }
  public resetEnqueuePass() {
    this._enqueuePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enqueuePassInput() {
    return this._enqueuePass;
  }

  // log_transmit_failure - computed: false, optional: true, required: false
  private _logTransmitFailure?: number; 
  public get logTransmitFailure() {
    return this.getNumberAttribute('log_transmit_failure');
  }
  public set logTransmitFailure(value: number) {
    this._logTransmitFailure = value;
  }
  public resetLogTransmitFailure() {
    this._logTransmitFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTransmitFailureInput() {
    return this._logTransmitFailure;
  }

  // notif_jobs_in_queue - computed: false, optional: true, required: false
  private _notifJobsInQueue?: number; 
  public get notifJobsInQueue() {
    return this.getNumberAttribute('notif_jobs_in_queue');
  }
  public set notifJobsInQueue(value: number) {
    this._notifJobsInQueue = value;
  }
  public resetNotifJobsInQueue() {
    this._notifJobsInQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifJobsInQueueInput() {
    return this._notifJobsInQueue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats thunder_visibility_reporting_stats}
*/
export class DataThunderVisibilityReportingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_reporting_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityReportingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityReportingStats to import
  * @param importFromId The id of the existing DataThunderVisibilityReportingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityReportingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_reporting_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_reporting_stats thunder_visibility_reporting_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityReportingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityReportingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_reporting_stats',
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
  private _stats = new DataThunderVisibilityReportingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVisibilityReportingStatsStats) {
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
      stats: dataThunderVisibilityReportingStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVisibilityReportingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityReportingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
