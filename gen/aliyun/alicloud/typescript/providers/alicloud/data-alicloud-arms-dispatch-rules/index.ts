// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudArmsDispatchRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#dispatch_rule_name DataAlicloudArmsDispatchRules#dispatch_rule_name}
  */
  readonly dispatchRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#enable_details DataAlicloudArmsDispatchRules#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#id DataAlicloudArmsDispatchRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#ids DataAlicloudArmsDispatchRules#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#name_regex DataAlicloudArmsDispatchRules#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#output_file DataAlicloudArmsDispatchRules#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudArmsDispatchRulesRulesGroupRules {
}

export function dataAlicloudArmsDispatchRulesRulesGroupRulesToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesGroupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesGroupRulesToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesGroupRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesGroupRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesGroupRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_interval - computed: true, optional: false, required: false
  public get groupInterval() {
    return this.getNumberAttribute('group_interval');
  }

  // group_wait_time - computed: true, optional: false, required: false
  public get groupWaitTime() {
    return this.getNumberAttribute('group_wait_time');
  }

  // grouping_fields - computed: true, optional: false, required: false
  public get groupingFields() {
    return this.getListAttribute('grouping_fields');
  }

  // repeat_interval - computed: true, optional: false, required: false
  public get repeatInterval() {
    return this.getNumberAttribute('repeat_interval');
  }
}

export class DataAlicloudArmsDispatchRulesRulesGroupRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesGroupRulesOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions {
}

export function dataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroups {
}

export function dataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_match_expressions - computed: true, optional: false, required: false
  private _labelMatchExpressions = new DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressionsList(this, "label_match_expressions", false);
  public get labelMatchExpressions() {
    return this._labelMatchExpressions;
  }
}

export class DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGrid {
}

export function dataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label_match_expression_groups - computed: true, optional: false, required: false
  private _labelMatchExpressionGroups = new DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridLabelMatchExpressionGroupsList(this, "label_match_expression_groups", false);
  public get labelMatchExpressionGroups() {
    return this._labelMatchExpressionGroups;
  }
}

export class DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjects {
}

export function dataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notify_object_id - computed: true, optional: false, required: false
  public get notifyObjectId() {
    return this.getStringAttribute('notify_object_id');
  }

  // notify_type - computed: true, optional: false, required: false
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
}

export class DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRulesNotifyRules {
}

export function dataAlicloudArmsDispatchRulesRulesNotifyRulesToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesNotifyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesNotifyRulesToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesNotifyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesNotifyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesNotifyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesNotifyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // notify_channels - computed: true, optional: false, required: false
  public get notifyChannels() {
    return this.getListAttribute('notify_channels');
  }

  // notify_end_time - computed: true, optional: false, required: false
  public get notifyEndTime() {
    return this.getStringAttribute('notify_end_time');
  }

  // notify_objects - computed: true, optional: false, required: false
  private _notifyObjects = new DataAlicloudArmsDispatchRulesRulesNotifyRulesNotifyObjectsList(this, "notify_objects", false);
  public get notifyObjects() {
    return this._notifyObjects;
  }

  // notify_start_time - computed: true, optional: false, required: false
  public get notifyStartTime() {
    return this.getStringAttribute('notify_start_time');
  }
}

export class DataAlicloudArmsDispatchRulesRulesNotifyRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesNotifyRulesOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesNotifyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRulesNotifyTemplate {
}

