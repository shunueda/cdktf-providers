// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttackAllowlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#enabled AttackAllowlist#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#id AttackAllowlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#insert_after AttackAllowlist#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#rule_name AttackAllowlist#rule_name}
  */
  readonly ruleName?: string;
  /**
  * attack_handling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#attack_handling AttackAllowlist#attack_handling}
  */
  readonly attackHandling: AttackAllowlistAttackHandling;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#criteria AttackAllowlist#criteria}
  */
  readonly criteria?: AttackAllowlistCriteria;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#metadata AttackAllowlist#metadata}
  */
  readonly metadata: AttackAllowlistMetadata;
  /**
  * resource_attribute_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#resource_attribute_conditions AttackAllowlist#resource_attribute_conditions}
  */
  readonly resourceAttributeConditions?: AttackAllowlistResourceAttributeConditions;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#rules AttackAllowlist#rules}
  */
  readonly rules: AttackAllowlistRules;
}
export interface AttackAllowlistAttackHandling {
  /**
  * Possible Values: `MONITOR`, `OFF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#blocking_strategy AttackAllowlist#blocking_strategy}
  */
  readonly blockingStrategy: string;
}

export function attackAllowlistAttackHandlingToTerraform(struct?: AttackAllowlistAttackHandlingOutputReference | AttackAllowlistAttackHandling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocking_strategy: cdktf.stringToTerraform(struct!.blockingStrategy),
  }
}


export function attackAllowlistAttackHandlingToHclTerraform(struct?: AttackAllowlistAttackHandlingOutputReference | AttackAllowlistAttackHandling): any {
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

export class AttackAllowlistAttackHandlingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackAllowlistAttackHandling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingStrategy = this._blockingStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackAllowlistAttackHandling | undefined) {
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
export interface AttackAllowlistCriteria {
  /**
  * Only consider attacks matching the specified pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#attack_pattern AttackAllowlist#attack_pattern}
  */
  readonly attackPattern?: string;
  /**
  * Source IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#source_ip AttackAllowlist#source_ip}
  */
  readonly sourceIp?: string;
}

export function attackAllowlistCriteriaToTerraform(struct?: AttackAllowlistCriteriaOutputReference | AttackAllowlistCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attack_pattern: cdktf.stringToTerraform(struct!.attackPattern),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
  }
}


