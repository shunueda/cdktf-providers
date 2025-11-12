// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttackRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#enabled AttackRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#id AttackRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#insert_after AttackRules#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#rule_name AttackRules#rule_name}
  */
  readonly ruleName?: string;
  /**
  * attack_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#attack_handling AttackRules#attack_handling}
  */
  readonly attackHandling: AttackRulesAttackHandling;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#criteria AttackRules#criteria}
  */
  readonly criteria: AttackRulesCriteria;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#metadata AttackRules#metadata}
  */
  readonly metadata: AttackRulesMetadata;
  /**
  * resource_attribute_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#resource_attribute_conditions AttackRules#resource_attribute_conditions}
  */
  readonly resourceAttributeConditions?: AttackRulesResourceAttributeConditions;
}
export interface AttackRulesAttackHandling {
  /**
  * Possible Values: `BLOCK`, `MONITOR`, `OFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#blocking_strategy AttackRules#blocking_strategy}
  */
  readonly blockingStrategy: string;
}

export function attackRulesAttackHandlingToTerraform(struct?: AttackRulesAttackHandlingOutputReference | AttackRulesAttackHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocking_strategy: cdktf.stringToTerraform(struct!.blockingStrategy),
  }
}


export function attackRulesAttackHandlingToHclTerraform(struct?: AttackRulesAttackHandlingOutputReference | AttackRulesAttackHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocking_strategy: {
      value: cdktf.stringToHclTerraform(struct!.blockingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackRulesAttackHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackRulesAttackHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingStrategy = this._blockingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackRulesAttackHandling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockingStrategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockingStrategy = value.blockingStrategy;
    }
  }

  // blocking_strategy - computed: false, optional: false, required: true
  private _blockingStrategy?: string; 
  public get blockingStrategy() {
    return this.getStringAttribute('blocking_strategy');
  }
  public set blockingStrategy(value: string) {
    this._blockingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingStrategyInput() {
    return this._blockingStrategy;
  }
}
export interface AttackRulesCriteria {
  /**
  * Possible Values: `ANY`, `CMD_INJECTION`, `JNDI_INJECTION`, `SQL_INJECTION`, `SSRF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#attack_type AttackRules#attack_type}
  */
  readonly attackType: string;
  /**
  * Process group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#process_group AttackRules#process_group}
  */
  readonly processGroup?: string;
}

export function attackRulesCriteriaToTerraform(struct?: AttackRulesCriteriaOutputReference | AttackRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_type: cdktf.stringToTerraform(struct!.attackType),
    process_group: cdktf.stringToTerraform(struct!.processGroup),
  }
}


