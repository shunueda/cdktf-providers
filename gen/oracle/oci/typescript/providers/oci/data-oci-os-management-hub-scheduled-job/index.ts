// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_scheduled_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOsManagementHubScheduledJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_scheduled_job#scheduled_job_id DataOciOsManagementHubScheduledJob#scheduled_job_id}
  */
  readonly scheduledJobId: string;
}
export interface DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable {
}

export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableToTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // software_source_id - computed: true, optional: false, required: false
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable {
}

export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableToTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // software_source_id - computed: true, optional: false, required: false
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall {
}

export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallToTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // software_source_id - computed: true, optional: false, required: false
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove {
}

export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveToTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemove | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // software_source_id - computed: true, optional: false, required: false
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails {
}

export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsToTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable - computed: true, optional: false, required: false
  private _disable = new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsDisableList(this, "disable", false);
  public get disable() {
    return this._disable;
  }

  // enable - computed: true, optional: false, required: false
  private _enable = new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsEnableList(this, "enable", false);
  public get enable() {
    return this._enable;
  }

  // install - computed: true, optional: false, required: false
  private _install = new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsInstallList(this, "install", false);
  public get install() {
    return this._install;
  }

  // remove - computed: true, optional: false, required: false
  private _remove = new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsRemoveList(this, "remove", false);
  public get remove() {
    return this._remove;
  }
}

export class DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails {
}

export function dataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsToTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // module_name - computed: true, optional: false, required: false
  public get moduleName() {
    return this.getStringAttribute('module_name');
  }

  // software_source_id - computed: true, optional: false, required: false
  public get softwareSourceId() {
    return this.getStringAttribute('software_source_id');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
}

export class DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOsManagementHubScheduledJobOperations {
}

export function dataOciOsManagementHubScheduledJobOperationsToTerraform(struct?: DataOciOsManagementHubScheduledJobOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOsManagementHubScheduledJobOperationsToHclTerraform(struct?: DataOciOsManagementHubScheduledJobOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOsManagementHubScheduledJobOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOsManagementHubScheduledJobOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOsManagementHubScheduledJobOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manage_module_streams_details - computed: true, optional: false, required: false
  private _manageModuleStreamsDetails = new DataOciOsManagementHubScheduledJobOperationsManageModuleStreamsDetailsList(this, "manage_module_streams_details", false);
  public get manageModuleStreamsDetails() {
    return this._manageModuleStreamsDetails;
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // package_names - computed: true, optional: false, required: false
  public get packageNames() {
    return this.getListAttribute('package_names');
  }

  // reboot_timeout_in_mins - computed: true, optional: false, required: false
  public get rebootTimeoutInMins() {
    return this.getNumberAttribute('reboot_timeout_in_mins');
  }

  // software_source_ids - computed: true, optional: false, required: false
  public get softwareSourceIds() {
    return this.getListAttribute('software_source_ids');
  }

  // switch_module_streams_details - computed: true, optional: false, required: false
  private _switchModuleStreamsDetails = new DataOciOsManagementHubScheduledJobOperationsSwitchModuleStreamsDetailsList(this, "switch_module_streams_details", false);
  public get switchModuleStreamsDetails() {
    return this._switchModuleStreamsDetails;
  }

  // windows_update_names - computed: true, optional: false, required: false
  public get windowsUpdateNames() {
    return this.getListAttribute('windows_update_names');
  }
}

export class DataOciOsManagementHubScheduledJobOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOsManagementHubScheduledJobOperationsOutputReference {
    return new DataOciOsManagementHubScheduledJobOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job}
*/
export class DataOciOsManagementHubScheduledJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_os_management_hub_scheduled_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOsManagementHubScheduledJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOsManagementHubScheduledJob to import
  * @param importFromId The id of the existing DataOciOsManagementHubScheduledJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_scheduled_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOsManagementHubScheduledJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_os_management_hub_scheduled_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/os_management_hub_scheduled_job oci_os_management_hub_scheduled_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOsManagementHubScheduledJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOsManagementHubScheduledJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_os_management_hub_scheduled_job',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._scheduledJobId = config.scheduledJobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_managed_by_autonomous_linux - computed: true, optional: false, required: false
  public get isManagedByAutonomousLinux() {
    return this.getBooleanAttribute('is_managed_by_autonomous_linux');
  }

  // is_restricted - computed: true, optional: false, required: false
  public get isRestricted() {
    return this.getBooleanAttribute('is_restricted');
  }

  // is_subcompartment_included - computed: true, optional: false, required: false
  public get isSubcompartmentIncluded() {
    return this.getBooleanAttribute('is_subcompartment_included');
  }

  // lifecycle_stage_ids - computed: true, optional: false, required: false
  public get lifecycleStageIds() {
    return this.getListAttribute('lifecycle_stage_ids');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }

  // managed_compartment_ids - computed: true, optional: false, required: false
  public get managedCompartmentIds() {
    return this.getListAttribute('managed_compartment_ids');
  }

  // managed_instance_group_ids - computed: true, optional: false, required: false
  public get managedInstanceGroupIds() {
    return this.getListAttribute('managed_instance_group_ids');
  }

  // managed_instance_ids - computed: true, optional: false, required: false
  public get managedInstanceIds() {
    return this.getListAttribute('managed_instance_ids');
  }

  // operations - computed: true, optional: false, required: false
  private _operations = new DataOciOsManagementHubScheduledJobOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }

  // recurring_rule - computed: true, optional: false, required: false
  public get recurringRule() {
    return this.getStringAttribute('recurring_rule');
  }

  // retry_intervals - computed: true, optional: false, required: false
  public get retryIntervals() {
    return this.getNumberListAttribute('retry_intervals');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }

  // scheduled_job_id - computed: false, optional: false, required: true
  private _scheduledJobId?: string; 
  public get scheduledJobId() {
    return this.getStringAttribute('scheduled_job_id');
  }
  public set scheduledJobId(value: string) {
    this._scheduledJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledJobIdInput() {
    return this._scheduledJobId;
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

  // time_last_execution - computed: true, optional: false, required: false
  public get timeLastExecution() {
    return this.getStringAttribute('time_last_execution');
  }

  // time_next_execution - computed: true, optional: false, required: false
  public get timeNextExecution() {
    return this.getStringAttribute('time_next_execution');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // work_request_ids - computed: true, optional: false, required: false
  public get workRequestIds() {
    return this.getListAttribute('work_request_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      scheduled_job_id: cdktf.stringToTerraform(this._scheduledJobId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      scheduled_job_id: {
        value: cdktf.stringToHclTerraform(this._scheduledJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
