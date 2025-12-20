// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClsShipperTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * end time(ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks#end_time DataTencentcloudClsShipperTasks#end_time}
  */
  readonly endTime: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks#id DataTencentcloudClsShipperTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks#result_output_file DataTencentcloudClsShipperTasks#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * shipper id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks#shipper_id DataTencentcloudClsShipperTasks#shipper_id}
  */
  readonly shipperId: string;
  /**
  * start time(ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks#start_time DataTencentcloudClsShipperTasks#start_time}
  */
  readonly startTime: number;
}
export interface DataTencentcloudClsShipperTasksTasks {
}

export function dataTencentcloudClsShipperTasksTasksToTerraform(struct?: DataTencentcloudClsShipperTasksTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClsShipperTasksTasksToHclTerraform(struct?: DataTencentcloudClsShipperTasksTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClsShipperTasksTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClsShipperTasksTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClsShipperTasksTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // range_end - computed: true, optional: false, required: false
  public get rangeEnd() {
    return this.getNumberAttribute('range_end');
  }

  // range_start - computed: true, optional: false, required: false
  public get rangeStart() {
    return this.getNumberAttribute('range_start');
  }

  // shipper_id - computed: true, optional: false, required: false
  public get shipperId() {
    return this.getStringAttribute('shipper_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // topic_id - computed: true, optional: false, required: false
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
}

export class DataTencentcloudClsShipperTasksTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClsShipperTasksTasksOutputReference {
    return new DataTencentcloudClsShipperTasksTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks tencentcloud_cls_shipper_tasks}
*/
export class DataTencentcloudClsShipperTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_shipper_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClsShipperTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClsShipperTasks to import
  * @param importFromId The id of the existing DataTencentcloudClsShipperTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClsShipperTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_shipper_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/cls_shipper_tasks tencentcloud_cls_shipper_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClsShipperTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClsShipperTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_shipper_tasks',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endTime = config.endTime;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._shipperId = config.shipperId;
    this._startTime = config.startTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_time - computed: false, optional: false, required: true
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // shipper_id - computed: false, optional: false, required: true
  private _shipperId?: string; 
  public get shipperId() {
    return this.getStringAttribute('shipper_id');
  }
  public set shipperId(value: string) {
    this._shipperId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shipperIdInput() {
    return this._shipperId;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataTencentcloudClsShipperTasksTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      shipper_id: cdktf.stringToTerraform(this._shipperId),
      start_time: cdktf.numberToTerraform(this._startTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipper_id: {
        value: cdktf.stringToHclTerraform(this._shipperId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
