// https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerplatformDataLossPreventionPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#timeouts DataPowerplatformDataLossPreventionPolicies#timeouts}
  */
  readonly timeouts?: DataPowerplatformDataLossPreventionPoliciesTimeouts;
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules {
  /**
  * ID of the action rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#action_id DataPowerplatformDataLossPreventionPolicies#action_id}
  */
  readonly actionId: string;
  /**
  * Behavior of the action rule ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#behavior DataPowerplatformDataLossPreventionPolicies#behavior}
  */
  readonly behavior: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules | cdktf.IResolvable): any {
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules | cdktf.IResolvable | undefined) {
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

  // action_id - computed: true, optional: false, required: true
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

  // behavior - computed: true, optional: false, required: true
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules {
  /**
  * Behavior of the endpoint rule ("Allow", "Deny")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#behavior DataPowerplatformDataLossPreventionPolicies#behavior}
  */
  readonly behavior: string;
  /**
  * Endpoint of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#endpoint DataPowerplatformDataLossPreventionPolicies#endpoint}
  */
  readonly endpoint: string;
  /**
  * Order of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#order DataPowerplatformDataLossPreventionPolicies#order}
  */
  readonly order: number;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules | cdktf.IResolvable): any {
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


export function dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules | cdktf.IResolvable): any {
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules | cdktf.IResolvable | undefined) {
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

  // behavior - computed: true, optional: false, required: true
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

  // endpoint - computed: true, optional: false, required: true
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

  // order - computed: true, optional: false, required: true
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectors {
  /**
  * Action rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#action_rules DataPowerplatformDataLossPreventionPolicies#action_rules}
  */
  readonly actionRules?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules[] | cdktf.IResolvable;
  /**
  * Default action rule behavior for the connector ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#default_action_rule_behavior DataPowerplatformDataLossPreventionPolicies#default_action_rule_behavior}
  */
  readonly defaultActionRuleBehavior?: string;
  /**
  * Endpoint rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#endpoint_rules DataPowerplatformDataLossPreventionPolicies#endpoint_rules}
  */
  readonly endpointRules?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules[] | cdktf.IResolvable;
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#id DataPowerplatformDataLossPreventionPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_rules: cdktf.listMapper(dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesToTerraform, false)(struct!.actionRules),
    default_action_rule_behavior: cdktf.stringToTerraform(struct!.defaultActionRuleBehavior),
    endpoint_rules: cdktf.listMapper(dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesToTerraform, false)(struct!.endpointRules),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_rules: {
      value: cdktf.listMapperHcl(dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesToHclTerraform, false)(struct!.actionRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesList",
    },
    default_action_rule_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionRuleBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_rules: {
      value: cdktf.listMapperHcl(dataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesToHclTerraform, false)(struct!.endpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesList",
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectors | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionRules.internalValue = undefined;
      this._defaultActionRuleBehavior = undefined;
      this._endpointRules.internalValue = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionRules.internalValue = value.actionRules;
      this._defaultActionRuleBehavior = value.defaultActionRuleBehavior;
      this._endpointRules.internalValue = value.endpointRules;
      this._id = value.id;
    }
  }

  // action_rules - computed: true, optional: true, required: false
  private _actionRules = new DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRulesList(this, "action_rules", false);
  public get actionRules() {
    return this._actionRules;
  }
  public putActionRules(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsActionRules[] | cdktf.IResolvable) {
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

  // endpoint_rules - computed: true, optional: true, required: false
  private _endpointRules = new DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRulesList(this, "endpoint_rules", false);
  public get endpointRules() {
    return this._endpointRules;
  }
  public putEndpointRules(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsEndpointRules[] | cdktf.IResolvable) {
    this._endpointRules.internalValue = value;
  }
  public resetEndpointRules() {
    this._endpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRulesInput() {
    return this._endpointRules.internalValue;
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
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules {
  /**
  * ID of the action rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#action_id DataPowerplatformDataLossPreventionPolicies#action_id}
  */
  readonly actionId: string;
  /**
  * Behavior of the action rule ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#behavior DataPowerplatformDataLossPreventionPolicies#behavior}
  */
  readonly behavior: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules | cdktf.IResolvable): any {
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules | cdktf.IResolvable | undefined) {
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

  // action_id - computed: true, optional: false, required: true
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

  // behavior - computed: true, optional: false, required: true
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules {
  /**
  * Behavior of the endpoint rule ("Allow", "Deny")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#behavior DataPowerplatformDataLossPreventionPolicies#behavior}
  */
  readonly behavior: string;
  /**
  * Endpoint of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#endpoint DataPowerplatformDataLossPreventionPolicies#endpoint}
  */
  readonly endpoint: string;
  /**
  * Order of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#order DataPowerplatformDataLossPreventionPolicies#order}
  */
  readonly order: number;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
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


export function dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined) {
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

  // behavior - computed: true, optional: false, required: true
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

  // endpoint - computed: true, optional: false, required: true
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

  // order - computed: true, optional: false, required: true
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectors {
  /**
  * Action rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#action_rules DataPowerplatformDataLossPreventionPolicies#action_rules}
  */
  readonly actionRules?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules[] | cdktf.IResolvable;
  /**
  * Default action rule behavior for the connector ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#default_action_rule_behavior DataPowerplatformDataLossPreventionPolicies#default_action_rule_behavior}
  */
  readonly defaultActionRuleBehavior?: string;
  /**
  * Endpoint rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#endpoint_rules DataPowerplatformDataLossPreventionPolicies#endpoint_rules}
  */
  readonly endpointRules?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules[] | cdktf.IResolvable;
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#id DataPowerplatformDataLossPreventionPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_rules: cdktf.listMapper(dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesToTerraform, false)(struct!.actionRules),
    default_action_rule_behavior: cdktf.stringToTerraform(struct!.defaultActionRuleBehavior),
    endpoint_rules: cdktf.listMapper(dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesToTerraform, false)(struct!.endpointRules),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_rules: {
      value: cdktf.listMapperHcl(dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesToHclTerraform, false)(struct!.actionRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesList",
    },
    default_action_rule_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionRuleBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_rules: {
      value: cdktf.listMapperHcl(dataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesToHclTerraform, false)(struct!.endpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesList",
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectors | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionRules.internalValue = undefined;
      this._defaultActionRuleBehavior = undefined;
      this._endpointRules.internalValue = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionRules.internalValue = value.actionRules;
      this._defaultActionRuleBehavior = value.defaultActionRuleBehavior;
      this._endpointRules.internalValue = value.endpointRules;
      this._id = value.id;
    }
  }

  // action_rules - computed: true, optional: true, required: false
  private _actionRules = new DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRulesList(this, "action_rules", false);
  public get actionRules() {
    return this._actionRules;
  }
  public putActionRules(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsActionRules[] | cdktf.IResolvable) {
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

  // endpoint_rules - computed: true, optional: true, required: false
  private _endpointRules = new DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRulesList(this, "endpoint_rules", false);
  public get endpointRules() {
    return this._endpointRules;
  }
  public putEndpointRules(value: DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsEndpointRules[] | cdktf.IResolvable) {
    this._endpointRules.internalValue = value;
  }
  public resetEndpointRules() {
    this._endpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRulesInput() {
    return this._endpointRules.internalValue;
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
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatterns {
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_group - computed: true, optional: false, required: false
  public get dataGroup() {
    return this.getStringAttribute('data_group');
  }

  // host_url_pattern - computed: true, optional: false, required: false
  public get hostUrlPattern() {
    return this.getStringAttribute('host_url_pattern');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules {
  /**
  * ID of the action rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#action_id DataPowerplatformDataLossPreventionPolicies#action_id}
  */
  readonly actionId: string;
  /**
  * Behavior of the action rule ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#behavior DataPowerplatformDataLossPreventionPolicies#behavior}
  */
  readonly behavior: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules | cdktf.IResolvable): any {
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules | cdktf.IResolvable | undefined) {
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

  // action_id - computed: true, optional: false, required: true
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

  // behavior - computed: true, optional: false, required: true
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules {
  /**
  * Behavior of the endpoint rule ("Allow", "Deny")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#behavior DataPowerplatformDataLossPreventionPolicies#behavior}
  */
  readonly behavior: string;
  /**
  * Endpoint of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#endpoint DataPowerplatformDataLossPreventionPolicies#endpoint}
  */
  readonly endpoint: string;
  /**
  * Order of the endpoint rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#order DataPowerplatformDataLossPreventionPolicies#order}
  */
  readonly order: number;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
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


export function dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules | cdktf.IResolvable): any {
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules | cdktf.IResolvable | undefined) {
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

  // behavior - computed: true, optional: false, required: true
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

  // endpoint - computed: true, optional: false, required: true
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

  // order - computed: true, optional: false, required: true
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectors {
  /**
  * Action rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#action_rules DataPowerplatformDataLossPreventionPolicies#action_rules}
  */
  readonly actionRules?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules[] | cdktf.IResolvable;
  /**
  * Default action rule behavior for the connector ("Allow", "Block")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#default_action_rule_behavior DataPowerplatformDataLossPreventionPolicies#default_action_rule_behavior}
  */
  readonly defaultActionRuleBehavior?: string;
  /**
  * Endpoint rules for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#endpoint_rules DataPowerplatformDataLossPreventionPolicies#endpoint_rules}
  */
  readonly endpointRules?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules[] | cdktf.IResolvable;
  /**
  * ID of the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#id DataPowerplatformDataLossPreventionPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_rules: cdktf.listMapper(dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesToTerraform, false)(struct!.actionRules),
    default_action_rule_behavior: cdktf.stringToTerraform(struct!.defaultActionRuleBehavior),
    endpoint_rules: cdktf.listMapper(dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesToTerraform, false)(struct!.endpointRules),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_rules: {
      value: cdktf.listMapperHcl(dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesToHclTerraform, false)(struct!.actionRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesList",
    },
    default_action_rule_behavior: {
      value: cdktf.stringToHclTerraform(struct!.defaultActionRuleBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_rules: {
      value: cdktf.listMapperHcl(dataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesToHclTerraform, false)(struct!.endpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesList",
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

export class DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectors | undefined {
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

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionRules.internalValue = undefined;
      this._defaultActionRuleBehavior = undefined;
      this._endpointRules.internalValue = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionRules.internalValue = value.actionRules;
      this._defaultActionRuleBehavior = value.defaultActionRuleBehavior;
      this._endpointRules.internalValue = value.endpointRules;
      this._id = value.id;
    }
  }

  // action_rules - computed: true, optional: true, required: false
  private _actionRules = new DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRulesList(this, "action_rules", false);
  public get actionRules() {
    return this._actionRules;
  }
  public putActionRules(value: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsActionRules[] | cdktf.IResolvable) {
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

  // endpoint_rules - computed: true, optional: true, required: false
  private _endpointRules = new DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRulesList(this, "endpoint_rules", false);
  public get endpointRules() {
    return this._endpointRules;
  }
  public putEndpointRules(value: DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsEndpointRules[] | cdktf.IResolvable) {
    this._endpointRules.internalValue = value;
  }
  public resetEndpointRules() {
    this._endpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRulesInput() {
    return this._endpointRules.internalValue;
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
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesPolicies {
  /**
  * Default environment handling for the policy ("AllEnvironments", "ExceptEnvironments", "OnlyEnvironments")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#environment_type DataPowerplatformDataLossPreventionPolicies#environment_type}
  */
  readonly environmentType: string;
}

export function dataPowerplatformDataLossPreventionPoliciesPoliciesToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_type: cdktf.stringToTerraform(struct!.environmentType),
  }
}


export function dataPowerplatformDataLossPreventionPoliciesPoliciesToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentType = this._environmentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentType = value.environmentType;
    }
  }

  // blocked_connectors - computed: true, optional: false, required: false
  private _blockedConnectors = new DataPowerplatformDataLossPreventionPoliciesPoliciesBlockedConnectorsList(this, "blocked_connectors", true);
  public get blockedConnectors() {
    return this._blockedConnectors;
  }

  // business_connectors - computed: true, optional: false, required: false
  private _businessConnectors = new DataPowerplatformDataLossPreventionPoliciesPoliciesBusinessConnectorsList(this, "business_connectors", true);
  public get businessConnectors() {
    return this._businessConnectors;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // custom_connectors_patterns - computed: true, optional: false, required: false
  private _customConnectorsPatterns = new DataPowerplatformDataLossPreventionPoliciesPoliciesCustomConnectorsPatternsList(this, "custom_connectors_patterns", true);
  public get customConnectorsPatterns() {
    return this._customConnectorsPatterns;
  }

  // default_connectors_classification - computed: true, optional: false, required: false
  public get defaultConnectorsClassification() {
    return this.getStringAttribute('default_connectors_classification');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // environment_type - computed: true, optional: false, required: true
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

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
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

  // non_business_connectors - computed: true, optional: false, required: false
  private _nonBusinessConnectors = new DataPowerplatformDataLossPreventionPoliciesPoliciesNonBusinessConnectorsList(this, "non_business_connectors", true);
  public get nonBusinessConnectors() {
    return this._nonBusinessConnectors;
  }
}

export class DataPowerplatformDataLossPreventionPoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataPowerplatformDataLossPreventionPoliciesPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataPowerplatformDataLossPreventionPoliciesPoliciesOutputReference {
    return new DataPowerplatformDataLossPreventionPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerplatformDataLossPreventionPoliciesTimeouts {
}

export function dataPowerplatformDataLossPreventionPoliciesTimeoutsToTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerplatformDataLossPreventionPoliciesTimeoutsToHclTerraform(struct?: DataPowerplatformDataLossPreventionPoliciesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerplatformDataLossPreventionPoliciesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerplatformDataLossPreventionPoliciesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerplatformDataLossPreventionPoliciesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies powerplatform_data_loss_prevention_policies}
*/
export class DataPowerplatformDataLossPreventionPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerplatform_data_loss_prevention_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerplatformDataLossPreventionPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerplatformDataLossPreventionPolicies to import
  * @param importFromId The id of the existing DataPowerplatformDataLossPreventionPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerplatformDataLossPreventionPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerplatform_data_loss_prevention_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/power-platform/3.9.1/docs/data-sources/powerplatform_data_loss_prevention_policies powerplatform_data_loss_prevention_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerplatformDataLossPreventionPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerplatformDataLossPreventionPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerplatform_data_loss_prevention_policies',
      terraformGeneratorMetadata: {
        providerName: 'power-platform',
        providerVersion: '3.9.1',
        providerVersionConstraint: '3.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // policies - computed: true, optional: false, required: false
  private _policies = new DataPowerplatformDataLossPreventionPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataPowerplatformDataLossPreventionPoliciesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataPowerplatformDataLossPreventionPoliciesTimeouts) {
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
      timeouts: dataPowerplatformDataLossPreventionPoliciesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      timeouts: {
        value: dataPowerplatformDataLossPreventionPoliciesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerplatformDataLossPreventionPoliciesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
