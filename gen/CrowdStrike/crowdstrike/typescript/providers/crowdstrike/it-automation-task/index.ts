// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItAutomationTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access control configuration for the task (Public, Shared). Cannot be configured when the task belongs to a task group; inherited from the group instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#access_type ItAutomationTask#access_type}
  */
  readonly accessType?: string;
  /**
  * Additional RTR Response file IDs (65 characters) to be available for the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#additional_file_ids ItAutomationTask#additional_file_ids}
  */
  readonly additionalFileIds?: string[];
  /**
  * Assigned user IDs of the task, when access_type is Shared. Required when access_type is 'Shared' and the task is not part of a task group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#assigned_user_ids ItAutomationTask#assigned_user_ids}
  */
  readonly assignedUserIds?: string[];
  /**
  * Description of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#description ItAutomationTask#description}
  */
  readonly description?: string;
  /**
  * Linux script content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#linux_script_content ItAutomationTask#linux_script_content}
  */
  readonly linuxScriptContent?: string;
  /**
  * Linux RTR Response script ID (65 characters) to be used by the task. This option disables linux_script_content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#linux_script_file_id ItAutomationTask#linux_script_file_id}
  */
  readonly linuxScriptFileId?: string;
  /**
  * Linux script language (bash, python).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#linux_script_language ItAutomationTask#linux_script_language}
  */
  readonly linuxScriptLanguage?: string;
  /**
  * Mac script content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#mac_script_content ItAutomationTask#mac_script_content}
  */
  readonly macScriptContent?: string;
  /**
  * Mac RTR Response script ID (65 characters) to be used by the task. This option disables mac_script_content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#mac_script_file_id ItAutomationTask#mac_script_file_id}
  */
  readonly macScriptFileId?: string;
  /**
  * Mac script language (zsh, python).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#mac_script_language ItAutomationTask#mac_script_language}
  */
  readonly macScriptLanguage?: string;
  /**
  * Name of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#name ItAutomationTask#name}
  */
  readonly name: string;
  /**
  * OSQuery string. This option will disable the task script options. See https://osquery.readthedocs.io/en/stable for syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#os_query ItAutomationTask#os_query}
  */
  readonly osQuery?: string;
  /**
  * Column configuration for the script output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#script_columns ItAutomationTask#script_columns}
  */
  readonly scriptColumns?: ItAutomationTaskScriptColumns;
  /**
  * Target of the task in FQL string syntax. See https://falconpy.io/Usage/Falcon-Query-Language.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#target ItAutomationTask#target}
  */
  readonly target?: string;
  /**
  * Type of task (action, query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#type ItAutomationTask#type}
  */
  readonly type: string;
  /**
  * Verification conditions for action tasks to determine success (only valid for action tasks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#verification_condition ItAutomationTask#verification_condition}
  */
  readonly verificationCondition?: ItAutomationTaskVerificationCondition[] | cdktf.IResolvable;
  /**
  * Windows script content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#windows_script_content ItAutomationTask#windows_script_content}
  */
  readonly windowsScriptContent?: string;
  /**
  * Windows RTR Response script ID (65 characters) to be used by the task. This option disables windows_script_content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#windows_script_file_id ItAutomationTask#windows_script_file_id}
  */
  readonly windowsScriptFileId?: string;
  /**
  * Windows script language (powershell, python).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#windows_script_language ItAutomationTask#windows_script_language}
  */
  readonly windowsScriptLanguage?: string;
}
export interface ItAutomationTaskScriptColumnsColumns {
  /**
  * Name of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#name ItAutomationTask#name}
  */
  readonly name: string;
}

