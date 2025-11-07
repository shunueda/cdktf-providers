// https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstroDeploymentOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options#cloud_provider DataAstroDeploymentOptions#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Deployment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options#deployment_id DataAstroDeploymentOptions#deployment_id}
  */
  readonly deploymentId?: string;
  /**
  * Deployment type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options#deployment_type DataAstroDeploymentOptions#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Executor. Valid values: CELERY, KUBERNETES, ASTRO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options#executor DataAstroDeploymentOptions#executor}
  */
  readonly executor?: string;
}
export interface DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpu {
}

export function dataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpuToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpuToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemory {
}

export function dataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemoryToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemoryToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsResourceQuotasDefaultPodSize {
}

export function dataAstroDeploymentOptionsResourceQuotasDefaultPodSizeToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasDefaultPodSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasDefaultPodSizeToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasDefaultPodSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotasDefaultPodSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotasDefaultPodSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
}
export interface DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpu {
}

export function dataAstroDeploymentOptionsResourceQuotasResourceQuotaCpuToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasResourceQuotaCpuToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemory {
}

export function dataAstroDeploymentOptionsResourceQuotasResourceQuotaMemoryToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasResourceQuotaMemoryToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsResourceQuotasResourceQuota {
}

export function dataAstroDeploymentOptionsResourceQuotasResourceQuotaToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasResourceQuotaToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotasResourceQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasResourceQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotasResourceQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotasResourceQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  private _cpu = new DataAstroDeploymentOptionsResourceQuotasResourceQuotaCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }

  // memory - computed: true, optional: false, required: false
  private _memory = new DataAstroDeploymentOptionsResourceQuotasResourceQuotaMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
}
export interface DataAstroDeploymentOptionsResourceQuotas {
}

