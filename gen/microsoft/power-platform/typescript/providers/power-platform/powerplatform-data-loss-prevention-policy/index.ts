// https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PowerplatformDataLossPreventionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blocked connectors can’t be used where this policy is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#blocked_connectors PowerplatformDataLossPreventionPolicy#blocked_connectors}
  */
  readonly blockedConnectors: PowerplatformDataLossPreventionPolicyBlockedConnectors[] | cdktf.IResolvable;
  /**
  * Connectors for sensitive data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#business_connectors PowerplatformDataLossPreventionPolicy#business_connectors}
  */
  readonly businessConnectors: PowerplatformDataLossPreventionPolicyBusinessConnectors[] | cdktf.IResolvable;
  /**
  * Custom connectors patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#custom_connectors_patterns PowerplatformDataLossPreventionPolicy#custom_connectors_patterns}
  */
  readonly customConnectorsPatterns: PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns[] | cdktf.IResolvable;
  /**
  * Default classification for connectors ("General", "Confidential", "Blocked")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#default_connectors_classification PowerplatformDataLossPreventionPolicy#default_connectors_classification}
  */
  readonly defaultConnectorsClassification: string;
  /**
  * Display name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#display_name PowerplatformDataLossPreventionPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Default environment handling for the policy ("AllEnvironments", "ExceptEnvironments", "OnlyEnvironments")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#environment_type PowerplatformDataLossPreventionPolicy#environment_type}
  */
  readonly environmentType: string;
  /**
  * Environment to which the policy is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#environments PowerplatformDataLossPreventionPolicy#environments}
  */
  readonly environments?: string[];
  /**
  * Connectors for non-sensitive data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#non_business_connectors PowerplatformDataLossPreventionPolicy#non_business_connectors}
  */
  readonly nonBusinessConnectors: PowerplatformDataLossPreventionPolicyNonBusinessConnectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#timeouts PowerplatformDataLossPreventionPolicy#timeouts}
  */
  readonly timeouts?: PowerplatformDataLossPreventionPolicyTimeouts;
}
export interface PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules {
  /**
  * ID of the action rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#action_id PowerplatformDataLossPreventionPolicy#action_id}
  */
  readonly actionId: string;
  /**
  * Behavior of the action rule ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#behavior PowerplatformDataLossPreventionPolicy#behavior}
  */
  readonly behavior: string;
}

