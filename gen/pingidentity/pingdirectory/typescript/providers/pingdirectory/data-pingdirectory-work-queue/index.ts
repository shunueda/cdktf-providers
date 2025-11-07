// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/work_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryWorkQueueConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/work_queue pingdirectory_work_queue}
*/
export class DataPingdirectoryWorkQueue extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_work_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryWorkQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryWorkQueue to import
  * @param importFromId The id of the existing DataPingdirectoryWorkQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/work_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryWorkQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_work_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/work_queue pingdirectory_work_queue} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryWorkQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryWorkQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_work_queue',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expensive_operation_check_interval - computed: true, optional: false, required: false
  public get expensiveOperationCheckInterval() {
    return this.getStringAttribute('expensive_operation_check_interval');
  }

  // expensive_operation_minimum_concurrent_count - computed: true, optional: false, required: false
  public get expensiveOperationMinimumConcurrentCount() {
    return this.getNumberAttribute('expensive_operation_minimum_concurrent_count');
  }

  // expensive_operation_minimum_dump_interval - computed: true, optional: false, required: false
  public get expensiveOperationMinimumDumpInterval() {
    return this.getStringAttribute('expensive_operation_minimum_dump_interval');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_offer_time - computed: true, optional: false, required: false
  public get maxOfferTime() {
    return this.getStringAttribute('max_offer_time');
  }

  // max_queue_time - computed: true, optional: false, required: false
  public get maxQueueTime() {
    return this.getStringAttribute('max_queue_time');
  }

  // max_work_queue_capacity - computed: true, optional: false, required: false
  public get maxWorkQueueCapacity() {
    return this.getNumberAttribute('max_work_queue_capacity');
  }

  // monitor_queue_time - computed: true, optional: false, required: false
  public get monitorQueueTime() {
    return this.getBooleanAttribute('monitor_queue_time');
  }

  // num_administrative_session_worker_threads - computed: true, optional: false, required: false
  public get numAdministrativeSessionWorkerThreads() {
    return this.getNumberAttribute('num_administrative_session_worker_threads');
  }

  // num_queues - computed: true, optional: false, required: false
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }

  // num_worker_threads - computed: true, optional: false, required: false
  public get numWorkerThreads() {
    return this.getNumberAttribute('num_worker_threads');
  }

  // num_write_queues - computed: true, optional: false, required: false
  public get numWriteQueues() {
    return this.getNumberAttribute('num_write_queues');
  }

  // num_write_worker_threads - computed: true, optional: false, required: false
  public get numWriteWorkerThreads() {
    return this.getNumberAttribute('num_write_worker_threads');
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
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
