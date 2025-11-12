// https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstroDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deployment identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment#id DataAstroDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataAstroDeploymentCreatedBy {
}

export function dataAstroDeploymentCreatedByToTerraform(struct?: DataAstroDeploymentCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentCreatedByToHclTerraform(struct?: DataAstroDeploymentCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentCreatedBy | undefined) {
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
export interface DataAstroDeploymentEnvironmentVariables {
}

export function dataAstroDeploymentEnvironmentVariablesToTerraform(struct?: DataAstroDeploymentEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentEnvironmentVariablesToHclTerraform(struct?: DataAstroDeploymentEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentEnvironmentVariables | undefined) {
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

export class DataAstroDeploymentEnvironmentVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentEnvironmentVariablesOutputReference {
    return new DataAstroDeploymentEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentRemoteExecution {
}

export function dataAstroDeploymentRemoteExecutionToTerraform(struct?: DataAstroDeploymentRemoteExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentRemoteExecutionToHclTerraform(struct?: DataAstroDeploymentRemoteExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentRemoteExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentRemoteExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentRemoteExecution | undefined) {
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
export interface DataAstroDeploymentScalingSpecHibernationSpecOverride {
}

export function dataAstroDeploymentScalingSpecHibernationSpecOverrideToTerraform(struct?: DataAstroDeploymentScalingSpecHibernationSpecOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentScalingSpecHibernationSpecOverrideToHclTerraform(struct?: DataAstroDeploymentScalingSpecHibernationSpecOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentScalingSpecHibernationSpecOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentScalingSpecHibernationSpecOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentScalingSpecHibernationSpecOverride | undefined) {
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
export interface DataAstroDeploymentScalingSpecHibernationSpecSchedules {
}

export function dataAstroDeploymentScalingSpecHibernationSpecSchedulesToTerraform(struct?: DataAstroDeploymentScalingSpecHibernationSpecSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentScalingSpecHibernationSpecSchedulesToHclTerraform(struct?: DataAstroDeploymentScalingSpecHibernationSpecSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentScalingSpecHibernationSpecSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentScalingSpecHibernationSpecSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentScalingSpecHibernationSpecSchedules | undefined) {
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

export class DataAstroDeploymentScalingSpecHibernationSpecSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentScalingSpecHibernationSpecSchedulesOutputReference {
    return new DataAstroDeploymentScalingSpecHibernationSpecSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentScalingSpecHibernationSpec {
}

export function dataAstroDeploymentScalingSpecHibernationSpecToTerraform(struct?: DataAstroDeploymentScalingSpecHibernationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentScalingSpecHibernationSpecToHclTerraform(struct?: DataAstroDeploymentScalingSpecHibernationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentScalingSpecHibernationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentScalingSpecHibernationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentScalingSpecHibernationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataAstroDeploymentScalingSpecHibernationSpecOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataAstroDeploymentScalingSpecHibernationSpecSchedulesList(this, "schedules", true);
  public get schedules() {
    return this._schedules;
  }
}
export interface DataAstroDeploymentScalingSpec {
}

export function dataAstroDeploymentScalingSpecToTerraform(struct?: DataAstroDeploymentScalingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentScalingSpecToHclTerraform(struct?: DataAstroDeploymentScalingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentScalingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentScalingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentScalingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hibernation_spec - computed: true, optional: false, required: false
  private _hibernationSpec = new DataAstroDeploymentScalingSpecHibernationSpecOutputReference(this, "hibernation_spec");
  public get hibernationSpec() {
    return this._hibernationSpec;
  }
}
export interface DataAstroDeploymentScalingStatusHibernationStatus {
}

export function dataAstroDeploymentScalingStatusHibernationStatusToTerraform(struct?: DataAstroDeploymentScalingStatusHibernationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentScalingStatusHibernationStatusToHclTerraform(struct?: DataAstroDeploymentScalingStatusHibernationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentScalingStatusHibernationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentScalingStatusHibernationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentScalingStatusHibernationStatus | undefined) {
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
export interface DataAstroDeploymentScalingStatus {
}

export function dataAstroDeploymentScalingStatusToTerraform(struct?: DataAstroDeploymentScalingStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentScalingStatusToHclTerraform(struct?: DataAstroDeploymentScalingStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentScalingStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentScalingStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentScalingStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hibernation_status - computed: true, optional: false, required: false
  private _hibernationStatus = new DataAstroDeploymentScalingStatusHibernationStatusOutputReference(this, "hibernation_status");
  public get hibernationStatus() {
    return this._hibernationStatus;
  }
}
export interface DataAstroDeploymentUpdatedBy {
}

export function dataAstroDeploymentUpdatedByToTerraform(struct?: DataAstroDeploymentUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentUpdatedByToHclTerraform(struct?: DataAstroDeploymentUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentUpdatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentUpdatedBy | undefined) {
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
export interface DataAstroDeploymentWorkerQueues {
}

export function dataAstroDeploymentWorkerQueuesToTerraform(struct?: DataAstroDeploymentWorkerQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentWorkerQueuesToHclTerraform(struct?: DataAstroDeploymentWorkerQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentWorkerQueuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentWorkerQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentWorkerQueues | undefined) {
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

export class DataAstroDeploymentWorkerQueuesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentWorkerQueuesOutputReference {
    return new DataAstroDeploymentWorkerQueuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment astro_deployment}
*/
export class DataAstroDeployment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstroDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstroDeployment to import
  * @param importFromId The id of the existing DataAstroDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstroDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment astro_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstroDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAstroDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'astro_deployment',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _createdBy = new DataAstroDeploymentCreatedByOutputReference(this, "created_by");
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
  private _environmentVariables = new DataAstroDeploymentEnvironmentVariablesList(this, "environment_variables", true);
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
  private _remoteExecution = new DataAstroDeploymentRemoteExecutionOutputReference(this, "remote_execution");
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
  private _scalingSpec = new DataAstroDeploymentScalingSpecOutputReference(this, "scaling_spec");
  public get scalingSpec() {
    return this._scalingSpec;
  }

  // scaling_status - computed: true, optional: false, required: false
  private _scalingStatus = new DataAstroDeploymentScalingStatusOutputReference(this, "scaling_status");
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
  private _updatedBy = new DataAstroDeploymentUpdatedByOutputReference(this, "updated_by");
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
  private _workerQueues = new DataAstroDeploymentWorkerQueuesList(this, "worker_queues", true);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
