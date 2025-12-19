// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessEventsProcessingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#enabled BusinessEventsProcessing#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#id BusinessEventsProcessing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#insert_after BusinessEventsProcessing#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * [See our documentation](https://dt-url.net/bp234rv)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#matcher BusinessEventsProcessing#matcher}
  */
  readonly matcher: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#rule_name BusinessEventsProcessing#rule_name}
  */
  readonly ruleName: string;
  /**
  * [See our documentation](https://dt-url.net/pz030w5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#script BusinessEventsProcessing#script}
  */
  readonly script: string;
  /**
  * rule_testing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#rule_testing BusinessEventsProcessing#rule_testing}
  */
  readonly ruleTesting: BusinessEventsProcessingRuleTesting;
  /**
  * transformation_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#transformation_fields BusinessEventsProcessing#transformation_fields}
  */
  readonly transformationFields?: BusinessEventsProcessingTransformationFields;
}
export interface BusinessEventsProcessingRuleTesting {
  /**
  * Sample event to use for the test run. Only JSON format is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#sample_event BusinessEventsProcessing#sample_event}
  */
  readonly sampleEvent: string;
}

export function businessEventsProcessingRuleTestingToTerraform(struct?: BusinessEventsProcessingRuleTestingOutputReference | BusinessEventsProcessingRuleTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sample_event: cdktf.stringToTerraform(struct!.sampleEvent),
  }
}


