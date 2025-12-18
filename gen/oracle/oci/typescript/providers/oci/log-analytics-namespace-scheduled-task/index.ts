// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogAnalyticsNamespaceScheduledTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id LogAnalyticsNamespaceScheduledTask#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#defined_tags LogAnalyticsNamespaceScheduledTask#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#display_name LogAnalyticsNamespaceScheduledTask#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#freeform_tags LogAnalyticsNamespaceScheduledTask#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#id LogAnalyticsNamespaceScheduledTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#kind LogAnalyticsNamespaceScheduledTask#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#namespace LogAnalyticsNamespaceScheduledTask#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#saved_search_id LogAnalyticsNamespaceScheduledTask#saved_search_id}
  */
  readonly savedSearchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#task_type LogAnalyticsNamespaceScheduledTask#task_type}
  */
  readonly taskType: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#action LogAnalyticsNamespaceScheduledTask#action}
  */
  readonly action: LogAnalyticsNamespaceScheduledTaskAction;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#schedules LogAnalyticsNamespaceScheduledTask#schedules}
  */
  readonly schedules: LogAnalyticsNamespaceScheduledTaskSchedules;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#timeouts LogAnalyticsNamespaceScheduledTask#timeouts}
  */
  readonly timeouts?: LogAnalyticsNamespaceScheduledTaskTimeouts;
}
export interface LogAnalyticsNamespaceScheduledTaskActionMetricExtraction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id LogAnalyticsNamespaceScheduledTask#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#metric_name LogAnalyticsNamespaceScheduledTask#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#namespace LogAnalyticsNamespaceScheduledTask#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#resource_group LogAnalyticsNamespaceScheduledTask#resource_group}
  */
  readonly resourceGroup?: string;
}

export function logAnalyticsNamespaceScheduledTaskActionMetricExtractionToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference | LogAnalyticsNamespaceScheduledTaskActionMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function logAnalyticsNamespaceScheduledTaskActionMetricExtractionToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference | LogAnalyticsNamespaceScheduledTaskActionMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskActionMetricExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskActionMetricExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}
export interface LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#key_field LogAnalyticsNamespaceScheduledTask#key_field}
  */
  readonly keyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#value_field LogAnalyticsNamespaceScheduledTask#value_field}
  */
  readonly valueField?: string;
}

export function logAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_field: cdktf.stringToTerraform(struct!.keyField),
    value_field: cdktf.stringToTerraform(struct!.valueField),
  }
}


