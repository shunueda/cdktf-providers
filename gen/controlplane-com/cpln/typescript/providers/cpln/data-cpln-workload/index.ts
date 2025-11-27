// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCplnWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the associated GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#gvc DataCplnWorkload#gvc}
  */
  readonly gvc: string;
  /**
  * Name of the GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#name DataCplnWorkload#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#tags DataCplnWorkload#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#container DataCplnWorkload#container}
  */
  readonly container?: DataCplnWorkloadContainer[] | cdktf.IResolvable;
  /**
  * firewall_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#firewall_spec DataCplnWorkload#firewall_spec}
  */
  readonly firewallSpec?: DataCplnWorkloadFirewallSpec[] | cdktf.IResolvable;
  /**
  * job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#job DataCplnWorkload#job}
  */
  readonly job?: DataCplnWorkloadJob[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#load_balancer DataCplnWorkload#load_balancer}
  */
  readonly loadBalancer?: DataCplnWorkloadLoadBalancer[] | cdktf.IResolvable;
  /**
  * local_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#local_options DataCplnWorkload#local_options}
  */
  readonly localOptions?: DataCplnWorkloadLocalOptions[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#options DataCplnWorkload#options}
  */
  readonly options?: DataCplnWorkloadOptions[] | cdktf.IResolvable;
  /**
  * request_retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#request_retry_policy DataCplnWorkload#request_retry_policy}
  */
  readonly requestRetryPolicy?: DataCplnWorkloadRequestRetryPolicy[] | cdktf.IResolvable;
  /**
  * rollout_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#rollout_options DataCplnWorkload#rollout_options}
  */
  readonly rolloutOptions?: DataCplnWorkloadRolloutOptions[] | cdktf.IResolvable;
  /**
  * security_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#security_options DataCplnWorkload#security_options}
  */
  readonly securityOptions?: DataCplnWorkloadSecurityOptions[] | cdktf.IResolvable;
  /**
  * sidecar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#sidecar DataCplnWorkload#sidecar}
  */
  readonly sidecar?: DataCplnWorkloadSidecar[] | cdktf.IResolvable;
}
export interface DataCplnWorkloadStatusHealthCheck {
}

export function dataCplnWorkloadStatusHealthCheckToTerraform(struct?: DataCplnWorkloadStatusHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadStatusHealthCheckToHclTerraform(struct?: DataCplnWorkloadStatusHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadStatusHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadStatusHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadStatusHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // failures - computed: true, optional: false, required: false
  public get failures() {
    return this.getNumberAttribute('failures');
  }

  // last_checked - computed: true, optional: false, required: false
  public get lastChecked() {
    return this.getStringAttribute('last_checked');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // success - computed: true, optional: false, required: false
  public get success() {
    return this.getBooleanAttribute('success');
  }

  // successes - computed: true, optional: false, required: false
  public get successes() {
    return this.getNumberAttribute('successes');
  }
}

export class DataCplnWorkloadStatusHealthCheckList extends cdktf.ComplexList {

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
  public get(index: number): DataCplnWorkloadStatusHealthCheckOutputReference {
    return new DataCplnWorkloadStatusHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadStatusLoadBalancer {
}

export function dataCplnWorkloadStatusLoadBalancerToTerraform(struct?: DataCplnWorkloadStatusLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadStatusLoadBalancerToHclTerraform(struct?: DataCplnWorkloadStatusLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadStatusLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadStatusLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadStatusLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataCplnWorkloadStatusLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): DataCplnWorkloadStatusLoadBalancerOutputReference {
    return new DataCplnWorkloadStatusLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadStatusResolvedImagesImagesManifests {
}

export function dataCplnWorkloadStatusResolvedImagesImagesManifestsToTerraform(struct?: DataCplnWorkloadStatusResolvedImagesImagesManifests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadStatusResolvedImagesImagesManifestsToHclTerraform(struct?: DataCplnWorkloadStatusResolvedImagesImagesManifests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadStatusResolvedImagesImagesManifestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadStatusResolvedImagesImagesManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadStatusResolvedImagesImagesManifests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // platform - computed: true, optional: false, required: false
  private _platform = new cdktf.StringMap(this, "platform");
  public get platform() {
    return this._platform;
  }
}

export class DataCplnWorkloadStatusResolvedImagesImagesManifestsList extends cdktf.ComplexList {

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
  public get(index: number): DataCplnWorkloadStatusResolvedImagesImagesManifestsOutputReference {
    return new DataCplnWorkloadStatusResolvedImagesImagesManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadStatusResolvedImagesImages {
}

export function dataCplnWorkloadStatusResolvedImagesImagesToTerraform(struct?: DataCplnWorkloadStatusResolvedImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadStatusResolvedImagesImagesToHclTerraform(struct?: DataCplnWorkloadStatusResolvedImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadStatusResolvedImagesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadStatusResolvedImagesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadStatusResolvedImagesImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // manifests - computed: true, optional: false, required: false
  private _manifests = new DataCplnWorkloadStatusResolvedImagesImagesManifestsList(this, "manifests", false);
  public get manifests() {
    return this._manifests;
  }
}

export class DataCplnWorkloadStatusResolvedImagesImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCplnWorkloadStatusResolvedImagesImagesOutputReference {
    return new DataCplnWorkloadStatusResolvedImagesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadStatusResolvedImages {
}

export function dataCplnWorkloadStatusResolvedImagesToTerraform(struct?: DataCplnWorkloadStatusResolvedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadStatusResolvedImagesToHclTerraform(struct?: DataCplnWorkloadStatusResolvedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadStatusResolvedImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadStatusResolvedImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadStatusResolvedImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_messages - computed: true, optional: false, required: false
  public get errorMessages() {
    return cdktf.Fn.tolist(this.getListAttribute('error_messages'));
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataCplnWorkloadStatusResolvedImagesImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // next_retry_at - computed: true, optional: false, required: false
  public get nextRetryAt() {
    return this.getStringAttribute('next_retry_at');
  }

  // resolved_at - computed: true, optional: false, required: false
  public get resolvedAt() {
    return this.getStringAttribute('resolved_at');
  }

  // resolved_for_version - computed: true, optional: false, required: false
  public get resolvedForVersion() {
    return this.getNumberAttribute('resolved_for_version');
  }
}

export class DataCplnWorkloadStatusResolvedImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataCplnWorkloadStatusResolvedImagesOutputReference {
    return new DataCplnWorkloadStatusResolvedImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadStatus {
}

export function dataCplnWorkloadStatusToTerraform(struct?: DataCplnWorkloadStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadStatusToHclTerraform(struct?: DataCplnWorkloadStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical_endpoint - computed: true, optional: false, required: false
  public get canonicalEndpoint() {
    return this.getStringAttribute('canonical_endpoint');
  }

  // current_replica_count - computed: true, optional: false, required: false
  public get currentReplicaCount() {
    return this.getNumberAttribute('current_replica_count');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // health_check - computed: true, optional: false, required: false
  private _healthCheck = new DataCplnWorkloadStatusHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }

  // internal_name - computed: true, optional: false, required: false
  public get internalName() {
    return this.getStringAttribute('internal_name');
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new DataCplnWorkloadStatusLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // replica_internal_names - computed: true, optional: false, required: false
  public get replicaInternalNames() {
    return cdktf.Fn.tolist(this.getListAttribute('replica_internal_names'));
  }

  // resolved_images - computed: true, optional: false, required: false
  private _resolvedImages = new DataCplnWorkloadStatusResolvedImagesList(this, "resolved_images", false);
  public get resolvedImages() {
    return this._resolvedImages;
  }
}

export class DataCplnWorkloadStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataCplnWorkloadStatusOutputReference {
    return new DataCplnWorkloadStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerGpuCustom {
}

export function dataCplnWorkloadContainerGpuCustomToTerraform(struct?: DataCplnWorkloadContainerGpuCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerGpuCustomToHclTerraform(struct?: DataCplnWorkloadContainerGpuCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerGpuCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerGpuCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerGpuCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // runtime_class - computed: true, optional: false, required: false
  public get runtimeClass() {
    return this.getStringAttribute('runtime_class');
  }
}

export class DataCplnWorkloadContainerGpuCustomList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerGpuCustom[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerGpuCustomOutputReference {
    return new DataCplnWorkloadContainerGpuCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerGpuNvidia {
}

export function dataCplnWorkloadContainerGpuNvidiaToTerraform(struct?: DataCplnWorkloadContainerGpuNvidia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerGpuNvidiaToHclTerraform(struct?: DataCplnWorkloadContainerGpuNvidia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerGpuNvidiaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerGpuNvidia | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerGpuNvidia | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
}

export class DataCplnWorkloadContainerGpuNvidiaList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerGpuNvidia[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerGpuNvidiaOutputReference {
    return new DataCplnWorkloadContainerGpuNvidiaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLifecyclePostStartExec {
}

export function dataCplnWorkloadContainerLifecyclePostStartExecToTerraform(struct?: DataCplnWorkloadContainerLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerLifecyclePostStartExecToHclTerraform(struct?: DataCplnWorkloadContainerLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLifecyclePostStartExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLifecyclePostStartExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataCplnWorkloadContainerLifecyclePostStartExecList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLifecyclePostStartExec[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLifecyclePostStartExecOutputReference {
    return new DataCplnWorkloadContainerLifecyclePostStartExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLifecyclePostStart {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#exec DataCplnWorkload#exec}
  */
  readonly exec?: DataCplnWorkloadContainerLifecyclePostStartExec[] | cdktf.IResolvable;
}

export function dataCplnWorkloadContainerLifecyclePostStartToTerraform(struct?: DataCplnWorkloadContainerLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(dataCplnWorkloadContainerLifecyclePostStartExecToTerraform, true)(struct!.exec),
  }
}


export function dataCplnWorkloadContainerLifecyclePostStartToHclTerraform(struct?: DataCplnWorkloadContainerLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLifecyclePostStartExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLifecyclePostStartExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadContainerLifecyclePostStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLifecyclePostStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLifecyclePostStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataCplnWorkloadContainerLifecyclePostStartExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataCplnWorkloadContainerLifecyclePostStartExec[] | cdktf.IResolvable) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class DataCplnWorkloadContainerLifecyclePostStartList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLifecyclePostStart[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLifecyclePostStartOutputReference {
    return new DataCplnWorkloadContainerLifecyclePostStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLifecyclePreStopExec {
}

export function dataCplnWorkloadContainerLifecyclePreStopExecToTerraform(struct?: DataCplnWorkloadContainerLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerLifecyclePreStopExecToHclTerraform(struct?: DataCplnWorkloadContainerLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLifecyclePreStopExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLifecyclePreStopExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataCplnWorkloadContainerLifecyclePreStopExecList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLifecyclePreStopExec[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLifecyclePreStopExecOutputReference {
    return new DataCplnWorkloadContainerLifecyclePreStopExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLifecyclePreStop {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#exec DataCplnWorkload#exec}
  */
  readonly exec?: DataCplnWorkloadContainerLifecyclePreStopExec[] | cdktf.IResolvable;
}

export function dataCplnWorkloadContainerLifecyclePreStopToTerraform(struct?: DataCplnWorkloadContainerLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(dataCplnWorkloadContainerLifecyclePreStopExecToTerraform, true)(struct!.exec),
  }
}


export function dataCplnWorkloadContainerLifecyclePreStopToHclTerraform(struct?: DataCplnWorkloadContainerLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLifecyclePreStopExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLifecyclePreStopExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadContainerLifecyclePreStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLifecyclePreStop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLifecyclePreStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataCplnWorkloadContainerLifecyclePreStopExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataCplnWorkloadContainerLifecyclePreStopExec[] | cdktf.IResolvable) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }
}

export class DataCplnWorkloadContainerLifecyclePreStopList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLifecyclePreStop[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLifecyclePreStopOutputReference {
    return new DataCplnWorkloadContainerLifecyclePreStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLifecycle {
  /**
  * post_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#post_start DataCplnWorkload#post_start}
  */
  readonly postStart?: DataCplnWorkloadContainerLifecyclePostStart[] | cdktf.IResolvable;
  /**
  * pre_stop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#pre_stop DataCplnWorkload#pre_stop}
  */
  readonly preStop?: DataCplnWorkloadContainerLifecyclePreStop[] | cdktf.IResolvable;
}

export function dataCplnWorkloadContainerLifecycleToTerraform(struct?: DataCplnWorkloadContainerLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(dataCplnWorkloadContainerLifecyclePostStartToTerraform, true)(struct!.postStart),
    pre_stop: cdktf.listMapper(dataCplnWorkloadContainerLifecyclePreStopToTerraform, true)(struct!.preStop),
  }
}


export function dataCplnWorkloadContainerLifecycleToHclTerraform(struct?: DataCplnWorkloadContainerLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLifecyclePostStartToHclTerraform, true)(struct!.postStart),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLifecyclePostStartList",
    },
    pre_stop: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLifecyclePreStopToHclTerraform, true)(struct!.preStop),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLifecyclePreStopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadContainerLifecycleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLifecycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart?.internalValue;
    }
    if (this._preStop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLifecycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStart.internalValue = undefined;
      this._preStop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStart.internalValue = value.postStart;
      this._preStop.internalValue = value.preStop;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart = new DataCplnWorkloadContainerLifecyclePostStartList(this, "post_start", false);
  public get postStart() {
    return this._postStart;
  }
  public putPostStart(value: DataCplnWorkloadContainerLifecyclePostStart[] | cdktf.IResolvable) {
    this._postStart.internalValue = value;
  }
  public resetPostStart() {
    this._postStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart.internalValue;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop = new DataCplnWorkloadContainerLifecyclePreStopList(this, "pre_stop", false);
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: DataCplnWorkloadContainerLifecyclePreStop[] | cdktf.IResolvable) {
    this._preStop.internalValue = value;
  }
  public resetPreStop() {
    this._preStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop.internalValue;
  }
}

export class DataCplnWorkloadContainerLifecycleList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLifecycle[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLifecycleOutputReference {
    return new DataCplnWorkloadContainerLifecycleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLivenessProbeExec {
}

export function dataCplnWorkloadContainerLivenessProbeExecToTerraform(struct?: DataCplnWorkloadContainerLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerLivenessProbeExecToHclTerraform(struct?: DataCplnWorkloadContainerLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLivenessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLivenessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataCplnWorkloadContainerLivenessProbeExecList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLivenessProbeExec[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLivenessProbeExecOutputReference {
    return new DataCplnWorkloadContainerLivenessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLivenessProbeGrpc {
}

export function dataCplnWorkloadContainerLivenessProbeGrpcToTerraform(struct?: DataCplnWorkloadContainerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerLivenessProbeGrpcToHclTerraform(struct?: DataCplnWorkloadContainerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLivenessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLivenessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCplnWorkloadContainerLivenessProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLivenessProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLivenessProbeGrpcOutputReference {
    return new DataCplnWorkloadContainerLivenessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLivenessProbeHttpGet {
}

export function dataCplnWorkloadContainerLivenessProbeHttpGetToTerraform(struct?: DataCplnWorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerLivenessProbeHttpGetToHclTerraform(struct?: DataCplnWorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // http_headers - computed: true, optional: false, required: false
  private _httpHeaders = new cdktf.StringMap(this, "http_headers");
  public get httpHeaders() {
    return this._httpHeaders;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataCplnWorkloadContainerLivenessProbeHttpGetList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLivenessProbeHttpGet[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLivenessProbeHttpGetOutputReference {
    return new DataCplnWorkloadContainerLivenessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLivenessProbeTcpSocket {
}

export function dataCplnWorkloadContainerLivenessProbeTcpSocketToTerraform(struct?: DataCplnWorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerLivenessProbeTcpSocketToHclTerraform(struct?: DataCplnWorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCplnWorkloadContainerLivenessProbeTcpSocketList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLivenessProbeTcpSocket[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLivenessProbeTcpSocketOutputReference {
    return new DataCplnWorkloadContainerLivenessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerLivenessProbe {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#exec DataCplnWorkload#exec}
  */
  readonly exec?: DataCplnWorkloadContainerLivenessProbeExec[] | cdktf.IResolvable;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#grpc DataCplnWorkload#grpc}
  */
  readonly grpc?: DataCplnWorkloadContainerLivenessProbeGrpc[] | cdktf.IResolvable;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#http_get DataCplnWorkload#http_get}
  */
  readonly httpGet?: DataCplnWorkloadContainerLivenessProbeHttpGet[] | cdktf.IResolvable;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#tcp_socket DataCplnWorkload#tcp_socket}
  */
  readonly tcpSocket?: DataCplnWorkloadContainerLivenessProbeTcpSocket[] | cdktf.IResolvable;
}

export function dataCplnWorkloadContainerLivenessProbeToTerraform(struct?: DataCplnWorkloadContainerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(dataCplnWorkloadContainerLivenessProbeExecToTerraform, true)(struct!.exec),
    grpc: cdktf.listMapper(dataCplnWorkloadContainerLivenessProbeGrpcToTerraform, true)(struct!.grpc),
    http_get: cdktf.listMapper(dataCplnWorkloadContainerLivenessProbeHttpGetToTerraform, true)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(dataCplnWorkloadContainerLivenessProbeTcpSocketToTerraform, true)(struct!.tcpSocket),
  }
}


export function dataCplnWorkloadContainerLivenessProbeToHclTerraform(struct?: DataCplnWorkloadContainerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLivenessProbeExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLivenessProbeExecList",
    },
    grpc: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLivenessProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLivenessProbeGrpcList",
    },
    http_get: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLivenessProbeHttpGetToHclTerraform, true)(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLivenessProbeHttpGetList",
    },
    tcp_socket: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLivenessProbeTcpSocketToHclTerraform, true)(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLivenessProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataCplnWorkloadContainerLivenessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataCplnWorkloadContainerLivenessProbeExec[] | cdktf.IResolvable) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataCplnWorkloadContainerLivenessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataCplnWorkloadContainerLivenessProbeGrpc[] | cdktf.IResolvable) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataCplnWorkloadContainerLivenessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataCplnWorkloadContainerLivenessProbeHttpGet[] | cdktf.IResolvable) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataCplnWorkloadContainerLivenessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataCplnWorkloadContainerLivenessProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}

export class DataCplnWorkloadContainerLivenessProbeList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerLivenessProbe[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerLivenessProbeOutputReference {
    return new DataCplnWorkloadContainerLivenessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerMetrics {
}

export function dataCplnWorkloadContainerMetricsToTerraform(struct?: DataCplnWorkloadContainerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerMetricsToHclTerraform(struct?: DataCplnWorkloadContainerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // drop_metrics - computed: true, optional: false, required: false
  public get dropMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_metrics'));
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCplnWorkloadContainerMetricsList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerMetricsOutputReference {
    return new DataCplnWorkloadContainerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerPorts {
}

export function dataCplnWorkloadContainerPortsToTerraform(struct?: DataCplnWorkloadContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerPortsToHclTerraform(struct?: DataCplnWorkloadContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataCplnWorkloadContainerPortsList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerPorts[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerPortsOutputReference {
    return new DataCplnWorkloadContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerReadinessProbeExec {
}

export function dataCplnWorkloadContainerReadinessProbeExecToTerraform(struct?: DataCplnWorkloadContainerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerReadinessProbeExecToHclTerraform(struct?: DataCplnWorkloadContainerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}

export class DataCplnWorkloadContainerReadinessProbeExecList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerReadinessProbeExec[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerReadinessProbeExecOutputReference {
    return new DataCplnWorkloadContainerReadinessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerReadinessProbeGrpc {
}

export function dataCplnWorkloadContainerReadinessProbeGrpcToTerraform(struct?: DataCplnWorkloadContainerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerReadinessProbeGrpcToHclTerraform(struct?: DataCplnWorkloadContainerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCplnWorkloadContainerReadinessProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerReadinessProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerReadinessProbeGrpcOutputReference {
    return new DataCplnWorkloadContainerReadinessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerReadinessProbeHttpGet {
}

export function dataCplnWorkloadContainerReadinessProbeHttpGetToTerraform(struct?: DataCplnWorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerReadinessProbeHttpGetToHclTerraform(struct?: DataCplnWorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // http_headers - computed: true, optional: false, required: false
  private _httpHeaders = new cdktf.StringMap(this, "http_headers");
  public get httpHeaders() {
    return this._httpHeaders;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataCplnWorkloadContainerReadinessProbeHttpGetList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerReadinessProbeHttpGet[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerReadinessProbeHttpGetOutputReference {
    return new DataCplnWorkloadContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerReadinessProbeTcpSocket {
}

export function dataCplnWorkloadContainerReadinessProbeTcpSocketToTerraform(struct?: DataCplnWorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerReadinessProbeTcpSocketToHclTerraform(struct?: DataCplnWorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataCplnWorkloadContainerReadinessProbeTcpSocketList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerReadinessProbeTcpSocket[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerReadinessProbeTcpSocketOutputReference {
    return new DataCplnWorkloadContainerReadinessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerReadinessProbe {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#exec DataCplnWorkload#exec}
  */
  readonly exec?: DataCplnWorkloadContainerReadinessProbeExec[] | cdktf.IResolvable;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#grpc DataCplnWorkload#grpc}
  */
  readonly grpc?: DataCplnWorkloadContainerReadinessProbeGrpc[] | cdktf.IResolvable;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#http_get DataCplnWorkload#http_get}
  */
  readonly httpGet?: DataCplnWorkloadContainerReadinessProbeHttpGet[] | cdktf.IResolvable;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#tcp_socket DataCplnWorkload#tcp_socket}
  */
  readonly tcpSocket?: DataCplnWorkloadContainerReadinessProbeTcpSocket[] | cdktf.IResolvable;
}

export function dataCplnWorkloadContainerReadinessProbeToTerraform(struct?: DataCplnWorkloadContainerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(dataCplnWorkloadContainerReadinessProbeExecToTerraform, true)(struct!.exec),
    grpc: cdktf.listMapper(dataCplnWorkloadContainerReadinessProbeGrpcToTerraform, true)(struct!.grpc),
    http_get: cdktf.listMapper(dataCplnWorkloadContainerReadinessProbeHttpGetToTerraform, true)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(dataCplnWorkloadContainerReadinessProbeTcpSocketToTerraform, true)(struct!.tcpSocket),
  }
}


export function dataCplnWorkloadContainerReadinessProbeToHclTerraform(struct?: DataCplnWorkloadContainerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerReadinessProbeExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerReadinessProbeExecList",
    },
    grpc: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerReadinessProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerReadinessProbeGrpcList",
    },
    http_get: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerReadinessProbeHttpGetToHclTerraform, true)(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerReadinessProbeHttpGetList",
    },
    tcp_socket: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerReadinessProbeTcpSocketToHclTerraform, true)(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerReadinessProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataCplnWorkloadContainerReadinessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataCplnWorkloadContainerReadinessProbeExec[] | cdktf.IResolvable) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataCplnWorkloadContainerReadinessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataCplnWorkloadContainerReadinessProbeGrpc[] | cdktf.IResolvable) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataCplnWorkloadContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataCplnWorkloadContainerReadinessProbeHttpGet[] | cdktf.IResolvable) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataCplnWorkloadContainerReadinessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataCplnWorkloadContainerReadinessProbeTcpSocket[] | cdktf.IResolvable) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}

export class DataCplnWorkloadContainerReadinessProbeList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerReadinessProbe[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerReadinessProbeOutputReference {
    return new DataCplnWorkloadContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainerVolume {
}

export function dataCplnWorkloadContainerVolumeToTerraform(struct?: DataCplnWorkloadContainerVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadContainerVolumeToHclTerraform(struct?: DataCplnWorkloadContainerVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadContainerVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainerVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainerVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // recovery_policy - computed: true, optional: false, required: false
  public get recoveryPolicy() {
    return this.getStringAttribute('recovery_policy');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataCplnWorkloadContainerVolumeList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainerVolume[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerVolumeOutputReference {
    return new DataCplnWorkloadContainerVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadContainer {
  /**
  * gpu_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#gpu_custom DataCplnWorkload#gpu_custom}
  */
  readonly gpuCustom?: DataCplnWorkloadContainerGpuCustom[] | cdktf.IResolvable;
  /**
  * gpu_nvidia block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#gpu_nvidia DataCplnWorkload#gpu_nvidia}
  */
  readonly gpuNvidia?: DataCplnWorkloadContainerGpuNvidia[] | cdktf.IResolvable;
  /**
  * lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#lifecycle DataCplnWorkload#lifecycle}
  */
  readonly lifecycle?: DataCplnWorkloadContainerLifecycle[] | cdktf.IResolvable;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#liveness_probe DataCplnWorkload#liveness_probe}
  */
  readonly livenessProbe?: DataCplnWorkloadContainerLivenessProbe[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#metrics DataCplnWorkload#metrics}
  */
  readonly metrics?: DataCplnWorkloadContainerMetrics[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#ports DataCplnWorkload#ports}
  */
  readonly ports?: DataCplnWorkloadContainerPorts[] | cdktf.IResolvable;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#readiness_probe DataCplnWorkload#readiness_probe}
  */
  readonly readinessProbe?: DataCplnWorkloadContainerReadinessProbe[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#volume DataCplnWorkload#volume}
  */
  readonly volume?: DataCplnWorkloadContainerVolume[] | cdktf.IResolvable;
}

export function dataCplnWorkloadContainerToTerraform(struct?: DataCplnWorkloadContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_custom: cdktf.listMapper(dataCplnWorkloadContainerGpuCustomToTerraform, true)(struct!.gpuCustom),
    gpu_nvidia: cdktf.listMapper(dataCplnWorkloadContainerGpuNvidiaToTerraform, true)(struct!.gpuNvidia),
    lifecycle: cdktf.listMapper(dataCplnWorkloadContainerLifecycleToTerraform, true)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(dataCplnWorkloadContainerLivenessProbeToTerraform, true)(struct!.livenessProbe),
    metrics: cdktf.listMapper(dataCplnWorkloadContainerMetricsToTerraform, true)(struct!.metrics),
    ports: cdktf.listMapper(dataCplnWorkloadContainerPortsToTerraform, true)(struct!.ports),
    readiness_probe: cdktf.listMapper(dataCplnWorkloadContainerReadinessProbeToTerraform, true)(struct!.readinessProbe),
    volume: cdktf.listMapper(dataCplnWorkloadContainerVolumeToTerraform, true)(struct!.volume),
  }
}


export function dataCplnWorkloadContainerToHclTerraform(struct?: DataCplnWorkloadContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_custom: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerGpuCustomToHclTerraform, true)(struct!.gpuCustom),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerGpuCustomList",
    },
    gpu_nvidia: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerGpuNvidiaToHclTerraform, true)(struct!.gpuNvidia),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerGpuNvidiaList",
    },
    lifecycle: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLifecycleToHclTerraform, true)(struct!.lifecycle),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLifecycleList",
    },
    liveness_probe: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerLivenessProbeToHclTerraform, true)(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerLivenessProbeList",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerMetricsList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerPortsList",
    },
    readiness_probe: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerReadinessProbeToHclTerraform, true)(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadContainerReadinessProbeList",
    },
    volume: {
      value: cdktf.listMapperHcl(dataCplnWorkloadContainerVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "set",
      storageClassType: "DataCplnWorkloadContainerVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuCustom = this._gpuCustom?.internalValue;
    }
    if (this._gpuNvidia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuNvidia = this._gpuNvidia?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpuCustom.internalValue = undefined;
      this._gpuNvidia.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpuCustom.internalValue = value.gpuCustom;
      this._gpuNvidia.internalValue = value.gpuNvidia;
      this._lifecycle.internalValue = value.lifecycle;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._metrics.internalValue = value.metrics;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._volume.internalValue = value.volume;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // env - computed: true, optional: false, required: false
  private _env = new cdktf.StringMap(this, "env");
  public get env() {
    return this._env;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // inherit_env - computed: true, optional: false, required: false
  public get inheritEnv() {
    return this.getBooleanAttribute('inherit_env');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }

  // min_cpu - computed: true, optional: false, required: false
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }

  // min_memory - computed: true, optional: false, required: false
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }

  // gpu_custom - computed: false, optional: true, required: false
  private _gpuCustom = new DataCplnWorkloadContainerGpuCustomList(this, "gpu_custom", false);
  public get gpuCustom() {
    return this._gpuCustom;
  }
  public putGpuCustom(value: DataCplnWorkloadContainerGpuCustom[] | cdktf.IResolvable) {
    this._gpuCustom.internalValue = value;
  }
  public resetGpuCustom() {
    this._gpuCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuCustomInput() {
    return this._gpuCustom.internalValue;
  }

  // gpu_nvidia - computed: false, optional: true, required: false
  private _gpuNvidia = new DataCplnWorkloadContainerGpuNvidiaList(this, "gpu_nvidia", false);
  public get gpuNvidia() {
    return this._gpuNvidia;
  }
  public putGpuNvidia(value: DataCplnWorkloadContainerGpuNvidia[] | cdktf.IResolvable) {
    this._gpuNvidia.internalValue = value;
  }
  public resetGpuNvidia() {
    this._gpuNvidia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuNvidiaInput() {
    return this._gpuNvidia.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataCplnWorkloadContainerLifecycleList(this, "lifecycle", false);
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataCplnWorkloadContainerLifecycle[] | cdktf.IResolvable) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataCplnWorkloadContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataCplnWorkloadContainerLivenessProbe[] | cdktf.IResolvable) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataCplnWorkloadContainerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataCplnWorkloadContainerMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataCplnWorkloadContainerPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataCplnWorkloadContainerPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataCplnWorkloadContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataCplnWorkloadContainerReadinessProbe[] | cdktf.IResolvable) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new DataCplnWorkloadContainerVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataCplnWorkloadContainerVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

export class DataCplnWorkloadContainerList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadContainer[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadContainerOutputReference {
    return new DataCplnWorkloadContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter {
}

export function dataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterToTerraform(struct?: DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterToHclTerraform(struct?: DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_values'));
  }

  // blocked_values - computed: true, optional: false, required: false
  public get blockedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_values'));
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterOutputReference {
    return new DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadFirewallSpecExternalHttp {
  /**
  * inbound_header_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#inbound_header_filter DataCplnWorkload#inbound_header_filter}
  */
  readonly inboundHeaderFilter?: DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter[] | cdktf.IResolvable;
}

export function dataCplnWorkloadFirewallSpecExternalHttpToTerraform(struct?: DataCplnWorkloadFirewallSpecExternalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_header_filter: cdktf.listMapper(dataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterToTerraform, true)(struct!.inboundHeaderFilter),
  }
}


export function dataCplnWorkloadFirewallSpecExternalHttpToHclTerraform(struct?: DataCplnWorkloadFirewallSpecExternalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound_header_filter: {
      value: cdktf.listMapperHcl(dataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterToHclTerraform, true)(struct!.inboundHeaderFilter),
      isBlock: true,
      type: "set",
      storageClassType: "DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadFirewallSpecExternalHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadFirewallSpecExternalHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundHeaderFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundHeaderFilter = this._inboundHeaderFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadFirewallSpecExternalHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundHeaderFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundHeaderFilter.internalValue = value.inboundHeaderFilter;
    }
  }

  // inbound_header_filter - computed: false, optional: true, required: false
  private _inboundHeaderFilter = new DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilterList(this, "inbound_header_filter", true);
  public get inboundHeaderFilter() {
    return this._inboundHeaderFilter;
  }
  public putInboundHeaderFilter(value: DataCplnWorkloadFirewallSpecExternalHttpInboundHeaderFilter[] | cdktf.IResolvable) {
    this._inboundHeaderFilter.internalValue = value;
  }
  public resetInboundHeaderFilter() {
    this._inboundHeaderFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundHeaderFilterInput() {
    return this._inboundHeaderFilter.internalValue;
  }
}

export class DataCplnWorkloadFirewallSpecExternalHttpList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadFirewallSpecExternalHttp[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadFirewallSpecExternalHttpOutputReference {
    return new DataCplnWorkloadFirewallSpecExternalHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadFirewallSpecExternalOutboundAllowPort {
}

export function dataCplnWorkloadFirewallSpecExternalOutboundAllowPortToTerraform(struct?: DataCplnWorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadFirewallSpecExternalOutboundAllowPortToHclTerraform(struct?: DataCplnWorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadFirewallSpecExternalOutboundAllowPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class DataCplnWorkloadFirewallSpecExternalOutboundAllowPortList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadFirewallSpecExternalOutboundAllowPort[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadFirewallSpecExternalOutboundAllowPortOutputReference {
    return new DataCplnWorkloadFirewallSpecExternalOutboundAllowPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadFirewallSpecExternal {
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#http DataCplnWorkload#http}
  */
  readonly http?: DataCplnWorkloadFirewallSpecExternalHttp[] | cdktf.IResolvable;
  /**
  * outbound_allow_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#outbound_allow_port DataCplnWorkload#outbound_allow_port}
  */
  readonly outboundAllowPort?: DataCplnWorkloadFirewallSpecExternalOutboundAllowPort[] | cdktf.IResolvable;
}

export function dataCplnWorkloadFirewallSpecExternalToTerraform(struct?: DataCplnWorkloadFirewallSpecExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: cdktf.listMapper(dataCplnWorkloadFirewallSpecExternalHttpToTerraform, true)(struct!.http),
    outbound_allow_port: cdktf.listMapper(dataCplnWorkloadFirewallSpecExternalOutboundAllowPortToTerraform, true)(struct!.outboundAllowPort),
  }
}


export function dataCplnWorkloadFirewallSpecExternalToHclTerraform(struct?: DataCplnWorkloadFirewallSpecExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: cdktf.listMapperHcl(dataCplnWorkloadFirewallSpecExternalHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadFirewallSpecExternalHttpList",
    },
    outbound_allow_port: {
      value: cdktf.listMapperHcl(dataCplnWorkloadFirewallSpecExternalOutboundAllowPortToHclTerraform, true)(struct!.outboundAllowPort),
      isBlock: true,
      type: "set",
      storageClassType: "DataCplnWorkloadFirewallSpecExternalOutboundAllowPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadFirewallSpecExternalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadFirewallSpecExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._outboundAllowPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAllowPort = this._outboundAllowPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadFirewallSpecExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._outboundAllowPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._outboundAllowPort.internalValue = value.outboundAllowPort;
    }
  }

  // inbound_allow_cidr - computed: true, optional: false, required: false
  public get inboundAllowCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_allow_cidr'));
  }

  // inbound_blocked_cidr - computed: true, optional: false, required: false
  public get inboundBlockedCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_blocked_cidr'));
  }

  // outbound_allow_cidr - computed: true, optional: false, required: false
  public get outboundAllowCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_allow_cidr'));
  }

  // outbound_allow_hostname - computed: true, optional: false, required: false
  public get outboundAllowHostname() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_allow_hostname'));
  }

  // outbound_blocked_cidr - computed: true, optional: false, required: false
  public get outboundBlockedCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_blocked_cidr'));
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataCplnWorkloadFirewallSpecExternalHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: DataCplnWorkloadFirewallSpecExternalHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // outbound_allow_port - computed: false, optional: true, required: false
  private _outboundAllowPort = new DataCplnWorkloadFirewallSpecExternalOutboundAllowPortList(this, "outbound_allow_port", true);
  public get outboundAllowPort() {
    return this._outboundAllowPort;
  }
  public putOutboundAllowPort(value: DataCplnWorkloadFirewallSpecExternalOutboundAllowPort[] | cdktf.IResolvable) {
    this._outboundAllowPort.internalValue = value;
  }
  public resetOutboundAllowPort() {
    this._outboundAllowPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAllowPortInput() {
    return this._outboundAllowPort.internalValue;
  }
}

export class DataCplnWorkloadFirewallSpecExternalList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadFirewallSpecExternal[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadFirewallSpecExternalOutputReference {
    return new DataCplnWorkloadFirewallSpecExternalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadFirewallSpecInternal {
}

export function dataCplnWorkloadFirewallSpecInternalToTerraform(struct?: DataCplnWorkloadFirewallSpecInternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadFirewallSpecInternalToHclTerraform(struct?: DataCplnWorkloadFirewallSpecInternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadFirewallSpecInternalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadFirewallSpecInternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadFirewallSpecInternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // inbound_allow_type - computed: true, optional: false, required: false
  public get inboundAllowType() {
    return this.getStringAttribute('inbound_allow_type');
  }

  // inbound_allow_workload - computed: true, optional: false, required: false
  public get inboundAllowWorkload() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_allow_workload'));
  }
}

export class DataCplnWorkloadFirewallSpecInternalList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadFirewallSpecInternal[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadFirewallSpecInternalOutputReference {
    return new DataCplnWorkloadFirewallSpecInternalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadFirewallSpec {
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#external DataCplnWorkload#external}
  */
  readonly external?: DataCplnWorkloadFirewallSpecExternal[] | cdktf.IResolvable;
  /**
  * internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#internal DataCplnWorkload#internal}
  */
  readonly internal?: DataCplnWorkloadFirewallSpecInternal[] | cdktf.IResolvable;
}

export function dataCplnWorkloadFirewallSpecToTerraform(struct?: DataCplnWorkloadFirewallSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.listMapper(dataCplnWorkloadFirewallSpecExternalToTerraform, true)(struct!.external),
    internal: cdktf.listMapper(dataCplnWorkloadFirewallSpecInternalToTerraform, true)(struct!.internal),
  }
}


export function dataCplnWorkloadFirewallSpecToHclTerraform(struct?: DataCplnWorkloadFirewallSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.listMapperHcl(dataCplnWorkloadFirewallSpecExternalToHclTerraform, true)(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadFirewallSpecExternalList",
    },
    internal: {
      value: cdktf.listMapperHcl(dataCplnWorkloadFirewallSpecInternalToHclTerraform, true)(struct!.internal),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadFirewallSpecInternalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadFirewallSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadFirewallSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._internal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadFirewallSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external.internalValue = undefined;
      this._internal.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external.internalValue = value.external;
      this._internal.internalValue = value.internal;
    }
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataCplnWorkloadFirewallSpecExternalList(this, "external", false);
  public get external() {
    return this._external;
  }
  public putExternal(value: DataCplnWorkloadFirewallSpecExternal[] | cdktf.IResolvable) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // internal - computed: false, optional: true, required: false
  private _internal = new DataCplnWorkloadFirewallSpecInternalList(this, "internal", false);
  public get internal() {
    return this._internal;
  }
  public putInternal(value: DataCplnWorkloadFirewallSpecInternal[] | cdktf.IResolvable) {
    this._internal.internalValue = value;
  }
  public resetInternal() {
    this._internal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal.internalValue;
  }
}

export class DataCplnWorkloadFirewallSpecList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadFirewallSpec[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadFirewallSpecOutputReference {
    return new DataCplnWorkloadFirewallSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadJob {
}

export function dataCplnWorkloadJobToTerraform(struct?: DataCplnWorkloadJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadJobToHclTerraform(struct?: DataCplnWorkloadJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // concurrency_policy - computed: true, optional: false, required: false
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }

  // history_limit - computed: true, optional: false, required: false
  public get historyLimit() {
    return this.getNumberAttribute('history_limit');
  }

  // restart_policy - computed: true, optional: false, required: false
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
}

export class DataCplnWorkloadJobList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadJob[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadJobOutputReference {
    return new DataCplnWorkloadJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLoadBalancerDirectPort {
}

export function dataCplnWorkloadLoadBalancerDirectPortToTerraform(struct?: DataCplnWorkloadLoadBalancerDirectPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadLoadBalancerDirectPortToHclTerraform(struct?: DataCplnWorkloadLoadBalancerDirectPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadLoadBalancerDirectPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLoadBalancerDirectPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLoadBalancerDirectPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // external_port - computed: true, optional: false, required: false
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}

export class DataCplnWorkloadLoadBalancerDirectPortList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLoadBalancerDirectPort[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLoadBalancerDirectPortOutputReference {
    return new DataCplnWorkloadLoadBalancerDirectPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLoadBalancerDirect {
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#port DataCplnWorkload#port}
  */
  readonly port?: DataCplnWorkloadLoadBalancerDirectPort[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLoadBalancerDirectToTerraform(struct?: DataCplnWorkloadLoadBalancerDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.listMapper(dataCplnWorkloadLoadBalancerDirectPortToTerraform, true)(struct!.port),
  }
}


export function dataCplnWorkloadLoadBalancerDirectToHclTerraform(struct?: DataCplnWorkloadLoadBalancerDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLoadBalancerDirectPortToHclTerraform, true)(struct!.port),
      isBlock: true,
      type: "set",
      storageClassType: "DataCplnWorkloadLoadBalancerDirectPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLoadBalancerDirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLoadBalancerDirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLoadBalancerDirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port.internalValue = value.port;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ipset - computed: true, optional: false, required: false
  public get ipset() {
    return this.getStringAttribute('ipset');
  }

  // port - computed: false, optional: true, required: false
  private _port = new DataCplnWorkloadLoadBalancerDirectPortList(this, "port", true);
  public get port() {
    return this._port;
  }
  public putPort(value: DataCplnWorkloadLoadBalancerDirectPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }
}

export class DataCplnWorkloadLoadBalancerDirectList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLoadBalancerDirect[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLoadBalancerDirectOutputReference {
    return new DataCplnWorkloadLoadBalancerDirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLoadBalancerGeoLocationHeaders {
}

export function dataCplnWorkloadLoadBalancerGeoLocationHeadersToTerraform(struct?: DataCplnWorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadLoadBalancerGeoLocationHeadersToHclTerraform(struct?: DataCplnWorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadLoadBalancerGeoLocationHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getStringAttribute('asn');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataCplnWorkloadLoadBalancerGeoLocationHeadersList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLoadBalancerGeoLocationHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLoadBalancerGeoLocationHeadersOutputReference {
    return new DataCplnWorkloadLoadBalancerGeoLocationHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLoadBalancerGeoLocation {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#headers DataCplnWorkload#headers}
  */
  readonly headers?: DataCplnWorkloadLoadBalancerGeoLocationHeaders[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLoadBalancerGeoLocationToTerraform(struct?: DataCplnWorkloadLoadBalancerGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataCplnWorkloadLoadBalancerGeoLocationHeadersToTerraform, true)(struct!.headers),
  }
}


export function dataCplnWorkloadLoadBalancerGeoLocationToHclTerraform(struct?: DataCplnWorkloadLoadBalancerGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLoadBalancerGeoLocationHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLoadBalancerGeoLocationHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLoadBalancerGeoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLoadBalancerGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLoadBalancerGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataCplnWorkloadLoadBalancerGeoLocationHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataCplnWorkloadLoadBalancerGeoLocationHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}

export class DataCplnWorkloadLoadBalancerGeoLocationList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLoadBalancerGeoLocation[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLoadBalancerGeoLocationOutputReference {
    return new DataCplnWorkloadLoadBalancerGeoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLoadBalancer {
  /**
  * direct block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#direct DataCplnWorkload#direct}
  */
  readonly direct?: DataCplnWorkloadLoadBalancerDirect[] | cdktf.IResolvable;
  /**
  * geo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#geo_location DataCplnWorkload#geo_location}
  */
  readonly geoLocation?: DataCplnWorkloadLoadBalancerGeoLocation[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLoadBalancerToTerraform(struct?: DataCplnWorkloadLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direct: cdktf.listMapper(dataCplnWorkloadLoadBalancerDirectToTerraform, true)(struct!.direct),
    geo_location: cdktf.listMapper(dataCplnWorkloadLoadBalancerGeoLocationToTerraform, true)(struct!.geoLocation),
  }
}


export function dataCplnWorkloadLoadBalancerToHclTerraform(struct?: DataCplnWorkloadLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direct: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLoadBalancerDirectToHclTerraform, true)(struct!.direct),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLoadBalancerDirectList",
    },
    geo_location: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLoadBalancerGeoLocationToHclTerraform, true)(struct!.geoLocation),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLoadBalancerGeoLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direct?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.direct = this._direct?.internalValue;
    }
    if (this._geoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direct.internalValue = undefined;
      this._geoLocation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direct.internalValue = value.direct;
      this._geoLocation.internalValue = value.geoLocation;
    }
  }

  // replica_direct - computed: true, optional: false, required: false
  public get replicaDirect() {
    return this.getBooleanAttribute('replica_direct');
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new DataCplnWorkloadLoadBalancerDirectList(this, "direct", false);
  public get direct() {
    return this._direct;
  }
  public putDirect(value: DataCplnWorkloadLoadBalancerDirect[] | cdktf.IResolvable) {
    this._direct.internalValue = value;
  }
  public resetDirect() {
    this._direct.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directInput() {
    return this._direct.internalValue;
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation = new DataCplnWorkloadLoadBalancerGeoLocationList(this, "geo_location", false);
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: DataCplnWorkloadLoadBalancerGeoLocation[] | cdktf.IResolvable) {
    this._geoLocation.internalValue = value;
  }
  public resetGeoLocation() {
    this._geoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
  }
}

export class DataCplnWorkloadLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLoadBalancerOutputReference {
    return new DataCplnWorkloadLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers {
}

export function dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // activation_target - computed: true, optional: false, required: false
  public get activationTarget() {
    return this.getStringAttribute('activation_target');
  }

  // formula - computed: true, optional: false, required: false
  public get formula() {
    return this.getStringAttribute('formula');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced {
  /**
  * scaling_modifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#scaling_modifiers DataCplnWorkload#scaling_modifiers}
  */
  readonly scalingModifiers?: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaling_modifiers: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform, true)(struct!.scalingModifiers),
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaling_modifiers: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform, true)(struct!.scalingModifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scalingModifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingModifiers = this._scalingModifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scalingModifiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scalingModifiers.internalValue = value.scalingModifiers;
    }
  }

  // scaling_modifiers - computed: false, optional: true, required: false
  private _scalingModifiers = new DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersList(this, "scaling_modifiers", false);
  public get scalingModifiers() {
    return this._scalingModifiers;
  }
  public putScalingModifiers(value: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable) {
    this._scalingModifiers.internalValue = value;
  }
  public resetScalingModifiers() {
    this._scalingModifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModifiersInput() {
    return this._scalingModifiers.internalValue;
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef {
}

export function dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger {
  /**
  * authentication_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#authentication_ref DataCplnWorkload#authentication_ref}
  */
  readonly authenticationRef?: DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_ref: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform, true)(struct!.authenticationRef),
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_ref: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform, true)(struct!.authenticationRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRef = this._authenticationRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationRef.internalValue = value.authenticationRef;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_cached_metrics - computed: true, optional: false, required: false
  public get useCachedMetrics() {
    return this.getBooleanAttribute('use_cached_metrics');
  }

  // authentication_ref - computed: false, optional: true, required: false
  private _authenticationRef = new DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefList(this, "authentication_ref", false);
  public get authenticationRef() {
    return this._authenticationRef;
  }
  public putAuthenticationRef(value: DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable) {
    this._authenticationRef.internalValue = value;
  }
  public resetAuthenticationRef() {
    this._authenticationRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRefInput() {
    return this._authenticationRef.internalValue;
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscalingKeda {
  /**
  * advanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#advanced DataCplnWorkload#advanced}
  */
  readonly advanced?: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#trigger DataCplnWorkload#trigger}
  */
  readonly trigger?: DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLocalOptionsAutoscalingKedaToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedToTerraform, true)(struct!.advanced),
    trigger: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerToTerraform, true)(struct!.trigger),
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingKedaToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedToHclTerraform, true)(struct!.advanced),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedList",
    },
    trigger: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingKedaTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanced.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanced.internalValue = value.advanced;
      this._trigger.internalValue = value.trigger;
    }
  }

  // cooldown_period - computed: true, optional: false, required: false
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }

  // initial_cooldown_period - computed: true, optional: false, required: false
  public get initialCooldownPeriod() {
    return this.getNumberAttribute('initial_cooldown_period');
  }

  // polling_interval - computed: true, optional: false, required: false
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new DataCplnWorkloadLocalOptionsAutoscalingKedaAdvancedList(this, "advanced", false);
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: DataCplnWorkloadLocalOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable) {
    this._advanced.internalValue = value;
  }
  public resetAdvanced() {
    this._advanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new DataCplnWorkloadLocalOptionsAutoscalingKedaTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: DataCplnWorkloadLocalOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingKedaList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscalingKeda[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingKedaOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingKedaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscalingMulti {
}

export function dataCplnWorkloadLocalOptionsAutoscalingMultiToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingMultiToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadLocalOptionsAutoscalingMultiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingMultiList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscalingMulti[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingMultiOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingMultiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsAutoscaling {
  /**
  * keda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#keda DataCplnWorkload#keda}
  */
  readonly keda?: DataCplnWorkloadLocalOptionsAutoscalingKeda[] | cdktf.IResolvable;
  /**
  * multi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#multi DataCplnWorkload#multi}
  */
  readonly multi?: DataCplnWorkloadLocalOptionsAutoscalingMulti[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLocalOptionsAutoscalingToTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keda: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingKedaToTerraform, true)(struct!.keda),
    multi: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingMultiToTerraform, true)(struct!.multi),
  }
}


export function dataCplnWorkloadLocalOptionsAutoscalingToHclTerraform(struct?: DataCplnWorkloadLocalOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keda: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingKedaToHclTerraform, true)(struct!.keda),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingKedaList",
    },
    multi: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingMultiToHclTerraform, true)(struct!.multi),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingMultiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLocalOptionsAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keda = this._keda?.internalValue;
    }
    if (this._multi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keda.internalValue = undefined;
      this._multi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keda.internalValue = value.keda;
      this._multi.internalValue = value.multi;
    }
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // max_scale - computed: true, optional: false, required: false
  public get maxScale() {
    return this.getNumberAttribute('max_scale');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_percentile - computed: true, optional: false, required: false
  public get metricPercentile() {
    return this.getStringAttribute('metric_percentile');
  }

  // min_scale - computed: true, optional: false, required: false
  public get minScale() {
    return this.getNumberAttribute('min_scale');
  }

  // scale_to_zero_delay - computed: true, optional: false, required: false
  public get scaleToZeroDelay() {
    return this.getNumberAttribute('scale_to_zero_delay');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }

  // keda - computed: false, optional: true, required: false
  private _keda = new DataCplnWorkloadLocalOptionsAutoscalingKedaList(this, "keda", false);
  public get keda() {
    return this._keda;
  }
  public putKeda(value: DataCplnWorkloadLocalOptionsAutoscalingKeda[] | cdktf.IResolvable) {
    this._keda.internalValue = value;
  }
  public resetKeda() {
    this._keda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kedaInput() {
    return this._keda.internalValue;
  }

  // multi - computed: false, optional: true, required: false
  private _multi = new DataCplnWorkloadLocalOptionsAutoscalingMultiList(this, "multi", false);
  public get multi() {
    return this._multi;
  }
  public putMulti(value: DataCplnWorkloadLocalOptionsAutoscalingMulti[] | cdktf.IResolvable) {
    this._multi.internalValue = value;
  }
  public resetMulti() {
    this._multi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi.internalValue;
  }
}

export class DataCplnWorkloadLocalOptionsAutoscalingList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsAutoscaling[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsAutoscalingOutputReference {
    return new DataCplnWorkloadLocalOptionsAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptionsMultiZone {
}

export function dataCplnWorkloadLocalOptionsMultiZoneToTerraform(struct?: DataCplnWorkloadLocalOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadLocalOptionsMultiZoneToHclTerraform(struct?: DataCplnWorkloadLocalOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadLocalOptionsMultiZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptionsMultiZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptionsMultiZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataCplnWorkloadLocalOptionsMultiZoneList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptionsMultiZone[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsMultiZoneOutputReference {
    return new DataCplnWorkloadLocalOptionsMultiZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadLocalOptions {
  /**
  * Valid only for `local_options`. Override options for a specific location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#location DataCplnWorkload#location}
  */
  readonly location: string;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#autoscaling DataCplnWorkload#autoscaling}
  */
  readonly autoscaling?: DataCplnWorkloadLocalOptionsAutoscaling[] | cdktf.IResolvable;
  /**
  * multi_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#multi_zone DataCplnWorkload#multi_zone}
  */
  readonly multiZone?: DataCplnWorkloadLocalOptionsMultiZone[] | cdktf.IResolvable;
}

export function dataCplnWorkloadLocalOptionsToTerraform(struct?: DataCplnWorkloadLocalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    autoscaling: cdktf.listMapper(dataCplnWorkloadLocalOptionsAutoscalingToTerraform, true)(struct!.autoscaling),
    multi_zone: cdktf.listMapper(dataCplnWorkloadLocalOptionsMultiZoneToTerraform, true)(struct!.multiZone),
  }
}


export function dataCplnWorkloadLocalOptionsToHclTerraform(struct?: DataCplnWorkloadLocalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsAutoscalingToHclTerraform, true)(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsAutoscalingList",
    },
    multi_zone: {
      value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsMultiZoneToHclTerraform, true)(struct!.multiZone),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadLocalOptionsMultiZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadLocalOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadLocalOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._multiZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiZone = this._multiZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadLocalOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._autoscaling.internalValue = undefined;
      this._multiZone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._autoscaling.internalValue = value.autoscaling;
      this._multiZone.internalValue = value.multiZone;
    }
  }

  // capacity_ai - computed: true, optional: false, required: false
  public get capacityAi() {
    return this.getBooleanAttribute('capacity_ai');
  }

  // capacity_ai_update_minutes - computed: true, optional: false, required: false
  public get capacityAiUpdateMinutes() {
    return this.getNumberAttribute('capacity_ai_update_minutes');
  }

  // debug - computed: true, optional: false, required: false
  public get debug() {
    return this.getBooleanAttribute('debug');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new DataCplnWorkloadLocalOptionsAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DataCplnWorkloadLocalOptionsAutoscaling[] | cdktf.IResolvable) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // multi_zone - computed: false, optional: true, required: false
  private _multiZone = new DataCplnWorkloadLocalOptionsMultiZoneList(this, "multi_zone", false);
  public get multiZone() {
    return this._multiZone;
  }
  public putMultiZone(value: DataCplnWorkloadLocalOptionsMultiZone[] | cdktf.IResolvable) {
    this._multiZone.internalValue = value;
  }
  public resetMultiZone() {
    this._multiZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInput() {
    return this._multiZone.internalValue;
  }
}

export class DataCplnWorkloadLocalOptionsList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadLocalOptions[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadLocalOptionsOutputReference {
    return new DataCplnWorkloadLocalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers {
}

export function dataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // activation_target - computed: true, optional: false, required: false
  public get activationTarget() {
    return this.getStringAttribute('activation_target');
  }

  // formula - computed: true, optional: false, required: false
  public get formula() {
    return this.getStringAttribute('formula');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscalingKedaAdvanced {
  /**
  * scaling_modifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#scaling_modifiers DataCplnWorkload#scaling_modifiers}
  */
  readonly scalingModifiers?: DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable;
}

export function dataCplnWorkloadOptionsAutoscalingKedaAdvancedToTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaling_modifiers: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform, true)(struct!.scalingModifiers),
  }
}


export function dataCplnWorkloadOptionsAutoscalingKedaAdvancedToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaling_modifiers: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform, true)(struct!.scalingModifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadOptionsAutoscalingKedaAdvancedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scalingModifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingModifiers = this._scalingModifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scalingModifiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scalingModifiers.internalValue = value.scalingModifiers;
    }
  }

  // scaling_modifiers - computed: false, optional: true, required: false
  private _scalingModifiers = new DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiersList(this, "scaling_modifiers", false);
  public get scalingModifiers() {
    return this._scalingModifiers;
  }
  public putScalingModifiers(value: DataCplnWorkloadOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable) {
    this._scalingModifiers.internalValue = value;
  }
  public resetScalingModifiers() {
    this._scalingModifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModifiersInput() {
    return this._scalingModifiers.internalValue;
  }
}

export class DataCplnWorkloadOptionsAutoscalingKedaAdvancedList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingKedaAdvancedOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingKedaAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef {
}

export function dataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscalingKedaTrigger {
  /**
  * authentication_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#authentication_ref DataCplnWorkload#authentication_ref}
  */
  readonly authenticationRef?: DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable;
}

export function dataCplnWorkloadOptionsAutoscalingKedaTriggerToTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_ref: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform, true)(struct!.authenticationRef),
  }
}


export function dataCplnWorkloadOptionsAutoscalingKedaTriggerToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_ref: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform, true)(struct!.authenticationRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadOptionsAutoscalingKedaTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRef = this._authenticationRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationRef.internalValue = value.authenticationRef;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_cached_metrics - computed: true, optional: false, required: false
  public get useCachedMetrics() {
    return this.getBooleanAttribute('use_cached_metrics');
  }

  // authentication_ref - computed: false, optional: true, required: false
  private _authenticationRef = new DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRefList(this, "authentication_ref", false);
  public get authenticationRef() {
    return this._authenticationRef;
  }
  public putAuthenticationRef(value: DataCplnWorkloadOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable) {
    this._authenticationRef.internalValue = value;
  }
  public resetAuthenticationRef() {
    this._authenticationRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRefInput() {
    return this._authenticationRef.internalValue;
  }
}

export class DataCplnWorkloadOptionsAutoscalingKedaTriggerList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingKedaTriggerOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingKedaTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscalingKeda {
  /**
  * advanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#advanced DataCplnWorkload#advanced}
  */
  readonly advanced?: DataCplnWorkloadOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#trigger DataCplnWorkload#trigger}
  */
  readonly trigger?: DataCplnWorkloadOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable;
}

export function dataCplnWorkloadOptionsAutoscalingKedaToTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingKedaAdvancedToTerraform, true)(struct!.advanced),
    trigger: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingKedaTriggerToTerraform, true)(struct!.trigger),
  }
}


export function dataCplnWorkloadOptionsAutoscalingKedaToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingKedaAdvancedToHclTerraform, true)(struct!.advanced),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingKedaAdvancedList",
    },
    trigger: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingKedaTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingKedaTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadOptionsAutoscalingKedaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscalingKeda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscalingKeda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advanced.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advanced.internalValue = value.advanced;
      this._trigger.internalValue = value.trigger;
    }
  }

  // cooldown_period - computed: true, optional: false, required: false
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }

  // initial_cooldown_period - computed: true, optional: false, required: false
  public get initialCooldownPeriod() {
    return this.getNumberAttribute('initial_cooldown_period');
  }

  // polling_interval - computed: true, optional: false, required: false
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new DataCplnWorkloadOptionsAutoscalingKedaAdvancedList(this, "advanced", false);
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: DataCplnWorkloadOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable) {
    this._advanced.internalValue = value;
  }
  public resetAdvanced() {
    this._advanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced.internalValue;
  }

  // trigger - computed: false, optional: true, required: false
  private _trigger = new DataCplnWorkloadOptionsAutoscalingKedaTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: DataCplnWorkloadOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable) {
    this._trigger.internalValue = value;
  }
  public resetTrigger() {
    this._trigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

export class DataCplnWorkloadOptionsAutoscalingKedaList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscalingKeda[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingKedaOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingKedaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscalingMulti {
}

export function dataCplnWorkloadOptionsAutoscalingMultiToTerraform(struct?: DataCplnWorkloadOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadOptionsAutoscalingMultiToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadOptionsAutoscalingMultiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscalingMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscalingMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }
}

export class DataCplnWorkloadOptionsAutoscalingMultiList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscalingMulti[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingMultiOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingMultiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsAutoscaling {
  /**
  * keda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#keda DataCplnWorkload#keda}
  */
  readonly keda?: DataCplnWorkloadOptionsAutoscalingKeda[] | cdktf.IResolvable;
  /**
  * multi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#multi DataCplnWorkload#multi}
  */
  readonly multi?: DataCplnWorkloadOptionsAutoscalingMulti[] | cdktf.IResolvable;
}

export function dataCplnWorkloadOptionsAutoscalingToTerraform(struct?: DataCplnWorkloadOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keda: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingKedaToTerraform, true)(struct!.keda),
    multi: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingMultiToTerraform, true)(struct!.multi),
  }
}


export function dataCplnWorkloadOptionsAutoscalingToHclTerraform(struct?: DataCplnWorkloadOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keda: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingKedaToHclTerraform, true)(struct!.keda),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingKedaList",
    },
    multi: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingMultiToHclTerraform, true)(struct!.multi),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingMultiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadOptionsAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keda = this._keda?.internalValue;
    }
    if (this._multi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multi = this._multi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keda.internalValue = undefined;
      this._multi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keda.internalValue = value.keda;
      this._multi.internalValue = value.multi;
    }
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // max_scale - computed: true, optional: false, required: false
  public get maxScale() {
    return this.getNumberAttribute('max_scale');
  }

  // metric - computed: true, optional: false, required: false
  public get metric() {
    return this.getStringAttribute('metric');
  }

  // metric_percentile - computed: true, optional: false, required: false
  public get metricPercentile() {
    return this.getStringAttribute('metric_percentile');
  }

  // min_scale - computed: true, optional: false, required: false
  public get minScale() {
    return this.getNumberAttribute('min_scale');
  }

  // scale_to_zero_delay - computed: true, optional: false, required: false
  public get scaleToZeroDelay() {
    return this.getNumberAttribute('scale_to_zero_delay');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getNumberAttribute('target');
  }

  // keda - computed: false, optional: true, required: false
  private _keda = new DataCplnWorkloadOptionsAutoscalingKedaList(this, "keda", false);
  public get keda() {
    return this._keda;
  }
  public putKeda(value: DataCplnWorkloadOptionsAutoscalingKeda[] | cdktf.IResolvable) {
    this._keda.internalValue = value;
  }
  public resetKeda() {
    this._keda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kedaInput() {
    return this._keda.internalValue;
  }

  // multi - computed: false, optional: true, required: false
  private _multi = new DataCplnWorkloadOptionsAutoscalingMultiList(this, "multi", false);
  public get multi() {
    return this._multi;
  }
  public putMulti(value: DataCplnWorkloadOptionsAutoscalingMulti[] | cdktf.IResolvable) {
    this._multi.internalValue = value;
  }
  public resetMulti() {
    this._multi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiInput() {
    return this._multi.internalValue;
  }
}

export class DataCplnWorkloadOptionsAutoscalingList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsAutoscaling[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsAutoscalingOutputReference {
    return new DataCplnWorkloadOptionsAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptionsMultiZone {
}

export function dataCplnWorkloadOptionsMultiZoneToTerraform(struct?: DataCplnWorkloadOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadOptionsMultiZoneToHclTerraform(struct?: DataCplnWorkloadOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadOptionsMultiZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptionsMultiZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptionsMultiZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataCplnWorkloadOptionsMultiZoneList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptionsMultiZone[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsMultiZoneOutputReference {
    return new DataCplnWorkloadOptionsMultiZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadOptions {
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#autoscaling DataCplnWorkload#autoscaling}
  */
  readonly autoscaling?: DataCplnWorkloadOptionsAutoscaling[] | cdktf.IResolvable;
  /**
  * multi_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#multi_zone DataCplnWorkload#multi_zone}
  */
  readonly multiZone?: DataCplnWorkloadOptionsMultiZone[] | cdktf.IResolvable;
}

export function dataCplnWorkloadOptionsToTerraform(struct?: DataCplnWorkloadOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling: cdktf.listMapper(dataCplnWorkloadOptionsAutoscalingToTerraform, true)(struct!.autoscaling),
    multi_zone: cdktf.listMapper(dataCplnWorkloadOptionsMultiZoneToTerraform, true)(struct!.multiZone),
  }
}


export function dataCplnWorkloadOptionsToHclTerraform(struct?: DataCplnWorkloadOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsAutoscalingToHclTerraform, true)(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsAutoscalingList",
    },
    multi_zone: {
      value: cdktf.listMapperHcl(dataCplnWorkloadOptionsMultiZoneToHclTerraform, true)(struct!.multiZone),
      isBlock: true,
      type: "list",
      storageClassType: "DataCplnWorkloadOptionsMultiZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCplnWorkloadOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._multiZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiZone = this._multiZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = undefined;
      this._multiZone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscaling.internalValue = value.autoscaling;
      this._multiZone.internalValue = value.multiZone;
    }
  }

  // capacity_ai - computed: true, optional: false, required: false
  public get capacityAi() {
    return this.getBooleanAttribute('capacity_ai');
  }

  // capacity_ai_update_minutes - computed: true, optional: false, required: false
  public get capacityAiUpdateMinutes() {
    return this.getNumberAttribute('capacity_ai_update_minutes');
  }

  // debug - computed: true, optional: false, required: false
  public get debug() {
    return this.getBooleanAttribute('debug');
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new DataCplnWorkloadOptionsAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: DataCplnWorkloadOptionsAutoscaling[] | cdktf.IResolvable) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // multi_zone - computed: false, optional: true, required: false
  private _multiZone = new DataCplnWorkloadOptionsMultiZoneList(this, "multi_zone", false);
  public get multiZone() {
    return this._multiZone;
  }
  public putMultiZone(value: DataCplnWorkloadOptionsMultiZone[] | cdktf.IResolvable) {
    this._multiZone.internalValue = value;
  }
  public resetMultiZone() {
    this._multiZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInput() {
    return this._multiZone.internalValue;
  }
}

export class DataCplnWorkloadOptionsList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadOptions[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadOptionsOutputReference {
    return new DataCplnWorkloadOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadRequestRetryPolicy {
}

export function dataCplnWorkloadRequestRetryPolicyToTerraform(struct?: DataCplnWorkloadRequestRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadRequestRetryPolicyToHclTerraform(struct?: DataCplnWorkloadRequestRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadRequestRetryPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadRequestRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadRequestRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // attempts - computed: true, optional: false, required: false
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }

  // retry_on - computed: true, optional: false, required: false
  public get retryOn() {
    return cdktf.Fn.tolist(this.getListAttribute('retry_on'));
  }
}

export class DataCplnWorkloadRequestRetryPolicyList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadRequestRetryPolicy[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadRequestRetryPolicyOutputReference {
    return new DataCplnWorkloadRequestRetryPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadRolloutOptions {
}

export function dataCplnWorkloadRolloutOptionsToTerraform(struct?: DataCplnWorkloadRolloutOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadRolloutOptionsToHclTerraform(struct?: DataCplnWorkloadRolloutOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadRolloutOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadRolloutOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadRolloutOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // max_surge_replicas - computed: true, optional: false, required: false
  public get maxSurgeReplicas() {
    return this.getStringAttribute('max_surge_replicas');
  }

  // max_unavailable_replicas - computed: true, optional: false, required: false
  public get maxUnavailableReplicas() {
    return this.getStringAttribute('max_unavailable_replicas');
  }

  // min_ready_seconds - computed: true, optional: false, required: false
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }

  // scaling_policy - computed: true, optional: false, required: false
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
}

export class DataCplnWorkloadRolloutOptionsList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadRolloutOptions[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadRolloutOptionsOutputReference {
    return new DataCplnWorkloadRolloutOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadSecurityOptions {
}

export function dataCplnWorkloadSecurityOptionsToTerraform(struct?: DataCplnWorkloadSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadSecurityOptionsToHclTerraform(struct?: DataCplnWorkloadSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadSecurityOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadSecurityOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadSecurityOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // file_system_group_id - computed: true, optional: false, required: false
  public get fileSystemGroupId() {
    return this.getNumberAttribute('file_system_group_id');
  }
}

export class DataCplnWorkloadSecurityOptionsList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadSecurityOptions[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadSecurityOptionsOutputReference {
    return new DataCplnWorkloadSecurityOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCplnWorkloadSidecar {
}

export function dataCplnWorkloadSidecarToTerraform(struct?: DataCplnWorkloadSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCplnWorkloadSidecarToHclTerraform(struct?: DataCplnWorkloadSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCplnWorkloadSidecarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCplnWorkloadSidecar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCplnWorkloadSidecar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // envoy - computed: true, optional: false, required: false
  public get envoy() {
    return this.getStringAttribute('envoy');
  }
}

export class DataCplnWorkloadSidecarList extends cdktf.ComplexList {
  public internalValue? : DataCplnWorkloadSidecar[] | cdktf.IResolvable

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
  public get(index: number): DataCplnWorkloadSidecarOutputReference {
    return new DataCplnWorkloadSidecarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload cpln_workload}
*/
export class DataCplnWorkload extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCplnWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCplnWorkload to import
  * @param importFromId The id of the existing DataCplnWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCplnWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.17/docs/data-sources/workload cpln_workload} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCplnWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: DataCplnWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_workload',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.17',
        providerVersionConstraint: '1.2.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gvc = config.gvc;
    this._name = config.name;
    this._tags = config.tags;
    this._container.internalValue = config.container;
    this._firewallSpec.internalValue = config.firewallSpec;
    this._job.internalValue = config.job;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._localOptions.internalValue = config.localOptions;
    this._options.internalValue = config.options;
    this._requestRetryPolicy.internalValue = config.requestRetryPolicy;
    this._rolloutOptions.internalValue = config.rolloutOptions;
    this._securityOptions.internalValue = config.securityOptions;
    this._sidecar.internalValue = config.sidecar;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extras - computed: true, optional: false, required: false
  public get extras() {
    return this.getStringAttribute('extras');
  }

  // gvc - computed: false, optional: false, required: true
  private _gvc?: string; 
  public get gvc() {
    return this.getStringAttribute('gvc');
  }
  public set gvc(value: string) {
    this._gvc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gvcInput() {
    return this._gvc;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_link - computed: true, optional: false, required: false
  public get identityLink() {
    return this.getStringAttribute('identity_link');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataCplnWorkloadStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // support_dynamic_tags - computed: true, optional: false, required: false
  public get supportDynamicTags() {
    return this.getBooleanAttribute('support_dynamic_tags');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // container - computed: false, optional: true, required: false
  private _container = new DataCplnWorkloadContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: DataCplnWorkloadContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // firewall_spec - computed: false, optional: true, required: false
  private _firewallSpec = new DataCplnWorkloadFirewallSpecList(this, "firewall_spec", false);
  public get firewallSpec() {
    return this._firewallSpec;
  }
  public putFirewallSpec(value: DataCplnWorkloadFirewallSpec[] | cdktf.IResolvable) {
    this._firewallSpec.internalValue = value;
  }
  public resetFirewallSpec() {
    this._firewallSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSpecInput() {
    return this._firewallSpec.internalValue;
  }

  // job - computed: false, optional: true, required: false
  private _job = new DataCplnWorkloadJobList(this, "job", false);
  public get job() {
    return this._job;
  }
  public putJob(value: DataCplnWorkloadJob[] | cdktf.IResolvable) {
    this._job.internalValue = value;
  }
  public resetJob() {
    this._job.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new DataCplnWorkloadLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataCplnWorkloadLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // local_options - computed: false, optional: true, required: false
  private _localOptions = new DataCplnWorkloadLocalOptionsList(this, "local_options", false);
  public get localOptions() {
    return this._localOptions;
  }
  public putLocalOptions(value: DataCplnWorkloadLocalOptions[] | cdktf.IResolvable) {
    this._localOptions.internalValue = value;
  }
  public resetLocalOptions() {
    this._localOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOptionsInput() {
    return this._localOptions.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataCplnWorkloadOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataCplnWorkloadOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // request_retry_policy - computed: false, optional: true, required: false
  private _requestRetryPolicy = new DataCplnWorkloadRequestRetryPolicyList(this, "request_retry_policy", false);
  public get requestRetryPolicy() {
    return this._requestRetryPolicy;
  }
  public putRequestRetryPolicy(value: DataCplnWorkloadRequestRetryPolicy[] | cdktf.IResolvable) {
    this._requestRetryPolicy.internalValue = value;
  }
  public resetRequestRetryPolicy() {
    this._requestRetryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRetryPolicyInput() {
    return this._requestRetryPolicy.internalValue;
  }

  // rollout_options - computed: false, optional: true, required: false
  private _rolloutOptions = new DataCplnWorkloadRolloutOptionsList(this, "rollout_options", false);
  public get rolloutOptions() {
    return this._rolloutOptions;
  }
  public putRolloutOptions(value: DataCplnWorkloadRolloutOptions[] | cdktf.IResolvable) {
    this._rolloutOptions.internalValue = value;
  }
  public resetRolloutOptions() {
    this._rolloutOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutOptionsInput() {
    return this._rolloutOptions.internalValue;
  }

  // security_options - computed: false, optional: true, required: false
  private _securityOptions = new DataCplnWorkloadSecurityOptionsList(this, "security_options", false);
  public get securityOptions() {
    return this._securityOptions;
  }
  public putSecurityOptions(value: DataCplnWorkloadSecurityOptions[] | cdktf.IResolvable) {
    this._securityOptions.internalValue = value;
  }
  public resetSecurityOptions() {
    this._securityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOptionsInput() {
    return this._securityOptions.internalValue;
  }

  // sidecar - computed: false, optional: true, required: false
  private _sidecar = new DataCplnWorkloadSidecarList(this, "sidecar", false);
  public get sidecar() {
    return this._sidecar;
  }
  public putSidecar(value: DataCplnWorkloadSidecar[] | cdktf.IResolvable) {
    this._sidecar.internalValue = value;
  }
  public resetSidecar() {
    this._sidecar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInput() {
    return this._sidecar.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gvc: cdktf.stringToTerraform(this._gvc),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      container: cdktf.listMapper(dataCplnWorkloadContainerToTerraform, true)(this._container.internalValue),
      firewall_spec: cdktf.listMapper(dataCplnWorkloadFirewallSpecToTerraform, true)(this._firewallSpec.internalValue),
      job: cdktf.listMapper(dataCplnWorkloadJobToTerraform, true)(this._job.internalValue),
      load_balancer: cdktf.listMapper(dataCplnWorkloadLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      local_options: cdktf.listMapper(dataCplnWorkloadLocalOptionsToTerraform, true)(this._localOptions.internalValue),
      options: cdktf.listMapper(dataCplnWorkloadOptionsToTerraform, true)(this._options.internalValue),
      request_retry_policy: cdktf.listMapper(dataCplnWorkloadRequestRetryPolicyToTerraform, true)(this._requestRetryPolicy.internalValue),
      rollout_options: cdktf.listMapper(dataCplnWorkloadRolloutOptionsToTerraform, true)(this._rolloutOptions.internalValue),
      security_options: cdktf.listMapper(dataCplnWorkloadSecurityOptionsToTerraform, true)(this._securityOptions.internalValue),
      sidecar: cdktf.listMapper(dataCplnWorkloadSidecarToTerraform, true)(this._sidecar.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gvc: {
        value: cdktf.stringToHclTerraform(this._gvc),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      container: {
        value: cdktf.listMapperHcl(dataCplnWorkloadContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadContainerList",
      },
      firewall_spec: {
        value: cdktf.listMapperHcl(dataCplnWorkloadFirewallSpecToHclTerraform, true)(this._firewallSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadFirewallSpecList",
      },
      job: {
        value: cdktf.listMapperHcl(dataCplnWorkloadJobToHclTerraform, true)(this._job.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadJobList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(dataCplnWorkloadLoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadLoadBalancerList",
      },
      local_options: {
        value: cdktf.listMapperHcl(dataCplnWorkloadLocalOptionsToHclTerraform, true)(this._localOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadLocalOptionsList",
      },
      options: {
        value: cdktf.listMapperHcl(dataCplnWorkloadOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadOptionsList",
      },
      request_retry_policy: {
        value: cdktf.listMapperHcl(dataCplnWorkloadRequestRetryPolicyToHclTerraform, true)(this._requestRetryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadRequestRetryPolicyList",
      },
      rollout_options: {
        value: cdktf.listMapperHcl(dataCplnWorkloadRolloutOptionsToHclTerraform, true)(this._rolloutOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadRolloutOptionsList",
      },
      security_options: {
        value: cdktf.listMapperHcl(dataCplnWorkloadSecurityOptionsToHclTerraform, true)(this._securityOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadSecurityOptionsList",
      },
      sidecar: {
        value: cdktf.listMapperHcl(dataCplnWorkloadSidecarToHclTerraform, true)(this._sidecar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCplnWorkloadSidecarList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