export function dataAstroDeploymentOptionsResourceQuotasToTerraform(struct?: DataAstroDeploymentOptionsResourceQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsResourceQuotasToHclTerraform(struct?: DataAstroDeploymentOptionsResourceQuotas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsResourceQuotasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsResourceQuotas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsResourceQuotas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_pod_size - computed: true, optional: false, required: false
  private _defaultPodSize = new DataAstroDeploymentOptionsResourceQuotasDefaultPodSizeOutputReference(this, "default_pod_size");
  public get defaultPodSize() {
    return this._defaultPodSize;
  }

  // resource_quota - computed: true, optional: false, required: false
  private _resourceQuota = new DataAstroDeploymentOptionsResourceQuotasResourceQuotaOutputReference(this, "resource_quota");
  public get resourceQuota() {
    return this._resourceQuota;
  }
}
export interface DataAstroDeploymentOptionsRuntimeReleases {
}

export function dataAstroDeploymentOptionsRuntimeReleasesToTerraform(struct?: DataAstroDeploymentOptionsRuntimeReleases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsRuntimeReleasesToHclTerraform(struct?: DataAstroDeploymentOptionsRuntimeReleases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsRuntimeReleasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentOptionsRuntimeReleases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsRuntimeReleases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // airflow_database_migration - computed: true, optional: false, required: false
  public get airflowDatabaseMigration() {
    return this.getBooleanAttribute('airflow_database_migration');
  }

  // airflow_version - computed: true, optional: false, required: false
  public get airflowVersion() {
    return this.getStringAttribute('airflow_version');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // release_date - computed: true, optional: false, required: false
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }

  // stellar_database_migration - computed: true, optional: false, required: false
  public get stellarDatabaseMigration() {
    return this.getBooleanAttribute('stellar_database_migration');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAstroDeploymentOptionsRuntimeReleasesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentOptionsRuntimeReleasesOutputReference {
    return new DataAstroDeploymentOptionsRuntimeReleasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentOptionsSchedulerMachinesSpec {
}

export function dataAstroDeploymentOptionsSchedulerMachinesSpecToTerraform(struct?: DataAstroDeploymentOptionsSchedulerMachinesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsSchedulerMachinesSpecToHclTerraform(struct?: DataAstroDeploymentOptionsSchedulerMachinesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsSchedulerMachinesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsSchedulerMachinesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsSchedulerMachinesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency - computed: true, optional: false, required: false
  public get concurrency() {
    return this.getStringAttribute('concurrency');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export interface DataAstroDeploymentOptionsSchedulerMachines {
}

export function dataAstroDeploymentOptionsSchedulerMachinesToTerraform(struct?: DataAstroDeploymentOptionsSchedulerMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsSchedulerMachinesToHclTerraform(struct?: DataAstroDeploymentOptionsSchedulerMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsSchedulerMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentOptionsSchedulerMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsSchedulerMachines | undefined) {
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

  // spec - computed: true, optional: false, required: false
  private _spec = new DataAstroDeploymentOptionsSchedulerMachinesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
}

export class DataAstroDeploymentOptionsSchedulerMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentOptionsSchedulerMachinesOutputReference {
    return new DataAstroDeploymentOptionsSchedulerMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentOptionsWorkerMachinesConcurrency {
}

export function dataAstroDeploymentOptionsWorkerMachinesConcurrencyToTerraform(struct?: DataAstroDeploymentOptionsWorkerMachinesConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerMachinesConcurrencyToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerMachinesConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerMachinesConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsWorkerMachinesConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerMachinesConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsWorkerMachinesSpec {
}

export function dataAstroDeploymentOptionsWorkerMachinesSpecToTerraform(struct?: DataAstroDeploymentOptionsWorkerMachinesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerMachinesSpecToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerMachinesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerMachinesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsWorkerMachinesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerMachinesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency - computed: true, optional: false, required: false
  public get concurrency() {
    return this.getStringAttribute('concurrency');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // ephemeral_storage - computed: true, optional: false, required: false
  public get ephemeralStorage() {
    return this.getStringAttribute('ephemeral_storage');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export interface DataAstroDeploymentOptionsWorkerMachines {
}

export function dataAstroDeploymentOptionsWorkerMachinesToTerraform(struct?: DataAstroDeploymentOptionsWorkerMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerMachinesToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerMachines): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerMachinesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentOptionsWorkerMachines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerMachines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrency - computed: true, optional: false, required: false
  private _concurrency = new DataAstroDeploymentOptionsWorkerMachinesConcurrencyOutputReference(this, "concurrency");
  public get concurrency() {
    return this._concurrency;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataAstroDeploymentOptionsWorkerMachinesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
}

export class DataAstroDeploymentOptionsWorkerMachinesList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentOptionsWorkerMachinesOutputReference {
    return new DataAstroDeploymentOptionsWorkerMachinesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAstroDeploymentOptionsWorkerQueuesMaxWorkers {
}

export function dataAstroDeploymentOptionsWorkerQueuesMaxWorkersToTerraform(struct?: DataAstroDeploymentOptionsWorkerQueuesMaxWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerQueuesMaxWorkersToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerQueuesMaxWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerQueuesMaxWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsWorkerQueuesMaxWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerQueuesMaxWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsWorkerQueuesMinWorkers {
}

export function dataAstroDeploymentOptionsWorkerQueuesMinWorkersToTerraform(struct?: DataAstroDeploymentOptionsWorkerQueuesMinWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerQueuesMinWorkersToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerQueuesMinWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerQueuesMinWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsWorkerQueuesMinWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerQueuesMinWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrency {
}

export function dataAstroDeploymentOptionsWorkerQueuesWorkerConcurrencyToTerraform(struct?: DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerQueuesWorkerConcurrencyToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ceiling - computed: true, optional: false, required: false
  public get ceiling() {
    return this.getStringAttribute('ceiling');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // floor - computed: true, optional: false, required: false
  public get floor() {
    return this.getStringAttribute('floor');
  }
}
export interface DataAstroDeploymentOptionsWorkerQueues {
}

export function dataAstroDeploymentOptionsWorkerQueuesToTerraform(struct?: DataAstroDeploymentOptionsWorkerQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkerQueuesToHclTerraform(struct?: DataAstroDeploymentOptionsWorkerQueues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkerQueuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAstroDeploymentOptionsWorkerQueues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkerQueues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_workers - computed: true, optional: false, required: false
  private _maxWorkers = new DataAstroDeploymentOptionsWorkerQueuesMaxWorkersOutputReference(this, "max_workers");
  public get maxWorkers() {
    return this._maxWorkers;
  }

  // min_workers - computed: true, optional: false, required: false
  private _minWorkers = new DataAstroDeploymentOptionsWorkerQueuesMinWorkersOutputReference(this, "min_workers");
  public get minWorkers() {
    return this._minWorkers;
  }

  // worker_concurrency - computed: true, optional: false, required: false
  private _workerConcurrency = new DataAstroDeploymentOptionsWorkerQueuesWorkerConcurrencyOutputReference(this, "worker_concurrency");
  public get workerConcurrency() {
    return this._workerConcurrency;
  }
}
export interface DataAstroDeploymentOptionsWorkloadIdentityOptions {
}

export function dataAstroDeploymentOptionsWorkloadIdentityOptionsToTerraform(struct?: DataAstroDeploymentOptionsWorkloadIdentityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstroDeploymentOptionsWorkloadIdentityOptionsToHclTerraform(struct?: DataAstroDeploymentOptionsWorkloadIdentityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstroDeploymentOptionsWorkloadIdentityOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstroDeploymentOptionsWorkloadIdentityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstroDeploymentOptionsWorkloadIdentityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataAstroDeploymentOptionsWorkloadIdentityOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAstroDeploymentOptionsWorkloadIdentityOptionsOutputReference {
    return new DataAstroDeploymentOptionsWorkloadIdentityOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options astro_deployment_options}
*/
export class DataAstroDeploymentOptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astro_deployment_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstroDeploymentOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstroDeploymentOptions to import
  * @param importFromId The id of the existing DataAstroDeploymentOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstroDeploymentOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astro_deployment_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/astronomer/astro/1.0.8/docs/data-sources/deployment_options astro_deployment_options} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstroDeploymentOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAstroDeploymentOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'astro_deployment_options',
      terraformGeneratorMetadata: {
        providerName: 'astro',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._deploymentId = config.deploymentId;
    this._deploymentType = config.deploymentType;
    this._executor = config.executor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // deployment_id - computed: false, optional: true, required: false
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  public resetDeploymentId() {
    this._deploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // executor - computed: false, optional: true, required: false
  private _executor?: string; 
  public get executor() {
    return this.getStringAttribute('executor');
  }
  public set executor(value: string) {
    this._executor = value;
  }
  public resetExecutor() {
    this._executor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorInput() {
    return this._executor;
  }

  // executors - computed: true, optional: false, required: false
  public get executors() {
    return cdktf.Fn.tolist(this.getListAttribute('executors'));
  }

  // resource_quotas - computed: true, optional: false, required: false
  private _resourceQuotas = new DataAstroDeploymentOptionsResourceQuotasOutputReference(this, "resource_quotas");
  public get resourceQuotas() {
    return this._resourceQuotas;
  }

  // runtime_releases - computed: true, optional: false, required: false
  private _runtimeReleases = new DataAstroDeploymentOptionsRuntimeReleasesList(this, "runtime_releases", true);
  public get runtimeReleases() {
    return this._runtimeReleases;
  }

  // scheduler_machines - computed: true, optional: false, required: false
  private _schedulerMachines = new DataAstroDeploymentOptionsSchedulerMachinesList(this, "scheduler_machines", true);
  public get schedulerMachines() {
    return this._schedulerMachines;
  }

  // worker_machines - computed: true, optional: false, required: false
  private _workerMachines = new DataAstroDeploymentOptionsWorkerMachinesList(this, "worker_machines", true);
  public get workerMachines() {
    return this._workerMachines;
  }

  // worker_queues - computed: true, optional: false, required: false
  private _workerQueues = new DataAstroDeploymentOptionsWorkerQueuesOutputReference(this, "worker_queues");
  public get workerQueues() {
    return this._workerQueues;
  }

  // workload_identity_options - computed: true, optional: false, required: false
  private _workloadIdentityOptions = new DataAstroDeploymentOptionsWorkloadIdentityOptionsList(this, "workload_identity_options", true);
  public get workloadIdentityOptions() {
    return this._workloadIdentityOptions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      executor: cdktf.stringToTerraform(this._executor),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executor: {
        value: cdktf.stringToHclTerraform(this._executor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
