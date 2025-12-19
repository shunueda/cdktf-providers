// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineUserSessionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#endpoints OpenpipelineUserSessions#endpoints}
  */
  readonly endpoints?: OpenpipelineUserSessionsEndpoints;
  /**
  * pipelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#pipelines OpenpipelineUserSessions#pipelines}
  */
  readonly pipelines?: OpenpipelineUserSessionsPipelines;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#routing OpenpipelineUserSessions#routing}
  */
  readonly routing?: OpenpipelineUserSessionsRouting;
}
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dql_script OpenpipelineUserSessions#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor | undefined) {
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
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#name OpenpipelineUserSessions#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value OpenpipelineUserSessions#value}
  */
  readonly value: string;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields OpenpipelineUserSessions#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#from_name OpenpipelineUserSessions#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#to_name OpenpipelineUserSessions#to_name}
  */
  readonly toName: string;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#custom_matcher OpenpipelineUserSessions#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#technology_id OpenpipelineUserSessions#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dql_processor OpenpipelineUserSessions#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#drop_processor OpenpipelineUserSessions#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields_add_processor OpenpipelineUserSessions#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields_remove_processor OpenpipelineUserSessions#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields_rename_processor OpenpipelineUserSessions#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#technology_processor OpenpipelineUserSessions#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineUserSessionsEndpointsEndpointProcessorsProcessorToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorTechnologyProcessor) {
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

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorOutputReference {
    return new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsEndpointsEndpointProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsEndpointsEndpointProcessorsToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsEndpointsEndpointProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsEndpointsEndpointProcessorsToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointProcessorsOutputReference | OpenpipelineUserSessionsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsEndpointsEndpointProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsEndpointsEndpointProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointProcessors | undefined) {
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
  private _processor = new OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsEndpointsEndpointRouting {
  /**
  * Pipeline ID of the static routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#pipeline_id OpenpipelineUserSessions#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Type of routing, static or dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#type OpenpipelineUserSessions#type}
  */
  readonly type: string;
}

export function openpipelineUserSessionsEndpointsEndpointRoutingToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointRoutingOutputReference | OpenpipelineUserSessionsEndpointsEndpointRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineUserSessionsEndpointsEndpointRoutingToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpointRoutingOutputReference | OpenpipelineUserSessionsEndpointsEndpointRouting): any {
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

export class OpenpipelineUserSessionsEndpointsEndpointRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpointRouting | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpointRouting | undefined) {
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
export interface OpenpipelineUserSessionsEndpointsEndpoint {
  /**
  * The default bucket assigned to records for the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#default_bucket OpenpipelineUserSessions#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * Display name of the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#display_name OpenpipelineUserSessions#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The segment of the ingest source, which is applied to the base path. Must be unique within a configuration."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#segment OpenpipelineUserSessions#segment}
  */
  readonly segment: string;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processors OpenpipelineUserSessions#processors}
  */
  readonly processors?: OpenpipelineUserSessionsEndpointsEndpointProcessors;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#routing OpenpipelineUserSessions#routing}
  */
  readonly routing: OpenpipelineUserSessionsEndpointsEndpointRouting;
}

export function openpipelineUserSessionsEndpointsEndpointToTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bucket: cdktf.stringToTerraform(struct!.defaultBucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    segment: cdktf.stringToTerraform(struct!.segment),
    processors: openpipelineUserSessionsEndpointsEndpointProcessorsToTerraform(struct!.processors),
    routing: openpipelineUserSessionsEndpointsEndpointRoutingToTerraform(struct!.routing),
  }
}


