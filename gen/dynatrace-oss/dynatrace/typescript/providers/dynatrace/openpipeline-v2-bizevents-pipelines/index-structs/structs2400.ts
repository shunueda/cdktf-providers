import * as cdktf from 'cdktf';
import { OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwarding,
openpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingToTerraform,
openpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingToHclTerraform,
OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingOutputReference,
OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizevent,
openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventToTerraform,
openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventToHclTerraform,
OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventOutputReference,
OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignment,
openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentToTerraform,
openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentToHclTerraform,
OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentOutputReference } from './structs2000'
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#value OpenpipelineV2BizeventsPipelines#value}
  */
  readonly value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation | undefined) {
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
  private _value = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric {
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#metric_key OpenpipelineV2BizeventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimensions OpenpipelineV2BizeventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricDimensions) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#key OpenpipelineV2BizeventsPipelines#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#value OpenpipelineV2BizeventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#property OpenpipelineV2BizeventsPipelines#property}
  */
  readonly property: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties | undefined) {
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
  private _property = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#properties OpenpipelineV2BizeventsPipelines#properties}
  */
  readonly properties: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesToTerraform(struct!.properties),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis | undefined) {
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
  private _properties = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql {
  /**
  * DQL script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#script OpenpipelineV2BizeventsPipelines#script}
  */
  readonly script: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#name OpenpipelineV2BizeventsPipelines#name}
  */
  readonly name: string;
  /**
  * Field's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#value OpenpipelineV2BizeventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields OpenpipelineV2BizeventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd | undefined) {
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
  private _fields = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove {
  /**
  * Fields to remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields OpenpipelineV2BizeventsPipelines#fields}
  */
  readonly fields: string[];
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#from_name OpenpipelineV2BizeventsPipelines#from_name}
  */
  readonly fromName: string;
  /**
  * New field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#to_name OpenpipelineV2BizeventsPipelines#to_name}
  */
  readonly toName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields OpenpipelineV2BizeventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename | undefined) {
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
  private _fields = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#metric_key OpenpipelineV2BizeventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimensions OpenpipelineV2BizeventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricDimensions) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#value OpenpipelineV2BizeventsPipelines#value}
  */
  readonly value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation | undefined) {
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
  private _value = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#aggregation OpenpipelineV2BizeventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#metric_key OpenpipelineV2BizeventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sampling OpenpipelineV2BizeventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimensions OpenpipelineV2BizeventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricDimensions) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#aggregation OpenpipelineV2BizeventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#measurement OpenpipelineV2BizeventsPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#metric_key OpenpipelineV2BizeventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sampling OpenpipelineV2BizeventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimensions OpenpipelineV2BizeventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric): any {
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
    dimensions: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricDimensions) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#aggregation OpenpipelineV2BizeventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#measurement OpenpipelineV2BizeventsPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#metric_key OpenpipelineV2BizeventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sampling OpenpipelineV2BizeventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimensions OpenpipelineV2BizeventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric): any {
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
    dimensions: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricDimensions) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#exclude OpenpipelineV2BizeventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#include OpenpipelineV2BizeventsPipelines#include}
  */
  readonly include?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionInclude) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent {
  /**
  * event_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#event_category OpenpipelineV2BizeventsPipelines#event_category}
  */
  readonly eventCategory: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#event_provider OpenpipelineV2BizeventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider;
  /**
  * event_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#event_status OpenpipelineV2BizeventsPipelines#event_status}
  */
  readonly eventStatus: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#event_type OpenpipelineV2BizeventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field_extraction OpenpipelineV2BizeventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_category: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToTerraform(struct!.eventCategory),
    event_provider: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderToTerraform(struct!.eventProvider),
    event_status: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusToTerraform(struct!.eventStatus),
    event_type: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_category: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct!.eventCategory),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryList",
    },
    event_provider: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderList",
    },
    event_status: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct!.eventStatus),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusList",
    },
    event_type: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent | undefined) {
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
  private _eventCategory = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategoryOutputReference(this, "event_category");
  public get eventCategory() {
    return this._eventCategory;
  }
  public putEventCategory(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventCategory) {
    this._eventCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoryInput() {
    return this._eventCategory.internalValue;
  }

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_status - computed: false, optional: false, required: true
  private _eventStatus = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatusOutputReference(this, "event_status");
  public get eventStatus() {
    return this._eventStatus;
  }
  public putEventStatus(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventStatus) {
    this._eventStatus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStatusInput() {
    return this._eventStatus.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#value OpenpipelineV2BizeventsPipelines#value}
  */
  readonly value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext | undefined) {
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
  private _value = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#exclude OpenpipelineV2BizeventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#include OpenpipelineV2BizeventsPipelines#include}
  */
  readonly include?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionInclude) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field_extraction OpenpipelineV2BizeventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#edge_type OpenpipelineV2BizeventsPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Source ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_id_field_name OpenpipelineV2BizeventsPipelines#source_id_field_name}
  */
  readonly sourceIdFieldName: string;
  /**
  * Source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_type OpenpipelineV2BizeventsPipelines#source_type}
  */
  readonly sourceType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#target_id_field_name OpenpipelineV2BizeventsPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#target_type OpenpipelineV2BizeventsPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field_name OpenpipelineV2BizeventsPipelines#field_name}
  */
  readonly fieldName: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#referenced_field_name OpenpipelineV2BizeventsPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract {
  /**
  * smartscape_field_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#smartscape_field_extraction_entry OpenpipelineV2BizeventsPipelines#smartscape_field_extraction_entry}
  */
  readonly smartscapeFieldExtractionEntry: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_field_extraction_entry: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform, true)(struct!.smartscapeFieldExtractionEntry),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_field_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform, true)(struct!.smartscapeFieldExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeFieldExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeFieldExtractionEntry = this._smartscapeFieldExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined) {
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
  private _smartscapeFieldExtractionEntry = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList(this, "smartscape_field_extraction_entry", false);
  public get smartscapeFieldExtractionEntry() {
    return this._smartscapeFieldExtractionEntry;
  }
  public putSmartscapeFieldExtractionEntry(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeFieldExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeFieldExtractionEntryInput() {
    return this._smartscapeFieldExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent {
  /**
  * ID component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#id_component OpenpipelineV2BizeventsPipelines#id_component}
  */
  readonly idComponent: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#referenced_field_name OpenpipelineV2BizeventsPipelines#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.stringToTerraform(struct!.idComponent),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents {
  /**
  * id_component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#id_component OpenpipelineV2BizeventsPipelines#id_component}
  */
  readonly idComponent: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform, true)(struct!.idComponent),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform, true)(struct!.idComponent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents | undefined) {
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
  private _idComponent = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList(this, "id_component", false);
  public get idComponent() {
    return this._idComponent;
  }
  public putIdComponent(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable) {
    this._idComponent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#constant OpenpipelineV2BizeventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#multi_value_constant OpenpipelineV2BizeventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName | undefined) {
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
  private _field = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameField) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#edge_type OpenpipelineV2BizeventsPipelines#edge_type}
  */
  readonly edgeType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#target_id_field_name OpenpipelineV2BizeventsPipelines#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#target_type OpenpipelineV2BizeventsPipelines#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract {
  /**
  * smartscape_static_edge_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#smartscape_static_edge_extraction_entry OpenpipelineV2BizeventsPipelines#smartscape_static_edge_extraction_entry}
  */
  readonly smartscapeStaticEdgeExtractionEntry: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_static_edge_extraction_entry: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_static_edge_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeStaticEdgeExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeStaticEdgeExtractionEntry = this._smartscapeStaticEdgeExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined) {
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
  private _smartscapeStaticEdgeExtractionEntry = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList(this, "smartscape_static_edge_extraction_entry", false);
  public get smartscapeStaticEdgeExtractionEntry() {
    return this._smartscapeStaticEdgeExtractionEntry;
  }
  public putSmartscapeStaticEdgeExtractionEntry(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeStaticEdgeExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeStaticEdgeExtractionEntryInput() {
    return this._smartscapeStaticEdgeExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode {
  /**
  * Extract node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#extract_node OpenpipelineV2BizeventsPipelines#extract_node}
  */
  readonly extractNode: boolean | cdktf.IResolvable;
  /**
  * Node ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#node_id_field_name OpenpipelineV2BizeventsPipelines#node_id_field_name}
  */
  readonly nodeIdFieldName: string;
  /**
  * Node type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#node_type OpenpipelineV2BizeventsPipelines#node_type}
  */
  readonly nodeType: string;
  /**
  * fields_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields_to_extract OpenpipelineV2BizeventsPipelines#fields_to_extract}
  */
  readonly fieldsToExtract?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract;
  /**
  * id_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#id_components OpenpipelineV2BizeventsPipelines#id_components}
  */
  readonly idComponents: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents;
  /**
  * node_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#node_name OpenpipelineV2BizeventsPipelines#node_name}
  */
  readonly nodeName?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName;
  /**
  * static_edges_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#static_edges_to_extract OpenpipelineV2BizeventsPipelines#static_edges_to_extract}
  */
  readonly staticEdgesToExtract?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract_node: cdktf.booleanToTerraform(struct!.extractNode),
    node_id_field_name: cdktf.stringToTerraform(struct!.nodeIdFieldName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    fields_to_extract: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct!.fieldsToExtract),
    id_components: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct!.idComponents),
    node_name: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct!.nodeName),
    static_edges_to_extract: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct!.staticEdgesToExtract),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct!.fieldsToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractList",
    },
    id_components: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct!.idComponents),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsList",
    },
    node_name: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct!.nodeName),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameList",
    },
    static_edges_to_extract: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct!.staticEdgesToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode | undefined) {
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
  private _fieldsToExtract = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference(this, "fields_to_extract");
  public get fieldsToExtract() {
    return this._fieldsToExtract;
  }
  public putFieldsToExtract(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeFieldsToExtract) {
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
  private _idComponents = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponentsOutputReference(this, "id_components");
  public get idComponents() {
    return this._idComponents;
  }
  public putIdComponents(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeIdComponents) {
    this._idComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentsInput() {
    return this._idComponents.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeNameOutputReference(this, "node_name");
  public get nodeName() {
    return this._nodeName;
  }
  public putNodeName(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeNodeName) {
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
  private _staticEdgesToExtract = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference(this, "static_edges_to_extract");
  public get staticEdgesToExtract() {
    return this._staticEdgesToExtract;
  }
  public putStaticEdgesToExtract(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeStaticEdgesToExtract) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#custom_matcher OpenpipelineV2BizeventsPipelines#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#technology_id OpenpipelineV2BizeventsPipelines#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology | undefined) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#destination_field_name OpenpipelineV2BizeventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#source_field_name OpenpipelineV2BizeventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimension OpenpipelineV2BizeventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#default_value OpenpipelineV2BizeventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#field OpenpipelineV2BizeventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#metric_key OpenpipelineV2BizeventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dimensions OpenpipelineV2BizeventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricDimensions) {
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
export interface OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#description OpenpipelineV2BizeventsPipelines#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#enabled OpenpipelineV2BizeventsPipelines#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#id OpenpipelineV2BizeventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#matcher OpenpipelineV2BizeventsPipelines#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sample_data OpenpipelineV2BizeventsPipelines#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareHistogramMetric`, `samplingAwareValueMetric`, `sdlcEvent`, `securityContext`, `securityEvent`, `smartscapeEdge`, `smartscapeNode`, `technology`, `valueMetric`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#type OpenpipelineV2BizeventsPipelines#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#azure_log_forwarding OpenpipelineV2BizeventsPipelines#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#bizevent OpenpipelineV2BizeventsPipelines#bizevent}
  */
  readonly bizevent?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#bucket_assignment OpenpipelineV2BizeventsPipelines#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#cost_allocation OpenpipelineV2BizeventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#counter_metric OpenpipelineV2BizeventsPipelines#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#davis OpenpipelineV2BizeventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#dql OpenpipelineV2BizeventsPipelines#dql}
  */
  readonly dql?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields_add OpenpipelineV2BizeventsPipelines#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields_remove OpenpipelineV2BizeventsPipelines#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#fields_rename OpenpipelineV2BizeventsPipelines#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#histogram_metric OpenpipelineV2BizeventsPipelines#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#product_allocation OpenpipelineV2BizeventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sampling_aware_counter_metric OpenpipelineV2BizeventsPipelines#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sampling_aware_histogram_metric OpenpipelineV2BizeventsPipelines#sampling_aware_histogram_metric}
  */
  readonly samplingAwareHistogramMetric?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sampling_aware_value_metric OpenpipelineV2BizeventsPipelines#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric;
  /**
  * sdlc_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#sdlc_event OpenpipelineV2BizeventsPipelines#sdlc_event}
  */
  readonly sdlcEvent?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#security_context OpenpipelineV2BizeventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#security_event OpenpipelineV2BizeventsPipelines#security_event}
  */
  readonly securityEvent?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent;
  /**
  * smartscape_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#smartscape_edge OpenpipelineV2BizeventsPipelines#smartscape_edge}
  */
  readonly smartscapeEdge?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge;
  /**
  * smartscape_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#smartscape_node OpenpipelineV2BizeventsPipelines#smartscape_node}
  */
  readonly smartscapeNode?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#technology OpenpipelineV2BizeventsPipelines#technology}
  */
  readonly technology?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#value_metric OpenpipelineV2BizeventsPipelines#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor | cdktf.IResolvable): any {
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
    azure_log_forwarding: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_histogram_metric: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct!.samplingAwareHistogramMetric),
    sampling_aware_value_metric: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    sdlc_event: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventToTerraform(struct!.sdlcEvent),
    security_context: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    smartscape_edge: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeToTerraform(struct!.smartscapeEdge),
    smartscape_node: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeToTerraform(struct!.smartscapeNode),
    technology: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor | cdktf.IResolvable): any {
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
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_histogram_metric: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct!.samplingAwareHistogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricList",
    },
    sdlc_event: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventToHclTerraform(struct!.sdlcEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventList",
    },
    security_context: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventList",
    },
    smartscape_edge: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeToHclTerraform(struct!.smartscapeEdge),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeList",
    },
    smartscape_node: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeToHclTerraform(struct!.smartscapeNode),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeList",
    },
    technology: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwarding = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorAzureLogForwarding) {
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
  private _bizevent = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBizevent) {
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
  private _bucketAssignment = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorBucketAssignment) {
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
  private _costAllocation = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCostAllocation) {
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
  private _counterMetric = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorCounterMetric) {
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
  private _davis = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDavis) {
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
  private _dql = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorDql) {
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
  private _fieldsAdd = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsAdd) {
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
  private _fieldsRemove = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRemove) {
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
  private _fieldsRename = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorFieldsRename) {
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
  private _histogramMetric = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorHistogramMetric) {
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
  private _productAllocation = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorProductAllocation) {
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
  private _samplingAwareCounterMetric = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareCounterMetric) {
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
  private _samplingAwareHistogramMetric = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetricOutputReference(this, "sampling_aware_histogram_metric");
  public get samplingAwareHistogramMetric() {
    return this._samplingAwareHistogramMetric;
  }
  public putSamplingAwareHistogramMetric(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareHistogramMetric) {
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
  private _samplingAwareValueMetric = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSamplingAwareValueMetric) {
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
  private _sdlcEvent = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEventOutputReference(this, "sdlc_event");
  public get sdlcEvent() {
    return this._sdlcEvent;
  }
  public putSdlcEvent(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSdlcEvent) {
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
  private _securityContext = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityContext) {
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
  private _securityEvent = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSecurityEvent) {
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
  private _smartscapeEdge = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdgeOutputReference(this, "smartscape_edge");
  public get smartscapeEdge() {
    return this._smartscapeEdge;
  }
  public putSmartscapeEdge(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeEdge) {
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
  private _smartscapeNode = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNodeOutputReference(this, "smartscape_node");
  public get smartscapeNode() {
    return this._smartscapeNode;
  }
  public putSmartscapeNode(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorSmartscapeNode) {
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
  private _technology = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorTechnology) {
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
  private _valueMetric = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorValueMetric) {
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

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorOutputReference {
    return new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorageProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#processor OpenpipelineV2BizeventsPipelines#processor}
  */
  readonly processor: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2BizeventsPipelinesStorageProcessorsToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2BizeventsPipelinesStorageProcessorsToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageProcessorsOutputReference | OpenpipelineV2BizeventsPipelinesStorageProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2BizeventsPipelinesStorageProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorageProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorageProcessors | undefined) {
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
  private _processor = new OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2BizeventsPipelinesStorageProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2BizeventsPipelinesStorage {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_v2_bizevents_pipelines#processors OpenpipelineV2BizeventsPipelines#processors}
  */
  readonly processors?: OpenpipelineV2BizeventsPipelinesStorageProcessors;
}

export function openpipelineV2BizeventsPipelinesStorageToTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageOutputReference | OpenpipelineV2BizeventsPipelinesStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2BizeventsPipelinesStorageProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2BizeventsPipelinesStorageToHclTerraform(struct?: OpenpipelineV2BizeventsPipelinesStorageOutputReference | OpenpipelineV2BizeventsPipelinesStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2BizeventsPipelinesStorageProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2BizeventsPipelinesStorageProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2BizeventsPipelinesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2BizeventsPipelinesStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2BizeventsPipelinesStorage | undefined) {
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
  private _processors = new OpenpipelineV2BizeventsPipelinesStorageProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2BizeventsPipelinesStorageProcessors) {
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