export function logAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_field: {
      value: cdktf.stringToHclTerraform(struct!.keyField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_field: {
      value: cdktf.stringToHclTerraform(struct!.valueField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyField !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyField = this._keyField;
    }
    if (this._valueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueField = this._valueField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyField = undefined;
      this._valueField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyField = value.keyField;
      this._valueField = value.valueField;
    }
  }

  // key_field - computed: true, optional: true, required: false
  private _keyField?: string; 
  public get keyField() {
    return this.getStringAttribute('key_field');
  }
  public set keyField(value: string) {
    this._keyField = value;
  }
  public resetKeyField() {
    this._keyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFieldInput() {
    return this._keyField;
  }

  // value_field - computed: true, optional: true, required: false
  private _valueField?: string; 
  public get valueField() {
    return this.getStringAttribute('value_field');
  }
  public set valueField(value: string) {
    this._valueField = value;
  }
  public resetValueField() {
    this._valueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFieldInput() {
    return this._valueField;
  }
}

export class LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsOutputReference {
    return new LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceScheduledTaskActionTemplateDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#template_id LogAnalyticsNamespaceScheduledTask#template_id}
  */
  readonly templateId?: string;
  /**
  * template_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#template_params LogAnalyticsNamespaceScheduledTask#template_params}
  */
  readonly templateParams?: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams[] | cdktf.IResolvable;
}

export function logAnalyticsNamespaceScheduledTaskActionTemplateDetailsToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsOutputReference | LogAnalyticsNamespaceScheduledTaskActionTemplateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_id: cdktf.stringToTerraform(struct!.templateId),
    template_params: cdktf.listMapper(logAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsToTerraform, true)(struct!.templateParams),
  }
}


export function logAnalyticsNamespaceScheduledTaskActionTemplateDetailsToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsOutputReference | LogAnalyticsNamespaceScheduledTaskActionTemplateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_params: {
      value: cdktf.listMapperHcl(logAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsToHclTerraform, true)(struct!.templateParams),
      isBlock: true,
      type: "list",
      storageClassType: "LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskActionTemplateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._templateParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateParams = this._templateParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskActionTemplateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateId = undefined;
      this._templateParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateId = value.templateId;
      this._templateParams.internalValue = value.templateParams;
    }
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_params - computed: false, optional: true, required: false
  private _templateParams = new LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParamsList(this, "template_params", false);
  public get templateParams() {
    return this._templateParams;
  }
  public putTemplateParams(value: LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsTemplateParams[] | cdktf.IResolvable) {
    this._templateParams.internalValue = value;
  }
  public resetTemplateParams() {
    this._templateParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParamsInput() {
    return this._templateParams.internalValue;
  }
}
export interface LogAnalyticsNamespaceScheduledTaskAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#compartment_id_in_subtree LogAnalyticsNamespaceScheduledTask#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#data_type LogAnalyticsNamespaceScheduledTask#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#purge_compartment_id LogAnalyticsNamespaceScheduledTask#purge_compartment_id}
  */
  readonly purgeCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#purge_duration LogAnalyticsNamespaceScheduledTask#purge_duration}
  */
  readonly purgeDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#query_string LogAnalyticsNamespaceScheduledTask#query_string}
  */
  readonly queryString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#saved_search_id LogAnalyticsNamespaceScheduledTask#saved_search_id}
  */
  readonly savedSearchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#type LogAnalyticsNamespaceScheduledTask#type}
  */
  readonly type: string;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#metric_extraction LogAnalyticsNamespaceScheduledTask#metric_extraction}
  */
  readonly metricExtraction?: LogAnalyticsNamespaceScheduledTaskActionMetricExtraction;
  /**
  * template_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#template_details LogAnalyticsNamespaceScheduledTask#template_details}
  */
  readonly templateDetails?: LogAnalyticsNamespaceScheduledTaskActionTemplateDetails;
}

export function logAnalyticsNamespaceScheduledTaskActionToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionOutputReference | LogAnalyticsNamespaceScheduledTaskAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id_in_subtree: cdktf.booleanToTerraform(struct!.compartmentIdInSubtree),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    purge_compartment_id: cdktf.stringToTerraform(struct!.purgeCompartmentId),
    purge_duration: cdktf.stringToTerraform(struct!.purgeDuration),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    saved_search_id: cdktf.stringToTerraform(struct!.savedSearchId),
    type: cdktf.stringToTerraform(struct!.type),
    metric_extraction: logAnalyticsNamespaceScheduledTaskActionMetricExtractionToTerraform(struct!.metricExtraction),
    template_details: logAnalyticsNamespaceScheduledTaskActionTemplateDetailsToTerraform(struct!.templateDetails),
  }
}


