// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#accelerator_id GaForwardingRule#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#forwarding_rule_name GaForwardingRule#forwarding_rule_name}
  */
  readonly forwardingRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#id GaForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#listener_id GaForwardingRule#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#priority GaForwardingRule#priority}
  */
  readonly priority?: number;
  /**
  * rule_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#rule_actions GaForwardingRule#rule_actions}
  */
  readonly ruleActions: GaForwardingRuleRuleActions[] | cdktf.IResolvable;
  /**
  * rule_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#rule_conditions GaForwardingRule#rule_conditions}
  */
  readonly ruleConditions: GaForwardingRuleRuleConditions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#timeouts GaForwardingRule#timeouts}
  */
  readonly timeouts?: GaForwardingRuleTimeouts;
}
export interface GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#endpoint_group_id GaForwardingRule#endpoint_group_id}
  */
  readonly endpointGroupId: string;
}

export function gaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesToTerraform(struct?: GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_group_id: cdktf.stringToTerraform(struct!.endpointGroupId),
  }
}


export function gaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesToHclTerraform(struct?: GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_group_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointGroupId = this._endpointGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointGroupId = value.endpointGroupId;
    }
  }

  // endpoint_group_id - computed: false, optional: false, required: true
  private _endpointGroupId?: string; 
  public get endpointGroupId() {
    return this.getStringAttribute('endpoint_group_id');
  }
  public set endpointGroupId(value: string) {
    this._endpointGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupIdInput() {
    return this._endpointGroupId;
  }
}

export class GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesList extends cdktf.ComplexList {
  public internalValue? : GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable

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
  public get(index: number): GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesOutputReference {
    return new GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaForwardingRuleRuleActionsForwardGroupConfig {
  /**
  * server_group_tuples block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#server_group_tuples GaForwardingRule#server_group_tuples}
  */
  readonly serverGroupTuples: GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable;
}

export function gaForwardingRuleRuleActionsForwardGroupConfigToTerraform(struct?: GaForwardingRuleRuleActionsForwardGroupConfigOutputReference | GaForwardingRuleRuleActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_group_tuples: cdktf.listMapper(gaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesToTerraform, true)(struct!.serverGroupTuples),
  }
}


export function gaForwardingRuleRuleActionsForwardGroupConfigToHclTerraform(struct?: GaForwardingRuleRuleActionsForwardGroupConfigOutputReference | GaForwardingRuleRuleActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_group_tuples: {
      value: cdktf.listMapperHcl(gaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesToHclTerraform, true)(struct!.serverGroupTuples),
      isBlock: true,
      type: "set",
      storageClassType: "GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaForwardingRuleRuleActionsForwardGroupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GaForwardingRuleRuleActionsForwardGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverGroupTuples?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGroupTuples = this._serverGroupTuples?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleRuleActionsForwardGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serverGroupTuples.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serverGroupTuples.internalValue = value.serverGroupTuples;
    }
  }

  // server_group_tuples - computed: false, optional: false, required: true
  private _serverGroupTuples = new GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuplesList(this, "server_group_tuples", true);
  public get serverGroupTuples() {
    return this._serverGroupTuples;
  }
  public putServerGroupTuples(value: GaForwardingRuleRuleActionsForwardGroupConfigServerGroupTuples[] | cdktf.IResolvable) {
    this._serverGroupTuples.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupTuplesInput() {
    return this._serverGroupTuples.internalValue;
  }
}
export interface GaForwardingRuleRuleActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#order GaForwardingRule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#rule_action_type GaForwardingRule#rule_action_type}
  */
  readonly ruleActionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#rule_action_value GaForwardingRule#rule_action_value}
  */
  readonly ruleActionValue?: string;
  /**
  * forward_group_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#forward_group_config GaForwardingRule#forward_group_config}
  */
  readonly forwardGroupConfig?: GaForwardingRuleRuleActionsForwardGroupConfig;
}

export function gaForwardingRuleRuleActionsToTerraform(struct?: GaForwardingRuleRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    rule_action_type: cdktf.stringToTerraform(struct!.ruleActionType),
    rule_action_value: cdktf.stringToTerraform(struct!.ruleActionValue),
    forward_group_config: gaForwardingRuleRuleActionsForwardGroupConfigToTerraform(struct!.forwardGroupConfig),
  }
}