export function dataAlicloudArmsDispatchRulesRulesNotifyTemplateToTerraform(struct?: DataAlicloudArmsDispatchRulesRulesNotifyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesNotifyTemplateToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRulesNotifyTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesNotifyTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRulesNotifyTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRulesNotifyTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_content - computed: true, optional: false, required: false
  public get emailContent() {
    return this.getStringAttribute('email_content');
  }

  // email_recover_content - computed: true, optional: false, required: false
  public get emailRecoverContent() {
    return this.getStringAttribute('email_recover_content');
  }

  // email_recover_title - computed: true, optional: false, required: false
  public get emailRecoverTitle() {
    return this.getStringAttribute('email_recover_title');
  }

  // email_title - computed: true, optional: false, required: false
  public get emailTitle() {
    return this.getStringAttribute('email_title');
  }

  // robot_content - computed: true, optional: false, required: false
  public get robotContent() {
    return this.getStringAttribute('robot_content');
  }

  // sms_content - computed: true, optional: false, required: false
  public get smsContent() {
    return this.getStringAttribute('sms_content');
  }

  // sms_recover_content - computed: true, optional: false, required: false
  public get smsRecoverContent() {
    return this.getStringAttribute('sms_recover_content');
  }

  // tts_content - computed: true, optional: false, required: false
  public get ttsContent() {
    return this.getStringAttribute('tts_content');
  }

  // tts_recover_content - computed: true, optional: false, required: false
  public get ttsRecoverContent() {
    return this.getStringAttribute('tts_recover_content');
  }
}

export class DataAlicloudArmsDispatchRulesRulesNotifyTemplateList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesNotifyTemplateOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesNotifyTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudArmsDispatchRulesRules {
}

export function dataAlicloudArmsDispatchRulesRulesToTerraform(struct?: DataAlicloudArmsDispatchRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudArmsDispatchRulesRulesToHclTerraform(struct?: DataAlicloudArmsDispatchRulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudArmsDispatchRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudArmsDispatchRulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudArmsDispatchRulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dispatch_rule_id - computed: true, optional: false, required: false
  public get dispatchRuleId() {
    return this.getStringAttribute('dispatch_rule_id');
  }

  // dispatch_rule_name - computed: true, optional: false, required: false
  public get dispatchRuleName() {
    return this.getStringAttribute('dispatch_rule_name');
  }

  // group_rules - computed: true, optional: false, required: false
  private _groupRules = new DataAlicloudArmsDispatchRulesRulesGroupRulesList(this, "group_rules", false);
  public get groupRules() {
    return this._groupRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_match_expression_grid - computed: true, optional: false, required: false
  private _labelMatchExpressionGrid = new DataAlicloudArmsDispatchRulesRulesLabelMatchExpressionGridList(this, "label_match_expression_grid", false);
  public get labelMatchExpressionGrid() {
    return this._labelMatchExpressionGrid;
  }

  // notify_rules - computed: true, optional: false, required: false
  private _notifyRules = new DataAlicloudArmsDispatchRulesRulesNotifyRulesList(this, "notify_rules", false);
  public get notifyRules() {
    return this._notifyRules;
  }

  // notify_template - computed: true, optional: false, required: false
  private _notifyTemplate = new DataAlicloudArmsDispatchRulesRulesNotifyTemplateList(this, "notify_template", false);
  public get notifyTemplate() {
    return this._notifyTemplate;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudArmsDispatchRulesRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudArmsDispatchRulesRulesOutputReference {
    return new DataAlicloudArmsDispatchRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules alicloud_arms_dispatch_rules}
*/
export class DataAlicloudArmsDispatchRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_arms_dispatch_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudArmsDispatchRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudArmsDispatchRules to import
  * @param importFromId The id of the existing DataAlicloudArmsDispatchRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudArmsDispatchRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_arms_dispatch_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/arms_dispatch_rules alicloud_arms_dispatch_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudArmsDispatchRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudArmsDispatchRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_arms_dispatch_rules',
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
    this._dispatchRuleName = config.dispatchRuleName;
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dispatch_rule_name - computed: false, optional: true, required: false
  private _dispatchRuleName?: string; 
  public get dispatchRuleName() {
    return this.getStringAttribute('dispatch_rule_name');
  }
  public set dispatchRuleName(value: string) {
    this._dispatchRuleName = value;
  }
  public resetDispatchRuleName() {
    this._dispatchRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRuleNameInput() {
    return this._dispatchRuleName;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // rules - computed: true, optional: false, required: false
  private _rules = new DataAlicloudArmsDispatchRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dispatch_rule_name: cdktf.stringToTerraform(this._dispatchRuleName),
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dispatch_rule_name: {
        value: cdktf.stringToHclTerraform(this._dispatchRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
