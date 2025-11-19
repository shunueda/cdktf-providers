import * as cdktf from 'cdktf';
import { OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategory,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProvider,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwarding,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizevent,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignment,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocation,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetric,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavis,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDql,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAdd,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemove,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRename,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetric,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocation,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetric,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetric,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricOutputReference,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetric,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricToTerraform,
openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricToHclTerraform,
OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricOutputReference } from './structs800'
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent {
  /**
  * event_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_category OpenpipelineV2UserEventsPipelines#event_category}
  */
  readonly eventCategory: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategory;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_provider OpenpipelineV2UserEventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProvider;
  /**
  * event_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_status OpenpipelineV2UserEventsPipelines#event_status}
  */
  readonly eventStatus: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_type OpenpipelineV2UserEventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_category: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryToTerraform(struct!.eventCategory),
    event_provider: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderToTerraform(struct!.eventProvider),
    event_status: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusToTerraform(struct!.eventStatus),
    event_type: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_category: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct!.eventCategory),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryList",
    },
    event_provider: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderList",
    },
    event_status: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct!.eventStatus),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusList",
    },
    event_type: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCategory = this._eventCategory?.internalValue;
    }
    if (this._eventProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventProvider = this._eventProvider?.internalValue;
    }
    if (this._eventStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStatus = this._eventStatus?.internalValue;
    }
    if (this._eventType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType?.internalValue;
    }
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventCategory.internalValue = undefined;
      this._eventProvider.internalValue = undefined;
      this._eventStatus.internalValue = undefined;
      this._eventType.internalValue = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventCategory.internalValue = value.eventCategory;
      this._eventProvider.internalValue = value.eventProvider;
      this._eventStatus.internalValue = value.eventStatus;
      this._eventType.internalValue = value.eventType;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // event_category - computed: false, optional: false, required: true
  private _eventCategory = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategoryOutputReference(this, "event_category");
  public get eventCategory() {
    return this._eventCategory;
  }
  public putEventCategory(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventCategory) {
    this._eventCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoryInput() {
    return this._eventCategory.internalValue;
  }

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_status - computed: false, optional: false, required: true
  private _eventStatus = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference(this, "event_status");
  public get eventStatus() {
    return this._eventStatus;
  }
  public putEventStatus(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventStatus) {
    this._eventStatus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStatusInput() {
    return this._eventStatus.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventEventType) {
    this._eventType.internalValue = value;
  }
  public resetEventType() {
    this._eventType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value OpenpipelineV2UserEventsPipelines#value}
  */
  readonly value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#edge_type OpenpipelineV2UserEventsPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Source ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_id_field_name OpenpipelineV2UserEventsPipelines#source_id_field_name}
  */
  readonly sourceIdFieldName: string;
  /**
  * Source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_type OpenpipelineV2UserEventsPipelines#source_type}
  */
  readonly sourceType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_id_field_name OpenpipelineV2UserEventsPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_type OpenpipelineV2UserEventsPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_type: cdktf.stringToTerraform(struct!.edgeType),
    source_id_field_name: cdktf.stringToTerraform(struct!.sourceIdFieldName),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    target_id_field_name: cdktf.stringToTerraform(struct!.targetIdFieldName),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_type: {
      value: cdktf.stringToHclTerraform(struct!.edgeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.targetIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeType = this._edgeType;
    }
    if (this._sourceIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdFieldName = this._sourceIdFieldName;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._targetIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdFieldName = this._targetIdFieldName;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edgeType = undefined;
      this._sourceIdFieldName = undefined;
      this._sourceType = undefined;
      this._targetIdFieldName = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edgeType = value.edgeType;
      this._sourceIdFieldName = value.sourceIdFieldName;
      this._sourceType = value.sourceType;
      this._targetIdFieldName = value.targetIdFieldName;
      this._targetType = value.targetType;
    }
  }

  // edge_type - computed: false, optional: false, required: true
  private _edgeType?: string; 
  public get edgeType() {
    return this.getStringAttribute('edge_type');
  }
  public set edgeType(value: string) {
    this._edgeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTypeInput() {
    return this._edgeType;
  }

  // source_id_field_name - computed: false, optional: false, required: true
  private _sourceIdFieldName?: string; 
  public get sourceIdFieldName() {
    return this.getStringAttribute('source_id_field_name');
  }
  public set sourceIdFieldName(value: string) {
    this._sourceIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdFieldNameInput() {
    return this._sourceIdFieldName;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // target_id_field_name - computed: false, optional: false, required: true
  private _targetIdFieldName?: string; 
  public get targetIdFieldName() {
    return this.getStringAttribute('target_id_field_name');
  }
  public set targetIdFieldName(value: string) {
    this._targetIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdFieldNameInput() {
    return this._targetIdFieldName;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_name OpenpipelineV2UserEventsPipelines#field_name}
  */
  readonly fieldName: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#referenced_field_name OpenpipelineV2UserEventsPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referenced_field_name: {
      value: cdktf.stringToHclTerraform(struct!.referencedFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._referencedFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedFieldName = this._referencedFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._referencedFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._referencedFieldName = value.referencedFieldName;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // referenced_field_name - computed: false, optional: false, required: true
  private _referencedFieldName?: string; 
  public get referencedFieldName() {
    return this.getStringAttribute('referenced_field_name');
  }
  public set referencedFieldName(value: string) {
    this._referencedFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedFieldNameInput() {
    return this._referencedFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract {
  /**
  * smartscape_field_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_field_extraction_entry OpenpipelineV2UserEventsPipelines#smartscape_field_extraction_entry}
  */
  readonly smartscapeFieldExtractionEntry: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_field_extraction_entry: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform, true)(struct!.smartscapeFieldExtractionEntry),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_field_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform, true)(struct!.smartscapeFieldExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeFieldExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeFieldExtractionEntry = this._smartscapeFieldExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smartscapeFieldExtractionEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smartscapeFieldExtractionEntry.internalValue = value.smartscapeFieldExtractionEntry;
    }
  }

  // smartscape_field_extraction_entry - computed: false, optional: false, required: true
  private _smartscapeFieldExtractionEntry = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList(this, "smartscape_field_extraction_entry", false);
  public get smartscapeFieldExtractionEntry() {
    return this._smartscapeFieldExtractionEntry;
  }
  public putSmartscapeFieldExtractionEntry(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeFieldExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeFieldExtractionEntryInput() {
    return this._smartscapeFieldExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent {
  /**
  * ID component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id_component OpenpipelineV2UserEventsPipelines#id_component}
  */
  readonly idComponent: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#referenced_field_name OpenpipelineV2UserEventsPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.stringToTerraform(struct!.idComponent),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.stringToHclTerraform(struct!.idComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referenced_field_name: {
      value: cdktf.stringToHclTerraform(struct!.referencedFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent;
    }
    if (this._referencedFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedFieldName = this._referencedFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idComponent = undefined;
      this._referencedFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idComponent = value.idComponent;
      this._referencedFieldName = value.referencedFieldName;
    }
  }

  // id_component - computed: false, optional: false, required: true
  private _idComponent?: string; 
  public get idComponent() {
    return this.getStringAttribute('id_component');
  }
  public set idComponent(value: string) {
    this._idComponent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent;
  }

  // referenced_field_name - computed: false, optional: false, required: true
  private _referencedFieldName?: string; 
  public get referencedFieldName() {
    return this.getStringAttribute('referenced_field_name');
  }
  public set referencedFieldName(value: string) {
    this._referencedFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedFieldNameInput() {
    return this._referencedFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents {
  /**
  * id_component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id_component OpenpipelineV2UserEventsPipelines#id_component}
  */
  readonly idComponent: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform, true)(struct!.idComponent),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform, true)(struct!.idComponent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idComponent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idComponent.internalValue = value.idComponent;
    }
  }

  // id_component - computed: false, optional: false, required: true
  private _idComponent = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList(this, "id_component", false);
  public get idComponent() {
    return this._idComponent;
  }
  public putIdComponent(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable) {
    this._idComponent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#edge_type OpenpipelineV2UserEventsPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_id_field_name OpenpipelineV2UserEventsPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_type OpenpipelineV2UserEventsPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_type: cdktf.stringToTerraform(struct!.edgeType),
    target_id_field_name: cdktf.stringToTerraform(struct!.targetIdFieldName),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_type: {
      value: cdktf.stringToHclTerraform(struct!.edgeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.targetIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeType = this._edgeType;
    }
    if (this._targetIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdFieldName = this._targetIdFieldName;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeType = undefined;
      this._targetIdFieldName = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeType = value.edgeType;
      this._targetIdFieldName = value.targetIdFieldName;
      this._targetType = value.targetType;
    }
  }

  // edge_type - computed: false, optional: false, required: true
  private _edgeType?: string; 
  public get edgeType() {
    return this.getStringAttribute('edge_type');
  }
  public set edgeType(value: string) {
    this._edgeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTypeInput() {
    return this._edgeType;
  }

  // target_id_field_name - computed: false, optional: false, required: true
  private _targetIdFieldName?: string; 
  public get targetIdFieldName() {
    return this.getStringAttribute('target_id_field_name');
  }
  public set targetIdFieldName(value: string) {
    this._targetIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdFieldNameInput() {
    return this._targetIdFieldName;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract {
  /**
  * smartscape_static_edge_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_static_edge_extraction_entry OpenpipelineV2UserEventsPipelines#smartscape_static_edge_extraction_entry}
  */
  readonly smartscapeStaticEdgeExtractionEntry: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_static_edge_extraction_entry: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_static_edge_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeStaticEdgeExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeStaticEdgeExtractionEntry = this._smartscapeStaticEdgeExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smartscapeStaticEdgeExtractionEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smartscapeStaticEdgeExtractionEntry.internalValue = value.smartscapeStaticEdgeExtractionEntry;
    }
  }

  // smartscape_static_edge_extraction_entry - computed: false, optional: false, required: true
  private _smartscapeStaticEdgeExtractionEntry = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList(this, "smartscape_static_edge_extraction_entry", false);
  public get smartscapeStaticEdgeExtractionEntry() {
    return this._smartscapeStaticEdgeExtractionEntry;
  }
  public putSmartscapeStaticEdgeExtractionEntry(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeStaticEdgeExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeStaticEdgeExtractionEntryInput() {
    return this._smartscapeStaticEdgeExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode {
  /**
  * Extract node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#extract_node OpenpipelineV2UserEventsPipelines#extract_node}
  */
  readonly extractNode: boolean | cdktf.IResolvable;
  /**
  * Node ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#node_id_field_name OpenpipelineV2UserEventsPipelines#node_id_field_name}
  */
  readonly nodeIdFieldName: string;
  /**
  * Node type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#node_type OpenpipelineV2UserEventsPipelines#node_type}
  */
  readonly nodeType: string;
  /**
  * fields_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_to_extract OpenpipelineV2UserEventsPipelines#fields_to_extract}
  */
  readonly fieldsToExtract?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract;
  /**
  * id_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id_components OpenpipelineV2UserEventsPipelines#id_components}
  */
  readonly idComponents: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents;
  /**
  * node_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#node_name OpenpipelineV2UserEventsPipelines#node_name}
  */
  readonly nodeName?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName;
  /**
  * static_edges_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#static_edges_to_extract OpenpipelineV2UserEventsPipelines#static_edges_to_extract}
  */
  readonly staticEdgesToExtract?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract_node: cdktf.booleanToTerraform(struct!.extractNode),
    node_id_field_name: cdktf.stringToTerraform(struct!.nodeIdFieldName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    fields_to_extract: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct!.fieldsToExtract),
    id_components: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct!.idComponents),
    node_name: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct!.nodeName),
    static_edges_to_extract: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct!.staticEdgesToExtract),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract_node: {
      value: cdktf.booleanToHclTerraform(struct!.extractNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields_to_extract: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct!.fieldsToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractList",
    },
    id_components: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct!.idComponents),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsList",
    },
    node_name: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct!.nodeName),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameList",
    },
    static_edges_to_extract: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct!.staticEdgesToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractNode = this._extractNode;
    }
    if (this._nodeIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIdFieldName = this._nodeIdFieldName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._fieldsToExtract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsToExtract = this._fieldsToExtract?.internalValue;
    }
    if (this._idComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponents = this._idComponents?.internalValue;
    }
    if (this._nodeName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName?.internalValue;
    }
    if (this._staticEdgesToExtract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticEdgesToExtract = this._staticEdgesToExtract?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extractNode = undefined;
      this._nodeIdFieldName = undefined;
      this._nodeType = undefined;
      this._fieldsToExtract.internalValue = undefined;
      this._idComponents.internalValue = undefined;
      this._nodeName.internalValue = undefined;
      this._staticEdgesToExtract.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extractNode = value.extractNode;
      this._nodeIdFieldName = value.nodeIdFieldName;
      this._nodeType = value.nodeType;
      this._fieldsToExtract.internalValue = value.fieldsToExtract;
      this._idComponents.internalValue = value.idComponents;
      this._nodeName.internalValue = value.nodeName;
      this._staticEdgesToExtract.internalValue = value.staticEdgesToExtract;
    }
  }

  // extract_node - computed: false, optional: false, required: true
  private _extractNode?: boolean | cdktf.IResolvable; 
  public get extractNode() {
    return this.getBooleanAttribute('extract_node');
  }
  public set extractNode(value: boolean | cdktf.IResolvable) {
    this._extractNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extractNodeInput() {
    return this._extractNode;
  }

  // node_id_field_name - computed: false, optional: false, required: true
  private _nodeIdFieldName?: string; 
  public get nodeIdFieldName() {
    return this.getStringAttribute('node_id_field_name');
  }
  public set nodeIdFieldName(value: string) {
    this._nodeIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdFieldNameInput() {
    return this._nodeIdFieldName;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // fields_to_extract - computed: false, optional: true, required: false
  private _fieldsToExtract = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference(this, "fields_to_extract");
  public get fieldsToExtract() {
    return this._fieldsToExtract;
  }
  public putFieldsToExtract(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract) {
    this._fieldsToExtract.internalValue = value;
  }
  public resetFieldsToExtract() {
    this._fieldsToExtract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsToExtractInput() {
    return this._fieldsToExtract.internalValue;
  }

  // id_components - computed: false, optional: false, required: true
  private _idComponents = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference(this, "id_components");
  public get idComponents() {
    return this._idComponents;
  }
  public putIdComponents(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeIdComponents) {
    this._idComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentsInput() {
    return this._idComponents.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference(this, "node_name");
  public get nodeName() {
    return this._nodeName;
  }
  public putNodeName(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeNodeName) {
    this._nodeName.internalValue = value;
  }
  public resetNodeName() {
    this._nodeName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName.internalValue;
  }

  // static_edges_to_extract - computed: false, optional: true, required: false
  private _staticEdgesToExtract = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference(this, "static_edges_to_extract");
  public get staticEdgesToExtract() {
    return this._staticEdgesToExtract;
  }
  public putStaticEdgesToExtract(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract) {
    this._staticEdgesToExtract.internalValue = value;
  }
  public resetStaticEdgesToExtract() {
    this._staticEdgesToExtract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticEdgesToExtractInput() {
    return this._staticEdgesToExtract.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#custom_matcher OpenpipelineV2UserEventsPipelines#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#technology_id OpenpipelineV2UserEventsPipelines#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_matcher: {
      value: cdktf.stringToHclTerraform(struct!.customMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_id: {
      value: cdktf.stringToHclTerraform(struct!.technologyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMatcher = this._customMatcher;
    }
    if (this._technologyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyId = this._technologyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customMatcher = undefined;
      this._technologyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customMatcher = value.customMatcher;
      this._technologyId = value.technologyId;
    }
  }

  // custom_matcher - computed: false, optional: true, required: false
  private _customMatcher?: string; 
  public get customMatcher() {
    return this.getStringAttribute('custom_matcher');
  }
  public set customMatcher(value: string) {
    this._customMatcher = value;
  }
  public resetCustomMatcher() {
    this._customMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMatcherInput() {
    return this._customMatcher;
  }

  // technology_id - computed: false, optional: false, required: true
  private _technologyId?: string; 
  public get technologyId() {
    return this.getStringAttribute('technology_id');
  }
  public set technologyId(value: string) {
    this._technologyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyIdInput() {
    return this._technologyId;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._field = undefined;
      this._metricKey = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._field = value.field;
      this._metricKey = value.metricKey;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#description OpenpipelineV2UserEventsPipelines#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#enabled OpenpipelineV2UserEventsPipelines#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id OpenpipelineV2UserEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#matcher OpenpipelineV2UserEventsPipelines#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sample_data OpenpipelineV2UserEventsPipelines#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareHistogramMetric`, `samplingAwareValueMetric`, `sdlcEvent`, `securityContext`, `securityEvent`, `smartscapeEdge`, `smartscapeNode`, `technology`, `valueMetric`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#azure_log_forwarding OpenpipelineV2UserEventsPipelines#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#bizevent OpenpipelineV2UserEventsPipelines#bizevent}
  */
  readonly bizevent?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#bucket_assignment OpenpipelineV2UserEventsPipelines#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#cost_allocation OpenpipelineV2UserEventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#counter_metric OpenpipelineV2UserEventsPipelines#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#davis OpenpipelineV2UserEventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dql OpenpipelineV2UserEventsPipelines#dql}
  */
  readonly dql?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_add OpenpipelineV2UserEventsPipelines#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_remove OpenpipelineV2UserEventsPipelines#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_rename OpenpipelineV2UserEventsPipelines#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#histogram_metric OpenpipelineV2UserEventsPipelines#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#product_allocation OpenpipelineV2UserEventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling_aware_counter_metric OpenpipelineV2UserEventsPipelines#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling_aware_histogram_metric OpenpipelineV2UserEventsPipelines#sampling_aware_histogram_metric}
  */
  readonly samplingAwareHistogramMetric?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling_aware_value_metric OpenpipelineV2UserEventsPipelines#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetric;
  /**
  * sdlc_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sdlc_event OpenpipelineV2UserEventsPipelines#sdlc_event}
  */
  readonly sdlcEvent?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#security_context OpenpipelineV2UserEventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#security_event OpenpipelineV2UserEventsPipelines#security_event}
  */
  readonly securityEvent?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent;
  /**
  * smartscape_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_edge OpenpipelineV2UserEventsPipelines#smartscape_edge}
  */
  readonly smartscapeEdge?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge;
  /**
  * smartscape_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_node OpenpipelineV2UserEventsPipelines#smartscape_node}
  */
  readonly smartscapeNode?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#technology OpenpipelineV2UserEventsPipelines#technology}
  */
  readonly technology?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value_metric OpenpipelineV2UserEventsPipelines#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    type: cdktf.stringToTerraform(struct!.type),
    azure_log_forwarding: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_histogram_metric: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct!.samplingAwareHistogramMetric),
    sampling_aware_value_metric: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    sdlc_event: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventToTerraform(struct!.sdlcEvent),
    security_context: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    smartscape_edge: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeToTerraform(struct!.smartscapeEdge),
    smartscape_node: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeToTerraform(struct!.smartscapeNode),
    technology: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_data: {
      value: cdktf.stringToHclTerraform(struct!.sampleData),
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
    azure_log_forwarding: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_histogram_metric: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct!.samplingAwareHistogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricList",
    },
    sdlc_event: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventToHclTerraform(struct!.sdlcEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventList",
    },
    security_context: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventList",
    },
    smartscape_edge: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeToHclTerraform(struct!.smartscapeEdge),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeList",
    },
    smartscape_node: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeToHclTerraform(struct!.smartscapeNode),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeList",
    },
    technology: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._azureLogForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLogForwarding = this._azureLogForwarding?.internalValue;
    }
    if (this._bizevent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bizevent = this._bizevent?.internalValue;
    }
    if (this._bucketAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAssignment = this._bucketAssignment?.internalValue;
    }
    if (this._costAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAllocation = this._costAllocation?.internalValue;
    }
    if (this._counterMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterMetric = this._counterMetric?.internalValue;
    }
    if (this._davis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.davis = this._davis?.internalValue;
    }
    if (this._dql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dql = this._dql?.internalValue;
    }
    if (this._fieldsAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsAdd = this._fieldsAdd?.internalValue;
    }
    if (this._fieldsRemove?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRemove = this._fieldsRemove?.internalValue;
    }
    if (this._fieldsRename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRename = this._fieldsRename?.internalValue;
    }
    if (this._histogramMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramMetric = this._histogramMetric?.internalValue;
    }
    if (this._productAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productAllocation = this._productAllocation?.internalValue;
    }
    if (this._samplingAwareCounterMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareCounterMetric = this._samplingAwareCounterMetric?.internalValue;
    }
    if (this._samplingAwareHistogramMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareHistogramMetric = this._samplingAwareHistogramMetric?.internalValue;
    }
    if (this._samplingAwareValueMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareValueMetric = this._samplingAwareValueMetric?.internalValue;
    }
    if (this._sdlcEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdlcEvent = this._sdlcEvent?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._securityEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEvent = this._securityEvent?.internalValue;
    }
    if (this._smartscapeEdge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeEdge = this._smartscapeEdge?.internalValue;
    }
    if (this._smartscapeNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeNode = this._smartscapeNode?.internalValue;
    }
    if (this._technology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technology = this._technology?.internalValue;
    }
    if (this._valueMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMetric = this._valueMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._type = undefined;
      this._azureLogForwarding.internalValue = undefined;
      this._bizevent.internalValue = undefined;
      this._bucketAssignment.internalValue = undefined;
      this._costAllocation.internalValue = undefined;
      this._counterMetric.internalValue = undefined;
      this._davis.internalValue = undefined;
      this._dql.internalValue = undefined;
      this._fieldsAdd.internalValue = undefined;
      this._fieldsRemove.internalValue = undefined;
      this._fieldsRename.internalValue = undefined;
      this._histogramMetric.internalValue = undefined;
      this._productAllocation.internalValue = undefined;
      this._samplingAwareCounterMetric.internalValue = undefined;
      this._samplingAwareHistogramMetric.internalValue = undefined;
      this._samplingAwareValueMetric.internalValue = undefined;
      this._sdlcEvent.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._securityEvent.internalValue = undefined;
      this._smartscapeEdge.internalValue = undefined;
      this._smartscapeNode.internalValue = undefined;
      this._technology.internalValue = undefined;
      this._valueMetric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._type = value.type;
      this._azureLogForwarding.internalValue = value.azureLogForwarding;
      this._bizevent.internalValue = value.bizevent;
      this._bucketAssignment.internalValue = value.bucketAssignment;
      this._costAllocation.internalValue = value.costAllocation;
      this._counterMetric.internalValue = value.counterMetric;
      this._davis.internalValue = value.davis;
      this._dql.internalValue = value.dql;
      this._fieldsAdd.internalValue = value.fieldsAdd;
      this._fieldsRemove.internalValue = value.fieldsRemove;
      this._fieldsRename.internalValue = value.fieldsRename;
      this._histogramMetric.internalValue = value.histogramMetric;
      this._productAllocation.internalValue = value.productAllocation;
      this._samplingAwareCounterMetric.internalValue = value.samplingAwareCounterMetric;
      this._samplingAwareHistogramMetric.internalValue = value.samplingAwareHistogramMetric;
      this._samplingAwareValueMetric.internalValue = value.samplingAwareValueMetric;
      this._sdlcEvent.internalValue = value.sdlcEvent;
      this._securityContext.internalValue = value.securityContext;
      this._securityEvent.internalValue = value.securityEvent;
      this._smartscapeEdge.internalValue = value.smartscapeEdge;
      this._smartscapeNode.internalValue = value.smartscapeNode;
      this._technology.internalValue = value.technology;
      this._valueMetric.internalValue = value.valueMetric;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // sample_data - computed: false, optional: true, required: false
  private _sampleData?: string; 
  public get sampleData() {
    return this.getStringAttribute('sample_data');
  }
  public set sampleData(value: string) {
    this._sampleData = value;
  }
  public resetSampleData() {
    this._sampleData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDataInput() {
    return this._sampleData;
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

  // azure_log_forwarding - computed: false, optional: true, required: false
  private _azureLogForwarding = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorAzureLogForwarding) {
    this._azureLogForwarding.internalValue = value;
  }
  public resetAzureLogForwarding() {
    this._azureLogForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLogForwardingInput() {
    return this._azureLogForwarding.internalValue;
  }

  // bizevent - computed: false, optional: true, required: false
  private _bizevent = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBizevent) {
    this._bizevent.internalValue = value;
  }
  public resetBizevent() {
    this._bizevent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizeventInput() {
    return this._bizevent.internalValue;
  }

  // bucket_assignment - computed: false, optional: true, required: false
  private _bucketAssignment = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorBucketAssignment) {
    this._bucketAssignment.internalValue = value;
  }
  public resetBucketAssignment() {
    this._bucketAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAssignmentInput() {
    return this._bucketAssignment.internalValue;
  }

  // cost_allocation - computed: false, optional: true, required: false
  private _costAllocation = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  public resetCostAllocation() {
    this._costAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // counter_metric - computed: false, optional: true, required: false
  private _counterMetric = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorCounterMetric) {
    this._counterMetric.internalValue = value;
  }
  public resetCounterMetric() {
    this._counterMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterMetricInput() {
    return this._counterMetric.internalValue;
  }

  // davis - computed: false, optional: true, required: false
  private _davis = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDavis) {
    this._davis.internalValue = value;
  }
  public resetDavis() {
    this._davis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // dql - computed: false, optional: true, required: false
  private _dql = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorDql) {
    this._dql.internalValue = value;
  }
  public resetDql() {
    this._dql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlInput() {
    return this._dql.internalValue;
  }

  // fields_add - computed: false, optional: true, required: false
  private _fieldsAdd = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsAdd) {
    this._fieldsAdd.internalValue = value;
  }
  public resetFieldsAdd() {
    this._fieldsAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsAddInput() {
    return this._fieldsAdd.internalValue;
  }

  // fields_remove - computed: false, optional: true, required: false
  private _fieldsRemove = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRemove) {
    this._fieldsRemove.internalValue = value;
  }
  public resetFieldsRemove() {
    this._fieldsRemove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRemoveInput() {
    return this._fieldsRemove.internalValue;
  }

  // fields_rename - computed: false, optional: true, required: false
  private _fieldsRename = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorFieldsRename) {
    this._fieldsRename.internalValue = value;
  }
  public resetFieldsRename() {
    this._fieldsRename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRenameInput() {
    return this._fieldsRename.internalValue;
  }

  // histogram_metric - computed: false, optional: true, required: false
  private _histogramMetric = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorHistogramMetric) {
    this._histogramMetric.internalValue = value;
  }
  public resetHistogramMetric() {
    this._histogramMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramMetricInput() {
    return this._histogramMetric.internalValue;
  }

  // product_allocation - computed: false, optional: true, required: false
  private _productAllocation = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  public resetProductAllocation() {
    this._productAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // sampling_aware_counter_metric - computed: false, optional: true, required: false
  private _samplingAwareCounterMetric = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareCounterMetric) {
    this._samplingAwareCounterMetric.internalValue = value;
  }
  public resetSamplingAwareCounterMetric() {
    this._samplingAwareCounterMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareCounterMetricInput() {
    return this._samplingAwareCounterMetric.internalValue;
  }

  // sampling_aware_histogram_metric - computed: false, optional: true, required: false
  private _samplingAwareHistogramMetric = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetricOutputReference(this, "sampling_aware_histogram_metric");
  public get samplingAwareHistogramMetric() {
    return this._samplingAwareHistogramMetric;
  }
  public putSamplingAwareHistogramMetric(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareHistogramMetric) {
    this._samplingAwareHistogramMetric.internalValue = value;
  }
  public resetSamplingAwareHistogramMetric() {
    this._samplingAwareHistogramMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareHistogramMetricInput() {
    return this._samplingAwareHistogramMetric.internalValue;
  }

  // sampling_aware_value_metric - computed: false, optional: true, required: false
  private _samplingAwareValueMetric = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSamplingAwareValueMetric) {
    this._samplingAwareValueMetric.internalValue = value;
  }
  public resetSamplingAwareValueMetric() {
    this._samplingAwareValueMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareValueMetricInput() {
    return this._samplingAwareValueMetric.internalValue;
  }

  // sdlc_event - computed: false, optional: true, required: false
  private _sdlcEvent = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEventOutputReference(this, "sdlc_event");
  public get sdlcEvent() {
    return this._sdlcEvent;
  }
  public putSdlcEvent(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSdlcEvent) {
    this._sdlcEvent.internalValue = value;
  }
  public resetSdlcEvent() {
    this._sdlcEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdlcEventInput() {
    return this._sdlcEvent.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // security_event - computed: false, optional: true, required: false
  private _securityEvent = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSecurityEvent) {
    this._securityEvent.internalValue = value;
  }
  public resetSecurityEvent() {
    this._securityEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventInput() {
    return this._securityEvent.internalValue;
  }

  // smartscape_edge - computed: false, optional: true, required: false
  private _smartscapeEdge = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdgeOutputReference(this, "smartscape_edge");
  public get smartscapeEdge() {
    return this._smartscapeEdge;
  }
  public putSmartscapeEdge(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeEdge) {
    this._smartscapeEdge.internalValue = value;
  }
  public resetSmartscapeEdge() {
    this._smartscapeEdge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeEdgeInput() {
    return this._smartscapeEdge.internalValue;
  }

  // smartscape_node - computed: false, optional: true, required: false
  private _smartscapeNode = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNodeOutputReference(this, "smartscape_node");
  public get smartscapeNode() {
    return this._smartscapeNode;
  }
  public putSmartscapeNode(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorSmartscapeNode) {
    this._smartscapeNode.internalValue = value;
  }
  public resetSmartscapeNode() {
    this._smartscapeNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeNodeInput() {
    return this._smartscapeNode.internalValue;
  }

  // technology - computed: false, optional: true, required: false
  private _technology = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorTechnology) {
    this._technology.internalValue = value;
  }
  public resetTechnology() {
    this._technology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology.internalValue;
  }

  // value_metric - computed: false, optional: true, required: false
  private _valueMetric = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorValueMetric) {
    this._valueMetric.internalValue = value;
  }
  public resetValueMetric() {
    this._valueMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMetricInput() {
    return this._valueMetric.internalValue;
  }
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessingProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#processor OpenpipelineV2UserEventsPipelines#processor}
  */
  readonly processor: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProcessingProcessorsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingProcessorsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingProcessorsOutputReference | OpenpipelineV2UserEventsPipelinesProcessingProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProcessingProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessingProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessingProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: false, required: true
  private _processor = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2UserEventsPipelinesProcessingProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProcessing {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#processors OpenpipelineV2UserEventsPipelines#processors}
  */
  readonly processors?: OpenpipelineV2UserEventsPipelinesProcessingProcessors;
}

export function openpipelineV2UserEventsPipelinesProcessingToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingOutputReference | OpenpipelineV2UserEventsPipelinesProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2UserEventsPipelinesProcessingProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2UserEventsPipelinesProcessingToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProcessingOutputReference | OpenpipelineV2UserEventsPipelinesProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2UserEventsPipelinesProcessingProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProcessingProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processors.internalValue = value.processors;
    }
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new OpenpipelineV2UserEventsPipelinesProcessingProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2UserEventsPipelinesProcessingProcessors) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#forwarder_config_id OpenpipelineV2UserEventsPipelines#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    field_extraction: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarder_config_id: {
      value: cdktf.stringToHclTerraform(struct!.forwarderConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwarderConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarderConfigId = this._forwarderConfigId;
    }
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwarderConfigId = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwarderConfigId = value.forwarderConfigId;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // forwarder_config_id - computed: false, optional: false, required: true
  private _forwarderConfigId?: string; 
  public get forwarderConfigId() {
    return this.getStringAttribute('forwarder_config_id');
  }
  public set forwarderConfigId(value: string) {
    this._forwarderConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwarderConfigIdInput() {
    return this._forwarderConfigId;
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent {
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_provider OpenpipelineV2UserEventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_type OpenpipelineV2UserEventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_provider: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_provider: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderList",
    },
    event_type: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventProvider = this._eventProvider?.internalValue;
    }
    if (this._eventType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType?.internalValue;
    }
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventProvider.internalValue = undefined;
      this._eventType.internalValue = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventProvider.internalValue = value.eventProvider;
      this._eventType.internalValue = value.eventType;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventEventType) {
    this._eventType.internalValue = value;
  }
  public resetEventType() {
    this._eventType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment {
  /**
  * Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#bucket_name OpenpipelineV2UserEventsPipelines#bucket_name}
  */
  readonly bucketName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value OpenpipelineV2UserEventsPipelines#value}
  */
  readonly value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric {
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricKey = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricKey = value.metricKey;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#key OpenpipelineV2UserEventsPipelines#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value OpenpipelineV2UserEventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#property OpenpipelineV2UserEventsPipelines#property}
  */
  readonly property: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._property.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._property.internalValue = value.property;
    }
  }

  // property - computed: false, optional: false, required: true
  private _property = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#properties OpenpipelineV2UserEventsPipelines#properties}
  */
  readonly properties: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesToTerraform(struct!.properties),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties.internalValue = value.properties;
    }
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql {
  /**
  * DQL script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#script OpenpipelineV2UserEventsPipelines#script}
  */
  readonly script: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._script = value.script;
    }
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#name OpenpipelineV2UserEventsPipelines#name}
  */
  readonly name: string;
  /**
  * Field's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value OpenpipelineV2UserEventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field.internalValue = value.field;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields OpenpipelineV2UserEventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove {
  /**
  * Fields to remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields OpenpipelineV2UserEventsPipelines#fields}
  */
  readonly fields: string[];
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#from_name OpenpipelineV2UserEventsPipelines#from_name}
  */
  readonly fromName: string;
  /**
  * New field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#to_name OpenpipelineV2UserEventsPipelines#to_name}
  */
  readonly toName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_name: {
      value: cdktf.stringToHclTerraform(struct!.fromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_name: {
      value: cdktf.stringToHclTerraform(struct!.toName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromName = this._fromName;
    }
    if (this._toName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toName = this._toName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromName = undefined;
      this._toName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromName = value.fromName;
      this._toName = value.toName;
    }
  }

  // from_name - computed: false, optional: false, required: true
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // to_name - computed: false, optional: false, required: true
  private _toName?: string; 
  public get toName() {
    return this.getStringAttribute('to_name');
  }
  public set toName(value: string) {
    this._toName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toNameInput() {
    return this._toName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field.internalValue = value.field;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields OpenpipelineV2UserEventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._field = undefined;
      this._metricKey = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._field = value.field;
      this._metricKey = value.metricKey;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value OpenpipelineV2UserEventsPipelines#value}
  */
  readonly value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#aggregation OpenpipelineV2UserEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling OpenpipelineV2UserEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling: {
      value: cdktf.stringToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._metricKey = undefined;
      this._sampling = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._metricKey = value.metricKey;
      this._sampling = value.sampling;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: string; 
  public get sampling() {
    return this.getStringAttribute('sampling');
  }
  public set sampling(value: string) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#aggregation OpenpipelineV2UserEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#measurement OpenpipelineV2UserEventsPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling OpenpipelineV2UserEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    measurement: cdktf.stringToTerraform(struct!.measurement),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measurement: {
      value: cdktf.stringToHclTerraform(struct!.measurement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling: {
      value: cdktf.stringToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._measurement !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurement = this._measurement;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._defaultValue = undefined;
      this._field = undefined;
      this._measurement = undefined;
      this._metricKey = undefined;
      this._sampling = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._defaultValue = value.defaultValue;
      this._field = value.field;
      this._measurement = value.measurement;
      this._metricKey = value.metricKey;
      this._sampling = value.sampling;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // measurement - computed: false, optional: false, required: true
  private _measurement?: string; 
  public get measurement() {
    return this.getStringAttribute('measurement');
  }
  public set measurement(value: string) {
    this._measurement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementInput() {
    return this._measurement;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: string; 
  public get sampling() {
    return this.getStringAttribute('sampling');
  }
  public set sampling(value: string) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#aggregation OpenpipelineV2UserEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#measurement OpenpipelineV2UserEventsPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling OpenpipelineV2UserEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    measurement: cdktf.stringToTerraform(struct!.measurement),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    measurement: {
      value: cdktf.stringToHclTerraform(struct!.measurement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling: {
      value: cdktf.stringToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._measurement !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurement = this._measurement;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._defaultValue = undefined;
      this._field = undefined;
      this._measurement = undefined;
      this._metricKey = undefined;
      this._sampling = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._defaultValue = value.defaultValue;
      this._field = value.field;
      this._measurement = value.measurement;
      this._metricKey = value.metricKey;
      this._sampling = value.sampling;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // measurement - computed: false, optional: false, required: true
  private _measurement?: string; 
  public get measurement() {
    return this.getStringAttribute('measurement');
  }
  public set measurement(value: string) {
    this._measurement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get measurementInput() {
    return this._measurement;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // sampling - computed: false, optional: true, required: false
  private _sampling?: string; 
  public get sampling() {
    return this.getStringAttribute('sampling');
  }
  public set sampling(value: string) {
    this._sampling = value;
  }
  public resetSampling() {
    this._sampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingInput() {
    return this._sampling;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent {
  /**
  * event_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_category OpenpipelineV2UserEventsPipelines#event_category}
  */
  readonly eventCategory: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_provider OpenpipelineV2UserEventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider;
  /**
  * event_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_status OpenpipelineV2UserEventsPipelines#event_status}
  */
  readonly eventStatus: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#event_type OpenpipelineV2UserEventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_category: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryToTerraform(struct!.eventCategory),
    event_provider: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderToTerraform(struct!.eventProvider),
    event_status: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusToTerraform(struct!.eventStatus),
    event_type: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_category: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct!.eventCategory),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryList",
    },
    event_provider: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderList",
    },
    event_status: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct!.eventStatus),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusList",
    },
    event_type: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCategory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCategory = this._eventCategory?.internalValue;
    }
    if (this._eventProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventProvider = this._eventProvider?.internalValue;
    }
    if (this._eventStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStatus = this._eventStatus?.internalValue;
    }
    if (this._eventType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType?.internalValue;
    }
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventCategory.internalValue = undefined;
      this._eventProvider.internalValue = undefined;
      this._eventStatus.internalValue = undefined;
      this._eventType.internalValue = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventCategory.internalValue = value.eventCategory;
      this._eventProvider.internalValue = value.eventProvider;
      this._eventStatus.internalValue = value.eventStatus;
      this._eventType.internalValue = value.eventType;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // event_category - computed: false, optional: false, required: true
  private _eventCategory = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategoryOutputReference(this, "event_category");
  public get eventCategory() {
    return this._eventCategory;
  }
  public putEventCategory(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventCategory) {
    this._eventCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoryInput() {
    return this._eventCategory.internalValue;
  }

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_status - computed: false, optional: false, required: true
  private _eventStatus = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatusOutputReference(this, "event_status");
  public get eventStatus() {
    return this._eventStatus;
  }
  public putEventStatus(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventStatus) {
    this._eventStatus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStatusInput() {
    return this._eventStatus.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventEventType) {
    this._eventType.internalValue = value;
  }
  public resetEventType() {
    this._eventType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value OpenpipelineV2UserEventsPipelines#value}
  */
  readonly value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#edge_type OpenpipelineV2UserEventsPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Source ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_id_field_name OpenpipelineV2UserEventsPipelines#source_id_field_name}
  */
  readonly sourceIdFieldName: string;
  /**
  * Source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_type OpenpipelineV2UserEventsPipelines#source_type}
  */
  readonly sourceType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_id_field_name OpenpipelineV2UserEventsPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_type OpenpipelineV2UserEventsPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_type: cdktf.stringToTerraform(struct!.edgeType),
    source_id_field_name: cdktf.stringToTerraform(struct!.sourceIdFieldName),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    target_id_field_name: cdktf.stringToTerraform(struct!.targetIdFieldName),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_type: {
      value: cdktf.stringToHclTerraform(struct!.edgeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.targetIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeType = this._edgeType;
    }
    if (this._sourceIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIdFieldName = this._sourceIdFieldName;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._targetIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdFieldName = this._targetIdFieldName;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._edgeType = undefined;
      this._sourceIdFieldName = undefined;
      this._sourceType = undefined;
      this._targetIdFieldName = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._edgeType = value.edgeType;
      this._sourceIdFieldName = value.sourceIdFieldName;
      this._sourceType = value.sourceType;
      this._targetIdFieldName = value.targetIdFieldName;
      this._targetType = value.targetType;
    }
  }

  // edge_type - computed: false, optional: false, required: true
  private _edgeType?: string; 
  public get edgeType() {
    return this.getStringAttribute('edge_type');
  }
  public set edgeType(value: string) {
    this._edgeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTypeInput() {
    return this._edgeType;
  }

  // source_id_field_name - computed: false, optional: false, required: true
  private _sourceIdFieldName?: string; 
  public get sourceIdFieldName() {
    return this.getStringAttribute('source_id_field_name');
  }
  public set sourceIdFieldName(value: string) {
    this._sourceIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdFieldNameInput() {
    return this._sourceIdFieldName;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // target_id_field_name - computed: false, optional: false, required: true
  private _targetIdFieldName?: string; 
  public get targetIdFieldName() {
    return this.getStringAttribute('target_id_field_name');
  }
  public set targetIdFieldName(value: string) {
    this._targetIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdFieldNameInput() {
    return this._targetIdFieldName;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_name OpenpipelineV2UserEventsPipelines#field_name}
  */
  readonly fieldName: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#referenced_field_name OpenpipelineV2UserEventsPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referenced_field_name: {
      value: cdktf.stringToHclTerraform(struct!.referencedFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._referencedFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedFieldName = this._referencedFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._referencedFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._referencedFieldName = value.referencedFieldName;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // referenced_field_name - computed: false, optional: false, required: true
  private _referencedFieldName?: string; 
  public get referencedFieldName() {
    return this.getStringAttribute('referenced_field_name');
  }
  public set referencedFieldName(value: string) {
    this._referencedFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedFieldNameInput() {
    return this._referencedFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract {
  /**
  * smartscape_field_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_field_extraction_entry OpenpipelineV2UserEventsPipelines#smartscape_field_extraction_entry}
  */
  readonly smartscapeFieldExtractionEntry: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_field_extraction_entry: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform, true)(struct!.smartscapeFieldExtractionEntry),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_field_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform, true)(struct!.smartscapeFieldExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeFieldExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeFieldExtractionEntry = this._smartscapeFieldExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smartscapeFieldExtractionEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smartscapeFieldExtractionEntry.internalValue = value.smartscapeFieldExtractionEntry;
    }
  }

  // smartscape_field_extraction_entry - computed: false, optional: false, required: true
  private _smartscapeFieldExtractionEntry = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList(this, "smartscape_field_extraction_entry", false);
  public get smartscapeFieldExtractionEntry() {
    return this._smartscapeFieldExtractionEntry;
  }
  public putSmartscapeFieldExtractionEntry(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeFieldExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeFieldExtractionEntryInput() {
    return this._smartscapeFieldExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent {
  /**
  * ID component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id_component OpenpipelineV2UserEventsPipelines#id_component}
  */
  readonly idComponent: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#referenced_field_name OpenpipelineV2UserEventsPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.stringToTerraform(struct!.idComponent),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.stringToHclTerraform(struct!.idComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referenced_field_name: {
      value: cdktf.stringToHclTerraform(struct!.referencedFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent;
    }
    if (this._referencedFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedFieldName = this._referencedFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idComponent = undefined;
      this._referencedFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idComponent = value.idComponent;
      this._referencedFieldName = value.referencedFieldName;
    }
  }

  // id_component - computed: false, optional: false, required: true
  private _idComponent?: string; 
  public get idComponent() {
    return this.getStringAttribute('id_component');
  }
  public set idComponent(value: string) {
    this._idComponent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent;
  }

  // referenced_field_name - computed: false, optional: false, required: true
  private _referencedFieldName?: string; 
  public get referencedFieldName() {
    return this.getStringAttribute('referenced_field_name');
  }
  public set referencedFieldName(value: string) {
    this._referencedFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedFieldNameInput() {
    return this._referencedFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents {
  /**
  * id_component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id_component OpenpipelineV2UserEventsPipelines#id_component}
  */
  readonly idComponent: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform, true)(struct!.idComponent),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform, true)(struct!.idComponent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idComponent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idComponent.internalValue = value.idComponent;
    }
  }

  // id_component - computed: false, optional: false, required: true
  private _idComponent = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList(this, "id_component", false);
  public get idComponent() {
    return this._idComponent;
  }
  public putIdComponent(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable) {
    this._idComponent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#edge_type OpenpipelineV2UserEventsPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_id_field_name OpenpipelineV2UserEventsPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#target_type OpenpipelineV2UserEventsPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_type: cdktf.stringToTerraform(struct!.edgeType),
    target_id_field_name: cdktf.stringToTerraform(struct!.targetIdFieldName),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_type: {
      value: cdktf.stringToHclTerraform(struct!.edgeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.targetIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeType = this._edgeType;
    }
    if (this._targetIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIdFieldName = this._targetIdFieldName;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeType = undefined;
      this._targetIdFieldName = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeType = value.edgeType;
      this._targetIdFieldName = value.targetIdFieldName;
      this._targetType = value.targetType;
    }
  }

  // edge_type - computed: false, optional: false, required: true
  private _edgeType?: string; 
  public get edgeType() {
    return this.getStringAttribute('edge_type');
  }
  public set edgeType(value: string) {
    this._edgeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTypeInput() {
    return this._edgeType;
  }

  // target_id_field_name - computed: false, optional: false, required: true
  private _targetIdFieldName?: string; 
  public get targetIdFieldName() {
    return this.getStringAttribute('target_id_field_name');
  }
  public set targetIdFieldName(value: string) {
    this._targetIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdFieldNameInput() {
    return this._targetIdFieldName;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract {
  /**
  * smartscape_static_edge_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_static_edge_extraction_entry OpenpipelineV2UserEventsPipelines#smartscape_static_edge_extraction_entry}
  */
  readonly smartscapeStaticEdgeExtractionEntry: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_static_edge_extraction_entry: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_static_edge_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeStaticEdgeExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeStaticEdgeExtractionEntry = this._smartscapeStaticEdgeExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._smartscapeStaticEdgeExtractionEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._smartscapeStaticEdgeExtractionEntry.internalValue = value.smartscapeStaticEdgeExtractionEntry;
    }
  }

  // smartscape_static_edge_extraction_entry - computed: false, optional: false, required: true
  private _smartscapeStaticEdgeExtractionEntry = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList(this, "smartscape_static_edge_extraction_entry", false);
  public get smartscapeStaticEdgeExtractionEntry() {
    return this._smartscapeStaticEdgeExtractionEntry;
  }
  public putSmartscapeStaticEdgeExtractionEntry(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeStaticEdgeExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeStaticEdgeExtractionEntryInput() {
    return this._smartscapeStaticEdgeExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode {
  /**
  * Extract node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#extract_node OpenpipelineV2UserEventsPipelines#extract_node}
  */
  readonly extractNode: boolean | cdktf.IResolvable;
  /**
  * Node ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#node_id_field_name OpenpipelineV2UserEventsPipelines#node_id_field_name}
  */
  readonly nodeIdFieldName: string;
  /**
  * Node type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#node_type OpenpipelineV2UserEventsPipelines#node_type}
  */
  readonly nodeType: string;
  /**
  * fields_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_to_extract OpenpipelineV2UserEventsPipelines#fields_to_extract}
  */
  readonly fieldsToExtract?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract;
  /**
  * id_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id_components OpenpipelineV2UserEventsPipelines#id_components}
  */
  readonly idComponents: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents;
  /**
  * node_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#node_name OpenpipelineV2UserEventsPipelines#node_name}
  */
  readonly nodeName?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName;
  /**
  * static_edges_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#static_edges_to_extract OpenpipelineV2UserEventsPipelines#static_edges_to_extract}
  */
  readonly staticEdgesToExtract?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract_node: cdktf.booleanToTerraform(struct!.extractNode),
    node_id_field_name: cdktf.stringToTerraform(struct!.nodeIdFieldName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    fields_to_extract: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct!.fieldsToExtract),
    id_components: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct!.idComponents),
    node_name: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct!.nodeName),
    static_edges_to_extract: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct!.staticEdgesToExtract),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extract_node: {
      value: cdktf.booleanToHclTerraform(struct!.extractNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_id_field_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeIdFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields_to_extract: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct!.fieldsToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractList",
    },
    id_components: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct!.idComponents),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsList",
    },
    node_name: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct!.nodeName),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameList",
    },
    static_edges_to_extract: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct!.staticEdgesToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extractNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractNode = this._extractNode;
    }
    if (this._nodeIdFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIdFieldName = this._nodeIdFieldName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._fieldsToExtract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsToExtract = this._fieldsToExtract?.internalValue;
    }
    if (this._idComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponents = this._idComponents?.internalValue;
    }
    if (this._nodeName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName?.internalValue;
    }
    if (this._staticEdgesToExtract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticEdgesToExtract = this._staticEdgesToExtract?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extractNode = undefined;
      this._nodeIdFieldName = undefined;
      this._nodeType = undefined;
      this._fieldsToExtract.internalValue = undefined;
      this._idComponents.internalValue = undefined;
      this._nodeName.internalValue = undefined;
      this._staticEdgesToExtract.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extractNode = value.extractNode;
      this._nodeIdFieldName = value.nodeIdFieldName;
      this._nodeType = value.nodeType;
      this._fieldsToExtract.internalValue = value.fieldsToExtract;
      this._idComponents.internalValue = value.idComponents;
      this._nodeName.internalValue = value.nodeName;
      this._staticEdgesToExtract.internalValue = value.staticEdgesToExtract;
    }
  }

  // extract_node - computed: false, optional: false, required: true
  private _extractNode?: boolean | cdktf.IResolvable; 
  public get extractNode() {
    return this.getBooleanAttribute('extract_node');
  }
  public set extractNode(value: boolean | cdktf.IResolvable) {
    this._extractNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extractNodeInput() {
    return this._extractNode;
  }

  // node_id_field_name - computed: false, optional: false, required: true
  private _nodeIdFieldName?: string; 
  public get nodeIdFieldName() {
    return this.getStringAttribute('node_id_field_name');
  }
  public set nodeIdFieldName(value: string) {
    this._nodeIdFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdFieldNameInput() {
    return this._nodeIdFieldName;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // fields_to_extract - computed: false, optional: true, required: false
  private _fieldsToExtract = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference(this, "fields_to_extract");
  public get fieldsToExtract() {
    return this._fieldsToExtract;
  }
  public putFieldsToExtract(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeFieldsToExtract) {
    this._fieldsToExtract.internalValue = value;
  }
  public resetFieldsToExtract() {
    this._fieldsToExtract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsToExtractInput() {
    return this._fieldsToExtract.internalValue;
  }

  // id_components - computed: false, optional: false, required: true
  private _idComponents = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponentsOutputReference(this, "id_components");
  public get idComponents() {
    return this._idComponents;
  }
  public putIdComponents(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeIdComponents) {
    this._idComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentsInput() {
    return this._idComponents.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeNameOutputReference(this, "node_name");
  public get nodeName() {
    return this._nodeName;
  }
  public putNodeName(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeNodeName) {
    this._nodeName.internalValue = value;
  }
  public resetNodeName() {
    this._nodeName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName.internalValue;
  }

  // static_edges_to_extract - computed: false, optional: true, required: false
  private _staticEdgesToExtract = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference(this, "static_edges_to_extract");
  public get staticEdgesToExtract() {
    return this._staticEdgesToExtract;
  }
  public putStaticEdgesToExtract(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeStaticEdgesToExtract) {
    this._staticEdgesToExtract.internalValue = value;
  }
  public resetStaticEdgesToExtract() {
    this._staticEdgesToExtract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticEdgesToExtractInput() {
    return this._staticEdgesToExtract.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#custom_matcher OpenpipelineV2UserEventsPipelines#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#technology_id OpenpipelineV2UserEventsPipelines#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_matcher: {
      value: cdktf.stringToHclTerraform(struct!.customMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology_id: {
      value: cdktf.stringToHclTerraform(struct!.technologyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMatcher = this._customMatcher;
    }
    if (this._technologyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyId = this._technologyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customMatcher = undefined;
      this._technologyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customMatcher = value.customMatcher;
      this._technologyId = value.technologyId;
    }
  }

  // custom_matcher - computed: false, optional: true, required: false
  private _customMatcher?: string; 
  public get customMatcher() {
    return this.getStringAttribute('custom_matcher');
  }
  public set customMatcher(value: string) {
    this._customMatcher = value;
  }
  public resetCustomMatcher() {
    this._customMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMatcherInput() {
    return this._customMatcher;
  }

  // technology_id - computed: false, optional: false, required: true
  private _technologyId?: string; 
  public get technologyId() {
    return this.getStringAttribute('technology_id');
  }
  public set technologyId(value: string) {
    this._technologyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyIdInput() {
    return this._technologyId;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#metric_key OpenpipelineV2UserEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimensions OpenpipelineV2UserEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._field = undefined;
      this._metricKey = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._field = value.field;
      this._metricKey = value.metricKey;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#description OpenpipelineV2UserEventsPipelines#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#enabled OpenpipelineV2UserEventsPipelines#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#id OpenpipelineV2UserEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#matcher OpenpipelineV2UserEventsPipelines#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sample_data OpenpipelineV2UserEventsPipelines#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareHistogramMetric`, `samplingAwareValueMetric`, `sdlcEvent`, `securityContext`, `securityEvent`, `smartscapeEdge`, `smartscapeNode`, `technology`, `valueMetric`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#azure_log_forwarding OpenpipelineV2UserEventsPipelines#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#bizevent OpenpipelineV2UserEventsPipelines#bizevent}
  */
  readonly bizevent?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#bucket_assignment OpenpipelineV2UserEventsPipelines#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#cost_allocation OpenpipelineV2UserEventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#counter_metric OpenpipelineV2UserEventsPipelines#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#davis OpenpipelineV2UserEventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dql OpenpipelineV2UserEventsPipelines#dql}
  */
  readonly dql?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_add OpenpipelineV2UserEventsPipelines#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_remove OpenpipelineV2UserEventsPipelines#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#fields_rename OpenpipelineV2UserEventsPipelines#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#histogram_metric OpenpipelineV2UserEventsPipelines#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#product_allocation OpenpipelineV2UserEventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling_aware_counter_metric OpenpipelineV2UserEventsPipelines#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling_aware_histogram_metric OpenpipelineV2UserEventsPipelines#sampling_aware_histogram_metric}
  */
  readonly samplingAwareHistogramMetric?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sampling_aware_value_metric OpenpipelineV2UserEventsPipelines#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric;
  /**
  * sdlc_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#sdlc_event OpenpipelineV2UserEventsPipelines#sdlc_event}
  */
  readonly sdlcEvent?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#security_context OpenpipelineV2UserEventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#security_event OpenpipelineV2UserEventsPipelines#security_event}
  */
  readonly securityEvent?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent;
  /**
  * smartscape_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_edge OpenpipelineV2UserEventsPipelines#smartscape_edge}
  */
  readonly smartscapeEdge?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge;
  /**
  * smartscape_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#smartscape_node OpenpipelineV2UserEventsPipelines#smartscape_node}
  */
  readonly smartscapeNode?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#technology OpenpipelineV2UserEventsPipelines#technology}
  */
  readonly technology?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#value_metric OpenpipelineV2UserEventsPipelines#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    type: cdktf.stringToTerraform(struct!.type),
    azure_log_forwarding: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_histogram_metric: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct!.samplingAwareHistogramMetric),
    sampling_aware_value_metric: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    sdlc_event: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventToTerraform(struct!.sdlcEvent),
    security_context: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    smartscape_edge: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeToTerraform(struct!.smartscapeEdge),
    smartscape_node: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeToTerraform(struct!.smartscapeNode),
    technology: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_data: {
      value: cdktf.stringToHclTerraform(struct!.sampleData),
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
    azure_log_forwarding: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_histogram_metric: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct!.samplingAwareHistogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricList",
    },
    sdlc_event: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventToHclTerraform(struct!.sdlcEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventList",
    },
    security_context: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventList",
    },
    smartscape_edge: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeToHclTerraform(struct!.smartscapeEdge),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeList",
    },
    smartscape_node: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeToHclTerraform(struct!.smartscapeNode),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeList",
    },
    technology: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._azureLogForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLogForwarding = this._azureLogForwarding?.internalValue;
    }
    if (this._bizevent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bizevent = this._bizevent?.internalValue;
    }
    if (this._bucketAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAssignment = this._bucketAssignment?.internalValue;
    }
    if (this._costAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAllocation = this._costAllocation?.internalValue;
    }
    if (this._counterMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterMetric = this._counterMetric?.internalValue;
    }
    if (this._davis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.davis = this._davis?.internalValue;
    }
    if (this._dql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dql = this._dql?.internalValue;
    }
    if (this._fieldsAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsAdd = this._fieldsAdd?.internalValue;
    }
    if (this._fieldsRemove?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRemove = this._fieldsRemove?.internalValue;
    }
    if (this._fieldsRename?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRename = this._fieldsRename?.internalValue;
    }
    if (this._histogramMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramMetric = this._histogramMetric?.internalValue;
    }
    if (this._productAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productAllocation = this._productAllocation?.internalValue;
    }
    if (this._samplingAwareCounterMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareCounterMetric = this._samplingAwareCounterMetric?.internalValue;
    }
    if (this._samplingAwareHistogramMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareHistogramMetric = this._samplingAwareHistogramMetric?.internalValue;
    }
    if (this._samplingAwareValueMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareValueMetric = this._samplingAwareValueMetric?.internalValue;
    }
    if (this._sdlcEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdlcEvent = this._sdlcEvent?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._securityEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEvent = this._securityEvent?.internalValue;
    }
    if (this._smartscapeEdge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeEdge = this._smartscapeEdge?.internalValue;
    }
    if (this._smartscapeNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeNode = this._smartscapeNode?.internalValue;
    }
    if (this._technology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technology = this._technology?.internalValue;
    }
    if (this._valueMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMetric = this._valueMetric?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._type = undefined;
      this._azureLogForwarding.internalValue = undefined;
      this._bizevent.internalValue = undefined;
      this._bucketAssignment.internalValue = undefined;
      this._costAllocation.internalValue = undefined;
      this._counterMetric.internalValue = undefined;
      this._davis.internalValue = undefined;
      this._dql.internalValue = undefined;
      this._fieldsAdd.internalValue = undefined;
      this._fieldsRemove.internalValue = undefined;
      this._fieldsRename.internalValue = undefined;
      this._histogramMetric.internalValue = undefined;
      this._productAllocation.internalValue = undefined;
      this._samplingAwareCounterMetric.internalValue = undefined;
      this._samplingAwareHistogramMetric.internalValue = undefined;
      this._samplingAwareValueMetric.internalValue = undefined;
      this._sdlcEvent.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._securityEvent.internalValue = undefined;
      this._smartscapeEdge.internalValue = undefined;
      this._smartscapeNode.internalValue = undefined;
      this._technology.internalValue = undefined;
      this._valueMetric.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._type = value.type;
      this._azureLogForwarding.internalValue = value.azureLogForwarding;
      this._bizevent.internalValue = value.bizevent;
      this._bucketAssignment.internalValue = value.bucketAssignment;
      this._costAllocation.internalValue = value.costAllocation;
      this._counterMetric.internalValue = value.counterMetric;
      this._davis.internalValue = value.davis;
      this._dql.internalValue = value.dql;
      this._fieldsAdd.internalValue = value.fieldsAdd;
      this._fieldsRemove.internalValue = value.fieldsRemove;
      this._fieldsRename.internalValue = value.fieldsRename;
      this._histogramMetric.internalValue = value.histogramMetric;
      this._productAllocation.internalValue = value.productAllocation;
      this._samplingAwareCounterMetric.internalValue = value.samplingAwareCounterMetric;
      this._samplingAwareHistogramMetric.internalValue = value.samplingAwareHistogramMetric;
      this._samplingAwareValueMetric.internalValue = value.samplingAwareValueMetric;
      this._sdlcEvent.internalValue = value.sdlcEvent;
      this._securityContext.internalValue = value.securityContext;
      this._securityEvent.internalValue = value.securityEvent;
      this._smartscapeEdge.internalValue = value.smartscapeEdge;
      this._smartscapeNode.internalValue = value.smartscapeNode;
      this._technology.internalValue = value.technology;
      this._valueMetric.internalValue = value.valueMetric;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // sample_data - computed: false, optional: true, required: false
  private _sampleData?: string; 
  public get sampleData() {
    return this.getStringAttribute('sample_data');
  }
  public set sampleData(value: string) {
    this._sampleData = value;
  }
  public resetSampleData() {
    this._sampleData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDataInput() {
    return this._sampleData;
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

  // azure_log_forwarding - computed: false, optional: true, required: false
  private _azureLogForwarding = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorAzureLogForwarding) {
    this._azureLogForwarding.internalValue = value;
  }
  public resetAzureLogForwarding() {
    this._azureLogForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLogForwardingInput() {
    return this._azureLogForwarding.internalValue;
  }

  // bizevent - computed: false, optional: true, required: false
  private _bizevent = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBizevent) {
    this._bizevent.internalValue = value;
  }
  public resetBizevent() {
    this._bizevent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizeventInput() {
    return this._bizevent.internalValue;
  }

  // bucket_assignment - computed: false, optional: true, required: false
  private _bucketAssignment = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorBucketAssignment) {
    this._bucketAssignment.internalValue = value;
  }
  public resetBucketAssignment() {
    this._bucketAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAssignmentInput() {
    return this._bucketAssignment.internalValue;
  }

  // cost_allocation - computed: false, optional: true, required: false
  private _costAllocation = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  public resetCostAllocation() {
    this._costAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // counter_metric - computed: false, optional: true, required: false
  private _counterMetric = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorCounterMetric) {
    this._counterMetric.internalValue = value;
  }
  public resetCounterMetric() {
    this._counterMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterMetricInput() {
    return this._counterMetric.internalValue;
  }

  // davis - computed: false, optional: true, required: false
  private _davis = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDavis) {
    this._davis.internalValue = value;
  }
  public resetDavis() {
    this._davis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisInput() {
    return this._davis.internalValue;
  }

  // dql - computed: false, optional: true, required: false
  private _dql = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorDql) {
    this._dql.internalValue = value;
  }
  public resetDql() {
    this._dql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlInput() {
    return this._dql.internalValue;
  }

  // fields_add - computed: false, optional: true, required: false
  private _fieldsAdd = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsAdd) {
    this._fieldsAdd.internalValue = value;
  }
  public resetFieldsAdd() {
    this._fieldsAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsAddInput() {
    return this._fieldsAdd.internalValue;
  }

  // fields_remove - computed: false, optional: true, required: false
  private _fieldsRemove = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRemove) {
    this._fieldsRemove.internalValue = value;
  }
  public resetFieldsRemove() {
    this._fieldsRemove.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRemoveInput() {
    return this._fieldsRemove.internalValue;
  }

  // fields_rename - computed: false, optional: true, required: false
  private _fieldsRename = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorFieldsRename) {
    this._fieldsRename.internalValue = value;
  }
  public resetFieldsRename() {
    this._fieldsRename.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRenameInput() {
    return this._fieldsRename.internalValue;
  }

  // histogram_metric - computed: false, optional: true, required: false
  private _histogramMetric = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorHistogramMetric) {
    this._histogramMetric.internalValue = value;
  }
  public resetHistogramMetric() {
    this._histogramMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramMetricInput() {
    return this._histogramMetric.internalValue;
  }

  // product_allocation - computed: false, optional: true, required: false
  private _productAllocation = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  public resetProductAllocation() {
    this._productAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // sampling_aware_counter_metric - computed: false, optional: true, required: false
  private _samplingAwareCounterMetric = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareCounterMetric) {
    this._samplingAwareCounterMetric.internalValue = value;
  }
  public resetSamplingAwareCounterMetric() {
    this._samplingAwareCounterMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareCounterMetricInput() {
    return this._samplingAwareCounterMetric.internalValue;
  }

  // sampling_aware_histogram_metric - computed: false, optional: true, required: false
  private _samplingAwareHistogramMetric = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetricOutputReference(this, "sampling_aware_histogram_metric");
  public get samplingAwareHistogramMetric() {
    return this._samplingAwareHistogramMetric;
  }
  public putSamplingAwareHistogramMetric(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareHistogramMetric) {
    this._samplingAwareHistogramMetric.internalValue = value;
  }
  public resetSamplingAwareHistogramMetric() {
    this._samplingAwareHistogramMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareHistogramMetricInput() {
    return this._samplingAwareHistogramMetric.internalValue;
  }

  // sampling_aware_value_metric - computed: false, optional: true, required: false
  private _samplingAwareValueMetric = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSamplingAwareValueMetric) {
    this._samplingAwareValueMetric.internalValue = value;
  }
  public resetSamplingAwareValueMetric() {
    this._samplingAwareValueMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareValueMetricInput() {
    return this._samplingAwareValueMetric.internalValue;
  }

  // sdlc_event - computed: false, optional: true, required: false
  private _sdlcEvent = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEventOutputReference(this, "sdlc_event");
  public get sdlcEvent() {
    return this._sdlcEvent;
  }
  public putSdlcEvent(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSdlcEvent) {
    this._sdlcEvent.internalValue = value;
  }
  public resetSdlcEvent() {
    this._sdlcEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdlcEventInput() {
    return this._sdlcEvent.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // security_event - computed: false, optional: true, required: false
  private _securityEvent = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSecurityEvent) {
    this._securityEvent.internalValue = value;
  }
  public resetSecurityEvent() {
    this._securityEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventInput() {
    return this._securityEvent.internalValue;
  }

  // smartscape_edge - computed: false, optional: true, required: false
  private _smartscapeEdge = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdgeOutputReference(this, "smartscape_edge");
  public get smartscapeEdge() {
    return this._smartscapeEdge;
  }
  public putSmartscapeEdge(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeEdge) {
    this._smartscapeEdge.internalValue = value;
  }
  public resetSmartscapeEdge() {
    this._smartscapeEdge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeEdgeInput() {
    return this._smartscapeEdge.internalValue;
  }

  // smartscape_node - computed: false, optional: true, required: false
  private _smartscapeNode = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNodeOutputReference(this, "smartscape_node");
  public get smartscapeNode() {
    return this._smartscapeNode;
  }
  public putSmartscapeNode(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorSmartscapeNode) {
    this._smartscapeNode.internalValue = value;
  }
  public resetSmartscapeNode() {
    this._smartscapeNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeNodeInput() {
    return this._smartscapeNode.internalValue;
  }

  // technology - computed: false, optional: true, required: false
  private _technology = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorTechnology) {
    this._technology.internalValue = value;
  }
  public resetTechnology() {
    this._technology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology.internalValue;
  }

  // value_metric - computed: false, optional: true, required: false
  private _valueMetric = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorValueMetric) {
    this._valueMetric.internalValue = value;
  }
  public resetValueMetric() {
    this._valueMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMetricInput() {
    return this._valueMetric.internalValue;
  }
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorOutputReference {
    return new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocationProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#processor OpenpipelineV2UserEventsPipelines#processor}
  */
  readonly processor: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationProcessorsToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocationProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: false, required: true
  private _processor = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesProductAllocation {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#processors OpenpipelineV2UserEventsPipelines#processors}
  */
  readonly processors?: OpenpipelineV2UserEventsPipelinesProductAllocationProcessors;
}

export function openpipelineV2UserEventsPipelinesProductAllocationToTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2UserEventsPipelinesProductAllocationProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2UserEventsPipelinesProductAllocationToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesProductAllocationOutputReference | OpenpipelineV2UserEventsPipelinesProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2UserEventsPipelinesProductAllocationProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesProductAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processors.internalValue = value.processors;
    }
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new OpenpipelineV2UserEventsPipelinesProductAllocationProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2UserEventsPipelinesProductAllocationProcessors) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwarding {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#forwarder_config_id OpenpipelineV2UserEventsPipelines#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field_extraction OpenpipelineV2UserEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    field_extraction: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarder_config_id: {
      value: cdktf.stringToHclTerraform(struct!.forwarderConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_extraction: {
      value: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwarding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwarderConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarderConfigId = this._forwarderConfigId;
    }
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwarding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwarderConfigId = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwarderConfigId = value.forwarderConfigId;
      this._fieldExtraction.internalValue = value.fieldExtraction;
    }
  }

  // forwarder_config_id - computed: false, optional: false, required: true
  private _forwarderConfigId?: string; 
  public get forwarderConfigId() {
    return this.getStringAttribute('forwarder_config_id');
  }
  public set forwarderConfigId(value: string) {
    this._forwarderConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwarderConfigIdInput() {
    return this._forwarderConfigId;
  }

  // field_extraction - computed: false, optional: false, required: true
  private _fieldExtraction = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorAzureLogForwardingFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventProviderField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultValue = undefined;
      this._sourceFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultValue = value.defaultValue;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#constant OpenpipelineV2UserEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#multi_value_constant OpenpipelineV2UserEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#field OpenpipelineV2UserEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_value_constant: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.multiValueConstant),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
      this._field.internalValue = value.field;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // multi_value_constant - computed: false, optional: true, required: false
  private _multiValueConstant?: string[]; 
  public get multiValueConstant() {
    return this.getListAttribute('multi_value_constant');
  }
  public set multiValueConstant(value: string[]) {
    this._multiValueConstant = value;
  }
  public resetMultiValueConstant() {
    this._multiValueConstant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueConstantInput() {
    return this._multiValueConstant;
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

  // field - computed: false, optional: true, required: false
  private _field = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventEventTypeField) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#default_value OpenpipelineV2UserEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#destination_field_name OpenpipelineV2UserEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#source_field_name OpenpipelineV2UserEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    destination_field_name: cdktf.stringToTerraform(struct!.destinationFieldName),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_field_name: {
      value: cdktf.stringToHclTerraform(struct!.destinationFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_field_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._destinationFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationFieldName = this._destinationFieldName;
    }
    if (this._sourceFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFieldName = this._sourceFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._destinationFieldName = undefined;
      this._sourceFieldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._destinationFieldName = value.destinationFieldName;
      this._sourceFieldName = value.sourceFieldName;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // destination_field_name - computed: false, optional: true, required: false
  private _destinationFieldName?: string; 
  public get destinationFieldName() {
    return this.getStringAttribute('destination_field_name');
  }
  public set destinationFieldName(value: string) {
    this._destinationFieldName = value;
  }
  public resetDestinationFieldName() {
    this._destinationFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldNameInput() {
    return this._destinationFieldName;
  }

  // source_field_name - computed: false, optional: false, required: true
  private _sourceFieldName?: string; 
  public get sourceFieldName() {
    return this.getStringAttribute('source_field_name');
  }
  public set sourceFieldName(value: string) {
    this._sourceFieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldNameInput() {
    return this._sourceFieldName;
  }
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#dimension OpenpipelineV2UserEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#exclude OpenpipelineV2UserEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#type OpenpipelineV2UserEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_user_events_pipelines#include OpenpipelineV2UserEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude;
}

export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionToTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct?: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: openpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._include?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._type = undefined;
      this._include.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._type = value.type;
      this._include.internalValue = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
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

  // include - computed: false, optional: true, required: false
  private _include = new OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2UserEventsPipelinesSecurityContextProcessorsProcessorBizeventFieldExtractionInclude) {
    this._include.internalValue = value;
  }
  public resetInclude() {
    this._include.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include.internalValue;
  }
}