export function businessEventsProcessingRuleTestingToHclTerraform(struct?: BusinessEventsProcessingRuleTestingOutputReference | BusinessEventsProcessingRuleTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sample_event: {
      value: cdktf.stringToHclTerraform(struct!.sampleEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsProcessingRuleTestingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsProcessingRuleTesting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sampleEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleEvent = this._sampleEvent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsProcessingRuleTesting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sampleEvent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sampleEvent = value.sampleEvent;
    }
  }

  // sample_event - computed: false, optional: false, required: true
  private _sampleEvent?: string; 
  public get sampleEvent() {
    return this.getStringAttribute('sample_event');
  }
  public set sampleEvent(value: string) {
    this._sampleEvent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleEventInput() {
    return this._sampleEvent;
  }
}
export interface BusinessEventsProcessingTransformationFieldsTransformationField {
  /**
  * Is Array
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#array BusinessEventsProcessing#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#name BusinessEventsProcessing#name}
  */
  readonly name: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#optional BusinessEventsProcessing#optional}
  */
  readonly optional: boolean | cdktf.IResolvable;
  /**
  * Read-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#readonly BusinessEventsProcessing#readonly}
  */
  readonly readonly: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `BOOLEAN`, `DOUBLE`, `DURATION`, `INT`, `IPADDR`, `LONG`, `STRING`, `TIMESTAMP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#type BusinessEventsProcessing#type}
  */
  readonly type: string;
}

export function businessEventsProcessingTransformationFieldsTransformationFieldToTerraform(struct?: BusinessEventsProcessingTransformationFieldsTransformationField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function businessEventsProcessingTransformationFieldsTransformationFieldToHclTerraform(struct?: BusinessEventsProcessingTransformationFieldsTransformationField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class BusinessEventsProcessingTransformationFieldsTransformationFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessEventsProcessingTransformationFieldsTransformationField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsProcessingTransformationFieldsTransformationField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._readonly = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._name = value.name;
      this._optional = value.optional;
      this._readonly = value.readonly;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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

  // optional - computed: false, optional: false, required: true
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // readonly - computed: false, optional: false, required: true
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
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

export class BusinessEventsProcessingTransformationFieldsTransformationFieldList extends cdktf.ComplexList {
  public internalValue? : BusinessEventsProcessingTransformationFieldsTransformationField[] | cdktf.IResolvable

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
  public get(index: number): BusinessEventsProcessingTransformationFieldsTransformationFieldOutputReference {
    return new BusinessEventsProcessingTransformationFieldsTransformationFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessEventsProcessingTransformationFields {
  /**
  * transformation_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#transformation_field BusinessEventsProcessing#transformation_field}
  */
  readonly transformationField: BusinessEventsProcessingTransformationFieldsTransformationField[] | cdktf.IResolvable;
}

export function businessEventsProcessingTransformationFieldsToTerraform(struct?: BusinessEventsProcessingTransformationFieldsOutputReference | BusinessEventsProcessingTransformationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation_field: cdktf.listMapper(businessEventsProcessingTransformationFieldsTransformationFieldToTerraform, true)(struct!.transformationField),
  }
}


export function businessEventsProcessingTransformationFieldsToHclTerraform(struct?: BusinessEventsProcessingTransformationFieldsOutputReference | BusinessEventsProcessingTransformationFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation_field: {
      value: cdktf.listMapperHcl(businessEventsProcessingTransformationFieldsTransformationFieldToHclTerraform, true)(struct!.transformationField),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessEventsProcessingTransformationFieldsTransformationFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessEventsProcessingTransformationFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BusinessEventsProcessingTransformationFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformationField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationField = this._transformationField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessEventsProcessingTransformationFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformationField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformationField.internalValue = value.transformationField;
    }
  }

  // transformation_field - computed: false, optional: false, required: true
  private _transformationField = new BusinessEventsProcessingTransformationFieldsTransformationFieldList(this, "transformation_field", false);
  public get transformationField() {
    return this._transformationField;
  }
  public putTransformationField(value: BusinessEventsProcessingTransformationFieldsTransformationField[] | cdktf.IResolvable) {
    this._transformationField.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationFieldInput() {
    return this._transformationField.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing dynatrace_business_events_processing}
*/
export class BusinessEventsProcessing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_business_events_processing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessEventsProcessing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessEventsProcessing to import
  * @param importFromId The id of the existing BusinessEventsProcessing that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessEventsProcessing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_business_events_processing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/business_events_processing dynatrace_business_events_processing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessEventsProcessingConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessEventsProcessingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_business_events_processing',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._matcher = config.matcher;
    this._ruleName = config.ruleName;
    this._script = config.script;
    this._ruleTesting.internalValue = config.ruleTesting;
    this._transformationFields.internalValue = config.transformationFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
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

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
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

  // rule_testing - computed: false, optional: false, required: true
  private _ruleTesting = new BusinessEventsProcessingRuleTestingOutputReference(this, "rule_testing");
  public get ruleTesting() {
    return this._ruleTesting;
  }
  public putRuleTesting(value: BusinessEventsProcessingRuleTesting) {
    this._ruleTesting.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTestingInput() {
    return this._ruleTesting.internalValue;
  }

  // transformation_fields - computed: false, optional: true, required: false
  private _transformationFields = new BusinessEventsProcessingTransformationFieldsOutputReference(this, "transformation_fields");
  public get transformationFields() {
    return this._transformationFields;
  }
  public putTransformationFields(value: BusinessEventsProcessingTransformationFields) {
    this._transformationFields.internalValue = value;
  }
  public resetTransformationFields() {
    this._transformationFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationFieldsInput() {
    return this._transformationFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      matcher: cdktf.stringToTerraform(this._matcher),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      script: cdktf.stringToTerraform(this._script),
      rule_testing: businessEventsProcessingRuleTestingToTerraform(this._ruleTesting.internalValue),
      transformation_fields: businessEventsProcessingTransformationFieldsToTerraform(this._transformationFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matcher: {
        value: cdktf.stringToHclTerraform(this._matcher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_testing: {
        value: businessEventsProcessingRuleTestingToHclTerraform(this._ruleTesting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessEventsProcessingRuleTestingList",
      },
      transformation_fields: {
        value: businessEventsProcessingTransformationFieldsToHclTerraform(this._transformationFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessEventsProcessingTransformationFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
