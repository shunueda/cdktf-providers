// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineDavisEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#endpoints OpenpipelineDavisEvents#endpoints}
  */
  readonly endpoints?: OpenpipelineDavisEventsEndpoints;
  /**
  * pipelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#pipelines OpenpipelineDavisEvents#pipelines}
  */
  readonly pipelines?: OpenpipelineDavisEventsPipelines;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#routing OpenpipelineDavisEvents#routing}
  */
  readonly routing?: OpenpipelineDavisEventsRouting;
}
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dql_script OpenpipelineDavisEvents#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor | undefined) {
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
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#name OpenpipelineDavisEvents#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value OpenpipelineDavisEvents#value}
  */
  readonly value: string;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields OpenpipelineDavisEvents#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#from_name OpenpipelineDavisEvents#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#to_name OpenpipelineDavisEvents#to_name}
  */
  readonly toName: string;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#custom_matcher OpenpipelineDavisEvents#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#technology_id OpenpipelineDavisEvents#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dql_processor OpenpipelineDavisEvents#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#drop_processor OpenpipelineDavisEvents#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields_add_processor OpenpipelineDavisEvents#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields_remove_processor OpenpipelineDavisEvents#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields_rename_processor OpenpipelineDavisEvents#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#technology_processor OpenpipelineDavisEvents#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineDavisEventsEndpointsEndpointProcessorsProcessorToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor) {
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

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorOutputReference {
    return new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsEndpointsEndpointProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsEndpointsEndpointProcessorsToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsEndpointsEndpointProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsEndpointsEndpointProcessorsToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointProcessorsOutputReference | OpenpipelineDavisEventsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsEndpointsEndpointProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsEndpointsEndpointProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointProcessors | undefined) {
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
  private _processor = new OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsEndpointsEndpointRouting {
  /**
  * Pipeline ID of the static routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#pipeline_id OpenpipelineDavisEvents#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Type of routing, static or dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#type OpenpipelineDavisEvents#type}
  */
  readonly type: string;
}

export function openpipelineDavisEventsEndpointsEndpointRoutingToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointRoutingOutputReference | OpenpipelineDavisEventsEndpointsEndpointRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineDavisEventsEndpointsEndpointRoutingToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpointRoutingOutputReference | OpenpipelineDavisEventsEndpointsEndpointRouting): any {
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

export class OpenpipelineDavisEventsEndpointsEndpointRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpointRouting | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpointRouting | undefined) {
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
export interface OpenpipelineDavisEventsEndpointsEndpoint {
  /**
  * The default bucket assigned to records for the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#default_bucket OpenpipelineDavisEvents#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * Display name of the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#display_name OpenpipelineDavisEvents#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The segment of the ingest source, which is applied to the base path. Must be unique within a configuration."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#segment OpenpipelineDavisEvents#segment}
  */
  readonly segment: string;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processors OpenpipelineDavisEvents#processors}
  */
  readonly processors?: OpenpipelineDavisEventsEndpointsEndpointProcessors;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#routing OpenpipelineDavisEvents#routing}
  */
  readonly routing: OpenpipelineDavisEventsEndpointsEndpointRouting;
}

export function openpipelineDavisEventsEndpointsEndpointToTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bucket: cdktf.stringToTerraform(struct!.defaultBucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    segment: cdktf.stringToTerraform(struct!.segment),
    processors: openpipelineDavisEventsEndpointsEndpointProcessorsToTerraform(struct!.processors),
    routing: openpipelineDavisEventsEndpointsEndpointRoutingToTerraform(struct!.routing),
  }
}