export function openpipelineUserSessionsEndpointsEndpointToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsEndpoint | cdktf.IResolvable): any {
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
      value: openpipelineUserSessionsEndpointsEndpointProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointProcessorsList",
    },
    routing: {
      value: openpipelineUserSessionsEndpointsEndpointRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsEndpointsEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsEndpointsEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsEndpointsEndpoint | cdktf.IResolvable | undefined) {
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
  private _processors = new OpenpipelineUserSessionsEndpointsEndpointProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineUserSessionsEndpointsEndpointProcessors) {
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
  private _routing = new OpenpipelineUserSessionsEndpointsEndpointRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineUserSessionsEndpointsEndpointRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class OpenpipelineUserSessionsEndpointsEndpointList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsEndpointsEndpoint[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsEndpointsEndpointOutputReference {
    return new OpenpipelineUserSessionsEndpointsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsEndpoints {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#endpoint OpenpipelineUserSessions#endpoint}
  */
  readonly endpoint?: OpenpipelineUserSessionsEndpointsEndpoint[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsEndpointsToTerraform(struct?: OpenpipelineUserSessionsEndpointsOutputReference | OpenpipelineUserSessionsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.listMapper(openpipelineUserSessionsEndpointsEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function openpipelineUserSessionsEndpointsToHclTerraform(struct?: OpenpipelineUserSessionsEndpointsOutputReference | OpenpipelineUserSessionsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsEndpointsEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsEndpointsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsEndpoints | undefined) {
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
  private _endpoint = new OpenpipelineUserSessionsEndpointsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: OpenpipelineUserSessionsEndpointsEndpoint[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#constant OpenpipelineUserSessions#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#multi_value_constant OpenpipelineUserSessions#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#type OpenpipelineUserSessions#type}
  */
  readonly type: string;
}

export function openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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


export function openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value OpenpipelineUserSessions#value}
  */
  readonly value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue;
}

export function openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
    value: openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
      value: openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor {
  /**
  * cost_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#cost_allocation_processor OpenpipelineUserSessions#cost_allocation_processor}
  */
  readonly costAllocationProcessor?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_allocation_processor: openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct!.costAllocationProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_allocation_processor: {
      value: openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct!.costAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _costAllocationProcessor = new OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference(this, "cost_allocation_processor");
  public get costAllocationProcessor() {
    return this._costAllocationProcessor;
  }
  public putCostAllocationProcessor(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineCostAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineCostAllocationToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationOutputReference | OpenpipelineUserSessionsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineCostAllocationToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineCostAllocationOutputReference | OpenpipelineUserSessionsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineCostAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocation | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields OpenpipelineUserSessions#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#semantic OpenpipelineUserSessions#semantic}
  */
  readonly semantic: string;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#forwarder_config_id OpenpipelineUserSessions#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field_extraction OpenpipelineUserSessions#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
    field_extraction: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#constant OpenpipelineUserSessions#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#multi_value_constant OpenpipelineUserSessions#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#type OpenpipelineUserSessions#type}
  */
  readonly type: string;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#constant OpenpipelineUserSessions#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#multi_value_constant OpenpipelineUserSessions#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#type OpenpipelineUserSessions#type}
  */
  readonly type: string;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields OpenpipelineUserSessions#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#semantic OpenpipelineUserSessions#semantic}
  */
  readonly semantic: string;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#event_provider OpenpipelineUserSessions#event_provider}
  */
  readonly eventProvider: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#event_type OpenpipelineUserSessions#event_type}
  */
  readonly eventType: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field_extraction OpenpipelineUserSessions#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
    event_provider: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderList",
    },
    event_type: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeList",
    },
    field_extraction: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined) {
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
  private _eventProvider = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType) {
    this._eventType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties {
  /**
  * The key to set on the davis event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#key OpenpipelineUserSessions#key}
  */
  readonly key: string;
  /**
  * The value assigned to the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value OpenpipelineUserSessions#value}
  */
  readonly value: string;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined) {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#properties OpenpipelineUserSessions#properties}
  */
  readonly properties: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
    properties: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform, true)(struct!.properties),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined) {
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
  private _properties = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields OpenpipelineUserSessions#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#semantic OpenpipelineUserSessions#semantic}
  */
  readonly semantic: string;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field_extraction OpenpipelineUserSessions#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
    field_extraction: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor {
  /**
  * azure_log_forwarding_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#azure_log_forwarding_processor OpenpipelineUserSessions#azure_log_forwarding_processor}
  */
  readonly azureLogForwardingProcessor?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor;
  /**
  * bizevent_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#bizevent_extraction_processor OpenpipelineUserSessions#bizevent_extraction_processor}
  */
  readonly bizeventExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor;
  /**
  * davis_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#davis_event_extraction_processor OpenpipelineUserSessions#davis_event_extraction_processor}
  */
  readonly davisEventExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor;
  /**
  * security_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#security_event_extraction_processor OpenpipelineUserSessions#security_event_extraction_processor}
  */
  readonly securityEventExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_log_forwarding_processor: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct!.azureLogForwardingProcessor),
    bizevent_extraction_processor: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct!.bizeventExtractionProcessor),
    davis_event_extraction_processor: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct!.davisEventExtractionProcessor),
    security_event_extraction_processor: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct!.securityEventExtractionProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_log_forwarding_processor: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct!.azureLogForwardingProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorList",
    },
    bizevent_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct!.bizeventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorList",
    },
    davis_event_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct!.davisEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorList",
    },
    security_event_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct!.securityEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwardingProcessor = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference(this, "azure_log_forwarding_processor");
  public get azureLogForwardingProcessor() {
    return this._azureLogForwardingProcessor;
  }
  public putAzureLogForwardingProcessor(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor) {
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
  private _bizeventExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference(this, "bizevent_extraction_processor");
  public get bizeventExtractionProcessor() {
    return this._bizeventExtractionProcessor;
  }
  public putBizeventExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor) {
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
  private _davisEventExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference(this, "davis_event_extraction_processor");
  public get davisEventExtractionProcessor() {
    return this._davisEventExtractionProcessor;
  }
  public putDavisEventExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor) {
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
  private _securityEventExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference(this, "security_event_extraction_processor");
  public get securityEventExtractionProcessor() {
    return this._securityEventExtractionProcessor;
  }
  public putSecurityEventExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineDataExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineDataExtractionToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineDataExtractionToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineDataExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineDataExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineDataExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineDataExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineDataExtraction | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dimensions OpenpipelineUserSessions#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#metric_key OpenpipelineUserSessions#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#aggregation OpenpipelineUserSessions#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dimensions OpenpipelineUserSessions#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#metric_key OpenpipelineUserSessions#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sampling OpenpipelineUserSessions#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#aggregation OpenpipelineUserSessions#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The default value to use if the given field value could not be extracted. String value must be a number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#default_value OpenpipelineUserSessions#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dimensions OpenpipelineUserSessions#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field from which to extract the value for the metric, or 'null' for a duration measurement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field?: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Indicates whether the metric value should be the specified field or duration. Possible values: 'DURATION', 'FIELD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#measurement OpenpipelineUserSessions#measurement}
  */
  readonly measurement: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#metric_key OpenpipelineUserSessions#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sampling OpenpipelineUserSessions#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dimensions OpenpipelineUserSessions#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field to extract the value for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#metric_key OpenpipelineUserSessions#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor {
  /**
  * counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#counter_metric_extraction_processor OpenpipelineUserSessions#counter_metric_extraction_processor}
  */
  readonly counterMetricExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor;
  /**
  * sampling_aware_counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sampling_aware_counter_metric_extraction_processor OpenpipelineUserSessions#sampling_aware_counter_metric_extraction_processor}
  */
  readonly samplingAwareCounterMetricExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor;
  /**
  * sampling_aware_value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sampling_aware_value_metric_extraction_processor OpenpipelineUserSessions#sampling_aware_value_metric_extraction_processor}
  */
  readonly samplingAwareValueMetricExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor;
  /**
  * value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value_metric_extraction_processor OpenpipelineUserSessions#value_metric_extraction_processor}
  */
  readonly valueMetricExtractionProcessor?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_metric_extraction_processor: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct!.counterMetricExtractionProcessor),
    sampling_aware_counter_metric_extraction_processor: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
    sampling_aware_value_metric_extraction_processor: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
    value_metric_extraction_processor: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct!.valueMetricExtractionProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_metric_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct!.counterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorList",
    },
    sampling_aware_counter_metric_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorList",
    },
    sampling_aware_value_metric_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorList",
    },
    value_metric_extraction_processor: {
      value: openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct!.valueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _counterMetricExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference(this, "counter_metric_extraction_processor");
  public get counterMetricExtractionProcessor() {
    return this._counterMetricExtractionProcessor;
  }
  public putCounterMetricExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor) {
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
  private _samplingAwareCounterMetricExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference(this, "sampling_aware_counter_metric_extraction_processor");
  public get samplingAwareCounterMetricExtractionProcessor() {
    return this._samplingAwareCounterMetricExtractionProcessor;
  }
  public putSamplingAwareCounterMetricExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor) {
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
  private _samplingAwareValueMetricExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference(this, "sampling_aware_value_metric_extraction_processor");
  public get samplingAwareValueMetricExtractionProcessor() {
    return this._samplingAwareValueMetricExtractionProcessor;
  }
  public putSamplingAwareValueMetricExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor) {
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
  private _valueMetricExtractionProcessor = new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference(this, "value_metric_extraction_processor");
  public get valueMetricExtractionProcessor() {
    return this._valueMetricExtractionProcessor;
  }
  public putValueMetricExtractionProcessor(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineMetricExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineMetricExtractionToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineMetricExtractionToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineUserSessionsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineMetricExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineMetricExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtraction | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dql_script OpenpipelineUserSessions#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#name OpenpipelineUserSessions#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value OpenpipelineUserSessions#value}
  */
  readonly value: string;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields OpenpipelineUserSessions#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#from_name OpenpipelineUserSessions#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#to_name OpenpipelineUserSessions#to_name}
  */
  readonly toName: string;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#custom_matcher OpenpipelineUserSessions#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#technology_id OpenpipelineUserSessions#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#dql_processor OpenpipelineUserSessions#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#drop_processor OpenpipelineUserSessions#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields_add_processor OpenpipelineUserSessions#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields_remove_processor OpenpipelineUserSessions#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#fields_rename_processor OpenpipelineUserSessions#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#technology_processor OpenpipelineUserSessions#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProcessingProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorTechnologyProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProcessing {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineProcessingToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineProcessingProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProcessingToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProcessingOutputReference | OpenpipelineUserSessionsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineProcessingProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProcessing | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineProcessingProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#constant OpenpipelineUserSessions#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#multi_value_constant OpenpipelineUserSessions#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#type OpenpipelineUserSessions#type}
  */
  readonly type: string;
}

export function openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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


export function openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value OpenpipelineUserSessions#value}
  */
  readonly value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue;
}

