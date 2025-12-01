// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudGaForwardingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#accelerator_id DataAlicloudGaForwardingRules#accelerator_id}
  */
  readonly acceleratorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#id DataAlicloudGaForwardingRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#ids DataAlicloudGaForwardingRules#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#listener_id DataAlicloudGaForwardingRules#listener_id}
  */
  readonly listenerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#output_file DataAlicloudGaForwardingRules#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#status DataAlicloudGaForwardingRules#status}
  */
  readonly status?: string;
}
export interface DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples {
}

export function dataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_group_id - computed: true, optional: false, required: false
  public get endpointGroupId() {
    return this.getStringAttribute('endpoint_group_id');
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfig {
}

export function dataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // server_group_tuples - computed: true, optional: false, required: false
  private _serverGroupTuples = new DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigServerGroupTuplesList(this, "server_group_tuples", false);
  public get serverGroupTuples() {
    return this._serverGroupTuples;
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaForwardingRulesForwardingRulesRuleActions {
}

export function dataAlicloudGaForwardingRulesForwardingRulesRuleActionsToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesRuleActionsToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRulesRuleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRulesRuleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_group_config - computed: true, optional: false, required: false
  private _forwardGroupConfig = new DataAlicloudGaForwardingRulesForwardingRulesRuleActionsForwardGroupConfigList(this, "forward_group_config", false);
  public get forwardGroupConfig() {
    return this._forwardGroupConfig;
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // rule_action_type - computed: true, optional: false, required: false
  public get ruleActionType() {
    return this.getStringAttribute('rule_action_type');
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesRuleActionsOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfig {
}

export function dataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfig {
}

export function dataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaForwardingRulesForwardingRulesRuleConditions {
}

export function dataAlicloudGaForwardingRulesForwardingRulesRuleConditionsToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesRuleConditionsToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRulesRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRulesRuleConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRulesRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_config - computed: true, optional: false, required: false
  private _hostConfig = new DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsHostConfigList(this, "host_config", false);
  public get hostConfig() {
    return this._hostConfig;
  }

  // path_config - computed: true, optional: false, required: false
  private _pathConfig = new DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsPathConfigList(this, "path_config", false);
  public get pathConfig() {
    return this._pathConfig;
  }

  // rule_condition_type - computed: true, optional: false, required: false
  public get ruleConditionType() {
    return this.getStringAttribute('rule_condition_type');
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudGaForwardingRulesForwardingRules {
}

export function dataAlicloudGaForwardingRulesForwardingRulesToTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudGaForwardingRulesForwardingRulesToHclTerraform(struct?: DataAlicloudGaForwardingRulesForwardingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudGaForwardingRulesForwardingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudGaForwardingRulesForwardingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudGaForwardingRulesForwardingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forwarding_rule_id - computed: true, optional: false, required: false
  public get forwardingRuleId() {
    return this.getStringAttribute('forwarding_rule_id');
  }

  // forwarding_rule_name - computed: true, optional: false, required: false
  public get forwardingRuleName() {
    return this.getStringAttribute('forwarding_rule_name');
  }

  // forwarding_rule_status - computed: true, optional: false, required: false
  public get forwardingRuleStatus() {
    return this.getStringAttribute('forwarding_rule_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rule_actions - computed: true, optional: false, required: false
  private _ruleActions = new DataAlicloudGaForwardingRulesForwardingRulesRuleActionsList(this, "rule_actions", false);
  public get ruleActions() {
    return this._ruleActions;
  }

  // rule_conditions - computed: true, optional: false, required: false
  private _ruleConditions = new DataAlicloudGaForwardingRulesForwardingRulesRuleConditionsList(this, "rule_conditions", false);
  public get ruleConditions() {
    return this._ruleConditions;
  }
}

export class DataAlicloudGaForwardingRulesForwardingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudGaForwardingRulesForwardingRulesOutputReference {
    return new DataAlicloudGaForwardingRulesForwardingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules alicloud_ga_forwarding_rules}
*/
export class DataAlicloudGaForwardingRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ga_forwarding_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudGaForwardingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudGaForwardingRules to import
  * @param importFromId The id of the existing DataAlicloudGaForwardingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudGaForwardingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ga_forwarding_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/ga_forwarding_rules alicloud_ga_forwarding_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudGaForwardingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudGaForwardingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ga_forwarding_rules',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
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
    this._id = config.id;
    this._ids = config.ids;
    this._listenerId = config.listenerId;
    this._outputFile = config.outputFile;
    this._status = config.status;
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

  // forwarding_rules - computed: true, optional: false, required: false
  private _forwardingRules = new DataAlicloudGaForwardingRulesForwardingRulesList(this, "forwarding_rules", false);
  public get forwardingRules() {
    return this._forwardingRules;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerator_id: cdktf.stringToTerraform(this._acceleratorId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      listener_id: {
        value: cdktf.stringToHclTerraform(this._listenerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