export function openpipelineDavisEventsEndpointsEndpointToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsEndpoint | cdktf.IResolvable): any {
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
      value: openpipelineDavisEventsEndpointsEndpointProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointProcessorsList",
    },
    routing: {
      value: openpipelineDavisEventsEndpointsEndpointRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsEndpointsEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsEndpointsEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsEndpointsEndpoint | cdktf.IResolvable | undefined) {
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
  private _processors = new OpenpipelineDavisEventsEndpointsEndpointProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineDavisEventsEndpointsEndpointProcessors) {
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
  private _routing = new OpenpipelineDavisEventsEndpointsEndpointRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineDavisEventsEndpointsEndpointRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class OpenpipelineDavisEventsEndpointsEndpointList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsEndpointsEndpoint[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsEndpointsEndpointOutputReference {
    return new OpenpipelineDavisEventsEndpointsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsEndpoints {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#endpoint OpenpipelineDavisEvents#endpoint}
  */
  readonly endpoint?: OpenpipelineDavisEventsEndpointsEndpoint[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsEndpointsToTerraform(struct?: OpenpipelineDavisEventsEndpointsOutputReference | OpenpipelineDavisEventsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.listMapper(openpipelineDavisEventsEndpointsEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function openpipelineDavisEventsEndpointsToHclTerraform(struct?: OpenpipelineDavisEventsEndpointsOutputReference | OpenpipelineDavisEventsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsEndpointsEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsEndpointsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsEndpoints | undefined) {
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
  private _endpoint = new OpenpipelineDavisEventsEndpointsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: OpenpipelineDavisEventsEndpointsEndpoint[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#constant OpenpipelineDavisEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#multi_value_constant OpenpipelineDavisEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#type OpenpipelineDavisEvents#type}
  */
  readonly type: string;
}

export function openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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


export function openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value OpenpipelineDavisEvents#value}
  */
  readonly value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue;
}

export function openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
    value: openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
      value: openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor {
  /**
  * cost_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#cost_allocation_processor OpenpipelineDavisEvents#cost_allocation_processor}
  */
  readonly costAllocationProcessor?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_allocation_processor: openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct!.costAllocationProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_allocation_processor: {
      value: openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct!.costAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _costAllocationProcessor = new OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference(this, "cost_allocation_processor");
  public get costAllocationProcessor() {
    return this._costAllocationProcessor;
  }
  public putCostAllocationProcessor(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineCostAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineCostAllocationToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationOutputReference | OpenpipelineDavisEventsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineCostAllocationToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineCostAllocationOutputReference | OpenpipelineDavisEventsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineCostAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocation | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields OpenpipelineDavisEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#semantic OpenpipelineDavisEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#forwarder_config_id OpenpipelineDavisEvents#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field_extraction OpenpipelineDavisEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
    field_extraction: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#constant OpenpipelineDavisEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#multi_value_constant OpenpipelineDavisEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#type OpenpipelineDavisEvents#type}
  */
  readonly type: string;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#constant OpenpipelineDavisEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#multi_value_constant OpenpipelineDavisEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#type OpenpipelineDavisEvents#type}
  */
  readonly type: string;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields OpenpipelineDavisEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#semantic OpenpipelineDavisEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#event_provider OpenpipelineDavisEvents#event_provider}
  */
  readonly eventProvider: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#event_type OpenpipelineDavisEvents#event_type}
  */
  readonly eventType: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field_extraction OpenpipelineDavisEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
    event_provider: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderList",
    },
    event_type: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeList",
    },
    field_extraction: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined) {
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
  private _eventProvider = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType) {
    this._eventType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties {
  /**
  * The key to set on the davis event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#key OpenpipelineDavisEvents#key}
  */
  readonly key: string;
  /**
  * The value assigned to the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value OpenpipelineDavisEvents#value}
  */
  readonly value: string;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined) {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#properties OpenpipelineDavisEvents#properties}
  */
  readonly properties: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
    properties: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform, true)(struct!.properties),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined) {
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
  private _properties = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields OpenpipelineDavisEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#semantic OpenpipelineDavisEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field_extraction OpenpipelineDavisEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
    field_extraction: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor {
  /**
  * azure_log_forwarding_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#azure_log_forwarding_processor OpenpipelineDavisEvents#azure_log_forwarding_processor}
  */
  readonly azureLogForwardingProcessor?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor;
  /**
  * bizevent_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#bizevent_extraction_processor OpenpipelineDavisEvents#bizevent_extraction_processor}
  */
  readonly bizeventExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor;
  /**
  * davis_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#davis_event_extraction_processor OpenpipelineDavisEvents#davis_event_extraction_processor}
  */
  readonly davisEventExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor;
  /**
  * security_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#security_event_extraction_processor OpenpipelineDavisEvents#security_event_extraction_processor}
  */
  readonly securityEventExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_log_forwarding_processor: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct!.azureLogForwardingProcessor),
    bizevent_extraction_processor: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct!.bizeventExtractionProcessor),
    davis_event_extraction_processor: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct!.davisEventExtractionProcessor),
    security_event_extraction_processor: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct!.securityEventExtractionProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_log_forwarding_processor: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct!.azureLogForwardingProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorList",
    },
    bizevent_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct!.bizeventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorList",
    },
    davis_event_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct!.davisEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorList",
    },
    security_event_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct!.securityEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwardingProcessor = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference(this, "azure_log_forwarding_processor");
  public get azureLogForwardingProcessor() {
    return this._azureLogForwardingProcessor;
  }
  public putAzureLogForwardingProcessor(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor) {
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
  private _bizeventExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference(this, "bizevent_extraction_processor");
  public get bizeventExtractionProcessor() {
    return this._bizeventExtractionProcessor;
  }
  public putBizeventExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor) {
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
  private _davisEventExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference(this, "davis_event_extraction_processor");
  public get davisEventExtractionProcessor() {
    return this._davisEventExtractionProcessor;
  }
  public putDavisEventExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor) {
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
  private _securityEventExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference(this, "security_event_extraction_processor");
  public get securityEventExtractionProcessor() {
    return this._securityEventExtractionProcessor;
  }
  public putSecurityEventExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineDataExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineDataExtractionToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineDataExtractionToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineDataExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineDataExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineDataExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineDataExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineDataExtraction | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dimensions OpenpipelineDavisEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#metric_key OpenpipelineDavisEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#aggregation OpenpipelineDavisEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dimensions OpenpipelineDavisEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#metric_key OpenpipelineDavisEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sampling OpenpipelineDavisEvents#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#aggregation OpenpipelineDavisEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The default value to use if the given field value could not be extracted. String value must be a number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#default_value OpenpipelineDavisEvents#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dimensions OpenpipelineDavisEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field from which to extract the value for the metric, or 'null' for a duration measurement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field?: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Indicates whether the metric value should be the specified field or duration. Possible values: 'DURATION', 'FIELD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#measurement OpenpipelineDavisEvents#measurement}
  */
  readonly measurement: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#metric_key OpenpipelineDavisEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sampling OpenpipelineDavisEvents#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dimensions OpenpipelineDavisEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field to extract the value for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#metric_key OpenpipelineDavisEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor {
  /**
  * counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#counter_metric_extraction_processor OpenpipelineDavisEvents#counter_metric_extraction_processor}
  */
  readonly counterMetricExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor;
  /**
  * sampling_aware_counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sampling_aware_counter_metric_extraction_processor OpenpipelineDavisEvents#sampling_aware_counter_metric_extraction_processor}
  */
  readonly samplingAwareCounterMetricExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor;
  /**
  * sampling_aware_value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sampling_aware_value_metric_extraction_processor OpenpipelineDavisEvents#sampling_aware_value_metric_extraction_processor}
  */
  readonly samplingAwareValueMetricExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor;
  /**
  * value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value_metric_extraction_processor OpenpipelineDavisEvents#value_metric_extraction_processor}
  */
  readonly valueMetricExtractionProcessor?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_metric_extraction_processor: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct!.counterMetricExtractionProcessor),
    sampling_aware_counter_metric_extraction_processor: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
    sampling_aware_value_metric_extraction_processor: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
    value_metric_extraction_processor: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct!.valueMetricExtractionProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_metric_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct!.counterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorList",
    },
    sampling_aware_counter_metric_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorList",
    },
    sampling_aware_value_metric_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorList",
    },
    value_metric_extraction_processor: {
      value: openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct!.valueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _counterMetricExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference(this, "counter_metric_extraction_processor");
  public get counterMetricExtractionProcessor() {
    return this._counterMetricExtractionProcessor;
  }
  public putCounterMetricExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor) {
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
  private _samplingAwareCounterMetricExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference(this, "sampling_aware_counter_metric_extraction_processor");
  public get samplingAwareCounterMetricExtractionProcessor() {
    return this._samplingAwareCounterMetricExtractionProcessor;
  }
  public putSamplingAwareCounterMetricExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor) {
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
  private _samplingAwareValueMetricExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference(this, "sampling_aware_value_metric_extraction_processor");
  public get samplingAwareValueMetricExtractionProcessor() {
    return this._samplingAwareValueMetricExtractionProcessor;
  }
  public putSamplingAwareValueMetricExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor) {
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
  private _valueMetricExtractionProcessor = new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference(this, "value_metric_extraction_processor");
  public get valueMetricExtractionProcessor() {
    return this._valueMetricExtractionProcessor;
  }
  public putValueMetricExtractionProcessor(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineMetricExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineMetricExtractionToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineMetricExtractionToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineDavisEventsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineMetricExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineMetricExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtraction | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dql_script OpenpipelineDavisEvents#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#name OpenpipelineDavisEvents#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value OpenpipelineDavisEvents#value}
  */
  readonly value: string;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields OpenpipelineDavisEvents#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#from_name OpenpipelineDavisEvents#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#to_name OpenpipelineDavisEvents#to_name}
  */
  readonly toName: string;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#custom_matcher OpenpipelineDavisEvents#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#technology_id OpenpipelineDavisEvents#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#dql_processor OpenpipelineDavisEvents#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#drop_processor OpenpipelineDavisEvents#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields_add_processor OpenpipelineDavisEvents#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields_remove_processor OpenpipelineDavisEvents#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#fields_rename_processor OpenpipelineDavisEvents#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#technology_processor OpenpipelineDavisEvents#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProcessingProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorTechnologyProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProcessing {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineProcessingToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineProcessingProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProcessingToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProcessingOutputReference | OpenpipelineDavisEventsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineProcessingProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProcessing | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineProcessingProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#constant OpenpipelineDavisEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#multi_value_constant OpenpipelineDavisEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#type OpenpipelineDavisEvents#type}
  */
  readonly type: string;
}

export function openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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


export function openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value OpenpipelineDavisEvents#value}
  */
  readonly value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue;
}