export function powerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesToTerraform(struct?: PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function powerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionId = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionId = value.actionId;
      this._behavior = value.behavior;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesOutputReference {
    return new PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules {
  /**
  * Behavior of the endpoint rule ("Allow", "Deny")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#behavior PowerplatformDataLossPreventionPolicy#behavior}
  */
  readonly behavior: string;
  /**
  * Endpoint of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#endpoint PowerplatformDataLossPreventionPolicy#endpoint}
  */
  readonly endpoint: string;
  /**
  * Order of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#order PowerplatformDataLossPreventionPolicy#order}
  */
  readonly order: number;
}

export function powerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesToTerraform(struct?: PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function powerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._endpoint = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._endpoint = value.endpoint;
      this._order = value.order;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesOutputReference {
    return new PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyBlockedConnectors {
  /**
  * Action rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#action_rules PowerplatformDataLossPreventionPolicy#action_rules}
  */
  readonly actionRules?: PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules[] | cdktf.IResolvable;
  /**
  * Default action rule behavior for the connector ("Allow", "Block", "")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#default_action_rule_behavior PowerplatformDataLossPreventionPolicy#default_action_rule_behavior}
  */
  readonly defaultActionRuleBehavior?: string;
  /**
  * Endpoint rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#endpoint_rules PowerplatformDataLossPreventionPolicy#endpoint_rules}
  */
  readonly endpointRules?: PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules[] | cdktf.IResolvable;
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#id PowerplatformDataLossPreventionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function powerplatformDataLossPreventionPolicyBlockedConnectorsToTerraform(struct?: PowerplatformDataLossPreventionPolicyBlockedConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_rules: cdktf.listMapper(powerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesToTerraform, false)(struct!.actionRules),
    default_action_rule_behavior: cdktf.stringToTerraform(struct!.defaultActionRuleBehavior),
    endpoint_rules: cdktf.listMapper(powerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesToTerraform, false)(struct!.endpointRules),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function powerplatformDataLossPreventionPolicyBlockedConnectorsToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyBlockedConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_rules: {
      value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesToHclTerraform, false)(struct!.actionRules),
      isBlock: true,
      type: "list",
      storageClassType: "PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesList",
    },
    default_action_rule_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionRuleBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_rules: {
      value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesToHclTerraform, false)(struct!.endpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyBlockedConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyBlockedConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionRules = this._actionRules?.internalValue;
    }
    if (this._defaultActionRuleBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionRuleBehavior = this._defaultActionRuleBehavior;
    }
    if (this._endpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointRules = this._endpointRules?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyBlockedConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionRules.internalValue = undefined;
      this._defaultActionRuleBehavior = undefined;
      this._endpointRules.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionRules.internalValue = value.actionRules;
      this._defaultActionRuleBehavior = value.defaultActionRuleBehavior;
      this._endpointRules.internalValue = value.endpointRules;
      this._id = value.id;
    }
  }

  // action_rules - computed: false, optional: true, required: false
  private _actionRules = new PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRulesList(this, "action_rules", false);
  public get actionRules() {
    return this._actionRules;
  }
  public putActionRules(value: PowerplatformDataLossPreventionPolicyBlockedConnectorsActionRules[] | cdktf.IResolvable) {
    this._actionRules.internalValue = value;
  }
  public resetActionRules() {
    this._actionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRulesInput() {
    return this._actionRules.internalValue;
  }

  // default_action_rule_behavior - computed: true, optional: true, required: false
  private _defaultActionRuleBehavior?: string; 
  public get defaultActionRuleBehavior() {
    return this.getStringAttribute('default_action_rule_behavior');
  }
  public set defaultActionRuleBehavior(value: string) {
    this._defaultActionRuleBehavior = value;
  }
  public resetDefaultActionRuleBehavior() {
    this._defaultActionRuleBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionRuleBehaviorInput() {
    return this._defaultActionRuleBehavior;
  }

  // endpoint_rules - computed: false, optional: true, required: false
  private _endpointRules = new PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRulesList(this, "endpoint_rules", false);
  public get endpointRules() {
    return this._endpointRules;
  }
  public putEndpointRules(value: PowerplatformDataLossPreventionPolicyBlockedConnectorsEndpointRules[] | cdktf.IResolvable) {
    this._endpointRules.internalValue = value;
  }
  public resetEndpointRules() {
    this._endpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRulesInput() {
    return this._endpointRules.internalValue;
  }

  // id - computed: false, optional: true, required: false
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
}

export class PowerplatformDataLossPreventionPolicyBlockedConnectorsList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyBlockedConnectors[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyBlockedConnectorsOutputReference {
    return new PowerplatformDataLossPreventionPolicyBlockedConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules {
  /**
  * ID of the action rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#action_id PowerplatformDataLossPreventionPolicy#action_id}
  */
  readonly actionId: string;
  /**
  * Behavior of the action rule ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#behavior PowerplatformDataLossPreventionPolicy#behavior}
  */
  readonly behavior: string;
}

export function powerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesToTerraform(struct?: PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function powerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionId = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionId = value.actionId;
      this._behavior = value.behavior;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesOutputReference {
    return new PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules {
  /**
  * Behavior of the endpoint rule ("Allow", "Deny")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#behavior PowerplatformDataLossPreventionPolicy#behavior}
  */
  readonly behavior: string;
  /**
  * Endpoint of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#endpoint PowerplatformDataLossPreventionPolicy#endpoint}
  */
  readonly endpoint: string;
  /**
  * Order of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#order PowerplatformDataLossPreventionPolicy#order}
  */
  readonly order: number;
}

export function powerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesToTerraform(struct?: PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function powerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._endpoint = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._endpoint = value.endpoint;
      this._order = value.order;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesOutputReference {
    return new PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyBusinessConnectors {
  /**
  * Action rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#action_rules PowerplatformDataLossPreventionPolicy#action_rules}
  */
  readonly actionRules?: PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules[] | cdktf.IResolvable;
  /**
  * Default action rule behavior for the connector ("Allow", "Block", "")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#default_action_rule_behavior PowerplatformDataLossPreventionPolicy#default_action_rule_behavior}
  */
  readonly defaultActionRuleBehavior?: string;
  /**
  * Endpoint rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#endpoint_rules PowerplatformDataLossPreventionPolicy#endpoint_rules}
  */
  readonly endpointRules?: PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules[] | cdktf.IResolvable;
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#id PowerplatformDataLossPreventionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function powerplatformDataLossPreventionPolicyBusinessConnectorsToTerraform(struct?: PowerplatformDataLossPreventionPolicyBusinessConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_rules: cdktf.listMapper(powerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesToTerraform, false)(struct!.actionRules),
    default_action_rule_behavior: cdktf.stringToTerraform(struct!.defaultActionRuleBehavior),
    endpoint_rules: cdktf.listMapper(powerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesToTerraform, false)(struct!.endpointRules),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function powerplatformDataLossPreventionPolicyBusinessConnectorsToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyBusinessConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_rules: {
      value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesToHclTerraform, false)(struct!.actionRules),
      isBlock: true,
      type: "list",
      storageClassType: "PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesList",
    },
    default_action_rule_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionRuleBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_rules: {
      value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesToHclTerraform, false)(struct!.endpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyBusinessConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyBusinessConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionRules = this._actionRules?.internalValue;
    }
    if (this._defaultActionRuleBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionRuleBehavior = this._defaultActionRuleBehavior;
    }
    if (this._endpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointRules = this._endpointRules?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyBusinessConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionRules.internalValue = undefined;
      this._defaultActionRuleBehavior = undefined;
      this._endpointRules.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionRules.internalValue = value.actionRules;
      this._defaultActionRuleBehavior = value.defaultActionRuleBehavior;
      this._endpointRules.internalValue = value.endpointRules;
      this._id = value.id;
    }
  }

  // action_rules - computed: false, optional: true, required: false
  private _actionRules = new PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRulesList(this, "action_rules", false);
  public get actionRules() {
    return this._actionRules;
  }
  public putActionRules(value: PowerplatformDataLossPreventionPolicyBusinessConnectorsActionRules[] | cdktf.IResolvable) {
    this._actionRules.internalValue = value;
  }
  public resetActionRules() {
    this._actionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRulesInput() {
    return this._actionRules.internalValue;
  }

  // default_action_rule_behavior - computed: true, optional: true, required: false
  private _defaultActionRuleBehavior?: string; 
  public get defaultActionRuleBehavior() {
    return this.getStringAttribute('default_action_rule_behavior');
  }
  public set defaultActionRuleBehavior(value: string) {
    this._defaultActionRuleBehavior = value;
  }
  public resetDefaultActionRuleBehavior() {
    this._defaultActionRuleBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionRuleBehaviorInput() {
    return this._defaultActionRuleBehavior;
  }

  // endpoint_rules - computed: false, optional: true, required: false
  private _endpointRules = new PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRulesList(this, "endpoint_rules", false);
  public get endpointRules() {
    return this._endpointRules;
  }
  public putEndpointRules(value: PowerplatformDataLossPreventionPolicyBusinessConnectorsEndpointRules[] | cdktf.IResolvable) {
    this._endpointRules.internalValue = value;
  }
  public resetEndpointRules() {
    this._endpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRulesInput() {
    return this._endpointRules.internalValue;
  }

  // id - computed: false, optional: true, required: false
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
}

export class PowerplatformDataLossPreventionPolicyBusinessConnectorsList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyBusinessConnectors[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyBusinessConnectorsOutputReference {
    return new PowerplatformDataLossPreventionPolicyBusinessConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns {
  /**
  * Data group of the connector ("Business", "NonBusiness", "Blocked", "Ignore")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#data_group PowerplatformDataLossPreventionPolicy#data_group}
  */
  readonly dataGroup: string;
  /**
  * Pattern of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#host_url_pattern PowerplatformDataLossPreventionPolicy#host_url_pattern}
  */
  readonly hostUrlPattern: string;
  /**
  * Order of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#order PowerplatformDataLossPreventionPolicy#order}
  */
  readonly order: number;
}

export function powerplatformDataLossPreventionPolicyCustomConnectorsPatternsToTerraform(struct?: PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_group: cdktf.stringToTerraform(struct!.dataGroup),
    host_url_pattern: cdktf.stringToTerraform(struct!.hostUrlPattern),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function powerplatformDataLossPreventionPolicyCustomConnectorsPatternsToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_group: {
      value: cdktf.stringToHclTerraform(struct!.dataGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url_pattern: {
      value: cdktf.stringToHclTerraform(struct!.hostUrlPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyCustomConnectorsPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataGroup = this._dataGroup;
    }
    if (this._hostUrlPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrlPattern = this._hostUrlPattern;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataGroup = undefined;
      this._hostUrlPattern = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataGroup = value.dataGroup;
      this._hostUrlPattern = value.hostUrlPattern;
      this._order = value.order;
    }
  }

  // data_group - computed: false, optional: false, required: true
  private _dataGroup?: string; 
  public get dataGroup() {
    return this.getStringAttribute('data_group');
  }
  public set dataGroup(value: string) {
    this._dataGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataGroupInput() {
    return this._dataGroup;
  }

  // host_url_pattern - computed: false, optional: false, required: true
  private _hostUrlPattern?: string; 
  public get hostUrlPattern() {
    return this.getStringAttribute('host_url_pattern');
  }
  public set hostUrlPattern(value: string) {
    this._hostUrlPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlPatternInput() {
    return this._hostUrlPattern;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class PowerplatformDataLossPreventionPolicyCustomConnectorsPatternsList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyCustomConnectorsPatternsOutputReference {
    return new PowerplatformDataLossPreventionPolicyCustomConnectorsPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules {
  /**
  * ID of the action rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#action_id PowerplatformDataLossPreventionPolicy#action_id}
  */
  readonly actionId: string;
  /**
  * Behavior of the action rule ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#behavior PowerplatformDataLossPreventionPolicy#behavior}
  */
  readonly behavior: string;
}

export function powerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesToTerraform(struct?: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function powerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionId = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionId = value.actionId;
      this._behavior = value.behavior;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesOutputReference {
    return new PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules {
  /**
  * Behavior of the endpoint rule ("Allow", "Deny")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#behavior PowerplatformDataLossPreventionPolicy#behavior}
  */
  readonly behavior: string;
  /**
  * Endpoint of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#endpoint PowerplatformDataLossPreventionPolicy#endpoint}
  */
  readonly endpoint: string;
  /**
  * Order of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#order PowerplatformDataLossPreventionPolicy#order}
  */
  readonly order: number;
}

export function powerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesToTerraform(struct?: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    order: cdktf.numberToTerraform(struct!.order),
  }
}


export function powerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._endpoint = undefined;
      this._order = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._endpoint = value.endpoint;
      this._order = value.order;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }
}

export class PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesOutputReference {
    return new PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyNonBusinessConnectors {
  /**
  * Action rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#action_rules PowerplatformDataLossPreventionPolicy#action_rules}
  */
  readonly actionRules?: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules[] | cdktf.IResolvable;
  /**
  * Default action rule behavior for the connector ("Allow", "Block", "")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#default_action_rule_behavior PowerplatformDataLossPreventionPolicy#default_action_rule_behavior}
  */
  readonly defaultActionRuleBehavior?: string;
  /**
  * Endpoint rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#endpoint_rules PowerplatformDataLossPreventionPolicy#endpoint_rules}
  */
  readonly endpointRules?: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules[] | cdktf.IResolvable;
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#id PowerplatformDataLossPreventionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function powerplatformDataLossPreventionPolicyNonBusinessConnectorsToTerraform(struct?: PowerplatformDataLossPreventionPolicyNonBusinessConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_rules: cdktf.listMapper(powerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesToTerraform, false)(struct!.actionRules),
    default_action_rule_behavior: cdktf.stringToTerraform(struct!.defaultActionRuleBehavior),
    endpoint_rules: cdktf.listMapper(powerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesToTerraform, false)(struct!.endpointRules),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function powerplatformDataLossPreventionPolicyNonBusinessConnectorsToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyNonBusinessConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_rules: {
      value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesToHclTerraform, false)(struct!.actionRules),
      isBlock: true,
      type: "list",
      storageClassType: "PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesList",
    },
    default_action_rule_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionRuleBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_rules: {
      value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesToHclTerraform, false)(struct!.endpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyNonBusinessConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PowerplatformDataLossPreventionPolicyNonBusinessConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionRules = this._actionRules?.internalValue;
    }
    if (this._defaultActionRuleBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionRuleBehavior = this._defaultActionRuleBehavior;
    }
    if (this._endpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointRules = this._endpointRules?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyNonBusinessConnectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionRules.internalValue = undefined;
      this._defaultActionRuleBehavior = undefined;
      this._endpointRules.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionRules.internalValue = value.actionRules;
      this._defaultActionRuleBehavior = value.defaultActionRuleBehavior;
      this._endpointRules.internalValue = value.endpointRules;
      this._id = value.id;
    }
  }

  // action_rules - computed: false, optional: true, required: false
  private _actionRules = new PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRulesList(this, "action_rules", false);
  public get actionRules() {
    return this._actionRules;
  }
  public putActionRules(value: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsActionRules[] | cdktf.IResolvable) {
    this._actionRules.internalValue = value;
  }
  public resetActionRules() {
    this._actionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionRulesInput() {
    return this._actionRules.internalValue;
  }

  // default_action_rule_behavior - computed: true, optional: true, required: false
  private _defaultActionRuleBehavior?: string; 
  public get defaultActionRuleBehavior() {
    return this.getStringAttribute('default_action_rule_behavior');
  }
  public set defaultActionRuleBehavior(value: string) {
    this._defaultActionRuleBehavior = value;
  }
  public resetDefaultActionRuleBehavior() {
    this._defaultActionRuleBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionRuleBehaviorInput() {
    return this._defaultActionRuleBehavior;
  }

  // endpoint_rules - computed: false, optional: true, required: false
  private _endpointRules = new PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRulesList(this, "endpoint_rules", false);
  public get endpointRules() {
    return this._endpointRules;
  }
  public putEndpointRules(value: PowerplatformDataLossPreventionPolicyNonBusinessConnectorsEndpointRules[] | cdktf.IResolvable) {
    this._endpointRules.internalValue = value;
  }
  public resetEndpointRules() {
    this._endpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRulesInput() {
    return this._endpointRules.internalValue;
  }

  // id - computed: false, optional: true, required: false
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
}

export class PowerplatformDataLossPreventionPolicyNonBusinessConnectorsList extends cdktf.ComplexList {
  public internalValue? : PowerplatformDataLossPreventionPolicyNonBusinessConnectors[] | cdktf.IResolvable

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
  public get(index: number): PowerplatformDataLossPreventionPolicyNonBusinessConnectorsOutputReference {
    return new PowerplatformDataLossPreventionPolicyNonBusinessConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PowerplatformDataLossPreventionPolicyTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#create PowerplatformDataLossPreventionPolicy#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#delete PowerplatformDataLossPreventionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#read PowerplatformDataLossPreventionPolicy#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#update PowerplatformDataLossPreventionPolicy#update}
  */
  readonly update?: string;
}

export function powerplatformDataLossPreventionPolicyTimeoutsToTerraform(struct?: PowerplatformDataLossPreventionPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function powerplatformDataLossPreventionPolicyTimeoutsToHclTerraform(struct?: PowerplatformDataLossPreventionPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PowerplatformDataLossPreventionPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PowerplatformDataLossPreventionPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PowerplatformDataLossPreventionPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy powerplatform_data_loss_prevention_policy}
*/
export class PowerplatformDataLossPreventionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_data_loss_prevention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PowerplatformDataLossPreventionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PowerplatformDataLossPreventionPolicy to import
  * @param importFromId The id of the existing PowerplatformDataLossPreventionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PowerplatformDataLossPreventionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_data_loss_prevention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/4.0.0/docs/resources/powerplatform_data_loss_prevention_policy powerplatform_data_loss_prevention_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PowerplatformDataLossPreventionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PowerplatformDataLossPreventionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_data_loss_prevention_policy',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '4.0.0',
        providerVersionConstraint: '4.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockedConnectors.internalValue = config.blockedConnectors;
    this._businessConnectors.internalValue = config.businessConnectors;
    this._customConnectorsPatterns.internalValue = config.customConnectorsPatterns;
    this._defaultConnectorsClassification = config.defaultConnectorsClassification;
    this._displayName = config.displayName;
    this._environmentType = config.environmentType;
    this._environments = config.environments;
    this._nonBusinessConnectors.internalValue = config.nonBusinessConnectors;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_connectors - computed: false, optional: false, required: true
  private _blockedConnectors = new PowerplatformDataLossPreventionPolicyBlockedConnectorsList(this, "blocked_connectors", true);
  public get blockedConnectors() {
    return this._blockedConnectors;
  }
  public putBlockedConnectors(value: PowerplatformDataLossPreventionPolicyBlockedConnectors[] | cdktf.IResolvable) {
    this._blockedConnectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedConnectorsInput() {
    return this._blockedConnectors.internalValue;
  }

  // business_connectors - computed: false, optional: false, required: true
  private _businessConnectors = new PowerplatformDataLossPreventionPolicyBusinessConnectorsList(this, "business_connectors", true);
  public get businessConnectors() {
    return this._businessConnectors;
  }
  public putBusinessConnectors(value: PowerplatformDataLossPreventionPolicyBusinessConnectors[] | cdktf.IResolvable) {
    this._businessConnectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessConnectorsInput() {
    return this._businessConnectors.internalValue;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // custom_connectors_patterns - computed: false, optional: false, required: true
  private _customConnectorsPatterns = new PowerplatformDataLossPreventionPolicyCustomConnectorsPatternsList(this, "custom_connectors_patterns", true);
  public get customConnectorsPatterns() {
    return this._customConnectorsPatterns;
  }
  public putCustomConnectorsPatterns(value: PowerplatformDataLossPreventionPolicyCustomConnectorsPatterns[] | cdktf.IResolvable) {
    this._customConnectorsPatterns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorsPatternsInput() {
    return this._customConnectorsPatterns.internalValue;
  }

  // default_connectors_classification - computed: false, optional: false, required: true
  private _defaultConnectorsClassification?: string; 
  public get defaultConnectorsClassification() {
    return this.getStringAttribute('default_connectors_classification');
  }
  public set defaultConnectorsClassification(value: string) {
    this._defaultConnectorsClassification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConnectorsClassificationInput() {
    return this._defaultConnectorsClassification;
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

  // environment_type - computed: false, optional: false, required: true
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // environments - computed: true, optional: true, required: false
  private _environments?: string[]; 
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  public resetEnvironments() {
    this._environments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // non_business_connectors - computed: false, optional: false, required: true
  private _nonBusinessConnectors = new PowerplatformDataLossPreventionPolicyNonBusinessConnectorsList(this, "non_business_connectors", true);
  public get nonBusinessConnectors() {
    return this._nonBusinessConnectors;
  }
  public putNonBusinessConnectors(value: PowerplatformDataLossPreventionPolicyNonBusinessConnectors[] | cdktf.IResolvable) {
    this._nonBusinessConnectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nonBusinessConnectorsInput() {
    return this._nonBusinessConnectors.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PowerplatformDataLossPreventionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PowerplatformDataLossPreventionPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_connectors: cdktf.listMapper(powerplatformDataLossPreventionPolicyBlockedConnectorsToTerraform, false)(this._blockedConnectors.internalValue),
      business_connectors: cdktf.listMapper(powerplatformDataLossPreventionPolicyBusinessConnectorsToTerraform, false)(this._businessConnectors.internalValue),
      custom_connectors_patterns: cdktf.listMapper(powerplatformDataLossPreventionPolicyCustomConnectorsPatternsToTerraform, false)(this._customConnectorsPatterns.internalValue),
      default_connectors_classification: cdktf.stringToTerraform(this._defaultConnectorsClassification),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_type: cdktf.stringToTerraform(this._environmentType),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      non_business_connectors: cdktf.listMapper(powerplatformDataLossPreventionPolicyNonBusinessConnectorsToTerraform, false)(this._nonBusinessConnectors.internalValue),
      timeouts: powerplatformDataLossPreventionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_connectors: {
        value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyBlockedConnectorsToHclTerraform, false)(this._blockedConnectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PowerplatformDataLossPreventionPolicyBlockedConnectorsList",
      },
      business_connectors: {
        value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyBusinessConnectorsToHclTerraform, false)(this._businessConnectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PowerplatformDataLossPreventionPolicyBusinessConnectorsList",
      },
      custom_connectors_patterns: {
        value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyCustomConnectorsPatternsToHclTerraform, false)(this._customConnectorsPatterns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PowerplatformDataLossPreventionPolicyCustomConnectorsPatternsList",
      },
      default_connectors_classification: {
        value: cdktf.stringToHclTerraform(this._defaultConnectorsClassification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_type: {
        value: cdktf.stringToHclTerraform(this._environmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      non_business_connectors: {
        value: cdktf.listMapperHcl(powerplatformDataLossPreventionPolicyNonBusinessConnectorsToHclTerraform, false)(this._nonBusinessConnectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PowerplatformDataLossPreventionPolicyNonBusinessConnectorsList",
      },
      timeouts: {
        value: powerplatformDataLossPreventionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PowerplatformDataLossPreventionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
