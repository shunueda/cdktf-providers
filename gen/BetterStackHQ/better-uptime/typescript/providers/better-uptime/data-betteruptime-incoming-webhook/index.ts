// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_incoming_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimeIncomingWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of this incoming webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_incoming_webhook#name DataBetteruptimeIncomingWebhook#name}
  */
  readonly name: string;
}
export interface DataBetteruptimeIncomingWebhookAcknowledgedAlertIdField {
}

export function dataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldToTerraform(struct?: DataBetteruptimeIncomingWebhookAcknowledgedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldToHclTerraform(struct?: DataBetteruptimeIncomingWebhookAcknowledgedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookAcknowledgedAlertIdField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookAcknowledgedAlertIdField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldOutputReference {
    return new DataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookAcknowledgedRules {
}

export function dataBetteruptimeIncomingWebhookAcknowledgedRulesToTerraform(struct?: DataBetteruptimeIncomingWebhookAcknowledgedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookAcknowledgedRulesToHclTerraform(struct?: DataBetteruptimeIncomingWebhookAcknowledgedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookAcknowledgedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookAcknowledgedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookAcknowledgedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // rule_target - computed: true, optional: false, required: false
  public get ruleTarget() {
    return this.getStringAttribute('rule_target');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookAcknowledgedRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookAcknowledgedRulesOutputReference {
    return new DataBetteruptimeIncomingWebhookAcknowledgedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookCauseField {
}

export function dataBetteruptimeIncomingWebhookCauseFieldToTerraform(struct?: DataBetteruptimeIncomingWebhookCauseField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookCauseFieldToHclTerraform(struct?: DataBetteruptimeIncomingWebhookCauseField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookCauseFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookCauseField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookCauseField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookCauseFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookCauseFieldOutputReference {
    return new DataBetteruptimeIncomingWebhookCauseFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookOtherAcknowledgedFields {
}

export function dataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsToTerraform(struct?: DataBetteruptimeIncomingWebhookOtherAcknowledgedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsToHclTerraform(struct?: DataBetteruptimeIncomingWebhookOtherAcknowledgedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookOtherAcknowledgedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookOtherAcknowledgedFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsOutputReference {
    return new DataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookOtherResolvedFields {
}

export function dataBetteruptimeIncomingWebhookOtherResolvedFieldsToTerraform(struct?: DataBetteruptimeIncomingWebhookOtherResolvedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookOtherResolvedFieldsToHclTerraform(struct?: DataBetteruptimeIncomingWebhookOtherResolvedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookOtherResolvedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookOtherResolvedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookOtherResolvedFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookOtherResolvedFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookOtherResolvedFieldsOutputReference {
    return new DataBetteruptimeIncomingWebhookOtherResolvedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookOtherStartedFields {
}

export function dataBetteruptimeIncomingWebhookOtherStartedFieldsToTerraform(struct?: DataBetteruptimeIncomingWebhookOtherStartedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookOtherStartedFieldsToHclTerraform(struct?: DataBetteruptimeIncomingWebhookOtherStartedFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookOtherStartedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookOtherStartedFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookOtherStartedFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookOtherStartedFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookOtherStartedFieldsOutputReference {
    return new DataBetteruptimeIncomingWebhookOtherStartedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookResolvedAlertIdField {
}

export function dataBetteruptimeIncomingWebhookResolvedAlertIdFieldToTerraform(struct?: DataBetteruptimeIncomingWebhookResolvedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookResolvedAlertIdFieldToHclTerraform(struct?: DataBetteruptimeIncomingWebhookResolvedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookResolvedAlertIdFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookResolvedAlertIdField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookResolvedAlertIdField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookResolvedAlertIdFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookResolvedAlertIdFieldOutputReference {
    return new DataBetteruptimeIncomingWebhookResolvedAlertIdFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookResolvedRules {
}

export function dataBetteruptimeIncomingWebhookResolvedRulesToTerraform(struct?: DataBetteruptimeIncomingWebhookResolvedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookResolvedRulesToHclTerraform(struct?: DataBetteruptimeIncomingWebhookResolvedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookResolvedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookResolvedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookResolvedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // rule_target - computed: true, optional: false, required: false
  public get ruleTarget() {
    return this.getStringAttribute('rule_target');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookResolvedRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookResolvedRulesOutputReference {
    return new DataBetteruptimeIncomingWebhookResolvedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookStartedAlertIdField {
}

export function dataBetteruptimeIncomingWebhookStartedAlertIdFieldToTerraform(struct?: DataBetteruptimeIncomingWebhookStartedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookStartedAlertIdFieldToHclTerraform(struct?: DataBetteruptimeIncomingWebhookStartedAlertIdField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookStartedAlertIdFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookStartedAlertIdField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookStartedAlertIdField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookStartedAlertIdFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookStartedAlertIdFieldOutputReference {
    return new DataBetteruptimeIncomingWebhookStartedAlertIdFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookStartedRules {
}

export function dataBetteruptimeIncomingWebhookStartedRulesToTerraform(struct?: DataBetteruptimeIncomingWebhookStartedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookStartedRulesToHclTerraform(struct?: DataBetteruptimeIncomingWebhookStartedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookStartedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookStartedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookStartedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // rule_target - computed: true, optional: false, required: false
  public get ruleTarget() {
    return this.getStringAttribute('rule_target');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookStartedRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookStartedRulesOutputReference {
    return new DataBetteruptimeIncomingWebhookStartedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBetteruptimeIncomingWebhookTitleField {
}

export function dataBetteruptimeIncomingWebhookTitleFieldToTerraform(struct?: DataBetteruptimeIncomingWebhookTitleField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBetteruptimeIncomingWebhookTitleFieldToHclTerraform(struct?: DataBetteruptimeIncomingWebhookTitleField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBetteruptimeIncomingWebhookTitleFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBetteruptimeIncomingWebhookTitleField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBetteruptimeIncomingWebhookTitleField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_after - computed: true, optional: false, required: false
  public get contentAfter() {
    return this.getStringAttribute('content_after');
  }

  // content_before - computed: true, optional: false, required: false
  public get contentBefore() {
    return this.getStringAttribute('content_before');
  }

  // field_target - computed: true, optional: false, required: false
  public get fieldTarget() {
    return this.getStringAttribute('field_target');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // special_type - computed: true, optional: false, required: false
  public get specialType() {
    return this.getStringAttribute('special_type');
  }

  // target_field - computed: true, optional: false, required: false
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
}

export class DataBetteruptimeIncomingWebhookTitleFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataBetteruptimeIncomingWebhookTitleFieldOutputReference {
    return new DataBetteruptimeIncomingWebhookTitleFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_incoming_webhook betteruptime_incoming_webhook}
*/
export class DataBetteruptimeIncomingWebhook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_incoming_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimeIncomingWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimeIncomingWebhook to import
  * @param importFromId The id of the existing DataBetteruptimeIncomingWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_incoming_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimeIncomingWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_incoming_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_incoming_webhook betteruptime_incoming_webhook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimeIncomingWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimeIncomingWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_incoming_webhook',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledged_alert_id_field - computed: true, optional: false, required: false
  private _acknowledgedAlertIdField = new DataBetteruptimeIncomingWebhookAcknowledgedAlertIdFieldList(this, "acknowledged_alert_id_field", false);
  public get acknowledgedAlertIdField() {
    return this._acknowledgedAlertIdField;
  }

  // acknowledged_rule_type - computed: true, optional: false, required: false
  public get acknowledgedRuleType() {
    return this.getStringAttribute('acknowledged_rule_type');
  }

  // acknowledged_rules - computed: true, optional: false, required: false
  private _acknowledgedRules = new DataBetteruptimeIncomingWebhookAcknowledgedRulesList(this, "acknowledged_rules", false);
  public get acknowledgedRules() {
    return this._acknowledgedRules;
  }

  // call - computed: true, optional: false, required: false
  public get call() {
    return this.getBooleanAttribute('call');
  }

  // cause_field - computed: true, optional: false, required: false
  private _causeField = new DataBetteruptimeIncomingWebhookCauseFieldList(this, "cause_field", false);
  public get causeField() {
    return this._causeField;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // critical_alert - computed: true, optional: false, required: false
  public get criticalAlert() {
    return this.getBooleanAttribute('critical_alert');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getBooleanAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // other_acknowledged_fields - computed: true, optional: false, required: false
  private _otherAcknowledgedFields = new DataBetteruptimeIncomingWebhookOtherAcknowledgedFieldsList(this, "other_acknowledged_fields", false);
  public get otherAcknowledgedFields() {
    return this._otherAcknowledgedFields;
  }

  // other_resolved_fields - computed: true, optional: false, required: false
  private _otherResolvedFields = new DataBetteruptimeIncomingWebhookOtherResolvedFieldsList(this, "other_resolved_fields", false);
  public get otherResolvedFields() {
    return this._otherResolvedFields;
  }

  // other_started_fields - computed: true, optional: false, required: false
  private _otherStartedFields = new DataBetteruptimeIncomingWebhookOtherStartedFieldsList(this, "other_started_fields", false);
  public get otherStartedFields() {
    return this._otherStartedFields;
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // push - computed: true, optional: false, required: false
  public get push() {
    return this.getBooleanAttribute('push');
  }

  // recovery_period - computed: true, optional: false, required: false
  public get recoveryPeriod() {
    return this.getNumberAttribute('recovery_period');
  }

  // resolved_alert_id_field - computed: true, optional: false, required: false
  private _resolvedAlertIdField = new DataBetteruptimeIncomingWebhookResolvedAlertIdFieldList(this, "resolved_alert_id_field", false);
  public get resolvedAlertIdField() {
    return this._resolvedAlertIdField;
  }

  // resolved_rule_type - computed: true, optional: false, required: false
  public get resolvedRuleType() {
    return this.getStringAttribute('resolved_rule_type');
  }

  // resolved_rules - computed: true, optional: false, required: false
  private _resolvedRules = new DataBetteruptimeIncomingWebhookResolvedRulesList(this, "resolved_rules", false);
  public get resolvedRules() {
    return this._resolvedRules;
  }

  // sample_body - computed: true, optional: false, required: false
  public get sampleBody() {
    return this.getStringAttribute('sample_body');
  }

  // sample_headers - computed: true, optional: false, required: false
  public get sampleHeaders() {
    return this.getStringAttribute('sample_headers');
  }

  // sample_query_string - computed: true, optional: false, required: false
  public get sampleQueryString() {
    return this.getStringAttribute('sample_query_string');
  }

  // sms - computed: true, optional: false, required: false
  public get sms() {
    return this.getBooleanAttribute('sms');
  }

  // started_alert_id_field - computed: true, optional: false, required: false
  private _startedAlertIdField = new DataBetteruptimeIncomingWebhookStartedAlertIdFieldList(this, "started_alert_id_field", false);
  public get startedAlertIdField() {
    return this._startedAlertIdField;
  }

  // started_rule_type - computed: true, optional: false, required: false
  public get startedRuleType() {
    return this.getStringAttribute('started_rule_type');
  }

  // started_rules - computed: true, optional: false, required: false
  private _startedRules = new DataBetteruptimeIncomingWebhookStartedRulesList(this, "started_rules", false);
  public get startedRules() {
    return this._startedRules;
  }

  // team_wait - computed: true, optional: false, required: false
  public get teamWait() {
    return this.getNumberAttribute('team_wait');
  }

  // title_field - computed: true, optional: false, required: false
  private _titleField = new DataBetteruptimeIncomingWebhookTitleFieldList(this, "title_field", false);
  public get titleField() {
    return this._titleField;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
