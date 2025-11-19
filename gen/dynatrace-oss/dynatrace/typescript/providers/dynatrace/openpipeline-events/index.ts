// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#endpoints OpenpipelineEvents#endpoints}
  */
  readonly endpoints?: OpenpipelineEventsEndpoints;
  /**
  * pipelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#pipelines OpenpipelineEvents#pipelines}
  */
  readonly pipelines?: OpenpipelineEventsPipelines;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#routing OpenpipelineEvents#routing}
  */
  readonly routing?: OpenpipelineEventsRouting;
}
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dql_script OpenpipelineEvents#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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


export function openpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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


export function openpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor | undefined) {
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
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#name OpenpipelineEvents#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value OpenpipelineEvents#value}
  */
  readonly value: string;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields OpenpipelineEvents#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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


export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#from_name OpenpipelineEvents#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#to_name OpenpipelineEvents#to_name}
  */
  readonly toName: string;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#custom_matcher OpenpipelineEvents#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#technology_id OpenpipelineEvents#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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


export function openpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineEventsEndpointsEndpointProcessorsProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dql_processor OpenpipelineEvents#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#drop_processor OpenpipelineEvents#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields_add_processor OpenpipelineEvents#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields_remove_processor OpenpipelineEvents#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields_rename_processor OpenpipelineEvents#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#technology_processor OpenpipelineEvents#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor;
}