export function openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
    value: openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
      value: openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor {
  /**
  * product_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#product_allocation_processor OpenpipelineUserSessions#product_allocation_processor}
  */
  readonly productAllocationProcessor?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_allocation_processor: openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct!.productAllocationProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_allocation_processor: {
      value: openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct!.productAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _productAllocationProcessor = new OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference(this, "product_allocation_processor");
  public get productAllocationProcessor() {
    return this._productAllocationProcessor;
  }
  public putProductAllocationProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineProductAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineProductAllocationToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationOutputReference | OpenpipelineUserSessionsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineProductAllocationToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineProductAllocationOutputReference | OpenpipelineUserSessionsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineProductAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocation | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#constant OpenpipelineUserSessions#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#field OpenpipelineUserSessions#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#multi_value_constant OpenpipelineUserSessions#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#type OpenpipelineUserSessions#type}
  */
  readonly type: string;
}

export function openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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


export function openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#value OpenpipelineUserSessions#value}
  */
  readonly value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue;
}

export function openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
    value: openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
      value: openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined) {
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
  private _value = new OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor {
  /**
  * security_context_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#security_context_processor OpenpipelineUserSessions#security_context_processor}
  */
  readonly securityContextProcessor?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_context_processor: openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct!.securityContextProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_context_processor: {
      value: openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct!.securityContextProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined) {
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
  private _securityContextProcessor = new OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference(this, "security_context_processor");
  public get securityContextProcessor() {
    return this._securityContextProcessor;
  }
  public putSecurityContextProcessor(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineSecurityContext {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineSecurityContextToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextOutputReference | OpenpipelineUserSessionsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineSecurityContextToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineSecurityContextOutputReference | OpenpipelineUserSessionsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineSecurityContextProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContext | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor {
  /**
  * Bucket that is assigned when the record is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#bucket_name OpenpipelineUserSessions#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#description OpenpipelineUserSessions#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#sample_data OpenpipelineUserSessions#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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


export function openpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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

export class OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined) {
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
export interface OpenpipelineUserSessionsPipelinesPipelineStorageProcessor {
  /**
  * bucket_assignment_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#bucket_assignment_processor OpenpipelineUserSessions#bucket_assignment_processor}
  */
  readonly bucketAssignmentProcessor?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor;
  /**
  * no_storage_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#no_storage_processor OpenpipelineUserSessions#no_storage_processor}
  */
  readonly noStorageProcessor?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor;
}

export function openpipelineUserSessionsPipelinesPipelineStorageProcessorToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_assignment_processor: openpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct!.bucketAssignmentProcessor),
    no_storage_processor: openpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct!.noStorageProcessor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineStorageProcessorToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_assignment_processor: {
      value: openpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct!.bucketAssignmentProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorList",
    },
    no_storage_processor: {
      value: openpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct!.noStorageProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineStorageProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined) {
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
  private _bucketAssignmentProcessor = new OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference(this, "bucket_assignment_processor");
  public get bucketAssignmentProcessor() {
    return this._bucketAssignmentProcessor;
  }
  public putBucketAssignmentProcessor(value: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorBucketAssignmentProcessor) {
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
  private _noStorageProcessor = new OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference(this, "no_storage_processor");
  public get noStorageProcessor() {
    return this._noStorageProcessor;
  }
  public putNoStorageProcessor(value: OpenpipelineUserSessionsPipelinesPipelineStorageProcessorNoStorageProcessor) {
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

export class OpenpipelineUserSessionsPipelinesPipelineStorageProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineStorageProcessorOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineStorageProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelinesPipelineStorage {
  /**
  * Default bucket assigned to records which do not match any other storage processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#catch_all_bucket_name OpenpipelineUserSessions#catch_all_bucket_name}
  */
  readonly catchAllBucketName?: string;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processor OpenpipelineUserSessions#processor}
  */
  readonly processor?: OpenpipelineUserSessionsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesPipelineStorageToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageOutputReference | OpenpipelineUserSessionsPipelinesPipelineStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch_all_bucket_name: cdktf.stringToTerraform(struct!.catchAllBucketName),
    processor: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineStorageProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineUserSessionsPipelinesPipelineStorageToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipelineStorageOutputReference | OpenpipelineUserSessionsPipelinesPipelineStorage): any {
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
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineStorageProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipelineStorage | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipelineStorage | undefined) {
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
  private _processor = new OpenpipelineUserSessionsPipelinesPipelineStorageProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineUserSessionsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsPipelinesPipeline {
  /**
  * Display name of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#display_name OpenpipelineUserSessions#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#id OpenpipelineUserSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#cost_allocation OpenpipelineUserSessions#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineUserSessionsPipelinesPipelineCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#data_extraction OpenpipelineUserSessions#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineUserSessionsPipelinesPipelineDataExtraction;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#metric_extraction OpenpipelineUserSessions#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineUserSessionsPipelinesPipelineMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#processing OpenpipelineUserSessions#processing}
  */
  readonly processing?: OpenpipelineUserSessionsPipelinesPipelineProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#product_allocation OpenpipelineUserSessions#product_allocation}
  */
  readonly productAllocation?: OpenpipelineUserSessionsPipelinesPipelineProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#security_context OpenpipelineUserSessions#security_context}
  */
  readonly securityContext?: OpenpipelineUserSessionsPipelinesPipelineSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#storage OpenpipelineUserSessions#storage}
  */
  readonly storage?: OpenpipelineUserSessionsPipelinesPipelineStorage;
}

export function openpipelineUserSessionsPipelinesPipelineToTerraform(struct?: OpenpipelineUserSessionsPipelinesPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    cost_allocation: openpipelineUserSessionsPipelinesPipelineCostAllocationToTerraform(struct!.costAllocation),
    data_extraction: openpipelineUserSessionsPipelinesPipelineDataExtractionToTerraform(struct!.dataExtraction),
    metric_extraction: openpipelineUserSessionsPipelinesPipelineMetricExtractionToTerraform(struct!.metricExtraction),
    processing: openpipelineUserSessionsPipelinesPipelineProcessingToTerraform(struct!.processing),
    product_allocation: openpipelineUserSessionsPipelinesPipelineProductAllocationToTerraform(struct!.productAllocation),
    security_context: openpipelineUserSessionsPipelinesPipelineSecurityContextToTerraform(struct!.securityContext),
    storage: openpipelineUserSessionsPipelinesPipelineStorageToTerraform(struct!.storage),
  }
}


export function openpipelineUserSessionsPipelinesPipelineToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesPipeline | cdktf.IResolvable): any {
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
      value: openpipelineUserSessionsPipelinesPipelineCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineCostAllocationList",
    },
    data_extraction: {
      value: openpipelineUserSessionsPipelinesPipelineDataExtractionToHclTerraform(struct!.dataExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineDataExtractionList",
    },
    metric_extraction: {
      value: openpipelineUserSessionsPipelinesPipelineMetricExtractionToHclTerraform(struct!.metricExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineMetricExtractionList",
    },
    processing: {
      value: openpipelineUserSessionsPipelinesPipelineProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProcessingList",
    },
    product_allocation: {
      value: openpipelineUserSessionsPipelinesPipelineProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineProductAllocationList",
    },
    security_context: {
      value: openpipelineUserSessionsPipelinesPipelineSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineSecurityContextList",
    },
    storage: {
      value: openpipelineUserSessionsPipelinesPipelineStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsPipelinesPipeline | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsPipelinesPipeline | cdktf.IResolvable | undefined) {
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
  private _costAllocation = new OpenpipelineUserSessionsPipelinesPipelineCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineUserSessionsPipelinesPipelineCostAllocation) {
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
  private _dataExtraction = new OpenpipelineUserSessionsPipelinesPipelineDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineUserSessionsPipelinesPipelineDataExtraction) {
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
  private _metricExtraction = new OpenpipelineUserSessionsPipelinesPipelineMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineUserSessionsPipelinesPipelineMetricExtraction) {
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
  private _processing = new OpenpipelineUserSessionsPipelinesPipelineProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineUserSessionsPipelinesPipelineProcessing) {
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
  private _productAllocation = new OpenpipelineUserSessionsPipelinesPipelineProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineUserSessionsPipelinesPipelineProductAllocation) {
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
  private _securityContext = new OpenpipelineUserSessionsPipelinesPipelineSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineUserSessionsPipelinesPipelineSecurityContext) {
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
  private _storage = new OpenpipelineUserSessionsPipelinesPipelineStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineUserSessionsPipelinesPipelineStorage) {
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

export class OpenpipelineUserSessionsPipelinesPipelineList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsPipelinesPipeline[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsPipelinesPipelineOutputReference {
    return new OpenpipelineUserSessionsPipelinesPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsPipelines {
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#pipeline OpenpipelineUserSessions#pipeline}
  */
  readonly pipeline?: OpenpipelineUserSessionsPipelinesPipeline[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsPipelinesToTerraform(struct?: OpenpipelineUserSessionsPipelinesOutputReference | OpenpipelineUserSessionsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline: cdktf.listMapper(openpipelineUserSessionsPipelinesPipelineToTerraform, true)(struct!.pipeline),
  }
}


export function openpipelineUserSessionsPipelinesToHclTerraform(struct?: OpenpipelineUserSessionsPipelinesOutputReference | OpenpipelineUserSessionsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsPipelinesPipelineToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsPipelinesPipelineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsPipelinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsPipelines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsPipelines | undefined) {
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
  private _pipeline = new OpenpipelineUserSessionsPipelinesPipelineList(this, "pipeline", false);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: OpenpipelineUserSessionsPipelinesPipeline[] | cdktf.IResolvable) {
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
export interface OpenpipelineUserSessionsRoutingEntry {
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#enabled OpenpipelineUserSessions#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#matcher OpenpipelineUserSessions#matcher}
  */
  readonly matcher: string;
  /**
  * Unique note describing the dynamic route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#note OpenpipelineUserSessions#note}
  */
  readonly note: string;
  /**
  * Identifier of the pipeline the record is routed into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#pipeline_id OpenpipelineUserSessions#pipeline_id}
  */
  readonly pipelineId: string;
}

export function openpipelineUserSessionsRoutingEntryToTerraform(struct?: OpenpipelineUserSessionsRoutingEntry | cdktf.IResolvable): any {
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


export function openpipelineUserSessionsRoutingEntryToHclTerraform(struct?: OpenpipelineUserSessionsRoutingEntry | cdktf.IResolvable): any {
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

export class OpenpipelineUserSessionsRoutingEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineUserSessionsRoutingEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineUserSessionsRoutingEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineUserSessionsRoutingEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineUserSessionsRoutingEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineUserSessionsRoutingEntryOutputReference {
    return new OpenpipelineUserSessionsRoutingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineUserSessionsRouting {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#entry OpenpipelineUserSessions#entry}
  */
  readonly entry?: OpenpipelineUserSessionsRoutingEntry[] | cdktf.IResolvable;
}

export function openpipelineUserSessionsRoutingToTerraform(struct?: OpenpipelineUserSessionsRoutingOutputReference | OpenpipelineUserSessionsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.listMapper(openpipelineUserSessionsRoutingEntryToTerraform, true)(struct!.entry),
  }
}


export function openpipelineUserSessionsRoutingToHclTerraform(struct?: OpenpipelineUserSessionsRoutingOutputReference | OpenpipelineUserSessionsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.listMapperHcl(openpipelineUserSessionsRoutingEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineUserSessionsRoutingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineUserSessionsRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineUserSessionsRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineUserSessionsRouting | undefined) {
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
  private _entry = new OpenpipelineUserSessionsRoutingEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: OpenpipelineUserSessionsRoutingEntry[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions dynatrace_openpipeline_user_sessions}
*/
export class OpenpipelineUserSessions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_user_sessions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineUserSessions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineUserSessions to import
  * @param importFromId The id of the existing OpenpipelineUserSessions that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineUserSessions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_user_sessions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/openpipeline_user_sessions dynatrace_openpipeline_user_sessions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineUserSessionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineUserSessionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_user_sessions',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
  private _endpoints = new OpenpipelineUserSessionsEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: OpenpipelineUserSessionsEndpoints) {
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
  private _pipelines = new OpenpipelineUserSessionsPipelinesOutputReference(this, "pipelines");
  public get pipelines() {
    return this._pipelines;
  }
  public putPipelines(value: OpenpipelineUserSessionsPipelines) {
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
  private _routing = new OpenpipelineUserSessionsRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineUserSessionsRouting) {
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
      endpoints: openpipelineUserSessionsEndpointsToTerraform(this._endpoints.internalValue),
      pipelines: openpipelineUserSessionsPipelinesToTerraform(this._pipelines.internalValue),
      routing: openpipelineUserSessionsRoutingToTerraform(this._routing.internalValue),
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
        value: openpipelineUserSessionsEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineUserSessionsEndpointsList",
      },
      pipelines: {
        value: openpipelineUserSessionsPipelinesToHclTerraform(this._pipelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineUserSessionsPipelinesList",
      },
      routing: {
        value: openpipelineUserSessionsRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineUserSessionsRoutingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
