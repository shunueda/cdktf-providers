// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultWorkQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The interval that the work queue should use when checking for potentially expensive operations. If at least expensive-operation-minimum-concurrent-count worker threads are found to be processing the same operation on two consecutive polls separated by this time interval (i.e., the worker thread has been processing that operation for at least this length of time, and potentially up to twice this length of time), then a stack trace of all running threads will be written to a file for analysis to provide potentially useful information that may help better understand the reason it is taking so long. It may be that the operation is simply an expensive one to process, but there may be other external factors (e.g., a database checkpoint, a log rotation, lock contention, etc.) that could be to blame. This option is primarily intended for debugging purposes and should generally be used under the direction of Ping Identity support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#expensive_operation_check_interval DefaultWorkQueue#expensive_operation_check_interval}
  */
  readonly expensiveOperationCheckInterval?: string;
  /**
  * The minimum number of concurrent expensive operations that should be detected to trigger dumping stack traces for all threads. If at least this number of worker threads are seen processing the same operations in two consecutive intervals, then the server will dump a stack trace of all threads to a file. This option is primarily intended for debugging purposes and should generally be used under the direction of Ping Identity support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#expensive_operation_minimum_concurrent_count DefaultWorkQueue#expensive_operation_minimum_concurrent_count}
  */
  readonly expensiveOperationMinimumConcurrentCount?: number;
  /**
  * The minimum length of time that should be required to pass after dumping stack trace information for all threads before the server should be allowed to create a second dump. This will help prevent the server from dumping stack traces too frequently and eventually consuming all available disk space with stack trace log output. This option is primarily intended for debugging purposes and should generally be used under the direction of Ping Identity support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#expensive_operation_minimum_dump_interval DefaultWorkQueue#expensive_operation_minimum_dump_interval}
  */
  readonly expensiveOperationMinimumDumpInterval?: string;
  /**
  * Specifies the maximum length of time that the connection handler should be allowed to wait to enqueue a request if the work queue is full. If the attempt to enqueue an operation does not succeed within this period of time, then the operation will be rejected and an error response will be returned to the client. A value of zero indicates that operations should be rejected immediately if the work queue is already at its maximum capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#max_offer_time DefaultWorkQueue#max_offer_time}
  */
  readonly maxOfferTime?: string;
  /**
  * Specifies the maximum length of time that an operation should be allowed to wait on the work queue. If an operation has been waiting on the queue longer than this period of time, then it will receive an immediate failure result rather than being processed once it has been handed off to a worker thread. A value of zero seconds indicates that there should not be any maximum queue time imposed. This setting will only be used if the monitor-queue-time property has a value of true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#max_queue_time DefaultWorkQueue#max_queue_time}
  */
  readonly maxQueueTime?: string;
  /**
  * Specifies the maximum number of pending operations that may be held in any of the queues at any given time. The total number of pending requests may be as large as this value times the total number of queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#max_work_queue_capacity DefaultWorkQueue#max_work_queue_capacity}
  */
  readonly maxWorkQueueCapacity?: number;
  /**
  * Indicates whether the work queue should monitor the length of time that operations are held in the queue. When enabled the queue time will be included with access log messages as "qtime" in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#monitor_queue_time DefaultWorkQueue#monitor_queue_time}
  */
  readonly monitorQueueTime?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of worker threads that should be used to process operations as part of an administrative session. These threads may be reserved only for special use by management applications like dsconfig, the administration console, and other administrative tools, so that these applications may be used to diagnose problems and take any necessary corrective action even if all "normal" worker threads are busy processing other requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#num_administrative_session_worker_threads DefaultWorkQueue#num_administrative_session_worker_threads}
  */
  readonly numAdministrativeSessionWorkerThreads?: number;
  /**
  * Specifies the number of blocking queues that should be maintained. A value of zero indicates that the server should attempt to automatically select an optimal value (one queue for every two worker threads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#num_queues DefaultWorkQueue#num_queues}
  */
  readonly numQueues?: number;
  /**
  * Specifies the total number of worker threads that should be used within the server in order to process requested operations. The worker threads will be split evenly across all of the configured queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#num_worker_threads DefaultWorkQueue#num_worker_threads}
  */
  readonly numWorkerThreads?: number;
  /**
  * Specifies the number of blocking queues that should be maintained for write operations. This will only be used if a value is specified for the num-write-worker-threads property, in which case the num-queues property will specify the number of queues for read operations. Otherwise, all operations will be processed by a common set of worker threads and the value of the num-queues property will specify the number of queues for all types of operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#num_write_queues DefaultWorkQueue#num_write_queues}
  */
  readonly numWriteQueues?: number;
  /**
  * Specifies the number of worker threads that should be used within the server to process write (add, delete, modify, and modify DN) operations, as well as some types of extended operations that are known to perform writes. If this is specified, then separate sets of worker threads will be used for processing read and write operations, and the value of the num-worker-threads property will reflect the number of threads to use to process read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#num_write_worker_threads DefaultWorkQueue#num_write_worker_threads}
  */
  readonly numWriteWorkerThreads?: number;
}
export interface DefaultWorkQueueRequiredActions {
}