export function openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
    value: openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
      value: openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor {
  /**
  * product_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#product_allocation_processor OpenpipelineDavisEvents#product_allocation_processor}
  */
  readonly productAllocationProcessor?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_allocation_processor: openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct!.productAllocationProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_allocation_processor: {
      value: openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct!.productAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _productAllocationProcessor = new OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference(this, "product_allocation_processor");
  public get productAllocationProcessor() {
    return this._productAllocationProcessor;
  }
  public putProductAllocationProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineProductAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineProductAllocationToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationOutputReference | OpenpipelineDavisEventsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineProductAllocationToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineProductAllocationOutputReference | OpenpipelineDavisEventsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineProductAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocation | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#constant OpenpipelineDavisEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#field OpenpipelineDavisEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#multi_value_constant OpenpipelineDavisEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#type OpenpipelineDavisEvents#type}
  */
  readonly type: string;
}

export function openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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


export function openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#value OpenpipelineDavisEvents#value}
  */
  readonly value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue;
}

export function openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
    value: openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
      value: openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined) {
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
  private _value = new OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor {
  /**
  * security_context_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#security_context_processor OpenpipelineDavisEvents#security_context_processor}
  */
  readonly securityContextProcessor?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_context_processor: openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct!.securityContextProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_context_processor: {
      value: openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct!.securityContextProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined) {
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
  private _securityContextProcessor = new OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference(this, "security_context_processor");
  public get securityContextProcessor() {
    return this._securityContextProcessor;
  }
  public putSecurityContextProcessor(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineSecurityContext {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineSecurityContextToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextOutputReference | OpenpipelineDavisEventsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineSecurityContextToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineSecurityContextOutputReference | OpenpipelineDavisEventsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineSecurityContextProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContext | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor {
  /**
  * Bucket that is assigned when the record is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#bucket_name OpenpipelineDavisEvents#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#description OpenpipelineDavisEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#sample_data OpenpipelineDavisEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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


export function openpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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

export class OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined) {
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
export interface OpenpipelineDavisEventsPipelinesPipelineStorageProcessor {
  /**
  * bucket_assignment_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#bucket_assignment_processor OpenpipelineDavisEvents#bucket_assignment_processor}
  */
  readonly bucketAssignmentProcessor?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor;
  /**
  * no_storage_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#no_storage_processor OpenpipelineDavisEvents#no_storage_processor}
  */
  readonly noStorageProcessor?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor;
}

export function openpipelineDavisEventsPipelinesPipelineStorageProcessorToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_assignment_processor: openpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct!.bucketAssignmentProcessor),
    no_storage_processor: openpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct!.noStorageProcessor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineStorageProcessorToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_assignment_processor: {
      value: openpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct!.bucketAssignmentProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorList",
    },
    no_storage_processor: {
      value: openpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct!.noStorageProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineStorageProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined) {
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
  private _bucketAssignmentProcessor = new OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference(this, "bucket_assignment_processor");
  public get bucketAssignmentProcessor() {
    return this._bucketAssignmentProcessor;
  }
  public putBucketAssignmentProcessor(value: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor) {
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
  private _noStorageProcessor = new OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference(this, "no_storage_processor");
  public get noStorageProcessor() {
    return this._noStorageProcessor;
  }
  public putNoStorageProcessor(value: OpenpipelineDavisEventsPipelinesPipelineStorageProcessorNoStorageProcessor) {
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

export class OpenpipelineDavisEventsPipelinesPipelineStorageProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineStorageProcessorOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineStorageProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelinesPipelineStorage {
  /**
  * Default bucket assigned to records which do not match any other storage processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#catch_all_bucket_name OpenpipelineDavisEvents#catch_all_bucket_name}
  */
  readonly catchAllBucketName?: string;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processor OpenpipelineDavisEvents#processor}
  */
  readonly processor?: OpenpipelineDavisEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesPipelineStorageToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageOutputReference | OpenpipelineDavisEventsPipelinesPipelineStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch_all_bucket_name: cdktf.stringToTerraform(struct!.catchAllBucketName),
    processor: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineStorageProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineDavisEventsPipelinesPipelineStorageToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipelineStorageOutputReference | OpenpipelineDavisEventsPipelinesPipelineStorage): any {
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
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineStorageProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipelineStorage | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipelineStorage | undefined) {
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
  private _processor = new OpenpipelineDavisEventsPipelinesPipelineStorageProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineDavisEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsPipelinesPipeline {
  /**
  * Display name of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#display_name OpenpipelineDavisEvents#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#id OpenpipelineDavisEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#cost_allocation OpenpipelineDavisEvents#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineDavisEventsPipelinesPipelineCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#data_extraction OpenpipelineDavisEvents#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineDavisEventsPipelinesPipelineDataExtraction;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#metric_extraction OpenpipelineDavisEvents#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineDavisEventsPipelinesPipelineMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#processing OpenpipelineDavisEvents#processing}
  */
  readonly processing?: OpenpipelineDavisEventsPipelinesPipelineProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#product_allocation OpenpipelineDavisEvents#product_allocation}
  */
  readonly productAllocation?: OpenpipelineDavisEventsPipelinesPipelineProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#security_context OpenpipelineDavisEvents#security_context}
  */
  readonly securityContext?: OpenpipelineDavisEventsPipelinesPipelineSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#storage OpenpipelineDavisEvents#storage}
  */
  readonly storage?: OpenpipelineDavisEventsPipelinesPipelineStorage;
}

export function openpipelineDavisEventsPipelinesPipelineToTerraform(struct?: OpenpipelineDavisEventsPipelinesPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    cost_allocation: openpipelineDavisEventsPipelinesPipelineCostAllocationToTerraform(struct!.costAllocation),
    data_extraction: openpipelineDavisEventsPipelinesPipelineDataExtractionToTerraform(struct!.dataExtraction),
    metric_extraction: openpipelineDavisEventsPipelinesPipelineMetricExtractionToTerraform(struct!.metricExtraction),
    processing: openpipelineDavisEventsPipelinesPipelineProcessingToTerraform(struct!.processing),
    product_allocation: openpipelineDavisEventsPipelinesPipelineProductAllocationToTerraform(struct!.productAllocation),
    security_context: openpipelineDavisEventsPipelinesPipelineSecurityContextToTerraform(struct!.securityContext),
    storage: openpipelineDavisEventsPipelinesPipelineStorageToTerraform(struct!.storage),
  }
}


export function openpipelineDavisEventsPipelinesPipelineToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesPipeline | cdktf.IResolvable): any {
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
      value: openpipelineDavisEventsPipelinesPipelineCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineCostAllocationList",
    },
    data_extraction: {
      value: openpipelineDavisEventsPipelinesPipelineDataExtractionToHclTerraform(struct!.dataExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineDataExtractionList",
    },
    metric_extraction: {
      value: openpipelineDavisEventsPipelinesPipelineMetricExtractionToHclTerraform(struct!.metricExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineMetricExtractionList",
    },
    processing: {
      value: openpipelineDavisEventsPipelinesPipelineProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProcessingList",
    },
    product_allocation: {
      value: openpipelineDavisEventsPipelinesPipelineProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineProductAllocationList",
    },
    security_context: {
      value: openpipelineDavisEventsPipelinesPipelineSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineSecurityContextList",
    },
    storage: {
      value: openpipelineDavisEventsPipelinesPipelineStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsPipelinesPipeline | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsPipelinesPipeline | cdktf.IResolvable | undefined) {
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
  private _costAllocation = new OpenpipelineDavisEventsPipelinesPipelineCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineDavisEventsPipelinesPipelineCostAllocation) {
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
  private _dataExtraction = new OpenpipelineDavisEventsPipelinesPipelineDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineDavisEventsPipelinesPipelineDataExtraction) {
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
  private _metricExtraction = new OpenpipelineDavisEventsPipelinesPipelineMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineDavisEventsPipelinesPipelineMetricExtraction) {
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
  private _processing = new OpenpipelineDavisEventsPipelinesPipelineProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineDavisEventsPipelinesPipelineProcessing) {
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
  private _productAllocation = new OpenpipelineDavisEventsPipelinesPipelineProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineDavisEventsPipelinesPipelineProductAllocation) {
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
  private _securityContext = new OpenpipelineDavisEventsPipelinesPipelineSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineDavisEventsPipelinesPipelineSecurityContext) {
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
  private _storage = new OpenpipelineDavisEventsPipelinesPipelineStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineDavisEventsPipelinesPipelineStorage) {
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

export class OpenpipelineDavisEventsPipelinesPipelineList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsPipelinesPipeline[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsPipelinesPipelineOutputReference {
    return new OpenpipelineDavisEventsPipelinesPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsPipelines {
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#pipeline OpenpipelineDavisEvents#pipeline}
  */
  readonly pipeline?: OpenpipelineDavisEventsPipelinesPipeline[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsPipelinesToTerraform(struct?: OpenpipelineDavisEventsPipelinesOutputReference | OpenpipelineDavisEventsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline: cdktf.listMapper(openpipelineDavisEventsPipelinesPipelineToTerraform, true)(struct!.pipeline),
  }
}


export function openpipelineDavisEventsPipelinesToHclTerraform(struct?: OpenpipelineDavisEventsPipelinesOutputReference | OpenpipelineDavisEventsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsPipelinesPipelineToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsPipelinesPipelineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsPipelinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsPipelines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsPipelines | undefined) {
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
  private _pipeline = new OpenpipelineDavisEventsPipelinesPipelineList(this, "pipeline", false);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: OpenpipelineDavisEventsPipelinesPipeline[] | cdktf.IResolvable) {
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
export interface OpenpipelineDavisEventsRoutingEntry {
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#enabled OpenpipelineDavisEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#matcher OpenpipelineDavisEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Unique note describing the dynamic route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#note OpenpipelineDavisEvents#note}
  */
  readonly note: string;
  /**
  * Identifier of the pipeline the record is routed into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#pipeline_id OpenpipelineDavisEvents#pipeline_id}
  */
  readonly pipelineId: string;
}

export function openpipelineDavisEventsRoutingEntryToTerraform(struct?: OpenpipelineDavisEventsRoutingEntry | cdktf.IResolvable): any {
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


export function openpipelineDavisEventsRoutingEntryToHclTerraform(struct?: OpenpipelineDavisEventsRoutingEntry | cdktf.IResolvable): any {
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

export class OpenpipelineDavisEventsRoutingEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineDavisEventsRoutingEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineDavisEventsRoutingEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineDavisEventsRoutingEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineDavisEventsRoutingEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineDavisEventsRoutingEntryOutputReference {
    return new OpenpipelineDavisEventsRoutingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineDavisEventsRouting {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#entry OpenpipelineDavisEvents#entry}
  */
  readonly entry?: OpenpipelineDavisEventsRoutingEntry[] | cdktf.IResolvable;
}

export function openpipelineDavisEventsRoutingToTerraform(struct?: OpenpipelineDavisEventsRoutingOutputReference | OpenpipelineDavisEventsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.listMapper(openpipelineDavisEventsRoutingEntryToTerraform, true)(struct!.entry),
  }
}


export function openpipelineDavisEventsRoutingToHclTerraform(struct?: OpenpipelineDavisEventsRoutingOutputReference | OpenpipelineDavisEventsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.listMapperHcl(openpipelineDavisEventsRoutingEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineDavisEventsRoutingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineDavisEventsRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineDavisEventsRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineDavisEventsRouting | undefined) {
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
  private _entry = new OpenpipelineDavisEventsRoutingEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: OpenpipelineDavisEventsRoutingEntry[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events dynatrace_openpipeline_davis_events}
*/
export class OpenpipelineDavisEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_davis_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineDavisEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineDavisEvents to import
  * @param importFromId The id of the existing OpenpipelineDavisEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineDavisEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_davis_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_davis_events dynatrace_openpipeline_davis_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineDavisEventsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineDavisEventsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_davis_events',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
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
  private _endpoints = new OpenpipelineDavisEventsEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: OpenpipelineDavisEventsEndpoints) {
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
  private _pipelines = new OpenpipelineDavisEventsPipelinesOutputReference(this, "pipelines");
  public get pipelines() {
    return this._pipelines;
  }
  public putPipelines(value: OpenpipelineDavisEventsPipelines) {
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
  private _routing = new OpenpipelineDavisEventsRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineDavisEventsRouting) {
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
      endpoints: openpipelineDavisEventsEndpointsToTerraform(this._endpoints.internalValue),
      pipelines: openpipelineDavisEventsPipelinesToTerraform(this._pipelines.internalValue),
      routing: openpipelineDavisEventsRoutingToTerraform(this._routing.internalValue),
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
        value: openpipelineDavisEventsEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineDavisEventsEndpointsList",
      },
      pipelines: {
        value: openpipelineDavisEventsPipelinesToHclTerraform(this._pipelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineDavisEventsPipelinesList",
      },
      routing: {
        value: openpipelineDavisEventsRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineDavisEventsRoutingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
