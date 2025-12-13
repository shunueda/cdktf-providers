// https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPrefectAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID (UUID), defaults to the account set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation#account_id DataPrefectAutomation#account_id}
  */
  readonly accountId?: string;
  /**
  * Automation ID (UUID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation#id DataPrefectAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Workspace ID (UUID), defaults to the workspace set in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation#workspace_id DataPrefectAutomation#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataPrefectAutomationActions {
}

export function dataPrefectAutomationActionsToTerraform(struct?: DataPrefectAutomationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationActionsToHclTerraform(struct?: DataPrefectAutomationActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectAutomationActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automation_id - computed: true, optional: false, required: false
  public get automationId() {
    return this.getStringAttribute('automation_id');
  }

  // block_document_id - computed: true, optional: false, required: false
  public get blockDocumentId() {
    return this.getStringAttribute('block_document_id');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // job_variables - computed: true, optional: false, required: false
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_pool_id - computed: true, optional: false, required: false
  public get workPoolId() {
    return this.getStringAttribute('work_pool_id');
  }

  // work_queue_id - computed: true, optional: false, required: false
  public get workQueueId() {
    return this.getStringAttribute('work_queue_id');
  }
}

export class DataPrefectAutomationActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPrefectAutomationActionsOutputReference {
    return new DataPrefectAutomationActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrefectAutomationActionsOnResolve {
}

export function dataPrefectAutomationActionsOnResolveToTerraform(struct?: DataPrefectAutomationActionsOnResolve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationActionsOnResolveToHclTerraform(struct?: DataPrefectAutomationActionsOnResolve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationActionsOnResolveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectAutomationActionsOnResolve | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationActionsOnResolve | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automation_id - computed: true, optional: false, required: false
  public get automationId() {
    return this.getStringAttribute('automation_id');
  }

  // block_document_id - computed: true, optional: false, required: false
  public get blockDocumentId() {
    return this.getStringAttribute('block_document_id');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // job_variables - computed: true, optional: false, required: false
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_pool_id - computed: true, optional: false, required: false
  public get workPoolId() {
    return this.getStringAttribute('work_pool_id');
  }

  // work_queue_id - computed: true, optional: false, required: false
  public get workQueueId() {
    return this.getStringAttribute('work_queue_id');
  }
}

export class DataPrefectAutomationActionsOnResolveList extends cdktf.ComplexList {

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
  public get(index: number): DataPrefectAutomationActionsOnResolveOutputReference {
    return new DataPrefectAutomationActionsOnResolveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrefectAutomationActionsOnTrigger {
}

export function dataPrefectAutomationActionsOnTriggerToTerraform(struct?: DataPrefectAutomationActionsOnTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationActionsOnTriggerToHclTerraform(struct?: DataPrefectAutomationActionsOnTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationActionsOnTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectAutomationActionsOnTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationActionsOnTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automation_id - computed: true, optional: false, required: false
  public get automationId() {
    return this.getStringAttribute('automation_id');
  }

  // block_document_id - computed: true, optional: false, required: false
  public get blockDocumentId() {
    return this.getStringAttribute('block_document_id');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // job_variables - computed: true, optional: false, required: false
  public get jobVariables() {
    return this.getStringAttribute('job_variables');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parameters - computed: true, optional: false, required: false
  public get parameters() {
    return this.getStringAttribute('parameters');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getStringAttribute('payload');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_pool_id - computed: true, optional: false, required: false
  public get workPoolId() {
    return this.getStringAttribute('work_pool_id');
  }

  // work_queue_id - computed: true, optional: false, required: false
  public get workQueueId() {
    return this.getStringAttribute('work_queue_id');
  }
}

export class DataPrefectAutomationActionsOnTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataPrefectAutomationActionsOnTriggerOutputReference {
    return new DataPrefectAutomationActionsOnTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrefectAutomationTriggerCompoundTriggersEvent {
}

export function dataPrefectAutomationTriggerCompoundTriggersEventToTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggersEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerCompoundTriggersEventToHclTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggersEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerCompoundTriggersEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerCompoundTriggersEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerCompoundTriggersEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after - computed: true, optional: false, required: false
  public get after() {
    return this.getListAttribute('after');
  }

  // expect - computed: true, optional: false, required: false
  public get expect() {
    return this.getListAttribute('expect');
  }

  // for_each - computed: true, optional: false, required: false
  public get forEach() {
    return this.getListAttribute('for_each');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // match_related - computed: true, optional: false, required: false
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }

  // posture - computed: true, optional: false, required: false
  public get posture() {
    return this.getStringAttribute('posture');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // within - computed: true, optional: false, required: false
  public get within() {
    return this.getNumberAttribute('within');
  }
}
export interface DataPrefectAutomationTriggerCompoundTriggersMetricMetric {
}

export function dataPrefectAutomationTriggerCompoundTriggersMetricMetricToTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggersMetricMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerCompoundTriggersMetricMetricToHclTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggersMetricMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerCompoundTriggersMetricMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerCompoundTriggersMetricMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerCompoundTriggersMetricMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firing_for - computed: true, optional: false, required: false
  public get firingFor() {
    return this.getNumberAttribute('firing_for');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getNumberAttribute('range');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataPrefectAutomationTriggerCompoundTriggersMetric {
}

export function dataPrefectAutomationTriggerCompoundTriggersMetricToTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggersMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerCompoundTriggersMetricToHclTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggersMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerCompoundTriggersMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerCompoundTriggersMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerCompoundTriggersMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // match_related - computed: true, optional: false, required: false
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataPrefectAutomationTriggerCompoundTriggersMetricMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
}
export interface DataPrefectAutomationTriggerCompoundTriggers {
}

export function dataPrefectAutomationTriggerCompoundTriggersToTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerCompoundTriggersToHclTerraform(struct?: DataPrefectAutomationTriggerCompoundTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerCompoundTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectAutomationTriggerCompoundTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerCompoundTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  private _event = new DataPrefectAutomationTriggerCompoundTriggersEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataPrefectAutomationTriggerCompoundTriggersMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
}

export class DataPrefectAutomationTriggerCompoundTriggersList extends cdktf.ComplexList {

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
  public get(index: number): DataPrefectAutomationTriggerCompoundTriggersOutputReference {
    return new DataPrefectAutomationTriggerCompoundTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrefectAutomationTriggerCompound {
}

export function dataPrefectAutomationTriggerCompoundToTerraform(struct?: DataPrefectAutomationTriggerCompound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerCompoundToHclTerraform(struct?: DataPrefectAutomationTriggerCompound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerCompoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerCompound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerCompound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require - computed: true, optional: false, required: false
  private _require = new cdktf.AnyMap(this, "require");
  public get require() {
    return this._require;
  }

  // triggers - computed: true, optional: false, required: false
  private _triggers = new DataPrefectAutomationTriggerCompoundTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }

  // within - computed: true, optional: false, required: false
  public get within() {
    return this.getNumberAttribute('within');
  }
}
export interface DataPrefectAutomationTriggerEvent {
}

export function dataPrefectAutomationTriggerEventToTerraform(struct?: DataPrefectAutomationTriggerEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerEventToHclTerraform(struct?: DataPrefectAutomationTriggerEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after - computed: true, optional: false, required: false
  public get after() {
    return this.getListAttribute('after');
  }

  // expect - computed: true, optional: false, required: false
  public get expect() {
    return this.getListAttribute('expect');
  }

  // for_each - computed: true, optional: false, required: false
  public get forEach() {
    return this.getListAttribute('for_each');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // match_related - computed: true, optional: false, required: false
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }

  // posture - computed: true, optional: false, required: false
  public get posture() {
    return this.getStringAttribute('posture');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // within - computed: true, optional: false, required: false
  public get within() {
    return this.getNumberAttribute('within');
  }
}
export interface DataPrefectAutomationTriggerMetricMetric {
}

export function dataPrefectAutomationTriggerMetricMetricToTerraform(struct?: DataPrefectAutomationTriggerMetricMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerMetricMetricToHclTerraform(struct?: DataPrefectAutomationTriggerMetricMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerMetricMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerMetricMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerMetricMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firing_for - computed: true, optional: false, required: false
  public get firingFor() {
    return this.getNumberAttribute('firing_for');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getNumberAttribute('range');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataPrefectAutomationTriggerMetric {
}

export function dataPrefectAutomationTriggerMetricToTerraform(struct?: DataPrefectAutomationTriggerMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerMetricToHclTerraform(struct?: DataPrefectAutomationTriggerMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // match_related - computed: true, optional: false, required: false
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataPrefectAutomationTriggerMetricMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
}
export interface DataPrefectAutomationTriggerSequenceTriggersEvent {
}

export function dataPrefectAutomationTriggerSequenceTriggersEventToTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggersEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerSequenceTriggersEventToHclTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggersEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerSequenceTriggersEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerSequenceTriggersEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerSequenceTriggersEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // after - computed: true, optional: false, required: false
  public get after() {
    return this.getListAttribute('after');
  }

  // expect - computed: true, optional: false, required: false
  public get expect() {
    return this.getListAttribute('expect');
  }

  // for_each - computed: true, optional: false, required: false
  public get forEach() {
    return this.getListAttribute('for_each');
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // match_related - computed: true, optional: false, required: false
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }

  // posture - computed: true, optional: false, required: false
  public get posture() {
    return this.getStringAttribute('posture');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // within - computed: true, optional: false, required: false
  public get within() {
    return this.getNumberAttribute('within');
  }
}
export interface DataPrefectAutomationTriggerSequenceTriggersMetricMetric {
}

export function dataPrefectAutomationTriggerSequenceTriggersMetricMetricToTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggersMetricMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerSequenceTriggersMetricMetricToHclTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggersMetricMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerSequenceTriggersMetricMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerSequenceTriggersMetricMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerSequenceTriggersMetricMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // firing_for - computed: true, optional: false, required: false
  public get firingFor() {
    return this.getNumberAttribute('firing_for');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // range - computed: true, optional: false, required: false
  public get range() {
    return this.getNumberAttribute('range');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataPrefectAutomationTriggerSequenceTriggersMetric {
}

export function dataPrefectAutomationTriggerSequenceTriggersMetricToTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggersMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerSequenceTriggersMetricToHclTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggersMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerSequenceTriggersMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerSequenceTriggersMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerSequenceTriggersMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match - computed: true, optional: false, required: false
  public get match() {
    return this.getStringAttribute('match');
  }

  // match_related - computed: true, optional: false, required: false
  public get matchRelated() {
    return this.getStringAttribute('match_related');
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataPrefectAutomationTriggerSequenceTriggersMetricMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
}
export interface DataPrefectAutomationTriggerSequenceTriggers {
}

export function dataPrefectAutomationTriggerSequenceTriggersToTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerSequenceTriggersToHclTerraform(struct?: DataPrefectAutomationTriggerSequenceTriggers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerSequenceTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPrefectAutomationTriggerSequenceTriggers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerSequenceTriggers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  private _event = new DataPrefectAutomationTriggerSequenceTriggersEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataPrefectAutomationTriggerSequenceTriggersMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
}

export class DataPrefectAutomationTriggerSequenceTriggersList extends cdktf.ComplexList {

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
  public get(index: number): DataPrefectAutomationTriggerSequenceTriggersOutputReference {
    return new DataPrefectAutomationTriggerSequenceTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPrefectAutomationTriggerSequence {
}

export function dataPrefectAutomationTriggerSequenceToTerraform(struct?: DataPrefectAutomationTriggerSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerSequenceToHclTerraform(struct?: DataPrefectAutomationTriggerSequence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerSequenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTriggerSequence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTriggerSequence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // triggers - computed: true, optional: false, required: false
  private _triggers = new DataPrefectAutomationTriggerSequenceTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }

  // within - computed: true, optional: false, required: false
  public get within() {
    return this.getNumberAttribute('within');
  }
}
export interface DataPrefectAutomationTrigger {
}

export function dataPrefectAutomationTriggerToTerraform(struct?: DataPrefectAutomationTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPrefectAutomationTriggerToHclTerraform(struct?: DataPrefectAutomationTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPrefectAutomationTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPrefectAutomationTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPrefectAutomationTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compound - computed: true, optional: false, required: false
  private _compound = new DataPrefectAutomationTriggerCompoundOutputReference(this, "compound");
  public get compound() {
    return this._compound;
  }

  // event - computed: true, optional: false, required: false
  private _event = new DataPrefectAutomationTriggerEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataPrefectAutomationTriggerMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // sequence - computed: true, optional: false, required: false
  private _sequence = new DataPrefectAutomationTriggerSequenceOutputReference(this, "sequence");
  public get sequence() {
    return this._sequence;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation prefect_automation}
*/
export class DataPrefectAutomation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prefect_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPrefectAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPrefectAutomation to import
  * @param importFromId The id of the existing DataPrefectAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPrefectAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prefect_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prefecthq/prefect/2.91.0/docs/data-sources/automation prefect_automation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPrefectAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: DataPrefectAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'prefect_automation',
      terraformGeneratorMetadata: {
        providerName: 'prefect',
        providerVersion: '2.91.0',
        providerVersionConstraint: '2.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._id = config.id;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataPrefectAutomationActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // actions_on_resolve - computed: true, optional: false, required: false
  private _actionsOnResolve = new DataPrefectAutomationActionsOnResolveList(this, "actions_on_resolve", false);
  public get actionsOnResolve() {
    return this._actionsOnResolve;
  }

  // actions_on_trigger - computed: true, optional: false, required: false
  private _actionsOnTrigger = new DataPrefectAutomationActionsOnTriggerList(this, "actions_on_trigger", false);
  public get actionsOnTrigger() {
    return this._actionsOnTrigger;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // trigger - computed: true, optional: false, required: false
  private _trigger = new DataPrefectAutomationTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
