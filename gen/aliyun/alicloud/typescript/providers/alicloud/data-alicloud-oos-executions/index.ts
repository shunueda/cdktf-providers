// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudOosExecutionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#category DataAlicloudOosExecutions#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#end_date DataAlicloudOosExecutions#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#end_date_after DataAlicloudOosExecutions#end_date_after}
  */
  readonly endDateAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#executed_by DataAlicloudOosExecutions#executed_by}
  */
  readonly executedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#id DataAlicloudOosExecutions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#ids DataAlicloudOosExecutions#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#include_child_execution DataAlicloudOosExecutions#include_child_execution}
  */
  readonly includeChildExecution?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#mode DataAlicloudOosExecutions#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#output_file DataAlicloudOosExecutions#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#parent_execution_id DataAlicloudOosExecutions#parent_execution_id}
  */
  readonly parentExecutionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#ram_role DataAlicloudOosExecutions#ram_role}
  */
  readonly ramRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#sort_field DataAlicloudOosExecutions#sort_field}
  */
  readonly sortField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#sort_order DataAlicloudOosExecutions#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#start_date_after DataAlicloudOosExecutions#start_date_after}
  */
  readonly startDateAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#start_date_before DataAlicloudOosExecutions#start_date_before}
  */
  readonly startDateBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#status DataAlicloudOosExecutions#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#tags DataAlicloudOosExecutions#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#template_name DataAlicloudOosExecutions#template_name}
  */
  readonly templateName?: string;
}
export interface DataAlicloudOosExecutionsExecutions {
}

