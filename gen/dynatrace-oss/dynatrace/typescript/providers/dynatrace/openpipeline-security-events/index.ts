// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineSecurityEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#endpoints OpenpipelineSecurityEvents#endpoints}
  */
  readonly endpoints?: OpenpipelineSecurityEventsEndpoints;
  /**
  * pipelines block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#pipelines OpenpipelineSecurityEvents#pipelines}
  */
  readonly pipelines?: OpenpipelineSecurityEventsPipelines;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#routing OpenpipelineSecurityEvents#routing}
  */
  readonly routing?: OpenpipelineSecurityEventsRouting;
}
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dql_script OpenpipelineSecurityEvents#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#name OpenpipelineSecurityEvents#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value OpenpipelineSecurityEvents#value}
  */
  readonly value: string;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields OpenpipelineSecurityEvents#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#from_name OpenpipelineSecurityEvents#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#to_name OpenpipelineSecurityEvents#to_name}
  */
  readonly toName: string;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#custom_matcher OpenpipelineSecurityEvents#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#technology_id OpenpipelineSecurityEvents#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dql_processor OpenpipelineSecurityEvents#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#drop_processor OpenpipelineSecurityEvents#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields_add_processor OpenpipelineSecurityEvents#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields_remove_processor OpenpipelineSecurityEvents#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields_rename_processor OpenpipelineSecurityEvents#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#technology_processor OpenpipelineSecurityEvents#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorTechnologyProcessor) {
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

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorOutputReference {
    return new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsEndpointsEndpointProcessors {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsEndpointsEndpointProcessorsToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointProcessorsToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointProcessorsOutputReference | OpenpipelineSecurityEventsEndpointsEndpointProcessors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsEndpointsEndpointProcessorsProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsEndpointsEndpointProcessorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointProcessors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointProcessors | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsEndpointsEndpointProcessorsProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsEndpointsEndpointRouting {
  /**
  * Pipeline ID of the static routing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#pipeline_id OpenpipelineSecurityEvents#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Type of routing, static or dynamic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#type OpenpipelineSecurityEvents#type}
  */
  readonly type: string;
}

export function openpipelineSecurityEventsEndpointsEndpointRoutingToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointRoutingOutputReference | OpenpipelineSecurityEventsEndpointsEndpointRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointRoutingToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpointRoutingOutputReference | OpenpipelineSecurityEventsEndpointsEndpointRouting): any {
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

export class OpenpipelineSecurityEventsEndpointsEndpointRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpointRouting | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpointRouting | undefined) {
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
export interface OpenpipelineSecurityEventsEndpointsEndpoint {
  /**
  * The default bucket assigned to records for the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#default_bucket OpenpipelineSecurityEvents#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * Display name of the ingest source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#display_name OpenpipelineSecurityEvents#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The segment of the ingest source, which is applied to the base path. Must be unique within a configuration."
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#segment OpenpipelineSecurityEvents#segment}
  */
  readonly segment: string;
  /**
  * processors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processors OpenpipelineSecurityEvents#processors}
  */
  readonly processors?: OpenpipelineSecurityEventsEndpointsEndpointProcessors;
  /**
  * routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#routing OpenpipelineSecurityEvents#routing}
  */
  readonly routing: OpenpipelineSecurityEventsEndpointsEndpointRouting;
}

export function openpipelineSecurityEventsEndpointsEndpointToTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bucket: cdktf.stringToTerraform(struct!.defaultBucket),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    segment: cdktf.stringToTerraform(struct!.segment),
    processors: openpipelineSecurityEventsEndpointsEndpointProcessorsToTerraform(struct!.processors),
    routing: openpipelineSecurityEventsEndpointsEndpointRoutingToTerraform(struct!.routing),
  }
}


