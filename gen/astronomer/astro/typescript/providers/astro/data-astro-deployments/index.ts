// https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstroDeploymentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments#deployment_ids DataAstroDeployments#deployment_ids}
  */
  readonly deploymentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments#names DataAstroDeployments#names}
  */
  readonly names?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments#workspace_ids DataAstroDeployments#workspace_ids}
  */
  readonly workspaceIds?: string[];
}
export interface DataAstroDeploymentsDeploymentsCreatedBy {
}

export function dataAstroDeploymentsDeploymentsCreatedByToTerraform(struct?: DataAstroDeploymentsDeploymentsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsCreatedByToHclTerraform(struct?: DataAstroDeploymentsDeploymentsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAstroDeploymentsDeploymentsEnvironmentVariables {
}

export function dataAstroDeploymentsDeploymentsEnvironmentVariablesToTerraform(struct?: DataAstroDeploymentsDeploymentsEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsEnvironmentVariablesToHclTerraform(struct?: DataAstroDeploymentsDeploymentsEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentsDeploymentsEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsEnvironmentVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_secret - computed: true, optional: false, required: false
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAstroDeploymentsDeploymentsEnvironmentVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentsDeploymentsEnvironmentVariablesOutputReference {
    return new DataAstroDeploymentsDeploymentsEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentsDeploymentsRemoteExecution {
}

export function dataAstroDeploymentsDeploymentsRemoteExecutionToTerraform(struct?: DataAstroDeploymentsDeploymentsRemoteExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsRemoteExecutionToHclTerraform(struct?: DataAstroDeploymentsDeploymentsRemoteExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsRemoteExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsRemoteExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsRemoteExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_ip_address_ranges - computed: true, optional: false, required: false
  public get allowedIpAddressRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_ip_address_ranges'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // remote_api_url - computed: true, optional: false, required: false
  public get remoteApiUrl() {
    return this.getStringAttribute('remote_api_url');
  }

  // task_log_bucket - computed: true, optional: false, required: false
  public get taskLogBucket() {
    return this.getStringAttribute('task_log_bucket');
  }

  // task_log_url_pattern - computed: true, optional: false, required: false
  public get taskLogUrlPattern() {
    return this.getStringAttribute('task_log_url_pattern');
  }
}
export interface DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverride {
}

export function dataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverrideToTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverrideToHclTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_hibernating - computed: true, optional: false, required: false
  public get isHibernating() {
    return this.getBooleanAttribute('is_hibernating');
  }

  // override_until - computed: true, optional: false, required: false
  public get overrideUntil() {
    return this.getStringAttribute('override_until');
  }
}
export interface DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedules {
}

export function dataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesToTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesToHclTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedules | undefined) {
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

  // hibernate_at_cron - computed: true, optional: false, required: false
  public get hibernateAtCron() {
    return this.getStringAttribute('hibernate_at_cron');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // wake_at_cron - computed: true, optional: false, required: false
  public get wakeAtCron() {
    return this.getStringAttribute('wake_at_cron');
  }
}

export class DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesOutputReference {
    return new DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentsDeploymentsScalingSpecHibernationSpec {
}

export function dataAstroDeploymentsDeploymentsScalingSpecHibernationSpecToTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsScalingSpecHibernationSpecToHclTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsScalingSpecHibernationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsScalingSpecHibernationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecSchedulesList(this, "schedules", true);
  public get schedules() {
    return this._schedules;
  }
}
export interface DataAstroDeploymentsDeploymentsScalingSpec {
}

export function dataAstroDeploymentsDeploymentsScalingSpecToTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsScalingSpecToHclTerraform(struct?: DataAstroDeploymentsDeploymentsScalingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsScalingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsScalingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsScalingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hibernation_spec - computed: true, optional: false, required: false
  private _hibernationSpec = new DataAstroDeploymentsDeploymentsScalingSpecHibernationSpecOutputReference(this, "hibernation_spec");
  public get hibernationSpec() {
    return this._hibernationSpec;
  }
}
export interface DataAstroDeploymentsDeploymentsScalingStatusHibernationStatus {
}

export function dataAstroDeploymentsDeploymentsScalingStatusHibernationStatusToTerraform(struct?: DataAstroDeploymentsDeploymentsScalingStatusHibernationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsScalingStatusHibernationStatusToHclTerraform(struct?: DataAstroDeploymentsDeploymentsScalingStatusHibernationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsScalingStatusHibernationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsScalingStatusHibernationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsScalingStatusHibernationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_hibernating - computed: true, optional: false, required: false
  public get isHibernating() {
    return this.getBooleanAttribute('is_hibernating');
  }

  // next_event_at - computed: true, optional: false, required: false
  public get nextEventAt() {
    return this.getStringAttribute('next_event_at');
  }

  // next_event_type - computed: true, optional: false, required: false
  public get nextEventType() {
    return this.getStringAttribute('next_event_type');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}
export interface DataAstroDeploymentsDeploymentsScalingStatus {
}

export function dataAstroDeploymentsDeploymentsScalingStatusToTerraform(struct?: DataAstroDeploymentsDeploymentsScalingStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsScalingStatusToHclTerraform(struct?: DataAstroDeploymentsDeploymentsScalingStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsScalingStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsScalingStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsScalingStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hibernation_status - computed: true, optional: false, required: false
  private _hibernationStatus = new DataAstroDeploymentsDeploymentsScalingStatusHibernationStatusOutputReference(this, "hibernation_status");
  public get hibernationStatus() {
    return this._hibernationStatus;
  }
}
export interface DataAstroDeploymentsDeploymentsUpdatedBy {
}

export function dataAstroDeploymentsDeploymentsUpdatedByToTerraform(struct?: DataAstroDeploymentsDeploymentsUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsUpdatedByToHclTerraform(struct?: DataAstroDeploymentsDeploymentsUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsUpdatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentsDeploymentsUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_token_name - computed: true, optional: false, required: false
  public get apiTokenName() {
    return this.getStringAttribute('api_token_name');
  }

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAstroDeploymentsDeploymentsWorkerQueues {
}

export function dataAstroDeploymentsDeploymentsWorkerQueuesToTerraform(struct?: DataAstroDeploymentsDeploymentsWorkerQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentsDeploymentsWorkerQueuesToHclTerraform(struct?: DataAstroDeploymentsDeploymentsWorkerQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentsDeploymentsWorkerQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentsDeploymentsWorkerQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeploymentsWorkerQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // astro_machine - computed: true, optional: false, required: false
  public get astroMachine() {
    return this.getStringAttribute('astro_machine');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // max_worker_count - computed: true, optional: false, required: false
  public get maxWorkerCount() {
    return this.getNumberAttribute('max_worker_count');
  }

  // min_worker_count - computed: true, optional: false, required: false
  public get minWorkerCount() {
    return this.getNumberAttribute('min_worker_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // pod_cpu - computed: true, optional: false, required: false
  public get podCpu() {
    return this.getStringAttribute('pod_cpu');
  }

  // pod_memory - computed: true, optional: false, required: false
  public get podMemory() {
    return this.getStringAttribute('pod_memory');
  }

  // worker_concurrency - computed: true, optional: false, required: false
  public get workerConcurrency() {
    return this.getNumberAttribute('worker_concurrency');
  }
}

export class DataAstroDeploymentsDeploymentsWorkerQueuesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentsDeploymentsWorkerQueuesOutputReference {
    return new DataAstroDeploymentsDeploymentsWorkerQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentsDeployments {
  /**
  * Deployment identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments#id DataAstroDeployments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataAstroDeploymentsDeploymentsToTerraform(struct?: DataAstroDeploymentsDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataAstroDeploymentsDeploymentsToHclTerraform(struct?: DataAstroDeploymentsDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAstroDeploymentsDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentsDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentsDeployments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // airflow_version - computed: true, optional: false, required: false
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }

  // astro_runtime_version - computed: true, optional: false, required: false
  public get astroRuntimeVersion() {
    return this.getStringAttribute('astro_runtime_version');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // contact_emails - computed: true, optional: false, required: false
  public get contactEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_emails'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataAstroDeploymentsDeploymentsCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // dag_tarball_version - computed: true, optional: false, required: false
  public get dagTarballVersion() {
    return this.getStringAttribute('dag_tarball_version');
  }

  // default_task_pod_cpu - computed: true, optional: false, required: false
  public get defaultTaskPodCpu() {
    return this.getStringAttribute('default_task_pod_cpu');
  }

  // default_task_pod_memory - computed: true, optional: false, required: false
  public get defaultTaskPodMemory() {
    return this.getStringAttribute('default_task_pod_memory');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desired_dag_tarball_version - computed: true, optional: false, required: false
  public get desiredDagTarballVersion() {
    return this.getStringAttribute('desired_dag_tarball_version');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new DataAstroDeploymentsDeploymentsEnvironmentVariablesList(this, "environment_variables", true);
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // executor - computed: true, optional: false, required: false
  public get executor() {
    return this.getStringAttribute('executor');
  }

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return cdktf.Fn.tolist(this.getListAttribute('external_ips'));
  }

  // id - computed: true, optional: false, required: true
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

  // image_repository - computed: true, optional: false, required: false
  public get imageRepository() {
    return this.getStringAttribute('image_repository');
  }

  // image_tag - computed: true, optional: false, required: false
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // is_cicd_enforced - computed: true, optional: false, required: false
  public get isCicdEnforced() {
    return this.getBooleanAttribute('is_cicd_enforced');
  }

  // is_dag_deploy_enabled - computed: true, optional: false, required: false
  public get isDagDeployEnabled() {
    return this.getBooleanAttribute('is_dag_deploy_enabled');
  }

  // is_development_mode - computed: true, optional: false, required: false
  public get isDevelopmentMode() {
    return this.getBooleanAttribute('is_development_mode');
  }

  // is_high_availability - computed: true, optional: false, required: false
  public get isHighAvailability() {
    return this.getBooleanAttribute('is_high_availability');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // oidc_issuer_url - computed: true, optional: false, required: false
  public get oidcIssuerUrl() {
    return this.getStringAttribute('oidc_issuer_url');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // remote_execution - computed: true, optional: false, required: false
  private _remoteExecution = new DataAstroDeploymentsDeploymentsRemoteExecutionOutputReference(this, "remote_execution");
  public get remoteExecution() {
    return this._remoteExecution;
  }

  // resource_quota_cpu - computed: true, optional: false, required: false
  public get resourceQuotaCpu() {
    return this.getStringAttribute('resource_quota_cpu');
  }

  // resource_quota_memory - computed: true, optional: false, required: false
  public get resourceQuotaMemory() {
    return this.getStringAttribute('resource_quota_memory');
  }

  // scaling_spec - computed: true, optional: false, required: false
  private _scalingSpec = new DataAstroDeploymentsDeploymentsScalingSpecOutputReference(this, "scaling_spec");
  public get scalingSpec() {
    return this._scalingSpec;
  }

  // scaling_status - computed: true, optional: false, required: false
  private _scalingStatus = new DataAstroDeploymentsDeploymentsScalingStatusOutputReference(this, "scaling_status");
  public get scalingStatus() {
    return this._scalingStatus;
  }

  // scheduler_au - computed: true, optional: false, required: false
  public get schedulerAu() {
    return this.getNumberAttribute('scheduler_au');
  }

  // scheduler_cpu - computed: true, optional: false, required: false
  public get schedulerCpu() {
    return this.getStringAttribute('scheduler_cpu');
  }

  // scheduler_memory - computed: true, optional: false, required: false
  public get schedulerMemory() {
    return this.getStringAttribute('scheduler_memory');
  }

  // scheduler_replicas - computed: true, optional: false, required: false
  public get schedulerReplicas() {
    return this.getNumberAttribute('scheduler_replicas');
  }

  // scheduler_size - computed: true, optional: false, required: false
  public get schedulerSize() {
    return this.getStringAttribute('scheduler_size');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // task_pod_node_pool_id - computed: true, optional: false, required: false
  public get taskPodNodePoolId() {
    return this.getStringAttribute('task_pod_node_pool_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new DataAstroDeploymentsDeploymentsUpdatedByOutputReference(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // webserver_airflow_api_url - computed: true, optional: false, required: false
  public get webserverAirflowApiUrl() {
    return this.getStringAttribute('webserver_airflow_api_url');
  }

  // webserver_ingress_hostname - computed: true, optional: false, required: false
  public get webserverIngressHostname() {
    return this.getStringAttribute('webserver_ingress_hostname');
  }

  // webserver_url - computed: true, optional: false, required: false
  public get webserverUrl() {
    return this.getStringAttribute('webserver_url');
  }

  // worker_queues - computed: true, optional: false, required: false
  private _workerQueues = new DataAstroDeploymentsDeploymentsWorkerQueuesList(this, "worker_queues", true);
  public get workerQueues() {
    return this._workerQueues;
  }

  // workload_identity - computed: true, optional: false, required: false
  public get workloadIdentity() {
    return this.getStringAttribute('workload_identity');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataAstroDeploymentsDeploymentsList extends cdktf.ComplexList {
  public internalValue? : DataAstroDeploymentsDeployments[] | cdktf.IResolvable

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
  public get(index: number): DataAstroDeploymentsDeploymentsOutputReference {
    return new DataAstroDeploymentsDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments astro_deployments}
*/
export class DataAstroDeployments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_deployments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstroDeployments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstroDeployments to import
  * @param importFromId The id of the existing DataAstroDeployments that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstroDeployments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_deployments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.9/docs/data-sources/deployments astro_deployments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstroDeploymentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAstroDeploymentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'astro_deployments',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentIds = config.deploymentIds;
    this._names = config.names;
    this._workspaceIds = config.workspaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_ids - computed: false, optional: true, required: false
  private _deploymentIds?: string[]; 
  public get deploymentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_ids'));
  }
  public set deploymentIds(value: string[]) {
    this._deploymentIds = value;
  }
  public resetDeploymentIds() {
    this._deploymentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdsInput() {
    return this._deploymentIds;
  }

  // deployments - computed: true, optional: false, required: false
  private _deployments = new DataAstroDeploymentsDeploymentsList(this, "deployments", true);
  public get deployments() {
    return this._deployments;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }

  // workspace_ids - computed: false, optional: true, required: false
  private _workspaceIds?: string[]; 
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
  public set workspaceIds(value: string[]) {
    this._workspaceIds = value;
  }
  public resetWorkspaceIds() {
    this._workspaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdsInput() {
    return this._workspaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deploymentIds),
      names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._names),
      workspace_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deploymentIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._names),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      workspace_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
