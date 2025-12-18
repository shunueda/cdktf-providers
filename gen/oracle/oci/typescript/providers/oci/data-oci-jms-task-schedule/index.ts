// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_task_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsTaskScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_task_schedule#fleet_id DataOciJmsTaskSchedule#fleet_id}
  */
  readonly fleetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_task_schedule#task_schedule_id DataOciJmsTaskSchedule#task_schedule_id}
  */
  readonly taskScheduleId: string;
}
export interface DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites {
}

export function dataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSites | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // installation_sites - computed: true, optional: false, required: false
  private _installationSites = new DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestInstallationSitesList(this, "installation_sites", false);
  public get installationSites() {
    return this._installationSites;
  }

  // post_installation_actions - computed: true, optional: false, required: false
  public get postInstallationActions() {
    return this.getListAttribute('post_installation_actions');
  }
}

export class DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargets {
}

export function dataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargets | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequest | undefined) {
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
  private _targets = new DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // waiting_period_in_minutes - computed: true, optional: false, required: false
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
}

export class DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets {
}

export function dataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargets | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets {
}

export function dataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargets | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
}

export class DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargets {
}

export function dataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargets | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsJfrTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsJfrTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJfrTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsJfrTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsJfrTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsJfrTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsJfrTaskRequest | undefined) {
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
  private _targets = new DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // waiting_period_in_minutes - computed: true, optional: false, required: false
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
}

export class DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets {
}

export function dataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargets | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequest | undefined) {
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
  private _targets = new DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // waiting_period_in_minutes - computed: true, optional: false, required: false
  public get waitingPeriodInMinutes() {
    return this.getNumberAttribute('waiting_period_in_minutes');
  }
}

export class DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites {
}

export function dataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSites | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // installation_sites - computed: true, optional: false, required: false
  private _installationSites = new DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestInstallationSitesList(this, "installation_sites", false);
  public get installationSites() {
    return this._installationSites;
  }
}

export class DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequest | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequest {
}

export function dataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestToTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequest | undefined) {
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

export class DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciJmsTaskScheduleTaskDetails {
}

export function dataOciJmsTaskScheduleTaskDetailsToTerraform(struct?: DataOciJmsTaskScheduleTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsTaskScheduleTaskDetailsToHclTerraform(struct?: DataOciJmsTaskScheduleTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsTaskScheduleTaskDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsTaskScheduleTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsTaskScheduleTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_installation_site_task_request - computed: true, optional: false, required: false
  private _addInstallationSiteTaskRequest = new DataOciJmsTaskScheduleTaskDetailsAddInstallationSiteTaskRequestList(this, "add_installation_site_task_request", false);
  public get addInstallationSiteTaskRequest() {
    return this._addInstallationSiteTaskRequest;
  }

  // crypto_task_request - computed: true, optional: false, required: false
  private _cryptoTaskRequest = new DataOciJmsTaskScheduleTaskDetailsCryptoTaskRequestList(this, "crypto_task_request", false);
  public get cryptoTaskRequest() {
    return this._cryptoTaskRequest;
  }

  // deployed_application_migration_task_request - computed: true, optional: false, required: false
  private _deployedApplicationMigrationTaskRequest = new DataOciJmsTaskScheduleTaskDetailsDeployedApplicationMigrationTaskRequestList(this, "deployed_application_migration_task_request", false);
  public get deployedApplicationMigrationTaskRequest() {
    return this._deployedApplicationMigrationTaskRequest;
  }

  // java_migration_task_request - computed: true, optional: false, required: false
  private _javaMigrationTaskRequest = new DataOciJmsTaskScheduleTaskDetailsJavaMigrationTaskRequestList(this, "java_migration_task_request", false);
  public get javaMigrationTaskRequest() {
    return this._javaMigrationTaskRequest;
  }

  // jfr_task_request - computed: true, optional: false, required: false
  private _jfrTaskRequest = new DataOciJmsTaskScheduleTaskDetailsJfrTaskRequestList(this, "jfr_task_request", false);
  public get jfrTaskRequest() {
    return this._jfrTaskRequest;
  }

  // performance_tuning_task_request - computed: true, optional: false, required: false
  private _performanceTuningTaskRequest = new DataOciJmsTaskScheduleTaskDetailsPerformanceTuningTaskRequestList(this, "performance_tuning_task_request", false);
  public get performanceTuningTaskRequest() {
    return this._performanceTuningTaskRequest;
  }

  // remove_installation_site_task_request - computed: true, optional: false, required: false
  private _removeInstallationSiteTaskRequest = new DataOciJmsTaskScheduleTaskDetailsRemoveInstallationSiteTaskRequestList(this, "remove_installation_site_task_request", false);
  public get removeInstallationSiteTaskRequest() {
    return this._removeInstallationSiteTaskRequest;
  }

  // scan_java_server_task_request - computed: true, optional: false, required: false
  private _scanJavaServerTaskRequest = new DataOciJmsTaskScheduleTaskDetailsScanJavaServerTaskRequestList(this, "scan_java_server_task_request", false);
  public get scanJavaServerTaskRequest() {
    return this._scanJavaServerTaskRequest;
  }

  // scan_library_task_request - computed: true, optional: false, required: false
  private _scanLibraryTaskRequest = new DataOciJmsTaskScheduleTaskDetailsScanLibraryTaskRequestList(this, "scan_library_task_request", false);
  public get scanLibraryTaskRequest() {
    return this._scanLibraryTaskRequest;
  }

  // task_type - computed: true, optional: false, required: false
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
}

export class DataOciJmsTaskScheduleTaskDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsTaskScheduleTaskDetailsOutputReference {
    return new DataOciJmsTaskScheduleTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_task_schedule oci_jms_task_schedule}
*/
export class DataOciJmsTaskSchedule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_task_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsTaskSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsTaskSchedule to import
  * @param importFromId The id of the existing DataOciJmsTaskSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_task_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsTaskSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_task_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/jms_task_schedule oci_jms_task_schedule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsTaskScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsTaskScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_task_schedule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._taskScheduleId = config.taskScheduleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // execution_recurrences - computed: true, optional: false, required: false
  public get executionRecurrences() {
    return this.getStringAttribute('execution_recurrences');
  }

  // fleet_id - computed: false, optional: true, required: false
  private _fleetId?: string; 
  public get fleetId() {
    return this.getStringAttribute('fleet_id');
  }
  public set fleetId(value: string) {
    this._fleetId = value;
  }
  public resetFleetId() {
    this._fleetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetIdInput() {
    return this._fleetId;
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
  private _taskDetails = new DataOciJmsTaskScheduleTaskDetailsList(this, "task_details", false);
  public get taskDetails() {
    return this._taskDetails;
  }

  // task_schedule_id - computed: false, optional: false, required: true
  private _taskScheduleId?: string; 
  public get taskScheduleId() {
    return this.getStringAttribute('task_schedule_id');
  }
  public set taskScheduleId(value: string) {
    this._taskScheduleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskScheduleIdInput() {
    return this._taskScheduleId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fleet_id: cdktf.stringToTerraform(this._fleetId),
      task_schedule_id: cdktf.stringToTerraform(this._taskScheduleId),
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
      task_schedule_id: {
        value: cdktf.stringToHclTerraform(this._taskScheduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