export function defaultWorkQueueRequiredActionsToTerraform(struct?: DefaultWorkQueueRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultWorkQueueRequiredActionsToHclTerraform(struct?: DefaultWorkQueueRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultWorkQueueRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultWorkQueueRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultWorkQueueRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultWorkQueueRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultWorkQueueRequiredActionsOutputReference {
    return new DefaultWorkQueueRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue pingdirectory_default_work_queue}
*/
export class DefaultWorkQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_work_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultWorkQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultWorkQueue to import
  * @param importFromId The id of the existing DefaultWorkQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultWorkQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_work_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_work_queue pingdirectory_default_work_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultWorkQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DefaultWorkQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_work_queue',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expensiveOperationCheckInterval = config.expensiveOperationCheckInterval;
    this._expensiveOperationMinimumConcurrentCount = config.expensiveOperationMinimumConcurrentCount;
    this._expensiveOperationMinimumDumpInterval = config.expensiveOperationMinimumDumpInterval;
    this._maxOfferTime = config.maxOfferTime;
    this._maxQueueTime = config.maxQueueTime;
    this._maxWorkQueueCapacity = config.maxWorkQueueCapacity;
    this._monitorQueueTime = config.monitorQueueTime;
    this._numAdministrativeSessionWorkerThreads = config.numAdministrativeSessionWorkerThreads;
    this._numQueues = config.numQueues;
    this._numWorkerThreads = config.numWorkerThreads;
    this._numWriteQueues = config.numWriteQueues;
    this._numWriteWorkerThreads = config.numWriteWorkerThreads;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expensive_operation_check_interval - computed: true, optional: true, required: false
  private _expensiveOperationCheckInterval?: string; 
  public get expensiveOperationCheckInterval() {
    return this.getStringAttribute('expensive_operation_check_interval');
  }
  public set expensiveOperationCheckInterval(value: string) {
    this._expensiveOperationCheckInterval = value;
  }
  public resetExpensiveOperationCheckInterval() {
    this._expensiveOperationCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expensiveOperationCheckIntervalInput() {
    return this._expensiveOperationCheckInterval;
  }

  // expensive_operation_minimum_concurrent_count - computed: true, optional: true, required: false
  private _expensiveOperationMinimumConcurrentCount?: number; 
  public get expensiveOperationMinimumConcurrentCount() {
    return this.getNumberAttribute('expensive_operation_minimum_concurrent_count');
  }
  public set expensiveOperationMinimumConcurrentCount(value: number) {
    this._expensiveOperationMinimumConcurrentCount = value;
  }
  public resetExpensiveOperationMinimumConcurrentCount() {
    this._expensiveOperationMinimumConcurrentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expensiveOperationMinimumConcurrentCountInput() {
    return this._expensiveOperationMinimumConcurrentCount;
  }

  // expensive_operation_minimum_dump_interval - computed: true, optional: true, required: false
  private _expensiveOperationMinimumDumpInterval?: string; 
  public get expensiveOperationMinimumDumpInterval() {
    return this.getStringAttribute('expensive_operation_minimum_dump_interval');
  }
  public set expensiveOperationMinimumDumpInterval(value: string) {
    this._expensiveOperationMinimumDumpInterval = value;
  }
  public resetExpensiveOperationMinimumDumpInterval() {
    this._expensiveOperationMinimumDumpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expensiveOperationMinimumDumpIntervalInput() {
    return this._expensiveOperationMinimumDumpInterval;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_offer_time - computed: true, optional: true, required: false
  private _maxOfferTime?: string; 
  public get maxOfferTime() {
    return this.getStringAttribute('max_offer_time');
  }
  public set maxOfferTime(value: string) {
    this._maxOfferTime = value;
  }
  public resetMaxOfferTime() {
    this._maxOfferTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOfferTimeInput() {
    return this._maxOfferTime;
  }

  // max_queue_time - computed: true, optional: true, required: false
  private _maxQueueTime?: string; 
  public get maxQueueTime() {
    return this.getStringAttribute('max_queue_time');
  }
  public set maxQueueTime(value: string) {
    this._maxQueueTime = value;
  }
  public resetMaxQueueTime() {
    this._maxQueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueueTimeInput() {
    return this._maxQueueTime;
  }

  // max_work_queue_capacity - computed: true, optional: true, required: false
  private _maxWorkQueueCapacity?: number; 
  public get maxWorkQueueCapacity() {
    return this.getNumberAttribute('max_work_queue_capacity');
  }
  public set maxWorkQueueCapacity(value: number) {
    this._maxWorkQueueCapacity = value;
  }
  public resetMaxWorkQueueCapacity() {
    this._maxWorkQueueCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkQueueCapacityInput() {
    return this._maxWorkQueueCapacity;
  }

  // monitor_queue_time - computed: true, optional: true, required: false
  private _monitorQueueTime?: boolean | cdktf.IResolvable; 
  public get monitorQueueTime() {
    return this.getBooleanAttribute('monitor_queue_time');
  }
  public set monitorQueueTime(value: boolean | cdktf.IResolvable) {
    this._monitorQueueTime = value;
  }
  public resetMonitorQueueTime() {
    this._monitorQueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorQueueTimeInput() {
    return this._monitorQueueTime;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // num_administrative_session_worker_threads - computed: true, optional: true, required: false
  private _numAdministrativeSessionWorkerThreads?: number; 
  public get numAdministrativeSessionWorkerThreads() {
    return this.getNumberAttribute('num_administrative_session_worker_threads');
  }
  public set numAdministrativeSessionWorkerThreads(value: number) {
    this._numAdministrativeSessionWorkerThreads = value;
  }
  public resetNumAdministrativeSessionWorkerThreads() {
    this._numAdministrativeSessionWorkerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numAdministrativeSessionWorkerThreadsInput() {
    return this._numAdministrativeSessionWorkerThreads;
  }

  // num_queues - computed: true, optional: true, required: false
  private _numQueues?: number; 
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }
  public set numQueues(value: number) {
    this._numQueues = value;
  }
  public resetNumQueues() {
    this._numQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueuesInput() {
    return this._numQueues;
  }

  // num_worker_threads - computed: true, optional: true, required: false
  private _numWorkerThreads?: number; 
  public get numWorkerThreads() {
    return this.getNumberAttribute('num_worker_threads');
  }
  public set numWorkerThreads(value: number) {
    this._numWorkerThreads = value;
  }
  public resetNumWorkerThreads() {
    this._numWorkerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWorkerThreadsInput() {
    return this._numWorkerThreads;
  }

  // num_write_queues - computed: true, optional: true, required: false
  private _numWriteQueues?: number; 
  public get numWriteQueues() {
    return this.getNumberAttribute('num_write_queues');
  }
  public set numWriteQueues(value: number) {
    this._numWriteQueues = value;
  }
  public resetNumWriteQueues() {
    this._numWriteQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWriteQueuesInput() {
    return this._numWriteQueues;
  }

  // num_write_worker_threads - computed: true, optional: true, required: false
  private _numWriteWorkerThreads?: number; 
  public get numWriteWorkerThreads() {
    return this.getNumberAttribute('num_write_worker_threads');
  }
  public set numWriteWorkerThreads(value: number) {
    this._numWriteWorkerThreads = value;
  }
  public resetNumWriteWorkerThreads() {
    this._numWriteWorkerThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numWriteWorkerThreadsInput() {
    return this._numWriteWorkerThreads;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultWorkQueueRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expensive_operation_check_interval: cdktf.stringToTerraform(this._expensiveOperationCheckInterval),
      expensive_operation_minimum_concurrent_count: cdktf.numberToTerraform(this._expensiveOperationMinimumConcurrentCount),
      expensive_operation_minimum_dump_interval: cdktf.stringToTerraform(this._expensiveOperationMinimumDumpInterval),
      max_offer_time: cdktf.stringToTerraform(this._maxOfferTime),
      max_queue_time: cdktf.stringToTerraform(this._maxQueueTime),
      max_work_queue_capacity: cdktf.numberToTerraform(this._maxWorkQueueCapacity),
      monitor_queue_time: cdktf.booleanToTerraform(this._monitorQueueTime),
      num_administrative_session_worker_threads: cdktf.numberToTerraform(this._numAdministrativeSessionWorkerThreads),
      num_queues: cdktf.numberToTerraform(this._numQueues),
      num_worker_threads: cdktf.numberToTerraform(this._numWorkerThreads),
      num_write_queues: cdktf.numberToTerraform(this._numWriteQueues),
      num_write_worker_threads: cdktf.numberToTerraform(this._numWriteWorkerThreads),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expensive_operation_check_interval: {
        value: cdktf.stringToHclTerraform(this._expensiveOperationCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expensive_operation_minimum_concurrent_count: {
        value: cdktf.numberToHclTerraform(this._expensiveOperationMinimumConcurrentCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expensive_operation_minimum_dump_interval: {
        value: cdktf.stringToHclTerraform(this._expensiveOperationMinimumDumpInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_offer_time: {
        value: cdktf.stringToHclTerraform(this._maxOfferTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_queue_time: {
        value: cdktf.stringToHclTerraform(this._maxQueueTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_work_queue_capacity: {
        value: cdktf.numberToHclTerraform(this._maxWorkQueueCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_queue_time: {
        value: cdktf.booleanToHclTerraform(this._monitorQueueTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_administrative_session_worker_threads: {
        value: cdktf.numberToHclTerraform(this._numAdministrativeSessionWorkerThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_queues: {
        value: cdktf.numberToHclTerraform(this._numQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_worker_threads: {
        value: cdktf.numberToHclTerraform(this._numWorkerThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_write_queues: {
        value: cdktf.numberToHclTerraform(this._numWriteQueues),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_write_worker_threads: {
        value: cdktf.numberToHclTerraform(this._numWriteWorkerThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
