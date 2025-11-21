// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEssScheduledTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#id DataAlicloudEssScheduledTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#ids DataAlicloudEssScheduledTasks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#name_regex DataAlicloudEssScheduledTasks#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#output_file DataAlicloudEssScheduledTasks#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#scheduled_action DataAlicloudEssScheduledTasks#scheduled_action}
  */
  readonly scheduledAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#scheduled_task_id DataAlicloudEssScheduledTasks#scheduled_task_id}
  */
  readonly scheduledTaskId?: string;
}
export interface DataAlicloudEssScheduledTasksTasks {
}

export function dataAlicloudEssScheduledTasksTasksToTerraform(struct?: DataAlicloudEssScheduledTasksTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEssScheduledTasksTasksToHclTerraform(struct?: DataAlicloudEssScheduledTasksTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEssScheduledTasksTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudEssScheduledTasksTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEssScheduledTasksTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_expiration_time - computed: true, optional: false, required: false
  public get launchExpirationTime() {
    return this.getNumberAttribute('launch_expiration_time');
  }

  // launch_time - computed: true, optional: false, required: false
  public get launchTime() {
    return this.getStringAttribute('launch_time');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recurrence_end_time - computed: true, optional: false, required: false
  public get recurrenceEndTime() {
    return this.getStringAttribute('recurrence_end_time');
  }

  // recurrence_type - computed: true, optional: false, required: false
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }

  // recurrence_value - computed: true, optional: false, required: false
  public get recurrenceValue() {
    return this.getStringAttribute('recurrence_value');
  }

  // scheduled_action - computed: true, optional: false, required: false
  public get scheduledAction() {
    return this.getStringAttribute('scheduled_action');
  }

  // task_enabled - computed: true, optional: false, required: false
  public get taskEnabled() {
    return this.getBooleanAttribute('task_enabled');
  }
}

export class DataAlicloudEssScheduledTasksTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEssScheduledTasksTasksOutputReference {
    return new DataAlicloudEssScheduledTasksTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks alicloud_ess_scheduled_tasks}
*/
export class DataAlicloudEssScheduledTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_scheduled_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEssScheduledTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEssScheduledTasks to import
  * @param importFromId The id of the existing DataAlicloudEssScheduledTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEssScheduledTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_scheduled_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/ess_scheduled_tasks alicloud_ess_scheduled_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEssScheduledTasksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEssScheduledTasksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_scheduled_tasks',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._scheduledAction = config.scheduledAction;
    this._scheduledTaskId = config.scheduledTaskId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // scheduled_action - computed: false, optional: true, required: false
  private _scheduledAction?: string; 
  public get scheduledAction() {
    return this.getStringAttribute('scheduled_action');
  }
  public set scheduledAction(value: string) {
    this._scheduledAction = value;
  }
  public resetScheduledAction() {
    this._scheduledAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledActionInput() {
    return this._scheduledAction;
  }

  // scheduled_task_id - computed: false, optional: true, required: false
  private _scheduledTaskId?: string; 
  public get scheduledTaskId() {
    return this.getStringAttribute('scheduled_task_id');
  }
  public set scheduledTaskId(value: string) {
    this._scheduledTaskId = value;
  }
  public resetScheduledTaskId() {
    this._scheduledTaskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTaskIdInput() {
    return this._scheduledTaskId;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataAlicloudEssScheduledTasksTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      scheduled_action: cdktf.stringToTerraform(this._scheduledAction),
      scheduled_task_id: cdktf.stringToTerraform(this._scheduledTaskId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_action: {
        value: cdktf.stringToHclTerraform(this._scheduledAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_task_id: {
        value: cdktf.stringToHclTerraform(this._scheduledTaskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