export function attackRulesCriteriaToHclTerraform(struct?: AttackRulesCriteriaOutputReference | AttackRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_type: {
      value: cdktf.stringToHclTerraform(struct!.attackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_group: {
      value: cdktf.stringToHclTerraform(struct!.processGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackRulesCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackRulesCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackType = this._attackType;
    }
    if (this._processGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.processGroup = this._processGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackRulesCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attackType = undefined;
      this._processGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attackType = value.attackType;
      this._processGroup = value.processGroup;
    }
  }

  // attack_type - computed: false, optional: false, required: true
  private _attackType?: string; 
  public get attackType() {
    return this.getStringAttribute('attack_type');
  }
  public set attackType(value: string) {
    this._attackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTypeInput() {
    return this._attackType;
  }

  // process_group - computed: false, optional: true, required: false
  private _processGroup?: string; 
  public get processGroup() {
    return this.getStringAttribute('process_group');
  }
  public set processGroup(value: string) {
    this._processGroup = value;
  }
  public resetProcessGroup() {
    this._processGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupInput() {
    return this._processGroup;
  }
}
export interface AttackRulesMetadata {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#comment AttackRules#comment}
  */
  readonly comment: string;
}

export function attackRulesMetadataToTerraform(struct?: AttackRulesMetadataOutputReference | AttackRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function attackRulesMetadataToHclTerraform(struct?: AttackRulesMetadataOutputReference | AttackRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
    }
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }
}
export interface AttackRulesResourceAttributeConditionsResourceAttributeCondition {
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_END_WITH`, `DOES_NOT_EXIST`, `DOES_NOT_START_WITH`, `ENDS_WITH`, `EQUALS`, `EXISTS`, `NOT_EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#matcher AttackRules#matcher}
  */
  readonly matcher: string;
  /**
  * Resource attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#resource_attribute_key AttackRules#resource_attribute_key}
  */
  readonly resourceAttributeKey: string;
  /**
  * Resource attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#resource_attribute_value AttackRules#resource_attribute_value}
  */
  readonly resourceAttributeValue?: string;
}

export function attackRulesResourceAttributeConditionsResourceAttributeConditionToTerraform(struct?: AttackRulesResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matcher: cdktf.stringToTerraform(struct!.matcher),
    resource_attribute_key: cdktf.stringToTerraform(struct!.resourceAttributeKey),
    resource_attribute_value: cdktf.stringToTerraform(struct!.resourceAttributeValue),
  }
}


export function attackRulesResourceAttributeConditionsResourceAttributeConditionToHclTerraform(struct?: AttackRulesResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.resourceAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.resourceAttributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackRulesResourceAttributeConditionsResourceAttributeConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttackRulesResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._resourceAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAttributeKey = this._resourceAttributeKey;
    }
    if (this._resourceAttributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAttributeValue = this._resourceAttributeValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackRulesResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matcher = undefined;
      this._resourceAttributeKey = undefined;
      this._resourceAttributeValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matcher = value.matcher;
      this._resourceAttributeKey = value.resourceAttributeKey;
      this._resourceAttributeValue = value.resourceAttributeValue;
    }
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

  // resource_attribute_key - computed: false, optional: false, required: true
  private _resourceAttributeKey?: string; 
  public get resourceAttributeKey() {
    return this.getStringAttribute('resource_attribute_key');
  }
  public set resourceAttributeKey(value: string) {
    this._resourceAttributeKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeKeyInput() {
    return this._resourceAttributeKey;
  }

  // resource_attribute_value - computed: false, optional: true, required: false
  private _resourceAttributeValue?: string; 
  public get resourceAttributeValue() {
    return this.getStringAttribute('resource_attribute_value');
  }
  public set resourceAttributeValue(value: string) {
    this._resourceAttributeValue = value;
  }
  public resetResourceAttributeValue() {
    this._resourceAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeValueInput() {
    return this._resourceAttributeValue;
  }
}

export class AttackRulesResourceAttributeConditionsResourceAttributeConditionList extends cdktf.ComplexList {
  public internalValue? : AttackRulesResourceAttributeConditionsResourceAttributeCondition[] | cdktf.IResolvable

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
  public get(index: number): AttackRulesResourceAttributeConditionsResourceAttributeConditionOutputReference {
    return new AttackRulesResourceAttributeConditionsResourceAttributeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttackRulesResourceAttributeConditions {
  /**
  * resource_attribute_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#resource_attribute_condition AttackRules#resource_attribute_condition}
  */
  readonly resourceAttributeCondition: AttackRulesResourceAttributeConditionsResourceAttributeCondition[] | cdktf.IResolvable;
}

export function attackRulesResourceAttributeConditionsToTerraform(struct?: AttackRulesResourceAttributeConditionsOutputReference | AttackRulesResourceAttributeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_attribute_condition: cdktf.listMapper(attackRulesResourceAttributeConditionsResourceAttributeConditionToTerraform, true)(struct!.resourceAttributeCondition),
  }
}


export function attackRulesResourceAttributeConditionsToHclTerraform(struct?: AttackRulesResourceAttributeConditionsOutputReference | AttackRulesResourceAttributeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_attribute_condition: {
      value: cdktf.listMapperHcl(attackRulesResourceAttributeConditionsResourceAttributeConditionToHclTerraform, true)(struct!.resourceAttributeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "AttackRulesResourceAttributeConditionsResourceAttributeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackRulesResourceAttributeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackRulesResourceAttributeConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceAttributeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAttributeCondition = this._resourceAttributeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackRulesResourceAttributeConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceAttributeCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceAttributeCondition.internalValue = value.resourceAttributeCondition;
    }
  }

  // resource_attribute_condition - computed: false, optional: false, required: true
  private _resourceAttributeCondition = new AttackRulesResourceAttributeConditionsResourceAttributeConditionList(this, "resource_attribute_condition", false);
  public get resourceAttributeCondition() {
    return this._resourceAttributeCondition;
  }
  public putResourceAttributeCondition(value: AttackRulesResourceAttributeConditionsResourceAttributeCondition[] | cdktf.IResolvable) {
    this._resourceAttributeCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeConditionInput() {
    return this._resourceAttributeCondition.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules dynatrace_attack_rules}
*/
export class AttackRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_attack_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttackRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttackRules to import
  * @param importFromId The id of the existing AttackRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttackRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_attack_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/attack_rules dynatrace_attack_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttackRulesConfig
  */
  public constructor(scope: Construct, id: string, config: AttackRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_attack_rules',
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
    this._ruleName = config.ruleName;
    this._attackHandling.internalValue = config.attackHandling;
    this._criteria.internalValue = config.criteria;
    this._metadata.internalValue = config.metadata;
    this._resourceAttributeConditions.internalValue = config.resourceAttributeConditions;
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

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // attack_handling - computed: false, optional: false, required: true
  private _attackHandling = new AttackRulesAttackHandlingOutputReference(this, "attack_handling");
  public get attackHandling() {
    return this._attackHandling;
  }
  public putAttackHandling(value: AttackRulesAttackHandling) {
    this._attackHandling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackHandlingInput() {
    return this._attackHandling.internalValue;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new AttackRulesCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: AttackRulesCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new AttackRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AttackRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // resource_attribute_conditions - computed: false, optional: true, required: false
  private _resourceAttributeConditions = new AttackRulesResourceAttributeConditionsOutputReference(this, "resource_attribute_conditions");
  public get resourceAttributeConditions() {
    return this._resourceAttributeConditions;
  }
  public putResourceAttributeConditions(value: AttackRulesResourceAttributeConditions) {
    this._resourceAttributeConditions.internalValue = value;
  }
  public resetResourceAttributeConditions() {
    this._resourceAttributeConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeConditionsInput() {
    return this._resourceAttributeConditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      attack_handling: attackRulesAttackHandlingToTerraform(this._attackHandling.internalValue),
      criteria: attackRulesCriteriaToTerraform(this._criteria.internalValue),
      metadata: attackRulesMetadataToTerraform(this._metadata.internalValue),
      resource_attribute_conditions: attackRulesResourceAttributeConditionsToTerraform(this._resourceAttributeConditions.internalValue),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_handling: {
        value: attackRulesAttackHandlingToHclTerraform(this._attackHandling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackRulesAttackHandlingList",
      },
      criteria: {
        value: attackRulesCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackRulesCriteriaList",
      },
      metadata: {
        value: attackRulesMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackRulesMetadataList",
      },
      resource_attribute_conditions: {
        value: attackRulesResourceAttributeConditionsToHclTerraform(this._resourceAttributeConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackRulesResourceAttributeConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
