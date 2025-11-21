// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsTaskSchedulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#fleet_id DataOciJmsTaskSchedules#fleet_id}
  */
  readonly fleetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#id DataOciJmsTaskSchedules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#managed_instance_id DataOciJmsTaskSchedules#managed_instance_id}
  */
  readonly managedInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#name DataOciJmsTaskSchedules#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#task_schedule_name_contains DataOciJmsTaskSchedules#task_schedule_name_contains}
  */
  readonly taskScheduleNameContains?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#filter DataOciJmsTaskSchedules#filter}
  */
  readonly filter?: DataOciJmsTaskSchedulesFilter[] | cdktf.IResolvable;
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSites {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_content_type - computed: true, optional: false, required: false
  public get artifactContentType() {
    return this.getStringAttribute('artifact_content_type');
  }

  // force_install - computed: true, optional: false, required: false
  public get forceInstall() {
    return this.getBooleanAttribute('force_install');
  }

  // headless_mode - computed: true, optional: false, required: false
  public get headlessMode() {
    return this.getBooleanAttribute('headless_mode');
  }

  // installation_path - computed: true, optional: false, required: false
  public get installationPath() {
    return this.getStringAttribute('installation_path');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // release_version - computed: true, optional: false, required: false
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // installation_sites - computed: true, optional: false, required: false
  private _installationSites = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList(this, "installation_sites", false);
  public get installationSites() {
    return this._installationSites;
  }

  // post_installation_actions - computed: true, optional: false, required: false
  public get postInstallationActions() {
    return this.getListAttribute('post_installation_actions');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargets {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_installation_key - computed: true, optional: false, required: false
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // container_key - computed: true, optional: false, required: false
  public get containerKey() {
    return this.getStringAttribute('container_key');
  }

  // jre_key - computed: true, optional: false, required: false
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recording_duration_in_minutes - computed: true, optional: false, required: false
  public get recordingDurationInMinutes() {
    return this.getNumberAttribute('recording_duration_in_minutes');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // waiting_period_in_minutes - computed: true, optional: false, required: false
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargets {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployed_application_installation_key - computed: true, optional: false, required: false
  public get deployedApplicationInstallationKey() {
    return this.getStringAttribute('deployed_application_installation_key');
  }

  // exclude_package_prefixes - computed: true, optional: false, required: false
  public get excludePackagePrefixes() {
    return this.getListAttribute('exclude_package_prefixes');
  }

  // include_package_prefixes - computed: true, optional: false, required: false
  public get includePackagePrefixes() {
    return this.getListAttribute('include_package_prefixes');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // source_jdk_version - computed: true, optional: false, required: false
  public get sourceJdkVersion() {
    return this.getStringAttribute('source_jdk_version');
  }

  // target_jdk_version - computed: true, optional: false, required: false
  public get targetJdkVersion() {
    return this.getStringAttribute('target_jdk_version');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargets {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_installation_key - computed: true, optional: false, required: false
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }

  // exclude_package_prefixes - computed: true, optional: false, required: false
  public get excludePackagePrefixes() {
    return this.getListAttribute('exclude_package_prefixes');
  }

  // include_package_prefixes - computed: true, optional: false, required: false
  public get includePackagePrefixes() {
    return this.getListAttribute('include_package_prefixes');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }

  // source_jdk_version - computed: true, optional: false, required: false
  public get sourceJdkVersion() {
    return this.getStringAttribute('source_jdk_version');
  }

  // target_jdk_version - computed: true, optional: false, required: false
  public get targetJdkVersion() {
    return this.getStringAttribute('target_jdk_version');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargets {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_installation_key - computed: true, optional: false, required: false
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // container_key - computed: true, optional: false, required: false
  public get containerKey() {
    return this.getStringAttribute('container_key');
  }

  // jre_key - computed: true, optional: false, required: false
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jfc_profile_name - computed: true, optional: false, required: false
  public get jfcProfileName() {
    return this.getStringAttribute('jfc_profile_name');
  }

  // jfc_v1 - computed: true, optional: false, required: false
  public get jfcV1() {
    return this.getStringAttribute('jfc_v1');
  }

  // jfc_v2 - computed: true, optional: false, required: false
  public get jfcV2() {
    return this.getStringAttribute('jfc_v2');
  }

  // recording_duration_in_minutes - computed: true, optional: false, required: false
  public get recordingDurationInMinutes() {
    return this.getNumberAttribute('recording_duration_in_minutes');
  }

  // recording_size_in_mb - computed: true, optional: false, required: false
  public get recordingSizeInMb() {
    return this.getNumberAttribute('recording_size_in_mb');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // waiting_period_in_minutes - computed: true, optional: false, required: false
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargets {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_installation_key - computed: true, optional: false, required: false
  public get applicationInstallationKey() {
    return this.getStringAttribute('application_installation_key');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // container_key - computed: true, optional: false, required: false
  public get containerKey() {
    return this.getStringAttribute('container_key');
  }

  // jre_key - computed: true, optional: false, required: false
  public get jreKey() {
    return this.getStringAttribute('jre_key');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recording_duration_in_minutes - computed: true, optional: false, required: false
  public get recordingDurationInMinutes() {
    return this.getNumberAttribute('recording_duration_in_minutes');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // waiting_period_in_minutes - computed: true, optional: false, required: false
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // installation_key - computed: true, optional: false, required: false
  public get installationKey() {
    return this.getStringAttribute('installation_key');
  }

  // managed_instance_id - computed: true, optional: false, required: false
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // installation_sites - computed: true, optional: false, required: false
  private _installationSites = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList(this, "installation_sites", false);
  public get installationSites() {
    return this._installationSites;
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_instance_ids - computed: true, optional: false, required: false
  public get managedInstanceIds() {
    return this.getListAttribute('managed_instance_ids');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequest {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dynamic_scan_duration_in_minutes - computed: true, optional: false, required: false
  public get dynamicScanDurationInMinutes() {
    return this.getNumberAttribute('dynamic_scan_duration_in_minutes');
  }

  // is_dynamic_scan - computed: true, optional: false, required: false
  public get isDynamicScan() {
    return this.getBooleanAttribute('is_dynamic_scan');
  }

  // managed_instance_ids - computed: true, optional: false, required: false
  public get managedInstanceIds() {
    return this.getListAttribute('managed_instance_ids');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetails {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_installation_site_task_request - computed: true, optional: false, required: false
  private _addInstallationSiteTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsAddInstallationSiteTaskRequestList(this, "add_installation_site_task_request", false);
  public get addInstallationSiteTaskRequest() {
    return this._addInstallationSiteTaskRequest;
  }

  // crypto_task_request - computed: true, optional: false, required: false
  private _cryptoTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsCryptoTaskRequestList(this, "crypto_task_request", false);
  public get cryptoTaskRequest() {
    return this._cryptoTaskRequest;
  }

  // deployed_application_migration_task_request - computed: true, optional: false, required: false
  private _deployedApplicationMigrationTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsDeployedApplicationMigrationTaskRequestList(this, "deployed_application_migration_task_request", false);
  public get deployedApplicationMigrationTaskRequest() {
    return this._deployedApplicationMigrationTaskRequest;
  }

  // java_migration_task_request - computed: true, optional: false, required: false
  private _javaMigrationTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJavaMigrationTaskRequestList(this, "java_migration_task_request", false);
  public get javaMigrationTaskRequest() {
    return this._javaMigrationTaskRequest;
  }

  // jfr_task_request - computed: true, optional: false, required: false
  private _jfrTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsJfrTaskRequestList(this, "jfr_task_request", false);
  public get jfrTaskRequest() {
    return this._jfrTaskRequest;
  }

  // performance_tuning_task_request - computed: true, optional: false, required: false
  private _performanceTuningTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsPerformanceTuningTaskRequestList(this, "performance_tuning_task_request", false);
  public get performanceTuningTaskRequest() {
    return this._performanceTuningTaskRequest;
  }

  // remove_installation_site_task_request - computed: true, optional: false, required: false
  private _removeInstallationSiteTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsRemoveInstallationSiteTaskRequestList(this, "remove_installation_site_task_request", false);
  public get removeInstallationSiteTaskRequest() {
    return this._removeInstallationSiteTaskRequest;
  }

  // scan_java_server_task_request - computed: true, optional: false, required: false
  private _scanJavaServerTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanJavaServerTaskRequestList(this, "scan_java_server_task_request", false);
  public get scanJavaServerTaskRequest() {
    return this._scanJavaServerTaskRequest;
  }

  // scan_library_task_request - computed: true, optional: false, required: false
  private _scanLibraryTaskRequest = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsScanLibraryTaskRequestList(this, "scan_library_task_request", false);
  public get scanLibraryTaskRequest() {
    return this._scanLibraryTaskRequest;
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollectionItems {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionItemsToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // execution_recurrences - computed: true, optional: false, required: false
  public get executionRecurrences() {
    return this.getStringAttribute('execution_recurrences');
  }

  // fleet_id - computed: true, optional: false, required: false
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_details - computed: true, optional: false, required: false
  private _taskDetails = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsTaskDetailsList(this, "task_details", false);
  public get taskDetails() {
    return this._taskDetails;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_run - computed: true, optional: false, required: false
  public get timeLastRun() {
    return this.getStringAttribute('time_last_run');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }

  // time_next_run - computed: true, optional: false, required: false
  public get timeNextRun() {
    return this.getStringAttribute('time_next_run');
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionItemsOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesTaskScheduleCollection {
}

export function dataOciJmsTaskSchedulesTaskScheduleCollectionToTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskSchedulesTaskScheduleCollectionToHclTerraform(struct?: DataOciJmsTaskSchedulesTaskScheduleCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesTaskScheduleCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskSchedulesTaskScheduleCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciJmsTaskSchedulesTaskScheduleCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciJmsTaskSchedulesTaskScheduleCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskSchedulesTaskScheduleCollectionOutputReference {
    return new DataOciJmsTaskSchedulesTaskScheduleCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskSchedulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#name DataOciJmsTaskSchedules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#regex DataOciJmsTaskSchedules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#values DataOciJmsTaskSchedules#values}
  */
  readonly values: string[];
}

export function dataOciJmsTaskSchedulesFilterToTerraform(struct?: DataOciJmsTaskSchedulesFilter | cdktf.IResolvable): any {
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


export function dataOciJmsTaskSchedulesFilterToHclTerraform(struct?: DataOciJmsTaskSchedulesFilter | cdktf.IResolvable): any {
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

export class DataOciJmsTaskSchedulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskSchedulesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciJmsTaskSchedulesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciJmsTaskSchedulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciJmsTaskSchedulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciJmsTaskSchedulesFilterOutputReference {
    return new DataOciJmsTaskSchedulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules oci_jms_task_schedules}
*/
export class DataOciJmsTaskSchedules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_task_schedules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsTaskSchedules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsTaskSchedules to import
  * @param importFromId The id of the existing DataOciJmsTaskSchedules that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsTaskSchedules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_task_schedules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_task_schedules oci_jms_task_schedules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsTaskSchedulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsTaskSchedulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_task_schedules',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fleetId = config.fleetId;
    this._id = config.id;
    this._managedInstanceId = config.managedInstanceId;
    this._name = config.name;
    this._taskScheduleNameContains = config.taskScheduleNameContains;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fleet_id - computed: false, optional: false, required: true
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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

  // managed_instance_id - computed: false, optional: true, required: false
  private _managedInstanceId?: string; 
  public get managedInstanceId() {
    return this.getStringAttribute('managed_instance_id');
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }
  public resetManagedInstanceId() {
    this._managedInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInstanceIdInput() {
    return this._managedInstanceId;
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

  // task_schedule_collection - computed: true, optional: false, required: false
  private _taskScheduleCollection = new DataOciJmsTaskSchedulesTaskScheduleCollectionList(this, "task_schedule_collection", false);
  public get taskScheduleCollection() {
    return this._taskScheduleCollection;
  }

  // task_schedule_name_contains - computed: false, optional: true, required: false
  private _taskScheduleNameContains?: string; 
  public get taskScheduleNameContains() {
    return this.getStringAttribute('task_schedule_name_contains');
  }
  public set taskScheduleNameContains(value: string) {
    this._taskScheduleNameContains = value;
  }
  public resetTaskScheduleNameContains() {
    this._taskScheduleNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskScheduleNameContainsInput() {
    return this._taskScheduleNameContains;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciJmsTaskSchedulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciJmsTaskSchedulesFilter[] | cdktf.IResolvable) {
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
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      id: cdktf.stringToTerraform(this._id),
      managed_instance_id: cdktf.stringToTerraform(this._managedInstanceId),
      name: cdktf.stringToTerraform(this._name),
      task_schedule_name_contains: cdktf.stringToTerraform(this._taskScheduleNameContains),
      filter: cdktf.listMapper(dataOciJmsTaskSchedulesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fleet_id: {
        value: cdktf.stringToHclTerraform(this._fleetId),
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
      managed_instance_id: {
        value: cdktf.stringToHclTerraform(this._managedInstanceId),
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
      task_schedule_name_contains: {
        value: cdktf.stringToHclTerraform(this._taskScheduleNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciJmsTaskSchedulesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciJmsTaskSchedulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
