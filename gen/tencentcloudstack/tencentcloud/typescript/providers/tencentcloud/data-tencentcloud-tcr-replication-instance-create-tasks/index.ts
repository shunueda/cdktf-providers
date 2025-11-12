// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudTcrReplicationInstanceCreateTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks#id DataTencentcloudTcrReplicationInstanceCreateTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * synchronization instance region Id, see ReplicationRegionId in DescribeReplicationInstances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks#replication_region_id DataTencentcloudTcrReplicationInstanceCreateTasks#replication_region_id}
  */
  readonly replicationRegionId: number;
  /**
  * synchronization instance Id, see RegistryId in DescribeReplicationInstances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks#replication_registry_id DataTencentcloudTcrReplicationInstanceCreateTasks#replication_registry_id}
  */
  readonly replicationRegistryId: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks#result_output_file DataTencentcloudTcrReplicationInstanceCreateTasks#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetail {
}

export function dataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailToTerraform(struct?: DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailToHclTerraform(struct?: DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // finished_time - computed: true, optional: false, required: false
  public get finishedTime() {
    return this.getStringAttribute('finished_time');
  }

  // task_message - computed: true, optional: false, required: false
  public get taskMessage() {
    return this.getStringAttribute('task_message');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getStringAttribute('task_status');
  }

  // task_uuid - computed: true, optional: false, required: false
  public get taskUuid() {
    return this.getStringAttribute('task_uuid');
  }
}

export class DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailOutputReference {
    return new DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks tencentcloud_tcr_replication_instance_create_tasks}
*/
export class DataTencentcloudTcrReplicationInstanceCreateTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcr_replication_instance_create_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudTcrReplicationInstanceCreateTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudTcrReplicationInstanceCreateTasks to import
  * @param importFromId The id of the existing DataTencentcloudTcrReplicationInstanceCreateTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudTcrReplicationInstanceCreateTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcr_replication_instance_create_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/tcr_replication_instance_create_tasks tencentcloud_tcr_replication_instance_create_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudTcrReplicationInstanceCreateTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudTcrReplicationInstanceCreateTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcr_replication_instance_create_tasks',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
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
    this._replicationRegionId = config.replicationRegionId;
    this._replicationRegistryId = config.replicationRegistryId;
    this._resultOutputFile = config.resultOutputFile;
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

  // replication_region_id - computed: false, optional: false, required: true
  private _replicationRegionId?: number; 
  public get replicationRegionId() {
    return this.getNumberAttribute('replication_region_id');
  }
  public set replicationRegionId(value: number) {
    this._replicationRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegionIdInput() {
    return this._replicationRegionId;
  }

  // replication_registry_id - computed: false, optional: false, required: true
  private _replicationRegistryId?: string; 
  public get replicationRegistryId() {
    return this.getStringAttribute('replication_registry_id');
  }
  public set replicationRegistryId(value: string) {
    this._replicationRegistryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationRegistryIdInput() {
    return this._replicationRegistryId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_detail - computed: true, optional: false, required: false
  private _taskDetail = new DataTencentcloudTcrReplicationInstanceCreateTasksTaskDetailList(this, "task_detail", false);
  public get taskDetail() {
    return this._taskDetail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      replication_region_id: cdktf.numberToTerraform(this._replicationRegionId),
      replication_registry_id: cdktf.stringToTerraform(this._replicationRegistryId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      replication_region_id: {
        value: cdktf.numberToHclTerraform(this._replicationRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_registry_id: {
        value: cdktf.stringToHclTerraform(this._replicationRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