export function attackAllowlistCriteriaToHclTerraform(struct?: AttackAllowlistCriteriaOutputReference | AttackAllowlistCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attack_pattern: {
      value: cdktf.stringToHclTerraform(struct!.attackPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackAllowlistCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackAllowlistCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attackPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackPattern = this._attackPattern;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackAllowlistCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attackPattern = undefined;
      this._sourceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attackPattern = value.attackPattern;
      this._sourceIp = value.sourceIp;
    }
  }

  // attack_pattern - computed: false, optional: true, required: false
  private _attackPattern?: string; 
  public get attackPattern() {
    return this.getStringAttribute('attack_pattern');
  }
  public set attackPattern(value: string) {
    this._attackPattern = value;
  }
  public resetAttackPattern() {
    this._attackPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackPatternInput() {
    return this._attackPattern;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface AttackAllowlistMetadata {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#comment AttackAllowlist#comment}
  */
  readonly comment: string;
}

export function attackAllowlistMetadataToTerraform(struct?: AttackAllowlistMetadataOutputReference | AttackAllowlistMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function attackAllowlistMetadataToHclTerraform(struct?: AttackAllowlistMetadataOutputReference | AttackAllowlistMetadata): any {
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

export class AttackAllowlistMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackAllowlistMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackAllowlistMetadata | undefined) {
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
export interface AttackAllowlistResourceAttributeConditionsResourceAttributeCondition {
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_END_WITH`, `DOES_NOT_EXIST`, `DOES_NOT_START_WITH`, `ENDS_WITH`, `EQUALS`, `EXISTS`, `NOT_EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#matcher AttackAllowlist#matcher}
  */
  readonly matcher: string;
  /**
  * Resource attribute key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#resource_attribute_key AttackAllowlist#resource_attribute_key}
  */
  readonly resourceAttributeKey: string;
  /**
  * Resource attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#resource_attribute_value AttackAllowlist#resource_attribute_value}
  */
  readonly resourceAttributeValue?: string;
}

export function attackAllowlistResourceAttributeConditionsResourceAttributeConditionToTerraform(struct?: AttackAllowlistResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable): any {
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


export function attackAllowlistResourceAttributeConditionsResourceAttributeConditionToHclTerraform(struct?: AttackAllowlistResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable): any {
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

export class AttackAllowlistResourceAttributeConditionsResourceAttributeConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttackAllowlistResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AttackAllowlistResourceAttributeConditionsResourceAttributeCondition | cdktf.IResolvable | undefined) {
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

export class AttackAllowlistResourceAttributeConditionsResourceAttributeConditionList extends cdktf.ComplexList {
  public internalValue? : AttackAllowlistResourceAttributeConditionsResourceAttributeCondition[] | cdktf.IResolvable

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
  public get(index: number): AttackAllowlistResourceAttributeConditionsResourceAttributeConditionOutputReference {
    return new AttackAllowlistResourceAttributeConditionsResourceAttributeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttackAllowlistResourceAttributeConditions {
  /**
  * resource_attribute_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#resource_attribute_condition AttackAllowlist#resource_attribute_condition}
  */
  readonly resourceAttributeCondition: AttackAllowlistResourceAttributeConditionsResourceAttributeCondition[] | cdktf.IResolvable;
}

export function attackAllowlistResourceAttributeConditionsToTerraform(struct?: AttackAllowlistResourceAttributeConditionsOutputReference | AttackAllowlistResourceAttributeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_attribute_condition: cdktf.listMapper(attackAllowlistResourceAttributeConditionsResourceAttributeConditionToTerraform, true)(struct!.resourceAttributeCondition),
  }
}


export function attackAllowlistResourceAttributeConditionsToHclTerraform(struct?: AttackAllowlistResourceAttributeConditionsOutputReference | AttackAllowlistResourceAttributeConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_attribute_condition: {
      value: cdktf.listMapperHcl(attackAllowlistResourceAttributeConditionsResourceAttributeConditionToHclTerraform, true)(struct!.resourceAttributeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "AttackAllowlistResourceAttributeConditionsResourceAttributeConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackAllowlistResourceAttributeConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackAllowlistResourceAttributeConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceAttributeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAttributeCondition = this._resourceAttributeCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackAllowlistResourceAttributeConditions | undefined) {
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
  private _resourceAttributeCondition = new AttackAllowlistResourceAttributeConditionsResourceAttributeConditionList(this, "resource_attribute_condition", false);
  public get resourceAttributeCondition() {
    return this._resourceAttributeCondition;
  }
  public putResourceAttributeCondition(value: AttackAllowlistResourceAttributeConditionsResourceAttributeCondition[] | cdktf.IResolvable) {
    this._resourceAttributeCondition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeConditionInput() {
    return this._resourceAttributeCondition.internalValue;
  }
}
export interface AttackAllowlistRulesRule {
  /**
  * Possible Values: `ACTOR_IP`, `DETECTION_TYPE`, `ENTRY_POINT_PAYLOAD`, `ENTRY_POINT_PAYLOAD_DOMAIN`, `ENTRY_POINT_PAYLOAD_PORT`, `ENTRY_POINT_URL_PATH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#criteria_key AttackAllowlist#criteria_key}
  */
  readonly criteriaKey: string;
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_END_WITH`, `DOES_NOT_STARTS_WITH`, `ENDS_WITH`, `EQUALS`, `IP_CIDR`, `NOT_EQUALS`, `NOT_IN_IP_CIDR`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#criteria_matcher AttackAllowlist#criteria_matcher}
  */
  readonly criteriaMatcher: string;
  /**
  * Possible Values: `CMD_INJECTION`, `JNDI_INJECTION`, `SQL_INJECTION`, `SSRF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#criteria_value_detection_type AttackAllowlist#criteria_value_detection_type}
  */
  readonly criteriaValueDetectionType?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#criteria_value_free_text AttackAllowlist#criteria_value_free_text}
  */
  readonly criteriaValueFreeText?: string;
}

export function attackAllowlistRulesRuleToTerraform(struct?: AttackAllowlistRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria_key: cdktf.stringToTerraform(struct!.criteriaKey),
    criteria_matcher: cdktf.stringToTerraform(struct!.criteriaMatcher),
    criteria_value_detection_type: cdktf.stringToTerraform(struct!.criteriaValueDetectionType),
    criteria_value_free_text: cdktf.stringToTerraform(struct!.criteriaValueFreeText),
  }
}


export function attackAllowlistRulesRuleToHclTerraform(struct?: AttackAllowlistRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria_key: {
      value: cdktf.stringToHclTerraform(struct!.criteriaKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria_matcher: {
      value: cdktf.stringToHclTerraform(struct!.criteriaMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria_value_detection_type: {
      value: cdktf.stringToHclTerraform(struct!.criteriaValueDetectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria_value_free_text: {
      value: cdktf.stringToHclTerraform(struct!.criteriaValueFreeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackAllowlistRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttackAllowlistRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteriaKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaKey = this._criteriaKey;
    }
    if (this._criteriaMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaMatcher = this._criteriaMatcher;
    }
    if (this._criteriaValueDetectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaValueDetectionType = this._criteriaValueDetectionType;
    }
    if (this._criteriaValueFreeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteriaValueFreeText = this._criteriaValueFreeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackAllowlistRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteriaKey = undefined;
      this._criteriaMatcher = undefined;
      this._criteriaValueDetectionType = undefined;
      this._criteriaValueFreeText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteriaKey = value.criteriaKey;
      this._criteriaMatcher = value.criteriaMatcher;
      this._criteriaValueDetectionType = value.criteriaValueDetectionType;
      this._criteriaValueFreeText = value.criteriaValueFreeText;
    }
  }

  // criteria_key - computed: false, optional: false, required: true
  private _criteriaKey?: string; 
  public get criteriaKey() {
    return this.getStringAttribute('criteria_key');
  }
  public set criteriaKey(value: string) {
    this._criteriaKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaKeyInput() {
    return this._criteriaKey;
  }

  // criteria_matcher - computed: false, optional: false, required: true
  private _criteriaMatcher?: string; 
  public get criteriaMatcher() {
    return this.getStringAttribute('criteria_matcher');
  }
  public set criteriaMatcher(value: string) {
    this._criteriaMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaMatcherInput() {
    return this._criteriaMatcher;
  }

  // criteria_value_detection_type - computed: false, optional: true, required: false
  private _criteriaValueDetectionType?: string; 
  public get criteriaValueDetectionType() {
    return this.getStringAttribute('criteria_value_detection_type');
  }
  public set criteriaValueDetectionType(value: string) {
    this._criteriaValueDetectionType = value;
  }
  public resetCriteriaValueDetectionType() {
    this._criteriaValueDetectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaValueDetectionTypeInput() {
    return this._criteriaValueDetectionType;
  }

  // criteria_value_free_text - computed: false, optional: true, required: false
  private _criteriaValueFreeText?: string; 
  public get criteriaValueFreeText() {
    return this.getStringAttribute('criteria_value_free_text');
  }
  public set criteriaValueFreeText(value: string) {
    this._criteriaValueFreeText = value;
  }
  public resetCriteriaValueFreeText() {
    this._criteriaValueFreeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaValueFreeTextInput() {
    return this._criteriaValueFreeText;
  }
}

export class AttackAllowlistRulesRuleList extends cdktf.ComplexList {
  public internalValue? : AttackAllowlistRulesRule[] | cdktf.IResolvable

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
  public get(index: number): AttackAllowlistRulesRuleOutputReference {
    return new AttackAllowlistRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AttackAllowlistRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#rule AttackAllowlist#rule}
  */
  readonly rule: AttackAllowlistRulesRule[] | cdktf.IResolvable;
}

export function attackAllowlistRulesToTerraform(struct?: AttackAllowlistRulesOutputReference | AttackAllowlistRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(attackAllowlistRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function attackAllowlistRulesToHclTerraform(struct?: AttackAllowlistRulesOutputReference | AttackAllowlistRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(attackAllowlistRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "AttackAllowlistRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttackAllowlistRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AttackAllowlistRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttackAllowlistRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new AttackAllowlistRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: AttackAllowlistRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist dynatrace_attack_allowlist}
*/
export class AttackAllowlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_attack_allowlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AttackAllowlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AttackAllowlist to import
  * @param importFromId The id of the existing AttackAllowlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AttackAllowlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_attack_allowlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/attack_allowlist dynatrace_attack_allowlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttackAllowlistConfig
  */
  public constructor(scope: Construct, id: string, config: AttackAllowlistConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_attack_allowlist',
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
    this._ruleName = config.ruleName;
    this._attackHandling.internalValue = config.attackHandling;
    this._criteria.internalValue = config.criteria;
    this._metadata.internalValue = config.metadata;
    this._resourceAttributeConditions.internalValue = config.resourceAttributeConditions;
    this._rules.internalValue = config.rules;
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
  private _attackHandling = new AttackAllowlistAttackHandlingOutputReference(this, "attack_handling");
  public get attackHandling() {
    return this._attackHandling;
  }
  public putAttackHandling(value: AttackAllowlistAttackHandling) {
    this._attackHandling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackHandlingInput() {
    return this._attackHandling.internalValue;
  }

  // criteria - computed: false, optional: true, required: false
  private _criteria = new AttackAllowlistCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: AttackAllowlistCriteria) {
    this._criteria.internalValue = value;
  }
  public resetCriteria() {
    this._criteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new AttackAllowlistMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AttackAllowlistMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // resource_attribute_conditions - computed: false, optional: true, required: false
  private _resourceAttributeConditions = new AttackAllowlistResourceAttributeConditionsOutputReference(this, "resource_attribute_conditions");
  public get resourceAttributeConditions() {
    return this._resourceAttributeConditions;
  }
  public putResourceAttributeConditions(value: AttackAllowlistResourceAttributeConditions) {
    this._resourceAttributeConditions.internalValue = value;
  }
  public resetResourceAttributeConditions() {
    this._resourceAttributeConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAttributeConditionsInput() {
    return this._resourceAttributeConditions.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new AttackAllowlistRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: AttackAllowlistRules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      attack_handling: attackAllowlistAttackHandlingToTerraform(this._attackHandling.internalValue),
      criteria: attackAllowlistCriteriaToTerraform(this._criteria.internalValue),
      metadata: attackAllowlistMetadataToTerraform(this._metadata.internalValue),
      resource_attribute_conditions: attackAllowlistResourceAttributeConditionsToTerraform(this._resourceAttributeConditions.internalValue),
      rules: attackAllowlistRulesToTerraform(this._rules.internalValue),
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
        value: attackAllowlistAttackHandlingToHclTerraform(this._attackHandling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackAllowlistAttackHandlingList",
      },
      criteria: {
        value: attackAllowlistCriteriaToHclTerraform(this._criteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackAllowlistCriteriaList",
      },
      metadata: {
        value: attackAllowlistMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackAllowlistMetadataList",
      },
      resource_attribute_conditions: {
        value: attackAllowlistResourceAttributeConditionsToHclTerraform(this._resourceAttributeConditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackAllowlistResourceAttributeConditionsList",
      },
      rules: {
        value: attackAllowlistRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttackAllowlistRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
