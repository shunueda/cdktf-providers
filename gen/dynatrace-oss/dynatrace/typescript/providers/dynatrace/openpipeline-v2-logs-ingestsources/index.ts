// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineV2LogsIngestsourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default Bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_bucket OpenpipelineV2LogsIngestsources#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * Endpoint display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#display_name OpenpipelineV2LogsIngestsources#display_name}
  */
  readonly displayName: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#enabled OpenpipelineV2LogsIngestsources#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#id OpenpipelineV2LogsIngestsources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Endpoint segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#path_segment OpenpipelineV2LogsIngestsources#path_segment}
  */
  readonly pathSegment?: string;
  /**
  * Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source OpenpipelineV2LogsIngestsources#source}
  */
  readonly source?: string;
  /**
  * Source Type. Possible Values: `extension`, `http`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_type OpenpipelineV2LogsIngestsources#source_type}
  */
  readonly sourceType?: string;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#processing OpenpipelineV2LogsIngestsources#processing}
  */
  readonly processing?: OpenpipelineV2LogsIngestsourcesProcessing;
  /**
  * static_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#static_routing OpenpipelineV2LogsIngestsources#static_routing}
  */
  readonly staticRouting?: OpenpipelineV2LogsIngestsourcesStaticRouting;
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#exclude OpenpipelineV2LogsIngestsources#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#include OpenpipelineV2LogsIngestsources#include}
  */
  readonly include?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionInclude) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#forwarder_config_id OpenpipelineV2LogsIngestsources#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field_extraction OpenpipelineV2LogsIngestsources#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    field_extraction: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#exclude OpenpipelineV2LogsIngestsources#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#include OpenpipelineV2LogsIngestsources#include}
  */
  readonly include?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionInclude) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent {
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#event_provider OpenpipelineV2LogsIngestsources#event_provider}
  */
  readonly eventProvider: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#event_type OpenpipelineV2LogsIngestsources#event_type}
  */
  readonly eventType?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field_extraction OpenpipelineV2LogsIngestsources#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_provider: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_provider: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderList",
    },
    event_type: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent | undefined) {
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
  private _eventProvider = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment {
  /**
  * Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#bucket_name OpenpipelineV2LogsIngestsources#bucket_name}
  */
  readonly bucketName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#value OpenpipelineV2LogsIngestsources#value}
  */
  readonly value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation | undefined) {
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
  private _value = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric {
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#metric_key OpenpipelineV2LogsIngestsources#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimensions OpenpipelineV2LogsIngestsources#dimensions}
  */
  readonly dimensions?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricDimensions) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#key OpenpipelineV2LogsIngestsources#key}
  */
  readonly key: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#value OpenpipelineV2LogsIngestsources#value}
  */
  readonly value: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties {
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#property OpenpipelineV2LogsIngestsources#property}
  */
  readonly property: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyToTerraform, true)(struct!.property),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyToHclTerraform, true)(struct!.property),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._property?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties | undefined) {
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
  private _property = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesPropertyList(this, "property", false);
  public get property() {
    return this._property;
  }
  public putProperty(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis {
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#properties OpenpipelineV2LogsIngestsources#properties}
  */
  readonly properties: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesToTerraform(struct!.properties),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis | undefined) {
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
  private _properties = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql {
  /**
  * DQL script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#script OpenpipelineV2LogsIngestsources#script}
  */
  readonly script: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#name OpenpipelineV2LogsIngestsources#name}
  */
  readonly name: string;
  /**
  * Field's value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#value OpenpipelineV2LogsIngestsources#value}
  */
  readonly value: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields OpenpipelineV2LogsIngestsources#fields}
  */
  readonly fields: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd | undefined) {
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
  private _fields = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove {
  /**
  * Fields to remove
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields OpenpipelineV2LogsIngestsources#fields}
  */
  readonly fields: string[];
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField {
  /**
  * Fields's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#from_name OpenpipelineV2LogsIngestsources#from_name}
  */
  readonly fromName: string;
  /**
  * New field's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#to_name OpenpipelineV2LogsIngestsources#to_name}
  */
  readonly toName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields OpenpipelineV2LogsIngestsources#fields}
  */
  readonly fields: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsToTerraform(struct!.fields),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename | undefined) {
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
  private _fields = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameFields) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#metric_key OpenpipelineV2LogsIngestsources#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimensions OpenpipelineV2LogsIngestsources#dimensions}
  */
  readonly dimensions?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricDimensions) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#value OpenpipelineV2LogsIngestsources#value}
  */
  readonly value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueToTerraform(struct!.value),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation | undefined) {
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
  private _value = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#aggregation OpenpipelineV2LogsIngestsources#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#metric_key OpenpipelineV2LogsIngestsources#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sampling OpenpipelineV2LogsIngestsources#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimensions OpenpipelineV2LogsIngestsources#dimensions}
  */
  readonly dimensions?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sampling: cdktf.stringToTerraform(struct!.sampling),
    dimensions: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricDimensions) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#aggregation OpenpipelineV2LogsIngestsources#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#measurement OpenpipelineV2LogsIngestsources#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#metric_key OpenpipelineV2LogsIngestsources#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sampling OpenpipelineV2LogsIngestsources#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimensions OpenpipelineV2LogsIngestsources#dimensions}
  */
  readonly dimensions?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric): any {
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
    dimensions: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricDimensions) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric {
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#aggregation OpenpipelineV2LogsIngestsources#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: string;
  /**
  * Possible Values: `duration`, `field`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#measurement OpenpipelineV2LogsIngestsources#measurement}
  */
  readonly measurement: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#metric_key OpenpipelineV2LogsIngestsources#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `disabled`, `enabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sampling OpenpipelineV2LogsIngestsources#sampling}
  */
  readonly sampling?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimensions OpenpipelineV2LogsIngestsources#dimensions}
  */
  readonly dimensions?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric): any {
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
    dimensions: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricDimensions) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#exclude OpenpipelineV2LogsIngestsources#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#include OpenpipelineV2LogsIngestsources#include}
  */
  readonly include?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionInclude) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent {
  /**
  * event_category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#event_category OpenpipelineV2LogsIngestsources#event_category}
  */
  readonly eventCategory: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#event_provider OpenpipelineV2LogsIngestsources#event_provider}
  */
  readonly eventProvider: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider;
  /**
  * event_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#event_status OpenpipelineV2LogsIngestsources#event_status}
  */
  readonly eventStatus: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#event_type OpenpipelineV2LogsIngestsources#event_type}
  */
  readonly eventType?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field_extraction OpenpipelineV2LogsIngestsources#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_category: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryToTerraform(struct!.eventCategory),
    event_provider: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderToTerraform(struct!.eventProvider),
    event_status: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusToTerraform(struct!.eventStatus),
    event_type: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_category: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryToHclTerraform(struct!.eventCategory),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryList",
    },
    event_provider: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderList",
    },
    event_status: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusToHclTerraform(struct!.eventStatus),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusList",
    },
    event_type: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeList",
    },
    field_extraction: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent | undefined) {
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
  private _eventCategory = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategoryOutputReference(this, "event_category");
  public get eventCategory() {
    return this._eventCategory;
  }
  public putEventCategory(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventCategory) {
    this._eventCategory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCategoryInput() {
    return this._eventCategory.internalValue;
  }

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_status - computed: false, optional: false, required: true
  private _eventStatus = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatusOutputReference(this, "event_status");
  public get eventStatus() {
    return this._eventStatus;
  }
  public putEventStatus(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventStatus) {
    this._eventStatus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStatusInput() {
    return this._eventStatus.internalValue;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventEventType) {
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
  private _fieldExtraction = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#value OpenpipelineV2LogsIngestsources#value}
  */
  readonly value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueToTerraform(struct!.value),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext | undefined) {
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
  private _value = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction {
  /**
  * Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#exclude OpenpipelineV2LogsIngestsources#exclude}
  */
  readonly exclude?: string[];
  /**
  * Fields Extraction type. Possible Values: `exclude`, `include`, `includeAll`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * include block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#include OpenpipelineV2LogsIngestsources#include}
  */
  readonly include?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    type: cdktf.stringToTerraform(struct!.type),
    include: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToTerraform(struct!.include),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeToHclTerraform(struct!.include),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction | undefined) {
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
  private _include = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionIncludeOutputReference(this, "include");
  public get include() {
    return this._include;
  }
  public putInclude(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionInclude) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent {
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field_extraction OpenpipelineV2LogsIngestsources#field_extraction}
  */
  readonly fieldExtraction: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_extraction: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_extraction: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent | undefined) {
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
  private _fieldExtraction = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#edge_type OpenpipelineV2LogsIngestsources#edge_type}
  */
  readonly edgeType: string;
  /**
  * Source ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_id_field_name OpenpipelineV2LogsIngestsources#source_id_field_name}
  */
  readonly sourceIdFieldName: string;
  /**
  * Source type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_type OpenpipelineV2LogsIngestsources#source_type}
  */
  readonly sourceType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#target_id_field_name OpenpipelineV2LogsIngestsources#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#target_type OpenpipelineV2LogsIngestsources#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry {
  /**
  * Field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field_name OpenpipelineV2LogsIngestsources#field_name}
  */
  readonly fieldName: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#referenced_field_name OpenpipelineV2LogsIngestsources#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract {
  /**
  * smartscape_field_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#smartscape_field_extraction_entry OpenpipelineV2LogsIngestsources#smartscape_field_extraction_entry}
  */
  readonly smartscapeFieldExtractionEntry: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_field_extraction_entry: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToTerraform, true)(struct!.smartscapeFieldExtractionEntry),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_field_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryToHclTerraform, true)(struct!.smartscapeFieldExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeFieldExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeFieldExtractionEntry = this._smartscapeFieldExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract | undefined) {
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
  private _smartscapeFieldExtractionEntry = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntryList(this, "smartscape_field_extraction_entry", false);
  public get smartscapeFieldExtractionEntry() {
    return this._smartscapeFieldExtractionEntry;
  }
  public putSmartscapeFieldExtractionEntry(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractSmartscapeFieldExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeFieldExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeFieldExtractionEntryInput() {
    return this._smartscapeFieldExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent {
  /**
  * ID component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#id_component OpenpipelineV2LogsIngestsources#id_component}
  */
  readonly idComponent: string;
  /**
  * Referenced field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#referenced_field_name OpenpipelineV2LogsIngestsources#referenced_field_name}
  */
  readonly referencedFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.stringToTerraform(struct!.idComponent),
    referenced_field_name: cdktf.stringToTerraform(struct!.referencedFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents {
  /**
  * id_component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#id_component OpenpipelineV2LogsIngestsources#id_component}
  */
  readonly idComponent: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_component: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToTerraform, true)(struct!.idComponent),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_component: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentToHclTerraform, true)(struct!.idComponent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idComponent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idComponent = this._idComponent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents | undefined) {
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
  private _idComponent = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponentList(this, "id_component", false);
  public get idComponent() {
    return this._idComponent;
  }
  public putIdComponent(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsIdComponent[] | cdktf.IResolvable) {
    this._idComponent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentInput() {
    return this._idComponent.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    source_field_name: cdktf.stringToTerraform(struct!.sourceFieldName),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName {
  /**
  * Constant value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#constant OpenpipelineV2LogsIngestsources#constant}
  */
  readonly constant?: string;
  /**
  * Constant multi value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#multi_value_constant OpenpipelineV2LogsIngestsources#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Type of value assignment. Possible Values: `constant`, `field`, `multiValueConstant`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
    field: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToTerraform(struct!.field),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName | undefined) {
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
  private _field = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameField) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry {
  /**
  * Edge type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#edge_type OpenpipelineV2LogsIngestsources#edge_type}
  */
  readonly edgeType: string;
  /**
  * Target ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#target_id_field_name OpenpipelineV2LogsIngestsources#target_id_field_name}
  */
  readonly targetIdFieldName: string;
  /**
  * Target type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#target_type OpenpipelineV2LogsIngestsources#target_type}
  */
  readonly targetType: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract {
  /**
  * smartscape_static_edge_extraction_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#smartscape_static_edge_extraction_entry OpenpipelineV2LogsIngestsources#smartscape_static_edge_extraction_entry}
  */
  readonly smartscapeStaticEdgeExtractionEntry: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    smartscape_static_edge_extraction_entry: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    smartscape_static_edge_extraction_entry: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryToHclTerraform, true)(struct!.smartscapeStaticEdgeExtractionEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._smartscapeStaticEdgeExtractionEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartscapeStaticEdgeExtractionEntry = this._smartscapeStaticEdgeExtractionEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract | undefined) {
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
  private _smartscapeStaticEdgeExtractionEntry = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntryList(this, "smartscape_static_edge_extraction_entry", false);
  public get smartscapeStaticEdgeExtractionEntry() {
    return this._smartscapeStaticEdgeExtractionEntry;
  }
  public putSmartscapeStaticEdgeExtractionEntry(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractSmartscapeStaticEdgeExtractionEntry[] | cdktf.IResolvable) {
    this._smartscapeStaticEdgeExtractionEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartscapeStaticEdgeExtractionEntryInput() {
    return this._smartscapeStaticEdgeExtractionEntry.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode {
  /**
  * Extract node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#extract_node OpenpipelineV2LogsIngestsources#extract_node}
  */
  readonly extractNode: boolean | cdktf.IResolvable;
  /**
  * Node ID field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#node_id_field_name OpenpipelineV2LogsIngestsources#node_id_field_name}
  */
  readonly nodeIdFieldName: string;
  /**
  * Node type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#node_type OpenpipelineV2LogsIngestsources#node_type}
  */
  readonly nodeType: string;
  /**
  * fields_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields_to_extract OpenpipelineV2LogsIngestsources#fields_to_extract}
  */
  readonly fieldsToExtract?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract;
  /**
  * id_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#id_components OpenpipelineV2LogsIngestsources#id_components}
  */
  readonly idComponents: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents;
  /**
  * node_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#node_name OpenpipelineV2LogsIngestsources#node_name}
  */
  readonly nodeName?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName;
  /**
  * static_edges_to_extract block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#static_edges_to_extract OpenpipelineV2LogsIngestsources#static_edges_to_extract}
  */
  readonly staticEdgesToExtract?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extract_node: cdktf.booleanToTerraform(struct!.extractNode),
    node_id_field_name: cdktf.stringToTerraform(struct!.nodeIdFieldName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    fields_to_extract: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToTerraform(struct!.fieldsToExtract),
    id_components: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToTerraform(struct!.idComponents),
    node_name: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameToTerraform(struct!.nodeName),
    static_edges_to_extract: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToTerraform(struct!.staticEdgesToExtract),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractToHclTerraform(struct!.fieldsToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractList",
    },
    id_components: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsToHclTerraform(struct!.idComponents),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsList",
    },
    node_name: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameToHclTerraform(struct!.nodeName),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameList",
    },
    static_edges_to_extract: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractToHclTerraform(struct!.staticEdgesToExtract),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode | undefined) {
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
  private _fieldsToExtract = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtractOutputReference(this, "fields_to_extract");
  public get fieldsToExtract() {
    return this._fieldsToExtract;
  }
  public putFieldsToExtract(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeFieldsToExtract) {
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
  private _idComponents = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponentsOutputReference(this, "id_components");
  public get idComponents() {
    return this._idComponents;
  }
  public putIdComponents(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeIdComponents) {
    this._idComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idComponentsInput() {
    return this._idComponents.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeNameOutputReference(this, "node_name");
  public get nodeName() {
    return this._nodeName;
  }
  public putNodeName(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeNodeName) {
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
  private _staticEdgesToExtract = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtractOutputReference(this, "static_edges_to_extract");
  public get staticEdgesToExtract() {
    return this._staticEdgesToExtract;
  }
  public putStaticEdgesToExtract(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeStaticEdgesToExtract) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology {
  /**
  * Custom matching condition which should be used instead of technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#custom_matcher OpenpipelineV2LogsIngestsources#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Technology ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#technology_id OpenpipelineV2LogsIngestsources#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology | undefined) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension {
  /**
  * Default value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Destination field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#destination_field_name OpenpipelineV2LogsIngestsources#destination_field_name}
  */
  readonly destinationFieldName?: string;
  /**
  * Source field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#source_field_name OpenpipelineV2LogsIngestsources#source_field_name}
  */
  readonly sourceFieldName: string;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable): any {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension | cdktf.IResolvable | undefined) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimension OpenpipelineV2LogsIngestsources#dimension}
  */
  readonly dimension: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "set",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions | undefined) {
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
  private _dimension = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimensionList(this, "dimension", true);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric {
  /**
  * Default value with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#default_value OpenpipelineV2LogsIngestsources#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Field with metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#field OpenpipelineV2LogsIngestsources#field}
  */
  readonly field: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#metric_key OpenpipelineV2LogsIngestsources#metric_key}
  */
  readonly metricKey: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dimensions OpenpipelineV2LogsIngestsources#dimensions}
  */
  readonly dimensions?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    field: cdktf.stringToTerraform(struct!.field),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    dimensions: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsToTerraform(struct!.dimensions),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsToHclTerraform(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric | undefined) {
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
  private _dimensions = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricDimensions) {
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
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#description OpenpipelineV2LogsIngestsources#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#enabled OpenpipelineV2LogsIngestsources#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Processor identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#id OpenpipelineV2LogsIngestsources#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#matcher OpenpipelineV2LogsIngestsources#matcher}
  */
  readonly matcher?: string;
  /**
  * Sample data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sample_data OpenpipelineV2LogsIngestsources#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Processor type. Possible Values: `azureLogForwarding`, `bizevent`, `bucketAssignment`, `costAllocation`, `counterMetric`, `davis`, `dql`, `drop`, `fieldsAdd`, `fieldsRemove`, `fieldsRename`, `histogramMetric`, `noStorage`, `productAllocation`, `samplingAwareCounterMetric`, `samplingAwareHistogramMetric`, `samplingAwareValueMetric`, `sdlcEvent`, `securityContext`, `securityEvent`, `smartscapeEdge`, `smartscapeNode`, `technology`, `valueMetric`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#type OpenpipelineV2LogsIngestsources#type}
  */
  readonly type: string;
  /**
  * azure_log_forwarding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#azure_log_forwarding OpenpipelineV2LogsIngestsources#azure_log_forwarding}
  */
  readonly azureLogForwarding?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding;
  /**
  * bizevent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#bizevent OpenpipelineV2LogsIngestsources#bizevent}
  */
  readonly bizevent?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent;
  /**
  * bucket_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#bucket_assignment OpenpipelineV2LogsIngestsources#bucket_assignment}
  */
  readonly bucketAssignment?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#cost_allocation OpenpipelineV2LogsIngestsources#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation;
  /**
  * counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#counter_metric OpenpipelineV2LogsIngestsources#counter_metric}
  */
  readonly counterMetric?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric;
  /**
  * davis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#davis OpenpipelineV2LogsIngestsources#davis}
  */
  readonly davis?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis;
  /**
  * dql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#dql OpenpipelineV2LogsIngestsources#dql}
  */
  readonly dql?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql;
  /**
  * fields_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields_add OpenpipelineV2LogsIngestsources#fields_add}
  */
  readonly fieldsAdd?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd;
  /**
  * fields_remove block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields_remove OpenpipelineV2LogsIngestsources#fields_remove}
  */
  readonly fieldsRemove?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove;
  /**
  * fields_rename block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#fields_rename OpenpipelineV2LogsIngestsources#fields_rename}
  */
  readonly fieldsRename?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename;
  /**
  * histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#histogram_metric OpenpipelineV2LogsIngestsources#histogram_metric}
  */
  readonly histogramMetric?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#product_allocation OpenpipelineV2LogsIngestsources#product_allocation}
  */
  readonly productAllocation?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation;
  /**
  * sampling_aware_counter_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sampling_aware_counter_metric OpenpipelineV2LogsIngestsources#sampling_aware_counter_metric}
  */
  readonly samplingAwareCounterMetric?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric;
  /**
  * sampling_aware_histogram_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sampling_aware_histogram_metric OpenpipelineV2LogsIngestsources#sampling_aware_histogram_metric}
  */
  readonly samplingAwareHistogramMetric?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric;
  /**
  * sampling_aware_value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sampling_aware_value_metric OpenpipelineV2LogsIngestsources#sampling_aware_value_metric}
  */
  readonly samplingAwareValueMetric?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric;
  /**
  * sdlc_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#sdlc_event OpenpipelineV2LogsIngestsources#sdlc_event}
  */
  readonly sdlcEvent?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#security_context OpenpipelineV2LogsIngestsources#security_context}
  */
  readonly securityContext?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext;
  /**
  * security_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#security_event OpenpipelineV2LogsIngestsources#security_event}
  */
  readonly securityEvent?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent;
  /**
  * smartscape_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#smartscape_edge OpenpipelineV2LogsIngestsources#smartscape_edge}
  */
  readonly smartscapeEdge?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge;
  /**
  * smartscape_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#smartscape_node OpenpipelineV2LogsIngestsources#smartscape_node}
  */
  readonly smartscapeNode?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode;
  /**
  * technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#technology OpenpipelineV2LogsIngestsources#technology}
  */
  readonly technology?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology;
  /**
  * value_metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#value_metric OpenpipelineV2LogsIngestsources#value_metric}
  */
  readonly valueMetric?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor | cdktf.IResolvable): any {
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
    azure_log_forwarding: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingToTerraform(struct!.azureLogForwarding),
    bizevent: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventToTerraform(struct!.bizevent),
    bucket_assignment: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentToTerraform(struct!.bucketAssignment),
    cost_allocation: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationToTerraform(struct!.costAllocation),
    counter_metric: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricToTerraform(struct!.counterMetric),
    davis: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisToTerraform(struct!.davis),
    dql: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlToTerraform(struct!.dql),
    fields_add: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddToTerraform(struct!.fieldsAdd),
    fields_remove: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveToTerraform(struct!.fieldsRemove),
    fields_rename: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameToTerraform(struct!.fieldsRename),
    histogram_metric: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricToTerraform(struct!.histogramMetric),
    product_allocation: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationToTerraform(struct!.productAllocation),
    sampling_aware_counter_metric: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricToTerraform(struct!.samplingAwareCounterMetric),
    sampling_aware_histogram_metric: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricToTerraform(struct!.samplingAwareHistogramMetric),
    sampling_aware_value_metric: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricToTerraform(struct!.samplingAwareValueMetric),
    sdlc_event: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventToTerraform(struct!.sdlcEvent),
    security_context: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextToTerraform(struct!.securityContext),
    security_event: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventToTerraform(struct!.securityEvent),
    smartscape_edge: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeToTerraform(struct!.smartscapeEdge),
    smartscape_node: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeToTerraform(struct!.smartscapeNode),
    technology: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyToTerraform(struct!.technology),
    value_metric: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricToTerraform(struct!.valueMetric),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor | cdktf.IResolvable): any {
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
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingToHclTerraform(struct!.azureLogForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingList",
    },
    bizevent: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventToHclTerraform(struct!.bizevent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventList",
    },
    bucket_assignment: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentToHclTerraform(struct!.bucketAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentList",
    },
    cost_allocation: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationList",
    },
    counter_metric: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricToHclTerraform(struct!.counterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricList",
    },
    davis: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisToHclTerraform(struct!.davis),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisList",
    },
    dql: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlToHclTerraform(struct!.dql),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlList",
    },
    fields_add: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddToHclTerraform(struct!.fieldsAdd),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddList",
    },
    fields_remove: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveToHclTerraform(struct!.fieldsRemove),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveList",
    },
    fields_rename: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameToHclTerraform(struct!.fieldsRename),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameList",
    },
    histogram_metric: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricToHclTerraform(struct!.histogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricList",
    },
    product_allocation: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationList",
    },
    sampling_aware_counter_metric: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricToHclTerraform(struct!.samplingAwareCounterMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricList",
    },
    sampling_aware_histogram_metric: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricToHclTerraform(struct!.samplingAwareHistogramMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricList",
    },
    sampling_aware_value_metric: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricToHclTerraform(struct!.samplingAwareValueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricList",
    },
    sdlc_event: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventToHclTerraform(struct!.sdlcEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventList",
    },
    security_context: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextList",
    },
    security_event: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventToHclTerraform(struct!.securityEvent),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventList",
    },
    smartscape_edge: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeToHclTerraform(struct!.smartscapeEdge),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeList",
    },
    smartscape_node: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeToHclTerraform(struct!.smartscapeNode),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeList",
    },
    technology: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyToHclTerraform(struct!.technology),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyList",
    },
    value_metric: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricToHclTerraform(struct!.valueMetric),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwarding = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwardingOutputReference(this, "azure_log_forwarding");
  public get azureLogForwarding() {
    return this._azureLogForwarding;
  }
  public putAzureLogForwarding(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorAzureLogForwarding) {
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
  private _bizevent = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizeventOutputReference(this, "bizevent");
  public get bizevent() {
    return this._bizevent;
  }
  public putBizevent(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBizevent) {
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
  private _bucketAssignment = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignmentOutputReference(this, "bucket_assignment");
  public get bucketAssignment() {
    return this._bucketAssignment;
  }
  public putBucketAssignment(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorBucketAssignment) {
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
  private _costAllocation = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCostAllocation) {
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
  private _counterMetric = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetricOutputReference(this, "counter_metric");
  public get counterMetric() {
    return this._counterMetric;
  }
  public putCounterMetric(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorCounterMetric) {
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
  private _davis = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavisOutputReference(this, "davis");
  public get davis() {
    return this._davis;
  }
  public putDavis(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDavis) {
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
  private _dql = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDqlOutputReference(this, "dql");
  public get dql() {
    return this._dql;
  }
  public putDql(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorDql) {
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
  private _fieldsAdd = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAddOutputReference(this, "fields_add");
  public get fieldsAdd() {
    return this._fieldsAdd;
  }
  public putFieldsAdd(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsAdd) {
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
  private _fieldsRemove = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemoveOutputReference(this, "fields_remove");
  public get fieldsRemove() {
    return this._fieldsRemove;
  }
  public putFieldsRemove(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRemove) {
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
  private _fieldsRename = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRenameOutputReference(this, "fields_rename");
  public get fieldsRename() {
    return this._fieldsRename;
  }
  public putFieldsRename(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorFieldsRename) {
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
  private _histogramMetric = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetricOutputReference(this, "histogram_metric");
  public get histogramMetric() {
    return this._histogramMetric;
  }
  public putHistogramMetric(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorHistogramMetric) {
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
  private _productAllocation = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorProductAllocation) {
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
  private _samplingAwareCounterMetric = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetricOutputReference(this, "sampling_aware_counter_metric");
  public get samplingAwareCounterMetric() {
    return this._samplingAwareCounterMetric;
  }
  public putSamplingAwareCounterMetric(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareCounterMetric) {
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
  private _samplingAwareHistogramMetric = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetricOutputReference(this, "sampling_aware_histogram_metric");
  public get samplingAwareHistogramMetric() {
    return this._samplingAwareHistogramMetric;
  }
  public putSamplingAwareHistogramMetric(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareHistogramMetric) {
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
  private _samplingAwareValueMetric = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetricOutputReference(this, "sampling_aware_value_metric");
  public get samplingAwareValueMetric() {
    return this._samplingAwareValueMetric;
  }
  public putSamplingAwareValueMetric(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSamplingAwareValueMetric) {
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
  private _sdlcEvent = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEventOutputReference(this, "sdlc_event");
  public get sdlcEvent() {
    return this._sdlcEvent;
  }
  public putSdlcEvent(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSdlcEvent) {
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
  private _securityContext = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityContext) {
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
  private _securityEvent = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEventOutputReference(this, "security_event");
  public get securityEvent() {
    return this._securityEvent;
  }
  public putSecurityEvent(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSecurityEvent) {
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
  private _smartscapeEdge = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdgeOutputReference(this, "smartscape_edge");
  public get smartscapeEdge() {
    return this._smartscapeEdge;
  }
  public putSmartscapeEdge(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeEdge) {
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
  private _smartscapeNode = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNodeOutputReference(this, "smartscape_node");
  public get smartscapeNode() {
    return this._smartscapeNode;
  }
  public putSmartscapeNode(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorSmartscapeNode) {
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
  private _technology = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnologyOutputReference(this, "technology");
  public get technology() {
    return this._technology;
  }
  public putTechnology(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorTechnology) {
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
  private _valueMetric = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetricOutputReference(this, "value_metric");
  public get valueMetric() {
    return this._valueMetric;
  }
  public putValueMetric(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorValueMetric) {
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

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorOutputReference {
    return new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessingProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#processor OpenpipelineV2LogsIngestsources#processor}
  */
  readonly processor: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineV2LogsIngestsourcesProcessingProcessorsToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingProcessorsToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingProcessorsOutputReference | OpenpipelineV2LogsIngestsourcesProcessingProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineV2LogsIngestsourcesProcessingProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessingProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessingProcessors | undefined) {
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
  private _processor = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineV2LogsIngestsourcesProcessingProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineV2LogsIngestsourcesProcessing {
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#processors OpenpipelineV2LogsIngestsources#processors}
  */
  readonly processors?: OpenpipelineV2LogsIngestsourcesProcessingProcessors;
}

export function openpipelineV2LogsIngestsourcesProcessingToTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingOutputReference | OpenpipelineV2LogsIngestsourcesProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processors: openpipelineV2LogsIngestsourcesProcessingProcessorsToTerraform(struct!.processors),
  }
}


export function openpipelineV2LogsIngestsourcesProcessingToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesProcessingOutputReference | OpenpipelineV2LogsIngestsourcesProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processors: {
      value: openpipelineV2LogsIngestsourcesProcessingProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingProcessorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesProcessing | undefined) {
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
  private _processors = new OpenpipelineV2LogsIngestsourcesProcessingProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineV2LogsIngestsourcesProcessingProcessors) {
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
export interface OpenpipelineV2LogsIngestsourcesStaticRouting {
  /**
  * Builtin Pipeline ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#builtin_pipeline_id OpenpipelineV2LogsIngestsources#builtin_pipeline_id}
  */
  readonly builtinPipelineId?: string;
  /**
  * Pipeline ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#pipeline_id OpenpipelineV2LogsIngestsources#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Pipeline Type. Possible Values: `builtin`, `custom`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#pipeline_type OpenpipelineV2LogsIngestsources#pipeline_type}
  */
  readonly pipelineType: string;
}

export function openpipelineV2LogsIngestsourcesStaticRoutingToTerraform(struct?: OpenpipelineV2LogsIngestsourcesStaticRoutingOutputReference | OpenpipelineV2LogsIngestsourcesStaticRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin_pipeline_id: cdktf.stringToTerraform(struct!.builtinPipelineId),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    pipeline_type: cdktf.stringToTerraform(struct!.pipelineType),
  }
}


export function openpipelineV2LogsIngestsourcesStaticRoutingToHclTerraform(struct?: OpenpipelineV2LogsIngestsourcesStaticRoutingOutputReference | OpenpipelineV2LogsIngestsourcesStaticRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin_pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.builtinPipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_type: {
      value: cdktf.stringToHclTerraform(struct!.pipelineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2LogsIngestsourcesStaticRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2LogsIngestsourcesStaticRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtinPipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinPipelineId = this._builtinPipelineId;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._pipelineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineType = this._pipelineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2LogsIngestsourcesStaticRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._builtinPipelineId = undefined;
      this._pipelineId = undefined;
      this._pipelineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._builtinPipelineId = value.builtinPipelineId;
      this._pipelineId = value.pipelineId;
      this._pipelineType = value.pipelineType;
    }
  }

  // builtin_pipeline_id - computed: false, optional: true, required: false
  private _builtinPipelineId?: string; 
  public get builtinPipelineId() {
    return this.getStringAttribute('builtin_pipeline_id');
  }
  public set builtinPipelineId(value: string) {
    this._builtinPipelineId = value;
  }
  public resetBuiltinPipelineId() {
    this._builtinPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinPipelineIdInput() {
    return this._builtinPipelineId;
  }

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // pipeline_type - computed: false, optional: false, required: true
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources dynatrace_openpipeline_v2_logs_ingestsources}
*/
export class OpenpipelineV2LogsIngestsources extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_logs_ingestsources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2LogsIngestsources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2LogsIngestsources to import
  * @param importFromId The id of the existing OpenpipelineV2LogsIngestsources that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2LogsIngestsources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_logs_ingestsources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_v2_logs_ingestsources dynatrace_openpipeline_v2_logs_ingestsources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2LogsIngestsourcesConfig
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2LogsIngestsourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_logs_ingestsources',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultBucket = config.defaultBucket;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._pathSegment = config.pathSegment;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._processing.internalValue = config.processing;
    this._staticRouting.internalValue = config.staticRouting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_bucket - computed: false, optional: true, required: false
  private _defaultBucket?: string; 
  public get defaultBucket() {
    return this.getStringAttribute('default_bucket');
  }
  public set defaultBucket(value: string) {
    this._defaultBucket = value;
  }
  public resetDefaultBucket() {
    this._defaultBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBucketInput() {
    return this._defaultBucket;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // path_segment - computed: false, optional: true, required: false
  private _pathSegment?: string; 
  public get pathSegment() {
    return this.getStringAttribute('path_segment');
  }
  public set pathSegment(value: string) {
    this._pathSegment = value;
  }
  public resetPathSegment() {
    this._pathSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathSegmentInput() {
    return this._pathSegment;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // processing - computed: false, optional: true, required: false
  private _processing = new OpenpipelineV2LogsIngestsourcesProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineV2LogsIngestsourcesProcessing) {
    this._processing.internalValue = value;
  }
  public resetProcessing() {
    this._processing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // static_routing - computed: false, optional: true, required: false
  private _staticRouting = new OpenpipelineV2LogsIngestsourcesStaticRoutingOutputReference(this, "static_routing");
  public get staticRouting() {
    return this._staticRouting;
  }
  public putStaticRouting(value: OpenpipelineV2LogsIngestsourcesStaticRouting) {
    this._staticRouting.internalValue = value;
  }
  public resetStaticRouting() {
    this._staticRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutingInput() {
    return this._staticRouting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_bucket: cdktf.stringToTerraform(this._defaultBucket),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      path_segment: cdktf.stringToTerraform(this._pathSegment),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      processing: openpipelineV2LogsIngestsourcesProcessingToTerraform(this._processing.internalValue),
      static_routing: openpipelineV2LogsIngestsourcesStaticRoutingToTerraform(this._staticRouting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_bucket: {
        value: cdktf.stringToHclTerraform(this._defaultBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_segment: {
        value: cdktf.stringToHclTerraform(this._pathSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processing: {
        value: openpipelineV2LogsIngestsourcesProcessingToHclTerraform(this._processing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsIngestsourcesProcessingList",
      },
      static_routing: {
        value: openpipelineV2LogsIngestsourcesStaticRoutingToHclTerraform(this._staticRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2LogsIngestsourcesStaticRoutingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
