// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FailureDetectionRuleSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#id FailureDetectionRuleSets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#insert_after FailureDetectionRuleSets#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#scope FailureDetectionRuleSets#scope}
  */
  readonly scope?: string;
  /**
  * ruleset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#ruleset FailureDetectionRuleSets#ruleset}
  */
  readonly ruleset: FailureDetectionRuleSetsRuleset;
}
export interface FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule {
  /**
  * Custom rule based on span attributes using [DQL matcher](https://dt-url.net/l603wby).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#dql_condition FailureDetectionRuleSets#dql_condition}
  */
  readonly dqlCondition: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#rule_name FailureDetectionRuleSets#rule_name}
  */
  readonly ruleName: string;
}

export function failureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_condition: cdktf.stringToTerraform(struct!.dqlCondition),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}


export function failureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_condition: {
      value: cdktf.stringToHclTerraform(struct!.dqlCondition),
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
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dqlCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlCondition = this._dqlCondition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dqlCondition = undefined;
      this._enabled = undefined;
      this._ruleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dqlCondition = value.dqlCondition;
      this._enabled = value.enabled;
      this._ruleName = value.ruleName;
    }
  }

  // dql_condition - computed: false, optional: false, required: true
  private _dqlCondition?: string; 
  public get dqlCondition() {
    return this.getStringAttribute('dql_condition');
  }
  public set dqlCondition(value: string) {
    this._dqlCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlConditionInput() {
    return this._dqlCondition;
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
}

export class FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleOutputReference {
    return new FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnCustomRules {
  /**
  * fail_on_custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_custom_rule FailureDetectionRuleSets#fail_on_custom_rule}
  */
  readonly failOnCustomRule: FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule[] | cdktf.IResolvable;
}

export function failureDetectionRuleSetsRulesetFailOnCustomRulesToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnCustomRulesOutputReference | FailureDetectionRuleSetsRulesetFailOnCustomRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_on_custom_rule: cdktf.listMapper(failureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleToTerraform, true)(struct!.failOnCustomRule),
  }
}


export function failureDetectionRuleSetsRulesetFailOnCustomRulesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnCustomRulesOutputReference | FailureDetectionRuleSetsRulesetFailOnCustomRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_on_custom_rule: {
      value: cdktf.listMapperHcl(failureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleToHclTerraform, true)(struct!.failOnCustomRule),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnCustomRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnCustomRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOnCustomRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnCustomRule = this._failOnCustomRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnCustomRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOnCustomRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOnCustomRule.internalValue = value.failOnCustomRule;
    }
  }

  // fail_on_custom_rule - computed: false, optional: false, required: true
  private _failOnCustomRule = new FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRuleList(this, "fail_on_custom_rule", true);
  public get failOnCustomRule() {
    return this._failOnCustomRule;
  }
  public putFailOnCustomRule(value: FailureDetectionRuleSetsRulesetFailOnCustomRulesFailOnCustomRule[] | cdktf.IResolvable) {
    this._failOnCustomRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnCustomRuleInput() {
    return this._failOnCustomRule.internalValue;
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Evaluated attribute: `span.events[][exception.message]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#message FailureDetectionRuleSets#message}
  */
  readonly message?: string;
  /**
  * Evaluated attribute: `span.events[][exception.type]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#type FailureDetectionRuleSets#type}
  */
  readonly type?: string;
}

export function failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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

export class FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._message = value.message;
      this._type = value.type;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionOutputReference {
    return new FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions {
  /**
  * ignored_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#ignored_exception FailureDetectionRuleSets#ignored_exception}
  */
  readonly ignoredException: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException[] | cdktf.IResolvable;
}

export function failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsOutputReference | FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_exception: cdktf.listMapper(failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionToTerraform, true)(struct!.ignoredException),
  }
}