export function logAnalyticsNamespaceScheduledTaskActionToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskActionOutputReference | LogAnalyticsNamespaceScheduledTaskAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id_in_subtree: {
      value: cdktf.booleanToHclTerraform(struct!.compartmentIdInSubtree),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purge_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.purgeCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    purge_duration: {
      value: cdktf.stringToHclTerraform(struct!.purgeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saved_search_id: {
      value: cdktf.stringToHclTerraform(struct!.savedSearchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_extraction: {
      value: logAnalyticsNamespaceScheduledTaskActionMetricExtractionToHclTerraform(struct!.metricExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "LogAnalyticsNamespaceScheduledTaskActionMetricExtractionList",
    },
    template_details: {
      value: logAnalyticsNamespaceScheduledTaskActionTemplateDetailsToHclTerraform(struct!.templateDetails),
      isBlock: true,
      type: "list",
      storageClassType: "LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentIdInSubtree !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentIdInSubtree = this._compartmentIdInSubtree;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._purgeCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeCompartmentId = this._purgeCompartmentId;
    }
    if (this._purgeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDuration = this._purgeDuration;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._savedSearchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.savedSearchId = this._savedSearchId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._metricExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricExtraction = this._metricExtraction?.internalValue;
    }
    if (this._templateDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDetails = this._templateDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentIdInSubtree = undefined;
      this._dataType = undefined;
      this._purgeCompartmentId = undefined;
      this._purgeDuration = undefined;
      this._queryString = undefined;
      this._savedSearchId = undefined;
      this._type = undefined;
      this._metricExtraction.internalValue = undefined;
      this._templateDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentIdInSubtree = value.compartmentIdInSubtree;
      this._dataType = value.dataType;
      this._purgeCompartmentId = value.purgeCompartmentId;
      this._purgeDuration = value.purgeDuration;
      this._queryString = value.queryString;
      this._savedSearchId = value.savedSearchId;
      this._type = value.type;
      this._metricExtraction.internalValue = value.metricExtraction;
      this._templateDetails.internalValue = value.templateDetails;
    }
  }

  // compartment_id_in_subtree - computed: true, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
  }

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // purge_compartment_id - computed: true, optional: true, required: false
  private _purgeCompartmentId?: string; 
  public get purgeCompartmentId() {
    return this.getStringAttribute('purge_compartment_id');
  }
  public set purgeCompartmentId(value: string) {
    this._purgeCompartmentId = value;
  }
  public resetPurgeCompartmentId() {
    this._purgeCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeCompartmentIdInput() {
    return this._purgeCompartmentId;
  }

  // purge_duration - computed: true, optional: true, required: false
  private _purgeDuration?: string; 
  public get purgeDuration() {
    return this.getStringAttribute('purge_duration');
  }
  public set purgeDuration(value: string) {
    this._purgeDuration = value;
  }
  public resetPurgeDuration() {
    this._purgeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationInput() {
    return this._purgeDuration;
  }

  // query_string - computed: true, optional: true, required: false
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // saved_search_id - computed: true, optional: true, required: false
  private _savedSearchId?: string; 
  public get savedSearchId() {
    return this.getStringAttribute('saved_search_id');
  }
  public set savedSearchId(value: string) {
    this._savedSearchId = value;
  }
  public resetSavedSearchId() {
    this._savedSearchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedSearchIdInput() {
    return this._savedSearchId;
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

  // metric_extraction - computed: false, optional: true, required: false
  private _metricExtraction = new LogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: LogAnalyticsNamespaceScheduledTaskActionMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  public resetMetricExtraction() {
    this._metricExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // template_details - computed: false, optional: true, required: false
  private _templateDetails = new LogAnalyticsNamespaceScheduledTaskActionTemplateDetailsOutputReference(this, "template_details");
  public get templateDetails() {
    return this._templateDetails;
  }
  public putTemplateDetails(value: LogAnalyticsNamespaceScheduledTaskActionTemplateDetails) {
    this._templateDetails.internalValue = value;
  }
  public resetTemplateDetails() {
    this._templateDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDetailsInput() {
    return this._templateDetails.internalValue;
  }
}
export interface LogAnalyticsNamespaceScheduledTaskSchedulesSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#expression LogAnalyticsNamespaceScheduledTask#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#misfire_policy LogAnalyticsNamespaceScheduledTask#misfire_policy}
  */
  readonly misfirePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#recurring_interval LogAnalyticsNamespaceScheduledTask#recurring_interval}
  */
  readonly recurringInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#repeat_count LogAnalyticsNamespaceScheduledTask#repeat_count}
  */
  readonly repeatCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#time_zone LogAnalyticsNamespaceScheduledTask#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#type LogAnalyticsNamespaceScheduledTask#type}
  */
  readonly type: string;
}

export function logAnalyticsNamespaceScheduledTaskSchedulesScheduleToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskSchedulesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    misfire_policy: cdktf.stringToTerraform(struct!.misfirePolicy),
    recurring_interval: cdktf.stringToTerraform(struct!.recurringInterval),
    repeat_count: cdktf.numberToTerraform(struct!.repeatCount),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function logAnalyticsNamespaceScheduledTaskSchedulesScheduleToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskSchedulesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    misfire_policy: {
      value: cdktf.stringToHclTerraform(struct!.misfirePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurring_interval: {
      value: cdktf.stringToHclTerraform(struct!.recurringInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_count: {
      value: cdktf.numberToHclTerraform(struct!.repeatCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskSchedulesSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._misfirePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.misfirePolicy = this._misfirePolicy;
    }
    if (this._recurringInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringInterval = this._recurringInterval;
    }
    if (this._repeatCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatCount = this._repeatCount;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskSchedulesSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._misfirePolicy = undefined;
      this._recurringInterval = undefined;
      this._repeatCount = undefined;
      this._timeZone = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._misfirePolicy = value.misfirePolicy;
      this._recurringInterval = value.recurringInterval;
      this._repeatCount = value.repeatCount;
      this._timeZone = value.timeZone;
      this._type = value.type;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // misfire_policy - computed: true, optional: true, required: false
  private _misfirePolicy?: string; 
  public get misfirePolicy() {
    return this.getStringAttribute('misfire_policy');
  }
  public set misfirePolicy(value: string) {
    this._misfirePolicy = value;
  }
  public resetMisfirePolicy() {
    this._misfirePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get misfirePolicyInput() {
    return this._misfirePolicy;
  }

  // recurring_interval - computed: true, optional: true, required: false
  private _recurringInterval?: string; 
  public get recurringInterval() {
    return this.getStringAttribute('recurring_interval');
  }
  public set recurringInterval(value: string) {
    this._recurringInterval = value;
  }
  public resetRecurringInterval() {
    this._recurringInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringIntervalInput() {
    return this._recurringInterval;
  }

  // repeat_count - computed: true, optional: true, required: false
  private _repeatCount?: number; 
  public get repeatCount() {
    return this.getNumberAttribute('repeat_count');
  }
  public set repeatCount(value: number) {
    this._repeatCount = value;
  }
  public resetRepeatCount() {
    this._repeatCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatCountInput() {
    return this._repeatCount;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
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
}

export class LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList extends cdktf.ComplexList {
  public internalValue? : LogAnalyticsNamespaceScheduledTaskSchedulesSchedule[] | cdktf.IResolvable

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
  public get(index: number): LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference {
    return new LogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogAnalyticsNamespaceScheduledTaskSchedules {
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#schedule LogAnalyticsNamespaceScheduledTask#schedule}
  */
  readonly schedule: LogAnalyticsNamespaceScheduledTaskSchedulesSchedule[] | cdktf.IResolvable;
}

export function logAnalyticsNamespaceScheduledTaskSchedulesToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference | LogAnalyticsNamespaceScheduledTaskSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: cdktf.listMapper(logAnalyticsNamespaceScheduledTaskSchedulesScheduleToTerraform, true)(struct!.schedule),
  }
}


export function logAnalyticsNamespaceScheduledTaskSchedulesToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference | LogAnalyticsNamespaceScheduledTaskSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule: {
      value: cdktf.listMapperHcl(logAnalyticsNamespaceScheduledTaskSchedulesScheduleToHclTerraform, true)(struct!.schedule),
      isBlock: true,
      type: "set",
      storageClassType: "LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedule.internalValue = value.schedule;
    }
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new LogAnalyticsNamespaceScheduledTaskSchedulesScheduleList(this, "schedule", true);
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: LogAnalyticsNamespaceScheduledTaskSchedulesSchedule[] | cdktf.IResolvable) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}
export interface LogAnalyticsNamespaceScheduledTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#create LogAnalyticsNamespaceScheduledTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#delete LogAnalyticsNamespaceScheduledTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#update LogAnalyticsNamespaceScheduledTask#update}
  */
  readonly update?: string;
}

export function logAnalyticsNamespaceScheduledTaskTimeoutsToTerraform(struct?: LogAnalyticsNamespaceScheduledTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function logAnalyticsNamespaceScheduledTaskTimeoutsToHclTerraform(struct?: LogAnalyticsNamespaceScheduledTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogAnalyticsNamespaceScheduledTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogAnalyticsNamespaceScheduledTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task oci_log_analytics_namespace_scheduled_task}
*/
export class LogAnalyticsNamespaceScheduledTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_log_analytics_namespace_scheduled_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogAnalyticsNamespaceScheduledTask to import
  * @param importFromId The id of the existing LogAnalyticsNamespaceScheduledTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogAnalyticsNamespaceScheduledTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_log_analytics_namespace_scheduled_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/log_analytics_namespace_scheduled_task oci_log_analytics_namespace_scheduled_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogAnalyticsNamespaceScheduledTaskConfig
  */
  public constructor(scope: Construct, id: string, config: LogAnalyticsNamespaceScheduledTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_log_analytics_namespace_scheduled_task',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kind = config.kind;
    this._namespace = config.namespace;
    this._savedSearchId = config.savedSearchId;
    this._taskType = config.taskType;
    this._action.internalValue = config.action;
    this._schedules.internalValue = config.schedules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // num_occurrences - computed: true, optional: false, required: false
  public get numOccurrences() {
    return this.getStringAttribute('num_occurrences');
  }

  // saved_search_id - computed: true, optional: true, required: false
  private _savedSearchId?: string; 
  public get savedSearchId() {
    return this.getStringAttribute('saved_search_id');
  }
  public set savedSearchId(value: string) {
    this._savedSearchId = value;
  }
  public resetSavedSearchId() {
    this._savedSearchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedSearchIdInput() {
    return this._savedSearchId;
  }

  // scheduled_task_id - computed: true, optional: false, required: false
  public get scheduledTaskId() {
    return this.getStringAttribute('scheduled_task_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getStringAttribute('task_status');
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // action - computed: false, optional: false, required: true
  private _action = new LogAnalyticsNamespaceScheduledTaskActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: LogAnalyticsNamespaceScheduledTaskAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // schedules - computed: false, optional: false, required: true
  private _schedules = new LogAnalyticsNamespaceScheduledTaskSchedulesOutputReference(this, "schedules");
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: LogAnalyticsNamespaceScheduledTaskSchedules) {
    this._schedules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LogAnalyticsNamespaceScheduledTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LogAnalyticsNamespaceScheduledTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      namespace: cdktf.stringToTerraform(this._namespace),
      saved_search_id: cdktf.stringToTerraform(this._savedSearchId),
      task_type: cdktf.stringToTerraform(this._taskType),
      action: logAnalyticsNamespaceScheduledTaskActionToTerraform(this._action.internalValue),
      schedules: logAnalyticsNamespaceScheduledTaskSchedulesToTerraform(this._schedules.internalValue),
      timeouts: logAnalyticsNamespaceScheduledTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saved_search_id: {
        value: cdktf.stringToHclTerraform(this._savedSearchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: logAnalyticsNamespaceScheduledTaskActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAnalyticsNamespaceScheduledTaskActionList",
      },
      schedules: {
        value: logAnalyticsNamespaceScheduledTaskSchedulesToHclTerraform(this._schedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogAnalyticsNamespaceScheduledTaskSchedulesList",
      },
      timeouts: {
        value: logAnalyticsNamespaceScheduledTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogAnalyticsNamespaceScheduledTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