export function openpipelineSecurityEventsEndpointsEndpointToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsEndpoint | cdktf.IResolvable): any {
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
      value: openpipelineSecurityEventsEndpointsEndpointProcessorsToHclTerraform(struct!.processors),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointProcessorsList",
    },
    routing: {
      value: openpipelineSecurityEventsEndpointsEndpointRoutingToHclTerraform(struct!.routing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointRoutingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsEndpointsEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsEndpointsEndpoint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsEndpointsEndpoint | cdktf.IResolvable | undefined) {
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
  private _processors = new OpenpipelineSecurityEventsEndpointsEndpointProcessorsOutputReference(this, "processors");
  public get processors() {
    return this._processors;
  }
  public putProcessors(value: OpenpipelineSecurityEventsEndpointsEndpointProcessors) {
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
  private _routing = new OpenpipelineSecurityEventsEndpointsEndpointRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineSecurityEventsEndpointsEndpointRouting) {
    this._routing.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing.internalValue;
  }
}

export class OpenpipelineSecurityEventsEndpointsEndpointList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsEndpointsEndpoint[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsEndpointsEndpointOutputReference {
    return new OpenpipelineSecurityEventsEndpointsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsEndpoints {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#endpoint OpenpipelineSecurityEvents#endpoint}
  */
  readonly endpoint?: OpenpipelineSecurityEventsEndpointsEndpoint[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsEndpointsToTerraform(struct?: OpenpipelineSecurityEventsEndpointsOutputReference | OpenpipelineSecurityEventsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.listMapper(openpipelineSecurityEventsEndpointsEndpointToTerraform, true)(struct!.endpoint),
  }
}


export function openpipelineSecurityEventsEndpointsToHclTerraform(struct?: OpenpipelineSecurityEventsEndpointsOutputReference | OpenpipelineSecurityEventsEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsEndpointsEndpointToHclTerraform, true)(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsEndpointsEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsEndpoints | undefined) {
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
  private _endpoint = new OpenpipelineSecurityEventsEndpointsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: OpenpipelineSecurityEventsEndpointsEndpoint[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#constant OpenpipelineSecurityEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#multi_value_constant OpenpipelineSecurityEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#type OpenpipelineSecurityEvents#type}
  */
  readonly type: string;
}

export function openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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


export function openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference | OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value OpenpipelineSecurityEvents#value}
  */
  readonly value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue;
}

export function openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
    value: openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor {
  /**
  * cost_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#cost_allocation_processor OpenpipelineSecurityEvents#cost_allocation_processor}
  */
  readonly costAllocationProcessor?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_allocation_processor: openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToTerraform(struct!.costAllocationProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_allocation_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorToHclTerraform(struct!.costAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _costAllocationProcessor = new OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessorOutputReference(this, "cost_allocation_processor");
  public get costAllocationProcessor() {
    return this._costAllocationProcessor;
  }
  public putCostAllocationProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorCostAllocationProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineCostAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineCostAllocationToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationOutputReference | OpenpipelineSecurityEventsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineCostAllocationToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationOutputReference | OpenpipelineSecurityEventsPipelinesPipelineCostAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineCostAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineCostAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocation | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields OpenpipelineSecurityEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#semantic OpenpipelineSecurityEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#forwarder_config_id OpenpipelineSecurityEvents#forwarder_config_id}
  */
  readonly forwarderConfigId: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field_extraction OpenpipelineSecurityEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
    field_extraction: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorFieldExtraction) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#constant OpenpipelineSecurityEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#multi_value_constant OpenpipelineSecurityEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#type OpenpipelineSecurityEvents#type}
  */
  readonly type: string;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#constant OpenpipelineSecurityEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#multi_value_constant OpenpipelineSecurityEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#type OpenpipelineSecurityEvents#type}
  */
  readonly type: string;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields OpenpipelineSecurityEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#semantic OpenpipelineSecurityEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * event_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#event_provider OpenpipelineSecurityEvents#event_provider}
  */
  readonly eventProvider: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider;
  /**
  * event_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#event_type OpenpipelineSecurityEvents#event_type}
  */
  readonly eventType: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field_extraction OpenpipelineSecurityEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
    event_provider: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToTerraform(struct!.eventProvider),
    event_type: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToTerraform(struct!.eventType),
    field_extraction: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderToHclTerraform(struct!.eventProvider),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderList",
    },
    event_type: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeToHclTerraform(struct!.eventType),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeList",
    },
    field_extraction: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor | undefined) {
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
  private _eventProvider = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProviderOutputReference(this, "event_provider");
  public get eventProvider() {
    return this._eventProvider;
  }
  public putEventProvider(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventProvider) {
    this._eventProvider.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventProviderInput() {
    return this._eventProvider.internalValue;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventTypeOutputReference(this, "event_type");
  public get eventType() {
    return this._eventType;
  }
  public putEventType(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorEventType) {
    this._eventType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType.internalValue;
  }

  // field_extraction - computed: false, optional: true, required: false
  private _fieldExtraction = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties {
  /**
  * The key to set on the davis event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#key OpenpipelineSecurityEvents#key}
  */
  readonly key: string;
  /**
  * The value assigned to the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value OpenpipelineSecurityEvents#value}
  */
  readonly value: string;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties | cdktf.IResolvable | undefined) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#properties OpenpipelineSecurityEvents#properties}
  */
  readonly properties: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
    properties: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToTerraform, true)(struct!.properties),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor | undefined) {
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
  private _properties = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction {
  /**
  * Unique fields to include/exclude in the extracted record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields OpenpipelineSecurityEvents#fields}
  */
  readonly fields?: string[];
  /**
  * Defines how the fields of the source record should be extracted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#semantic OpenpipelineSecurityEvents#semantic}
  */
  readonly semantic: string;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    semantic: cdktf.stringToTerraform(struct!.semantic),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field_extraction OpenpipelineSecurityEvents#field_extraction}
  */
  readonly fieldExtraction?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
    field_extraction: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToTerraform(struct!.fieldExtraction),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionToHclTerraform(struct!.fieldExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor | undefined) {
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
  private _fieldExtraction = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtractionOutputReference(this, "field_extraction");
  public get fieldExtraction() {
    return this._fieldExtraction;
  }
  public putFieldExtraction(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorFieldExtraction) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor {
  /**
  * azure_log_forwarding_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#azure_log_forwarding_processor OpenpipelineSecurityEvents#azure_log_forwarding_processor}
  */
  readonly azureLogForwardingProcessor?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor;
  /**
  * bizevent_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#bizevent_extraction_processor OpenpipelineSecurityEvents#bizevent_extraction_processor}
  */
  readonly bizeventExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor;
  /**
  * davis_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#davis_event_extraction_processor OpenpipelineSecurityEvents#davis_event_extraction_processor}
  */
  readonly davisEventExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor;
  /**
  * security_event_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#security_event_extraction_processor OpenpipelineSecurityEvents#security_event_extraction_processor}
  */
  readonly securityEventExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_log_forwarding_processor: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToTerraform(struct!.azureLogForwardingProcessor),
    bizevent_extraction_processor: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToTerraform(struct!.bizeventExtractionProcessor),
    davis_event_extraction_processor: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToTerraform(struct!.davisEventExtractionProcessor),
    security_event_extraction_processor: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToTerraform(struct!.securityEventExtractionProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_log_forwarding_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorToHclTerraform(struct!.azureLogForwardingProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorList",
    },
    bizevent_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorToHclTerraform(struct!.bizeventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorList",
    },
    davis_event_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorToHclTerraform(struct!.davisEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorList",
    },
    security_event_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorToHclTerraform(struct!.securityEventExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _azureLogForwardingProcessor = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessorOutputReference(this, "azure_log_forwarding_processor");
  public get azureLogForwardingProcessor() {
    return this._azureLogForwardingProcessor;
  }
  public putAzureLogForwardingProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorAzureLogForwardingProcessor) {
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
  private _bizeventExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessorOutputReference(this, "bizevent_extraction_processor");
  public get bizeventExtractionProcessor() {
    return this._bizeventExtractionProcessor;
  }
  public putBizeventExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorBizeventExtractionProcessor) {
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
  private _davisEventExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessorOutputReference(this, "davis_event_extraction_processor");
  public get davisEventExtractionProcessor() {
    return this._davisEventExtractionProcessor;
  }
  public putDavisEventExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorDavisEventExtractionProcessor) {
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
  private _securityEventExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessorOutputReference(this, "security_event_extraction_processor");
  public get securityEventExtractionProcessor() {
    return this._securityEventExtractionProcessor;
  }
  public putSecurityEventExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorSecurityEventExtractionProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineDataExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineDataExtractionToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineDataExtractionToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineDataExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineDataExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineDataExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtraction | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dimensions OpenpipelineSecurityEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#metric_key OpenpipelineSecurityEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#aggregation OpenpipelineSecurityEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dimensions OpenpipelineSecurityEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#metric_key OpenpipelineSecurityEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sampling OpenpipelineSecurityEvents#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor {
  /**
  * Indicates whether aggregation is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#aggregation OpenpipelineSecurityEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The default value to use if the given field value could not be extracted. String value must be a number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#default_value OpenpipelineSecurityEvents#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * List of unique dimensions to add to the metric.
  * Dimensions are represented in the format '({dimensionName}=)?{sourceField}'.
  * '{dimensionName}' is optional if {sourceField} represents a valid metric dimension name.
  * '{sourceField}' has to represent a valid DQL field accessor and it can access a nested field (for example, 'field[field2][0]')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dimensions OpenpipelineSecurityEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field from which to extract the value for the metric, or 'null' for a duration measurement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field?: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Indicates whether the metric value should be the specified field or duration. Possible values: 'DURATION', 'FIELD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#measurement OpenpipelineSecurityEvents#measurement}
  */
  readonly measurement: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#metric_key OpenpipelineSecurityEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * Indicates whether sampling is considered for metric extraction. Possible values: 'DISABLED', 'ENABLED'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sampling OpenpipelineSecurityEvents#sampling}
  */
  readonly sampling?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * List of dimensions to add to the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dimensions OpenpipelineSecurityEvents#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The field to extract the value for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field: string;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * The key of the metric to write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#metric_key OpenpipelineSecurityEvents#metric_key}
  */
  readonly metricKey: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor {
  /**
  * counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#counter_metric_extraction_processor OpenpipelineSecurityEvents#counter_metric_extraction_processor}
  */
  readonly counterMetricExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor;
  /**
  * sampling_aware_counter_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sampling_aware_counter_metric_extraction_processor OpenpipelineSecurityEvents#sampling_aware_counter_metric_extraction_processor}
  */
  readonly samplingAwareCounterMetricExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor;
  /**
  * sampling_aware_value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sampling_aware_value_metric_extraction_processor OpenpipelineSecurityEvents#sampling_aware_value_metric_extraction_processor}
  */
  readonly samplingAwareValueMetricExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor;
  /**
  * value_metric_extraction_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value_metric_extraction_processor OpenpipelineSecurityEvents#value_metric_extraction_processor}
  */
  readonly valueMetricExtractionProcessor?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_metric_extraction_processor: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToTerraform(struct!.counterMetricExtractionProcessor),
    sampling_aware_counter_metric_extraction_processor: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
    sampling_aware_value_metric_extraction_processor: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
    value_metric_extraction_processor: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToTerraform(struct!.valueMetricExtractionProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_metric_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorToHclTerraform(struct!.counterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorList",
    },
    sampling_aware_counter_metric_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorToHclTerraform(struct!.samplingAwareCounterMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorList",
    },
    sampling_aware_value_metric_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorToHclTerraform(struct!.samplingAwareValueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorList",
    },
    value_metric_extraction_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorToHclTerraform(struct!.valueMetricExtractionProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor | cdktf.IResolvable | undefined) {
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
  private _counterMetricExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessorOutputReference(this, "counter_metric_extraction_processor");
  public get counterMetricExtractionProcessor() {
    return this._counterMetricExtractionProcessor;
  }
  public putCounterMetricExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorCounterMetricExtractionProcessor) {
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
  private _samplingAwareCounterMetricExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessorOutputReference(this, "sampling_aware_counter_metric_extraction_processor");
  public get samplingAwareCounterMetricExtractionProcessor() {
    return this._samplingAwareCounterMetricExtractionProcessor;
  }
  public putSamplingAwareCounterMetricExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareCounterMetricExtractionProcessor) {
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
  private _samplingAwareValueMetricExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessorOutputReference(this, "sampling_aware_value_metric_extraction_processor");
  public get samplingAwareValueMetricExtractionProcessor() {
    return this._samplingAwareValueMetricExtractionProcessor;
  }
  public putSamplingAwareValueMetricExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorSamplingAwareValueMetricExtractionProcessor) {
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
  private _valueMetricExtractionProcessor = new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessorOutputReference(this, "value_metric_extraction_processor");
  public get valueMetricExtractionProcessor() {
    return this._valueMetricExtractionProcessor;
  }
  public putValueMetricExtractionProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorValueMetricExtractionProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineMetricExtractionToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionOutputReference | OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * The DQL script to apply on the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dql_script OpenpipelineSecurityEvents#dql_script}
  */
  readonly dqlScript: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField {
  /**
  * Name of the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#name OpenpipelineSecurityEvents#name}
  */
  readonly name: string;
  /**
  *  Value to assign to the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value OpenpipelineSecurityEvents#value}
  */
  readonly value: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
    field: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor | undefined) {
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
  private _field = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Field to add to the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields OpenpipelineSecurityEvents#fields}
  */
  readonly fields: string[];
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField {
  /**
  * The field to rename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#from_name OpenpipelineSecurityEvents#from_name}
  */
  readonly fromName: string;
  /**
  * The new field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#to_name OpenpipelineSecurityEvents#to_name}
  */
  readonly toName: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField | cdktf.IResolvable | undefined) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
    field: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToTerraform, true)(struct!.field),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor): any {
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
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor | undefined) {
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
  private _field = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor {
  /**
  * Optional customer-defined matching condition, that is used in place of the main technology matcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#custom_matcher OpenpipelineSecurityEvents#custom_matcher}
  */
  readonly customMatcher?: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * The reference identifier to a specific technology. This technology is applied on the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#technology_id OpenpipelineSecurityEvents#technology_id}
  */
  readonly technologyId: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor {
  /**
  * dql_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#dql_processor OpenpipelineSecurityEvents#dql_processor}
  */
  readonly dqlProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor;
  /**
  * drop_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#drop_processor OpenpipelineSecurityEvents#drop_processor}
  */
  readonly dropProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor;
  /**
  * fields_add_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields_add_processor OpenpipelineSecurityEvents#fields_add_processor}
  */
  readonly fieldsAddProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor;
  /**
  * fields_remove_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields_remove_processor OpenpipelineSecurityEvents#fields_remove_processor}
  */
  readonly fieldsRemoveProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor;
  /**
  * fields_rename_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#fields_rename_processor OpenpipelineSecurityEvents#fields_rename_processor}
  */
  readonly fieldsRenameProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor;
  /**
  * technology_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#technology_processor OpenpipelineSecurityEvents#technology_processor}
  */
  readonly technologyProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_processor: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorToTerraform(struct!.dqlProcessor),
    drop_processor: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorToTerraform(struct!.dropProcessor),
    fields_add_processor: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToTerraform(struct!.fieldsAddProcessor),
    fields_remove_processor: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToTerraform(struct!.fieldsRemoveProcessor),
    fields_rename_processor: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToTerraform(struct!.fieldsRenameProcessor),
    technology_processor: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToTerraform(struct!.technologyProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProcessingProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorToHclTerraform(struct!.dqlProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorList",
    },
    drop_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorToHclTerraform(struct!.dropProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorList",
    },
    fields_add_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorToHclTerraform(struct!.fieldsAddProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorList",
    },
    fields_remove_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorToHclTerraform(struct!.fieldsRemoveProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorList",
    },
    fields_rename_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorToHclTerraform(struct!.fieldsRenameProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorList",
    },
    technology_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorToHclTerraform(struct!.technologyProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor | cdktf.IResolvable | undefined) {
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
  private _dqlProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessorOutputReference(this, "dql_processor");
  public get dqlProcessor() {
    return this._dqlProcessor;
  }
  public putDqlProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDqlProcessor) {
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
  private _dropProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessorOutputReference(this, "drop_processor");
  public get dropProcessor() {
    return this._dropProcessor;
  }
  public putDropProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorDropProcessor) {
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
  private _fieldsAddProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessorOutputReference(this, "fields_add_processor");
  public get fieldsAddProcessor() {
    return this._fieldsAddProcessor;
  }
  public putFieldsAddProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsAddProcessor) {
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
  private _fieldsRemoveProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessorOutputReference(this, "fields_remove_processor");
  public get fieldsRemoveProcessor() {
    return this._fieldsRemoveProcessor;
  }
  public putFieldsRemoveProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRemoveProcessor) {
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
  private _fieldsRenameProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessorOutputReference(this, "fields_rename_processor");
  public get fieldsRenameProcessor() {
    return this._fieldsRenameProcessor;
  }
  public putFieldsRenameProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorFieldsRenameProcessor) {
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
  private _technologyProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessorOutputReference(this, "technology_processor");
  public get technologyProcessor() {
    return this._technologyProcessor;
  }
  public putTechnologyProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorTechnologyProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProcessing {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineProcessingToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineProcessingProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProcessingToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProcessingOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineProcessingProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProcessing | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProcessingProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#constant OpenpipelineSecurityEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#multi_value_constant OpenpipelineSecurityEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#type OpenpipelineSecurityEvents#type}
  */
  readonly type: string;
}

export function openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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


export function openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value OpenpipelineSecurityEvents#value}
  */
  readonly value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue;
}

export function openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
    value: openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor | undefined) {
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
  private _value = new OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor {
  /**
  * product_allocation_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#product_allocation_processor OpenpipelineSecurityEvents#product_allocation_processor}
  */
  readonly productAllocationProcessor?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    product_allocation_processor: openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToTerraform(struct!.productAllocationProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    product_allocation_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorToHclTerraform(struct!.productAllocationProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor | cdktf.IResolvable | undefined) {
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
  private _productAllocationProcessor = new OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessorOutputReference(this, "product_allocation_processor");
  public get productAllocationProcessor() {
    return this._productAllocationProcessor;
  }
  public putProductAllocationProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorProductAllocationProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineProductAllocation {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineProductAllocationToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineProductAllocationToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationOutputReference | OpenpipelineSecurityEventsPipelinesPipelineProductAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineProductAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineProductAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocation | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocationProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue {
  /**
  * Assign a constant value. Can only be used if 'type' is set to 'constant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#constant OpenpipelineSecurityEvents#constant}
  */
  readonly constant?: string;
  /**
  * Assign a value extracted from a field. Can only be used if 'type' is set to 'field'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#field OpenpipelineSecurityEvents#field}
  */
  readonly field?: string;
  /**
  * The constant multi value to assign. Can only be used if 'type' is set to 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#multi_value_constant OpenpipelineSecurityEvents#multi_value_constant}
  */
  readonly multiValueConstant?: string[];
  /**
  * Strategy to assign a value. Possible values: 'constant', 'field', 'multiValueConstant'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#type OpenpipelineSecurityEvents#type}
  */
  readonly type: string;
}

export function openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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


export function openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference | OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#value OpenpipelineSecurityEvents#value}
  */
  readonly value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue;
}

export function openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
    value: openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToTerraform(struct!.value),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor | undefined) {
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
  private _value = new OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor {
  /**
  * security_context_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#security_context_processor OpenpipelineSecurityEvents#security_context_processor}
  */
  readonly securityContextProcessor?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_context_processor: openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToTerraform(struct!.securityContextProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_context_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorToHclTerraform(struct!.securityContextProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor | cdktf.IResolvable | undefined) {
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
  private _securityContextProcessor = new OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessorOutputReference(this, "security_context_processor");
  public get securityContextProcessor() {
    return this._securityContextProcessor;
  }
  public putSecurityContextProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorSecurityContextProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineSecurityContext {
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineSecurityContextToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextOutputReference | OpenpipelineSecurityEventsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineSecurityContextToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextOutputReference | OpenpipelineSecurityEventsPipelinesPipelineSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    processor: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._processor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processor = this._processor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContext | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContextProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor {
  /**
  * Bucket that is assigned when the record is matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#bucket_name OpenpipelineSecurityEvents#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor {
  /**
  * Name or description of the processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#description OpenpipelineSecurityEvents#description}
  */
  readonly description: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the processor. Must be unique within a stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Sample data related to the processor for documentation or testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#sample_data OpenpipelineSecurityEvents#sample_data}
  */
  readonly sampleData?: string;
}

export function openpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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


export function openpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference | OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor): any {
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

export class OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor | undefined) {
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
export interface OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor {
  /**
  * bucket_assignment_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#bucket_assignment_processor OpenpipelineSecurityEvents#bucket_assignment_processor}
  */
  readonly bucketAssignmentProcessor?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor;
  /**
  * no_storage_processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#no_storage_processor OpenpipelineSecurityEvents#no_storage_processor}
  */
  readonly noStorageProcessor?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor;
}

export function openpipelineSecurityEventsPipelinesPipelineStorageProcessorToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_assignment_processor: openpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToTerraform(struct!.bucketAssignmentProcessor),
    no_storage_processor: openpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorToTerraform(struct!.noStorageProcessor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineStorageProcessorToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_assignment_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorToHclTerraform(struct!.bucketAssignmentProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorList",
    },
    no_storage_processor: {
      value: openpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorToHclTerraform(struct!.noStorageProcessor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor | cdktf.IResolvable | undefined) {
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
  private _bucketAssignmentProcessor = new OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessorOutputReference(this, "bucket_assignment_processor");
  public get bucketAssignmentProcessor() {
    return this._bucketAssignmentProcessor;
  }
  public putBucketAssignmentProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorBucketAssignmentProcessor) {
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
  private _noStorageProcessor = new OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessorOutputReference(this, "no_storage_processor");
  public get noStorageProcessor() {
    return this._noStorageProcessor;
  }
  public putNoStorageProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorNoStorageProcessor) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelinesPipelineStorage {
  /**
  * Default bucket assigned to records which do not match any other storage processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#catch_all_bucket_name OpenpipelineSecurityEvents#catch_all_bucket_name}
  */
  readonly catchAllBucketName?: string;
  /**
  * processor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processor OpenpipelineSecurityEvents#processor}
  */
  readonly processor?: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesPipelineStorageToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageOutputReference | OpenpipelineSecurityEventsPipelinesPipelineStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catch_all_bucket_name: cdktf.stringToTerraform(struct!.catchAllBucketName),
    processor: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineStorageProcessorToTerraform, true)(struct!.processor),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineStorageToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipelineStorageOutputReference | OpenpipelineSecurityEventsPipelinesPipelineStorage): any {
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
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineStorageProcessorToHclTerraform, true)(struct!.processor),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipelineStorage | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipelineStorage | undefined) {
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
  private _processor = new OpenpipelineSecurityEventsPipelinesPipelineStorageProcessorList(this, "processor", false);
  public get processor() {
    return this._processor;
  }
  public putProcessor(value: OpenpipelineSecurityEventsPipelinesPipelineStorageProcessor[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsPipelinesPipeline {
  /**
  * Display name of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#display_name OpenpipelineSecurityEvents#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Identifier of the pipeline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#id OpenpipelineSecurityEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * cost_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#cost_allocation OpenpipelineSecurityEvents#cost_allocation}
  */
  readonly costAllocation?: OpenpipelineSecurityEventsPipelinesPipelineCostAllocation;
  /**
  * data_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#data_extraction OpenpipelineSecurityEvents#data_extraction}
  */
  readonly dataExtraction?: OpenpipelineSecurityEventsPipelinesPipelineDataExtraction;
  /**
  * metric_extraction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#metric_extraction OpenpipelineSecurityEvents#metric_extraction}
  */
  readonly metricExtraction?: OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction;
  /**
  * processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#processing OpenpipelineSecurityEvents#processing}
  */
  readonly processing?: OpenpipelineSecurityEventsPipelinesPipelineProcessing;
  /**
  * product_allocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#product_allocation OpenpipelineSecurityEvents#product_allocation}
  */
  readonly productAllocation?: OpenpipelineSecurityEventsPipelinesPipelineProductAllocation;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#security_context OpenpipelineSecurityEvents#security_context}
  */
  readonly securityContext?: OpenpipelineSecurityEventsPipelinesPipelineSecurityContext;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#storage OpenpipelineSecurityEvents#storage}
  */
  readonly storage?: OpenpipelineSecurityEventsPipelinesPipelineStorage;
}

export function openpipelineSecurityEventsPipelinesPipelineToTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipeline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    cost_allocation: openpipelineSecurityEventsPipelinesPipelineCostAllocationToTerraform(struct!.costAllocation),
    data_extraction: openpipelineSecurityEventsPipelinesPipelineDataExtractionToTerraform(struct!.dataExtraction),
    metric_extraction: openpipelineSecurityEventsPipelinesPipelineMetricExtractionToTerraform(struct!.metricExtraction),
    processing: openpipelineSecurityEventsPipelinesPipelineProcessingToTerraform(struct!.processing),
    product_allocation: openpipelineSecurityEventsPipelinesPipelineProductAllocationToTerraform(struct!.productAllocation),
    security_context: openpipelineSecurityEventsPipelinesPipelineSecurityContextToTerraform(struct!.securityContext),
    storage: openpipelineSecurityEventsPipelinesPipelineStorageToTerraform(struct!.storage),
  }
}


export function openpipelineSecurityEventsPipelinesPipelineToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesPipeline | cdktf.IResolvable): any {
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
      value: openpipelineSecurityEventsPipelinesPipelineCostAllocationToHclTerraform(struct!.costAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineCostAllocationList",
    },
    data_extraction: {
      value: openpipelineSecurityEventsPipelinesPipelineDataExtractionToHclTerraform(struct!.dataExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineDataExtractionList",
    },
    metric_extraction: {
      value: openpipelineSecurityEventsPipelinesPipelineMetricExtractionToHclTerraform(struct!.metricExtraction),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionList",
    },
    processing: {
      value: openpipelineSecurityEventsPipelinesPipelineProcessingToHclTerraform(struct!.processing),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProcessingList",
    },
    product_allocation: {
      value: openpipelineSecurityEventsPipelinesPipelineProductAllocationToHclTerraform(struct!.productAllocation),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineProductAllocationList",
    },
    security_context: {
      value: openpipelineSecurityEventsPipelinesPipelineSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineSecurityContextList",
    },
    storage: {
      value: openpipelineSecurityEventsPipelinesPipelineStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesPipelineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsPipelinesPipeline | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsPipelinesPipeline | cdktf.IResolvable | undefined) {
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
  private _costAllocation = new OpenpipelineSecurityEventsPipelinesPipelineCostAllocationOutputReference(this, "cost_allocation");
  public get costAllocation() {
    return this._costAllocation;
  }
  public putCostAllocation(value: OpenpipelineSecurityEventsPipelinesPipelineCostAllocation) {
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
  private _dataExtraction = new OpenpipelineSecurityEventsPipelinesPipelineDataExtractionOutputReference(this, "data_extraction");
  public get dataExtraction() {
    return this._dataExtraction;
  }
  public putDataExtraction(value: OpenpipelineSecurityEventsPipelinesPipelineDataExtraction) {
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
  private _metricExtraction = new OpenpipelineSecurityEventsPipelinesPipelineMetricExtractionOutputReference(this, "metric_extraction");
  public get metricExtraction() {
    return this._metricExtraction;
  }
  public putMetricExtraction(value: OpenpipelineSecurityEventsPipelinesPipelineMetricExtraction) {
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
  private _processing = new OpenpipelineSecurityEventsPipelinesPipelineProcessingOutputReference(this, "processing");
  public get processing() {
    return this._processing;
  }
  public putProcessing(value: OpenpipelineSecurityEventsPipelinesPipelineProcessing) {
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
  private _productAllocation = new OpenpipelineSecurityEventsPipelinesPipelineProductAllocationOutputReference(this, "product_allocation");
  public get productAllocation() {
    return this._productAllocation;
  }
  public putProductAllocation(value: OpenpipelineSecurityEventsPipelinesPipelineProductAllocation) {
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
  private _securityContext = new OpenpipelineSecurityEventsPipelinesPipelineSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: OpenpipelineSecurityEventsPipelinesPipelineSecurityContext) {
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
  private _storage = new OpenpipelineSecurityEventsPipelinesPipelineStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: OpenpipelineSecurityEventsPipelinesPipelineStorage) {
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

export class OpenpipelineSecurityEventsPipelinesPipelineList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsPipelinesPipeline[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsPipelinesPipelineOutputReference {
    return new OpenpipelineSecurityEventsPipelinesPipelineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsPipelines {
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#pipeline OpenpipelineSecurityEvents#pipeline}
  */
  readonly pipeline?: OpenpipelineSecurityEventsPipelinesPipeline[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsPipelinesToTerraform(struct?: OpenpipelineSecurityEventsPipelinesOutputReference | OpenpipelineSecurityEventsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline: cdktf.listMapper(openpipelineSecurityEventsPipelinesPipelineToTerraform, true)(struct!.pipeline),
  }
}


export function openpipelineSecurityEventsPipelinesToHclTerraform(struct?: OpenpipelineSecurityEventsPipelinesOutputReference | OpenpipelineSecurityEventsPipelines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pipeline: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsPipelinesPipelineToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsPipelinesPipelineList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsPipelinesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsPipelines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsPipelines | undefined) {
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
  private _pipeline = new OpenpipelineSecurityEventsPipelinesPipelineList(this, "pipeline", false);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: OpenpipelineSecurityEventsPipelinesPipeline[] | cdktf.IResolvable) {
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
export interface OpenpipelineSecurityEventsRoutingEntry {
  /**
  * Indicates if the object is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#enabled OpenpipelineSecurityEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Matching condition to apply on incoming records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#matcher OpenpipelineSecurityEvents#matcher}
  */
  readonly matcher: string;
  /**
  * Unique note describing the dynamic route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#note OpenpipelineSecurityEvents#note}
  */
  readonly note: string;
  /**
  * Identifier of the pipeline the record is routed into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#pipeline_id OpenpipelineSecurityEvents#pipeline_id}
  */
  readonly pipelineId: string;
}

export function openpipelineSecurityEventsRoutingEntryToTerraform(struct?: OpenpipelineSecurityEventsRoutingEntry | cdktf.IResolvable): any {
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


export function openpipelineSecurityEventsRoutingEntryToHclTerraform(struct?: OpenpipelineSecurityEventsRoutingEntry | cdktf.IResolvable): any {
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

export class OpenpipelineSecurityEventsRoutingEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpenpipelineSecurityEventsRoutingEntry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpenpipelineSecurityEventsRoutingEntry | cdktf.IResolvable | undefined) {
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

export class OpenpipelineSecurityEventsRoutingEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineSecurityEventsRoutingEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineSecurityEventsRoutingEntryOutputReference {
    return new OpenpipelineSecurityEventsRoutingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineSecurityEventsRouting {
  /**
  * entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#entry OpenpipelineSecurityEvents#entry}
  */
  readonly entry?: OpenpipelineSecurityEventsRoutingEntry[] | cdktf.IResolvable;
}

export function openpipelineSecurityEventsRoutingToTerraform(struct?: OpenpipelineSecurityEventsRoutingOutputReference | OpenpipelineSecurityEventsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.listMapper(openpipelineSecurityEventsRoutingEntryToTerraform, true)(struct!.entry),
  }
}


export function openpipelineSecurityEventsRoutingToHclTerraform(struct?: OpenpipelineSecurityEventsRoutingOutputReference | OpenpipelineSecurityEventsRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.listMapperHcl(openpipelineSecurityEventsRoutingEntryToHclTerraform, true)(struct!.entry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineSecurityEventsRoutingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineSecurityEventsRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineSecurityEventsRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineSecurityEventsRouting | undefined) {
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
  private _entry = new OpenpipelineSecurityEventsRoutingEntryList(this, "entry", false);
  public get entry() {
    return this._entry;
  }
  public putEntry(value: OpenpipelineSecurityEventsRoutingEntry[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events dynatrace_openpipeline_security_events}
*/
export class OpenpipelineSecurityEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_security_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineSecurityEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineSecurityEvents to import
  * @param importFromId The id of the existing OpenpipelineSecurityEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineSecurityEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_security_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/openpipeline_security_events dynatrace_openpipeline_security_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineSecurityEventsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineSecurityEventsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_security_events',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
  private _endpoints = new OpenpipelineSecurityEventsEndpointsOutputReference(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: OpenpipelineSecurityEventsEndpoints) {
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
  private _pipelines = new OpenpipelineSecurityEventsPipelinesOutputReference(this, "pipelines");
  public get pipelines() {
    return this._pipelines;
  }
  public putPipelines(value: OpenpipelineSecurityEventsPipelines) {
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
  private _routing = new OpenpipelineSecurityEventsRoutingOutputReference(this, "routing");
  public get routing() {
    return this._routing;
  }
  public putRouting(value: OpenpipelineSecurityEventsRouting) {
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
      endpoints: openpipelineSecurityEventsEndpointsToTerraform(this._endpoints.internalValue),
      pipelines: openpipelineSecurityEventsPipelinesToTerraform(this._pipelines.internalValue),
      routing: openpipelineSecurityEventsRoutingToTerraform(this._routing.internalValue),
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
        value: openpipelineSecurityEventsEndpointsToHclTerraform(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineSecurityEventsEndpointsList",
      },
      pipelines: {
        value: openpipelineSecurityEventsPipelinesToHclTerraform(this._pipelines.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineSecurityEventsPipelinesList",
      },
      routing: {
        value: openpipelineSecurityEventsRoutingToHclTerraform(this._routing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineSecurityEventsRoutingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
