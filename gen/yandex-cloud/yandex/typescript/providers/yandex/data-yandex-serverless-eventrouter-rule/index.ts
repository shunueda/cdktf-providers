// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexServerlessEventrouterRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule#id DataYandexServerlessEventrouterRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule#name DataYandexServerlessEventrouterRule#name}
  */
  readonly name?: string;
  /**
  * ID of the bus that the rule belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule#rule_id DataYandexServerlessEventrouterRule#rule_id}
  */
  readonly ruleId?: string;
}
export interface DataYandexServerlessEventrouterRuleContainer {
}

export function dataYandexServerlessEventrouterRuleContainerToTerraform(struct?: DataYandexServerlessEventrouterRuleContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleContainerToHclTerraform(struct?: DataYandexServerlessEventrouterRuleContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_settings - computed: true, optional: false, required: false
  public get batchSettings() {
    return this.getStringAttribute('batch_settings');
  }

  // container_id - computed: true, optional: false, required: false
  public get containerId() {
    return this.getStringAttribute('container_id');
  }

  // container_revision_id - computed: true, optional: false, required: false
  public get containerRevisionId() {
    return this.getStringAttribute('container_revision_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexServerlessEventrouterRuleContainerList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleContainerOutputReference {
    return new DataYandexServerlessEventrouterRuleContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleFunctionBatchSettings {
}

export function dataYandexServerlessEventrouterRuleFunctionBatchSettingsToTerraform(struct?: DataYandexServerlessEventrouterRuleFunctionBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleFunctionBatchSettingsToHclTerraform(struct?: DataYandexServerlessEventrouterRuleFunctionBatchSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleFunctionBatchSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleFunctionBatchSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleFunctionBatchSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cutoff - computed: true, optional: false, required: false
  public get cutoff() {
    return this.getStringAttribute('cutoff');
  }

  // max_bytes - computed: true, optional: false, required: false
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
}

export class DataYandexServerlessEventrouterRuleFunctionBatchSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleFunctionBatchSettingsOutputReference {
    return new DataYandexServerlessEventrouterRuleFunctionBatchSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleFunction {
}

export function dataYandexServerlessEventrouterRuleFunctionToTerraform(struct?: DataYandexServerlessEventrouterRuleFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleFunctionToHclTerraform(struct?: DataYandexServerlessEventrouterRuleFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_settings - computed: true, optional: false, required: false
  private _batchSettings = new DataYandexServerlessEventrouterRuleFunctionBatchSettingsList(this, "batch_settings", false);
  public get batchSettings() {
    return this._batchSettings;
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_tag - computed: true, optional: false, required: false
  public get functionTag() {
    return this.getStringAttribute('function_tag');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexServerlessEventrouterRuleFunctionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleFunctionOutputReference {
    return new DataYandexServerlessEventrouterRuleFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcast {
}

export function dataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastToTerraform(struct?: DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastToHclTerraform(struct?: DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_settings - computed: true, optional: false, required: false
  public get batchSettings() {
    return this.getStringAttribute('batch_settings');
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastOutputReference {
    return new DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleLogging {
}

export function dataYandexServerlessEventrouterRuleLoggingToTerraform(struct?: DataYandexServerlessEventrouterRuleLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleLoggingToHclTerraform(struct?: DataYandexServerlessEventrouterRuleLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexServerlessEventrouterRuleLoggingList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleLoggingOutputReference {
    return new DataYandexServerlessEventrouterRuleLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleWorkflow {
}

export function dataYandexServerlessEventrouterRuleWorkflowToTerraform(struct?: DataYandexServerlessEventrouterRuleWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleWorkflowToHclTerraform(struct?: DataYandexServerlessEventrouterRuleWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_settings - computed: true, optional: false, required: false
  public get batchSettings() {
    return this.getStringAttribute('batch_settings');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // workflow_id - computed: true, optional: false, required: false
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
}

export class DataYandexServerlessEventrouterRuleWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleWorkflowOutputReference {
    return new DataYandexServerlessEventrouterRuleWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleYds {
}

export function dataYandexServerlessEventrouterRuleYdsToTerraform(struct?: DataYandexServerlessEventrouterRuleYds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleYdsToHclTerraform(struct?: DataYandexServerlessEventrouterRuleYds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleYdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleYds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleYds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataYandexServerlessEventrouterRuleYdsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleYdsOutputReference {
    return new DataYandexServerlessEventrouterRuleYdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexServerlessEventrouterRuleYmq {
}

export function dataYandexServerlessEventrouterRuleYmqToTerraform(struct?: DataYandexServerlessEventrouterRuleYmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexServerlessEventrouterRuleYmqToHclTerraform(struct?: DataYandexServerlessEventrouterRuleYmq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexServerlessEventrouterRuleYmqOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexServerlessEventrouterRuleYmq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexServerlessEventrouterRuleYmq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queue_arn - computed: true, optional: false, required: false
  public get queueArn() {
    return this.getStringAttribute('queue_arn');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexServerlessEventrouterRuleYmqList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexServerlessEventrouterRuleYmqOutputReference {
    return new DataYandexServerlessEventrouterRuleYmqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule yandex_serverless_eventrouter_rule}
*/
export class DataYandexServerlessEventrouterRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_serverless_eventrouter_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexServerlessEventrouterRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexServerlessEventrouterRule to import
  * @param importFromId The id of the existing DataYandexServerlessEventrouterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexServerlessEventrouterRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_serverless_eventrouter_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/serverless_eventrouter_rule yandex_serverless_eventrouter_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexServerlessEventrouterRuleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexServerlessEventrouterRuleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_serverless_eventrouter_rule',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bus_id - computed: true, optional: false, required: false
  public get busId() {
    return this.getStringAttribute('bus_id');
  }

  // cloud_id - computed: true, optional: false, required: false
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }

  // container - computed: true, optional: false, required: false
  private _container = new DataYandexServerlessEventrouterRuleContainerList(this, "container", false);
  public get container() {
    return this._container;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // function - computed: true, optional: false, required: false
  private _function = new DataYandexServerlessEventrouterRuleFunctionList(this, "function", false);
  public get function() {
    return this._function;
  }

  // gateway_websocket_broadcast - computed: true, optional: false, required: false
  private _gatewayWebsocketBroadcast = new DataYandexServerlessEventrouterRuleGatewayWebsocketBroadcastList(this, "gateway_websocket_broadcast", false);
  public get gatewayWebsocketBroadcast() {
    return this._gatewayWebsocketBroadcast;
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

  // jq_filter - computed: true, optional: false, required: false
  public get jqFilter() {
    return this.getStringAttribute('jq_filter');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // logging - computed: true, optional: false, required: false
  private _logging = new DataYandexServerlessEventrouterRuleLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rule_id - computed: false, optional: true, required: false
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  public resetRuleId() {
    this._ruleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // workflow - computed: true, optional: false, required: false
  private _workflow = new DataYandexServerlessEventrouterRuleWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }

  // yds - computed: true, optional: false, required: false
  private _yds = new DataYandexServerlessEventrouterRuleYdsList(this, "yds", false);
  public get yds() {
    return this._yds;
  }

  // ymq - computed: true, optional: false, required: false
  private _ymq = new DataYandexServerlessEventrouterRuleYmqList(this, "ymq", false);
  public get ymq() {
    return this._ymq;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule_id: cdktf.stringToTerraform(this._ruleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
