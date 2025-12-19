// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AcosEventsLocalLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Operational command to delete the old logs stored in disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#delete_old_logs_in_disk AcosEventsLocalLogging#delete_old_logs_in_disk}
  */
  readonly deleteOldLogsInDisk?: number;
  /**
  * Enable local-logging when FW log servers are down (Default: Not enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#enable AcosEventsLocalLogging#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#id AcosEventsLocalLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure Max disk space in MB to be used for storing the logs (Default: 100MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#max_disk_space AcosEventsLocalLogging#max_disk_space}
  */
  readonly maxDiskSpace?: number;
  /**
  * Configure number of logs per second to be stored in disk (Default: 1000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#rate_limit AcosEventsLocalLogging#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#uuid AcosEventsLocalLogging#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#sampling_enable AcosEventsLocalLogging#sampling_enable}
  */
  readonly samplingEnable?: AcosEventsLocalLoggingSamplingEnable[] | cdktf.IResolvable;
}
export interface AcosEventsLocalLoggingSamplingEnable {
  /**
  * 'all': all; 'init-pass': Local logging Init Successful; 'init-fail': Local logging Init Fail; 'freed': Local logging Stopped; 'disk-over-thres': Number of logs Dropped, Disk reached threshold; 'rate-limited': Number of logs Dropped, Rate limited; 'not-inited': Number of logs Dropped, Local logging not inited; 'sent-to-store': Number of logs sent to be stored; 'sent-to-store-fail': Number of Logs sent to be stored Failed; 'store-fail': Number of logs failed to be stored; 'in-logs': Number of logs successfully stored; 'in-bytes': Number of bytes successfully stored; 'in-logs-backlog': Number of backlogs loaded from disk; 'in-bytes-backlog': Number of backlog bytes loaded from disk; 'in-store-fail-no-space': Number of logs Dropped, failed without disk space; 'in-discard-logs': Number of old logs discarded to fit in new logs; 'in-discard-bytes': Number of old bytes discarded to fit in new logs; 'out-logs': Number of logs sent to log servers; 'out-bytes': Number of bytes sent to log-servers; 'out-error': Number of errors during send; 'remaining-logs': Total number of remaining logs yet to be sent; 'remaining-bytes': Total number of remaining bytes yet to be sent; 'moved-to-delq': Local Logging moved to delq to be deleted; 'out-retry': Number of attempted retries to send logs; 'out-retry-fail': Number of retries failed with error; 'curr-total-chunks': Current Number of blocks; 'curr-mem-chunks': Current blocks in memory; 'curr-fs-chunks': Current blocks in file system; 'curr-fs-chunks-up': Current blocks in file system loaded in memory; 'curr-fs-chunks-down': Current blocks in file system not loaded in memory; 'in-logs-agg': Total Aggregate, Number of logs successfully stored; 'in-bytes-agg': Total Aggregate, Number of bytes successfully stored; 'in-logs-backlog-agg': Total Aggregate, Number of backlogs loaded from disk; 'in-bytes-backlog-agg': Total Aggregate, Number of backlog bytes loaded from disk; 'in-store-fail-no-space-agg': Total Aggregate, Number of logs Dropped, failed without disk space; 'in-discard-logs-agg': Total Aggregate, Number of old logs discarded to fit in new logs; 'in-discard-bytes-agg': Total Aggregate, Number of old bytes discarded to fit in new logs; 'out-logs-agg': Total Aggregate, Number of logs sent to log servers; 'out-bytes-agg': Total Aggregate, Number of bytes sent to log-servers; 'out-error-agg': Total Aggregate, Number of errors during send; 'out-retry-agg': Total Aggregate, Number of attempted retries to send logs; 'out-retry-fail-agg': Total Aggregate, Number of retries failed with error; 'in-logs-curr-agg': Current Aggregate, Number of logs successfully stored; 'in-bytes-curr-agg': Current Aggregate, Number of bytes successfully stored; 'in-logs-backlog-curr-agg': Current Aggregate, Number of backlogs loaded from disk; 'in-bytes-backlog-curr-agg': Current Aggregate, Number of backlog bytes loaded from disk; 'in-discard-logs-curr-agg': Current Aggregate, Number of old logs discarded to fit in new logs; 'in-discard-bytes-curr-agg': Current Aggregate, Number of old bytes discarded to fit in new logs; 'out-logs-curr-agg': Current Aggregate, Number of logs sent to log servers; 'out-bytes-curr-agg': Current Aggregate, Number of bytes sent to log-servers;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#counters1 AcosEventsLocalLogging#counters1}
  */
  readonly counters1?: string;
}

export function acosEventsLocalLoggingSamplingEnableToTerraform(struct?: AcosEventsLocalLoggingSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function acosEventsLocalLoggingSamplingEnableToHclTerraform(struct?: AcosEventsLocalLoggingSamplingEnable | cdktf.IResolvable): any {
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

export class AcosEventsLocalLoggingSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AcosEventsLocalLoggingSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AcosEventsLocalLoggingSamplingEnable | cdktf.IResolvable | undefined) {
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

export class AcosEventsLocalLoggingSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AcosEventsLocalLoggingSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AcosEventsLocalLoggingSamplingEnableOutputReference {
    return new AcosEventsLocalLoggingSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging thunder_acos_events_local_logging}
*/
export class AcosEventsLocalLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_local_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AcosEventsLocalLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AcosEventsLocalLogging to import
  * @param importFromId The id of the existing AcosEventsLocalLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AcosEventsLocalLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_local_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/acos_events_local_logging thunder_acos_events_local_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcosEventsLocalLoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AcosEventsLocalLoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_local_logging',
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
    this._deleteOldLogsInDisk = config.deleteOldLogsInDisk;
    this._enable = config.enable;
    this._id = config.id;
    this._maxDiskSpace = config.maxDiskSpace;
    this._rateLimit = config.rateLimit;
    this._uuid = config.uuid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_old_logs_in_disk - computed: false, optional: true, required: false
  private _deleteOldLogsInDisk?: number; 
  public get deleteOldLogsInDisk() {
    return this.getNumberAttribute('delete_old_logs_in_disk');
  }
  public set deleteOldLogsInDisk(value: number) {
    this._deleteOldLogsInDisk = value;
  }
  public resetDeleteOldLogsInDisk() {
    this._deleteOldLogsInDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOldLogsInDiskInput() {
    return this._deleteOldLogsInDisk;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // max_disk_space - computed: false, optional: true, required: false
  private _maxDiskSpace?: number; 
  public get maxDiskSpace() {
    return this.getNumberAttribute('max_disk_space');
  }
  public set maxDiskSpace(value: number) {
    this._maxDiskSpace = value;
  }
  public resetMaxDiskSpace() {
    this._maxDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskSpaceInput() {
    return this._maxDiskSpace;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
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
  private _samplingEnable = new AcosEventsLocalLoggingSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AcosEventsLocalLoggingSamplingEnable[] | cdktf.IResolvable) {
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
      delete_old_logs_in_disk: cdktf.numberToTerraform(this._deleteOldLogsInDisk),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      max_disk_space: cdktf.numberToTerraform(this._maxDiskSpace),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      uuid: cdktf.stringToTerraform(this._uuid),
      sampling_enable: cdktf.listMapper(acosEventsLocalLoggingSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_old_logs_in_disk: {
        value: cdktf.numberToHclTerraform(this._deleteOldLogsInDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_disk_space: {
        value: cdktf.numberToHclTerraform(this._maxDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(acosEventsLocalLoggingSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AcosEventsLocalLoggingSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