export function gaForwardingRuleRuleActionsToHclTerraform(struct?: GaForwardingRuleRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_action_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_action_value: {
      value: cdktf.stringToHclTerraform(struct!.ruleActionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_group_config: {
      value: gaForwardingRuleRuleActionsForwardGroupConfigToHclTerraform(struct!.forwardGroupConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GaForwardingRuleRuleActionsForwardGroupConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaForwardingRuleRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaForwardingRuleRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._ruleActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionType = this._ruleActionType;
    }
    if (this._ruleActionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActionValue = this._ruleActionValue;
    }
    if (this._forwardGroupConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardGroupConfig = this._forwardGroupConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._ruleActionType = undefined;
      this._ruleActionValue = undefined;
      this._forwardGroupConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._ruleActionType = value.ruleActionType;
      this._ruleActionValue = value.ruleActionValue;
      this._forwardGroupConfig.internalValue = value.forwardGroupConfig;
    }
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

  // rule_action_type - computed: false, optional: false, required: true
  private _ruleActionType?: string; 
  public get ruleActionType() {
    return this.getStringAttribute('rule_action_type');
  }
  public set ruleActionType(value: string) {
    this._ruleActionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionTypeInput() {
    return this._ruleActionType;
  }

  // rule_action_value - computed: false, optional: true, required: false
  private _ruleActionValue?: string; 
  public get ruleActionValue() {
    return this.getStringAttribute('rule_action_value');
  }
  public set ruleActionValue(value: string) {
    this._ruleActionValue = value;
  }
  public resetRuleActionValue() {
    this._ruleActionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionValueInput() {
    return this._ruleActionValue;
  }

  // forward_group_config - computed: false, optional: true, required: false
  private _forwardGroupConfig = new GaForwardingRuleRuleActionsForwardGroupConfigOutputReference(this, "forward_group_config");
  public get forwardGroupConfig() {
    return this._forwardGroupConfig;
  }
  public putForwardGroupConfig(value: GaForwardingRuleRuleActionsForwardGroupConfig) {
    this._forwardGroupConfig.internalValue = value;
  }
  public resetForwardGroupConfig() {
    this._forwardGroupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardGroupConfigInput() {
    return this._forwardGroupConfig.internalValue;
  }
}

export class GaForwardingRuleRuleActionsList extends cdktf.ComplexList {
  public internalValue? : GaForwardingRuleRuleActions[] | cdktf.IResolvable

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
  public get(index: number): GaForwardingRuleRuleActionsOutputReference {
    return new GaForwardingRuleRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaForwardingRuleRuleConditionsHostConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#values GaForwardingRule#values}
  */
  readonly values?: string[];
}

export function gaForwardingRuleRuleConditionsHostConfigToTerraform(struct?: GaForwardingRuleRuleConditionsHostConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function gaForwardingRuleRuleConditionsHostConfigToHclTerraform(struct?: GaForwardingRuleRuleConditionsHostConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaForwardingRuleRuleConditionsHostConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaForwardingRuleRuleConditionsHostConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleRuleConditionsHostConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class GaForwardingRuleRuleConditionsHostConfigList extends cdktf.ComplexList {
  public internalValue? : GaForwardingRuleRuleConditionsHostConfig[] | cdktf.IResolvable

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
  public get(index: number): GaForwardingRuleRuleConditionsHostConfigOutputReference {
    return new GaForwardingRuleRuleConditionsHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaForwardingRuleRuleConditionsPathConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#values GaForwardingRule#values}
  */
  readonly values?: string[];
}

export function gaForwardingRuleRuleConditionsPathConfigToTerraform(struct?: GaForwardingRuleRuleConditionsPathConfigOutputReference | GaForwardingRuleRuleConditionsPathConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function gaForwardingRuleRuleConditionsPathConfigToHclTerraform(struct?: GaForwardingRuleRuleConditionsPathConfigOutputReference | GaForwardingRuleRuleConditionsPathConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaForwardingRuleRuleConditionsPathConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GaForwardingRuleRuleConditionsPathConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleRuleConditionsPathConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GaForwardingRuleRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#rule_condition_type GaForwardingRule#rule_condition_type}
  */
  readonly ruleConditionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#rule_condition_value GaForwardingRule#rule_condition_value}
  */
  readonly ruleConditionValue?: string;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#host_config GaForwardingRule#host_config}
  */
  readonly hostConfig?: GaForwardingRuleRuleConditionsHostConfig[] | cdktf.IResolvable;
  /**
  * path_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#path_config GaForwardingRule#path_config}
  */
  readonly pathConfig?: GaForwardingRuleRuleConditionsPathConfig;
}

export function gaForwardingRuleRuleConditionsToTerraform(struct?: GaForwardingRuleRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_condition_type: cdktf.stringToTerraform(struct!.ruleConditionType),
    rule_condition_value: cdktf.stringToTerraform(struct!.ruleConditionValue),
    host_config: cdktf.listMapper(gaForwardingRuleRuleConditionsHostConfigToTerraform, true)(struct!.hostConfig),
    path_config: gaForwardingRuleRuleConditionsPathConfigToTerraform(struct!.pathConfig),
  }
}


export function gaForwardingRuleRuleConditionsToHclTerraform(struct?: GaForwardingRuleRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_condition_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleConditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_condition_value: {
      value: cdktf.stringToHclTerraform(struct!.ruleConditionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_config: {
      value: cdktf.listMapperHcl(gaForwardingRuleRuleConditionsHostConfigToHclTerraform, true)(struct!.hostConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GaForwardingRuleRuleConditionsHostConfigList",
    },
    path_config: {
      value: gaForwardingRuleRuleConditionsPathConfigToHclTerraform(struct!.pathConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GaForwardingRuleRuleConditionsPathConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GaForwardingRuleRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GaForwardingRuleRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleConditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConditionType = this._ruleConditionType;
    }
    if (this._ruleConditionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleConditionValue = this._ruleConditionValue;
    }
    if (this._hostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConfig = this._hostConfig?.internalValue;
    }
    if (this._pathConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathConfig = this._pathConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleConditionType = undefined;
      this._ruleConditionValue = undefined;
      this._hostConfig.internalValue = undefined;
      this._pathConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleConditionType = value.ruleConditionType;
      this._ruleConditionValue = value.ruleConditionValue;
      this._hostConfig.internalValue = value.hostConfig;
      this._pathConfig.internalValue = value.pathConfig;
    }
  }

  // rule_condition_type - computed: false, optional: false, required: true
  private _ruleConditionType?: string; 
  public get ruleConditionType() {
    return this.getStringAttribute('rule_condition_type');
  }
  public set ruleConditionType(value: string) {
    this._ruleConditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConditionTypeInput() {
    return this._ruleConditionType;
  }

  // rule_condition_value - computed: false, optional: true, required: false
  private _ruleConditionValue?: string; 
  public get ruleConditionValue() {
    return this.getStringAttribute('rule_condition_value');
  }
  public set ruleConditionValue(value: string) {
    this._ruleConditionValue = value;
  }
  public resetRuleConditionValue() {
    this._ruleConditionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConditionValueInput() {
    return this._ruleConditionValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new GaForwardingRuleRuleConditionsHostConfigList(this, "host_config", true);
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: GaForwardingRuleRuleConditionsHostConfig[] | cdktf.IResolvable) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // path_config - computed: false, optional: true, required: false
  private _pathConfig = new GaForwardingRuleRuleConditionsPathConfigOutputReference(this, "path_config");
  public get pathConfig() {
    return this._pathConfig;
  }
  public putPathConfig(value: GaForwardingRuleRuleConditionsPathConfig) {
    this._pathConfig.internalValue = value;
  }
  public resetPathConfig() {
    this._pathConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathConfigInput() {
    return this._pathConfig.internalValue;
  }
}

export class GaForwardingRuleRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : GaForwardingRuleRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): GaForwardingRuleRuleConditionsOutputReference {
    return new GaForwardingRuleRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GaForwardingRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#create GaForwardingRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#delete GaForwardingRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#update GaForwardingRule#update}
  */
  readonly update?: string;
}

export function gaForwardingRuleTimeoutsToTerraform(struct?: GaForwardingRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gaForwardingRuleTimeoutsToHclTerraform(struct?: GaForwardingRuleTimeouts | cdktf.IResolvable): any {
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

export class GaForwardingRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GaForwardingRuleTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GaForwardingRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule alicloud_ga_forwarding_rule}
*/
export class GaForwardingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaForwardingRule to import
  * @param importFromId The id of the existing GaForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ga_forwarding_rule alicloud_ga_forwarding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: GaForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratorId = config.acceleratorId;
    this._forwardingRuleName = config.forwardingRuleName;
    this._id = config.id;
    this._listenerId = config.listenerId;
    this._priority = config.priority;
    this._ruleActions.internalValue = config.ruleActions;
    this._ruleConditions.internalValue = config.ruleConditions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_id - computed: false, optional: false, required: true
  private _acceleratorId?: string; 
  public get acceleratorId() {
    return this.getStringAttribute('accelerator_id');
  }
  public set acceleratorId(value: string) {
    this._acceleratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorIdInput() {
    return this._acceleratorId;
  }

  // forwarding_rule_id - computed: true, optional: false, required: false
  public get forwardingRuleId() {
    return this.getStringAttribute('forwarding_rule_id');
  }

  // forwarding_rule_name - computed: false, optional: true, required: false
  private _forwardingRuleName?: string; 
  public get forwardingRuleName() {
    return this.getStringAttribute('forwarding_rule_name');
  }
  public set forwardingRuleName(value: string) {
    this._forwardingRuleName = value;
  }
  public resetForwardingRuleName() {
    this._forwardingRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleNameInput() {
    return this._forwardingRuleName;
  }

  // forwarding_rule_status - computed: true, optional: false, required: false
  public get forwardingRuleStatus() {
    return this.getStringAttribute('forwarding_rule_status');
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

  // listener_id - computed: false, optional: false, required: true
  private _listenerId?: string; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string) {
    this._listenerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_actions - computed: false, optional: false, required: true
  private _ruleActions = new GaForwardingRuleRuleActionsList(this, "rule_actions", true);
  public get ruleActions() {
    return this._ruleActions;
  }
  public putRuleActions(value: GaForwardingRuleRuleActions[] | cdktf.IResolvable) {
    this._ruleActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionsInput() {
    return this._ruleActions.internalValue;
  }

  // rule_conditions - computed: false, optional: false, required: true
  private _ruleConditions = new GaForwardingRuleRuleConditionsList(this, "rule_conditions", true);
  public get ruleConditions() {
    return this._ruleConditions;
  }
  public putRuleConditions(value: GaForwardingRuleRuleConditions[] | cdktf.IResolvable) {
    this._ruleConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleConditionsInput() {
    return this._ruleConditions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GaForwardingRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GaForwardingRuleTimeouts) {
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
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      forwarding_rule_name: cdktf.stringToTerraform(this._forwardingRuleName),
      id: cdktf.stringToTerraform(this._id),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      priority: cdktf.numberToTerraform(this._priority),
      rule_actions: cdktf.listMapper(gaForwardingRuleRuleActionsToTerraform, true)(this._ruleActions.internalValue),
      rule_conditions: cdktf.listMapper(gaForwardingRuleRuleConditionsToTerraform, true)(this._ruleConditions.internalValue),
      timeouts: gaForwardingRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_id: {
        value: cdktf.stringToHclTerraform(this._acceleratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarding_rule_name: {
        value: cdktf.stringToHclTerraform(this._forwardingRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_actions: {
        value: cdktf.listMapperHcl(gaForwardingRuleRuleActionsToHclTerraform, true)(this._ruleActions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GaForwardingRuleRuleActionsList",
      },
      rule_conditions: {
        value: cdktf.listMapperHcl(gaForwardingRuleRuleConditionsToHclTerraform, true)(this._ruleConditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GaForwardingRuleRuleConditionsList",
      },
      timeouts: {
        value: gaForwardingRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GaForwardingRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
