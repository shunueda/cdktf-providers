// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#endpoints OpenpipelineLogs#endpoints}
  */
  readonly endpoints?: OpenpipelineLogsEndpoints;
  /**
  * pipelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#pipelines OpenpipelineLogs#pipelines}
  */
  readonly pipelines?: OpenpipelineLogsPipelines;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#routing OpenpipelineLogs#routing}
  */
  readonly routing?: OpenpipelineLogsRouting;
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dql_script OpenpipelineLogs#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dql_script: cdktf.stringToTerraform(struct!.dqlScript),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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
    dql_script: {
      value: cdktf.stringToHclTerraform(struct!.dqlScript),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dqlScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlScript = this._dqlScript;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._dqlScript = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._dqlScript = value.dqlScript;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // dql_script - computed: false, optional: false, required: true
  private _dqlScript?: string; 
  public get dqlScript() {
    return this.getStringAttribute('dql_script');
  }
  public set dqlScript(value: string) {
    this._dqlScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlScriptInput() {
    return this._dqlScript;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#name OpenpipelineLogs#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value OpenpipelineLogs#value}
  */
  readonly value: string;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
    field: {
      value: cdktf.listMapperHcl(openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined {
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
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._field.internalValue = value.field;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // field - computed: false, optional: false, required: true
  private _field = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields OpenpipelineLogs#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined {
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
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._fields = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._fields = value.fields;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#from_name OpenpipelineLogs#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#to_name OpenpipelineLogs#to_name}
  */
  readonly toName: string;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
    field: {
      value: cdktf.listMapperHcl(openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined {
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
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._field.internalValue = value.field;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // field - computed: false, optional: false, required: true
  private _field = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#custom_matcher OpenpipelineLogs#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#technology_id OpenpipelineLogs#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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
    sample_data: {
      value: cdktf.stringToHclTerraform(struct!.sampleData),
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

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMatcher = this._customMatcher;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    if (this._technologyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyId = this._technologyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customMatcher = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._sampleData = undefined;
      this._technologyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customMatcher = value.customMatcher;
      this._enabled = value.enabled;
      this._id = value.id;
      this._sampleData = value.sampleData;
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
export interface OpenpipelineLogsEndpointsEndpointProcessorsProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dql_processor OpenpipelineLogs#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#drop_processor OpenpipelineLogs#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields_add_processor OpenpipelineLogs#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields_remove_processor OpenpipelineLogs#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields_rename_processor OpenpipelineLogs#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#technology_processor OpenpipelineLogs#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor;
}

export function openpipelineLogsEndpointsEndpointProcessorsProcessorToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsProcessorToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dqlProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlProcessor = this._dqlProcessor?.internalValue;
    }
    if (this._dropProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropProcessor = this._dropProcessor?.internalValue;
    }
    if (this._fieldsAddProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsAddProcessor = this._fieldsAddProcessor?.internalValue;
    }
    if (this._fieldsRemoveProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRemoveProcessor = this._fieldsRemoveProcessor?.internalValue;
    }
    if (this._fieldsRenameProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRenameProcessor = this._fieldsRenameProcessor?.internalValue;
    }
    if (this._technologyProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyProcessor = this._technologyProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dqlProcessor.internalValue = undefined;
      this._dropProcessor.internalValue = undefined;
      this._fieldsAddProcessor.internalValue = undefined;
      this._fieldsRemoveProcessor.internalValue = undefined;
      this._fieldsRenameProcessor.internalValue = undefined;
      this._technologyProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dqlProcessor.internalValue = value.dqlProcessor;
      this._dropProcessor.internalValue = value.dropProcessor;
      this._fieldsAddProcessor.internalValue = value.fieldsAddProcessor;
      this._fieldsRemoveProcessor.internalValue = value.fieldsRemoveProcessor;
      this._fieldsRenameProcessor.internalValue = value.fieldsRenameProcessor;
      this._technologyProcessor.internalValue = value.technologyProcessor;
    }
  }

  // dql_processor - computed: false, optional: true, required: false
  private _dqlProcessor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDqlProcessor) {
    this._dqlProcessor.internalValue = value;
  }
  public resetDqlProcessor() {
    this._dqlProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlProcessorInput() {
    return this._dqlProcessor.internalValue;
  }

  // drop_processor - computed: false, optional: true, required: false
  private _dropProcessor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorDropProcessor) {
    this._dropProcessor.internalValue = value;
  }
  public resetDropProcessor() {
    this._dropProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropProcessorInput() {
    return this._dropProcessor.internalValue;
  }

  // fields_add_processor - computed: false, optional: true, required: false
  private _fieldsAddProcessor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsAddProcessor) {
    this._fieldsAddProcessor.internalValue = value;
  }
  public resetFieldsAddProcessor() {
    this._fieldsAddProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsAddProcessorInput() {
    return this._fieldsAddProcessor.internalValue;
  }

  // fields_remove_processor - computed: false, optional: true, required: false
  private _fieldsRemoveProcessor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor) {
    this._fieldsRemoveProcessor.internalValue = value;
  }
  public resetFieldsRemoveProcessor() {
    this._fieldsRemoveProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRemoveProcessorInput() {
    return this._fieldsRemoveProcessor.internalValue;
  }

  // fields_rename_processor - computed: false, optional: true, required: false
  private _fieldsRenameProcessor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor) {
    this._fieldsRenameProcessor.internalValue = value;
  }
  public resetFieldsRenameProcessor() {
    this._fieldsRenameProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRenameProcessorInput() {
    return this._fieldsRenameProcessor.internalValue;
  }

  // technology_processor - computed: false, optional: true, required: false
  private _technologyProcessor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessorTechnologyProcessor) {
    this._technologyProcessor.internalValue = value;
  }
  public resetTechnologyProcessor() {
    this._technologyProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyProcessorInput() {
    return this._technologyProcessor.internalValue;
  }
}

export class OpenpipelineLogsEndpointsEndpointProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsEndpointsEndpointProcessorsProcessorOutputReference {
    return new OpenpipelineLogsEndpointsEndpointProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsEndpointsEndpointProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsEndpointsEndpointProcessorsToTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsOutputReference | OpenpipelineLogsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsEndpointsEndpointProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsEndpointsEndpointProcessorsToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointProcessorsOutputReference | OpenpipelineLogsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsEndpointsEndpointProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointProcessors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsEndpointsEndpointProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsEndpointsEndpointRouting {
  /**
  * Pipeline ID of the static routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#pipeline_id OpenpipelineLogs#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Type of routing, static or dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#type OpenpipelineLogs#type}
  */
  readonly type: string;
}

export function openpipelineLogsEndpointsEndpointRoutingToTerraform(struct?: OpenpipelineLogsEndpointsEndpointRoutingOutputReference | OpenpipelineLogsEndpointsEndpointRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineLogsEndpointsEndpointRoutingToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpointRoutingOutputReference | OpenpipelineLogsEndpointsEndpointRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
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

export class OpenpipelineLogsEndpointsEndpointRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpointsEndpointRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpointRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineId = value.pipelineId;
      this._type = value.type;
    }
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
export interface OpenpipelineLogsEndpointsEndpoint {
  /**
  * The default bucket assigned to records for the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#default_bucket OpenpipelineLogs#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * Display name of the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#display_name OpenpipelineLogs#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The segment of the ingest source, which is applied to the base path. Must be unique within a configuration."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#segment OpenpipelineLogs#segment}
  */
  readonly segment: string;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processors OpenpipelineLogs#processors}
  */
  readonly processors?: OpenpipelineLogsEndpointsEndpointProcessors;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#routing OpenpipelineLogs#routing}
  */
  readonly routing: OpenpipelineLogsEndpointsEndpointRouting;
}

export function openpipelineLogsEndpointsEndpointToTerraform(struct?: OpenpipelineLogsEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bucket: cdktf.stringToTerraform(struct!.defaultBucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    segment: cdktf.stringToTerraform(struct!.segment),
    processors: openpipelineLogsEndpointsEndpointProcessorsToTerraform(struct!.processors),
    routing: openpipelineLogsEndpointsEndpointRoutingToTerraform(struct!.routing),
  }
}


export function openpipelineLogsEndpointsEndpointToHclTerraform(struct?: OpenpipelineLogsEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_bucket: {
      value: cdktf.stringToHclTerraform(struct!.defaultBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    segment: {
      value: cdktf.stringToHclTerraform(struct!.segment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processors: {
      value: openpipelineLogsEndpointsEndpointProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointProcessorsList",
    },
    routing: {
      value: openpipelineLogsEndpointsEndpointRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsEndpointsEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBucket = this._defaultBucket;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._processors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processors = this._processors?.internalValue;
    }
    if (this._routing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routing = this._routing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpointsEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBucket = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._segment = undefined;
      this._processors.internalValue = undefined;
      this._routing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBucket = value.defaultBucket;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._segment = value.segment;
      this._processors.internalValue = value.processors;
      this._routing.internalValue = value.routing;
    }
  }

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

  // segment - computed: false, optional: false, required: true
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // processors - computed: false, optional: true, required: false
  private _processors = new OpenpipelineLogsEndpointsEndpointProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineLogsEndpointsEndpointProcessors) {
    this._processors.internalValue = value;
  }
  public resetProcessors() {
    this._processors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors.internalValue;
  }

  // routing - computed: false, optional: false, required: true
  private _routing = new OpenpipelineLogsEndpointsEndpointRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineLogsEndpointsEndpointRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class OpenpipelineLogsEndpointsEndpointList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsEndpointsEndpoint[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsEndpointsEndpointOutputReference {
    return new OpenpipelineLogsEndpointsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsEndpoints {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#endpoint OpenpipelineLogs#endpoint}
  */
  readonly endpoint?: OpenpipelineLogsEndpointsEndpoint[] | cdktf.IResolvable;
}

export function openpipelineLogsEndpointsToTerraform(struct?: OpenpipelineLogsEndpointsOutputReference | OpenpipelineLogsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.listMapper(openpipelineLogsEndpointsEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function openpipelineLogsEndpointsToHclTerraform(struct?: OpenpipelineLogsEndpointsOutputReference | OpenpipelineLogsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.listMapperHcl(openpipelineLogsEndpointsEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsEndpointsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint.internalValue = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new OpenpipelineLogsEndpointsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: OpenpipelineLogsEndpointsEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#constant OpenpipelineLogs#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#multi_value_constant OpenpipelineLogs#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#type OpenpipelineLogs#type}
  */
  readonly type: string;
}

export function openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    field: cdktf.stringToTerraform(struct!.field),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._field = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._field = value.field;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
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
}
export interface OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value OpenpipelineLogs#value}
  */
  readonly value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue;
}

export function openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
    value: openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
    value: {
      value: openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined {
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
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._value.internalValue = value.value;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineCostAllocationProcessor {
  /**
  * cost_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#cost_allocation_processor OpenpipelineLogs#cost_allocation_processor}
  */
  readonly costAllocationProcessor?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor;
}

export function openpipelineLogsPipelinesPipelineCostAllocationProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_allocation_processor: openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct!.costAllocationProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineCostAllocationProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_allocation_processor: {
      value: openpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct!.costAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costAllocationProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAllocationProcessor = this._costAllocationProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costAllocationProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costAllocationProcessor.internalValue = value.costAllocationProcessor;
    }
  }

  // cost_allocation_processor - computed: false, optional: true, required: false
  private _costAllocationProcessor = new OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference(this, "cost_allocation_processor");
  public get costAllocationProcessor() {
    return this._costAllocationProcessor;
  }
  public putCostAllocationProcessor(value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor) {
    this._costAllocationProcessor.internalValue = value;
  }
  public resetCostAllocationProcessor() {
    this._costAllocationProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationProcessorInput() {
    return this._costAllocationProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineCostAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineCostAllocationProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineCostAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineCostAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineCostAllocationToTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationOutputReference | OpenpipelineLogsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineCostAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineCostAllocationToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineCostAllocationOutputReference | OpenpipelineLogsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineCostAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineCostAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineCostAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields OpenpipelineLogs#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#semantic OpenpipelineLogs#semantic}
  */
  readonly semantic: string;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    semantic: {
      value: cdktf.stringToHclTerraform(struct!.semantic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._semantic !== undefined) {
      hasAnyValues = true;
      internalValueResult.semantic = this._semantic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._semantic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._semantic = value.semantic;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // semantic - computed: false, optional: false, required: true
  private _semantic?: string; 
  public get semantic() {
    return this.getStringAttribute('semantic');
  }
  public set semantic(value: string) {
    this._semantic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticInput() {
    return this._semantic;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#forwarder_config_id OpenpipelineLogs#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field_extraction OpenpipelineLogs#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    forwarder_config_id: cdktf.stringToTerraform(struct!.forwarderConfigId),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    field_extraction: openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
    forwarder_config_id: {
      value: cdktf.stringToHclTerraform(struct!.forwarderConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    field_extraction: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined {
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
    if (this._forwarderConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwarderConfigId = this._forwarderConfigId;
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
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._forwarderConfigId = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._forwarderConfigId = value.forwarderConfigId;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._fieldExtraction.internalValue = value.fieldExtraction;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  public resetFieldExtraction() {
    this._fieldExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#constant OpenpipelineLogs#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#multi_value_constant OpenpipelineLogs#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#type OpenpipelineLogs#type}
  */
  readonly type: string;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    field: cdktf.stringToTerraform(struct!.field),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._field = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._field = value.field;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
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
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#constant OpenpipelineLogs#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#multi_value_constant OpenpipelineLogs#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#type OpenpipelineLogs#type}
  */
  readonly type: string;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    field: cdktf.stringToTerraform(struct!.field),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._field = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._field = value.field;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
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
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields OpenpipelineLogs#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#semantic OpenpipelineLogs#semantic}
  */
  readonly semantic: string;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    semantic: {
      value: cdktf.stringToHclTerraform(struct!.semantic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._semantic !== undefined) {
      hasAnyValues = true;
      internalValueResult.semantic = this._semantic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._semantic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._semantic = value.semantic;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // semantic - computed: false, optional: false, required: true
  private _semantic?: string; 
  public get semantic() {
    return this.getStringAttribute('semantic');
  }
  public set semantic(value: string) {
    this._semantic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticInput() {
    return this._semantic;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#event_provider OpenpipelineLogs#event_provider}
  */
  readonly eventProvider: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#event_type OpenpipelineLogs#event_type}
  */
  readonly eventType: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field_extraction OpenpipelineLogs#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
    event_provider: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
    event_provider: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderList",
    },
    event_type: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeList",
    },
    field_extraction: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._eventProvider.internalValue = undefined;
      this._eventType.internalValue = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._eventProvider.internalValue = value.eventProvider;
      this._eventType.internalValue = value.eventType;
      this._fieldExtraction.internalValue = value.fieldExtraction;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // event_provider - computed: false, optional: false, required: true
  private _eventProvider = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType) {
    this._eventType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  public resetFieldExtraction() {
    this._fieldExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties {
  /**
  * The key to set on the davis event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#key OpenpipelineLogs#key}
  */
  readonly key: string;
  /**
  * The value assigned to the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value OpenpipelineLogs#value}
  */
  readonly value: string;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
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

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined) {
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

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference {
    return new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#properties OpenpipelineLogs#properties}
  */
  readonly properties: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
    properties: cdktf.listMapper(openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform, true)(struct!.properties),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
    properties: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined {
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
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._properties.internalValue = value.properties;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // properties - computed: false, optional: false, required: true
  private _properties = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields OpenpipelineLogs#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#semantic OpenpipelineLogs#semantic}
  */
  readonly semantic: string;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    semantic: {
      value: cdktf.stringToHclTerraform(struct!.semantic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._semantic !== undefined) {
      hasAnyValues = true;
      internalValueResult.semantic = this._semantic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._semantic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._semantic = value.semantic;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // semantic - computed: false, optional: false, required: true
  private _semantic?: string; 
  public get semantic() {
    return this.getStringAttribute('semantic');
  }
  public set semantic(value: string) {
    this._semantic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticInput() {
    return this._semantic;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field_extraction OpenpipelineLogs#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
    field_extraction: openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
    field_extraction: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined {
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
    if (this._fieldExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldExtraction = this._fieldExtraction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._fieldExtraction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._fieldExtraction.internalValue = value.fieldExtraction;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction) {
    this._fieldExtraction.internalValue = value;
  }
  public resetFieldExtraction() {
    this._fieldExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldExtractionInput() {
    return this._fieldExtraction.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtractionProcessor {
  /**
  * azure_log_forwarding_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#azure_log_forwarding_processor OpenpipelineLogs#azure_log_forwarding_processor}
  */
  readonly azureLogForwardingProcessor?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor;
  /**
  * bizevent_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#bizevent_extraction_processor OpenpipelineLogs#bizevent_extraction_processor}
  */
  readonly bizeventExtractionProcessor?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor;
  /**
  * davis_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#davis_event_extraction_processor OpenpipelineLogs#davis_event_extraction_processor}
  */
  readonly davisEventExtractionProcessor?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor;
  /**
  * security_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#security_event_extraction_processor OpenpipelineLogs#security_event_extraction_processor}
  */
  readonly securityEventExtractionProcessor?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor;
}

export function openpipelineLogsPipelinesPipelineDataExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_log_forwarding_processor: openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct!.azureLogForwardingProcessor),
    bizevent_extraction_processor: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct!.bizeventExtractionProcessor),
    davis_event_extraction_processor: openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct!.davisEventExtractionProcessor),
    security_event_extraction_processor: openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct!.securityEventExtractionProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_log_forwarding_processor: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct!.azureLogForwardingProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorList",
    },
    bizevent_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct!.bizeventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorList",
    },
    davis_event_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct!.davisEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorList",
    },
    security_event_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct!.securityEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureLogForwardingProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureLogForwardingProcessor = this._azureLogForwardingProcessor?.internalValue;
    }
    if (this._bizeventExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bizeventExtractionProcessor = this._bizeventExtractionProcessor?.internalValue;
    }
    if (this._davisEventExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.davisEventExtractionProcessor = this._davisEventExtractionProcessor?.internalValue;
    }
    if (this._securityEventExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityEventExtractionProcessor = this._securityEventExtractionProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureLogForwardingProcessor.internalValue = undefined;
      this._bizeventExtractionProcessor.internalValue = undefined;
      this._davisEventExtractionProcessor.internalValue = undefined;
      this._securityEventExtractionProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureLogForwardingProcessor.internalValue = value.azureLogForwardingProcessor;
      this._bizeventExtractionProcessor.internalValue = value.bizeventExtractionProcessor;
      this._davisEventExtractionProcessor.internalValue = value.davisEventExtractionProcessor;
      this._securityEventExtractionProcessor.internalValue = value.securityEventExtractionProcessor;
    }
  }

  // azure_log_forwarding_processor - computed: false, optional: true, required: false
  private _azureLogForwardingProcessor = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference(this, "azure_log_forwarding_processor");
  public get azureLogForwardingProcessor() {
    return this._azureLogForwardingProcessor;
  }
  public putAzureLogForwardingProcessor(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor) {
    this._azureLogForwardingProcessor.internalValue = value;
  }
  public resetAzureLogForwardingProcessor() {
    this._azureLogForwardingProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLogForwardingProcessorInput() {
    return this._azureLogForwardingProcessor.internalValue;
  }

  // bizevent_extraction_processor - computed: false, optional: true, required: false
  private _bizeventExtractionProcessor = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference(this, "bizevent_extraction_processor");
  public get bizeventExtractionProcessor() {
    return this._bizeventExtractionProcessor;
  }
  public putBizeventExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor) {
    this._bizeventExtractionProcessor.internalValue = value;
  }
  public resetBizeventExtractionProcessor() {
    this._bizeventExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizeventExtractionProcessorInput() {
    return this._bizeventExtractionProcessor.internalValue;
  }

  // davis_event_extraction_processor - computed: false, optional: true, required: false
  private _davisEventExtractionProcessor = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference(this, "davis_event_extraction_processor");
  public get davisEventExtractionProcessor() {
    return this._davisEventExtractionProcessor;
  }
  public putDavisEventExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor) {
    this._davisEventExtractionProcessor.internalValue = value;
  }
  public resetDavisEventExtractionProcessor() {
    this._davisEventExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisEventExtractionProcessorInput() {
    return this._davisEventExtractionProcessor.internalValue;
  }

  // security_event_extraction_processor - computed: false, optional: true, required: false
  private _securityEventExtractionProcessor = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference(this, "security_event_extraction_processor");
  public get securityEventExtractionProcessor() {
    return this._securityEventExtractionProcessor;
  }
  public putSecurityEventExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor) {
    this._securityEventExtractionProcessor.internalValue = value;
  }
  public resetSecurityEventExtractionProcessor() {
    this._securityEventExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventExtractionProcessorInput() {
    return this._securityEventExtractionProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineDataExtractionProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineDataExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineDataExtractionToTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineDataExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineDataExtractionToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineDataExtractionOutputReference | OpenpipelineLogsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineDataExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineDataExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineDataExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineDataExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineDataExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dimensions OpenpipelineLogs#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#metric_key OpenpipelineLogs#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
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
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._dimensions = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._metricKey = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._dimensions = value.dimensions;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._metricKey = value.metricKey;
      this._sampleData = value.sampleData;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
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
}
export interface OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#aggregation OpenpipelineLogs#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dimensions OpenpipelineLogs#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#metric_key OpenpipelineLogs#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sampling OpenpipelineLogs#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    description: cdktf.stringToTerraform(struct!.description),
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    sampling: cdktf.stringToTerraform(struct!.sampling),
  }
}


export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
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
    sampling: {
      value: cdktf.stringToHclTerraform(struct!.sampling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
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
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._description = undefined;
      this._dimensions = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._metricKey = undefined;
      this._sampleData = undefined;
      this._sampling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._description = value.description;
      this._dimensions = value.dimensions;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._metricKey = value.metricKey;
      this._sampleData = value.sampleData;
      this._sampling = value.sampling;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
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
}
export interface OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#aggregation OpenpipelineLogs#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The default value to use if the given field value could not be extracted. String value must be a number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#default_value OpenpipelineLogs#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dimensions OpenpipelineLogs#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field from which to extract the value for the metric, or 'null' for a duration measurement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field?: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Indicates whether the metric value should be the specified field or duration. Possible values: 'DURATION', 'FIELD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#measurement OpenpipelineLogs#measurement}
  */
  readonly measurement: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#metric_key OpenpipelineLogs#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sampling OpenpipelineLogs#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    field: cdktf.stringToTerraform(struct!.field),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    measurement: cdktf.stringToTerraform(struct!.measurement),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    sampling: cdktf.stringToTerraform(struct!.sampling),
  }
}


export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    sample_data: {
      value: cdktf.stringToHclTerraform(struct!.sampleData),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined {
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
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._measurement !== undefined) {
      hasAnyValues = true;
      internalValueResult.measurement = this._measurement;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    if (this._sampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampling = this._sampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._dimensions = undefined;
      this._enabled = undefined;
      this._field = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._measurement = undefined;
      this._metricKey = undefined;
      this._sampleData = undefined;
      this._sampling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._dimensions = value.dimensions;
      this._enabled = value.enabled;
      this._field = value.field;
      this._id = value.id;
      this._matcher = value.matcher;
      this._measurement = value.measurement;
      this._metricKey = value.metricKey;
      this._sampleData = value.sampleData;
      this._sampling = value.sampling;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
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
}
export interface OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dimensions OpenpipelineLogs#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field to extract the value for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#metric_key OpenpipelineLogs#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    field: cdktf.stringToTerraform(struct!.field),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._dimensions = undefined;
      this._enabled = undefined;
      this._field = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._metricKey = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._dimensions = value.dimensions;
      this._enabled = value.enabled;
      this._field = value.field;
      this._id = value.id;
      this._matcher = value.matcher;
      this._metricKey = value.metricKey;
      this._sampleData = value.sampleData;
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

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
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
}
export interface OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor {
  /**
  * counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#counter_metric_extraction_processor OpenpipelineLogs#counter_metric_extraction_processor}
  */
  readonly counterMetricExtractionProcessor?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor;
  /**
  * sampling_aware_counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sampling_aware_counter_metric_extraction_processor OpenpipelineLogs#sampling_aware_counter_metric_extraction_processor}
  */
  readonly samplingAwareCounterMetricExtractionProcessor?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor;
  /**
  * sampling_aware_value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sampling_aware_value_metric_extraction_processor OpenpipelineLogs#sampling_aware_value_metric_extraction_processor}
  */
  readonly samplingAwareValueMetricExtractionProcessor?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor;
  /**
  * value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value_metric_extraction_processor OpenpipelineLogs#value_metric_extraction_processor}
  */
  readonly valueMetricExtractionProcessor?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor;
}

export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_metric_extraction_processor: openpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct!.counterMetricExtractionProcessor),
    sampling_aware_counter_metric_extraction_processor: openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
    sampling_aware_value_metric_extraction_processor: openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
    value_metric_extraction_processor: openpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct!.valueMetricExtractionProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_metric_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct!.counterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorList",
    },
    sampling_aware_counter_metric_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorList",
    },
    sampling_aware_value_metric_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorList",
    },
    value_metric_extraction_processor: {
      value: openpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct!.valueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterMetricExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterMetricExtractionProcessor = this._counterMetricExtractionProcessor?.internalValue;
    }
    if (this._samplingAwareCounterMetricExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareCounterMetricExtractionProcessor = this._samplingAwareCounterMetricExtractionProcessor?.internalValue;
    }
    if (this._samplingAwareValueMetricExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingAwareValueMetricExtractionProcessor = this._samplingAwareValueMetricExtractionProcessor?.internalValue;
    }
    if (this._valueMetricExtractionProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMetricExtractionProcessor = this._valueMetricExtractionProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counterMetricExtractionProcessor.internalValue = undefined;
      this._samplingAwareCounterMetricExtractionProcessor.internalValue = undefined;
      this._samplingAwareValueMetricExtractionProcessor.internalValue = undefined;
      this._valueMetricExtractionProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counterMetricExtractionProcessor.internalValue = value.counterMetricExtractionProcessor;
      this._samplingAwareCounterMetricExtractionProcessor.internalValue = value.samplingAwareCounterMetricExtractionProcessor;
      this._samplingAwareValueMetricExtractionProcessor.internalValue = value.samplingAwareValueMetricExtractionProcessor;
      this._valueMetricExtractionProcessor.internalValue = value.valueMetricExtractionProcessor;
    }
  }

  // counter_metric_extraction_processor - computed: false, optional: true, required: false
  private _counterMetricExtractionProcessor = new OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference(this, "counter_metric_extraction_processor");
  public get counterMetricExtractionProcessor() {
    return this._counterMetricExtractionProcessor;
  }
  public putCounterMetricExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor) {
    this._counterMetricExtractionProcessor.internalValue = value;
  }
  public resetCounterMetricExtractionProcessor() {
    this._counterMetricExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterMetricExtractionProcessorInput() {
    return this._counterMetricExtractionProcessor.internalValue;
  }

  // sampling_aware_counter_metric_extraction_processor - computed: false, optional: true, required: false
  private _samplingAwareCounterMetricExtractionProcessor = new OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference(this, "sampling_aware_counter_metric_extraction_processor");
  public get samplingAwareCounterMetricExtractionProcessor() {
    return this._samplingAwareCounterMetricExtractionProcessor;
  }
  public putSamplingAwareCounterMetricExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor) {
    this._samplingAwareCounterMetricExtractionProcessor.internalValue = value;
  }
  public resetSamplingAwareCounterMetricExtractionProcessor() {
    this._samplingAwareCounterMetricExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareCounterMetricExtractionProcessorInput() {
    return this._samplingAwareCounterMetricExtractionProcessor.internalValue;
  }

  // sampling_aware_value_metric_extraction_processor - computed: false, optional: true, required: false
  private _samplingAwareValueMetricExtractionProcessor = new OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference(this, "sampling_aware_value_metric_extraction_processor");
  public get samplingAwareValueMetricExtractionProcessor() {
    return this._samplingAwareValueMetricExtractionProcessor;
  }
  public putSamplingAwareValueMetricExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor) {
    this._samplingAwareValueMetricExtractionProcessor.internalValue = value;
  }
  public resetSamplingAwareValueMetricExtractionProcessor() {
    this._samplingAwareValueMetricExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingAwareValueMetricExtractionProcessorInput() {
    return this._samplingAwareValueMetricExtractionProcessor.internalValue;
  }

  // value_metric_extraction_processor - computed: false, optional: true, required: false
  private _valueMetricExtractionProcessor = new OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference(this, "value_metric_extraction_processor");
  public get valueMetricExtractionProcessor() {
    return this._valueMetricExtractionProcessor;
  }
  public putValueMetricExtractionProcessor(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor) {
    this._valueMetricExtractionProcessor.internalValue = value;
  }
  public resetValueMetricExtractionProcessor() {
    this._valueMetricExtractionProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMetricExtractionProcessorInput() {
    return this._valueMetricExtractionProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineMetricExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineMetricExtractionToTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineMetricExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineMetricExtractionToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineLogsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineMetricExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineMetricExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineMetricExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineMetricExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineMetricExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dql_script OpenpipelineLogs#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dql_script: cdktf.stringToTerraform(struct!.dqlScript),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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
    dql_script: {
      value: cdktf.stringToHclTerraform(struct!.dqlScript),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dqlScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlScript = this._dqlScript;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._dqlScript = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._dqlScript = value.dqlScript;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // dql_script - computed: false, optional: false, required: true
  private _dqlScript?: string; 
  public get dqlScript() {
    return this.getStringAttribute('dql_script');
  }
  public set dqlScript(value: string) {
    this._dqlScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlScriptInput() {
    return this._dqlScript;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor): any {
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
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#name OpenpipelineLogs#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value OpenpipelineLogs#value}
  */
  readonly value: string;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
    field: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined {
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
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._field.internalValue = value.field;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // field - computed: false, optional: false, required: true
  private _field = new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields OpenpipelineLogs#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined {
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
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._fields = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._fields = value.fields;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // fields - computed: false, optional: false, required: true
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#from_name OpenpipelineLogs#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#to_name OpenpipelineLogs#to_name}
  */
  readonly toName: string;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
    field: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined {
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
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._field.internalValue = value.field;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // field - computed: false, optional: false, required: true
  private _field = new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#custom_matcher OpenpipelineLogs#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#technology_id OpenpipelineLogs#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_matcher: cdktf.stringToTerraform(struct!.customMatcher),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
    technology_id: cdktf.stringToTerraform(struct!.technologyId),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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
    sample_data: {
      value: cdktf.stringToHclTerraform(struct!.sampleData),
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

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMatcher = this._customMatcher;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sampleData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleData = this._sampleData;
    }
    if (this._technologyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyId = this._technologyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customMatcher = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._sampleData = undefined;
      this._technologyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customMatcher = value.customMatcher;
      this._enabled = value.enabled;
      this._id = value.id;
      this._sampleData = value.sampleData;
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
export interface OpenpipelineLogsPipelinesPipelineProcessingProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#dql_processor OpenpipelineLogs#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#drop_processor OpenpipelineLogs#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields_add_processor OpenpipelineLogs#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields_remove_processor OpenpipelineLogs#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#fields_rename_processor OpenpipelineLogs#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#technology_processor OpenpipelineLogs#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor;
}

export function openpipelineLogsPipelinesPipelineProcessingProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dqlProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlProcessor = this._dqlProcessor?.internalValue;
    }
    if (this._dropProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropProcessor = this._dropProcessor?.internalValue;
    }
    if (this._fieldsAddProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsAddProcessor = this._fieldsAddProcessor?.internalValue;
    }
    if (this._fieldsRemoveProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRemoveProcessor = this._fieldsRemoveProcessor?.internalValue;
    }
    if (this._fieldsRenameProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsRenameProcessor = this._fieldsRenameProcessor?.internalValue;
    }
    if (this._technologyProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.technologyProcessor = this._technologyProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dqlProcessor.internalValue = undefined;
      this._dropProcessor.internalValue = undefined;
      this._fieldsAddProcessor.internalValue = undefined;
      this._fieldsRemoveProcessor.internalValue = undefined;
      this._fieldsRenameProcessor.internalValue = undefined;
      this._technologyProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dqlProcessor.internalValue = value.dqlProcessor;
      this._dropProcessor.internalValue = value.dropProcessor;
      this._fieldsAddProcessor.internalValue = value.fieldsAddProcessor;
      this._fieldsRemoveProcessor.internalValue = value.fieldsRemoveProcessor;
      this._fieldsRenameProcessor.internalValue = value.fieldsRenameProcessor;
      this._technologyProcessor.internalValue = value.technologyProcessor;
    }
  }

  // dql_processor - computed: false, optional: true, required: false
  private _dqlProcessor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorDqlProcessor) {
    this._dqlProcessor.internalValue = value;
  }
  public resetDqlProcessor() {
    this._dqlProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlProcessorInput() {
    return this._dqlProcessor.internalValue;
  }

  // drop_processor - computed: false, optional: true, required: false
  private _dropProcessor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorDropProcessor) {
    this._dropProcessor.internalValue = value;
  }
  public resetDropProcessor() {
    this._dropProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropProcessorInput() {
    return this._dropProcessor.internalValue;
  }

  // fields_add_processor - computed: false, optional: true, required: false
  private _fieldsAddProcessor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsAddProcessor) {
    this._fieldsAddProcessor.internalValue = value;
  }
  public resetFieldsAddProcessor() {
    this._fieldsAddProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsAddProcessorInput() {
    return this._fieldsAddProcessor.internalValue;
  }

  // fields_remove_processor - computed: false, optional: true, required: false
  private _fieldsRemoveProcessor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor) {
    this._fieldsRemoveProcessor.internalValue = value;
  }
  public resetFieldsRemoveProcessor() {
    this._fieldsRemoveProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRemoveProcessorInput() {
    return this._fieldsRemoveProcessor.internalValue;
  }

  // fields_rename_processor - computed: false, optional: true, required: false
  private _fieldsRenameProcessor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorFieldsRenameProcessor) {
    this._fieldsRenameProcessor.internalValue = value;
  }
  public resetFieldsRenameProcessor() {
    this._fieldsRenameProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsRenameProcessorInput() {
    return this._fieldsRenameProcessor.internalValue;
  }

  // technology_processor - computed: false, optional: true, required: false
  private _technologyProcessor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessorTechnologyProcessor) {
    this._technologyProcessor.internalValue = value;
  }
  public resetTechnologyProcessor() {
    this._technologyProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyProcessorInput() {
    return this._technologyProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineProcessingProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineProcessingProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineProcessingProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineProcessing {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineProcessingToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingOutputReference | OpenpipelineLogsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineProcessingProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineProcessingToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProcessingOutputReference | OpenpipelineLogsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineProcessingProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineProcessingProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#constant OpenpipelineLogs#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#multi_value_constant OpenpipelineLogs#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#type OpenpipelineLogs#type}
  */
  readonly type: string;
}

export function openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    field: cdktf.stringToTerraform(struct!.field),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._field = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._field = value.field;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
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
}
export interface OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value OpenpipelineLogs#value}
  */
  readonly value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue;
}

export function openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
    value: openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
    value: {
      value: openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined {
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
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._value.internalValue = value.value;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineProductAllocationProcessor {
  /**
  * product_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#product_allocation_processor OpenpipelineLogs#product_allocation_processor}
  */
  readonly productAllocationProcessor?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor;
}

export function openpipelineLogsPipelinesPipelineProductAllocationProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_allocation_processor: openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct!.productAllocationProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineProductAllocationProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_allocation_processor: {
      value: openpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct!.productAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._productAllocationProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productAllocationProcessor = this._productAllocationProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._productAllocationProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._productAllocationProcessor.internalValue = value.productAllocationProcessor;
    }
  }

  // product_allocation_processor - computed: false, optional: true, required: false
  private _productAllocationProcessor = new OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference(this, "product_allocation_processor");
  public get productAllocationProcessor() {
    return this._productAllocationProcessor;
  }
  public putProductAllocationProcessor(value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor) {
    this._productAllocationProcessor.internalValue = value;
  }
  public resetProductAllocationProcessor() {
    this._productAllocationProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationProcessorInput() {
    return this._productAllocationProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineProductAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineProductAllocationProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineProductAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineProductAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineProductAllocationToTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationOutputReference | OpenpipelineLogsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineProductAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineProductAllocationToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineProductAllocationOutputReference | OpenpipelineLogsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineProductAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineProductAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineProductAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#constant OpenpipelineLogs#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#field OpenpipelineLogs#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#multi_value_constant OpenpipelineLogs#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#type OpenpipelineLogs#type}
  */
  readonly type: string;
}

export function openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    field: cdktf.stringToTerraform(struct!.field),
    multi_value_constant: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.multiValueConstant),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._multiValueConstant !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValueConstant = this._multiValueConstant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._field = undefined;
      this._multiValueConstant = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._field = value.field;
      this._multiValueConstant = value.multiValueConstant;
      this._type = value.type;
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
}
export interface OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#value OpenpipelineLogs#value}
  */
  readonly value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue;
}

export function openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
    value: openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
    value: {
      value: openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined {
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
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
      this._value.internalValue = value.value;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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

  // value - computed: false, optional: false, required: true
  private _value = new OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineSecurityContextProcessor {
  /**
  * security_context_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#security_context_processor OpenpipelineLogs#security_context_processor}
  */
  readonly securityContextProcessor?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor;
}

export function openpipelineLogsPipelinesPipelineSecurityContextProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_context_processor: openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct!.securityContextProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineSecurityContextProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_context_processor: {
      value: openpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct!.securityContextProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityContextProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContextProcessor = this._securityContextProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityContextProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityContextProcessor.internalValue = value.securityContextProcessor;
    }
  }

  // security_context_processor - computed: false, optional: true, required: false
  private _securityContextProcessor = new OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference(this, "security_context_processor");
  public get securityContextProcessor() {
    return this._securityContextProcessor;
  }
  public putSecurityContextProcessor(value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor) {
    this._securityContextProcessor.internalValue = value;
  }
  public resetSecurityContextProcessor() {
    this._securityContextProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextProcessorInput() {
    return this._securityContextProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineSecurityContextProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineSecurityContextProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineSecurityContextProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineSecurityContext {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineSecurityContextToTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextOutputReference | OpenpipelineLogsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineSecurityContextProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineSecurityContextToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineSecurityContextOutputReference | OpenpipelineLogsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineSecurityContextProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._processor.internalValue = value.processor;
    }
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineSecurityContextProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor {
  /**
  * Bucket that is assigned when the record is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#bucket_name OpenpipelineLogs#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    sample_data: cdktf.stringToTerraform(struct!.sampleData),
  }
}


export function openpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#description OpenpipelineLogs#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#sample_data OpenpipelineLogs#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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
  }
}


export function openpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._matcher = undefined;
      this._sampleData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._matcher = value.matcher;
      this._sampleData = value.sampleData;
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
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
}
export interface OpenpipelineLogsPipelinesPipelineStorageProcessor {
  /**
  * bucket_assignment_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#bucket_assignment_processor OpenpipelineLogs#bucket_assignment_processor}
  */
  readonly bucketAssignmentProcessor?: OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor;
  /**
  * no_storage_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#no_storage_processor OpenpipelineLogs#no_storage_processor}
  */
  readonly noStorageProcessor?: OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor;
}

export function openpipelineLogsPipelinesPipelineStorageProcessorToTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_assignment_processor: openpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct!.bucketAssignmentProcessor),
    no_storage_processor: openpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct!.noStorageProcessor),
  }
}


export function openpipelineLogsPipelinesPipelineStorageProcessorToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_assignment_processor: {
      value: openpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct!.bucketAssignmentProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorList",
    },
    no_storage_processor: {
      value: openpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct!.noStorageProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineStorageProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketAssignmentProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketAssignmentProcessor = this._bucketAssignmentProcessor?.internalValue;
    }
    if (this._noStorageProcessor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStorageProcessor = this._noStorageProcessor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketAssignmentProcessor.internalValue = undefined;
      this._noStorageProcessor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketAssignmentProcessor.internalValue = value.bucketAssignmentProcessor;
      this._noStorageProcessor.internalValue = value.noStorageProcessor;
    }
  }

  // bucket_assignment_processor - computed: false, optional: true, required: false
  private _bucketAssignmentProcessor = new OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference(this, "bucket_assignment_processor");
  public get bucketAssignmentProcessor() {
    return this._bucketAssignmentProcessor;
  }
  public putBucketAssignmentProcessor(value: OpenpipelineLogsPipelinesPipelineStorageProcessorBucketAssignmentProcessor) {
    this._bucketAssignmentProcessor.internalValue = value;
  }
  public resetBucketAssignmentProcessor() {
    this._bucketAssignmentProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketAssignmentProcessorInput() {
    return this._bucketAssignmentProcessor.internalValue;
  }

  // no_storage_processor - computed: false, optional: true, required: false
  private _noStorageProcessor = new OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference(this, "no_storage_processor");
  public get noStorageProcessor() {
    return this._noStorageProcessor;
  }
  public putNoStorageProcessor(value: OpenpipelineLogsPipelinesPipelineStorageProcessorNoStorageProcessor) {
    this._noStorageProcessor.internalValue = value;
  }
  public resetNoStorageProcessor() {
    this._noStorageProcessor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStorageProcessorInput() {
    return this._noStorageProcessor.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineStorageProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineStorageProcessorOutputReference {
    return new OpenpipelineLogsPipelinesPipelineStorageProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelinesPipelineStorage {
  /**
  * Default bucket assigned to records which do not match any other storage processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#catch_all_bucket_name OpenpipelineLogs#catch_all_bucket_name}
  */
  readonly catchAllBucketName?: string;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processor OpenpipelineLogs#processor}
  */
  readonly processor?: OpenpipelineLogsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesPipelineStorageToTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageOutputReference | OpenpipelineLogsPipelinesPipelineStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch_all_bucket_name: cdktf.stringToTerraform(struct!.catchAllBucketName),
    processor: cdktf.listMapper(openpipelineLogsPipelinesPipelineStorageProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineLogsPipelinesPipelineStorageToHclTerraform(struct?: OpenpipelineLogsPipelinesPipelineStorageOutputReference | OpenpipelineLogsPipelinesPipelineStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catch_all_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.catchAllBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processor: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineStorageProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelinesPipelineStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catchAllBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catchAllBucketName = this._catchAllBucketName;
    }
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipelineStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catchAllBucketName = undefined;
      this._processor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catchAllBucketName = value.catchAllBucketName;
      this._processor.internalValue = value.processor;
    }
  }

  // catch_all_bucket_name - computed: false, optional: true, required: false
  private _catchAllBucketName?: string; 
  public get catchAllBucketName() {
    return this.getStringAttribute('catch_all_bucket_name');
  }
  public set catchAllBucketName(value: string) {
    this._catchAllBucketName = value;
  }
  public resetCatchAllBucketName() {
    this._catchAllBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catchAllBucketNameInput() {
    return this._catchAllBucketName;
  }

  // processor - computed: false, optional: true, required: false
  private _processor = new OpenpipelineLogsPipelinesPipelineStorageProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineLogsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable) {
    this._processor.internalValue = value;
  }
  public resetProcessor() {
    this._processor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor.internalValue;
  }
}
export interface OpenpipelineLogsPipelinesPipeline {
  /**
  * Display name of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#display_name OpenpipelineLogs#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#id OpenpipelineLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#cost_allocation OpenpipelineLogs#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineLogsPipelinesPipelineCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#data_extraction OpenpipelineLogs#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineLogsPipelinesPipelineDataExtraction;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#metric_extraction OpenpipelineLogs#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineLogsPipelinesPipelineMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#processing OpenpipelineLogs#processing}
  */
  readonly processing?: OpenpipelineLogsPipelinesPipelineProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#product_allocation OpenpipelineLogs#product_allocation}
  */
  readonly productAllocation?: OpenpipelineLogsPipelinesPipelineProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#security_context OpenpipelineLogs#security_context}
  */
  readonly securityContext?: OpenpipelineLogsPipelinesPipelineSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#storage OpenpipelineLogs#storage}
  */
  readonly storage?: OpenpipelineLogsPipelinesPipelineStorage;
}

export function openpipelineLogsPipelinesPipelineToTerraform(struct?: OpenpipelineLogsPipelinesPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    cost_allocation: openpipelineLogsPipelinesPipelineCostAllocationToTerraform(struct!.costAllocation),
    data_extraction: openpipelineLogsPipelinesPipelineDataExtractionToTerraform(struct!.dataExtraction),
    metric_extraction: openpipelineLogsPipelinesPipelineMetricExtractionToTerraform(struct!.metricExtraction),
    processing: openpipelineLogsPipelinesPipelineProcessingToTerraform(struct!.processing),
    product_allocation: openpipelineLogsPipelinesPipelineProductAllocationToTerraform(struct!.productAllocation),
    security_context: openpipelineLogsPipelinesPipelineSecurityContextToTerraform(struct!.securityContext),
    storage: openpipelineLogsPipelinesPipelineStorageToTerraform(struct!.storage),
  }
}


export function openpipelineLogsPipelinesPipelineToHclTerraform(struct?: OpenpipelineLogsPipelinesPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    cost_allocation: {
      value: openpipelineLogsPipelinesPipelineCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineCostAllocationList",
    },
    data_extraction: {
      value: openpipelineLogsPipelinesPipelineDataExtractionToHclTerraform(struct!.dataExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineDataExtractionList",
    },
    metric_extraction: {
      value: openpipelineLogsPipelinesPipelineMetricExtractionToHclTerraform(struct!.metricExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineMetricExtractionList",
    },
    processing: {
      value: openpipelineLogsPipelinesPipelineProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProcessingList",
    },
    product_allocation: {
      value: openpipelineLogsPipelinesPipelineProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineProductAllocationList",
    },
    security_context: {
      value: openpipelineLogsPipelinesPipelineSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineSecurityContextList",
    },
    storage: {
      value: openpipelineLogsPipelinesPipelineStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsPipelinesPipeline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._costAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAllocation = this._costAllocation?.internalValue;
    }
    if (this._dataExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataExtraction = this._dataExtraction?.internalValue;
    }
    if (this._metricExtraction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricExtraction = this._metricExtraction?.internalValue;
    }
    if (this._processing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processing = this._processing?.internalValue;
    }
    if (this._productAllocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.productAllocation = this._productAllocation?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelinesPipeline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._costAllocation.internalValue = undefined;
      this._dataExtraction.internalValue = undefined;
      this._metricExtraction.internalValue = undefined;
      this._processing.internalValue = undefined;
      this._productAllocation.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._enabled = value.enabled;
      this._id = value.id;
      this._costAllocation.internalValue = value.costAllocation;
      this._dataExtraction.internalValue = value.dataExtraction;
      this._metricExtraction.internalValue = value.metricExtraction;
      this._processing.internalValue = value.processing;
      this._productAllocation.internalValue = value.productAllocation;
      this._securityContext.internalValue = value.securityContext;
      this._storage.internalValue = value.storage;
    }
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

  // cost_allocation - computed: false, optional: true, required: false
  private _costAllocation = new OpenpipelineLogsPipelinesPipelineCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineLogsPipelinesPipelineCostAllocation) {
    this._costAllocation.internalValue = value;
  }
  public resetCostAllocation() {
    this._costAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costAllocationInput() {
    return this._costAllocation.internalValue;
  }

  // data_extraction - computed: false, optional: true, required: false
  private _dataExtraction = new OpenpipelineLogsPipelinesPipelineDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineLogsPipelinesPipelineDataExtraction) {
    this._dataExtraction.internalValue = value;
  }
  public resetDataExtraction() {
    this._dataExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExtractionInput() {
    return this._dataExtraction.internalValue;
  }

  // metric_extraction - computed: false, optional: true, required: false
  private _metricExtraction = new OpenpipelineLogsPipelinesPipelineMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineLogsPipelinesPipelineMetricExtraction) {
    this._metricExtraction.internalValue = value;
  }
  public resetMetricExtraction() {
    this._metricExtraction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtractionInput() {
    return this._metricExtraction.internalValue;
  }

  // processing - computed: false, optional: true, required: false
  private _processing = new OpenpipelineLogsPipelinesPipelineProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineLogsPipelinesPipelineProcessing) {
    this._processing.internalValue = value;
  }
  public resetProcessing() {
    this._processing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingInput() {
    return this._processing.internalValue;
  }

  // product_allocation - computed: false, optional: true, required: false
  private _productAllocation = new OpenpipelineLogsPipelinesPipelineProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineLogsPipelinesPipelineProductAllocation) {
    this._productAllocation.internalValue = value;
  }
  public resetProductAllocation() {
    this._productAllocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productAllocationInput() {
    return this._productAllocation.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new OpenpipelineLogsPipelinesPipelineSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineLogsPipelinesPipelineSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new OpenpipelineLogsPipelinesPipelineStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineLogsPipelinesPipelineStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

export class OpenpipelineLogsPipelinesPipelineList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsPipelinesPipeline[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsPipelinesPipelineOutputReference {
    return new OpenpipelineLogsPipelinesPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsPipelines {
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#pipeline OpenpipelineLogs#pipeline}
  */
  readonly pipeline?: OpenpipelineLogsPipelinesPipeline[] | cdktf.IResolvable;
}

export function openpipelineLogsPipelinesToTerraform(struct?: OpenpipelineLogsPipelinesOutputReference | OpenpipelineLogsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline: cdktf.listMapper(openpipelineLogsPipelinesPipelineToTerraform, true)(struct!.pipeline),
  }
}


export function openpipelineLogsPipelinesToHclTerraform(struct?: OpenpipelineLogsPipelinesOutputReference | OpenpipelineLogsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline: {
      value: cdktf.listMapperHcl(openpipelineLogsPipelinesPipelineToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsPipelinesPipelineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsPipelinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsPipelines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsPipelines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipeline.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipeline.internalValue = value.pipeline;
    }
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline = new OpenpipelineLogsPipelinesPipelineList(this, "pipeline", false);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: OpenpipelineLogsPipelinesPipeline[] | cdktf.IResolvable) {
    this._pipeline.internalValue = value;
  }
  public resetPipeline() {
    this._pipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }
}
export interface OpenpipelineLogsRoutingEntry {
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#enabled OpenpipelineLogs#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#matcher OpenpipelineLogs#matcher}
  */
  readonly matcher: string;
  /**
  * Unique note describing the dynamic route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#note OpenpipelineLogs#note}
  */
  readonly note: string;
  /**
  * Identifier of the pipeline the record is routed into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#pipeline_id OpenpipelineLogs#pipeline_id}
  */
  readonly pipelineId: string;
}

export function openpipelineLogsRoutingEntryToTerraform(struct?: OpenpipelineLogsRoutingEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    note: cdktf.stringToTerraform(struct!.note),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
  }
}


export function openpipelineLogsRoutingEntryToHclTerraform(struct?: OpenpipelineLogsRoutingEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    note: {
      value: cdktf.stringToHclTerraform(struct!.note),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsRoutingEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineLogsRoutingEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._note !== undefined) {
      hasAnyValues = true;
      internalValueResult.note = this._note;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsRoutingEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._matcher = undefined;
      this._note = undefined;
      this._pipelineId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._matcher = value.matcher;
      this._note = value.note;
      this._pipelineId = value.pipelineId;
    }
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

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // note - computed: false, optional: false, required: true
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }
}

export class OpenpipelineLogsRoutingEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineLogsRoutingEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineLogsRoutingEntryOutputReference {
    return new OpenpipelineLogsRoutingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineLogsRouting {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#entry OpenpipelineLogs#entry}
  */
  readonly entry?: OpenpipelineLogsRoutingEntry[] | cdktf.IResolvable;
}

export function openpipelineLogsRoutingToTerraform(struct?: OpenpipelineLogsRoutingOutputReference | OpenpipelineLogsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.listMapper(openpipelineLogsRoutingEntryToTerraform, true)(struct!.entry),
  }
}


export function openpipelineLogsRoutingToHclTerraform(struct?: OpenpipelineLogsRoutingOutputReference | OpenpipelineLogsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.listMapperHcl(openpipelineLogsRoutingEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineLogsRoutingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineLogsRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineLogsRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineLogsRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entry.internalValue = value.entry;
    }
  }

  // entry - computed: false, optional: true, required: false
  private _entry = new OpenpipelineLogsRoutingEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: OpenpipelineLogsRoutingEntry[] | cdktf.IResolvable) {
    this._entry.internalValue = value;
  }
  public resetEntry() {
    this._entry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs dynatrace_openpipeline_logs}
*/
export class OpenpipelineLogs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineLogs to import
  * @param importFromId The id of the existing OpenpipelineLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_logs dynatrace_openpipeline_logs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineLogsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineLogsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_logs',
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
    this._id = config.id;
    this._endpoints.internalValue = config.endpoints;
    this._pipelines.internalValue = config.pipelines;
    this._routing.internalValue = config.routing;
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

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new OpenpipelineLogsEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: OpenpipelineLogsEndpoints) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // pipelines - computed: false, optional: true, required: false
  private _pipelines = new OpenpipelineLogsPipelinesOutputReference(this, "pipelines");
  public get pipelines() {
    return this._pipelines;
  }
  public putPipelines(value: OpenpipelineLogsPipelines) {
    this._pipelines.internalValue = value;
  }
  public resetPipelines() {
    this._pipelines.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelinesInput() {
    return this._pipelines.internalValue;
  }

  // routing - computed: false, optional: true, required: false
  private _routing = new OpenpipelineLogsRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineLogsRouting) {
    this._routing.internalValue = value;
  }
  public resetRouting() {
    this._routing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      endpoints: openpipelineLogsEndpointsToTerraform(this._endpoints.internalValue),
      pipelines: openpipelineLogsPipelinesToTerraform(this._pipelines.internalValue),
      routing: openpipelineLogsRoutingToTerraform(this._routing.internalValue),
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
      endpoints: {
        value: openpipelineLogsEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineLogsEndpointsList",
      },
      pipelines: {
        value: openpipelineLogsPipelinesToHclTerraform(this._pipelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineLogsPipelinesList",
      },
      routing: {
        value: openpipelineLogsRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineLogsRoutingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