export function itAutomationTaskScriptColumnsColumnsToTerraform(struct?: ItAutomationTaskScriptColumnsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function itAutomationTaskScriptColumnsColumnsToHclTerraform(struct?: ItAutomationTaskScriptColumnsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItAutomationTaskScriptColumnsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItAutomationTaskScriptColumnsColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItAutomationTaskScriptColumnsColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class ItAutomationTaskScriptColumnsColumnsList extends cdktf.ComplexList {
  public internalValue? : ItAutomationTaskScriptColumnsColumns[] | cdktf.IResolvable

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
  public get(index: number): ItAutomationTaskScriptColumnsColumnsOutputReference {
    return new ItAutomationTaskScriptColumnsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItAutomationTaskScriptColumns {
  /**
  * List of column definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#columns ItAutomationTask#columns}
  */
  readonly columns: ItAutomationTaskScriptColumnsColumns[] | cdktf.IResolvable;
  /**
  * Delimiter character for script columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#delimiter ItAutomationTask#delimiter}
  */
  readonly delimiter: string;
  /**
  * Whether to group results by column values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#group_results ItAutomationTask#group_results}
  */
  readonly groupResults?: boolean | cdktf.IResolvable;
}

export function itAutomationTaskScriptColumnsToTerraform(struct?: ItAutomationTaskScriptColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(itAutomationTaskScriptColumnsColumnsToTerraform, false)(struct!.columns),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    group_results: cdktf.booleanToTerraform(struct!.groupResults),
  }
}


export function itAutomationTaskScriptColumnsToHclTerraform(struct?: ItAutomationTaskScriptColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(itAutomationTaskScriptColumnsColumnsToHclTerraform, false)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "ItAutomationTaskScriptColumnsColumnsList",
    },
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_results: {
      value: cdktf.booleanToHclTerraform(struct!.groupResults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItAutomationTaskScriptColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ItAutomationTaskScriptColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._groupResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupResults = this._groupResults;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItAutomationTaskScriptColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._delimiter = undefined;
      this._groupResults = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._delimiter = value.delimiter;
      this._groupResults = value.groupResults;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new ItAutomationTaskScriptColumnsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: ItAutomationTaskScriptColumnsColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // group_results - computed: false, optional: true, required: false
  private _groupResults?: boolean | cdktf.IResolvable; 
  public get groupResults() {
    return this.getBooleanAttribute('group_results');
  }
  public set groupResults(value: boolean | cdktf.IResolvable) {
    this._groupResults = value;
  }
  public resetGroupResults() {
    this._groupResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupResultsInput() {
    return this._groupResults;
  }
}
export interface ItAutomationTaskVerificationConditionStatements {
  /**
  * Comparison operator for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#data_comparator ItAutomationTask#data_comparator}
  */
  readonly dataComparator: string;
  /**
  * Type of data being compared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#data_type ItAutomationTask#data_type}
  */
  readonly dataType: string;
  /**
  * Key to compare (e.g., script_output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#key ItAutomationTask#key}
  */
  readonly key: string;
  /**
  * ID of the task to query for results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#task_id ItAutomationTask#task_id}
  */
  readonly taskId: string;
  /**
  * Value to compare against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#value ItAutomationTask#value}
  */
  readonly value: string;
}

export function itAutomationTaskVerificationConditionStatementsToTerraform(struct?: ItAutomationTaskVerificationConditionStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_comparator: cdktf.stringToTerraform(struct!.dataComparator),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    key: cdktf.stringToTerraform(struct!.key),
    task_id: cdktf.stringToTerraform(struct!.taskId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function itAutomationTaskVerificationConditionStatementsToHclTerraform(struct?: ItAutomationTaskVerificationConditionStatements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_comparator: {
      value: cdktf.stringToHclTerraform(struct!.dataComparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_id: {
      value: cdktf.stringToHclTerraform(struct!.taskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItAutomationTaskVerificationConditionStatementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItAutomationTaskVerificationConditionStatements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataComparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataComparator = this._dataComparator;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._taskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskId = this._taskId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItAutomationTaskVerificationConditionStatements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataComparator = undefined;
      this._dataType = undefined;
      this._key = undefined;
      this._taskId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataComparator = value.dataComparator;
      this._dataType = value.dataType;
      this._key = value.key;
      this._taskId = value.taskId;
      this._value = value.value;
    }
  }

  // data_comparator - computed: false, optional: false, required: true
  private _dataComparator?: string; 
  public get dataComparator() {
    return this.getStringAttribute('data_comparator');
  }
  public set dataComparator(value: string) {
    this._dataComparator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataComparatorInput() {
    return this._dataComparator;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // task_id - computed: false, optional: false, required: true
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ItAutomationTaskVerificationConditionStatementsList extends cdktf.ComplexList {
  public internalValue? : ItAutomationTaskVerificationConditionStatements[] | cdktf.IResolvable

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
  public get(index: number): ItAutomationTaskVerificationConditionStatementsOutputReference {
    return new ItAutomationTaskVerificationConditionStatementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItAutomationTaskVerificationCondition {
  /**
  * Logical operator for the statements (AND, OR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#operator ItAutomationTask#operator}
  */
  readonly operator: string;
  /**
  * List of verification statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#statements ItAutomationTask#statements}
  */
  readonly statements: ItAutomationTaskVerificationConditionStatements[] | cdktf.IResolvable;
}

export function itAutomationTaskVerificationConditionToTerraform(struct?: ItAutomationTaskVerificationCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    statements: cdktf.listMapper(itAutomationTaskVerificationConditionStatementsToTerraform, false)(struct!.statements),
  }
}


export function itAutomationTaskVerificationConditionToHclTerraform(struct?: ItAutomationTaskVerificationCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statements: {
      value: cdktf.listMapperHcl(itAutomationTaskVerificationConditionStatementsToHclTerraform, false)(struct!.statements),
      isBlock: true,
      type: "list",
      storageClassType: "ItAutomationTaskVerificationConditionStatementsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItAutomationTaskVerificationConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItAutomationTaskVerificationCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._statements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statements = this._statements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItAutomationTaskVerificationCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._statements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._statements.internalValue = value.statements;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // statements - computed: false, optional: false, required: true
  private _statements = new ItAutomationTaskVerificationConditionStatementsList(this, "statements", false);
  public get statements() {
    return this._statements;
  }
  public putStatements(value: ItAutomationTaskVerificationConditionStatements[] | cdktf.IResolvable) {
    this._statements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementsInput() {
    return this._statements.internalValue;
  }
}

export class ItAutomationTaskVerificationConditionList extends cdktf.ComplexList {
  public internalValue? : ItAutomationTaskVerificationCondition[] | cdktf.IResolvable

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
  public get(index: number): ItAutomationTaskVerificationConditionOutputReference {
    return new ItAutomationTaskVerificationConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task crowdstrike_it_automation_task}
*/
export class ItAutomationTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_it_automation_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItAutomationTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItAutomationTask to import
  * @param importFromId The id of the existing ItAutomationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItAutomationTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_it_automation_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/it_automation_task crowdstrike_it_automation_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItAutomationTaskConfig
  */
  public constructor(scope: Construct, id: string, config: ItAutomationTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_it_automation_task',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.43',
        providerVersionConstraint: '0.0.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessType = config.accessType;
    this._additionalFileIds = config.additionalFileIds;
    this._assignedUserIds = config.assignedUserIds;
    this._description = config.description;
    this._linuxScriptContent = config.linuxScriptContent;
    this._linuxScriptFileId = config.linuxScriptFileId;
    this._linuxScriptLanguage = config.linuxScriptLanguage;
    this._macScriptContent = config.macScriptContent;
    this._macScriptFileId = config.macScriptFileId;
    this._macScriptLanguage = config.macScriptLanguage;
    this._name = config.name;
    this._osQuery = config.osQuery;
    this._scriptColumns.internalValue = config.scriptColumns;
    this._target = config.target;
    this._type = config.type;
    this._verificationCondition.internalValue = config.verificationCondition;
    this._windowsScriptContent = config.windowsScriptContent;
    this._windowsScriptFileId = config.windowsScriptFileId;
    this._windowsScriptLanguage = config.windowsScriptLanguage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: true, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // additional_file_ids - computed: false, optional: true, required: false
  private _additionalFileIds?: string[]; 
  public get additionalFileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_file_ids'));
  }
  public set additionalFileIds(value: string[]) {
    this._additionalFileIds = value;
  }
  public resetAdditionalFileIds() {
    this._additionalFileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFileIdsInput() {
    return this._additionalFileIds;
  }

  // assigned_user_ids - computed: true, optional: true, required: false
  private _assignedUserIds?: string[]; 
  public get assignedUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_user_ids'));
  }
  public set assignedUserIds(value: string[]) {
    this._assignedUserIds = value;
  }
  public resetAssignedUserIds() {
    this._assignedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedUserIdsInput() {
    return this._assignedUserIds;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_access_type - computed: true, optional: false, required: false
  public get effectiveAccessType() {
    return this.getStringAttribute('effective_access_type');
  }

  // effective_assigned_user_ids - computed: true, optional: false, required: false
  public get effectiveAssignedUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('effective_assigned_user_ids'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // linux_script_content - computed: false, optional: true, required: false
  private _linuxScriptContent?: string; 
  public get linuxScriptContent() {
    return this.getStringAttribute('linux_script_content');
  }
  public set linuxScriptContent(value: string) {
    this._linuxScriptContent = value;
  }
  public resetLinuxScriptContent() {
    this._linuxScriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxScriptContentInput() {
    return this._linuxScriptContent;
  }

  // linux_script_file_id - computed: false, optional: true, required: false
  private _linuxScriptFileId?: string; 
  public get linuxScriptFileId() {
    return this.getStringAttribute('linux_script_file_id');
  }
  public set linuxScriptFileId(value: string) {
    this._linuxScriptFileId = value;
  }
  public resetLinuxScriptFileId() {
    this._linuxScriptFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxScriptFileIdInput() {
    return this._linuxScriptFileId;
  }

  // linux_script_language - computed: false, optional: true, required: false
  private _linuxScriptLanguage?: string; 
  public get linuxScriptLanguage() {
    return this.getStringAttribute('linux_script_language');
  }
  public set linuxScriptLanguage(value: string) {
    this._linuxScriptLanguage = value;
  }
  public resetLinuxScriptLanguage() {
    this._linuxScriptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxScriptLanguageInput() {
    return this._linuxScriptLanguage;
  }

  // mac_script_content - computed: false, optional: true, required: false
  private _macScriptContent?: string; 
  public get macScriptContent() {
    return this.getStringAttribute('mac_script_content');
  }
  public set macScriptContent(value: string) {
    this._macScriptContent = value;
  }
  public resetMacScriptContent() {
    this._macScriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macScriptContentInput() {
    return this._macScriptContent;
  }

  // mac_script_file_id - computed: false, optional: true, required: false
  private _macScriptFileId?: string; 
  public get macScriptFileId() {
    return this.getStringAttribute('mac_script_file_id');
  }
  public set macScriptFileId(value: string) {
    this._macScriptFileId = value;
  }
  public resetMacScriptFileId() {
    this._macScriptFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macScriptFileIdInput() {
    return this._macScriptFileId;
  }

  // mac_script_language - computed: false, optional: true, required: false
  private _macScriptLanguage?: string; 
  public get macScriptLanguage() {
    return this.getStringAttribute('mac_script_language');
  }
  public set macScriptLanguage(value: string) {
    this._macScriptLanguage = value;
  }
  public resetMacScriptLanguage() {
    this._macScriptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macScriptLanguageInput() {
    return this._macScriptLanguage;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_query - computed: false, optional: true, required: false
  private _osQuery?: string; 
  public get osQuery() {
    return this.getStringAttribute('os_query');
  }
  public set osQuery(value: string) {
    this._osQuery = value;
  }
  public resetOsQuery() {
    this._osQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osQueryInput() {
    return this._osQuery;
  }

  // script_columns - computed: false, optional: true, required: false
  private _scriptColumns = new ItAutomationTaskScriptColumnsOutputReference(this, "script_columns");
  public get scriptColumns() {
    return this._scriptColumns;
  }
  public putScriptColumns(value: ItAutomationTaskScriptColumns) {
    this._scriptColumns.internalValue = value;
  }
  public resetScriptColumns() {
    this._scriptColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptColumnsInput() {
    return this._scriptColumns.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // task_group_id - computed: true, optional: false, required: false
  public get taskGroupId() {
    return this.getStringAttribute('task_group_id');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verification_condition - computed: false, optional: true, required: false
  private _verificationCondition = new ItAutomationTaskVerificationConditionList(this, "verification_condition", false);
  public get verificationCondition() {
    return this._verificationCondition;
  }
  public putVerificationCondition(value: ItAutomationTaskVerificationCondition[] | cdktf.IResolvable) {
    this._verificationCondition.internalValue = value;
  }
  public resetVerificationCondition() {
    this._verificationCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationConditionInput() {
    return this._verificationCondition.internalValue;
  }

  // windows_script_content - computed: false, optional: true, required: false
  private _windowsScriptContent?: string; 
  public get windowsScriptContent() {
    return this.getStringAttribute('windows_script_content');
  }
  public set windowsScriptContent(value: string) {
    this._windowsScriptContent = value;
  }
  public resetWindowsScriptContent() {
    this._windowsScriptContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsScriptContentInput() {
    return this._windowsScriptContent;
  }

  // windows_script_file_id - computed: false, optional: true, required: false
  private _windowsScriptFileId?: string; 
  public get windowsScriptFileId() {
    return this.getStringAttribute('windows_script_file_id');
  }
  public set windowsScriptFileId(value: string) {
    this._windowsScriptFileId = value;
  }
  public resetWindowsScriptFileId() {
    this._windowsScriptFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsScriptFileIdInput() {
    return this._windowsScriptFileId;
  }

  // windows_script_language - computed: false, optional: true, required: false
  private _windowsScriptLanguage?: string; 
  public get windowsScriptLanguage() {
    return this.getStringAttribute('windows_script_language');
  }
  public set windowsScriptLanguage(value: string) {
    this._windowsScriptLanguage = value;
  }
  public resetWindowsScriptLanguage() {
    this._windowsScriptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsScriptLanguageInput() {
    return this._windowsScriptLanguage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_type: cdktf.stringToTerraform(this._accessType),
      additional_file_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalFileIds),
      assigned_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedUserIds),
      description: cdktf.stringToTerraform(this._description),
      linux_script_content: cdktf.stringToTerraform(this._linuxScriptContent),
      linux_script_file_id: cdktf.stringToTerraform(this._linuxScriptFileId),
      linux_script_language: cdktf.stringToTerraform(this._linuxScriptLanguage),
      mac_script_content: cdktf.stringToTerraform(this._macScriptContent),
      mac_script_file_id: cdktf.stringToTerraform(this._macScriptFileId),
      mac_script_language: cdktf.stringToTerraform(this._macScriptLanguage),
      name: cdktf.stringToTerraform(this._name),
      os_query: cdktf.stringToTerraform(this._osQuery),
      script_columns: itAutomationTaskScriptColumnsToTerraform(this._scriptColumns.internalValue),
      target: cdktf.stringToTerraform(this._target),
      type: cdktf.stringToTerraform(this._type),
      verification_condition: cdktf.listMapper(itAutomationTaskVerificationConditionToTerraform, false)(this._verificationCondition.internalValue),
      windows_script_content: cdktf.stringToTerraform(this._windowsScriptContent),
      windows_script_file_id: cdktf.stringToTerraform(this._windowsScriptFileId),
      windows_script_language: cdktf.stringToTerraform(this._windowsScriptLanguage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_file_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalFileIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      assigned_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedUserIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_script_content: {
        value: cdktf.stringToHclTerraform(this._linuxScriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_script_file_id: {
        value: cdktf.stringToHclTerraform(this._linuxScriptFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_script_language: {
        value: cdktf.stringToHclTerraform(this._linuxScriptLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_script_content: {
        value: cdktf.stringToHclTerraform(this._macScriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_script_file_id: {
        value: cdktf.stringToHclTerraform(this._macScriptFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_script_language: {
        value: cdktf.stringToHclTerraform(this._macScriptLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_query: {
        value: cdktf.stringToHclTerraform(this._osQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_columns: {
        value: itAutomationTaskScriptColumnsToHclTerraform(this._scriptColumns.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ItAutomationTaskScriptColumns",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_condition: {
        value: cdktf.listMapperHcl(itAutomationTaskVerificationConditionToHclTerraform, false)(this._verificationCondition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItAutomationTaskVerificationConditionList",
      },
      windows_script_content: {
        value: cdktf.stringToHclTerraform(this._windowsScriptContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows_script_file_id: {
        value: cdktf.stringToHclTerraform(this._windowsScriptFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      windows_script_language: {
        value: cdktf.stringToHclTerraform(this._windowsScriptLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
