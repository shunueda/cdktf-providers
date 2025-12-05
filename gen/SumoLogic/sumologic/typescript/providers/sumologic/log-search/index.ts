// https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#description LogSearch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#id LogSearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#interval_time_type LogSearch#interval_time_type}
  */
  readonly intervalTimeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#name LogSearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#parent_id LogSearch#parent_id}
  */
  readonly parentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#parsing_mode LogSearch#parsing_mode}
  */
  readonly parsingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#query_string LogSearch#query_string}
  */
  readonly queryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#run_by_receipt_time LogSearch#run_by_receipt_time}
  */
  readonly runByReceiptTime?: boolean | cdktf.IResolvable;
  /**
  * query_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#query_parameter LogSearch#query_parameter}
  */
  readonly queryParameter?: LogSearchQueryParameter[] | cdktf.IResolvable;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#schedule LogSearch#schedule}
  */
  readonly schedule?: LogSearchSchedule;
  /**
  * time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#time_range LogSearch#time_range}
  */
  readonly timeRange: LogSearchTimeRange;
}
export interface LogSearchQueryParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#data_type LogSearch#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#description LogSearch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#name LogSearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#value LogSearch#value}
  */
  readonly value: string;
}

export function logSearchQueryParameterToTerraform(struct?: LogSearchQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logSearchQueryParameterToHclTerraform(struct?: LogSearchQueryParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class LogSearchQueryParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogSearchQueryParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchQueryParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._description = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._description = value.description;
      this._name = value.name;
      this._value = value.value;
    }
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

export class LogSearchQueryParameterList extends cdktf.ComplexList {
  public internalValue? : LogSearchQueryParameter[] | cdktf.IResolvable

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
  public get(index: number): LogSearchQueryParameterOutputReference {
    return new LogSearchQueryParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogSearchScheduleNotificationAlertSearchNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#source_id LogSearch#source_id}
  */
  readonly sourceId: string;
}

export function logSearchScheduleNotificationAlertSearchNotificationToTerraform(struct?: LogSearchScheduleNotificationAlertSearchNotificationOutputReference | LogSearchScheduleNotificationAlertSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_id: cdktf.stringToTerraform(struct!.sourceId),
  }
}


export function logSearchScheduleNotificationAlertSearchNotificationToHclTerraform(struct?: LogSearchScheduleNotificationAlertSearchNotificationOutputReference | LogSearchScheduleNotificationAlertSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationAlertSearchNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationAlertSearchNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationAlertSearchNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceId = value.sourceId;
    }
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }
}
export interface LogSearchScheduleNotificationCseSignalNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#record_type LogSearch#record_type}
  */
  readonly recordType: string;
}

export function logSearchScheduleNotificationCseSignalNotificationToTerraform(struct?: LogSearchScheduleNotificationCseSignalNotificationOutputReference | LogSearchScheduleNotificationCseSignalNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function logSearchScheduleNotificationCseSignalNotificationToHclTerraform(struct?: LogSearchScheduleNotificationCseSignalNotificationOutputReference | LogSearchScheduleNotificationCseSignalNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationCseSignalNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationCseSignalNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationCseSignalNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordType = value.recordType;
    }
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}
export interface LogSearchScheduleNotificationEmailSearchNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#include_csv_attachment LogSearch#include_csv_attachment}
  */
  readonly includeCsvAttachment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#include_histogram LogSearch#include_histogram}
  */
  readonly includeHistogram?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#include_query LogSearch#include_query}
  */
  readonly includeQuery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#include_result_set LogSearch#include_result_set}
  */
  readonly includeResultSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#subject_template LogSearch#subject_template}
  */
  readonly subjectTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#to_list LogSearch#to_list}
  */
  readonly toList: string[];
}

export function logSearchScheduleNotificationEmailSearchNotificationToTerraform(struct?: LogSearchScheduleNotificationEmailSearchNotificationOutputReference | LogSearchScheduleNotificationEmailSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_csv_attachment: cdktf.booleanToTerraform(struct!.includeCsvAttachment),
    include_histogram: cdktf.booleanToTerraform(struct!.includeHistogram),
    include_query: cdktf.booleanToTerraform(struct!.includeQuery),
    include_result_set: cdktf.booleanToTerraform(struct!.includeResultSet),
    subject_template: cdktf.stringToTerraform(struct!.subjectTemplate),
    to_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.toList),
  }
}


