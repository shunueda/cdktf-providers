import * as cdktf from 'cdktf';
import { OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwarding,
openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingToTerraform,
openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingToHclTerraform,
OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingOutputReference,
OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizevent,
openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventToTerraform,
openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventToHclTerraform,
OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventOutputReference,
OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignment,
openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentToTerraform,
openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentToHclTerraform,
OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentOutputReference } from './structs2000'
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#value OpenpipelineV2EventsSdlcPipelines#value}
  */
  readonly value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation | undefined) {
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
  private _value = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric {
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_key OpenpipelineV2EventsSdlcPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimensions OpenpipelineV2EventsSdlcPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricDimensions) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#key OpenpipelineV2EventsSdlcPipelines#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#value OpenpipelineV2EventsSdlcPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#property OpenpipelineV2EventsSdlcPipelines#property}
  */
  readonly property: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties | undefined) {
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
  private _property = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#properties OpenpipelineV2EventsSdlcPipelines#properties}
  */
  readonly properties: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesToTerraform(struct!.properties),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis | undefined) {
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
  private _properties = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql {
  /**
  * DQL script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#script OpenpipelineV2EventsSdlcPipelines#script}
  */
  readonly script: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#name OpenpipelineV2EventsSdlcPipelines#name}
  */
  readonly name: string;
  /**
  * Field's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#value OpenpipelineV2EventsSdlcPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields OpenpipelineV2EventsSdlcPipelines#fields}
  */
  readonly fields: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd | undefined) {
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
  private _fields = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove {
  /**
  * Fields to remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields OpenpipelineV2EventsSdlcPipelines#fields}
  */
  readonly fields: string[];
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#from_name OpenpipelineV2EventsSdlcPipelines#from_name}
  */
  readonly fromName: string;
  /**
  * New field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#to_name OpenpipelineV2EventsSdlcPipelines#to_name}
  */
  readonly toName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields OpenpipelineV2EventsSdlcPipelines#fields}
  */
  readonly fields: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename | undefined) {
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
  private _fields = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_key OpenpipelineV2EventsSdlcPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimensions OpenpipelineV2EventsSdlcPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricDimensions) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#value OpenpipelineV2EventsSdlcPipelines#value}
  */
  readonly value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation | undefined) {
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
  private _value = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#aggregation OpenpipelineV2EventsSdlcPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_key OpenpipelineV2EventsSdlcPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sampling OpenpipelineV2EventsSdlcPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimensions OpenpipelineV2EventsSdlcPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#aggregation OpenpipelineV2EventsSdlcPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#measurement OpenpipelineV2EventsSdlcPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_key OpenpipelineV2EventsSdlcPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sampling OpenpipelineV2EventsSdlcPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimensions OpenpipelineV2EventsSdlcPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric): any {
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
    dimensions: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#aggregation OpenpipelineV2EventsSdlcPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#measurement OpenpipelineV2EventsSdlcPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_key OpenpipelineV2EventsSdlcPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sampling OpenpipelineV2EventsSdlcPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimensions OpenpipelineV2EventsSdlcPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric): any {
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
    dimensions: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#exclude OpenpipelineV2EventsSdlcPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#include OpenpipelineV2EventsSdlcPipelines#include}
  */
  readonly include?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent {
  /**
  * event_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#event_category OpenpipelineV2EventsSdlcPipelines#event_category}
  */
  readonly eventCategory: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#event_provider OpenpipelineV2EventsSdlcPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider;
  /**
  * event_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#event_status OpenpipelineV2EventsSdlcPipelines#event_status}
  */
  readonly eventStatus: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#event_type OpenpipelineV2EventsSdlcPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field_extraction OpenpipelineV2EventsSdlcPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_category: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToTerraform(struct!.eventCategory),
    event_provider: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderToTerraform(struct!.eventProvider),
    event_status: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusToTerraform(struct!.eventStatus),
    event_type: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_category: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct!.eventCategory),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryList",
    },
    event_provider: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderList",
    },
    event_status: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct!.eventStatus),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusList",
    },
    event_type: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent | undefined) {
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
  private _eventCategory = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference(this, "event_category");
  public get eventCategory() {
    return this._eventCategory;
  }
  public putEventCategory(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventCategory) {
    this._eventCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoryInput() {
    return this._eventCategory.internalValue;
  }

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_status - computed: false, optional: false, required: true
  private _eventStatus = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference(this, "event_status");
  public get eventStatus() {
    return this._eventStatus;
  }
  public putEventStatus(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventStatus) {
    this._eventStatus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStatusInput() {
    return this._eventStatus.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#value OpenpipelineV2EventsSdlcPipelines#value}
  */
  readonly value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext | undefined) {
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
  private _value = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#exclude OpenpipelineV2EventsSdlcPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#include OpenpipelineV2EventsSdlcPipelines#include}
  */
  readonly include?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field_extraction OpenpipelineV2EventsSdlcPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#edge_type OpenpipelineV2EventsSdlcPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Source ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_id_field_name OpenpipelineV2EventsSdlcPipelines#source_id_field_name}
  */
  readonly sourceIdFieldName: string;
  /**
  * Source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_type OpenpipelineV2EventsSdlcPipelines#source_type}
  */
  readonly sourceType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#target_id_field_name OpenpipelineV2EventsSdlcPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#target_type OpenpipelineV2EventsSdlcPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field_name OpenpipelineV2EventsSdlcPipelines#field_name}
  */
  readonly fieldName: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#referenced_field_name OpenpipelineV2EventsSdlcPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract {
  /**
  * smartscape_field_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#smartscape_field_extraction_entry OpenpipelineV2EventsSdlcPipelines#smartscape_field_extraction_entry}
  */
  readonly smartscapeFieldExtractionEntry: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_field_extraction_entry: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform, true)(struct!.smartscapeFieldExtractionEntry),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_field_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform, true)(struct!.smartscapeFieldExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeFieldExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeFieldExtractionEntry = this._smartscapeFieldExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined) {
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
  private _smartscapeFieldExtractionEntry = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList(this, "smartscape_field_extraction_entry", false);
  public get smartscapeFieldExtractionEntry() {
    return this._smartscapeFieldExtractionEntry;
  }
  public putSmartscapeFieldExtractionEntry(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeFieldExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeFieldExtractionEntryInput() {
    return this._smartscapeFieldExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent {
  /**
  * ID component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#id_component OpenpipelineV2EventsSdlcPipelines#id_component}
  */
  readonly idComponent: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#referenced_field_name OpenpipelineV2EventsSdlcPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.stringToTerraform(struct!.idComponent),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents {
  /**
  * id_component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#id_component OpenpipelineV2EventsSdlcPipelines#id_component}
  */
  readonly idComponent: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform, true)(struct!.idComponent),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform, true)(struct!.idComponent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents | undefined) {
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
  private _idComponent = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList(this, "id_component", false);
  public get idComponent() {
    return this._idComponent;
  }
  public putIdComponent(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable) {
    this._idComponent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#constant OpenpipelineV2EventsSdlcPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#multi_value_constant OpenpipelineV2EventsSdlcPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName | undefined) {
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
  private _field = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#edge_type OpenpipelineV2EventsSdlcPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#target_id_field_name OpenpipelineV2EventsSdlcPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#target_type OpenpipelineV2EventsSdlcPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract {
  /**
  * smartscape_static_edge_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#smartscape_static_edge_extraction_entry OpenpipelineV2EventsSdlcPipelines#smartscape_static_edge_extraction_entry}
  */
  readonly smartscapeStaticEdgeExtractionEntry: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_static_edge_extraction_entry: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_static_edge_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeStaticEdgeExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeStaticEdgeExtractionEntry = this._smartscapeStaticEdgeExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined) {
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
  private _smartscapeStaticEdgeExtractionEntry = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList(this, "smartscape_static_edge_extraction_entry", false);
  public get smartscapeStaticEdgeExtractionEntry() {
    return this._smartscapeStaticEdgeExtractionEntry;
  }
  public putSmartscapeStaticEdgeExtractionEntry(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeStaticEdgeExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeStaticEdgeExtractionEntryInput() {
    return this._smartscapeStaticEdgeExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode {
  /**
  * Extract node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#extract_node OpenpipelineV2EventsSdlcPipelines#extract_node}
  */
  readonly extractNode: boolean | cdktf.IResolvable;
  /**
  * Node ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#node_id_field_name OpenpipelineV2EventsSdlcPipelines#node_id_field_name}
  */
  readonly nodeIdFieldName: string;
  /**
  * Node type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#node_type OpenpipelineV2EventsSdlcPipelines#node_type}
  */
  readonly nodeType: string;
  /**
  * fields_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields_to_extract OpenpipelineV2EventsSdlcPipelines#fields_to_extract}
  */
  readonly fieldsToExtract?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract;
  /**
  * id_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#id_components OpenpipelineV2EventsSdlcPipelines#id_components}
  */
  readonly idComponents: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents;
  /**
  * node_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#node_name OpenpipelineV2EventsSdlcPipelines#node_name}
  */
  readonly nodeName?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName;
  /**
  * static_edges_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#static_edges_to_extract OpenpipelineV2EventsSdlcPipelines#static_edges_to_extract}
  */
  readonly staticEdgesToExtract?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract_node: cdktf.booleanToTerraform(struct!.extractNode),
    node_id_field_name: cdktf.stringToTerraform(struct!.nodeIdFieldName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    fields_to_extract: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct!.fieldsToExtract),
    id_components: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct!.idComponents),
    node_name: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct!.nodeName),
    static_edges_to_extract: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct!.staticEdgesToExtract),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct!.fieldsToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractList",
    },
    id_components: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct!.idComponents),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsList",
    },
    node_name: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct!.nodeName),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameList",
    },
    static_edges_to_extract: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct!.staticEdgesToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode | undefined) {
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
  private _fieldsToExtract = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference(this, "fields_to_extract");
  public get fieldsToExtract() {
    return this._fieldsToExtract;
  }
  public putFieldsToExtract(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract) {
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
  private _idComponents = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference(this, "id_components");
  public get idComponents() {
    return this._idComponents;
  }
  public putIdComponents(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents) {
    this._idComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentsInput() {
    return this._idComponents.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference(this, "node_name");
  public get nodeName() {
    return this._nodeName;
  }
  public putNodeName(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName) {
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
  private _staticEdgesToExtract = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference(this, "static_edges_to_extract");
  public get staticEdgesToExtract() {
    return this._staticEdgesToExtract;
  }
  public putStaticEdgesToExtract(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#custom_matcher OpenpipelineV2EventsSdlcPipelines#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#technology_id OpenpipelineV2EventsSdlcPipelines#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology | undefined) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#destination_field_name OpenpipelineV2EventsSdlcPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#source_field_name OpenpipelineV2EventsSdlcPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimension OpenpipelineV2EventsSdlcPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#default_value OpenpipelineV2EventsSdlcPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#field OpenpipelineV2EventsSdlcPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#metric_key OpenpipelineV2EventsSdlcPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dimensions OpenpipelineV2EventsSdlcPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricDimensions) {
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
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#description OpenpipelineV2EventsSdlcPipelines#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#enabled OpenpipelineV2EventsSdlcPipelines#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#id OpenpipelineV2EventsSdlcPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#matcher OpenpipelineV2EventsSdlcPipelines#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sample_data OpenpipelineV2EventsSdlcPipelines#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareHistogramMetric`, `samplingAwareValueMetric`, `sdlcEvent`, `securityContext`, `securityEvent`, `smartscapeEdge`, `smartscapeNode`, `technology`, `valueMetric`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#type OpenpipelineV2EventsSdlcPipelines#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#azure_log_forwarding OpenpipelineV2EventsSdlcPipelines#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#bizevent OpenpipelineV2EventsSdlcPipelines#bizevent}
  */
  readonly bizevent?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#bucket_assignment OpenpipelineV2EventsSdlcPipelines#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#cost_allocation OpenpipelineV2EventsSdlcPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#counter_metric OpenpipelineV2EventsSdlcPipelines#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#davis OpenpipelineV2EventsSdlcPipelines#davis}
  */
  readonly davis?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#dql OpenpipelineV2EventsSdlcPipelines#dql}
  */
  readonly dql?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields_add OpenpipelineV2EventsSdlcPipelines#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields_remove OpenpipelineV2EventsSdlcPipelines#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#fields_rename OpenpipelineV2EventsSdlcPipelines#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#histogram_metric OpenpipelineV2EventsSdlcPipelines#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#product_allocation OpenpipelineV2EventsSdlcPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sampling_aware_counter_metric OpenpipelineV2EventsSdlcPipelines#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sampling_aware_histogram_metric OpenpipelineV2EventsSdlcPipelines#sampling_aware_histogram_metric}
  */
  readonly samplingAwareHistogramMetric?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sampling_aware_value_metric OpenpipelineV2EventsSdlcPipelines#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric;
  /**
  * sdlc_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#sdlc_event OpenpipelineV2EventsSdlcPipelines#sdlc_event}
  */
  readonly sdlcEvent?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#security_context OpenpipelineV2EventsSdlcPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#security_event OpenpipelineV2EventsSdlcPipelines#security_event}
  */
  readonly securityEvent?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent;
  /**
  * smartscape_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#smartscape_edge OpenpipelineV2EventsSdlcPipelines#smartscape_edge}
  */
  readonly smartscapeEdge?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge;
  /**
  * smartscape_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#smartscape_node OpenpipelineV2EventsSdlcPipelines#smartscape_node}
  */
  readonly smartscapeNode?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#technology OpenpipelineV2EventsSdlcPipelines#technology}
  */
  readonly technology?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#value_metric OpenpipelineV2EventsSdlcPipelines#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor | cdktf.IResolvable): any {
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
    azure_log_forwarding: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_histogram_metric: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct!.samplingAwareHistogramMetric),
    sampling_aware_value_metric: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    sdlc_event: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventToTerraform(struct!.sdlcEvent),
    security_context: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    smartscape_edge: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeToTerraform(struct!.smartscapeEdge),
    smartscape_node: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeToTerraform(struct!.smartscapeNode),
    technology: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor | cdktf.IResolvable): any {
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
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_histogram_metric: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct!.samplingAwareHistogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricList",
    },
    sdlc_event: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventToHclTerraform(struct!.sdlcEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventList",
    },
    security_context: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventList",
    },
    smartscape_edge: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeToHclTerraform(struct!.smartscapeEdge),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeList",
    },
    smartscape_node: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeToHclTerraform(struct!.smartscapeNode),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeList",
    },
    technology: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwarding = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorAzureLogForwarding) {
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
  private _bizevent = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBizevent) {
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
  private _bucketAssignment = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorBucketAssignment) {
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
  private _costAllocation = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCostAllocation) {
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
  private _counterMetric = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorCounterMetric) {
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
  private _davis = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDavis) {
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
  private _dql = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorDql) {
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
  private _fieldsAdd = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsAdd) {
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
  private _fieldsRemove = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRemove) {
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
  private _fieldsRename = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorFieldsRename) {
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
  private _histogramMetric = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorHistogramMetric) {
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
  private _productAllocation = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorProductAllocation) {
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
  private _samplingAwareCounterMetric = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric) {
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
  private _samplingAwareHistogramMetric = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference(this, "sampling_aware_histogram_metric");
  public get samplingAwareHistogramMetric() {
    return this._samplingAwareHistogramMetric;
  }
  public putSamplingAwareHistogramMetric(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric) {
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
  private _samplingAwareValueMetric = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSamplingAwareValueMetric) {
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
  private _sdlcEvent = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEventOutputReference(this, "sdlc_event");
  public get sdlcEvent() {
    return this._sdlcEvent;
  }
  public putSdlcEvent(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSdlcEvent) {
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
  private _securityContext = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityContext) {
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
  private _securityEvent = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSecurityEvent) {
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
  private _smartscapeEdge = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference(this, "smartscape_edge");
  public get smartscapeEdge() {
    return this._smartscapeEdge;
  }
  public putSmartscapeEdge(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeEdge) {
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
  private _smartscapeNode = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference(this, "smartscape_node");
  public get smartscapeNode() {
    return this._smartscapeNode;
  }
  public putSmartscapeNode(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorSmartscapeNode) {
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
  private _technology = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorTechnology) {
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
  private _valueMetric = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorValueMetric) {
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

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorOutputReference {
    return new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorageProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#processor OpenpipelineV2EventsSdlcPipelines#processor}
  */
  readonly processor: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2EventsSdlcPipelinesStorageProcessorsToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageProcessorsToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsOutputReference | OpenpipelineV2EventsSdlcPipelinesStorageProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorageProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessors | undefined) {
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
  private _processor = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2EventsSdlcPipelinesStorage {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_events_sdlc_pipelines#processors OpenpipelineV2EventsSdlcPipelines#processors}
  */
  readonly processors?: OpenpipelineV2EventsSdlcPipelinesStorageProcessors;
}

export function openpipelineV2EventsSdlcPipelinesStorageToTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageOutputReference | OpenpipelineV2EventsSdlcPipelinesStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2EventsSdlcPipelinesStorageProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2EventsSdlcPipelinesStorageToHclTerraform(struct?: OpenpipelineV2EventsSdlcPipelinesStorageOutputReference | OpenpipelineV2EventsSdlcPipelinesStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2EventsSdlcPipelinesStorageProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2EventsSdlcPipelinesStorageProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2EventsSdlcPipelinesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2EventsSdlcPipelinesStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2EventsSdlcPipelinesStorage | undefined) {
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
  private _processors = new OpenpipelineV2EventsSdlcPipelinesStorageProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2EventsSdlcPipelinesStorageProcessors) {
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