export function failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsOutputReference | FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_exception: {
      value: cdktf.listMapperHcl(failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionToHclTerraform, true)(struct!.ignoredException),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredException = this._ignoredException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoredException.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoredException.internalValue = value.ignoredException;
    }
  }

  // ignored_exception - computed: false, optional: false, required: true
  private _ignoredException = new FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredExceptionList(this, "ignored_exception", true);
  public get ignoredException() {
    return this._ignoredException;
  }
  public putIgnoredException(value: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsIgnoredException[] | cdktf.IResolvable) {
    this._ignoredException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredExceptionInput() {
    return this._ignoredException.internalValue;
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnExceptions {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ignored_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#ignored_exceptions FailureDetectionRuleSets#ignored_exceptions}
  */
  readonly ignoredExceptions?: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions;
}

export function failureDetectionRuleSetsRulesetFailOnExceptionsToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnExceptionsOutputReference | FailureDetectionRuleSetsRulesetFailOnExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignored_exceptions: failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsToTerraform(struct!.ignoredExceptions),
  }
}


export function failureDetectionRuleSetsRulesetFailOnExceptionsToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnExceptionsOutputReference | FailureDetectionRuleSetsRulesetFailOnExceptions): any {
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
    ignored_exceptions: {
      value: failureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsToHclTerraform(struct!.ignoredExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignoredExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredExceptions = this._ignoredExceptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._ignoredExceptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._ignoredExceptions.internalValue = value.ignoredExceptions;
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

  // ignored_exceptions - computed: false, optional: true, required: false
  private _ignoredExceptions = new FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptionsOutputReference(this, "ignored_exceptions");
  public get ignoredExceptions() {
    return this._ignoredExceptions;
  }
  public putIgnoredExceptions(value: FailureDetectionRuleSetsRulesetFailOnExceptionsIgnoredExceptions) {
    this._ignoredExceptions.internalValue = value;
  }
  public resetIgnoredExceptions() {
    this._ignoredExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredExceptionsInput() {
    return this._ignoredExceptions.internalValue;
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes {
  /**
  * Status codes which indicate a failure on the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#status_codes FailureDetectionRuleSets#status_codes}
  */
  readonly statusCodes: string;
}

export function failureDetectionRuleSetsRulesetFailOnGrpcStatusCodesToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodesOutputReference | FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: cdktf.stringToTerraform(struct!.statusCodes),
  }
}


export function failureDetectionRuleSetsRulesetFailOnGrpcStatusCodesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodesOutputReference | FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: cdktf.stringToHclTerraform(struct!.statusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: false, required: true
  private _statusCodes?: string; 
  public get statusCodes() {
    return this.getStringAttribute('status_codes');
  }
  public set statusCodes(value: string) {
    this._statusCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes {
  /**
  * Status codes which indicate a failure on the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#status_codes FailureDetectionRuleSets#status_codes}
  */
  readonly statusCodes: string;
}

export function failureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesOutputReference | FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: cdktf.stringToTerraform(struct!.statusCodes),
  }
}


export function failureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesOutputReference | FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: cdktf.stringToHclTerraform(struct!.statusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: false, required: true
  private _statusCodes?: string; 
  public get statusCodes() {
    return this.getStringAttribute('status_codes');
  }
  public set statusCodes(value: string) {
    this._statusCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface FailureDetectionRuleSetsRulesetFailOnSpanStatusError {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function failureDetectionRuleSetsRulesetFailOnSpanStatusErrorToTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnSpanStatusErrorOutputReference | FailureDetectionRuleSetsRulesetFailOnSpanStatusError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function failureDetectionRuleSetsRulesetFailOnSpanStatusErrorToHclTerraform(struct?: FailureDetectionRuleSetsRulesetFailOnSpanStatusErrorOutputReference | FailureDetectionRuleSetsRulesetFailOnSpanStatusError): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetFailOnSpanStatusErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetFailOnSpanStatusError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetFailOnSpanStatusError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Evaluated attribute: `span.events[][exception.message]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#message FailureDetectionRuleSets#message}
  */
  readonly message?: string;
  /**
  * Evaluated attribute: `span.events[][exception.type]`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#type FailureDetectionRuleSets#type}
  */
  readonly type?: string;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException | cdktf.IResolvable): any {
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
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
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

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._message = value.message;
      this._type = value.type;
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionOutputReference {
    return new FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions {
  /**
  * ignored_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#ignored_exception FailureDetectionRuleSets#ignored_exception}
  */
  readonly ignoredException: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException[] | cdktf.IResolvable;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignored_exception: cdktf.listMapper(failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionToTerraform, true)(struct!.ignoredException),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignored_exception: {
      value: cdktf.listMapperHcl(failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionToHclTerraform, true)(struct!.ignoredException),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoredException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredException = this._ignoredException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoredException.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoredException.internalValue = value.ignoredException;
    }
  }

  // ignored_exception - computed: false, optional: false, required: true
  private _ignoredException = new FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredExceptionList(this, "ignored_exception", true);
  public get ignoredException() {
    return this._ignoredException;
  }
  public putIgnoredException(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsIgnoredException[] | cdktf.IResolvable) {
    this._ignoredException.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredExceptionInput() {
    return this._ignoredException.internalValue;
  }
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes {
  /**
  * Status codes which force success on the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#status_codes FailureDetectionRuleSets#status_codes}
  */
  readonly statusCodes?: string;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: cdktf.stringToTerraform(struct!.statusCodes),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: cdktf.stringToHclTerraform(struct!.statusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: true, required: false
  private _statusCodes?: string; 
  public get statusCodes() {
    return this.getStringAttribute('status_codes');
  }
  public set statusCodes(value: string) {
    this._statusCodes = value;
  }
  public resetStatusCodes() {
    this._statusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes {
  /**
  * Status codes which force success on the server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#status_codes FailureDetectionRuleSets#status_codes}
  */
  readonly statusCodes?: string;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_codes: cdktf.stringToTerraform(struct!.statusCodes),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_codes: {
      value: cdktf.stringToHclTerraform(struct!.statusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodes = this._statusCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statusCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statusCodes = value.statusCodes;
    }
  }

  // status_codes - computed: false, optional: true, required: false
  private _statusCodes?: string; 
  public get statusCodes() {
    return this.getStringAttribute('status_codes');
  }
  public set statusCodes(value: string) {
    this._statusCodes = value;
  }
  public resetStatusCodes() {
    this._statusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodesInput() {
    return this._statusCodes;
  }
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule {
  /**
  * Custom rule based on span attributes using [DQL matcher](https://dt-url.net/l603wby).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#dql_condition FailureDetectionRuleSets#dql_condition}
  */
  readonly dqlCondition: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#enabled FailureDetectionRuleSets#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#rule_name FailureDetectionRuleSets#rule_name}
  */
  readonly ruleName: string;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dql_condition: cdktf.stringToTerraform(struct!.dqlCondition),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dql_condition: {
      value: cdktf.stringToHclTerraform(struct!.dqlCondition),
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
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dqlCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.dqlCondition = this._dqlCondition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dqlCondition = undefined;
      this._enabled = undefined;
      this._ruleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dqlCondition = value.dqlCondition;
      this._enabled = value.enabled;
      this._ruleName = value.ruleName;
    }
  }

  // dql_condition - computed: false, optional: false, required: true
  private _dqlCondition?: string; 
  public get dqlCondition() {
    return this.getStringAttribute('dql_condition');
  }
  public set dqlCondition(value: string) {
    this._dqlCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dqlConditionInput() {
    return this._dqlCondition;
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
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleList extends cdktf.ComplexList {
  public internalValue? : FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule[] | cdktf.IResolvable

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
  public get(index: number): FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleOutputReference {
    return new FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules {
  /**
  * fail_on_custom_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_custom_rule FailureDetectionRuleSets#fail_on_custom_rule}
  */
  readonly failOnCustomRule: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule[] | cdktf.IResolvable;
}

export function failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fail_on_custom_rule: cdktf.listMapper(failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleToTerraform, true)(struct!.failOnCustomRule),
  }
}


export function failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesOutputReference | FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fail_on_custom_rule: {
      value: cdktf.listMapperHcl(failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleToHclTerraform, true)(struct!.failOnCustomRule),
      isBlock: true,
      type: "set",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failOnCustomRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnCustomRule = this._failOnCustomRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failOnCustomRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failOnCustomRule.internalValue = value.failOnCustomRule;
    }
  }

  // fail_on_custom_rule - computed: false, optional: false, required: true
  private _failOnCustomRule = new FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRuleList(this, "fail_on_custom_rule", true);
  public get failOnCustomRule() {
    return this._failOnCustomRule;
  }
  public putFailOnCustomRule(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesFailOnCustomRule[] | cdktf.IResolvable) {
    this._failOnCustomRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnCustomRuleInput() {
    return this._failOnCustomRule.internalValue;
  }
}
export interface FailureDetectionRuleSetsRulesetOverrides {
  /**
  * force_success_on_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#force_success_on_exceptions FailureDetectionRuleSets#force_success_on_exceptions}
  */
  readonly forceSuccessOnExceptions?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions;
  /**
  * force_success_on_grpc_response_status_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#force_success_on_grpc_response_status_codes FailureDetectionRuleSets#force_success_on_grpc_response_status_codes}
  */
  readonly forceSuccessOnGrpcResponseStatusCodes?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes;
  /**
  * force_success_on_http_response_status_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#force_success_on_http_response_status_codes FailureDetectionRuleSets#force_success_on_http_response_status_codes}
  */
  readonly forceSuccessOnHttpResponseStatusCodes?: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes;
  /**
  * force_success_on_span_status_ok block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#force_success_on_span_status_ok FailureDetectionRuleSets#force_success_on_span_status_ok}
  */
  readonly forceSuccessOnSpanStatusOk: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk;
  /**
  * force_success_with_custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#force_success_with_custom_rules FailureDetectionRuleSets#force_success_with_custom_rules}
  */
  readonly forceSuccessWithCustomRules?: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules;
}

export function failureDetectionRuleSetsRulesetOverridesToTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesOutputReference | FailureDetectionRuleSetsRulesetOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_success_on_exceptions: failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsToTerraform(struct!.forceSuccessOnExceptions),
    force_success_on_grpc_response_status_codes: failureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesToTerraform(struct!.forceSuccessOnGrpcResponseStatusCodes),
    force_success_on_http_response_status_codes: failureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesToTerraform(struct!.forceSuccessOnHttpResponseStatusCodes),
    force_success_on_span_status_ok: failureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkToTerraform(struct!.forceSuccessOnSpanStatusOk),
    force_success_with_custom_rules: failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesToTerraform(struct!.forceSuccessWithCustomRules),
  }
}


export function failureDetectionRuleSetsRulesetOverridesToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOverridesOutputReference | FailureDetectionRuleSetsRulesetOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_success_on_exceptions: {
      value: failureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsToHclTerraform(struct!.forceSuccessOnExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsList",
    },
    force_success_on_grpc_response_status_codes: {
      value: failureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesToHclTerraform(struct!.forceSuccessOnGrpcResponseStatusCodes),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesList",
    },
    force_success_on_http_response_status_codes: {
      value: failureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesToHclTerraform(struct!.forceSuccessOnHttpResponseStatusCodes),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesList",
    },
    force_success_on_span_status_ok: {
      value: failureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkToHclTerraform(struct!.forceSuccessOnSpanStatusOk),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkList",
    },
    force_success_with_custom_rules: {
      value: failureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesToHclTerraform(struct!.forceSuccessWithCustomRules),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRulesetOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceSuccessOnExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSuccessOnExceptions = this._forceSuccessOnExceptions?.internalValue;
    }
    if (this._forceSuccessOnGrpcResponseStatusCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSuccessOnGrpcResponseStatusCodes = this._forceSuccessOnGrpcResponseStatusCodes?.internalValue;
    }
    if (this._forceSuccessOnHttpResponseStatusCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSuccessOnHttpResponseStatusCodes = this._forceSuccessOnHttpResponseStatusCodes?.internalValue;
    }
    if (this._forceSuccessOnSpanStatusOk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSuccessOnSpanStatusOk = this._forceSuccessOnSpanStatusOk?.internalValue;
    }
    if (this._forceSuccessWithCustomRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceSuccessWithCustomRules = this._forceSuccessWithCustomRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRulesetOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceSuccessOnExceptions.internalValue = undefined;
      this._forceSuccessOnGrpcResponseStatusCodes.internalValue = undefined;
      this._forceSuccessOnHttpResponseStatusCodes.internalValue = undefined;
      this._forceSuccessOnSpanStatusOk.internalValue = undefined;
      this._forceSuccessWithCustomRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceSuccessOnExceptions.internalValue = value.forceSuccessOnExceptions;
      this._forceSuccessOnGrpcResponseStatusCodes.internalValue = value.forceSuccessOnGrpcResponseStatusCodes;
      this._forceSuccessOnHttpResponseStatusCodes.internalValue = value.forceSuccessOnHttpResponseStatusCodes;
      this._forceSuccessOnSpanStatusOk.internalValue = value.forceSuccessOnSpanStatusOk;
      this._forceSuccessWithCustomRules.internalValue = value.forceSuccessWithCustomRules;
    }
  }

  // force_success_on_exceptions - computed: false, optional: true, required: false
  private _forceSuccessOnExceptions = new FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptionsOutputReference(this, "force_success_on_exceptions");
  public get forceSuccessOnExceptions() {
    return this._forceSuccessOnExceptions;
  }
  public putForceSuccessOnExceptions(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnExceptions) {
    this._forceSuccessOnExceptions.internalValue = value;
  }
  public resetForceSuccessOnExceptions() {
    this._forceSuccessOnExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSuccessOnExceptionsInput() {
    return this._forceSuccessOnExceptions.internalValue;
  }

  // force_success_on_grpc_response_status_codes - computed: false, optional: true, required: false
  private _forceSuccessOnGrpcResponseStatusCodes = new FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodesOutputReference(this, "force_success_on_grpc_response_status_codes");
  public get forceSuccessOnGrpcResponseStatusCodes() {
    return this._forceSuccessOnGrpcResponseStatusCodes;
  }
  public putForceSuccessOnGrpcResponseStatusCodes(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnGrpcResponseStatusCodes) {
    this._forceSuccessOnGrpcResponseStatusCodes.internalValue = value;
  }
  public resetForceSuccessOnGrpcResponseStatusCodes() {
    this._forceSuccessOnGrpcResponseStatusCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSuccessOnGrpcResponseStatusCodesInput() {
    return this._forceSuccessOnGrpcResponseStatusCodes.internalValue;
  }

  // force_success_on_http_response_status_codes - computed: false, optional: true, required: false
  private _forceSuccessOnHttpResponseStatusCodes = new FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodesOutputReference(this, "force_success_on_http_response_status_codes");
  public get forceSuccessOnHttpResponseStatusCodes() {
    return this._forceSuccessOnHttpResponseStatusCodes;
  }
  public putForceSuccessOnHttpResponseStatusCodes(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnHttpResponseStatusCodes) {
    this._forceSuccessOnHttpResponseStatusCodes.internalValue = value;
  }
  public resetForceSuccessOnHttpResponseStatusCodes() {
    this._forceSuccessOnHttpResponseStatusCodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSuccessOnHttpResponseStatusCodesInput() {
    return this._forceSuccessOnHttpResponseStatusCodes.internalValue;
  }

  // force_success_on_span_status_ok - computed: false, optional: false, required: true
  private _forceSuccessOnSpanStatusOk = new FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOkOutputReference(this, "force_success_on_span_status_ok");
  public get forceSuccessOnSpanStatusOk() {
    return this._forceSuccessOnSpanStatusOk;
  }
  public putForceSuccessOnSpanStatusOk(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessOnSpanStatusOk) {
    this._forceSuccessOnSpanStatusOk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSuccessOnSpanStatusOkInput() {
    return this._forceSuccessOnSpanStatusOk.internalValue;
  }

  // force_success_with_custom_rules - computed: false, optional: true, required: false
  private _forceSuccessWithCustomRules = new FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRulesOutputReference(this, "force_success_with_custom_rules");
  public get forceSuccessWithCustomRules() {
    return this._forceSuccessWithCustomRules;
  }
  public putForceSuccessWithCustomRules(value: FailureDetectionRuleSetsRulesetOverridesForceSuccessWithCustomRules) {
    this._forceSuccessWithCustomRules.internalValue = value;
  }
  public resetForceSuccessWithCustomRules() {
    this._forceSuccessWithCustomRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSuccessWithCustomRulesInput() {
    return this._forceSuccessWithCustomRules.internalValue;
  }
}
export interface FailureDetectionRuleSetsRuleset {
  /**
  * Limits the scope of the failure detection ruleset using [DQL matcher](https://dt-url.net/l603wby) conditions on span and resource attributes.. A ruleset is applied only if the condition matches, otherwise the evaluation continues.
  * 
  * If empty, the condition will always match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#condition FailureDetectionRuleSets#condition}
  */
  readonly condition?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#description FailureDetectionRuleSets#description}
  */
  readonly description?: string;
  /**
  * Ruleset name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#ruleset_name FailureDetectionRuleSets#ruleset_name}
  */
  readonly rulesetName: string;
  /**
  * fail_on_custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_custom_rules FailureDetectionRuleSets#fail_on_custom_rules}
  */
  readonly failOnCustomRules?: FailureDetectionRuleSetsRulesetFailOnCustomRules;
  /**
  * fail_on_exceptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_exceptions FailureDetectionRuleSets#fail_on_exceptions}
  */
  readonly failOnExceptions: FailureDetectionRuleSetsRulesetFailOnExceptions;
  /**
  * fail_on_grpc_status_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_grpc_status_codes FailureDetectionRuleSets#fail_on_grpc_status_codes}
  */
  readonly failOnGrpcStatusCodes: FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes;
  /**
  * fail_on_http_response_status_codes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_http_response_status_codes FailureDetectionRuleSets#fail_on_http_response_status_codes}
  */
  readonly failOnHttpResponseStatusCodes: FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes;
  /**
  * fail_on_span_status_error block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#fail_on_span_status_error FailureDetectionRuleSets#fail_on_span_status_error}
  */
  readonly failOnSpanStatusError: FailureDetectionRuleSetsRulesetFailOnSpanStatusError;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#overrides FailureDetectionRuleSets#overrides}
  */
  readonly overrides: FailureDetectionRuleSetsRulesetOverrides;
}

export function failureDetectionRuleSetsRulesetToTerraform(struct?: FailureDetectionRuleSetsRulesetOutputReference | FailureDetectionRuleSetsRuleset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    ruleset_name: cdktf.stringToTerraform(struct!.rulesetName),
    fail_on_custom_rules: failureDetectionRuleSetsRulesetFailOnCustomRulesToTerraform(struct!.failOnCustomRules),
    fail_on_exceptions: failureDetectionRuleSetsRulesetFailOnExceptionsToTerraform(struct!.failOnExceptions),
    fail_on_grpc_status_codes: failureDetectionRuleSetsRulesetFailOnGrpcStatusCodesToTerraform(struct!.failOnGrpcStatusCodes),
    fail_on_http_response_status_codes: failureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesToTerraform(struct!.failOnHttpResponseStatusCodes),
    fail_on_span_status_error: failureDetectionRuleSetsRulesetFailOnSpanStatusErrorToTerraform(struct!.failOnSpanStatusError),
    overrides: failureDetectionRuleSetsRulesetOverridesToTerraform(struct!.overrides),
  }
}


export function failureDetectionRuleSetsRulesetToHclTerraform(struct?: FailureDetectionRuleSetsRulesetOutputReference | FailureDetectionRuleSetsRuleset): any {
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
    ruleset_name: {
      value: cdktf.stringToHclTerraform(struct!.rulesetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_custom_rules: {
      value: failureDetectionRuleSetsRulesetFailOnCustomRulesToHclTerraform(struct!.failOnCustomRules),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnCustomRulesList",
    },
    fail_on_exceptions: {
      value: failureDetectionRuleSetsRulesetFailOnExceptionsToHclTerraform(struct!.failOnExceptions),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnExceptionsList",
    },
    fail_on_grpc_status_codes: {
      value: failureDetectionRuleSetsRulesetFailOnGrpcStatusCodesToHclTerraform(struct!.failOnGrpcStatusCodes),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodesList",
    },
    fail_on_http_response_status_codes: {
      value: failureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesToHclTerraform(struct!.failOnHttpResponseStatusCodes),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesList",
    },
    fail_on_span_status_error: {
      value: failureDetectionRuleSetsRulesetFailOnSpanStatusErrorToHclTerraform(struct!.failOnSpanStatusError),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetFailOnSpanStatusErrorList",
    },
    overrides: {
      value: failureDetectionRuleSetsRulesetOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "list",
      storageClassType: "FailureDetectionRuleSetsRulesetOverridesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FailureDetectionRuleSetsRulesetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FailureDetectionRuleSetsRuleset | undefined {
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
    if (this._rulesetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesetName = this._rulesetName;
    }
    if (this._failOnCustomRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnCustomRules = this._failOnCustomRules?.internalValue;
    }
    if (this._failOnExceptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnExceptions = this._failOnExceptions?.internalValue;
    }
    if (this._failOnGrpcStatusCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnGrpcStatusCodes = this._failOnGrpcStatusCodes?.internalValue;
    }
    if (this._failOnHttpResponseStatusCodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnHttpResponseStatusCodes = this._failOnHttpResponseStatusCodes?.internalValue;
    }
    if (this._failOnSpanStatusError?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnSpanStatusError = this._failOnSpanStatusError?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FailureDetectionRuleSetsRuleset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._description = undefined;
      this._rulesetName = undefined;
      this._failOnCustomRules.internalValue = undefined;
      this._failOnExceptions.internalValue = undefined;
      this._failOnGrpcStatusCodes.internalValue = undefined;
      this._failOnHttpResponseStatusCodes.internalValue = undefined;
      this._failOnSpanStatusError.internalValue = undefined;
      this._overrides.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._description = value.description;
      this._rulesetName = value.rulesetName;
      this._failOnCustomRules.internalValue = value.failOnCustomRules;
      this._failOnExceptions.internalValue = value.failOnExceptions;
      this._failOnGrpcStatusCodes.internalValue = value.failOnGrpcStatusCodes;
      this._failOnHttpResponseStatusCodes.internalValue = value.failOnHttpResponseStatusCodes;
      this._failOnSpanStatusError.internalValue = value.failOnSpanStatusError;
      this._overrides.internalValue = value.overrides;
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

  // ruleset_name - computed: false, optional: false, required: true
  private _rulesetName?: string; 
  public get rulesetName() {
    return this.getStringAttribute('ruleset_name');
  }
  public set rulesetName(value: string) {
    this._rulesetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetNameInput() {
    return this._rulesetName;
  }

  // fail_on_custom_rules - computed: false, optional: true, required: false
  private _failOnCustomRules = new FailureDetectionRuleSetsRulesetFailOnCustomRulesOutputReference(this, "fail_on_custom_rules");
  public get failOnCustomRules() {
    return this._failOnCustomRules;
  }
  public putFailOnCustomRules(value: FailureDetectionRuleSetsRulesetFailOnCustomRules) {
    this._failOnCustomRules.internalValue = value;
  }
  public resetFailOnCustomRules() {
    this._failOnCustomRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnCustomRulesInput() {
    return this._failOnCustomRules.internalValue;
  }

  // fail_on_exceptions - computed: false, optional: false, required: true
  private _failOnExceptions = new FailureDetectionRuleSetsRulesetFailOnExceptionsOutputReference(this, "fail_on_exceptions");
  public get failOnExceptions() {
    return this._failOnExceptions;
  }
  public putFailOnExceptions(value: FailureDetectionRuleSetsRulesetFailOnExceptions) {
    this._failOnExceptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnExceptionsInput() {
    return this._failOnExceptions.internalValue;
  }

  // fail_on_grpc_status_codes - computed: false, optional: false, required: true
  private _failOnGrpcStatusCodes = new FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodesOutputReference(this, "fail_on_grpc_status_codes");
  public get failOnGrpcStatusCodes() {
    return this._failOnGrpcStatusCodes;
  }
  public putFailOnGrpcStatusCodes(value: FailureDetectionRuleSetsRulesetFailOnGrpcStatusCodes) {
    this._failOnGrpcStatusCodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnGrpcStatusCodesInput() {
    return this._failOnGrpcStatusCodes.internalValue;
  }

  // fail_on_http_response_status_codes - computed: false, optional: false, required: true
  private _failOnHttpResponseStatusCodes = new FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodesOutputReference(this, "fail_on_http_response_status_codes");
  public get failOnHttpResponseStatusCodes() {
    return this._failOnHttpResponseStatusCodes;
  }
  public putFailOnHttpResponseStatusCodes(value: FailureDetectionRuleSetsRulesetFailOnHttpResponseStatusCodes) {
    this._failOnHttpResponseStatusCodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnHttpResponseStatusCodesInput() {
    return this._failOnHttpResponseStatusCodes.internalValue;
  }

  // fail_on_span_status_error - computed: false, optional: false, required: true
  private _failOnSpanStatusError = new FailureDetectionRuleSetsRulesetFailOnSpanStatusErrorOutputReference(this, "fail_on_span_status_error");
  public get failOnSpanStatusError() {
    return this._failOnSpanStatusError;
  }
  public putFailOnSpanStatusError(value: FailureDetectionRuleSetsRulesetFailOnSpanStatusError) {
    this._failOnSpanStatusError.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnSpanStatusErrorInput() {
    return this._failOnSpanStatusError.internalValue;
  }

  // overrides - computed: false, optional: false, required: true
  private _overrides = new FailureDetectionRuleSetsRulesetOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: FailureDetectionRuleSetsRulesetOverrides) {
    this._overrides.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets dynatrace_failure_detection_rule_sets}
*/
export class FailureDetectionRuleSets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_failure_detection_rule_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FailureDetectionRuleSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FailureDetectionRuleSets to import
  * @param importFromId The id of the existing FailureDetectionRuleSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FailureDetectionRuleSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_failure_detection_rule_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/failure_detection_rule_sets dynatrace_failure_detection_rule_sets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FailureDetectionRuleSetsConfig
  */
  public constructor(scope: Construct, id: string, config: FailureDetectionRuleSetsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_failure_detection_rule_sets',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._scope = config.scope;
    this._ruleset.internalValue = config.ruleset;
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

  // ruleset - computed: false, optional: false, required: true
  private _ruleset = new FailureDetectionRuleSetsRulesetOutputReference(this, "ruleset");
  public get ruleset() {
    return this._ruleset;
  }
  public putRuleset(value: FailureDetectionRuleSetsRuleset) {
    this._ruleset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesetInput() {
    return this._ruleset.internalValue;
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
      ruleset: failureDetectionRuleSetsRulesetToTerraform(this._ruleset.internalValue),
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
      ruleset: {
        value: failureDetectionRuleSetsRulesetToHclTerraform(this._ruleset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FailureDetectionRuleSetsRulesetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