export function logSearchScheduleNotificationEmailSearchNotificationToHclTerraform(struct?: LogSearchScheduleNotificationEmailSearchNotificationOutputReference | LogSearchScheduleNotificationEmailSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_csv_attachment: {
      value: cdktf.booleanToHclTerraform(struct!.includeCsvAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_histogram: {
      value: cdktf.booleanToHclTerraform(struct!.includeHistogram),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_query: {
      value: cdktf.booleanToHclTerraform(struct!.includeQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_result_set: {
      value: cdktf.booleanToHclTerraform(struct!.includeResultSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subject_template: {
      value: cdktf.stringToHclTerraform(struct!.subjectTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.toList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationEmailSearchNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationEmailSearchNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeCsvAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeCsvAttachment = this._includeCsvAttachment;
    }
    if (this._includeHistogram !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHistogram = this._includeHistogram;
    }
    if (this._includeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQuery = this._includeQuery;
    }
    if (this._includeResultSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeResultSet = this._includeResultSet;
    }
    if (this._subjectTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectTemplate = this._subjectTemplate;
    }
    if (this._toList !== undefined) {
      hasAnyValues = true;
      internalValueResult.toList = this._toList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationEmailSearchNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeCsvAttachment = undefined;
      this._includeHistogram = undefined;
      this._includeQuery = undefined;
      this._includeResultSet = undefined;
      this._subjectTemplate = undefined;
      this._toList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeCsvAttachment = value.includeCsvAttachment;
      this._includeHistogram = value.includeHistogram;
      this._includeQuery = value.includeQuery;
      this._includeResultSet = value.includeResultSet;
      this._subjectTemplate = value.subjectTemplate;
      this._toList = value.toList;
    }
  }

  // include_csv_attachment - computed: false, optional: true, required: false
  private _includeCsvAttachment?: boolean | cdktf.IResolvable; 
  public get includeCsvAttachment() {
    return this.getBooleanAttribute('include_csv_attachment');
  }
  public set includeCsvAttachment(value: boolean | cdktf.IResolvable) {
    this._includeCsvAttachment = value;
  }
  public resetIncludeCsvAttachment() {
    this._includeCsvAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCsvAttachmentInput() {
    return this._includeCsvAttachment;
  }

  // include_histogram - computed: false, optional: true, required: false
  private _includeHistogram?: boolean | cdktf.IResolvable; 
  public get includeHistogram() {
    return this.getBooleanAttribute('include_histogram');
  }
  public set includeHistogram(value: boolean | cdktf.IResolvable) {
    this._includeHistogram = value;
  }
  public resetIncludeHistogram() {
    this._includeHistogram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHistogramInput() {
    return this._includeHistogram;
  }

  // include_query - computed: false, optional: true, required: false
  private _includeQuery?: boolean | cdktf.IResolvable; 
  public get includeQuery() {
    return this.getBooleanAttribute('include_query');
  }
  public set includeQuery(value: boolean | cdktf.IResolvable) {
    this._includeQuery = value;
  }
  public resetIncludeQuery() {
    this._includeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQueryInput() {
    return this._includeQuery;
  }

  // include_result_set - computed: false, optional: true, required: false
  private _includeResultSet?: boolean | cdktf.IResolvable; 
  public get includeResultSet() {
    return this.getBooleanAttribute('include_result_set');
  }
  public set includeResultSet(value: boolean | cdktf.IResolvable) {
    this._includeResultSet = value;
  }
  public resetIncludeResultSet() {
    this._includeResultSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResultSetInput() {
    return this._includeResultSet;
  }

  // subject_template - computed: false, optional: true, required: false
  private _subjectTemplate?: string; 
  public get subjectTemplate() {
    return this.getStringAttribute('subject_template');
  }
  public set subjectTemplate(value: string) {
    this._subjectTemplate = value;
  }
  public resetSubjectTemplate() {
    this._subjectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTemplateInput() {
    return this._subjectTemplate;
  }

  // to_list - computed: false, optional: false, required: true
  private _toList?: string[]; 
  public get toList() {
    return this.getListAttribute('to_list');
  }
  public set toList(value: string[]) {
    this._toList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toListInput() {
    return this._toList;
  }
}
export interface LogSearchScheduleNotificationSaveToLookupNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#is_lookup_merge_operation LogSearch#is_lookup_merge_operation}
  */
  readonly isLookupMergeOperation: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#lookup_file_path LogSearch#lookup_file_path}
  */
  readonly lookupFilePath: string;
}

export function logSearchScheduleNotificationSaveToLookupNotificationToTerraform(struct?: LogSearchScheduleNotificationSaveToLookupNotificationOutputReference | LogSearchScheduleNotificationSaveToLookupNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_lookup_merge_operation: cdktf.booleanToTerraform(struct!.isLookupMergeOperation),
    lookup_file_path: cdktf.stringToTerraform(struct!.lookupFilePath),
  }
}


export function logSearchScheduleNotificationSaveToLookupNotificationToHclTerraform(struct?: LogSearchScheduleNotificationSaveToLookupNotificationOutputReference | LogSearchScheduleNotificationSaveToLookupNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_lookup_merge_operation: {
      value: cdktf.booleanToHclTerraform(struct!.isLookupMergeOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lookup_file_path: {
      value: cdktf.stringToHclTerraform(struct!.lookupFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationSaveToLookupNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationSaveToLookupNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isLookupMergeOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLookupMergeOperation = this._isLookupMergeOperation;
    }
    if (this._lookupFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupFilePath = this._lookupFilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationSaveToLookupNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isLookupMergeOperation = undefined;
      this._lookupFilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isLookupMergeOperation = value.isLookupMergeOperation;
      this._lookupFilePath = value.lookupFilePath;
    }
  }

  // is_lookup_merge_operation - computed: false, optional: false, required: true
  private _isLookupMergeOperation?: boolean | cdktf.IResolvable; 
  public get isLookupMergeOperation() {
    return this.getBooleanAttribute('is_lookup_merge_operation');
  }
  public set isLookupMergeOperation(value: boolean | cdktf.IResolvable) {
    this._isLookupMergeOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isLookupMergeOperationInput() {
    return this._isLookupMergeOperation;
  }

  // lookup_file_path - computed: false, optional: false, required: true
  private _lookupFilePath?: string; 
  public get lookupFilePath() {
    return this.getStringAttribute('lookup_file_path');
  }
  public set lookupFilePath(value: string) {
    this._lookupFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupFilePathInput() {
    return this._lookupFilePath;
  }
}
export interface LogSearchScheduleNotificationSaveToViewNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#view_name LogSearch#view_name}
  */
  readonly viewName: string;
}

export function logSearchScheduleNotificationSaveToViewNotificationToTerraform(struct?: LogSearchScheduleNotificationSaveToViewNotificationOutputReference | LogSearchScheduleNotificationSaveToViewNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    view_name: cdktf.stringToTerraform(struct!.viewName),
  }
}


export function logSearchScheduleNotificationSaveToViewNotificationToHclTerraform(struct?: LogSearchScheduleNotificationSaveToViewNotificationOutputReference | LogSearchScheduleNotificationSaveToViewNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    view_name: {
      value: cdktf.stringToHclTerraform(struct!.viewName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationSaveToViewNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationSaveToViewNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._viewName !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewName = this._viewName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationSaveToViewNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._viewName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._viewName = value.viewName;
    }
  }

  // view_name - computed: false, optional: false, required: true
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }
}
export interface LogSearchScheduleNotificationServiceNowSearchNotificationFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#event_type LogSearch#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#node LogSearch#node}
  */
  readonly nodeAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#resource LogSearch#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#severity LogSearch#severity}
  */
  readonly severity?: number;
}

export function logSearchScheduleNotificationServiceNowSearchNotificationFieldsToTerraform(struct?: LogSearchScheduleNotificationServiceNowSearchNotificationFieldsOutputReference | LogSearchScheduleNotificationServiceNowSearchNotificationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    node: cdktf.stringToTerraform(struct!.nodeAttribute),
    resource: cdktf.stringToTerraform(struct!.resource),
    severity: cdktf.numberToTerraform(struct!.severity),
  }
}


export function logSearchScheduleNotificationServiceNowSearchNotificationFieldsToHclTerraform(struct?: LogSearchScheduleNotificationServiceNowSearchNotificationFieldsOutputReference | LogSearchScheduleNotificationServiceNowSearchNotificationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.stringToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.numberToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationServiceNowSearchNotificationFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationServiceNowSearchNotificationFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationServiceNowSearchNotificationFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._node = undefined;
      this._resource = undefined;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._node = value.nodeAttribute;
      this._resource = value.resource;
      this._severity = value.severity;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // node - computed: false, optional: true, required: false
  private _node?: string; 
  public get nodeAttribute() {
    return this.getStringAttribute('node');
  }
  public set nodeAttribute(value: string) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: number; 
  public get severity() {
    return this.getNumberAttribute('severity');
  }
  public set severity(value: number) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface LogSearchScheduleNotificationServiceNowSearchNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#external_id LogSearch#external_id}
  */
  readonly externalId: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#fields LogSearch#fields}
  */
  readonly fields?: LogSearchScheduleNotificationServiceNowSearchNotificationFields;
}

export function logSearchScheduleNotificationServiceNowSearchNotificationToTerraform(struct?: LogSearchScheduleNotificationServiceNowSearchNotificationOutputReference | LogSearchScheduleNotificationServiceNowSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    fields: logSearchScheduleNotificationServiceNowSearchNotificationFieldsToTerraform(struct!.fields),
  }
}


export function logSearchScheduleNotificationServiceNowSearchNotificationToHclTerraform(struct?: LogSearchScheduleNotificationServiceNowSearchNotificationOutputReference | LogSearchScheduleNotificationServiceNowSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: logSearchScheduleNotificationServiceNowSearchNotificationFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationServiceNowSearchNotificationFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationServiceNowSearchNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationServiceNowSearchNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationServiceNowSearchNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._fields.internalValue = value.fields;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new LogSearchScheduleNotificationServiceNowSearchNotificationFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: LogSearchScheduleNotificationServiceNowSearchNotificationFields) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface LogSearchScheduleNotificationWebhookSearchNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#itemize_alerts LogSearch#itemize_alerts}
  */
  readonly itemizeAlerts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#max_itemized_alerts LogSearch#max_itemized_alerts}
  */
  readonly maxItemizedAlerts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#payload LogSearch#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#webhook_id LogSearch#webhook_id}
  */
  readonly webhookId: string;
}

export function logSearchScheduleNotificationWebhookSearchNotificationToTerraform(struct?: LogSearchScheduleNotificationWebhookSearchNotificationOutputReference | LogSearchScheduleNotificationWebhookSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    itemize_alerts: cdktf.booleanToTerraform(struct!.itemizeAlerts),
    max_itemized_alerts: cdktf.numberToTerraform(struct!.maxItemizedAlerts),
    payload: cdktf.stringToTerraform(struct!.payload),
    webhook_id: cdktf.stringToTerraform(struct!.webhookId),
  }
}


export function logSearchScheduleNotificationWebhookSearchNotificationToHclTerraform(struct?: LogSearchScheduleNotificationWebhookSearchNotificationOutputReference | LogSearchScheduleNotificationWebhookSearchNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    itemize_alerts: {
      value: cdktf.booleanToHclTerraform(struct!.itemizeAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_itemized_alerts: {
      value: cdktf.numberToHclTerraform(struct!.maxItemizedAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload: {
      value: cdktf.stringToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_id: {
      value: cdktf.stringToHclTerraform(struct!.webhookId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationWebhookSearchNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotificationWebhookSearchNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemizeAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemizeAlerts = this._itemizeAlerts;
    }
    if (this._maxItemizedAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItemizedAlerts = this._maxItemizedAlerts;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._webhookId !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookId = this._webhookId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotificationWebhookSearchNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._itemizeAlerts = undefined;
      this._maxItemizedAlerts = undefined;
      this._payload = undefined;
      this._webhookId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._itemizeAlerts = value.itemizeAlerts;
      this._maxItemizedAlerts = value.maxItemizedAlerts;
      this._payload = value.payload;
      this._webhookId = value.webhookId;
    }
  }

  // itemize_alerts - computed: false, optional: true, required: false
  private _itemizeAlerts?: boolean | cdktf.IResolvable; 
  public get itemizeAlerts() {
    return this.getBooleanAttribute('itemize_alerts');
  }
  public set itemizeAlerts(value: boolean | cdktf.IResolvable) {
    this._itemizeAlerts = value;
  }
  public resetItemizeAlerts() {
    this._itemizeAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemizeAlertsInput() {
    return this._itemizeAlerts;
  }

  // max_itemized_alerts - computed: false, optional: true, required: false
  private _maxItemizedAlerts?: number; 
  public get maxItemizedAlerts() {
    return this.getNumberAttribute('max_itemized_alerts');
  }
  public set maxItemizedAlerts(value: number) {
    this._maxItemizedAlerts = value;
  }
  public resetMaxItemizedAlerts() {
    this._maxItemizedAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemizedAlertsInput() {
    return this._maxItemizedAlerts;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // webhook_id - computed: false, optional: false, required: true
  private _webhookId?: string; 
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }
  public set webhookId(value: string) {
    this._webhookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookIdInput() {
    return this._webhookId;
  }
}
export interface LogSearchScheduleNotification {
  /**
  * alert_search_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#alert_search_notification LogSearch#alert_search_notification}
  */
  readonly alertSearchNotification?: LogSearchScheduleNotificationAlertSearchNotification;
  /**
  * cse_signal_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#cse_signal_notification LogSearch#cse_signal_notification}
  */
  readonly cseSignalNotification?: LogSearchScheduleNotificationCseSignalNotification;
  /**
  * email_search_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#email_search_notification LogSearch#email_search_notification}
  */
  readonly emailSearchNotification?: LogSearchScheduleNotificationEmailSearchNotification;
  /**
  * save_to_lookup_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#save_to_lookup_notification LogSearch#save_to_lookup_notification}
  */
  readonly saveToLookupNotification?: LogSearchScheduleNotificationSaveToLookupNotification;
  /**
  * save_to_view_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#save_to_view_notification LogSearch#save_to_view_notification}
  */
  readonly saveToViewNotification?: LogSearchScheduleNotificationSaveToViewNotification;
  /**
  * service_now_search_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#service_now_search_notification LogSearch#service_now_search_notification}
  */
  readonly serviceNowSearchNotification?: LogSearchScheduleNotificationServiceNowSearchNotification;
  /**
  * webhook_search_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#webhook_search_notification LogSearch#webhook_search_notification}
  */
  readonly webhookSearchNotification?: LogSearchScheduleNotificationWebhookSearchNotification;
}

export function logSearchScheduleNotificationToTerraform(struct?: LogSearchScheduleNotificationOutputReference | LogSearchScheduleNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_search_notification: logSearchScheduleNotificationAlertSearchNotificationToTerraform(struct!.alertSearchNotification),
    cse_signal_notification: logSearchScheduleNotificationCseSignalNotificationToTerraform(struct!.cseSignalNotification),
    email_search_notification: logSearchScheduleNotificationEmailSearchNotificationToTerraform(struct!.emailSearchNotification),
    save_to_lookup_notification: logSearchScheduleNotificationSaveToLookupNotificationToTerraform(struct!.saveToLookupNotification),
    save_to_view_notification: logSearchScheduleNotificationSaveToViewNotificationToTerraform(struct!.saveToViewNotification),
    service_now_search_notification: logSearchScheduleNotificationServiceNowSearchNotificationToTerraform(struct!.serviceNowSearchNotification),
    webhook_search_notification: logSearchScheduleNotificationWebhookSearchNotificationToTerraform(struct!.webhookSearchNotification),
  }
}


export function logSearchScheduleNotificationToHclTerraform(struct?: LogSearchScheduleNotificationOutputReference | LogSearchScheduleNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_search_notification: {
      value: logSearchScheduleNotificationAlertSearchNotificationToHclTerraform(struct!.alertSearchNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationAlertSearchNotificationList",
    },
    cse_signal_notification: {
      value: logSearchScheduleNotificationCseSignalNotificationToHclTerraform(struct!.cseSignalNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationCseSignalNotificationList",
    },
    email_search_notification: {
      value: logSearchScheduleNotificationEmailSearchNotificationToHclTerraform(struct!.emailSearchNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationEmailSearchNotificationList",
    },
    save_to_lookup_notification: {
      value: logSearchScheduleNotificationSaveToLookupNotificationToHclTerraform(struct!.saveToLookupNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationSaveToLookupNotificationList",
    },
    save_to_view_notification: {
      value: logSearchScheduleNotificationSaveToViewNotificationToHclTerraform(struct!.saveToViewNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationSaveToViewNotificationList",
    },
    service_now_search_notification: {
      value: logSearchScheduleNotificationServiceNowSearchNotificationToHclTerraform(struct!.serviceNowSearchNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationServiceNowSearchNotificationList",
    },
    webhook_search_notification: {
      value: logSearchScheduleNotificationWebhookSearchNotificationToHclTerraform(struct!.webhookSearchNotification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationWebhookSearchNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertSearchNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSearchNotification = this._alertSearchNotification?.internalValue;
    }
    if (this._cseSignalNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cseSignalNotification = this._cseSignalNotification?.internalValue;
    }
    if (this._emailSearchNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSearchNotification = this._emailSearchNotification?.internalValue;
    }
    if (this._saveToLookupNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveToLookupNotification = this._saveToLookupNotification?.internalValue;
    }
    if (this._saveToViewNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveToViewNotification = this._saveToViewNotification?.internalValue;
    }
    if (this._serviceNowSearchNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNowSearchNotification = this._serviceNowSearchNotification?.internalValue;
    }
    if (this._webhookSearchNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookSearchNotification = this._webhookSearchNotification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertSearchNotification.internalValue = undefined;
      this._cseSignalNotification.internalValue = undefined;
      this._emailSearchNotification.internalValue = undefined;
      this._saveToLookupNotification.internalValue = undefined;
      this._saveToViewNotification.internalValue = undefined;
      this._serviceNowSearchNotification.internalValue = undefined;
      this._webhookSearchNotification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertSearchNotification.internalValue = value.alertSearchNotification;
      this._cseSignalNotification.internalValue = value.cseSignalNotification;
      this._emailSearchNotification.internalValue = value.emailSearchNotification;
      this._saveToLookupNotification.internalValue = value.saveToLookupNotification;
      this._saveToViewNotification.internalValue = value.saveToViewNotification;
      this._serviceNowSearchNotification.internalValue = value.serviceNowSearchNotification;
      this._webhookSearchNotification.internalValue = value.webhookSearchNotification;
    }
  }

  // alert_search_notification - computed: false, optional: true, required: false
  private _alertSearchNotification = new LogSearchScheduleNotificationAlertSearchNotificationOutputReference(this, "alert_search_notification");
  public get alertSearchNotification() {
    return this._alertSearchNotification;
  }
  public putAlertSearchNotification(value: LogSearchScheduleNotificationAlertSearchNotification) {
    this._alertSearchNotification.internalValue = value;
  }
  public resetAlertSearchNotification() {
    this._alertSearchNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSearchNotificationInput() {
    return this._alertSearchNotification.internalValue;
  }

  // cse_signal_notification - computed: false, optional: true, required: false
  private _cseSignalNotification = new LogSearchScheduleNotificationCseSignalNotificationOutputReference(this, "cse_signal_notification");
  public get cseSignalNotification() {
    return this._cseSignalNotification;
  }
  public putCseSignalNotification(value: LogSearchScheduleNotificationCseSignalNotification) {
    this._cseSignalNotification.internalValue = value;
  }
  public resetCseSignalNotification() {
    this._cseSignalNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cseSignalNotificationInput() {
    return this._cseSignalNotification.internalValue;
  }

  // email_search_notification - computed: false, optional: true, required: false
  private _emailSearchNotification = new LogSearchScheduleNotificationEmailSearchNotificationOutputReference(this, "email_search_notification");
  public get emailSearchNotification() {
    return this._emailSearchNotification;
  }
  public putEmailSearchNotification(value: LogSearchScheduleNotificationEmailSearchNotification) {
    this._emailSearchNotification.internalValue = value;
  }
  public resetEmailSearchNotification() {
    this._emailSearchNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSearchNotificationInput() {
    return this._emailSearchNotification.internalValue;
  }

  // save_to_lookup_notification - computed: false, optional: true, required: false
  private _saveToLookupNotification = new LogSearchScheduleNotificationSaveToLookupNotificationOutputReference(this, "save_to_lookup_notification");
  public get saveToLookupNotification() {
    return this._saveToLookupNotification;
  }
  public putSaveToLookupNotification(value: LogSearchScheduleNotificationSaveToLookupNotification) {
    this._saveToLookupNotification.internalValue = value;
  }
  public resetSaveToLookupNotification() {
    this._saveToLookupNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveToLookupNotificationInput() {
    return this._saveToLookupNotification.internalValue;
  }

  // save_to_view_notification - computed: false, optional: true, required: false
  private _saveToViewNotification = new LogSearchScheduleNotificationSaveToViewNotificationOutputReference(this, "save_to_view_notification");
  public get saveToViewNotification() {
    return this._saveToViewNotification;
  }
  public putSaveToViewNotification(value: LogSearchScheduleNotificationSaveToViewNotification) {
    this._saveToViewNotification.internalValue = value;
  }
  public resetSaveToViewNotification() {
    this._saveToViewNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveToViewNotificationInput() {
    return this._saveToViewNotification.internalValue;
  }

  // service_now_search_notification - computed: false, optional: true, required: false
  private _serviceNowSearchNotification = new LogSearchScheduleNotificationServiceNowSearchNotificationOutputReference(this, "service_now_search_notification");
  public get serviceNowSearchNotification() {
    return this._serviceNowSearchNotification;
  }
  public putServiceNowSearchNotification(value: LogSearchScheduleNotificationServiceNowSearchNotification) {
    this._serviceNowSearchNotification.internalValue = value;
  }
  public resetServiceNowSearchNotification() {
    this._serviceNowSearchNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowSearchNotificationInput() {
    return this._serviceNowSearchNotification.internalValue;
  }

  // webhook_search_notification - computed: false, optional: true, required: false
  private _webhookSearchNotification = new LogSearchScheduleNotificationWebhookSearchNotificationOutputReference(this, "webhook_search_notification");
  public get webhookSearchNotification() {
    return this._webhookSearchNotification;
  }
  public putWebhookSearchNotification(value: LogSearchScheduleNotificationWebhookSearchNotification) {
    this._webhookSearchNotification.internalValue = value;
  }
  public resetWebhookSearchNotification() {
    this._webhookSearchNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookSearchNotificationInput() {
    return this._webhookSearchNotification.internalValue;
  }
}
export interface LogSearchScheduleParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#name LogSearch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#value LogSearch#value}
  */
  readonly value: string;
}

export function logSearchScheduleParameterToTerraform(struct?: LogSearchScheduleParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function logSearchScheduleParameterToHclTerraform(struct?: LogSearchScheduleParameter | cdktf.IResolvable): any {
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

export class LogSearchScheduleParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogSearchScheduleParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class LogSearchScheduleParameterList extends cdktf.ComplexList {
  public internalValue? : LogSearchScheduleParameter[] | cdktf.IResolvable

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
  public get(index: number): LogSearchScheduleParameterOutputReference {
    return new LogSearchScheduleParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_millis LogSearch#epoch_millis}
  */
  readonly epochMillis: number;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_millis: {
      value: cdktf.numberToHclTerraform(struct!.epochMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time LogSearch#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso8601_time: {
      value: cdktf.stringToHclTerraform(struct!.iso8601Time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#range_name LogSearch#range_name}
  */
  readonly rangeName: string;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time LogSearch#relative_time}
  */
  readonly relativeTime: string;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: cdktf.stringToHclTerraform(struct!.relativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_time_range LogSearch#epoch_time_range}
  */
  readonly epochTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time_range LogSearch#iso8601_time_range}
  */
  readonly iso8601TimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#literal_time_range LogSearch#literal_time_range}
  */
  readonly literalTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time_range LogSearch#relative_time_range}
  */
  readonly relativeTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeList",
    },
    literal_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeList",
    },
    relative_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_millis LogSearch#epoch_millis}
  */
  readonly epochMillis: number;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_millis: {
      value: cdktf.numberToHclTerraform(struct!.epochMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time LogSearch#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso8601_time: {
      value: cdktf.stringToHclTerraform(struct!.iso8601Time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#range_name LogSearch#range_name}
  */
  readonly rangeName: string;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time LogSearch#relative_time}
  */
  readonly relativeTime: string;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: cdktf.stringToHclTerraform(struct!.relativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_time_range LogSearch#epoch_time_range}
  */
  readonly epochTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time_range LogSearch#iso8601_time_range}
  */
  readonly iso8601TimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#literal_time_range LogSearch#literal_time_range}
  */
  readonly literalTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time_range LogSearch#relative_time_range}
  */
  readonly relativeTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeList",
    },
    literal_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeList",
    },
    relative_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange {
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#from LogSearch#from}
  */
  readonly from: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#to LogSearch#to}
  */
  readonly to?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo;
}

export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromToTerraform(struct!.from),
    to: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToToTerraform(struct!.to),
  }
}


export function logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromList",
    },
    to: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}
export interface LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#range_name LogSearch#range_name}
  */
  readonly rangeName: string;
}

export function logSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function logSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeOutputReference | LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface LogSearchScheduleParseableTimeRange {
  /**
  * begin_bounded_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#begin_bounded_time_range LogSearch#begin_bounded_time_range}
  */
  readonly beginBoundedTimeRange?: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange;
  /**
  * complete_literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#complete_literal_time_range LogSearch#complete_literal_time_range}
  */
  readonly completeLiteralTimeRange?: LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange;
}

export function logSearchScheduleParseableTimeRangeToTerraform(struct?: LogSearchScheduleParseableTimeRangeOutputReference | LogSearchScheduleParseableTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_bounded_time_range: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToTerraform(struct!.beginBoundedTimeRange),
    complete_literal_time_range: logSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeToTerraform(struct!.completeLiteralTimeRange),
  }
}


export function logSearchScheduleParseableTimeRangeToHclTerraform(struct?: LogSearchScheduleParseableTimeRangeOutputReference | LogSearchScheduleParseableTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_bounded_time_range: {
      value: logSearchScheduleParseableTimeRangeBeginBoundedTimeRangeToHclTerraform(struct!.beginBoundedTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeList",
    },
    complete_literal_time_range: {
      value: logSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeToHclTerraform(struct!.completeLiteralTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleParseableTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleParseableTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginBoundedTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginBoundedTimeRange = this._beginBoundedTimeRange?.internalValue;
    }
    if (this._completeLiteralTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeLiteralTimeRange = this._completeLiteralTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleParseableTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginBoundedTimeRange.internalValue = undefined;
      this._completeLiteralTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginBoundedTimeRange.internalValue = value.beginBoundedTimeRange;
      this._completeLiteralTimeRange.internalValue = value.completeLiteralTimeRange;
    }
  }

  // begin_bounded_time_range - computed: false, optional: true, required: false
  private _beginBoundedTimeRange = new LogSearchScheduleParseableTimeRangeBeginBoundedTimeRangeOutputReference(this, "begin_bounded_time_range");
  public get beginBoundedTimeRange() {
    return this._beginBoundedTimeRange;
  }
  public putBeginBoundedTimeRange(value: LogSearchScheduleParseableTimeRangeBeginBoundedTimeRange) {
    this._beginBoundedTimeRange.internalValue = value;
  }
  public resetBeginBoundedTimeRange() {
    this._beginBoundedTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginBoundedTimeRangeInput() {
    return this._beginBoundedTimeRange.internalValue;
  }

  // complete_literal_time_range - computed: false, optional: true, required: false
  private _completeLiteralTimeRange = new LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRangeOutputReference(this, "complete_literal_time_range");
  public get completeLiteralTimeRange() {
    return this._completeLiteralTimeRange;
  }
  public putCompleteLiteralTimeRange(value: LogSearchScheduleParseableTimeRangeCompleteLiteralTimeRange) {
    this._completeLiteralTimeRange.internalValue = value;
  }
  public resetCompleteLiteralTimeRange() {
    this._completeLiteralTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLiteralTimeRangeInput() {
    return this._completeLiteralTimeRange.internalValue;
  }
}
export interface LogSearchScheduleThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#count LogSearch#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#operator LogSearch#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#threshold_type LogSearch#threshold_type}
  */
  readonly thresholdType: string;
}

export function logSearchScheduleThresholdToTerraform(struct?: LogSearchScheduleThresholdOutputReference | LogSearchScheduleThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    operator: cdktf.stringToTerraform(struct!.operator),
    threshold_type: cdktf.stringToTerraform(struct!.thresholdType),
  }
}


export function logSearchScheduleThresholdToHclTerraform(struct?: LogSearchScheduleThresholdOutputReference | LogSearchScheduleThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.thresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchScheduleThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._thresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdType = this._thresholdType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchScheduleThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._operator = undefined;
      this._thresholdType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._operator = value.operator;
      this._thresholdType = value.thresholdType;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

  // threshold_type - computed: false, optional: false, required: true
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }
}
export interface LogSearchSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#cron_expression LogSearch#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#mute_error_emails LogSearch#mute_error_emails}
  */
  readonly muteErrorEmails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#schedule_type LogSearch#schedule_type}
  */
  readonly scheduleType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#time_zone LogSearch#time_zone}
  */
  readonly timeZone: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#notification LogSearch#notification}
  */
  readonly notification: LogSearchScheduleNotification;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#parameter LogSearch#parameter}
  */
  readonly parameter?: LogSearchScheduleParameter[] | cdktf.IResolvable;
  /**
  * parseable_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#parseable_time_range LogSearch#parseable_time_range}
  */
  readonly parseableTimeRange: LogSearchScheduleParseableTimeRange;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#threshold LogSearch#threshold}
  */
  readonly threshold?: LogSearchScheduleThreshold;
}

export function logSearchScheduleToTerraform(struct?: LogSearchScheduleOutputReference | LogSearchSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    mute_error_emails: cdktf.booleanToTerraform(struct!.muteErrorEmails),
    schedule_type: cdktf.stringToTerraform(struct!.scheduleType),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    notification: logSearchScheduleNotificationToTerraform(struct!.notification),
    parameter: cdktf.listMapper(logSearchScheduleParameterToTerraform, true)(struct!.parameter),
    parseable_time_range: logSearchScheduleParseableTimeRangeToTerraform(struct!.parseableTimeRange),
    threshold: logSearchScheduleThresholdToTerraform(struct!.threshold),
  }
}


export function logSearchScheduleToHclTerraform(struct?: LogSearchScheduleOutputReference | LogSearchSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mute_error_emails: {
      value: cdktf.booleanToHclTerraform(struct!.muteErrorEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification: {
      value: logSearchScheduleNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleNotificationList",
    },
    parameter: {
      value: cdktf.listMapperHcl(logSearchScheduleParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParameterList",
    },
    parseable_time_range: {
      value: logSearchScheduleParseableTimeRangeToHclTerraform(struct!.parseableTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleParseableTimeRangeList",
    },
    threshold: {
      value: logSearchScheduleThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchScheduleThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._muteErrorEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.muteErrorEmails = this._muteErrorEmails;
    }
    if (this._scheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleType = this._scheduleType;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    if (this._parseableTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseableTimeRange = this._parseableTimeRange?.internalValue;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._muteErrorEmails = undefined;
      this._scheduleType = undefined;
      this._timeZone = undefined;
      this._notification.internalValue = undefined;
      this._parameter.internalValue = undefined;
      this._parseableTimeRange.internalValue = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._muteErrorEmails = value.muteErrorEmails;
      this._scheduleType = value.scheduleType;
      this._timeZone = value.timeZone;
      this._notification.internalValue = value.notification;
      this._parameter.internalValue = value.parameter;
      this._parseableTimeRange.internalValue = value.parseableTimeRange;
      this._threshold.internalValue = value.threshold;
    }
  }

  // cron_expression - computed: false, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // mute_error_emails - computed: false, optional: true, required: false
  private _muteErrorEmails?: boolean | cdktf.IResolvable; 
  public get muteErrorEmails() {
    return this.getBooleanAttribute('mute_error_emails');
  }
  public set muteErrorEmails(value: boolean | cdktf.IResolvable) {
    this._muteErrorEmails = value;
  }
  public resetMuteErrorEmails() {
    this._muteErrorEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muteErrorEmailsInput() {
    return this._muteErrorEmails;
  }

  // schedule_type - computed: false, optional: false, required: true
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // notification - computed: false, optional: false, required: true
  private _notification = new LogSearchScheduleNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: LogSearchScheduleNotification) {
    this._notification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new LogSearchScheduleParameterList(this, "parameter", false);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: LogSearchScheduleParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // parseable_time_range - computed: false, optional: false, required: true
  private _parseableTimeRange = new LogSearchScheduleParseableTimeRangeOutputReference(this, "parseable_time_range");
  public get parseableTimeRange() {
    return this._parseableTimeRange;
  }
  public putParseableTimeRange(value: LogSearchScheduleParseableTimeRange) {
    this._parseableTimeRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parseableTimeRangeInput() {
    return this._parseableTimeRange.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new LogSearchScheduleThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: LogSearchScheduleThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_millis LogSearch#epoch_millis}
  */
  readonly epochMillis: number;
}

export function logSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_millis: {
      value: cdktf.numberToHclTerraform(struct!.epochMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time LogSearch#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function logSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso8601_time: {
      value: cdktf.stringToHclTerraform(struct!.iso8601Time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#range_name LogSearch#range_name}
  */
  readonly rangeName: string;
}

export function logSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time LogSearch#relative_time}
  */
  readonly relativeTime: string;
}

export function logSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: cdktf.stringToHclTerraform(struct!.relativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeFrom {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_time_range LogSearch#epoch_time_range}
  */
  readonly epochTimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time_range LogSearch#iso8601_time_range}
  */
  readonly iso8601TimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#literal_time_range LogSearch#literal_time_range}
  */
  readonly literalTimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time_range LogSearch#relative_time_range}
  */
  readonly relativeTimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange;
}

export function logSearchTimeRangeBeginBoundedTimeRangeFromToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: logSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: logSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: logSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: logSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeFromOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeList",
    },
    literal_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeList",
    },
    relative_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeFromEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeFromIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeFromLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeFromRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_millis LogSearch#epoch_millis}
  */
  readonly epochMillis: number;
}

export function logSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_millis: cdktf.numberToTerraform(struct!.epochMillis),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_millis: {
      value: cdktf.numberToHclTerraform(struct!.epochMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochMillis = this._epochMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochMillis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochMillis = value.epochMillis;
    }
  }

  // epoch_millis - computed: false, optional: false, required: true
  private _epochMillis?: number; 
  public get epochMillis() {
    return this.getNumberAttribute('epoch_millis');
  }
  public set epochMillis(value: number) {
    this._epochMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get epochMillisInput() {
    return this._epochMillis;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time LogSearch#iso8601_time}
  */
  readonly iso8601Time: string;
}

export function logSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso8601_time: cdktf.stringToTerraform(struct!.iso8601Time),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso8601_time: {
      value: cdktf.stringToHclTerraform(struct!.iso8601Time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iso8601Time !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601Time = this._iso8601Time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iso8601Time = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iso8601Time = value.iso8601Time;
    }
  }

  // iso8601_time - computed: false, optional: false, required: true
  private _iso8601Time?: string; 
  public get iso8601Time() {
    return this.getStringAttribute('iso8601_time');
  }
  public set iso8601Time(value: string) {
    this._iso8601Time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeInput() {
    return this._iso8601Time;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#range_name LogSearch#range_name}
  */
  readonly rangeName: string;
}

export function logSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time LogSearch#relative_time}
  */
  readonly relativeTime: string;
}

export function logSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relative_time: cdktf.stringToTerraform(struct!.relativeTime),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relative_time: {
      value: cdktf.stringToHclTerraform(struct!.relativeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relativeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTime = this._relativeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relativeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relativeTime = value.relativeTime;
    }
  }

  // relative_time - computed: false, optional: false, required: true
  private _relativeTime?: string; 
  public get relativeTime() {
    return this.getStringAttribute('relative_time');
  }
  public set relativeTime(value: string) {
    this._relativeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeInput() {
    return this._relativeTime;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRangeTo {
  /**
  * epoch_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#epoch_time_range LogSearch#epoch_time_range}
  */
  readonly epochTimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange;
  /**
  * iso8601_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#iso8601_time_range LogSearch#iso8601_time_range}
  */
  readonly iso8601TimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange;
  /**
  * literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#literal_time_range LogSearch#literal_time_range}
  */
  readonly literalTimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange;
  /**
  * relative_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#relative_time_range LogSearch#relative_time_range}
  */
  readonly relativeTimeRange?: LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange;
}

export function logSearchTimeRangeBeginBoundedTimeRangeToToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    epoch_time_range: logSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToTerraform(struct!.epochTimeRange),
    iso8601_time_range: logSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToTerraform(struct!.iso8601TimeRange),
    literal_time_range: logSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToTerraform(struct!.literalTimeRange),
    relative_time_range: logSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToTerraform(struct!.relativeTimeRange),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeToToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeToOutputReference | LogSearchTimeRangeBeginBoundedTimeRangeTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    epoch_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeToHclTerraform(struct!.epochTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeList",
    },
    iso8601_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeToHclTerraform(struct!.iso8601TimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeList",
    },
    literal_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeToHclTerraform(struct!.literalTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeList",
    },
    relative_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeToHclTerraform(struct!.relativeTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRangeTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._epochTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.epochTimeRange = this._epochTimeRange?.internalValue;
    }
    if (this._iso8601TimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iso8601TimeRange = this._iso8601TimeRange?.internalValue;
    }
    if (this._literalTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.literalTimeRange = this._literalTimeRange?.internalValue;
    }
    if (this._relativeTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeTimeRange = this._relativeTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRangeTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._epochTimeRange.internalValue = undefined;
      this._iso8601TimeRange.internalValue = undefined;
      this._literalTimeRange.internalValue = undefined;
      this._relativeTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._epochTimeRange.internalValue = value.epochTimeRange;
      this._iso8601TimeRange.internalValue = value.iso8601TimeRange;
      this._literalTimeRange.internalValue = value.literalTimeRange;
      this._relativeTimeRange.internalValue = value.relativeTimeRange;
    }
  }

  // epoch_time_range - computed: false, optional: true, required: false
  private _epochTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRangeOutputReference(this, "epoch_time_range");
  public get epochTimeRange() {
    return this._epochTimeRange;
  }
  public putEpochTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeToEpochTimeRange) {
    this._epochTimeRange.internalValue = value;
  }
  public resetEpochTimeRange() {
    this._epochTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epochTimeRangeInput() {
    return this._epochTimeRange.internalValue;
  }

  // iso8601_time_range - computed: false, optional: true, required: false
  private _iso8601TimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRangeOutputReference(this, "iso8601_time_range");
  public get iso8601TimeRange() {
    return this._iso8601TimeRange;
  }
  public putIso8601TimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeToIso8601TimeRange) {
    this._iso8601TimeRange.internalValue = value;
  }
  public resetIso8601TimeRange() {
    this._iso8601TimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iso8601TimeRangeInput() {
    return this._iso8601TimeRange.internalValue;
  }

  // literal_time_range - computed: false, optional: true, required: false
  private _literalTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRangeOutputReference(this, "literal_time_range");
  public get literalTimeRange() {
    return this._literalTimeRange;
  }
  public putLiteralTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeToLiteralTimeRange) {
    this._literalTimeRange.internalValue = value;
  }
  public resetLiteralTimeRange() {
    this._literalTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalTimeRangeInput() {
    return this._literalTimeRange.internalValue;
  }

  // relative_time_range - computed: false, optional: true, required: false
  private _relativeTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRangeOutputReference(this, "relative_time_range");
  public get relativeTimeRange() {
    return this._relativeTimeRange;
  }
  public putRelativeTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRangeToRelativeTimeRange) {
    this._relativeTimeRange.internalValue = value;
  }
  public resetRelativeTimeRange() {
    this._relativeTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeTimeRangeInput() {
    return this._relativeTimeRange.internalValue;
  }
}
export interface LogSearchTimeRangeBeginBoundedTimeRange {
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#from LogSearch#from}
  */
  readonly from: LogSearchTimeRangeBeginBoundedTimeRangeFrom;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#to LogSearch#to}
  */
  readonly to?: LogSearchTimeRangeBeginBoundedTimeRangeTo;
}

export function logSearchTimeRangeBeginBoundedTimeRangeToTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: logSearchTimeRangeBeginBoundedTimeRangeFromToTerraform(struct!.from),
    to: logSearchTimeRangeBeginBoundedTimeRangeToToTerraform(struct!.to),
  }
}


export function logSearchTimeRangeBeginBoundedTimeRangeToHclTerraform(struct?: LogSearchTimeRangeBeginBoundedTimeRangeOutputReference | LogSearchTimeRangeBeginBoundedTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: logSearchTimeRangeBeginBoundedTimeRangeFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeFromList",
    },
    to: {
      value: logSearchTimeRangeBeginBoundedTimeRangeToToHclTerraform(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeBeginBoundedTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeBeginBoundedTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeBeginBoundedTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from.internalValue = value.from;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new LogSearchTimeRangeBeginBoundedTimeRangeFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: LogSearchTimeRangeBeginBoundedTimeRangeFrom) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new LogSearchTimeRangeBeginBoundedTimeRangeToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: LogSearchTimeRangeBeginBoundedTimeRangeTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}
export interface LogSearchTimeRangeCompleteLiteralTimeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#range_name LogSearch#range_name}
  */
  readonly rangeName: string;
}

export function logSearchTimeRangeCompleteLiteralTimeRangeToTerraform(struct?: LogSearchTimeRangeCompleteLiteralTimeRangeOutputReference | LogSearchTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range_name: cdktf.stringToTerraform(struct!.rangeName),
  }
}


export function logSearchTimeRangeCompleteLiteralTimeRangeToHclTerraform(struct?: LogSearchTimeRangeCompleteLiteralTimeRangeOutputReference | LogSearchTimeRangeCompleteLiteralTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range_name: {
      value: cdktf.stringToHclTerraform(struct!.rangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeCompleteLiteralTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRangeCompleteLiteralTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRangeCompleteLiteralTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rangeName = value.rangeName;
    }
  }

  // range_name - computed: false, optional: false, required: true
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}
export interface LogSearchTimeRange {
  /**
  * begin_bounded_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#begin_bounded_time_range LogSearch#begin_bounded_time_range}
  */
  readonly beginBoundedTimeRange?: LogSearchTimeRangeBeginBoundedTimeRange;
  /**
  * complete_literal_time_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#complete_literal_time_range LogSearch#complete_literal_time_range}
  */
  readonly completeLiteralTimeRange?: LogSearchTimeRangeCompleteLiteralTimeRange;
}

export function logSearchTimeRangeToTerraform(struct?: LogSearchTimeRangeOutputReference | LogSearchTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin_bounded_time_range: logSearchTimeRangeBeginBoundedTimeRangeToTerraform(struct!.beginBoundedTimeRange),
    complete_literal_time_range: logSearchTimeRangeCompleteLiteralTimeRangeToTerraform(struct!.completeLiteralTimeRange),
  }
}


export function logSearchTimeRangeToHclTerraform(struct?: LogSearchTimeRangeOutputReference | LogSearchTimeRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin_bounded_time_range: {
      value: logSearchTimeRangeBeginBoundedTimeRangeToHclTerraform(struct!.beginBoundedTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeBeginBoundedTimeRangeList",
    },
    complete_literal_time_range: {
      value: logSearchTimeRangeCompleteLiteralTimeRangeToHclTerraform(struct!.completeLiteralTimeRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogSearchTimeRangeCompleteLiteralTimeRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSearchTimeRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogSearchTimeRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beginBoundedTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beginBoundedTimeRange = this._beginBoundedTimeRange?.internalValue;
    }
    if (this._completeLiteralTimeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeLiteralTimeRange = this._completeLiteralTimeRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSearchTimeRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._beginBoundedTimeRange.internalValue = undefined;
      this._completeLiteralTimeRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._beginBoundedTimeRange.internalValue = value.beginBoundedTimeRange;
      this._completeLiteralTimeRange.internalValue = value.completeLiteralTimeRange;
    }
  }

  // begin_bounded_time_range - computed: false, optional: true, required: false
  private _beginBoundedTimeRange = new LogSearchTimeRangeBeginBoundedTimeRangeOutputReference(this, "begin_bounded_time_range");
  public get beginBoundedTimeRange() {
    return this._beginBoundedTimeRange;
  }
  public putBeginBoundedTimeRange(value: LogSearchTimeRangeBeginBoundedTimeRange) {
    this._beginBoundedTimeRange.internalValue = value;
  }
  public resetBeginBoundedTimeRange() {
    this._beginBoundedTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beginBoundedTimeRangeInput() {
    return this._beginBoundedTimeRange.internalValue;
  }

  // complete_literal_time_range - computed: false, optional: true, required: false
  private _completeLiteralTimeRange = new LogSearchTimeRangeCompleteLiteralTimeRangeOutputReference(this, "complete_literal_time_range");
  public get completeLiteralTimeRange() {
    return this._completeLiteralTimeRange;
  }
  public putCompleteLiteralTimeRange(value: LogSearchTimeRangeCompleteLiteralTimeRange) {
    this._completeLiteralTimeRange.internalValue = value;
  }
  public resetCompleteLiteralTimeRange() {
    this._completeLiteralTimeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeLiteralTimeRangeInput() {
    return this._completeLiteralTimeRange.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search sumologic_log_search}
*/
export class LogSearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_log_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogSearch to import
  * @param importFromId The id of the existing LogSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_log_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.1/docs/resources/log_search sumologic_log_search} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogSearchConfig
  */
  public constructor(scope: Construct, id: string, config: LogSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_log_search',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.1',
        providerVersionConstraint: '3.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._intervalTimeType = config.intervalTimeType;
    this._name = config.name;
    this._parentId = config.parentId;
    this._parsingMode = config.parsingMode;
    this._queryString = config.queryString;
    this._runByReceiptTime = config.runByReceiptTime;
    this._queryParameter.internalValue = config.queryParameter;
    this._schedule.internalValue = config.schedule;
    this._timeRange.internalValue = config.timeRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interval_time_type - computed: true, optional: true, required: false
  private _intervalTimeType?: string; 
  public get intervalTimeType() {
    return this.getStringAttribute('interval_time_type');
  }
  public set intervalTimeType(value: string) {
    this._intervalTimeType = value;
  }
  public resetIntervalTimeType() {
    this._intervalTimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalTimeTypeInput() {
    return this._intervalTimeType;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // parsing_mode - computed: false, optional: true, required: false
  private _parsingMode?: string; 
  public get parsingMode() {
    return this.getStringAttribute('parsing_mode');
  }
  public set parsingMode(value: string) {
    this._parsingMode = value;
  }
  public resetParsingMode() {
    this._parsingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingModeInput() {
    return this._parsingMode;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // run_by_receipt_time - computed: false, optional: true, required: false
  private _runByReceiptTime?: boolean | cdktf.IResolvable; 
  public get runByReceiptTime() {
    return this.getBooleanAttribute('run_by_receipt_time');
  }
  public set runByReceiptTime(value: boolean | cdktf.IResolvable) {
    this._runByReceiptTime = value;
  }
  public resetRunByReceiptTime() {
    this._runByReceiptTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runByReceiptTimeInput() {
    return this._runByReceiptTime;
  }

  // query_parameter - computed: false, optional: true, required: false
  private _queryParameter = new LogSearchQueryParameterList(this, "query_parameter", false);
  public get queryParameter() {
    return this._queryParameter;
  }
  public putQueryParameter(value: LogSearchQueryParameter[] | cdktf.IResolvable) {
    this._queryParameter.internalValue = value;
  }
  public resetQueryParameter() {
    this._queryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterInput() {
    return this._queryParameter.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new LogSearchScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LogSearchSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // time_range - computed: false, optional: false, required: true
  private _timeRange = new LogSearchTimeRangeOutputReference(this, "time_range");
  public get timeRange() {
    return this._timeRange;
  }
  public putTimeRange(value: LogSearchTimeRange) {
    this._timeRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      interval_time_type: cdktf.stringToTerraform(this._intervalTimeType),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      parsing_mode: cdktf.stringToTerraform(this._parsingMode),
      query_string: cdktf.stringToTerraform(this._queryString),
      run_by_receipt_time: cdktf.booleanToTerraform(this._runByReceiptTime),
      query_parameter: cdktf.listMapper(logSearchQueryParameterToTerraform, true)(this._queryParameter.internalValue),
      schedule: logSearchScheduleToTerraform(this._schedule.internalValue),
      time_range: logSearchTimeRangeToTerraform(this._timeRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      interval_time_type: {
        value: cdktf.stringToHclTerraform(this._intervalTimeType),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parsing_mode: {
        value: cdktf.stringToHclTerraform(this._parsingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_string: {
        value: cdktf.stringToHclTerraform(this._queryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_by_receipt_time: {
        value: cdktf.booleanToHclTerraform(this._runByReceiptTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_parameter: {
        value: cdktf.listMapperHcl(logSearchQueryParameterToHclTerraform, true)(this._queryParameter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogSearchQueryParameterList",
      },
      schedule: {
        value: logSearchScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogSearchScheduleList",
      },
      time_range: {
        value: logSearchTimeRangeToHclTerraform(this._timeRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogSearchTimeRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
