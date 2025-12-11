// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementRunbooksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}
  */
  readonly type?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#filter DataOciFleetAppsManagementRunbooks#filter}
  */
  readonly filter?: DataOciFleetAppsManagementRunbooksFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowSteps {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getListAttribute('steps');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflow {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // workflow - computed: true, optional: false, required: false
  private _workflow = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferences {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // should_notify_on_pause - computed: true, optional: false, required: false
  public get shouldNotifyOnPause() {
    return this.getBooleanAttribute('should_notify_on_pause');
  }

  // should_notify_on_task_failure - computed: true, optional: false, required: false
  public get shouldNotifyOnTaskFailure() {
    return this.getBooleanAttribute('should_notify_on_task_failure');
  }

  // should_notify_on_task_success - computed: true, optional: false, required: false
  public get shouldNotifyOnTaskSuccess() {
    return this.getBooleanAttribute('should_notify_on_task_success');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_name - computed: true, optional: false, required: false
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_details - computed: true, optional: false, required: false
  private _outputVariableDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList(this, "output_variable_details", false);
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOn {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // previous_task_instance_details - computed: true, optional: false, required: false
  private _previousTaskInstanceDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnPreviousTaskInstanceDetailsList(this, "previous_task_instance_details", false);
  public get previousTaskInstanceDetails() {
    return this._previousTaskInstanceDetails;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsProperties {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_failure - computed: true, optional: false, required: false
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }

  // notification_preferences - computed: true, optional: false, required: false
  private _notificationPreferences = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesNotificationPreferencesList(this, "notification_preferences", false);
  public get notificationPreferences() {
    return this._notificationPreferences;
  }

  // pause_details - computed: true, optional: false, required: false
  private _pauseDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesPauseDetailsList(this, "pause_details", false);
  public get pauseDetails() {
    return this._pauseDetails;
  }

  // pre_condition - computed: true, optional: false, required: false
  public get preCondition() {
    return this.getStringAttribute('pre_condition');
  }

  // run_on - computed: true, optional: false, required: false
  private _runOn = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesRunOnList(this, "run_on", false);
  public get runOn() {
    return this._runOn;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroups {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroups | undefined) {
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

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowSteps {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // steps - computed: true, optional: false, required: false
  public get steps() {
    return this.getListAttribute('steps');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflow {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // workflow - computed: true, optional: false, required: false
  private _workflow = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsWorkflowList(this, "workflow", false);
  public get workflow() {
    return this._workflow;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_name - computed: true, optional: false, required: false
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappings {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappings | undefined) {
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

  // output_variable_details - computed: true, optional: false, required: false
  private _outputVariableDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputVariableDetailsList(this, "output_variable_details", false);
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferences {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // should_notify_on_pause - computed: true, optional: false, required: false
  public get shouldNotifyOnPause() {
    return this.getBooleanAttribute('should_notify_on_pause');
  }

  // should_notify_on_task_failure - computed: true, optional: false, required: false
  public get shouldNotifyOnTaskFailure() {
    return this.getBooleanAttribute('should_notify_on_task_failure');
  }

  // should_notify_on_task_success - computed: true, optional: false, required: false
  public get shouldNotifyOnTaskSuccess() {
    return this.getBooleanAttribute('should_notify_on_task_success');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_minutes - computed: true, optional: false, required: false
  public get durationInMinutes() {
    return this.getNumberAttribute('duration_in_minutes');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_name - computed: true, optional: false, required: false
  public get outputVariableName() {
    return this.getStringAttribute('output_variable_name');
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_details - computed: true, optional: false, required: false
  private _outputVariableDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputVariableDetailsList(this, "output_variable_details", false);
  public get outputVariableDetails() {
    return this._outputVariableDetails;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOn {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // previous_task_instance_details - computed: true, optional: false, required: false
  private _previousTaskInstanceDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnPreviousTaskInstanceDetailsList(this, "previous_task_instance_details", false);
  public get previousTaskInstanceDetails() {
    return this._previousTaskInstanceDetails;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepProperties {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_on_failure - computed: true, optional: false, required: false
  public get actionOnFailure() {
    return this.getStringAttribute('action_on_failure');
  }

  // notification_preferences - computed: true, optional: false, required: false
  private _notificationPreferences = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesNotificationPreferencesList(this, "notification_preferences", false);
  public get notificationPreferences() {
    return this._notificationPreferences;
  }

  // pause_details - computed: true, optional: false, required: false
  private _pauseDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesPauseDetailsList(this, "pause_details", false);
  public get pauseDetails() {
    return this._pauseDetails;
  }

  // pre_condition - computed: true, optional: false, required: false
  public get preCondition() {
    return this.getStringAttribute('pre_condition');
  }

  // run_on - computed: true, optional: false, required: false
  private _runOn = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesRunOnList(this, "run_on", false);
  public get runOn() {
    return this._runOn;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_variables - computed: true, optional: false, required: false
  private _inputVariables = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(this, "input_variables", false);
  public get inputVariables() {
    return this._inputVariables;
  }

  // output_variables - computed: true, optional: false, required: false
  public get outputVariables() {
    return this.getListAttribute('output_variables');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // config_file - computed: true, optional: false, required: false
  public get configFile() {
    return this.getStringAttribute('config_file');
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // execution_type - computed: true, optional: false, required: false
  public get executionType() {
    return this.getStringAttribute('execution_type');
  }

  // is_executable_content - computed: true, optional: false, required: false
  public get isExecutableContent() {
    return this.getBooleanAttribute('is_executable_content');
  }

  // is_locked - computed: true, optional: false, required: false
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }

  // is_read_output_variable_enabled - computed: true, optional: false, required: false
  public get isReadOutputVariableEnabled() {
    return this.getBooleanAttribute('is_read_output_variable_enabled');
  }

  // system_variables - computed: true, optional: false, required: false
  public get systemVariables() {
    return this.getListAttribute('system_variables');
  }

  // target_compartment_id - computed: true, optional: false, required: false
  public get targetCompartmentId() {
    return this.getStringAttribute('target_compartment_id');
  }

  // variables - computed: true, optional: false, required: false
  private _variables = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsProperties {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_retries - computed: true, optional: false, required: false
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetails {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execution_details - computed: true, optional: false, required: false
  private _executionDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsExecutionDetailsList(this, "execution_details", false);
  public get executionDetails() {
    return this._executionDetails;
  }

  // is_apply_subject_task - computed: true, optional: false, required: false
  public get isApplySubjectTask() {
    return this.getBooleanAttribute('is_apply_subject_task');
  }

  // is_copy_to_library_enabled - computed: true, optional: false, required: false
  public get isCopyToLibraryEnabled() {
    return this.getBooleanAttribute('is_copy_to_library_enabled');
  }

  // is_discovery_output_task - computed: true, optional: false, required: false
  public get isDiscoveryOutputTask() {
    return this.getBooleanAttribute('is_discovery_output_task');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // task_record_id - computed: true, optional: false, required: false
  public get taskRecordId() {
    return this.getStringAttribute('task_record_id');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasks {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output_variable_mappings - computed: true, optional: false, required: false
  private _outputVariableMappings = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputVariableMappingsList(this, "output_variable_mappings", false);
  public get outputVariableMappings() {
    return this._outputVariableMappings;
  }

  // step_name - computed: true, optional: false, required: false
  public get stepName() {
    return this.getStringAttribute('step_name');
  }

  // step_properties - computed: true, optional: false, required: false
  private _stepProperties = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksStepPropertiesList(this, "step_properties", false);
  public get stepProperties() {
    return this._stepProperties;
  }

  // task_record_details - computed: true, optional: false, required: false
  private _taskRecordDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksTaskRecordDetailsList(this, "task_record_details", false);
  public get taskRecordDetails() {
    return this._taskRecordDetails;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersion {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_workflow_details - computed: true, optional: false, required: false
  private _executionWorkflowDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionExecutionWorkflowDetailsList(this, "execution_workflow_details", false);
  public get executionWorkflowDetails() {
    return this._executionWorkflowDetails;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // is_latest - computed: true, optional: false, required: false
  public get isLatest() {
    return this.getBooleanAttribute('is_latest');
  }

  // rollback_workflow_details - computed: true, optional: false, required: false
  private _rollbackWorkflowDetails = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionRollbackWorkflowDetailsList(this, "rollback_workflow_details", false);
  public get rollbackWorkflowDetails() {
    return this._rollbackWorkflowDetails;
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionTasksList(this, "tasks", false);
  public get tasks() {
    return this._tasks;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollectionItems {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // estimated_time - computed: true, optional: false, required: false
  public get estimatedTime() {
    return this.getStringAttribute('estimated_time');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // has_draft_version - computed: true, optional: false, required: false
  public get hasDraftVersion() {
    return this.getBooleanAttribute('has_draft_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // is_sudo_access_needed - computed: true, optional: false, required: false
  public get isSudoAccessNeeded() {
    return this.getBooleanAttribute('is_sudo_access_needed');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // os_type - computed: true, optional: false, required: false
  public get osType() {
    return this.getStringAttribute('os_type');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // resource_region - computed: true, optional: false, required: false
  public get resourceRegion() {
    return this.getStringAttribute('resource_region');
  }

  // runbook_version - computed: true, optional: false, required: false
  private _runbookVersion = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsRunbookVersionList(this, "runbook_version", false);
  public get runbookVersion() {
    return this._runbookVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksRunbookCollection {
}

export function dataOciFleetAppsManagementRunbooksRunbookCollectionToTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementRunbooksRunbookCollectionToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksRunbookCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksRunbookCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksRunbookCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementRunbooksRunbookCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference {
    return new DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementRunbooksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#name DataOciFleetAppsManagementRunbooks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#regex DataOciFleetAppsManagementRunbooks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#values DataOciFleetAppsManagementRunbooks#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementRunbooksFilterToTerraform(struct?: DataOciFleetAppsManagementRunbooksFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciFleetAppsManagementRunbooksFilterToHclTerraform(struct?: DataOciFleetAppsManagementRunbooksFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DataOciFleetAppsManagementRunbooksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementRunbooksFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementRunbooksFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciFleetAppsManagementRunbooksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementRunbooksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementRunbooksFilterOutputReference {
    return new DataOciFleetAppsManagementRunbooksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks oci_fleet_apps_management_runbooks}
*/
export class DataOciFleetAppsManagementRunbooks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_runbooks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementRunbooks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementRunbooks to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementRunbooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementRunbooks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_runbooks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_runbooks oci_fleet_apps_management_runbooks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementRunbooksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementRunbooksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_runbooks',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._operation = config.operation;
    this._platform = config.platform;
    this._state = config.state;
    this._type = config.type;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // runbook_collection - computed: true, optional: false, required: false
  private _runbookCollection = new DataOciFleetAppsManagementRunbooksRunbookCollectionList(this, "runbook_collection", false);
  public get runbookCollection() {
    return this._runbookCollection;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementRunbooksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementRunbooksFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      operation: cdktf.stringToTerraform(this._operation),
      platform: cdktf.stringToTerraform(this._platform),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      filter: cdktf.listMapper(dataOciFleetAppsManagementRunbooksFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementRunbooksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementRunbooksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
