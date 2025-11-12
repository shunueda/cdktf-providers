// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceSplittingConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#enabled ServiceSplitting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#id ServiceSplitting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#insert_after ServiceSplitting#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#scope ServiceSplitting#scope}
  */
  readonly scope?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#rule ServiceSplitting#rule}
  */
  readonly rule: ServiceSplittingRule;
}
export interface ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute {
  /**
  * Attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#key ServiceSplitting#key}
  */
  readonly key: string;
}

export function serviceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeToTerraform(struct?: ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function serviceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeToHclTerraform(struct?: ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}

export class ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeList extends cdktf.ComplexList {
  public internalValue? : ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute[] | cdktf.IResolvable

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
  public get(index: number): ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeOutputReference {
    return new ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceSplittingRuleServiceSplittingAttributes {
  /**
  * service_splitting_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#service_splitting_attribute ServiceSplitting#service_splitting_attribute}
  */
  readonly serviceSplittingAttribute: ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute[] | cdktf.IResolvable;
}

export function serviceSplittingRuleServiceSplittingAttributesToTerraform(struct?: ServiceSplittingRuleServiceSplittingAttributesOutputReference | ServiceSplittingRuleServiceSplittingAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_splitting_attribute: cdktf.listMapper(serviceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeToTerraform, true)(struct!.serviceSplittingAttribute),
  }
}


export function serviceSplittingRuleServiceSplittingAttributesToHclTerraform(struct?: ServiceSplittingRuleServiceSplittingAttributesOutputReference | ServiceSplittingRuleServiceSplittingAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_splitting_attribute: {
      value: cdktf.listMapperHcl(serviceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeToHclTerraform, true)(struct!.serviceSplittingAttribute),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSplittingRuleServiceSplittingAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceSplittingRuleServiceSplittingAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceSplittingAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSplittingAttribute = this._serviceSplittingAttribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSplittingRuleServiceSplittingAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceSplittingAttribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceSplittingAttribute.internalValue = value.serviceSplittingAttribute;
    }
  }

  // service_splitting_attribute - computed: false, optional: false, required: true
  private _serviceSplittingAttribute = new ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttributeList(this, "service_splitting_attribute", true);
  public get serviceSplittingAttribute() {
    return this._serviceSplittingAttribute;
  }
  public putServiceSplittingAttribute(value: ServiceSplittingRuleServiceSplittingAttributesServiceSplittingAttribute[] | cdktf.IResolvable) {
    this._serviceSplittingAttribute.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSplittingAttributeInput() {
    return this._serviceSplittingAttribute.internalValue;
  }
}
export interface ServiceSplittingRule {
  /**
  * Limits the scope of the service splitting rule using [DQL matcher](https://dt-url.net/l603wby) conditions on resource attributes..  A rule is applied only if the condition matches, otherwise the ruleset evaluation continues.
  * 
  * If empty, the condition will always match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#condition ServiceSplitting#condition}
  */
  readonly condition?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#description ServiceSplitting#description}
  */
  readonly description?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#rule_name ServiceSplitting#rule_name}
  */
  readonly ruleName: string;
  /**
  * service_splitting_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#service_splitting_attributes ServiceSplitting#service_splitting_attributes}
  */
  readonly serviceSplittingAttributes?: ServiceSplittingRuleServiceSplittingAttributes;
}

export function serviceSplittingRuleToTerraform(struct?: ServiceSplittingRuleOutputReference | ServiceSplittingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    service_splitting_attributes: serviceSplittingRuleServiceSplittingAttributesToTerraform(struct!.serviceSplittingAttributes),
  }
}


export function serviceSplittingRuleToHclTerraform(struct?: ServiceSplittingRuleOutputReference | ServiceSplittingRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
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
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_splitting_attributes: {
      value: serviceSplittingRuleServiceSplittingAttributesToHclTerraform(struct!.serviceSplittingAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceSplittingRuleServiceSplittingAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceSplittingRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceSplittingRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._serviceSplittingAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSplittingAttributes = this._serviceSplittingAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceSplittingRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._description = undefined;
      this._ruleName = undefined;
      this._serviceSplittingAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._description = value.description;
      this._ruleName = value.ruleName;
      this._serviceSplittingAttributes.internalValue = value.serviceSplittingAttributes;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // service_splitting_attributes - computed: false, optional: true, required: false
  private _serviceSplittingAttributes = new ServiceSplittingRuleServiceSplittingAttributesOutputReference(this, "service_splitting_attributes");
  public get serviceSplittingAttributes() {
    return this._serviceSplittingAttributes;
  }
  public putServiceSplittingAttributes(value: ServiceSplittingRuleServiceSplittingAttributes) {
    this._serviceSplittingAttributes.internalValue = value;
  }
  public resetServiceSplittingAttributes() {
    this._serviceSplittingAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSplittingAttributesInput() {
    return this._serviceSplittingAttributes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting dynatrace_service_splitting}
*/
export class ServiceSplitting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_splitting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceSplitting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceSplitting to import
  * @param importFromId The id of the existing ServiceSplitting that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceSplitting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_splitting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_splitting dynatrace_service_splitting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceSplittingConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceSplittingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_splitting',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._scope = config.scope;
    this._rule.internalValue = config.rule;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new ServiceSplittingRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: ServiceSplittingRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      scope: cdktf.stringToTerraform(this._scope),
      rule: serviceSplittingRuleToTerraform(this._rule.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: serviceSplittingRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceSplittingRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