export function openpipelineEventsEndpointsEndpointProcessorsProcessorToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineEventsEndpointsEndpointProcessorsProcessorToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor) {
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

export class OpenpipelineEventsEndpointsEndpointProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsEndpointsEndpointProcessorsProcessorOutputReference {
    return new OpenpipelineEventsEndpointsEndpointProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsEndpointsEndpointProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsEndpointsEndpointProcessorsToTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsOutputReference | OpenpipelineEventsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsEndpointsEndpointProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsEndpointsEndpointProcessorsToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointProcessorsOutputReference | OpenpipelineEventsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsEndpointsEndpointProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsEndpointsEndpointProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointProcessors | undefined) {
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
  private _processor = new OpenpipelineEventsEndpointsEndpointProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsEndpointsEndpointRouting {
  /**
  * Pipeline ID of the static routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#pipeline_id OpenpipelineEvents#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Type of routing, static or dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#type OpenpipelineEvents#type}
  */
  readonly type: string;
}

export function openpipelineEventsEndpointsEndpointRoutingToTerraform(struct?: OpenpipelineEventsEndpointsEndpointRoutingOutputReference | OpenpipelineEventsEndpointsEndpointRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineEventsEndpointsEndpointRoutingToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpointRoutingOutputReference | OpenpipelineEventsEndpointsEndpointRouting): any {
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

export class OpenpipelineEventsEndpointsEndpointRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpointsEndpointRouting | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpointRouting | undefined) {
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
export interface OpenpipelineEventsEndpointsEndpoint {
  /**
  * The default bucket assigned to records for the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#default_bucket OpenpipelineEvents#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * Display name of the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#display_name OpenpipelineEvents#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The segment of the ingest source, which is applied to the base path. Must be unique within a configuration."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#segment OpenpipelineEvents#segment}
  */
  readonly segment: string;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processors OpenpipelineEvents#processors}
  */
  readonly processors?: OpenpipelineEventsEndpointsEndpointProcessors;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#routing OpenpipelineEvents#routing}
  */
  readonly routing: OpenpipelineEventsEndpointsEndpointRouting;
}

export function openpipelineEventsEndpointsEndpointToTerraform(struct?: OpenpipelineEventsEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bucket: cdktf.stringToTerraform(struct!.defaultBucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    segment: cdktf.stringToTerraform(struct!.segment),
    processors: openpipelineEventsEndpointsEndpointProcessorsToTerraform(struct!.processors),
    routing: openpipelineEventsEndpointsEndpointRoutingToTerraform(struct!.routing),
  }
}


export function openpipelineEventsEndpointsEndpointToHclTerraform(struct?: OpenpipelineEventsEndpointsEndpoint | cdktf.IResolvable): any {
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
      value: openpipelineEventsEndpointsEndpointProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointProcessorsList",
    },
    routing: {
      value: openpipelineEventsEndpointsEndpointRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsEndpointsEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsEndpointsEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsEndpointsEndpoint | cdktf.IResolvable | undefined) {
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
  private _processors = new OpenpipelineEventsEndpointsEndpointProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineEventsEndpointsEndpointProcessors) {
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
  private _routing = new OpenpipelineEventsEndpointsEndpointRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineEventsEndpointsEndpointRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class OpenpipelineEventsEndpointsEndpointList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsEndpointsEndpoint[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsEndpointsEndpointOutputReference {
    return new OpenpipelineEventsEndpointsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsEndpoints {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#endpoint OpenpipelineEvents#endpoint}
  */
  readonly endpoint?: OpenpipelineEventsEndpointsEndpoint[] | cdktf.IResolvable;
}

export function openpipelineEventsEndpointsToTerraform(struct?: OpenpipelineEventsEndpointsOutputReference | OpenpipelineEventsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.listMapper(openpipelineEventsEndpointsEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function openpipelineEventsEndpointsToHclTerraform(struct?: OpenpipelineEventsEndpointsOutputReference | OpenpipelineEventsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.listMapperHcl(openpipelineEventsEndpointsEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsEndpointsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsEndpoints | undefined) {
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
  private _endpoint = new OpenpipelineEventsEndpointsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: OpenpipelineEventsEndpointsEndpoint[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#constant OpenpipelineEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#multi_value_constant OpenpipelineEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#type OpenpipelineEvents#type}
  */
  readonly type: string;
}

export function openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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


export function openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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

export class OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value OpenpipelineEvents#value}
  */
  readonly value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue;
}

export function openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
    value: openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
      value: openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineEventsPipelinesPipelineCostAllocationProcessor {
  /**
  * cost_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#cost_allocation_processor OpenpipelineEvents#cost_allocation_processor}
  */
  readonly costAllocationProcessor?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor;
}

export function openpipelineEventsPipelinesPipelineCostAllocationProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_allocation_processor: openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct!.costAllocationProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineCostAllocationProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_allocation_processor: {
      value: openpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct!.costAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _costAllocationProcessor = new OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference(this, "cost_allocation_processor");
  public get costAllocationProcessor() {
    return this._costAllocationProcessor;
  }
  public putCostAllocationProcessor(value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineCostAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineCostAllocationProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineCostAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineCostAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineCostAllocationToTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationOutputReference | OpenpipelineEventsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineCostAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineCostAllocationToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineCostAllocationOutputReference | OpenpipelineEventsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineCostAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineCostAllocation | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineCostAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields OpenpipelineEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#semantic OpenpipelineEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#forwarder_config_id OpenpipelineEvents#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field_extraction OpenpipelineEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
    field_extraction: openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#constant OpenpipelineEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#multi_value_constant OpenpipelineEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#type OpenpipelineEvents#type}
  */
  readonly type: string;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#constant OpenpipelineEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#multi_value_constant OpenpipelineEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#type OpenpipelineEvents#type}
  */
  readonly type: string;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields OpenpipelineEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#semantic OpenpipelineEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#event_provider OpenpipelineEvents#event_provider}
  */
  readonly eventProvider: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#event_type OpenpipelineEvents#event_type}
  */
  readonly eventType: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field_extraction OpenpipelineEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
    event_provider: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderList",
    },
    event_type: {
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeList",
    },
    field_extraction: {
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined) {
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
  private _eventProvider = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType) {
    this._eventType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties {
  /**
  * The key to set on the davis event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#key OpenpipelineEvents#key}
  */
  readonly key: string;
  /**
  * The value assigned to the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value OpenpipelineEvents#value}
  */
  readonly value: string;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined) {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference {
    return new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#properties OpenpipelineEvents#properties}
  */
  readonly properties: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
    properties: cdktf.listMapper(openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform, true)(struct!.properties),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined) {
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
  private _properties = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields OpenpipelineEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#semantic OpenpipelineEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field_extraction OpenpipelineEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
    field_extraction: openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineEventsPipelinesPipelineDataExtractionProcessor {
  /**
  * azure_log_forwarding_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#azure_log_forwarding_processor OpenpipelineEvents#azure_log_forwarding_processor}
  */
  readonly azureLogForwardingProcessor?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor;
  /**
  * bizevent_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#bizevent_extraction_processor OpenpipelineEvents#bizevent_extraction_processor}
  */
  readonly bizeventExtractionProcessor?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor;
  /**
  * davis_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#davis_event_extraction_processor OpenpipelineEvents#davis_event_extraction_processor}
  */
  readonly davisEventExtractionProcessor?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor;
  /**
  * security_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#security_event_extraction_processor OpenpipelineEvents#security_event_extraction_processor}
  */
  readonly securityEventExtractionProcessor?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor;
}

export function openpipelineEventsPipelinesPipelineDataExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_log_forwarding_processor: openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct!.azureLogForwardingProcessor),
    bizevent_extraction_processor: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct!.bizeventExtractionProcessor),
    davis_event_extraction_processor: openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct!.davisEventExtractionProcessor),
    security_event_extraction_processor: openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct!.securityEventExtractionProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_log_forwarding_processor: {
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct!.azureLogForwardingProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorList",
    },
    bizevent_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct!.bizeventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorList",
    },
    davis_event_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct!.davisEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorList",
    },
    security_event_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct!.securityEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwardingProcessor = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference(this, "azure_log_forwarding_processor");
  public get azureLogForwardingProcessor() {
    return this._azureLogForwardingProcessor;
  }
  public putAzureLogForwardingProcessor(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor) {
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
  private _bizeventExtractionProcessor = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference(this, "bizevent_extraction_processor");
  public get bizeventExtractionProcessor() {
    return this._bizeventExtractionProcessor;
  }
  public putBizeventExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor) {
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
  private _davisEventExtractionProcessor = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference(this, "davis_event_extraction_processor");
  public get davisEventExtractionProcessor() {
    return this._davisEventExtractionProcessor;
  }
  public putDavisEventExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor) {
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
  private _securityEventExtractionProcessor = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference(this, "security_event_extraction_processor");
  public get securityEventExtractionProcessor() {
    return this._securityEventExtractionProcessor;
  }
  public putSecurityEventExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineDataExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineDataExtractionProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineDataExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineDataExtractionToTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineDataExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineDataExtractionToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineDataExtractionOutputReference | OpenpipelineEventsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineDataExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineDataExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineDataExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineDataExtraction | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineDataExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dimensions OpenpipelineEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#metric_key OpenpipelineEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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


export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#aggregation OpenpipelineEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dimensions OpenpipelineEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#metric_key OpenpipelineEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sampling OpenpipelineEvents#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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


export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#aggregation OpenpipelineEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The default value to use if the given field value could not be extracted. String value must be a number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#default_value OpenpipelineEvents#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dimensions OpenpipelineEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field from which to extract the value for the metric, or 'null' for a duration measurement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field?: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Indicates whether the metric value should be the specified field or duration. Possible values: 'DURATION', 'FIELD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#measurement OpenpipelineEvents#measurement}
  */
  readonly measurement: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#metric_key OpenpipelineEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sampling OpenpipelineEvents#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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


export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dimensions OpenpipelineEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field to extract the value for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#metric_key OpenpipelineEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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


export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor {
  /**
  * counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#counter_metric_extraction_processor OpenpipelineEvents#counter_metric_extraction_processor}
  */
  readonly counterMetricExtractionProcessor?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor;
  /**
  * sampling_aware_counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sampling_aware_counter_metric_extraction_processor OpenpipelineEvents#sampling_aware_counter_metric_extraction_processor}
  */
  readonly samplingAwareCounterMetricExtractionProcessor?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor;
  /**
  * sampling_aware_value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sampling_aware_value_metric_extraction_processor OpenpipelineEvents#sampling_aware_value_metric_extraction_processor}
  */
  readonly samplingAwareValueMetricExtractionProcessor?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor;
  /**
  * value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value_metric_extraction_processor OpenpipelineEvents#value_metric_extraction_processor}
  */
  readonly valueMetricExtractionProcessor?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor;
}

export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_metric_extraction_processor: openpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct!.counterMetricExtractionProcessor),
    sampling_aware_counter_metric_extraction_processor: openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
    sampling_aware_value_metric_extraction_processor: openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
    value_metric_extraction_processor: openpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct!.valueMetricExtractionProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_metric_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct!.counterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorList",
    },
    sampling_aware_counter_metric_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorList",
    },
    sampling_aware_value_metric_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorList",
    },
    value_metric_extraction_processor: {
      value: openpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct!.valueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _counterMetricExtractionProcessor = new OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference(this, "counter_metric_extraction_processor");
  public get counterMetricExtractionProcessor() {
    return this._counterMetricExtractionProcessor;
  }
  public putCounterMetricExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor) {
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
  private _samplingAwareCounterMetricExtractionProcessor = new OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference(this, "sampling_aware_counter_metric_extraction_processor");
  public get samplingAwareCounterMetricExtractionProcessor() {
    return this._samplingAwareCounterMetricExtractionProcessor;
  }
  public putSamplingAwareCounterMetricExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor) {
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
  private _samplingAwareValueMetricExtractionProcessor = new OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference(this, "sampling_aware_value_metric_extraction_processor");
  public get samplingAwareValueMetricExtractionProcessor() {
    return this._samplingAwareValueMetricExtractionProcessor;
  }
  public putSamplingAwareValueMetricExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor) {
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
  private _valueMetricExtractionProcessor = new OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference(this, "value_metric_extraction_processor");
  public get valueMetricExtractionProcessor() {
    return this._valueMetricExtractionProcessor;
  }
  public putValueMetricExtractionProcessor(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineMetricExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineMetricExtractionToTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineMetricExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineMetricExtractionToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineEventsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineMetricExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineMetricExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineMetricExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineMetricExtraction | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineMetricExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dql_script OpenpipelineEvents#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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


export function openpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor): any {
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


export function openpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#name OpenpipelineEvents#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value OpenpipelineEvents#value}
  */
  readonly value: string;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields OpenpipelineEvents#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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


export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#from_name OpenpipelineEvents#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#to_name OpenpipelineEvents#to_name}
  */
  readonly toName: string;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#custom_matcher OpenpipelineEvents#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#technology_id OpenpipelineEvents#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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


export function openpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineProcessingProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#dql_processor OpenpipelineEvents#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#drop_processor OpenpipelineEvents#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields_add_processor OpenpipelineEvents#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields_remove_processor OpenpipelineEvents#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#fields_rename_processor OpenpipelineEvents#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#technology_processor OpenpipelineEvents#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor;
}

export function openpipelineEventsPipelinesPipelineProcessingProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineProcessingProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessorTechnologyProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineProcessingProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineProcessingProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineProcessingProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineProcessing {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineProcessingToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingOutputReference | OpenpipelineEventsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineProcessingProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineProcessingToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProcessingOutputReference | OpenpipelineEventsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineProcessingProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProcessing | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineProcessingProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#constant OpenpipelineEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#multi_value_constant OpenpipelineEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#type OpenpipelineEvents#type}
  */
  readonly type: string;
}

export function openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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


export function openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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

export class OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value OpenpipelineEvents#value}
  */
  readonly value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue;
}

export function openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
    value: openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
      value: openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineEventsPipelinesPipelineProductAllocationProcessor {
  /**
  * product_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#product_allocation_processor OpenpipelineEvents#product_allocation_processor}
  */
  readonly productAllocationProcessor?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor;
}

export function openpipelineEventsPipelinesPipelineProductAllocationProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_allocation_processor: openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct!.productAllocationProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineProductAllocationProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_allocation_processor: {
      value: openpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct!.productAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _productAllocationProcessor = new OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference(this, "product_allocation_processor");
  public get productAllocationProcessor() {
    return this._productAllocationProcessor;
  }
  public putProductAllocationProcessor(value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineProductAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineProductAllocationProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineProductAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineProductAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineProductAllocationToTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationOutputReference | OpenpipelineEventsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineProductAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineProductAllocationToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineProductAllocationOutputReference | OpenpipelineEventsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineProductAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineProductAllocation | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineProductAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#constant OpenpipelineEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#field OpenpipelineEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#multi_value_constant OpenpipelineEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#type OpenpipelineEvents#type}
  */
  readonly type: string;
}

export function openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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


export function openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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

export class OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#value OpenpipelineEvents#value}
  */
  readonly value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue;
}

export function openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
    value: openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
      value: openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined) {
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
  private _value = new OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineEventsPipelinesPipelineSecurityContextProcessor {
  /**
  * security_context_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#security_context_processor OpenpipelineEvents#security_context_processor}
  */
  readonly securityContextProcessor?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor;
}

export function openpipelineEventsPipelinesPipelineSecurityContextProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_context_processor: openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct!.securityContextProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineSecurityContextProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_context_processor: {
      value: openpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct!.securityContextProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined) {
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
  private _securityContextProcessor = new OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference(this, "security_context_processor");
  public get securityContextProcessor() {
    return this._securityContextProcessor;
  }
  public putSecurityContextProcessor(value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineSecurityContextProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineSecurityContextProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineSecurityContextProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineSecurityContext {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineSecurityContextToTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextOutputReference | OpenpipelineEventsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineSecurityContextProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineSecurityContextToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineSecurityContextOutputReference | OpenpipelineEventsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineSecurityContextProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineSecurityContext | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineSecurityContextProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor {
  /**
  * Bucket that is assigned when the record is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#bucket_name OpenpipelineEvents#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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


export function openpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#description OpenpipelineEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#sample_data OpenpipelineEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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


export function openpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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

export class OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined) {
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
export interface OpenpipelineEventsPipelinesPipelineStorageProcessor {
  /**
  * bucket_assignment_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#bucket_assignment_processor OpenpipelineEvents#bucket_assignment_processor}
  */
  readonly bucketAssignmentProcessor?: OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor;
  /**
  * no_storage_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#no_storage_processor OpenpipelineEvents#no_storage_processor}
  */
  readonly noStorageProcessor?: OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor;
}

export function openpipelineEventsPipelinesPipelineStorageProcessorToTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_assignment_processor: openpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct!.bucketAssignmentProcessor),
    no_storage_processor: openpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct!.noStorageProcessor),
  }
}


export function openpipelineEventsPipelinesPipelineStorageProcessorToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_assignment_processor: {
      value: openpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct!.bucketAssignmentProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorList",
    },
    no_storage_processor: {
      value: openpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct!.noStorageProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineStorageProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined) {
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
  private _bucketAssignmentProcessor = new OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference(this, "bucket_assignment_processor");
  public get bucketAssignmentProcessor() {
    return this._bucketAssignmentProcessor;
  }
  public putBucketAssignmentProcessor(value: OpenpipelineEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor) {
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
  private _noStorageProcessor = new OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference(this, "no_storage_processor");
  public get noStorageProcessor() {
    return this._noStorageProcessor;
  }
  public putNoStorageProcessor(value: OpenpipelineEventsPipelinesPipelineStorageProcessorNoStorageProcessor) {
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

export class OpenpipelineEventsPipelinesPipelineStorageProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineStorageProcessorOutputReference {
    return new OpenpipelineEventsPipelinesPipelineStorageProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelinesPipelineStorage {
  /**
  * Default bucket assigned to records which do not match any other storage processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#catch_all_bucket_name OpenpipelineEvents#catch_all_bucket_name}
  */
  readonly catchAllBucketName?: string;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processor OpenpipelineEvents#processor}
  */
  readonly processor?: OpenpipelineEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesPipelineStorageToTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageOutputReference | OpenpipelineEventsPipelinesPipelineStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch_all_bucket_name: cdktf.stringToTerraform(struct!.catchAllBucketName),
    processor: cdktf.listMapper(openpipelineEventsPipelinesPipelineStorageProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineEventsPipelinesPipelineStorageToHclTerraform(struct?: OpenpipelineEventsPipelinesPipelineStorageOutputReference | OpenpipelineEventsPipelinesPipelineStorage): any {
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
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineStorageProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelinesPipelineStorage | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipelineStorage | undefined) {
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
  private _processor = new OpenpipelineEventsPipelinesPipelineStorageProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsPipelinesPipeline {
  /**
  * Display name of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#display_name OpenpipelineEvents#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#id OpenpipelineEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#cost_allocation OpenpipelineEvents#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineEventsPipelinesPipelineCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#data_extraction OpenpipelineEvents#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineEventsPipelinesPipelineDataExtraction;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#metric_extraction OpenpipelineEvents#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineEventsPipelinesPipelineMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#processing OpenpipelineEvents#processing}
  */
  readonly processing?: OpenpipelineEventsPipelinesPipelineProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#product_allocation OpenpipelineEvents#product_allocation}
  */
  readonly productAllocation?: OpenpipelineEventsPipelinesPipelineProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#security_context OpenpipelineEvents#security_context}
  */
  readonly securityContext?: OpenpipelineEventsPipelinesPipelineSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#storage OpenpipelineEvents#storage}
  */
  readonly storage?: OpenpipelineEventsPipelinesPipelineStorage;
}

export function openpipelineEventsPipelinesPipelineToTerraform(struct?: OpenpipelineEventsPipelinesPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    cost_allocation: openpipelineEventsPipelinesPipelineCostAllocationToTerraform(struct!.costAllocation),
    data_extraction: openpipelineEventsPipelinesPipelineDataExtractionToTerraform(struct!.dataExtraction),
    metric_extraction: openpipelineEventsPipelinesPipelineMetricExtractionToTerraform(struct!.metricExtraction),
    processing: openpipelineEventsPipelinesPipelineProcessingToTerraform(struct!.processing),
    product_allocation: openpipelineEventsPipelinesPipelineProductAllocationToTerraform(struct!.productAllocation),
    security_context: openpipelineEventsPipelinesPipelineSecurityContextToTerraform(struct!.securityContext),
    storage: openpipelineEventsPipelinesPipelineStorageToTerraform(struct!.storage),
  }
}


export function openpipelineEventsPipelinesPipelineToHclTerraform(struct?: OpenpipelineEventsPipelinesPipeline | cdktf.IResolvable): any {
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
      value: openpipelineEventsPipelinesPipelineCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineCostAllocationList",
    },
    data_extraction: {
      value: openpipelineEventsPipelinesPipelineDataExtractionToHclTerraform(struct!.dataExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineDataExtractionList",
    },
    metric_extraction: {
      value: openpipelineEventsPipelinesPipelineMetricExtractionToHclTerraform(struct!.metricExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineMetricExtractionList",
    },
    processing: {
      value: openpipelineEventsPipelinesPipelineProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProcessingList",
    },
    product_allocation: {
      value: openpipelineEventsPipelinesPipelineProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineProductAllocationList",
    },
    security_context: {
      value: openpipelineEventsPipelinesPipelineSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineSecurityContextList",
    },
    storage: {
      value: openpipelineEventsPipelinesPipelineStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsPipelinesPipeline | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsPipelinesPipeline | cdktf.IResolvable | undefined) {
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
  private _costAllocation = new OpenpipelineEventsPipelinesPipelineCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineEventsPipelinesPipelineCostAllocation) {
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
  private _dataExtraction = new OpenpipelineEventsPipelinesPipelineDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineEventsPipelinesPipelineDataExtraction) {
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
  private _metricExtraction = new OpenpipelineEventsPipelinesPipelineMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineEventsPipelinesPipelineMetricExtraction) {
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
  private _processing = new OpenpipelineEventsPipelinesPipelineProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineEventsPipelinesPipelineProcessing) {
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
  private _productAllocation = new OpenpipelineEventsPipelinesPipelineProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineEventsPipelinesPipelineProductAllocation) {
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
  private _securityContext = new OpenpipelineEventsPipelinesPipelineSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineEventsPipelinesPipelineSecurityContext) {
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
  private _storage = new OpenpipelineEventsPipelinesPipelineStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineEventsPipelinesPipelineStorage) {
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

export class OpenpipelineEventsPipelinesPipelineList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsPipelinesPipeline[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsPipelinesPipelineOutputReference {
    return new OpenpipelineEventsPipelinesPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsPipelines {
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#pipeline OpenpipelineEvents#pipeline}
  */
  readonly pipeline?: OpenpipelineEventsPipelinesPipeline[] | cdktf.IResolvable;
}

export function openpipelineEventsPipelinesToTerraform(struct?: OpenpipelineEventsPipelinesOutputReference | OpenpipelineEventsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline: cdktf.listMapper(openpipelineEventsPipelinesPipelineToTerraform, true)(struct!.pipeline),
  }
}


export function openpipelineEventsPipelinesToHclTerraform(struct?: OpenpipelineEventsPipelinesOutputReference | OpenpipelineEventsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline: {
      value: cdktf.listMapperHcl(openpipelineEventsPipelinesPipelineToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsPipelinesPipelineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsPipelinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsPipelines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsPipelines | undefined) {
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
  private _pipeline = new OpenpipelineEventsPipelinesPipelineList(this, "pipeline", false);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: OpenpipelineEventsPipelinesPipeline[] | cdktf.IResolvable) {
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
export interface OpenpipelineEventsRoutingEntry {
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#enabled OpenpipelineEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#matcher OpenpipelineEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Unique note describing the dynamic route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#note OpenpipelineEvents#note}
  */
  readonly note: string;
  /**
  * Identifier of the pipeline the record is routed into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#pipeline_id OpenpipelineEvents#pipeline_id}
  */
  readonly pipelineId: string;
}

export function openpipelineEventsRoutingEntryToTerraform(struct?: OpenpipelineEventsRoutingEntry | cdktf.IResolvable): any {
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


export function openpipelineEventsRoutingEntryToHclTerraform(struct?: OpenpipelineEventsRoutingEntry | cdktf.IResolvable): any {
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

export class OpenpipelineEventsRoutingEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineEventsRoutingEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineEventsRoutingEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineEventsRoutingEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineEventsRoutingEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineEventsRoutingEntryOutputReference {
    return new OpenpipelineEventsRoutingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineEventsRouting {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#entry OpenpipelineEvents#entry}
  */
  readonly entry?: OpenpipelineEventsRoutingEntry[] | cdktf.IResolvable;
}

export function openpipelineEventsRoutingToTerraform(struct?: OpenpipelineEventsRoutingOutputReference | OpenpipelineEventsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.listMapper(openpipelineEventsRoutingEntryToTerraform, true)(struct!.entry),
  }
}


export function openpipelineEventsRoutingToHclTerraform(struct?: OpenpipelineEventsRoutingOutputReference | OpenpipelineEventsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.listMapperHcl(openpipelineEventsRoutingEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineEventsRoutingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineEventsRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineEventsRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineEventsRouting | undefined) {
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
  private _entry = new OpenpipelineEventsRoutingEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: OpenpipelineEventsRoutingEntry[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events dynatrace_openpipeline_events}
*/
export class OpenpipelineEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineEvents to import
  * @param importFromId The id of the existing OpenpipelineEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/openpipeline_events dynatrace_openpipeline_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineEventsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineEventsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_events',
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
  private _endpoints = new OpenpipelineEventsEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: OpenpipelineEventsEndpoints) {
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
  private _pipelines = new OpenpipelineEventsPipelinesOutputReference(this, "pipelines");
  public get pipelines() {
    return this._pipelines;
  }
  public putPipelines(value: OpenpipelineEventsPipelines) {
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
  private _routing = new OpenpipelineEventsRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineEventsRouting) {
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
      endpoints: openpipelineEventsEndpointsToTerraform(this._endpoints.internalValue),
      pipelines: openpipelineEventsPipelinesToTerraform(this._pipelines.internalValue),
      routing: openpipelineEventsRoutingToTerraform(this._routing.internalValue),
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
        value: openpipelineEventsEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineEventsEndpointsList",
      },
      pipelines: {
        value: openpipelineEventsPipelinesToHclTerraform(this._pipelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineEventsPipelinesList",
      },
      routing: {
        value: openpipelineEventsRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineEventsRoutingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