export function dataAlicloudOosExecutionsExecutionsToTerraform(struct?: DataAlicloudOosExecutionsExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudOosExecutionsExecutionsToHclTerraform(struct?: DataAlicloudOosExecutionsExecutions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudOosExecutionsExecutionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudOosExecutionsExecutions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudOosExecutionsExecutions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // counters - computed: true, optional: false, required: false
  public get counters() {
    return this.getStringAttribute('counters');
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // executed_by - computed: true, optional: false, required: false
  public get executedBy() {
    return this.getStringAttribute('executed_by');
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_parent - computed: true, optional: false, required: false
  public get isParent() {
    return this.getBooleanAttribute('is_parent');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // outputs - computed: true, optional: false, required: false
  public get outputs() {
    return this.getStringAttribute('outputs');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // parent_execution_id - computed: true, optional: false, required: false
  public get parentExecutionId() {
    return this.getStringAttribute('parent_execution_id');
  }

  // ram_role - computed: true, optional: false, required: false
  public get ramRole() {
    return this.getStringAttribute('ram_role');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // template_version - computed: true, optional: false, required: false
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }
}

export class DataAlicloudOosExecutionsExecutionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudOosExecutionsExecutionsOutputReference {
    return new DataAlicloudOosExecutionsExecutionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions alicloud_oos_executions}
*/
export class DataAlicloudOosExecutions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oos_executions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudOosExecutions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudOosExecutions to import
  * @param importFromId The id of the existing DataAlicloudOosExecutions that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudOosExecutions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oos_executions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/oos_executions alicloud_oos_executions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudOosExecutionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudOosExecutionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oos_executions',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._endDate = config.endDate;
    this._endDateAfter = config.endDateAfter;
    this._executedBy = config.executedBy;
    this._id = config.id;
    this._ids = config.ids;
    this._includeChildExecution = config.includeChildExecution;
    this._mode = config.mode;
    this._outputFile = config.outputFile;
    this._parentExecutionId = config.parentExecutionId;
    this._ramRole = config.ramRole;
    this._sortField = config.sortField;
    this._sortOrder = config.sortOrder;
    this._startDateAfter = config.startDateAfter;
    this._startDateBefore = config.startDateBefore;
    this._status = config.status;
    this._tags = config.tags;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // end_date_after - computed: false, optional: true, required: false
  private _endDateAfter?: string; 
  public get endDateAfter() {
    return this.getStringAttribute('end_date_after');
  }
  public set endDateAfter(value: string) {
    this._endDateAfter = value;
  }
  public resetEndDateAfter() {
    this._endDateAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateAfterInput() {
    return this._endDateAfter;
  }

  // executed_by - computed: false, optional: true, required: false
  private _executedBy?: string; 
  public get executedBy() {
    return this.getStringAttribute('executed_by');
  }
  public set executedBy(value: string) {
    this._executedBy = value;
  }
  public resetExecutedBy() {
    this._executedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executedByInput() {
    return this._executedBy;
  }

  // executions - computed: true, optional: false, required: false
  private _executions = new DataAlicloudOosExecutionsExecutionsList(this, "executions", false);
  public get executions() {
    return this._executions;
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

  // include_child_execution - computed: false, optional: true, required: false
  private _includeChildExecution?: boolean | cdktf.IResolvable; 
  public get includeChildExecution() {
    return this.getBooleanAttribute('include_child_execution');
  }
  public set includeChildExecution(value: boolean | cdktf.IResolvable) {
    this._includeChildExecution = value;
  }
  public resetIncludeChildExecution() {
    this._includeChildExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeChildExecutionInput() {
    return this._includeChildExecution;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // parent_execution_id - computed: false, optional: true, required: false
  private _parentExecutionId?: string; 
  public get parentExecutionId() {
    return this.getStringAttribute('parent_execution_id');
  }
  public set parentExecutionId(value: string) {
    this._parentExecutionId = value;
  }
  public resetParentExecutionId() {
    this._parentExecutionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentExecutionIdInput() {
    return this._parentExecutionId;
  }

  // ram_role - computed: false, optional: true, required: false
  private _ramRole?: string; 
  public get ramRole() {
    return this.getStringAttribute('ram_role');
  }
  public set ramRole(value: string) {
    this._ramRole = value;
  }
  public resetRamRole() {
    this._ramRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRoleInput() {
    return this._ramRole;
  }

  // sort_field - computed: false, optional: true, required: false
  private _sortField?: string; 
  public get sortField() {
    return this.getStringAttribute('sort_field');
  }
  public set sortField(value: string) {
    this._sortField = value;
  }
  public resetSortField() {
    this._sortField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // start_date_after - computed: false, optional: true, required: false
  private _startDateAfter?: string; 
  public get startDateAfter() {
    return this.getStringAttribute('start_date_after');
  }
  public set startDateAfter(value: string) {
    this._startDateAfter = value;
  }
  public resetStartDateAfter() {
    this._startDateAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateAfterInput() {
    return this._startDateAfter;
  }

  // start_date_before - computed: false, optional: true, required: false
  private _startDateBefore?: string; 
  public get startDateBefore() {
    return this.getStringAttribute('start_date_before');
  }
  public set startDateBefore(value: string) {
    this._startDateBefore = value;
  }
  public resetStartDateBefore() {
    this._startDateBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateBeforeInput() {
    return this._startDateBefore;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      end_date: cdktf.stringToTerraform(this._endDate),
      end_date_after: cdktf.stringToTerraform(this._endDateAfter),
      executed_by: cdktf.stringToTerraform(this._executedBy),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      include_child_execution: cdktf.booleanToTerraform(this._includeChildExecution),
      mode: cdktf.stringToTerraform(this._mode),
      output_file: cdktf.stringToTerraform(this._outputFile),
      parent_execution_id: cdktf.stringToTerraform(this._parentExecutionId),
      ram_role: cdktf.stringToTerraform(this._ramRole),
      sort_field: cdktf.stringToTerraform(this._sortField),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_date_after: cdktf.stringToTerraform(this._startDateAfter),
      start_date_before: cdktf.stringToTerraform(this._startDateBefore),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date_after: {
        value: cdktf.stringToHclTerraform(this._endDateAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executed_by: {
        value: cdktf.stringToHclTerraform(this._executedBy),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_child_execution: {
        value: cdktf.booleanToHclTerraform(this._includeChildExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      parent_execution_id: {
        value: cdktf.stringToHclTerraform(this._parentExecutionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram_role: {
        value: cdktf.stringToHclTerraform(this._ramRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_field: {
        value: cdktf.stringToHclTerraform(this._sortField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date_after: {
        value: cdktf.stringToHclTerraform(this._startDateAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_date_before: {
        value: cdktf.stringToHclTerraform(this._startDateBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
