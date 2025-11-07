import * as cdktf from 'cdktf';
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#forwarder_config_id OpenpipelineV2DavisEventsPipelines#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    field_extraction: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderField) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeField) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent {
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#event_provider OpenpipelineV2DavisEventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#event_type OpenpipelineV2DavisEventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_provider: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_provider: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderList",
    },
    event_type: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent | undefined) {
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
  private _eventProvider = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment {
  /**
  * Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#bucket_name OpenpipelineV2DavisEventsPipelines#bucket_name}
  */
  readonly bucketName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueField) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation | undefined) {
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
  private _value = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric {
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#key OpenpipelineV2DavisEventsPipelines#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#property OpenpipelineV2DavisEventsPipelines#property}
  */
  readonly property: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties | undefined) {
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
  private _property = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#properties OpenpipelineV2DavisEventsPipelines#properties}
  */
  readonly properties: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesToTerraform(struct!.properties),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis | undefined) {
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
  private _properties = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql {
  /**
  * DQL script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#script OpenpipelineV2DavisEventsPipelines#script}
  */
  readonly script: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#name OpenpipelineV2DavisEventsPipelines#name}
  */
  readonly name: string;
  /**
  * Field's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields OpenpipelineV2DavisEventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd | undefined) {
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
  private _fields = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove {
  /**
  * Fields to remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields OpenpipelineV2DavisEventsPipelines#fields}
  */
  readonly fields: string[];
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#from_name OpenpipelineV2DavisEventsPipelines#from_name}
  */
  readonly fromName: string;
  /**
  * New field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#to_name OpenpipelineV2DavisEventsPipelines#to_name}
  */
  readonly toName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields OpenpipelineV2DavisEventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename | undefined) {
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
  private _fields = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric {
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._metricKey = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._metricKey = value.metricKey;
      this._dimensions.internalValue = value.dimensions;
    }
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueField) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation | undefined) {
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
  private _value = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric {
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#aggregation OpenpipelineV2DavisEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling OpenpipelineV2DavisEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric {
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#aggregation OpenpipelineV2DavisEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#measurement OpenpipelineV2DavisEventsPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling OpenpipelineV2DavisEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric): any {
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
    dimensions: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueField) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext | undefined) {
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
  private _value = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#custom_matcher OpenpipelineV2DavisEventsPipelines#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#technology_id OpenpipelineV2DavisEventsPipelines#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#description OpenpipelineV2DavisEventsPipelines#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#enabled OpenpipelineV2DavisEventsPipelines#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#id OpenpipelineV2DavisEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#matcher OpenpipelineV2DavisEventsPipelines#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sample_data OpenpipelineV2DavisEventsPipelines#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareValueMetric`, `securityContext`, `securityEvent`, `technology`, `valueMetric`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#azure_log_forwarding OpenpipelineV2DavisEventsPipelines#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#bizevent OpenpipelineV2DavisEventsPipelines#bizevent}
  */
  readonly bizevent?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#bucket_assignment OpenpipelineV2DavisEventsPipelines#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#cost_allocation OpenpipelineV2DavisEventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#counter_metric OpenpipelineV2DavisEventsPipelines#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#davis OpenpipelineV2DavisEventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dql OpenpipelineV2DavisEventsPipelines#dql}
  */
  readonly dql?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields_add OpenpipelineV2DavisEventsPipelines#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields_remove OpenpipelineV2DavisEventsPipelines#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields_rename OpenpipelineV2DavisEventsPipelines#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#histogram_metric OpenpipelineV2DavisEventsPipelines#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#product_allocation OpenpipelineV2DavisEventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling_aware_counter_metric OpenpipelineV2DavisEventsPipelines#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling_aware_value_metric OpenpipelineV2DavisEventsPipelines#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#security_context OpenpipelineV2DavisEventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#security_event OpenpipelineV2DavisEventsPipelines#security_event}
  */
  readonly securityEvent?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#technology OpenpipelineV2DavisEventsPipelines#technology}
  */
  readonly technology?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value_metric OpenpipelineV2DavisEventsPipelines#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor | cdktf.IResolvable): any {
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
    azure_log_forwarding: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_value_metric: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    security_context: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    technology: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor | cdktf.IResolvable): any {
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
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricList",
    },
    security_context: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventList",
    },
    technology: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor | cdktf.IResolvable | undefined {
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
    if (this._samplingAwareValueMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareValueMetric = this._samplingAwareValueMetric?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._securityEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEvent = this._securityEvent?.internalValue;
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor | cdktf.IResolvable | undefined) {
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
      this._samplingAwareValueMetric.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._securityEvent.internalValue = undefined;
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
      this._samplingAwareValueMetric.internalValue = value.samplingAwareValueMetric;
      this._securityContext.internalValue = value.securityContext;
      this._securityEvent.internalValue = value.securityEvent;
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
  private _azureLogForwarding = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorAzureLogForwarding) {
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
  private _bizevent = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBizevent) {
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
  private _bucketAssignment = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorBucketAssignment) {
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
  private _costAllocation = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCostAllocation) {
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
  private _counterMetric = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorCounterMetric) {
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
  private _davis = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDavis) {
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
  private _dql = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorDql) {
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
  private _fieldsAdd = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsAdd) {
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
  private _fieldsRemove = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRemove) {
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
  private _fieldsRename = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorFieldsRename) {
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
  private _histogramMetric = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorHistogramMetric) {
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
  private _productAllocation = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorProductAllocation) {
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
  private _samplingAwareCounterMetric = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareCounterMetric) {
    this._samplingAwareCounterMetric.internalValue = value;
  }
  public resetSamplingAwareCounterMetric() {
    this._samplingAwareCounterMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareCounterMetricInput() {
    return this._samplingAwareCounterMetric.internalValue;
  }

  // sampling_aware_value_metric - computed: false, optional: true, required: false
  private _samplingAwareValueMetric = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSamplingAwareValueMetric) {
    this._samplingAwareValueMetric.internalValue = value;
  }
  public resetSamplingAwareValueMetric() {
    this._samplingAwareValueMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareValueMetricInput() {
    return this._samplingAwareValueMetric.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityContext) {
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
  private _securityEvent = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorSecurityEvent) {
    this._securityEvent.internalValue = value;
  }
  public resetSecurityEvent() {
    this._securityEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventInput() {
    return this._securityEvent.internalValue;
  }

  // technology - computed: false, optional: true, required: false
  private _technology = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorTechnology) {
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
  private _valueMetric = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorValueMetric) {
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

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#processor OpenpipelineV2DavisEventsPipelines#processor}
  */
  readonly processor: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationProcessorsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors | undefined) {
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
  private _processor = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesCostAllocation {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#processors OpenpipelineV2DavisEventsPipelines#processors}
  */
  readonly processors?: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors;
}

export function openpipelineV2DavisEventsPipelinesCostAllocationToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2DavisEventsPipelinesCostAllocationToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesCostAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2DavisEventsPipelinesCostAllocationProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesCostAllocation | undefined) {
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
  private _processors = new OpenpipelineV2DavisEventsPipelinesCostAllocationProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2DavisEventsPipelinesCostAllocationProcessors) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#forwarder_config_id OpenpipelineV2DavisEventsPipelines#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    field_extraction: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent {
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#event_provider OpenpipelineV2DavisEventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#event_type OpenpipelineV2DavisEventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_provider: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_provider: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderList",
    },
    event_type: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent | undefined) {
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
  private _eventProvider = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment {
  /**
  * Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#bucket_name OpenpipelineV2DavisEventsPipelines#bucket_name}
  */
  readonly bucketName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation | undefined) {
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
  private _value = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric {
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#key OpenpipelineV2DavisEventsPipelines#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#property OpenpipelineV2DavisEventsPipelines#property}
  */
  readonly property: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties | undefined) {
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
  private _property = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#properties OpenpipelineV2DavisEventsPipelines#properties}
  */
  readonly properties: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesToTerraform(struct!.properties),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis | undefined) {
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
  private _properties = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql {
  /**
  * DQL script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#script OpenpipelineV2DavisEventsPipelines#script}
  */
  readonly script: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#name OpenpipelineV2DavisEventsPipelines#name}
  */
  readonly name: string;
  /**
  * Field's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields OpenpipelineV2DavisEventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd | undefined) {
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
  private _fields = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove {
  /**
  * Fields to remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields OpenpipelineV2DavisEventsPipelines#fields}
  */
  readonly fields: string[];
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#from_name OpenpipelineV2DavisEventsPipelines#from_name}
  */
  readonly fromName: string;
  /**
  * New field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#to_name OpenpipelineV2DavisEventsPipelines#to_name}
  */
  readonly toName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields OpenpipelineV2DavisEventsPipelines#fields}
  */
  readonly fields: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename | undefined) {
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
  private _fields = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric {
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._metricKey = undefined;
      this._dimensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._metricKey = value.metricKey;
      this._dimensions.internalValue = value.dimensions;
    }
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation | undefined) {
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
  private _value = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric {
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#aggregation OpenpipelineV2DavisEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling OpenpipelineV2DavisEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric {
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#aggregation OpenpipelineV2DavisEventsPipelines#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#measurement OpenpipelineV2DavisEventsPipelines#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling OpenpipelineV2DavisEventsPipelines#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric): any {
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
    dimensions: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value OpenpipelineV2DavisEventsPipelines#value}
  */
  readonly value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext | undefined) {
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
  private _value = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#custom_matcher OpenpipelineV2DavisEventsPipelines#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#technology_id OpenpipelineV2DavisEventsPipelines#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#metric_key OpenpipelineV2DavisEventsPipelines#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimensions OpenpipelineV2DavisEventsPipelines#dimensions}
  */
  readonly dimensions?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricDimensions) {
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
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#description OpenpipelineV2DavisEventsPipelines#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#enabled OpenpipelineV2DavisEventsPipelines#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#id OpenpipelineV2DavisEventsPipelines#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#matcher OpenpipelineV2DavisEventsPipelines#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sample_data OpenpipelineV2DavisEventsPipelines#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareValueMetric`, `securityContext`, `securityEvent`, `technology`, `valueMetric`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#azure_log_forwarding OpenpipelineV2DavisEventsPipelines#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#bizevent OpenpipelineV2DavisEventsPipelines#bizevent}
  */
  readonly bizevent?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#bucket_assignment OpenpipelineV2DavisEventsPipelines#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#cost_allocation OpenpipelineV2DavisEventsPipelines#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#counter_metric OpenpipelineV2DavisEventsPipelines#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#davis OpenpipelineV2DavisEventsPipelines#davis}
  */
  readonly davis?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dql OpenpipelineV2DavisEventsPipelines#dql}
  */
  readonly dql?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields_add OpenpipelineV2DavisEventsPipelines#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields_remove OpenpipelineV2DavisEventsPipelines#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#fields_rename OpenpipelineV2DavisEventsPipelines#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#histogram_metric OpenpipelineV2DavisEventsPipelines#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#product_allocation OpenpipelineV2DavisEventsPipelines#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling_aware_counter_metric OpenpipelineV2DavisEventsPipelines#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#sampling_aware_value_metric OpenpipelineV2DavisEventsPipelines#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#security_context OpenpipelineV2DavisEventsPipelines#security_context}
  */
  readonly securityContext?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#security_event OpenpipelineV2DavisEventsPipelines#security_event}
  */
  readonly securityEvent?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#technology OpenpipelineV2DavisEventsPipelines#technology}
  */
  readonly technology?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#value_metric OpenpipelineV2DavisEventsPipelines#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor | cdktf.IResolvable): any {
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
    azure_log_forwarding: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_value_metric: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    security_context: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    technology: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor | cdktf.IResolvable): any {
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
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricList",
    },
    security_context: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventList",
    },
    technology: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor | cdktf.IResolvable | undefined {
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
    if (this._samplingAwareValueMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareValueMetric = this._samplingAwareValueMetric?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._securityEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEvent = this._securityEvent?.internalValue;
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor | cdktf.IResolvable | undefined) {
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
      this._samplingAwareValueMetric.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._securityEvent.internalValue = undefined;
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
      this._samplingAwareValueMetric.internalValue = value.samplingAwareValueMetric;
      this._securityContext.internalValue = value.securityContext;
      this._securityEvent.internalValue = value.securityEvent;
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
  private _azureLogForwarding = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorAzureLogForwarding) {
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
  private _bizevent = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBizevent) {
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
  private _bucketAssignment = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorBucketAssignment) {
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
  private _costAllocation = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCostAllocation) {
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
  private _counterMetric = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorCounterMetric) {
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
  private _davis = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDavis) {
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
  private _dql = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorDql) {
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
  private _fieldsAdd = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsAdd) {
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
  private _fieldsRemove = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRemove) {
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
  private _fieldsRename = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorFieldsRename) {
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
  private _histogramMetric = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorHistogramMetric) {
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
  private _productAllocation = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorProductAllocation) {
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
  private _samplingAwareCounterMetric = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareCounterMetric) {
    this._samplingAwareCounterMetric.internalValue = value;
  }
  public resetSamplingAwareCounterMetric() {
    this._samplingAwareCounterMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareCounterMetricInput() {
    return this._samplingAwareCounterMetric.internalValue;
  }

  // sampling_aware_value_metric - computed: false, optional: true, required: false
  private _samplingAwareValueMetric = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSamplingAwareValueMetric) {
    this._samplingAwareValueMetric.internalValue = value;
  }
  public resetSamplingAwareValueMetric() {
    this._samplingAwareValueMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareValueMetricInput() {
    return this._samplingAwareValueMetric.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityContext) {
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
  private _securityEvent = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorSecurityEvent) {
    this._securityEvent.internalValue = value;
  }
  public resetSecurityEvent() {
    this._securityEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventInput() {
    return this._securityEvent.internalValue;
  }

  // technology - computed: false, optional: true, required: false
  private _technology = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorTechnology) {
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
  private _valueMetric = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorValueMetric) {
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

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#processor OpenpipelineV2DavisEventsPipelines#processor}
  */
  readonly processor: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionProcessorsToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors | undefined) {
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
  private _processor = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDataExtraction {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#processors OpenpipelineV2DavisEventsPipelines#processors}
  */
  readonly processors?: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors;
}

export function openpipelineV2DavisEventsPipelinesDataExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2DavisEventsPipelinesDataExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDataExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2DavisEventsPipelinesDataExtractionProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDataExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDataExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDataExtraction | undefined) {
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
  private _processors = new OpenpipelineV2DavisEventsPipelinesDataExtractionProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2DavisEventsPipelinesDataExtractionProcessors) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwarding {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#forwarder_config_id OpenpipelineV2DavisEventsPipelines#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    field_extraction: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwarding): any {
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
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwarding | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwarding | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorAzureLogForwardingFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider): any {
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
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField): any {
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

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField | undefined) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#constant OpenpipelineV2DavisEventsPipelines#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#multi_value_constant OpenpipelineV2DavisEventsPipelines#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field OpenpipelineV2DavisEventsPipelines#field}
  */
  readonly field?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType): any {
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
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType | undefined) {
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
  private _field = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeField) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#default_value OpenpipelineV2DavisEventsPipelines#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#destination_field_name OpenpipelineV2DavisEventsPipelines#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#source_field_name OpenpipelineV2DavisEventsPipelines#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#dimension OpenpipelineV2DavisEventsPipelines#dimension}
  */
  readonly dimension: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#exclude OpenpipelineV2DavisEventsPipelines#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#type OpenpipelineV2DavisEventsPipelines#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#include OpenpipelineV2DavisEventsPipelines#include}
  */
  readonly include?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction): any {
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
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionInclude) {
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
export interface OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizevent {
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#event_provider OpenpipelineV2DavisEventsPipelines#event_provider}
  */
  readonly eventProvider: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#event_type OpenpipelineV2DavisEventsPipelines#event_type}
  */
  readonly eventType?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_v2_davis_events_pipelines#field_extraction OpenpipelineV2DavisEventsPipelines#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction;
}

export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventToTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_provider: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventToHclTerraform(struct?: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventOutputReference | OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_provider: {
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderList",
    },
    event_type: {
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizevent | undefined {
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

  public set internalValue(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizevent | undefined) {
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
  private _eventProvider = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2DavisEventsPipelinesDavisProcessorsProcessorBizeventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
