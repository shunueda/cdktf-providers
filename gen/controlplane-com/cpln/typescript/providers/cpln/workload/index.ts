// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#description Workload#description}
  */
  readonly description?: string;
  /**
  * Extra Kubernetes modifications. Only used for BYOK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#extras Workload#extras}
  */
  readonly extras?: string;
  /**
  * Name of the associated GVC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#gvc Workload#gvc}
  */
  readonly gvc: string;
  /**
  * The identityLink is used as the access scope for 3rd party cloud resources. A single identity can provide access to multiple cloud providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#identity_link Workload#identity_link}
  */
  readonly identityLink?: string;
  /**
  * Name of the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#name Workload#name}
  */
  readonly name: string;
  /**
  * Workload will automatically redeploy when one of the container images is updated in the container registry. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#support_dynamic_tags Workload#support_dynamic_tags}
  */
  readonly supportDynamicTags?: boolean | cdktf.IResolvable;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#tags Workload#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Workload Type. Either `serverless`, `standard`, `stateful`, or `cron`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#type Workload#type}
  */
  readonly type: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#container Workload#container}
  */
  readonly container?: WorkloadContainer[] | cdktf.IResolvable;
  /**
  * firewall_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#firewall_spec Workload#firewall_spec}
  */
  readonly firewallSpec?: WorkloadFirewallSpec[] | cdktf.IResolvable;
  /**
  * job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#job Workload#job}
  */
  readonly job?: WorkloadJob[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#load_balancer Workload#load_balancer}
  */
  readonly loadBalancer?: WorkloadLoadBalancer[] | cdktf.IResolvable;
  /**
  * local_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#local_options Workload#local_options}
  */
  readonly localOptions?: WorkloadLocalOptions[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#options Workload#options}
  */
  readonly options?: WorkloadOptions[] | cdktf.IResolvable;
  /**
  * request_retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#request_retry_policy Workload#request_retry_policy}
  */
  readonly requestRetryPolicy?: WorkloadRequestRetryPolicy[] | cdktf.IResolvable;
  /**
  * rollout_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#rollout_options Workload#rollout_options}
  */
  readonly rolloutOptions?: WorkloadRolloutOptions[] | cdktf.IResolvable;
  /**
  * security_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#security_options Workload#security_options}
  */
  readonly securityOptions?: WorkloadSecurityOptions[] | cdktf.IResolvable;
  /**
  * sidecar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#sidecar Workload#sidecar}
  */
  readonly sidecar?: WorkloadSidecar[] | cdktf.IResolvable;
}
export interface WorkloadStatusHealthCheck {
}

export function workloadStatusHealthCheckToTerraform(struct?: WorkloadStatusHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workloadStatusHealthCheckToHclTerraform(struct?: WorkloadStatusHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkloadStatusHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusHealthCheck | undefined) {
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

export class WorkloadStatusHealthCheckList extends cdktf.ComplexList {

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
  public get(index: number): WorkloadStatusHealthCheckOutputReference {
    return new WorkloadStatusHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusLoadBalancer {
}

export function workloadStatusLoadBalancerToTerraform(struct?: WorkloadStatusLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workloadStatusLoadBalancerToHclTerraform(struct?: WorkloadStatusLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkloadStatusLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusLoadBalancer | undefined) {
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

export class WorkloadStatusLoadBalancerList extends cdktf.ComplexList {

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
  public get(index: number): WorkloadStatusLoadBalancerOutputReference {
    return new WorkloadStatusLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusResolvedImagesImagesManifests {
}

export function workloadStatusResolvedImagesImagesManifestsToTerraform(struct?: WorkloadStatusResolvedImagesImagesManifests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workloadStatusResolvedImagesImagesManifestsToHclTerraform(struct?: WorkloadStatusResolvedImagesImagesManifests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkloadStatusResolvedImagesImagesManifestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusResolvedImagesImagesManifests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusResolvedImagesImagesManifests | undefined) {
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

export class WorkloadStatusResolvedImagesImagesManifestsList extends cdktf.ComplexList {

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
  public get(index: number): WorkloadStatusResolvedImagesImagesManifestsOutputReference {
    return new WorkloadStatusResolvedImagesImagesManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusResolvedImagesImages {
}

export function workloadStatusResolvedImagesImagesToTerraform(struct?: WorkloadStatusResolvedImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workloadStatusResolvedImagesImagesToHclTerraform(struct?: WorkloadStatusResolvedImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkloadStatusResolvedImagesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusResolvedImagesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusResolvedImagesImages | undefined) {
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
  private _manifests = new WorkloadStatusResolvedImagesImagesManifestsList(this, "manifests", false);
  public get manifests() {
    return this._manifests;
  }
}

export class WorkloadStatusResolvedImagesImagesList extends cdktf.ComplexList {

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
  public get(index: number): WorkloadStatusResolvedImagesImagesOutputReference {
    return new WorkloadStatusResolvedImagesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatusResolvedImages {
}

export function workloadStatusResolvedImagesToTerraform(struct?: WorkloadStatusResolvedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workloadStatusResolvedImagesToHclTerraform(struct?: WorkloadStatusResolvedImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkloadStatusResolvedImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatusResolvedImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatusResolvedImages | undefined) {
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
  private _images = new WorkloadStatusResolvedImagesImagesList(this, "images", false);
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

export class WorkloadStatusResolvedImagesList extends cdktf.ComplexList {

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
  public get(index: number): WorkloadStatusResolvedImagesOutputReference {
    return new WorkloadStatusResolvedImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadStatus {
}

export function workloadStatusToTerraform(struct?: WorkloadStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workloadStatusToHclTerraform(struct?: WorkloadStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkloadStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadStatus | undefined) {
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
  private _healthCheck = new WorkloadStatusHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }

  // internal_name - computed: true, optional: false, required: false
  public get internalName() {
    return this.getStringAttribute('internal_name');
  }

  // load_balancer - computed: true, optional: false, required: false
  private _loadBalancer = new WorkloadStatusLoadBalancerList(this, "load_balancer", false);
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
  private _resolvedImages = new WorkloadStatusResolvedImagesList(this, "resolved_images", false);
  public get resolvedImages() {
    return this._resolvedImages;
  }
}

export class WorkloadStatusList extends cdktf.ComplexList {

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
  public get(index: number): WorkloadStatusOutputReference {
    return new WorkloadStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerGpuCustom {
  /**
  * Number of GPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#quantity Workload#quantity}
  */
  readonly quantity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#resource Workload#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#runtime_class Workload#runtime_class}
  */
  readonly runtimeClass?: string;
}

export function workloadContainerGpuCustomToTerraform(struct?: WorkloadContainerGpuCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantity: cdktf.numberToTerraform(struct!.quantity),
    resource: cdktf.stringToTerraform(struct!.resource),
    runtime_class: cdktf.stringToTerraform(struct!.runtimeClass),
  }
}


export function workloadContainerGpuCustomToHclTerraform(struct?: WorkloadContainerGpuCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_class: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerGpuCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerGpuCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._runtimeClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClass = this._runtimeClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerGpuCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantity = undefined;
      this._resource = undefined;
      this._runtimeClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantity = value.quantity;
      this._resource = value.resource;
      this._runtimeClass = value.runtimeClass;
    }
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // runtime_class - computed: false, optional: true, required: false
  private _runtimeClass?: string; 
  public get runtimeClass() {
    return this.getStringAttribute('runtime_class');
  }
  public set runtimeClass(value: string) {
    this._runtimeClass = value;
  }
  public resetRuntimeClass() {
    this._runtimeClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassInput() {
    return this._runtimeClass;
  }
}

export class WorkloadContainerGpuCustomList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerGpuCustom[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerGpuCustomOutputReference {
    return new WorkloadContainerGpuCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerGpuNvidia {
  /**
  * GPU Model (i.e.: t4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#model Workload#model}
  */
  readonly model: string;
  /**
  * Number of GPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#quantity Workload#quantity}
  */
  readonly quantity: number;
}

export function workloadContainerGpuNvidiaToTerraform(struct?: WorkloadContainerGpuNvidia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktf.stringToTerraform(struct!.model),
    quantity: cdktf.numberToTerraform(struct!.quantity),
  }
}


export function workloadContainerGpuNvidiaToHclTerraform(struct?: WorkloadContainerGpuNvidia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerGpuNvidiaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerGpuNvidia | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerGpuNvidia | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._model = undefined;
      this._quantity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._model = value.model;
      this._quantity = value.quantity;
    }
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // quantity - computed: false, optional: false, required: true
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }
}

export class WorkloadContainerGpuNvidiaList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerGpuNvidia[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerGpuNvidiaOutputReference {
    return new WorkloadContainerGpuNvidiaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLifecyclePostStartExec {
  /**
  * Command and arguments executed immediately after the container is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#command Workload#command}
  */
  readonly command: string[];
}

export function workloadContainerLifecyclePostStartExecToTerraform(struct?: WorkloadContainerLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function workloadContainerLifecyclePostStartExecToHclTerraform(struct?: WorkloadContainerLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLifecyclePostStartExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerLifecyclePostStartExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}

export class WorkloadContainerLifecyclePostStartExecList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLifecyclePostStartExec[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLifecyclePostStartExecOutputReference {
    return new WorkloadContainerLifecyclePostStartExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLifecyclePostStart {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#exec Workload#exec}
  */
  readonly exec?: WorkloadContainerLifecyclePostStartExec[] | cdktf.IResolvable;
}

export function workloadContainerLifecyclePostStartToTerraform(struct?: WorkloadContainerLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(workloadContainerLifecyclePostStartExecToTerraform, true)(struct!.exec),
  }
}


export function workloadContainerLifecyclePostStartToHclTerraform(struct?: WorkloadContainerLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.listMapperHcl(workloadContainerLifecyclePostStartExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLifecyclePostStartExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLifecyclePostStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLifecyclePostStart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadContainerLifecyclePostStart | cdktf.IResolvable | undefined) {
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
  private _exec = new WorkloadContainerLifecyclePostStartExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: WorkloadContainerLifecyclePostStartExec[] | cdktf.IResolvable) {
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

export class WorkloadContainerLifecyclePostStartList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLifecyclePostStart[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLifecyclePostStartOutputReference {
    return new WorkloadContainerLifecyclePostStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLifecyclePreStopExec {
  /**
  * Command and arguments executed immediately before the container is stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#command Workload#command}
  */
  readonly command: string[];
}

export function workloadContainerLifecyclePreStopExecToTerraform(struct?: WorkloadContainerLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function workloadContainerLifecyclePreStopExecToHclTerraform(struct?: WorkloadContainerLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLifecyclePreStopExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerLifecyclePreStopExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}

export class WorkloadContainerLifecyclePreStopExecList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLifecyclePreStopExec[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLifecyclePreStopExecOutputReference {
    return new WorkloadContainerLifecyclePreStopExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLifecyclePreStop {
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#exec Workload#exec}
  */
  readonly exec?: WorkloadContainerLifecyclePreStopExec[] | cdktf.IResolvable;
}

export function workloadContainerLifecyclePreStopToTerraform(struct?: WorkloadContainerLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: cdktf.listMapper(workloadContainerLifecyclePreStopExecToTerraform, true)(struct!.exec),
  }
}


export function workloadContainerLifecyclePreStopToHclTerraform(struct?: WorkloadContainerLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: cdktf.listMapperHcl(workloadContainerLifecyclePreStopExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLifecyclePreStopExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLifecyclePreStopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLifecyclePreStop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadContainerLifecyclePreStop | cdktf.IResolvable | undefined) {
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
  private _exec = new WorkloadContainerLifecyclePreStopExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: WorkloadContainerLifecyclePreStopExec[] | cdktf.IResolvable) {
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

export class WorkloadContainerLifecyclePreStopList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLifecyclePreStop[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLifecyclePreStopOutputReference {
    return new WorkloadContainerLifecyclePreStopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLifecycle {
  /**
  * post_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#post_start Workload#post_start}
  */
  readonly postStart?: WorkloadContainerLifecyclePostStart[] | cdktf.IResolvable;
  /**
  * pre_stop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#pre_stop Workload#pre_stop}
  */
  readonly preStop?: WorkloadContainerLifecyclePreStop[] | cdktf.IResolvable;
}

export function workloadContainerLifecycleToTerraform(struct?: WorkloadContainerLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: cdktf.listMapper(workloadContainerLifecyclePostStartToTerraform, true)(struct!.postStart),
    pre_stop: cdktf.listMapper(workloadContainerLifecyclePreStopToTerraform, true)(struct!.preStop),
  }
}


export function workloadContainerLifecycleToHclTerraform(struct?: WorkloadContainerLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: cdktf.listMapperHcl(workloadContainerLifecyclePostStartToHclTerraform, true)(struct!.postStart),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLifecyclePostStartList",
    },
    pre_stop: {
      value: cdktf.listMapperHcl(workloadContainerLifecyclePreStopToHclTerraform, true)(struct!.preStop),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLifecyclePreStopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLifecycleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLifecycle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadContainerLifecycle | cdktf.IResolvable | undefined) {
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
  private _postStart = new WorkloadContainerLifecyclePostStartList(this, "post_start", false);
  public get postStart() {
    return this._postStart;
  }
  public putPostStart(value: WorkloadContainerLifecyclePostStart[] | cdktf.IResolvable) {
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
  private _preStop = new WorkloadContainerLifecyclePreStopList(this, "pre_stop", false);
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: WorkloadContainerLifecyclePreStop[] | cdktf.IResolvable) {
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

export class WorkloadContainerLifecycleList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLifecycle[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLifecycleOutputReference {
    return new WorkloadContainerLifecycleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLivenessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#command Workload#command}
  */
  readonly command: string[];
}

export function workloadContainerLivenessProbeExecToTerraform(struct?: WorkloadContainerLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function workloadContainerLivenessProbeExecToHclTerraform(struct?: WorkloadContainerLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLivenessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerLivenessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}

export class WorkloadContainerLivenessProbeExecList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLivenessProbeExec[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLivenessProbeExecOutputReference {
    return new WorkloadContainerLivenessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLivenessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
}

export function workloadContainerLivenessProbeGrpcToTerraform(struct?: WorkloadContainerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function workloadContainerLivenessProbeGrpcToHclTerraform(struct?: WorkloadContainerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLivenessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerLivenessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class WorkloadContainerLivenessProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLivenessProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLivenessProbeGrpcOutputReference {
    return new WorkloadContainerLivenessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#http_headers Workload#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#path Workload#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scheme Workload#scheme}
  */
  readonly scheme?: string;
}

export function workloadContainerLivenessProbeHttpGetToTerraform(struct?: WorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function workloadContainerLivenessProbeHttpGetToHclTerraform(struct?: WorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class WorkloadContainerLivenessProbeHttpGetList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLivenessProbeHttpGet[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLivenessProbeHttpGetOutputReference {
    return new WorkloadContainerLivenessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLivenessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
}

export function workloadContainerLivenessProbeTcpSocketToTerraform(struct?: WorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function workloadContainerLivenessProbeTcpSocketToHclTerraform(struct?: WorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class WorkloadContainerLivenessProbeTcpSocketList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLivenessProbeTcpSocket[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLivenessProbeTcpSocketOutputReference {
    return new WorkloadContainerLivenessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#failure_threshold Workload#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#initial_delay_seconds Workload#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#period_seconds Workload#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#success_threshold Workload#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#timeout_seconds Workload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#exec Workload#exec}
  */
  readonly exec?: WorkloadContainerLivenessProbeExec[] | cdktf.IResolvable;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#grpc Workload#grpc}
  */
  readonly grpc?: WorkloadContainerLivenessProbeGrpc[] | cdktf.IResolvable;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#http_get Workload#http_get}
  */
  readonly httpGet?: WorkloadContainerLivenessProbeHttpGet[] | cdktf.IResolvable;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#tcp_socket Workload#tcp_socket}
  */
  readonly tcpSocket?: WorkloadContainerLivenessProbeTcpSocket[] | cdktf.IResolvable;
}

export function workloadContainerLivenessProbeToTerraform(struct?: WorkloadContainerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(workloadContainerLivenessProbeExecToTerraform, true)(struct!.exec),
    grpc: cdktf.listMapper(workloadContainerLivenessProbeGrpcToTerraform, true)(struct!.grpc),
    http_get: cdktf.listMapper(workloadContainerLivenessProbeHttpGetToTerraform, true)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(workloadContainerLivenessProbeTcpSocketToTerraform, true)(struct!.tcpSocket),
  }
}


export function workloadContainerLivenessProbeToHclTerraform(struct?: WorkloadContainerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: cdktf.listMapperHcl(workloadContainerLivenessProbeExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLivenessProbeExecList",
    },
    grpc: {
      value: cdktf.listMapperHcl(workloadContainerLivenessProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLivenessProbeGrpcList",
    },
    http_get: {
      value: cdktf.listMapperHcl(workloadContainerLivenessProbeHttpGetToHclTerraform, true)(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLivenessProbeHttpGetList",
    },
    tcp_socket: {
      value: cdktf.listMapperHcl(workloadContainerLivenessProbeTcpSocketToHclTerraform, true)(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLivenessProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerLivenessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
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

  public set internalValue(value: WorkloadContainerLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
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
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new WorkloadContainerLivenessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: WorkloadContainerLivenessProbeExec[] | cdktf.IResolvable) {
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
  private _grpc = new WorkloadContainerLivenessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: WorkloadContainerLivenessProbeGrpc[] | cdktf.IResolvable) {
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
  private _httpGet = new WorkloadContainerLivenessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: WorkloadContainerLivenessProbeHttpGet[] | cdktf.IResolvable) {
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
  private _tcpSocket = new WorkloadContainerLivenessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: WorkloadContainerLivenessProbeTcpSocket[] | cdktf.IResolvable) {
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

export class WorkloadContainerLivenessProbeList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerLivenessProbe[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerLivenessProbeOutputReference {
    return new WorkloadContainerLivenessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerMetrics {
  /**
  * Drop metrics that match given patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#drop_metrics Workload#drop_metrics}
  */
  readonly dropMetrics?: string[];
  /**
  * Path from container emitting custom metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#path Workload#path}
  */
  readonly path: string;
  /**
  * Port from container emitting custom metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port: number;
}

export function workloadContainerMetricsToTerraform(struct?: WorkloadContainerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dropMetrics),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function workloadContainerMetricsToHclTerraform(struct?: WorkloadContainerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dropMetrics),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropMetrics = this._dropMetrics;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropMetrics = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropMetrics = value.dropMetrics;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // drop_metrics - computed: false, optional: true, required: false
  private _dropMetrics?: string[]; 
  public get dropMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_metrics'));
  }
  public set dropMetrics(value: string[]) {
    this._dropMetrics = value;
  }
  public resetDropMetrics() {
    this._dropMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropMetricsInput() {
    return this._dropMetrics;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class WorkloadContainerMetricsList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerMetrics[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerMetricsOutputReference {
    return new WorkloadContainerMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerPorts {
  /**
  * Port to expose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#number Workload#number}
  */
  readonly number: number;
  /**
  * Protocol. Choice of: `http`, `http2`, `tcp`, or `grpc`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#protocol Workload#protocol}
  */
  readonly protocol?: string;
}

export function workloadContainerPortsToTerraform(struct?: WorkloadContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function workloadContainerPortsToHclTerraform(struct?: WorkloadContainerPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._protocol = value.protocol;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class WorkloadContainerPortsList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerPorts[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerPortsOutputReference {
    return new WorkloadContainerPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#command Workload#command}
  */
  readonly command: string[];
}

export function workloadContainerReadinessProbeExecToTerraform(struct?: WorkloadContainerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function workloadContainerReadinessProbeExecToHclTerraform(struct?: WorkloadContainerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}

export class WorkloadContainerReadinessProbeExecList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerReadinessProbeExec[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerReadinessProbeExecOutputReference {
    return new WorkloadContainerReadinessProbeExecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerReadinessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
}

export function workloadContainerReadinessProbeGrpcToTerraform(struct?: WorkloadContainerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function workloadContainerReadinessProbeGrpcToHclTerraform(struct?: WorkloadContainerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class WorkloadContainerReadinessProbeGrpcList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerReadinessProbeGrpc[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerReadinessProbeGrpcOutputReference {
    return new WorkloadContainerReadinessProbeGrpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#http_headers Workload#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#path Workload#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scheme Workload#scheme}
  */
  readonly scheme?: string;
}

export function workloadContainerReadinessProbeHttpGetToTerraform(struct?: WorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function workloadContainerReadinessProbeHttpGetToHclTerraform(struct?: WorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.httpHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpHeaders = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpHeaders = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
    }
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this.getStringMapAttribute('http_headers');
  }
  public set httpHeaders(value: { [key: string]: string }) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: true, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class WorkloadContainerReadinessProbeHttpGetList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerReadinessProbeHttpGet[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerReadinessProbeHttpGetOutputReference {
    return new WorkloadContainerReadinessProbeHttpGetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
}

export function workloadContainerReadinessProbeTcpSocketToTerraform(struct?: WorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function workloadContainerReadinessProbeTcpSocketToHclTerraform(struct?: WorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class WorkloadContainerReadinessProbeTcpSocketList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerReadinessProbeTcpSocket[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerReadinessProbeTcpSocketOutputReference {
    return new WorkloadContainerReadinessProbeTcpSocketOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#failure_threshold Workload#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#initial_delay_seconds Workload#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#period_seconds Workload#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#success_threshold Workload#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#timeout_seconds Workload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#exec Workload#exec}
  */
  readonly exec?: WorkloadContainerReadinessProbeExec[] | cdktf.IResolvable;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#grpc Workload#grpc}
  */
  readonly grpc?: WorkloadContainerReadinessProbeGrpc[] | cdktf.IResolvable;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#http_get Workload#http_get}
  */
  readonly httpGet?: WorkloadContainerReadinessProbeHttpGet[] | cdktf.IResolvable;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#tcp_socket Workload#tcp_socket}
  */
  readonly tcpSocket?: WorkloadContainerReadinessProbeTcpSocket[] | cdktf.IResolvable;
}

export function workloadContainerReadinessProbeToTerraform(struct?: WorkloadContainerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: cdktf.listMapper(workloadContainerReadinessProbeExecToTerraform, true)(struct!.exec),
    grpc: cdktf.listMapper(workloadContainerReadinessProbeGrpcToTerraform, true)(struct!.grpc),
    http_get: cdktf.listMapper(workloadContainerReadinessProbeHttpGetToTerraform, true)(struct!.httpGet),
    tcp_socket: cdktf.listMapper(workloadContainerReadinessProbeTcpSocketToTerraform, true)(struct!.tcpSocket),
  }
}


export function workloadContainerReadinessProbeToHclTerraform(struct?: WorkloadContainerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: cdktf.listMapperHcl(workloadContainerReadinessProbeExecToHclTerraform, true)(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerReadinessProbeExecList",
    },
    grpc: {
      value: cdktf.listMapperHcl(workloadContainerReadinessProbeGrpcToHclTerraform, true)(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerReadinessProbeGrpcList",
    },
    http_get: {
      value: cdktf.listMapperHcl(workloadContainerReadinessProbeHttpGetToHclTerraform, true)(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerReadinessProbeHttpGetList",
    },
    tcp_socket: {
      value: cdktf.listMapperHcl(workloadContainerReadinessProbeTcpSocketToHclTerraform, true)(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerReadinessProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerReadinessProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
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

  public set internalValue(value: WorkloadContainerReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
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
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: true, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: true, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new WorkloadContainerReadinessProbeExecList(this, "exec", false);
  public get exec() {
    return this._exec;
  }
  public putExec(value: WorkloadContainerReadinessProbeExec[] | cdktf.IResolvable) {
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
  private _grpc = new WorkloadContainerReadinessProbeGrpcList(this, "grpc", false);
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: WorkloadContainerReadinessProbeGrpc[] | cdktf.IResolvable) {
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
  private _httpGet = new WorkloadContainerReadinessProbeHttpGetList(this, "http_get", false);
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: WorkloadContainerReadinessProbeHttpGet[] | cdktf.IResolvable) {
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
  private _tcpSocket = new WorkloadContainerReadinessProbeTcpSocketList(this, "tcp_socket", false);
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: WorkloadContainerReadinessProbeTcpSocket[] | cdktf.IResolvable) {
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

export class WorkloadContainerReadinessProbeList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerReadinessProbe[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerReadinessProbeOutputReference {
    return new WorkloadContainerReadinessProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainerVolume {
  /**
  * File path added to workload pointing to the volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#path Workload#path}
  */
  readonly path: string;
  /**
  * Only applicable to persistent volumes, this determines what Control Plane will do when creating a new workload replica if a corresponding volume exists. Available Values: `retain`, `recycle`. Default: `retain`. **DEPRECATED - No longer being used.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#recovery_policy Workload#recovery_policy}
  */
  readonly recoveryPolicy?: string;
  /**
  * URI of a volume hosted at Control Plane (Volume Set) or at a cloud provider (AWS, Azure, GCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#uri Workload#uri}
  */
  readonly uri: string;
}

export function workloadContainerVolumeToTerraform(struct?: WorkloadContainerVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    recovery_policy: cdktf.stringToTerraform(struct!.recoveryPolicy),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function workloadContainerVolumeToHclTerraform(struct?: WorkloadContainerVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_policy: {
      value: cdktf.stringToHclTerraform(struct!.recoveryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainerVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._recoveryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryPolicy = this._recoveryPolicy;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadContainerVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._recoveryPolicy = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._recoveryPolicy = value.recoveryPolicy;
      this._uri = value.uri;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recovery_policy - computed: true, optional: true, required: false
  private _recoveryPolicy?: string; 
  public get recoveryPolicy() {
    return this.getStringAttribute('recovery_policy');
  }
  public set recoveryPolicy(value: string) {
    this._recoveryPolicy = value;
  }
  public resetRecoveryPolicy() {
    this._recoveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPolicyInput() {
    return this._recoveryPolicy;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class WorkloadContainerVolumeList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainerVolume[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerVolumeOutputReference {
    return new WorkloadContainerVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadContainer {
  /**
  * Command line arguments passed to the container at runtime. Replaces the CMD arguments of the running container. It is an ordered list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#args Workload#args}
  */
  readonly args?: string[];
  /**
  * Override the entry point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#command Workload#command}
  */
  readonly command?: string;
  /**
  * Reserved CPU of the workload when capacityAI is disabled. Maximum CPU when CapacityAI is enabled. Default: "50m".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#cpu Workload#cpu}
  */
  readonly cpu?: string;
  /**
  * Name-Value list of environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#env Workload#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * The full image and tag path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#image Workload#image}
  */
  readonly image: string;
  /**
  * Enables inheritance of GVC environment variables. A variable in spec.env will override a GVC variable with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#inherit_env Workload#inherit_env}
  */
  readonly inheritEnv?: boolean | cdktf.IResolvable;
  /**
  * Reserved memory of the workload when capacityAI is disabled. Maximum memory when CapacityAI is enabled. Default: "128Mi".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#memory Workload#memory}
  */
  readonly memory?: string;
  /**
  * Minimum CPU when capacity AI is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#min_cpu Workload#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Minimum memory when capacity AI is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#min_memory Workload#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#name Workload#name}
  */
  readonly name: string;
  /**
  * The port the container exposes. Only one container is allowed to specify a port. Min: `80`. Max: `65535`. Used by `serverless` Workload type. **DEPRECATED - Use `ports`.**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: number;
  /**
  * Override the working directory. Must be an absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#working_directory Workload#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * gpu_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#gpu_custom Workload#gpu_custom}
  */
  readonly gpuCustom?: WorkloadContainerGpuCustom[] | cdktf.IResolvable;
  /**
  * gpu_nvidia block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#gpu_nvidia Workload#gpu_nvidia}
  */
  readonly gpuNvidia?: WorkloadContainerGpuNvidia[] | cdktf.IResolvable;
  /**
  * lifecycle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#lifecycle Workload#lifecycle}
  */
  readonly lifecycle?: WorkloadContainerLifecycle[] | cdktf.IResolvable;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#liveness_probe Workload#liveness_probe}
  */
  readonly livenessProbe?: WorkloadContainerLivenessProbe[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metrics Workload#metrics}
  */
  readonly metrics?: WorkloadContainerMetrics[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#ports Workload#ports}
  */
  readonly ports?: WorkloadContainerPorts[] | cdktf.IResolvable;
  /**
  * readiness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#readiness_probe Workload#readiness_probe}
  */
  readonly readinessProbe?: WorkloadContainerReadinessProbe[] | cdktf.IResolvable;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#volume Workload#volume}
  */
  readonly volume?: WorkloadContainerVolume[] | cdktf.IResolvable;
}

export function workloadContainerToTerraform(struct?: WorkloadContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    inherit_env: cdktf.booleanToTerraform(struct!.inheritEnv),
    memory: cdktf.stringToTerraform(struct!.memory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    gpu_custom: cdktf.listMapper(workloadContainerGpuCustomToTerraform, true)(struct!.gpuCustom),
    gpu_nvidia: cdktf.listMapper(workloadContainerGpuNvidiaToTerraform, true)(struct!.gpuNvidia),
    lifecycle: cdktf.listMapper(workloadContainerLifecycleToTerraform, true)(struct!.lifecycle),
    liveness_probe: cdktf.listMapper(workloadContainerLivenessProbeToTerraform, true)(struct!.livenessProbe),
    metrics: cdktf.listMapper(workloadContainerMetricsToTerraform, true)(struct!.metrics),
    ports: cdktf.listMapper(workloadContainerPortsToTerraform, true)(struct!.ports),
    readiness_probe: cdktf.listMapper(workloadContainerReadinessProbeToTerraform, true)(struct!.readinessProbe),
    volume: cdktf.listMapper(workloadContainerVolumeToTerraform, true)(struct!.volume),
  }
}


export function workloadContainerToHclTerraform(struct?: WorkloadContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inherit_env: {
      value: cdktf.booleanToHclTerraform(struct!.inheritEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_custom: {
      value: cdktf.listMapperHcl(workloadContainerGpuCustomToHclTerraform, true)(struct!.gpuCustom),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerGpuCustomList",
    },
    gpu_nvidia: {
      value: cdktf.listMapperHcl(workloadContainerGpuNvidiaToHclTerraform, true)(struct!.gpuNvidia),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerGpuNvidiaList",
    },
    lifecycle: {
      value: cdktf.listMapperHcl(workloadContainerLifecycleToHclTerraform, true)(struct!.lifecycle),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLifecycleList",
    },
    liveness_probe: {
      value: cdktf.listMapperHcl(workloadContainerLivenessProbeToHclTerraform, true)(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerLivenessProbeList",
    },
    metrics: {
      value: cdktf.listMapperHcl(workloadContainerMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerMetricsList",
    },
    ports: {
      value: cdktf.listMapperHcl(workloadContainerPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerPortsList",
    },
    readiness_probe: {
      value: cdktf.listMapperHcl(workloadContainerReadinessProbeToHclTerraform, true)(struct!.readinessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadContainerReadinessProbeList",
    },
    volume: {
      value: cdktf.listMapperHcl(workloadContainerVolumeToHclTerraform, true)(struct!.volume),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadContainerVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inheritEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritEnv = this._inheritEnv;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
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

  public set internalValue(value: WorkloadContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._cpu = undefined;
      this._env = undefined;
      this._image = undefined;
      this._inheritEnv = undefined;
      this._memory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._name = undefined;
      this._port = undefined;
      this._workingDirectory = undefined;
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
      this._args = value.args;
      this._command = value.command;
      this._cpu = value.cpu;
      this._env = value.env;
      this._image = value.image;
      this._inheritEnv = value.inheritEnv;
      this._memory = value.memory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._name = value.name;
      this._port = value.port;
      this._workingDirectory = value.workingDirectory;
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

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inherit_env - computed: true, optional: true, required: false
  private _inheritEnv?: boolean | cdktf.IResolvable; 
  public get inheritEnv() {
    return this.getBooleanAttribute('inherit_env');
  }
  public set inheritEnv(value: boolean | cdktf.IResolvable) {
    this._inheritEnv = value;
  }
  public resetInheritEnv() {
    this._inheritEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritEnvInput() {
    return this._inheritEnv;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: false, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // gpu_custom - computed: false, optional: true, required: false
  private _gpuCustom = new WorkloadContainerGpuCustomList(this, "gpu_custom", false);
  public get gpuCustom() {
    return this._gpuCustom;
  }
  public putGpuCustom(value: WorkloadContainerGpuCustom[] | cdktf.IResolvable) {
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
  private _gpuNvidia = new WorkloadContainerGpuNvidiaList(this, "gpu_nvidia", false);
  public get gpuNvidia() {
    return this._gpuNvidia;
  }
  public putGpuNvidia(value: WorkloadContainerGpuNvidia[] | cdktf.IResolvable) {
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
  private _lifecycle = new WorkloadContainerLifecycleList(this, "lifecycle", false);
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: WorkloadContainerLifecycle[] | cdktf.IResolvable) {
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
  private _livenessProbe = new WorkloadContainerLivenessProbeList(this, "liveness_probe", false);
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: WorkloadContainerLivenessProbe[] | cdktf.IResolvable) {
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
  private _metrics = new WorkloadContainerMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: WorkloadContainerMetrics[] | cdktf.IResolvable) {
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
  private _ports = new WorkloadContainerPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: WorkloadContainerPorts[] | cdktf.IResolvable) {
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
  private _readinessProbe = new WorkloadContainerReadinessProbeList(this, "readiness_probe", false);
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: WorkloadContainerReadinessProbe[] | cdktf.IResolvable) {
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
  private _volume = new WorkloadContainerVolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: WorkloadContainerVolume[] | cdktf.IResolvable) {
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

export class WorkloadContainerList extends cdktf.ComplexList {
  public internalValue? : WorkloadContainer[] | cdktf.IResolvable

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
  public get(index: number): WorkloadContainerOutputReference {
    return new WorkloadContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadFirewallSpecExternalHttpInboundHeaderFilter {
  /**
  * A list of regular expressions to match for allowed header values. Headers that do not match ANY of these values will be filtered and will not reach the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#allowed_values Workload#allowed_values}
  */
  readonly allowedValues?: string[];
  /**
  * A list of regular expressions to match for blocked header values. Headers that match ANY of these values will be filtered and will not reach the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#blocked_values Workload#blocked_values}
  */
  readonly blockedValues?: string[];
  /**
  * The header to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#key Workload#key}
  */
  readonly key: string;
}

export function workloadFirewallSpecExternalHttpInboundHeaderFilterToTerraform(struct?: WorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedValues),
    blocked_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedValues),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function workloadFirewallSpecExternalHttpInboundHeaderFilterToHclTerraform(struct?: WorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    blocked_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadFirewallSpecExternalHttpInboundHeaderFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    if (this._blockedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedValues = this._blockedValues;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadFirewallSpecExternalHttpInboundHeaderFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValues = undefined;
      this._blockedValues = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValues = value.allowedValues;
      this._blockedValues = value.blockedValues;
      this._key = value.key;
    }
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues?: string[]; 
  public get allowedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_values'));
  }
  public set allowedValues(value: string[]) {
    this._allowedValues = value;
  }
  public resetAllowedValues() {
    this._allowedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }

  // blocked_values - computed: false, optional: true, required: false
  private _blockedValues?: string[]; 
  public get blockedValues() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_values'));
  }
  public set blockedValues(value: string[]) {
    this._blockedValues = value;
  }
  public resetBlockedValues() {
    this._blockedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedValuesInput() {
    return this._blockedValues;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class WorkloadFirewallSpecExternalHttpInboundHeaderFilterList extends cdktf.ComplexList {
  public internalValue? : WorkloadFirewallSpecExternalHttpInboundHeaderFilter[] | cdktf.IResolvable

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
  public get(index: number): WorkloadFirewallSpecExternalHttpInboundHeaderFilterOutputReference {
    return new WorkloadFirewallSpecExternalHttpInboundHeaderFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadFirewallSpecExternalHttp {
  /**
  * inbound_header_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#inbound_header_filter Workload#inbound_header_filter}
  */
  readonly inboundHeaderFilter?: WorkloadFirewallSpecExternalHttpInboundHeaderFilter[] | cdktf.IResolvable;
}

export function workloadFirewallSpecExternalHttpToTerraform(struct?: WorkloadFirewallSpecExternalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_header_filter: cdktf.listMapper(workloadFirewallSpecExternalHttpInboundHeaderFilterToTerraform, true)(struct!.inboundHeaderFilter),
  }
}


export function workloadFirewallSpecExternalHttpToHclTerraform(struct?: WorkloadFirewallSpecExternalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound_header_filter: {
      value: cdktf.listMapperHcl(workloadFirewallSpecExternalHttpInboundHeaderFilterToHclTerraform, true)(struct!.inboundHeaderFilter),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadFirewallSpecExternalHttpInboundHeaderFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadFirewallSpecExternalHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadFirewallSpecExternalHttp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadFirewallSpecExternalHttp | cdktf.IResolvable | undefined) {
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
  private _inboundHeaderFilter = new WorkloadFirewallSpecExternalHttpInboundHeaderFilterList(this, "inbound_header_filter", true);
  public get inboundHeaderFilter() {
    return this._inboundHeaderFilter;
  }
  public putInboundHeaderFilter(value: WorkloadFirewallSpecExternalHttpInboundHeaderFilter[] | cdktf.IResolvable) {
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

export class WorkloadFirewallSpecExternalHttpList extends cdktf.ComplexList {
  public internalValue? : WorkloadFirewallSpecExternalHttp[] | cdktf.IResolvable

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
  public get(index: number): WorkloadFirewallSpecExternalHttpOutputReference {
    return new WorkloadFirewallSpecExternalHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadFirewallSpecExternalOutboundAllowPort {
  /**
  * Port number. Max: 65000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#number Workload#number}
  */
  readonly number: number;
  /**
  * Either `http`, `https` or `tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#protocol Workload#protocol}
  */
  readonly protocol: string;
}

export function workloadFirewallSpecExternalOutboundAllowPortToTerraform(struct?: WorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function workloadFirewallSpecExternalOutboundAllowPortToHclTerraform(struct?: WorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadFirewallSpecExternalOutboundAllowPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadFirewallSpecExternalOutboundAllowPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._protocol = value.protocol;
    }
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class WorkloadFirewallSpecExternalOutboundAllowPortList extends cdktf.ComplexList {
  public internalValue? : WorkloadFirewallSpecExternalOutboundAllowPort[] | cdktf.IResolvable

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
  public get(index: number): WorkloadFirewallSpecExternalOutboundAllowPortOutputReference {
    return new WorkloadFirewallSpecExternalOutboundAllowPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadFirewallSpecExternal {
  /**
  * The list of ipv4/ipv6 addresses or cidr blocks that are allowed to access this workload. No external access is allowed by default. Specify '0.0.0.0/0' to allow access to the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#inbound_allow_cidr Workload#inbound_allow_cidr}
  */
  readonly inboundAllowCidr?: string[];
  /**
  * The list of ipv4/ipv6 addresses or cidr blocks that are NOT allowed to access this workload. Addresses in the allow list will only be allowed if they do not exist in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#inbound_blocked_cidr Workload#inbound_blocked_cidr}
  */
  readonly inboundBlockedCidr?: string[];
  /**
  * The list of ipv4/ipv6 addresses or cidr blocks that this workload is allowed reach. No outbound access is allowed by default. Specify '0.0.0.0/0' to allow outbound access to the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#outbound_allow_cidr Workload#outbound_allow_cidr}
  */
  readonly outboundAllowCidr?: string[];
  /**
  * The list of public hostnames that this workload is allowed to reach. No outbound access is allowed by default. A wildcard `*` is allowed on the prefix of the hostname only, ex: `*.amazonaws.com`. Use `outboundAllowCIDR` to allow access to all external websites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#outbound_allow_hostname Workload#outbound_allow_hostname}
  */
  readonly outboundAllowHostname?: string[];
  /**
  * The list of ipv4/ipv6 addresses or cidr blocks that this workload is NOT allowed to reach. Addresses in the allow list will only be allowed if they do not exist in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#outbound_blocked_cidr Workload#outbound_blocked_cidr}
  */
  readonly outboundBlockedCidr?: string[];
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#http Workload#http}
  */
  readonly http?: WorkloadFirewallSpecExternalHttp[] | cdktf.IResolvable;
  /**
  * outbound_allow_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#outbound_allow_port Workload#outbound_allow_port}
  */
  readonly outboundAllowPort?: WorkloadFirewallSpecExternalOutboundAllowPort[] | cdktf.IResolvable;
}

export function workloadFirewallSpecExternalToTerraform(struct?: WorkloadFirewallSpecExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_allow_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inboundAllowCidr),
    inbound_blocked_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inboundBlockedCidr),
    outbound_allow_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outboundAllowCidr),
    outbound_allow_hostname: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outboundAllowHostname),
    outbound_blocked_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outboundBlockedCidr),
    http: cdktf.listMapper(workloadFirewallSpecExternalHttpToTerraform, true)(struct!.http),
    outbound_allow_port: cdktf.listMapper(workloadFirewallSpecExternalOutboundAllowPortToTerraform, true)(struct!.outboundAllowPort),
  }
}


export function workloadFirewallSpecExternalToHclTerraform(struct?: WorkloadFirewallSpecExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound_allow_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inboundAllowCidr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inbound_blocked_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inboundBlockedCidr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbound_allow_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outboundAllowCidr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbound_allow_hostname: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outboundAllowHostname),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    outbound_blocked_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outboundBlockedCidr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    http: {
      value: cdktf.listMapperHcl(workloadFirewallSpecExternalHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadFirewallSpecExternalHttpList",
    },
    outbound_allow_port: {
      value: cdktf.listMapperHcl(workloadFirewallSpecExternalOutboundAllowPortToHclTerraform, true)(struct!.outboundAllowPort),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadFirewallSpecExternalOutboundAllowPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadFirewallSpecExternalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadFirewallSpecExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundAllowCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAllowCidr = this._inboundAllowCidr;
    }
    if (this._inboundBlockedCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundBlockedCidr = this._inboundBlockedCidr;
    }
    if (this._outboundAllowCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAllowCidr = this._outboundAllowCidr;
    }
    if (this._outboundAllowHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAllowHostname = this._outboundAllowHostname;
    }
    if (this._outboundBlockedCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundBlockedCidr = this._outboundBlockedCidr;
    }
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

  public set internalValue(value: WorkloadFirewallSpecExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundAllowCidr = undefined;
      this._inboundBlockedCidr = undefined;
      this._outboundAllowCidr = undefined;
      this._outboundAllowHostname = undefined;
      this._outboundBlockedCidr = undefined;
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
      this._inboundAllowCidr = value.inboundAllowCidr;
      this._inboundBlockedCidr = value.inboundBlockedCidr;
      this._outboundAllowCidr = value.outboundAllowCidr;
      this._outboundAllowHostname = value.outboundAllowHostname;
      this._outboundBlockedCidr = value.outboundBlockedCidr;
      this._http.internalValue = value.http;
      this._outboundAllowPort.internalValue = value.outboundAllowPort;
    }
  }

  // inbound_allow_cidr - computed: true, optional: true, required: false
  private _inboundAllowCidr?: string[]; 
  public get inboundAllowCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_allow_cidr'));
  }
  public set inboundAllowCidr(value: string[]) {
    this._inboundAllowCidr = value;
  }
  public resetInboundAllowCidr() {
    this._inboundAllowCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAllowCidrInput() {
    return this._inboundAllowCidr;
  }

  // inbound_blocked_cidr - computed: true, optional: true, required: false
  private _inboundBlockedCidr?: string[]; 
  public get inboundBlockedCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_blocked_cidr'));
  }
  public set inboundBlockedCidr(value: string[]) {
    this._inboundBlockedCidr = value;
  }
  public resetInboundBlockedCidr() {
    this._inboundBlockedCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundBlockedCidrInput() {
    return this._inboundBlockedCidr;
  }

  // outbound_allow_cidr - computed: true, optional: true, required: false
  private _outboundAllowCidr?: string[]; 
  public get outboundAllowCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_allow_cidr'));
  }
  public set outboundAllowCidr(value: string[]) {
    this._outboundAllowCidr = value;
  }
  public resetOutboundAllowCidr() {
    this._outboundAllowCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAllowCidrInput() {
    return this._outboundAllowCidr;
  }

  // outbound_allow_hostname - computed: true, optional: true, required: false
  private _outboundAllowHostname?: string[]; 
  public get outboundAllowHostname() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_allow_hostname'));
  }
  public set outboundAllowHostname(value: string[]) {
    this._outboundAllowHostname = value;
  }
  public resetOutboundAllowHostname() {
    this._outboundAllowHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAllowHostnameInput() {
    return this._outboundAllowHostname;
  }

  // outbound_blocked_cidr - computed: true, optional: true, required: false
  private _outboundBlockedCidr?: string[]; 
  public get outboundBlockedCidr() {
    return cdktf.Fn.tolist(this.getListAttribute('outbound_blocked_cidr'));
  }
  public set outboundBlockedCidr(value: string[]) {
    this._outboundBlockedCidr = value;
  }
  public resetOutboundBlockedCidr() {
    this._outboundBlockedCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundBlockedCidrInput() {
    return this._outboundBlockedCidr;
  }

  // http - computed: false, optional: true, required: false
  private _http = new WorkloadFirewallSpecExternalHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: WorkloadFirewallSpecExternalHttp[] | cdktf.IResolvable) {
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
  private _outboundAllowPort = new WorkloadFirewallSpecExternalOutboundAllowPortList(this, "outbound_allow_port", true);
  public get outboundAllowPort() {
    return this._outboundAllowPort;
  }
  public putOutboundAllowPort(value: WorkloadFirewallSpecExternalOutboundAllowPort[] | cdktf.IResolvable) {
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

export class WorkloadFirewallSpecExternalList extends cdktf.ComplexList {
  public internalValue? : WorkloadFirewallSpecExternal[] | cdktf.IResolvable

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
  public get(index: number): WorkloadFirewallSpecExternalOutputReference {
    return new WorkloadFirewallSpecExternalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadFirewallSpecInternal {
  /**
  * Used to control the internal firewall configuration and mutual tls. Allowed Values: "none", "same-gvc", "same-org", "workload-list".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#inbound_allow_type Workload#inbound_allow_type}
  */
  readonly inboundAllowType?: string;
  /**
  * A list of specific workloads which are allowed to access this workload internally. This list is only used if the 'inboundAllowType' is set to 'workload-list'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#inbound_allow_workload Workload#inbound_allow_workload}
  */
  readonly inboundAllowWorkload?: string[];
}

export function workloadFirewallSpecInternalToTerraform(struct?: WorkloadFirewallSpecInternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inbound_allow_type: cdktf.stringToTerraform(struct!.inboundAllowType),
    inbound_allow_workload: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inboundAllowWorkload),
  }
}


export function workloadFirewallSpecInternalToHclTerraform(struct?: WorkloadFirewallSpecInternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inbound_allow_type: {
      value: cdktf.stringToHclTerraform(struct!.inboundAllowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_allow_workload: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inboundAllowWorkload),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadFirewallSpecInternalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadFirewallSpecInternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inboundAllowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAllowType = this._inboundAllowType;
    }
    if (this._inboundAllowWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundAllowWorkload = this._inboundAllowWorkload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadFirewallSpecInternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inboundAllowType = undefined;
      this._inboundAllowWorkload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inboundAllowType = value.inboundAllowType;
      this._inboundAllowWorkload = value.inboundAllowWorkload;
    }
  }

  // inbound_allow_type - computed: true, optional: true, required: false
  private _inboundAllowType?: string; 
  public get inboundAllowType() {
    return this.getStringAttribute('inbound_allow_type');
  }
  public set inboundAllowType(value: string) {
    this._inboundAllowType = value;
  }
  public resetInboundAllowType() {
    this._inboundAllowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAllowTypeInput() {
    return this._inboundAllowType;
  }

  // inbound_allow_workload - computed: true, optional: true, required: false
  private _inboundAllowWorkload?: string[]; 
  public get inboundAllowWorkload() {
    return cdktf.Fn.tolist(this.getListAttribute('inbound_allow_workload'));
  }
  public set inboundAllowWorkload(value: string[]) {
    this._inboundAllowWorkload = value;
  }
  public resetInboundAllowWorkload() {
    this._inboundAllowWorkload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundAllowWorkloadInput() {
    return this._inboundAllowWorkload;
  }
}

export class WorkloadFirewallSpecInternalList extends cdktf.ComplexList {
  public internalValue? : WorkloadFirewallSpecInternal[] | cdktf.IResolvable

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
  public get(index: number): WorkloadFirewallSpecInternalOutputReference {
    return new WorkloadFirewallSpecInternalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadFirewallSpec {
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#external Workload#external}
  */
  readonly external?: WorkloadFirewallSpecExternal[] | cdktf.IResolvable;
  /**
  * internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#internal Workload#internal}
  */
  readonly internal?: WorkloadFirewallSpecInternal[] | cdktf.IResolvable;
}

export function workloadFirewallSpecToTerraform(struct?: WorkloadFirewallSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.listMapper(workloadFirewallSpecExternalToTerraform, true)(struct!.external),
    internal: cdktf.listMapper(workloadFirewallSpecInternalToTerraform, true)(struct!.internal),
  }
}


export function workloadFirewallSpecToHclTerraform(struct?: WorkloadFirewallSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.listMapperHcl(workloadFirewallSpecExternalToHclTerraform, true)(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadFirewallSpecExternalList",
    },
    internal: {
      value: cdktf.listMapperHcl(workloadFirewallSpecInternalToHclTerraform, true)(struct!.internal),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadFirewallSpecInternalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadFirewallSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadFirewallSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadFirewallSpec | cdktf.IResolvable | undefined) {
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
  private _external = new WorkloadFirewallSpecExternalList(this, "external", false);
  public get external() {
    return this._external;
  }
  public putExternal(value: WorkloadFirewallSpecExternal[] | cdktf.IResolvable) {
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
  private _internal = new WorkloadFirewallSpecInternalList(this, "internal", false);
  public get internal() {
    return this._internal;
  }
  public putInternal(value: WorkloadFirewallSpecInternal[] | cdktf.IResolvable) {
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

export class WorkloadFirewallSpecList extends cdktf.ComplexList {
  public internalValue? : WorkloadFirewallSpec[] | cdktf.IResolvable

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
  public get(index: number): WorkloadFirewallSpecOutputReference {
    return new WorkloadFirewallSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadJob {
  /**
  * The maximum number of seconds Control Plane will wait for the job to complete. If a job does not succeed or fail in the allotted time, Control Plane will stop the job, moving it into the Removed status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#active_deadline_seconds Workload#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Either 'Forbid' or 'Replace'. This determines what Control Plane will do when the schedule requires a job to start, while a prior instance of the job is still running. Enum: [ Forbid, Replace ] Default: `Forbid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#concurrency_policy Workload#concurrency_policy}
  */
  readonly concurrencyPolicy?: string;
  /**
  * The maximum number of completed job instances to display. This should be an integer between 1 and 10. Default: `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#history_limit Workload#history_limit}
  */
  readonly historyLimit?: number;
  /**
  * Either 'OnFailure' or 'Never'. This determines what Control Plane will do when a job instance fails. Enum: [ OnFailure, Never ] Default: `Never`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#restart_policy Workload#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * A standard cron [schedule expression](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#schedule-syntax) used to determine when your job should execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#schedule Workload#schedule}
  */
  readonly schedule: string;
}

export function workloadJobToTerraform(struct?: WorkloadJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    history_limit: cdktf.numberToTerraform(struct!.historyLimit),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    schedule: cdktf.stringToTerraform(struct!.schedule),
  }
}


export function workloadJobToHclTerraform(struct?: WorkloadJob | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    history_limit: {
      value: cdktf.numberToHclTerraform(struct!.historyLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadJob | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._historyLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.historyLimit = this._historyLimit;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadJob | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = undefined;
      this._concurrencyPolicy = undefined;
      this._historyLimit = undefined;
      this._restartPolicy = undefined;
      this._schedule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._historyLimit = value.historyLimit;
      this._restartPolicy = value.restartPolicy;
      this._schedule = value.schedule;
    }
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // concurrency_policy - computed: true, optional: true, required: false
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  public resetConcurrencyPolicy() {
    this._concurrencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // history_limit - computed: true, optional: true, required: false
  private _historyLimit?: number; 
  public get historyLimit() {
    return this.getNumberAttribute('history_limit');
  }
  public set historyLimit(value: number) {
    this._historyLimit = value;
  }
  public resetHistoryLimit() {
    this._historyLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyLimitInput() {
    return this._historyLimit;
  }

  // restart_policy - computed: true, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}

export class WorkloadJobList extends cdktf.ComplexList {
  public internalValue? : WorkloadJob[] | cdktf.IResolvable

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
  public get(index: number): WorkloadJobOutputReference {
    return new WorkloadJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLoadBalancerDirectPort {
  /**
  * The port on the container tha will receive this traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#container_port Workload#container_port}
  */
  readonly containerPort?: number;
  /**
  * The port that is available publicly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#external_port Workload#external_port}
  */
  readonly externalPort: number;
  /**
  * The protocol that is exposed publicly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#protocol Workload#protocol}
  */
  readonly protocol: string;
  /**
  * Overrides the default `https` url scheme that will be used for links in the UI and status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scheme Workload#scheme}
  */
  readonly scheme?: string;
}

export function workloadLoadBalancerDirectPortToTerraform(struct?: WorkloadLoadBalancerDirectPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    external_port: cdktf.numberToTerraform(struct!.externalPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function workloadLoadBalancerDirectPortToHclTerraform(struct?: WorkloadLoadBalancerDirectPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_port: {
      value: cdktf.numberToHclTerraform(struct!.externalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLoadBalancerDirectPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLoadBalancerDirectPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._externalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPort = this._externalPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLoadBalancerDirectPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._externalPort = undefined;
      this._protocol = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._externalPort = value.externalPort;
      this._protocol = value.protocol;
      this._scheme = value.scheme;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // external_port - computed: false, optional: false, required: true
  private _externalPort?: number; 
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }
  public set externalPort(value: number) {
    this._externalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}

export class WorkloadLoadBalancerDirectPortList extends cdktf.ComplexList {
  public internalValue? : WorkloadLoadBalancerDirectPort[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLoadBalancerDirectPortOutputReference {
    return new WorkloadLoadBalancerDirectPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLoadBalancerDirect {
  /**
  * When disabled, this load balancer will be stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#enabled Workload#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#ipset Workload#ipset}
  */
  readonly ipset?: string;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#port Workload#port}
  */
  readonly port?: WorkloadLoadBalancerDirectPort[] | cdktf.IResolvable;
}

export function workloadLoadBalancerDirectToTerraform(struct?: WorkloadLoadBalancerDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ipset: cdktf.stringToTerraform(struct!.ipset),
    port: cdktf.listMapper(workloadLoadBalancerDirectPortToTerraform, true)(struct!.port),
  }
}


export function workloadLoadBalancerDirectToHclTerraform(struct?: WorkloadLoadBalancerDirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipset: {
      value: cdktf.stringToHclTerraform(struct!.ipset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.listMapperHcl(workloadLoadBalancerDirectPortToHclTerraform, true)(struct!.port),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadLoadBalancerDirectPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLoadBalancerDirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLoadBalancerDirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipset = this._ipset;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLoadBalancerDirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipset = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipset = value.ipset;
      this._port.internalValue = value.port;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ipset - computed: false, optional: true, required: false
  private _ipset?: string; 
  public get ipset() {
    return this.getStringAttribute('ipset');
  }
  public set ipset(value: string) {
    this._ipset = value;
  }
  public resetIpset() {
    this._ipset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetInput() {
    return this._ipset;
  }

  // port - computed: false, optional: true, required: false
  private _port = new WorkloadLoadBalancerDirectPortList(this, "port", true);
  public get port() {
    return this._port;
  }
  public putPort(value: WorkloadLoadBalancerDirectPort[] | cdktf.IResolvable) {
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

export class WorkloadLoadBalancerDirectList extends cdktf.ComplexList {
  public internalValue? : WorkloadLoadBalancerDirect[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLoadBalancerDirectOutputReference {
    return new WorkloadLoadBalancerDirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLoadBalancerGeoLocationHeaders {
  /**
  * The geo asn header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#asn Workload#asn}
  */
  readonly asn?: string;
  /**
  * The geo city header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#city Workload#city}
  */
  readonly city?: string;
  /**
  * The geo country header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#country Workload#country}
  */
  readonly country?: string;
  /**
  * The geo region header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#region Workload#region}
  */
  readonly region?: string;
}

export function workloadLoadBalancerGeoLocationHeadersToTerraform(struct?: WorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function workloadLoadBalancerGeoLocationHeadersToHclTerraform(struct?: WorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLoadBalancerGeoLocationHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLoadBalancerGeoLocationHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._city = undefined;
      this._country = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._city = value.city;
      this._country = value.country;
      this._region = value.region;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class WorkloadLoadBalancerGeoLocationHeadersList extends cdktf.ComplexList {
  public internalValue? : WorkloadLoadBalancerGeoLocationHeaders[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLoadBalancerGeoLocationHeadersOutputReference {
    return new WorkloadLoadBalancerGeoLocationHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLoadBalancerGeoLocation {
  /**
  * When enabled, geo location headers will be included on inbound http requests. Existing headers will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#enabled Workload#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#headers Workload#headers}
  */
  readonly headers?: WorkloadLoadBalancerGeoLocationHeaders[] | cdktf.IResolvable;
}

export function workloadLoadBalancerGeoLocationToTerraform(struct?: WorkloadLoadBalancerGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    headers: cdktf.listMapper(workloadLoadBalancerGeoLocationHeadersToTerraform, true)(struct!.headers),
  }
}


export function workloadLoadBalancerGeoLocationToHclTerraform(struct?: WorkloadLoadBalancerGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(workloadLoadBalancerGeoLocationHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLoadBalancerGeoLocationHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLoadBalancerGeoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLoadBalancerGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLoadBalancerGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._headers.internalValue = value.headers;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new WorkloadLoadBalancerGeoLocationHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: WorkloadLoadBalancerGeoLocationHeaders[] | cdktf.IResolvable) {
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

export class WorkloadLoadBalancerGeoLocationList extends cdktf.ComplexList {
  public internalValue? : WorkloadLoadBalancerGeoLocation[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLoadBalancerGeoLocationOutputReference {
    return new WorkloadLoadBalancerGeoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLoadBalancer {
  /**
  * When enabled, individual replicas of the workload can be reached directly using the subdomain prefix replica-<index>. For example, replica-0.my-workload.my-gvc.cpln.local or replica-0.my-workload-<gvc-alias>.cpln.app - Can only be used with stateful workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#replica_direct Workload#replica_direct}
  */
  readonly replicaDirect?: boolean | cdktf.IResolvable;
  /**
  * direct block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#direct Workload#direct}
  */
  readonly direct?: WorkloadLoadBalancerDirect[] | cdktf.IResolvable;
  /**
  * geo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#geo_location Workload#geo_location}
  */
  readonly geoLocation?: WorkloadLoadBalancerGeoLocation[] | cdktf.IResolvable;
}

export function workloadLoadBalancerToTerraform(struct?: WorkloadLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_direct: cdktf.booleanToTerraform(struct!.replicaDirect),
    direct: cdktf.listMapper(workloadLoadBalancerDirectToTerraform, true)(struct!.direct),
    geo_location: cdktf.listMapper(workloadLoadBalancerGeoLocationToTerraform, true)(struct!.geoLocation),
  }
}


export function workloadLoadBalancerToHclTerraform(struct?: WorkloadLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replica_direct: {
      value: cdktf.booleanToHclTerraform(struct!.replicaDirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    direct: {
      value: cdktf.listMapperHcl(workloadLoadBalancerDirectToHclTerraform, true)(struct!.direct),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLoadBalancerDirectList",
    },
    geo_location: {
      value: cdktf.listMapperHcl(workloadLoadBalancerGeoLocationToHclTerraform, true)(struct!.geoLocation),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLoadBalancerGeoLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicaDirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaDirect = this._replicaDirect;
    }
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

  public set internalValue(value: WorkloadLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicaDirect = undefined;
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
      this._replicaDirect = value.replicaDirect;
      this._direct.internalValue = value.direct;
      this._geoLocation.internalValue = value.geoLocation;
    }
  }

  // replica_direct - computed: true, optional: true, required: false
  private _replicaDirect?: boolean | cdktf.IResolvable; 
  public get replicaDirect() {
    return this.getBooleanAttribute('replica_direct');
  }
  public set replicaDirect(value: boolean | cdktf.IResolvable) {
    this._replicaDirect = value;
  }
  public resetReplicaDirect() {
    this._replicaDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaDirectInput() {
    return this._replicaDirect;
  }

  // direct - computed: false, optional: true, required: false
  private _direct = new WorkloadLoadBalancerDirectList(this, "direct", false);
  public get direct() {
    return this._direct;
  }
  public putDirect(value: WorkloadLoadBalancerDirect[] | cdktf.IResolvable) {
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
  private _geoLocation = new WorkloadLoadBalancerGeoLocationList(this, "geo_location", false);
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: WorkloadLoadBalancerGeoLocation[] | cdktf.IResolvable) {
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

export class WorkloadLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : WorkloadLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLoadBalancerOutputReference {
    return new WorkloadLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers {
  /**
  * Defines the new activation target value to scale on for the composed metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#activation_target Workload#activation_target}
  */
  readonly activationTarget?: string;
  /**
  * Composes metrics together and allows them to be modified/manipulated. It accepts mathematical/conditional statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#formula Workload#formula}
  */
  readonly formula?: string;
  /**
  * Defines metric type used for this new composite-metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric_type Workload#metric_type}
  */
  readonly metricType?: string;
  /**
  * Defines new target value to scale on for the composed metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#target Workload#target}
  */
  readonly target?: string;
}

export function workloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_target: cdktf.stringToTerraform(struct!.activationTarget),
    formula: cdktf.stringToTerraform(struct!.formula),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function workloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_target: {
      value: cdktf.stringToHclTerraform(struct!.activationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationTarget = this._activationTarget;
    }
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationTarget = undefined;
      this._formula = undefined;
      this._metricType = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationTarget = value.activationTarget;
      this._formula = value.formula;
      this._metricType = value.metricType;
      this._target = value.target;
    }
  }

  // activation_target - computed: false, optional: true, required: false
  private _activationTarget?: string; 
  public get activationTarget() {
    return this.getStringAttribute('activation_target');
  }
  public set activationTarget(value: string) {
    this._activationTarget = value;
  }
  public resetActivationTarget() {
    this._activationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationTargetInput() {
    return this._activationTarget;
  }

  // formula - computed: false, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference {
    return new WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscalingKedaAdvanced {
  /**
  * scaling_modifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scaling_modifiers Workload#scaling_modifiers}
  */
  readonly scalingModifiers?: WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable;
}

export function workloadLocalOptionsAutoscalingKedaAdvancedToTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaling_modifiers: cdktf.listMapper(workloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform, true)(struct!.scalingModifiers),
  }
}


export function workloadLocalOptionsAutoscalingKedaAdvancedToHclTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaling_modifiers: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform, true)(struct!.scalingModifiers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingKedaAdvancedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadLocalOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined) {
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
  private _scalingModifiers = new WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiersList(this, "scaling_modifiers", false);
  public get scalingModifiers() {
    return this._scalingModifiers;
  }
  public putScalingModifiers(value: WorkloadLocalOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable) {
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

export class WorkloadLocalOptionsAutoscalingKedaAdvancedList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingKedaAdvancedOutputReference {
    return new WorkloadLocalOptionsAutoscalingKedaAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef {
  /**
  * The name of secret listed in the GVC spec.keda.secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#name Workload#name}
  */
  readonly name: string;
}

export function workloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference {
    return new WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscalingKedaTrigger {
  /**
  * The configuration parameters that the trigger requires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metadata Workload#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The type of metric to be used for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric_type Workload#metric_type}
  */
  readonly metricType?: string;
  /**
  * An optional name for the trigger. If not provided, a default name will be generated based on the trigger type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#name Workload#name}
  */
  readonly name?: string;
  /**
  * The type of KEDA trigger, e.g "prometheus", "aws-sqs", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#type Workload#type}
  */
  readonly type: string;
  /**
  * Enables caching of metric values during polling interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#use_cached_metrics Workload#use_cached_metrics}
  */
  readonly useCachedMetrics?: boolean | cdktf.IResolvable;
  /**
  * authentication_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#authentication_ref Workload#authentication_ref}
  */
  readonly authenticationRef?: WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable;
}

export function workloadLocalOptionsAutoscalingKedaTriggerToTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    use_cached_metrics: cdktf.booleanToTerraform(struct!.useCachedMetrics),
    authentication_ref: cdktf.listMapper(workloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform, true)(struct!.authenticationRef),
  }
}


export function workloadLocalOptionsAutoscalingKedaTriggerToHclTerraform(struct?: WorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cached_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.useCachedMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication_ref: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform, true)(struct!.authenticationRef),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingKedaTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCachedMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCachedMetrics = this._useCachedMetrics;
    }
    if (this._authenticationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRef = this._authenticationRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLocalOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._type = undefined;
      this._useCachedMetrics = undefined;
      this._authenticationRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._metricType = value.metricType;
      this._name = value.name;
      this._type = value.type;
      this._useCachedMetrics = value.useCachedMetrics;
      this._authenticationRef.internalValue = value.authenticationRef;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_cached_metrics - computed: false, optional: true, required: false
  private _useCachedMetrics?: boolean | cdktf.IResolvable; 
  public get useCachedMetrics() {
    return this.getBooleanAttribute('use_cached_metrics');
  }
  public set useCachedMetrics(value: boolean | cdktf.IResolvable) {
    this._useCachedMetrics = value;
  }
  public resetUseCachedMetrics() {
    this._useCachedMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCachedMetricsInput() {
    return this._useCachedMetrics;
  }

  // authentication_ref - computed: false, optional: true, required: false
  private _authenticationRef = new WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRefList(this, "authentication_ref", false);
  public get authenticationRef() {
    return this._authenticationRef;
  }
  public putAuthenticationRef(value: WorkloadLocalOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable) {
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

export class WorkloadLocalOptionsAutoscalingKedaTriggerList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingKedaTriggerOutputReference {
    return new WorkloadLocalOptionsAutoscalingKedaTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscalingKeda {
  /**
  * The cooldown period in seconds after scaling down to 0 replicas before KEDA will allow scaling up again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#cooldown_period Workload#cooldown_period}
  */
  readonly cooldownPeriod?: number;
  /**
  * The initial cooldown period in seconds after scaling down to 0 replicas before KEDA will allow scaling up again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#initial_cooldown_period Workload#initial_cooldown_period}
  */
  readonly initialCooldownPeriod?: number;
  /**
  * The interval in seconds at which KEDA will poll the external metrics to determine if scaling is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#polling_interval Workload#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * advanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#advanced Workload#advanced}
  */
  readonly advanced?: WorkloadLocalOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#trigger Workload#trigger}
  */
  readonly trigger?: WorkloadLocalOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable;
}

export function workloadLocalOptionsAutoscalingKedaToTerraform(struct?: WorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_period: cdktf.numberToTerraform(struct!.cooldownPeriod),
    initial_cooldown_period: cdktf.numberToTerraform(struct!.initialCooldownPeriod),
    polling_interval: cdktf.numberToTerraform(struct!.pollingInterval),
    advanced: cdktf.listMapper(workloadLocalOptionsAutoscalingKedaAdvancedToTerraform, true)(struct!.advanced),
    trigger: cdktf.listMapper(workloadLocalOptionsAutoscalingKedaTriggerToTerraform, true)(struct!.trigger),
  }
}


export function workloadLocalOptionsAutoscalingKedaToHclTerraform(struct?: WorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.cooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.initialCooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advanced: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingKedaAdvancedToHclTerraform, true)(struct!.advanced),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingKedaAdvancedList",
    },
    trigger: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingKedaTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingKedaTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingKedaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._initialCooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCooldownPeriod = this._initialCooldownPeriod;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
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

  public set internalValue(value: WorkloadLocalOptionsAutoscalingKeda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldownPeriod = undefined;
      this._initialCooldownPeriod = undefined;
      this._pollingInterval = undefined;
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
      this._cooldownPeriod = value.cooldownPeriod;
      this._initialCooldownPeriod = value.initialCooldownPeriod;
      this._pollingInterval = value.pollingInterval;
      this._advanced.internalValue = value.advanced;
      this._trigger.internalValue = value.trigger;
    }
  }

  // cooldown_period - computed: false, optional: true, required: false
  private _cooldownPeriod?: number; 
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: number) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // initial_cooldown_period - computed: false, optional: true, required: false
  private _initialCooldownPeriod?: number; 
  public get initialCooldownPeriod() {
    return this.getNumberAttribute('initial_cooldown_period');
  }
  public set initialCooldownPeriod(value: number) {
    this._initialCooldownPeriod = value;
  }
  public resetInitialCooldownPeriod() {
    this._initialCooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCooldownPeriodInput() {
    return this._initialCooldownPeriod;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new WorkloadLocalOptionsAutoscalingKedaAdvancedList(this, "advanced", false);
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: WorkloadLocalOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable) {
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
  private _trigger = new WorkloadLocalOptionsAutoscalingKedaTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: WorkloadLocalOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable) {
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

export class WorkloadLocalOptionsAutoscalingKedaList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscalingKeda[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingKedaOutputReference {
    return new WorkloadLocalOptionsAutoscalingKedaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscalingMulti {
  /**
  * Valid values: `cpu` or `memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric Workload#metric}
  */
  readonly metric?: string;
  /**
  * Control Plane will scale the number of replicas for this deployment up/down in order to be as close as possible to the target metric across all replicas of a deployment. Min: `1`. Max: `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#target Workload#target}
  */
  readonly target?: number;
}

export function workloadLocalOptionsAutoscalingMultiToTerraform(struct?: WorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function workloadLocalOptionsAutoscalingMultiToHclTerraform(struct?: WorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingMultiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLocalOptionsAutoscalingMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._target = value.target;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // target - computed: false, optional: true, required: false
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class WorkloadLocalOptionsAutoscalingMultiList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscalingMulti[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingMultiOutputReference {
    return new WorkloadLocalOptionsAutoscalingMultiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsAutoscaling {
  /**
  * A hard maximum for the number of concurrent requests allowed to a replica. If no replicas are available to fulfill the request then it will be queued until a replica with capacity is available and delivered as soon as one is available again. Capacity can be available from requests completing or when a new replica is available from scale out.Min: `0`. Max: `1000`. Default `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#max_concurrency Workload#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * The maximum allowed number of replicas. Min: `0`. Default `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#max_scale Workload#max_scale}
  */
  readonly maxScale?: number;
  /**
  * Valid values: `concurrency`, `cpu`, `memory`, `rps`, `latency`, `keda` or `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric Workload#metric}
  */
  readonly metric?: string;
  /**
  * For metrics represented as a distribution (e.g. latency) a percentile within the distribution must be chosen as the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric_percentile Workload#metric_percentile}
  */
  readonly metricPercentile?: string;
  /**
  * The minimum allowed number of replicas. Control Plane can scale the workload down to 0 when there is no traffic and scale up immediately to fulfill new requests. Min: `0`. Max: `max_scale`. Default `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#min_scale Workload#min_scale}
  */
  readonly minScale?: number;
  /**
  * The amount of time (in seconds) with no requests received before a workload is scaled to 0. Min: `30`. Max: `3600`. Default: `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scale_to_zero_delay Workload#scale_to_zero_delay}
  */
  readonly scaleToZeroDelay?: number;
  /**
  * Control Plane will scale the number of replicas for this deployment up/down in order to be as close as possible to the target metric across all replicas of a deployment. Min: `1`. Max: `20000`. Default: `95`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#target Workload#target}
  */
  readonly target?: number;
  /**
  * keda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#keda Workload#keda}
  */
  readonly keda?: WorkloadLocalOptionsAutoscalingKeda[] | cdktf.IResolvable;
  /**
  * multi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#multi Workload#multi}
  */
  readonly multi?: WorkloadLocalOptionsAutoscalingMulti[] | cdktf.IResolvable;
}

export function workloadLocalOptionsAutoscalingToTerraform(struct?: WorkloadLocalOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    max_scale: cdktf.numberToTerraform(struct!.maxScale),
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_percentile: cdktf.stringToTerraform(struct!.metricPercentile),
    min_scale: cdktf.numberToTerraform(struct!.minScale),
    scale_to_zero_delay: cdktf.numberToTerraform(struct!.scaleToZeroDelay),
    target: cdktf.numberToTerraform(struct!.target),
    keda: cdktf.listMapper(workloadLocalOptionsAutoscalingKedaToTerraform, true)(struct!.keda),
    multi: cdktf.listMapper(workloadLocalOptionsAutoscalingMultiToTerraform, true)(struct!.multi),
  }
}


export function workloadLocalOptionsAutoscalingToHclTerraform(struct?: WorkloadLocalOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_scale: {
      value: cdktf.numberToHclTerraform(struct!.maxScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_percentile: {
      value: cdktf.stringToHclTerraform(struct!.metricPercentile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_scale: {
      value: cdktf.numberToHclTerraform(struct!.minScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_to_zero_delay: {
      value: cdktf.numberToHclTerraform(struct!.scaleToZeroDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keda: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingKedaToHclTerraform, true)(struct!.keda),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingKedaList",
    },
    multi: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingMultiToHclTerraform, true)(struct!.multi),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingMultiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._maxScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScale = this._maxScale;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricPercentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPercentile = this._metricPercentile;
    }
    if (this._minScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScale = this._minScale;
    }
    if (this._scaleToZeroDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleToZeroDelay = this._scaleToZeroDelay;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
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

  public set internalValue(value: WorkloadLocalOptionsAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrency = undefined;
      this._maxScale = undefined;
      this._metric = undefined;
      this._metricPercentile = undefined;
      this._minScale = undefined;
      this._scaleToZeroDelay = undefined;
      this._target = undefined;
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
      this._maxConcurrency = value.maxConcurrency;
      this._maxScale = value.maxScale;
      this._metric = value.metric;
      this._metricPercentile = value.metricPercentile;
      this._minScale = value.minScale;
      this._scaleToZeroDelay = value.scaleToZeroDelay;
      this._target = value.target;
      this._keda.internalValue = value.keda;
      this._multi.internalValue = value.multi;
    }
  }

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_scale - computed: true, optional: true, required: false
  private _maxScale?: number; 
  public get maxScale() {
    return this.getNumberAttribute('max_scale');
  }
  public set maxScale(value: number) {
    this._maxScale = value;
  }
  public resetMaxScale() {
    this._maxScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleInput() {
    return this._maxScale;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_percentile - computed: false, optional: true, required: false
  private _metricPercentile?: string; 
  public get metricPercentile() {
    return this.getStringAttribute('metric_percentile');
  }
  public set metricPercentile(value: string) {
    this._metricPercentile = value;
  }
  public resetMetricPercentile() {
    this._metricPercentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPercentileInput() {
    return this._metricPercentile;
  }

  // min_scale - computed: true, optional: true, required: false
  private _minScale?: number; 
  public get minScale() {
    return this.getNumberAttribute('min_scale');
  }
  public set minScale(value: number) {
    this._minScale = value;
  }
  public resetMinScale() {
    this._minScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScaleInput() {
    return this._minScale;
  }

  // scale_to_zero_delay - computed: true, optional: true, required: false
  private _scaleToZeroDelay?: number; 
  public get scaleToZeroDelay() {
    return this.getNumberAttribute('scale_to_zero_delay');
  }
  public set scaleToZeroDelay(value: number) {
    this._scaleToZeroDelay = value;
  }
  public resetScaleToZeroDelay() {
    this._scaleToZeroDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleToZeroDelayInput() {
    return this._scaleToZeroDelay;
  }

  // target - computed: true, optional: true, required: false
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // keda - computed: false, optional: true, required: false
  private _keda = new WorkloadLocalOptionsAutoscalingKedaList(this, "keda", false);
  public get keda() {
    return this._keda;
  }
  public putKeda(value: WorkloadLocalOptionsAutoscalingKeda[] | cdktf.IResolvable) {
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
  private _multi = new WorkloadLocalOptionsAutoscalingMultiList(this, "multi", false);
  public get multi() {
    return this._multi;
  }
  public putMulti(value: WorkloadLocalOptionsAutoscalingMulti[] | cdktf.IResolvable) {
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

export class WorkloadLocalOptionsAutoscalingList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsAutoscaling[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsAutoscalingOutputReference {
    return new WorkloadLocalOptionsAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptionsMultiZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#enabled Workload#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function workloadLocalOptionsMultiZoneToTerraform(struct?: WorkloadLocalOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function workloadLocalOptionsMultiZoneToHclTerraform(struct?: WorkloadLocalOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsMultiZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptionsMultiZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadLocalOptionsMultiZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class WorkloadLocalOptionsMultiZoneList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptionsMultiZone[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsMultiZoneOutputReference {
    return new WorkloadLocalOptionsMultiZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadLocalOptions {
  /**
  * Capacity AI. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#capacity_ai Workload#capacity_ai}
  */
  readonly capacityAi?: boolean | cdktf.IResolvable;
  /**
  * The highest frequency capacity AI is allowed to update resource reservations when CapacityAI is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#capacity_ai_update_minutes Workload#capacity_ai_update_minutes}
  */
  readonly capacityAiUpdateMinutes?: number;
  /**
  * Debug mode. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#debug Workload#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Valid only for `local_options`. Override options for a specific location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#location Workload#location}
  */
  readonly location: string;
  /**
  * Workload suspend. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#suspend Workload#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds. Default: `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#timeout_seconds Workload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#autoscaling Workload#autoscaling}
  */
  readonly autoscaling?: WorkloadLocalOptionsAutoscaling[] | cdktf.IResolvable;
  /**
  * multi_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#multi_zone Workload#multi_zone}
  */
  readonly multiZone?: WorkloadLocalOptionsMultiZone[] | cdktf.IResolvable;
}

export function workloadLocalOptionsToTerraform(struct?: WorkloadLocalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_ai: cdktf.booleanToTerraform(struct!.capacityAi),
    capacity_ai_update_minutes: cdktf.numberToTerraform(struct!.capacityAiUpdateMinutes),
    debug: cdktf.booleanToTerraform(struct!.debug),
    location: cdktf.stringToTerraform(struct!.location),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    autoscaling: cdktf.listMapper(workloadLocalOptionsAutoscalingToTerraform, true)(struct!.autoscaling),
    multi_zone: cdktf.listMapper(workloadLocalOptionsMultiZoneToTerraform, true)(struct!.multiZone),
  }
}


export function workloadLocalOptionsToHclTerraform(struct?: WorkloadLocalOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_ai: {
      value: cdktf.booleanToHclTerraform(struct!.capacityAi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capacity_ai_update_minutes: {
      value: cdktf.numberToHclTerraform(struct!.capacityAiUpdateMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling: {
      value: cdktf.listMapperHcl(workloadLocalOptionsAutoscalingToHclTerraform, true)(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsAutoscalingList",
    },
    multi_zone: {
      value: cdktf.listMapperHcl(workloadLocalOptionsMultiZoneToHclTerraform, true)(struct!.multiZone),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadLocalOptionsMultiZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadLocalOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadLocalOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityAi !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityAi = this._capacityAi;
    }
    if (this._capacityAiUpdateMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityAiUpdateMinutes = this._capacityAiUpdateMinutes;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
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

  public set internalValue(value: WorkloadLocalOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityAi = undefined;
      this._capacityAiUpdateMinutes = undefined;
      this._debug = undefined;
      this._location = undefined;
      this._suspend = undefined;
      this._timeoutSeconds = undefined;
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
      this._capacityAi = value.capacityAi;
      this._capacityAiUpdateMinutes = value.capacityAiUpdateMinutes;
      this._debug = value.debug;
      this._location = value.location;
      this._suspend = value.suspend;
      this._timeoutSeconds = value.timeoutSeconds;
      this._autoscaling.internalValue = value.autoscaling;
      this._multiZone.internalValue = value.multiZone;
    }
  }

  // capacity_ai - computed: true, optional: true, required: false
  private _capacityAi?: boolean | cdktf.IResolvable; 
  public get capacityAi() {
    return this.getBooleanAttribute('capacity_ai');
  }
  public set capacityAi(value: boolean | cdktf.IResolvable) {
    this._capacityAi = value;
  }
  public resetCapacityAi() {
    this._capacityAi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAiInput() {
    return this._capacityAi;
  }

  // capacity_ai_update_minutes - computed: false, optional: true, required: false
  private _capacityAiUpdateMinutes?: number; 
  public get capacityAiUpdateMinutes() {
    return this.getNumberAttribute('capacity_ai_update_minutes');
  }
  public set capacityAiUpdateMinutes(value: number) {
    this._capacityAiUpdateMinutes = value;
  }
  public resetCapacityAiUpdateMinutes() {
    this._capacityAiUpdateMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAiUpdateMinutesInput() {
    return this._capacityAiUpdateMinutes;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // suspend - computed: true, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new WorkloadLocalOptionsAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: WorkloadLocalOptionsAutoscaling[] | cdktf.IResolvable) {
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
  private _multiZone = new WorkloadLocalOptionsMultiZoneList(this, "multi_zone", false);
  public get multiZone() {
    return this._multiZone;
  }
  public putMultiZone(value: WorkloadLocalOptionsMultiZone[] | cdktf.IResolvable) {
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

export class WorkloadLocalOptionsList extends cdktf.ComplexList {
  public internalValue? : WorkloadLocalOptions[] | cdktf.IResolvable

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
  public get(index: number): WorkloadLocalOptionsOutputReference {
    return new WorkloadLocalOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers {
  /**
  * Defines the new activation target value to scale on for the composed metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#activation_target Workload#activation_target}
  */
  readonly activationTarget?: string;
  /**
  * Composes metrics together and allows them to be modified/manipulated. It accepts mathematical/conditional statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#formula Workload#formula}
  */
  readonly formula?: string;
  /**
  * Defines metric type used for this new composite-metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric_type Workload#metric_type}
  */
  readonly metricType?: string;
  /**
  * Defines new target value to scale on for the composed metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#target Workload#target}
  */
  readonly target?: string;
}

export function workloadOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform(struct?: WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_target: cdktf.stringToTerraform(struct!.activationTarget),
    formula: cdktf.stringToTerraform(struct!.formula),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function workloadOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform(struct?: WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_target: {
      value: cdktf.stringToHclTerraform(struct!.activationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationTarget = this._activationTarget;
    }
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationTarget = undefined;
      this._formula = undefined;
      this._metricType = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationTarget = value.activationTarget;
      this._formula = value.formula;
      this._metricType = value.metricType;
      this._target = value.target;
    }
  }

  // activation_target - computed: false, optional: true, required: false
  private _activationTarget?: string; 
  public get activationTarget() {
    return this.getStringAttribute('activation_target');
  }
  public set activationTarget(value: string) {
    this._activationTarget = value;
  }
  public resetActivationTarget() {
    this._activationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationTargetInput() {
    return this._activationTarget;
  }

  // formula - computed: false, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class WorkloadOptionsAutoscalingKedaAdvancedScalingModifiersList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference {
    return new WorkloadOptionsAutoscalingKedaAdvancedScalingModifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscalingKedaAdvanced {
  /**
  * scaling_modifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scaling_modifiers Workload#scaling_modifiers}
  */
  readonly scalingModifiers?: WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable;
}

export function workloadOptionsAutoscalingKedaAdvancedToTerraform(struct?: WorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scaling_modifiers: cdktf.listMapper(workloadOptionsAutoscalingKedaAdvancedScalingModifiersToTerraform, true)(struct!.scalingModifiers),
  }
}


export function workloadOptionsAutoscalingKedaAdvancedToHclTerraform(struct?: WorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scaling_modifiers: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingKedaAdvancedScalingModifiersToHclTerraform, true)(struct!.scalingModifiers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingKedaAdvancedScalingModifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingKedaAdvancedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkloadOptionsAutoscalingKedaAdvanced | cdktf.IResolvable | undefined) {
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
  private _scalingModifiers = new WorkloadOptionsAutoscalingKedaAdvancedScalingModifiersList(this, "scaling_modifiers", false);
  public get scalingModifiers() {
    return this._scalingModifiers;
  }
  public putScalingModifiers(value: WorkloadOptionsAutoscalingKedaAdvancedScalingModifiers[] | cdktf.IResolvable) {
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

export class WorkloadOptionsAutoscalingKedaAdvancedList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingKedaAdvancedOutputReference {
    return new WorkloadOptionsAutoscalingKedaAdvancedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef {
  /**
  * The name of secret listed in the GVC spec.keda.secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#name Workload#name}
  */
  readonly name: string;
}

export function workloadOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform(struct?: WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function workloadOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform(struct?: WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class WorkloadOptionsAutoscalingKedaTriggerAuthenticationRefList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference {
    return new WorkloadOptionsAutoscalingKedaTriggerAuthenticationRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscalingKedaTrigger {
  /**
  * The configuration parameters that the trigger requires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metadata Workload#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The type of metric to be used for scaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric_type Workload#metric_type}
  */
  readonly metricType?: string;
  /**
  * An optional name for the trigger. If not provided, a default name will be generated based on the trigger type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#name Workload#name}
  */
  readonly name?: string;
  /**
  * The type of KEDA trigger, e.g "prometheus", "aws-sqs", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#type Workload#type}
  */
  readonly type: string;
  /**
  * Enables caching of metric values during polling interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#use_cached_metrics Workload#use_cached_metrics}
  */
  readonly useCachedMetrics?: boolean | cdktf.IResolvable;
  /**
  * authentication_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#authentication_ref Workload#authentication_ref}
  */
  readonly authenticationRef?: WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable;
}

export function workloadOptionsAutoscalingKedaTriggerToTerraform(struct?: WorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    use_cached_metrics: cdktf.booleanToTerraform(struct!.useCachedMetrics),
    authentication_ref: cdktf.listMapper(workloadOptionsAutoscalingKedaTriggerAuthenticationRefToTerraform, true)(struct!.authenticationRef),
  }
}


export function workloadOptionsAutoscalingKedaTriggerToHclTerraform(struct?: WorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cached_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.useCachedMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    authentication_ref: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingKedaTriggerAuthenticationRefToHclTerraform, true)(struct!.authenticationRef),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingKedaTriggerAuthenticationRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingKedaTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCachedMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCachedMetrics = this._useCachedMetrics;
    }
    if (this._authenticationRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRef = this._authenticationRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadOptionsAutoscalingKedaTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._metricType = undefined;
      this._name = undefined;
      this._type = undefined;
      this._useCachedMetrics = undefined;
      this._authenticationRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._metricType = value.metricType;
      this._name = value.name;
      this._type = value.type;
      this._useCachedMetrics = value.useCachedMetrics;
      this._authenticationRef.internalValue = value.authenticationRef;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_cached_metrics - computed: false, optional: true, required: false
  private _useCachedMetrics?: boolean | cdktf.IResolvable; 
  public get useCachedMetrics() {
    return this.getBooleanAttribute('use_cached_metrics');
  }
  public set useCachedMetrics(value: boolean | cdktf.IResolvable) {
    this._useCachedMetrics = value;
  }
  public resetUseCachedMetrics() {
    this._useCachedMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCachedMetricsInput() {
    return this._useCachedMetrics;
  }

  // authentication_ref - computed: false, optional: true, required: false
  private _authenticationRef = new WorkloadOptionsAutoscalingKedaTriggerAuthenticationRefList(this, "authentication_ref", false);
  public get authenticationRef() {
    return this._authenticationRef;
  }
  public putAuthenticationRef(value: WorkloadOptionsAutoscalingKedaTriggerAuthenticationRef[] | cdktf.IResolvable) {
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

export class WorkloadOptionsAutoscalingKedaTriggerList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingKedaTriggerOutputReference {
    return new WorkloadOptionsAutoscalingKedaTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscalingKeda {
  /**
  * The cooldown period in seconds after scaling down to 0 replicas before KEDA will allow scaling up again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#cooldown_period Workload#cooldown_period}
  */
  readonly cooldownPeriod?: number;
  /**
  * The initial cooldown period in seconds after scaling down to 0 replicas before KEDA will allow scaling up again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#initial_cooldown_period Workload#initial_cooldown_period}
  */
  readonly initialCooldownPeriod?: number;
  /**
  * The interval in seconds at which KEDA will poll the external metrics to determine if scaling is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#polling_interval Workload#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * advanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#advanced Workload#advanced}
  */
  readonly advanced?: WorkloadOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#trigger Workload#trigger}
  */
  readonly trigger?: WorkloadOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable;
}

export function workloadOptionsAutoscalingKedaToTerraform(struct?: WorkloadOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_period: cdktf.numberToTerraform(struct!.cooldownPeriod),
    initial_cooldown_period: cdktf.numberToTerraform(struct!.initialCooldownPeriod),
    polling_interval: cdktf.numberToTerraform(struct!.pollingInterval),
    advanced: cdktf.listMapper(workloadOptionsAutoscalingKedaAdvancedToTerraform, true)(struct!.advanced),
    trigger: cdktf.listMapper(workloadOptionsAutoscalingKedaTriggerToTerraform, true)(struct!.trigger),
  }
}


export function workloadOptionsAutoscalingKedaToHclTerraform(struct?: WorkloadOptionsAutoscalingKeda | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.cooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_cooldown_period: {
      value: cdktf.numberToHclTerraform(struct!.initialCooldownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advanced: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingKedaAdvancedToHclTerraform, true)(struct!.advanced),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingKedaAdvancedList",
    },
    trigger: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingKedaTriggerToHclTerraform, true)(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingKedaTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingKedaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscalingKeda | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._initialCooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCooldownPeriod = this._initialCooldownPeriod;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
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

  public set internalValue(value: WorkloadOptionsAutoscalingKeda | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cooldownPeriod = undefined;
      this._initialCooldownPeriod = undefined;
      this._pollingInterval = undefined;
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
      this._cooldownPeriod = value.cooldownPeriod;
      this._initialCooldownPeriod = value.initialCooldownPeriod;
      this._pollingInterval = value.pollingInterval;
      this._advanced.internalValue = value.advanced;
      this._trigger.internalValue = value.trigger;
    }
  }

  // cooldown_period - computed: false, optional: true, required: false
  private _cooldownPeriod?: number; 
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: number) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // initial_cooldown_period - computed: false, optional: true, required: false
  private _initialCooldownPeriod?: number; 
  public get initialCooldownPeriod() {
    return this.getNumberAttribute('initial_cooldown_period');
  }
  public set initialCooldownPeriod(value: number) {
    this._initialCooldownPeriod = value;
  }
  public resetInitialCooldownPeriod() {
    this._initialCooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCooldownPeriodInput() {
    return this._initialCooldownPeriod;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced = new WorkloadOptionsAutoscalingKedaAdvancedList(this, "advanced", false);
  public get advanced() {
    return this._advanced;
  }
  public putAdvanced(value: WorkloadOptionsAutoscalingKedaAdvanced[] | cdktf.IResolvable) {
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
  private _trigger = new WorkloadOptionsAutoscalingKedaTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: WorkloadOptionsAutoscalingKedaTrigger[] | cdktf.IResolvable) {
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

export class WorkloadOptionsAutoscalingKedaList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscalingKeda[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingKedaOutputReference {
    return new WorkloadOptionsAutoscalingKedaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscalingMulti {
  /**
  * Valid values: `cpu` or `memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric Workload#metric}
  */
  readonly metric?: string;
  /**
  * Control Plane will scale the number of replicas for this deployment up/down in order to be as close as possible to the target metric across all replicas of a deployment. Min: `1`. Max: `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#target Workload#target}
  */
  readonly target?: number;
}

export function workloadOptionsAutoscalingMultiToTerraform(struct?: WorkloadOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function workloadOptionsAutoscalingMultiToHclTerraform(struct?: WorkloadOptionsAutoscalingMulti | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingMultiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscalingMulti | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadOptionsAutoscalingMulti | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._target = value.target;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // target - computed: false, optional: true, required: false
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class WorkloadOptionsAutoscalingMultiList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscalingMulti[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingMultiOutputReference {
    return new WorkloadOptionsAutoscalingMultiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsAutoscaling {
  /**
  * A hard maximum for the number of concurrent requests allowed to a replica. If no replicas are available to fulfill the request then it will be queued until a replica with capacity is available and delivered as soon as one is available again. Capacity can be available from requests completing or when a new replica is available from scale out.Min: `0`. Max: `1000`. Default `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#max_concurrency Workload#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * The maximum allowed number of replicas. Min: `0`. Default `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#max_scale Workload#max_scale}
  */
  readonly maxScale?: number;
  /**
  * Valid values: `concurrency`, `cpu`, `memory`, `rps`, `latency`, `keda` or `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric Workload#metric}
  */
  readonly metric?: string;
  /**
  * For metrics represented as a distribution (e.g. latency) a percentile within the distribution must be chosen as the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#metric_percentile Workload#metric_percentile}
  */
  readonly metricPercentile?: string;
  /**
  * The minimum allowed number of replicas. Control Plane can scale the workload down to 0 when there is no traffic and scale up immediately to fulfill new requests. Min: `0`. Max: `max_scale`. Default `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#min_scale Workload#min_scale}
  */
  readonly minScale?: number;
  /**
  * The amount of time (in seconds) with no requests received before a workload is scaled to 0. Min: `30`. Max: `3600`. Default: `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scale_to_zero_delay Workload#scale_to_zero_delay}
  */
  readonly scaleToZeroDelay?: number;
  /**
  * Control Plane will scale the number of replicas for this deployment up/down in order to be as close as possible to the target metric across all replicas of a deployment. Min: `1`. Max: `20000`. Default: `95`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#target Workload#target}
  */
  readonly target?: number;
  /**
  * keda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#keda Workload#keda}
  */
  readonly keda?: WorkloadOptionsAutoscalingKeda[] | cdktf.IResolvable;
  /**
  * multi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#multi Workload#multi}
  */
  readonly multi?: WorkloadOptionsAutoscalingMulti[] | cdktf.IResolvable;
}

export function workloadOptionsAutoscalingToTerraform(struct?: WorkloadOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    max_scale: cdktf.numberToTerraform(struct!.maxScale),
    metric: cdktf.stringToTerraform(struct!.metric),
    metric_percentile: cdktf.stringToTerraform(struct!.metricPercentile),
    min_scale: cdktf.numberToTerraform(struct!.minScale),
    scale_to_zero_delay: cdktf.numberToTerraform(struct!.scaleToZeroDelay),
    target: cdktf.numberToTerraform(struct!.target),
    keda: cdktf.listMapper(workloadOptionsAutoscalingKedaToTerraform, true)(struct!.keda),
    multi: cdktf.listMapper(workloadOptionsAutoscalingMultiToTerraform, true)(struct!.multi),
  }
}


export function workloadOptionsAutoscalingToHclTerraform(struct?: WorkloadOptionsAutoscaling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_scale: {
      value: cdktf.numberToHclTerraform(struct!.maxScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_percentile: {
      value: cdktf.stringToHclTerraform(struct!.metricPercentile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_scale: {
      value: cdktf.numberToHclTerraform(struct!.minScale),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_to_zero_delay: {
      value: cdktf.numberToHclTerraform(struct!.scaleToZeroDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keda: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingKedaToHclTerraform, true)(struct!.keda),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingKedaList",
    },
    multi: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingMultiToHclTerraform, true)(struct!.multi),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingMultiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsAutoscalingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsAutoscaling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._maxScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScale = this._maxScale;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricPercentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPercentile = this._metricPercentile;
    }
    if (this._minScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScale = this._minScale;
    }
    if (this._scaleToZeroDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleToZeroDelay = this._scaleToZeroDelay;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
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

  public set internalValue(value: WorkloadOptionsAutoscaling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrency = undefined;
      this._maxScale = undefined;
      this._metric = undefined;
      this._metricPercentile = undefined;
      this._minScale = undefined;
      this._scaleToZeroDelay = undefined;
      this._target = undefined;
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
      this._maxConcurrency = value.maxConcurrency;
      this._maxScale = value.maxScale;
      this._metric = value.metric;
      this._metricPercentile = value.metricPercentile;
      this._minScale = value.minScale;
      this._scaleToZeroDelay = value.scaleToZeroDelay;
      this._target = value.target;
      this._keda.internalValue = value.keda;
      this._multi.internalValue = value.multi;
    }
  }

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_scale - computed: true, optional: true, required: false
  private _maxScale?: number; 
  public get maxScale() {
    return this.getNumberAttribute('max_scale');
  }
  public set maxScale(value: number) {
    this._maxScale = value;
  }
  public resetMaxScale() {
    this._maxScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleInput() {
    return this._maxScale;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_percentile - computed: false, optional: true, required: false
  private _metricPercentile?: string; 
  public get metricPercentile() {
    return this.getStringAttribute('metric_percentile');
  }
  public set metricPercentile(value: string) {
    this._metricPercentile = value;
  }
  public resetMetricPercentile() {
    this._metricPercentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPercentileInput() {
    return this._metricPercentile;
  }

  // min_scale - computed: true, optional: true, required: false
  private _minScale?: number; 
  public get minScale() {
    return this.getNumberAttribute('min_scale');
  }
  public set minScale(value: number) {
    this._minScale = value;
  }
  public resetMinScale() {
    this._minScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScaleInput() {
    return this._minScale;
  }

  // scale_to_zero_delay - computed: true, optional: true, required: false
  private _scaleToZeroDelay?: number; 
  public get scaleToZeroDelay() {
    return this.getNumberAttribute('scale_to_zero_delay');
  }
  public set scaleToZeroDelay(value: number) {
    this._scaleToZeroDelay = value;
  }
  public resetScaleToZeroDelay() {
    this._scaleToZeroDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleToZeroDelayInput() {
    return this._scaleToZeroDelay;
  }

  // target - computed: true, optional: true, required: false
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // keda - computed: false, optional: true, required: false
  private _keda = new WorkloadOptionsAutoscalingKedaList(this, "keda", false);
  public get keda() {
    return this._keda;
  }
  public putKeda(value: WorkloadOptionsAutoscalingKeda[] | cdktf.IResolvable) {
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
  private _multi = new WorkloadOptionsAutoscalingMultiList(this, "multi", false);
  public get multi() {
    return this._multi;
  }
  public putMulti(value: WorkloadOptionsAutoscalingMulti[] | cdktf.IResolvable) {
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

export class WorkloadOptionsAutoscalingList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsAutoscaling[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsAutoscalingOutputReference {
    return new WorkloadOptionsAutoscalingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptionsMultiZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#enabled Workload#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function workloadOptionsMultiZoneToTerraform(struct?: WorkloadOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function workloadOptionsMultiZoneToHclTerraform(struct?: WorkloadOptionsMultiZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsMultiZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptionsMultiZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadOptionsMultiZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class WorkloadOptionsMultiZoneList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptionsMultiZone[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsMultiZoneOutputReference {
    return new WorkloadOptionsMultiZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadOptions {
  /**
  * Capacity AI. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#capacity_ai Workload#capacity_ai}
  */
  readonly capacityAi?: boolean | cdktf.IResolvable;
  /**
  * The highest frequency capacity AI is allowed to update resource reservations when CapacityAI is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#capacity_ai_update_minutes Workload#capacity_ai_update_minutes}
  */
  readonly capacityAiUpdateMinutes?: number;
  /**
  * Debug mode. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#debug Workload#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Workload suspend. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#suspend Workload#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds. Default: `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#timeout_seconds Workload#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#autoscaling Workload#autoscaling}
  */
  readonly autoscaling?: WorkloadOptionsAutoscaling[] | cdktf.IResolvable;
  /**
  * multi_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#multi_zone Workload#multi_zone}
  */
  readonly multiZone?: WorkloadOptionsMultiZone[] | cdktf.IResolvable;
}

export function workloadOptionsToTerraform(struct?: WorkloadOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_ai: cdktf.booleanToTerraform(struct!.capacityAi),
    capacity_ai_update_minutes: cdktf.numberToTerraform(struct!.capacityAiUpdateMinutes),
    debug: cdktf.booleanToTerraform(struct!.debug),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    autoscaling: cdktf.listMapper(workloadOptionsAutoscalingToTerraform, true)(struct!.autoscaling),
    multi_zone: cdktf.listMapper(workloadOptionsMultiZoneToTerraform, true)(struct!.multiZone),
  }
}


export function workloadOptionsToHclTerraform(struct?: WorkloadOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_ai: {
      value: cdktf.booleanToHclTerraform(struct!.capacityAi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capacity_ai_update_minutes: {
      value: cdktf.numberToHclTerraform(struct!.capacityAiUpdateMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling: {
      value: cdktf.listMapperHcl(workloadOptionsAutoscalingToHclTerraform, true)(struct!.autoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsAutoscalingList",
    },
    multi_zone: {
      value: cdktf.listMapperHcl(workloadOptionsMultiZoneToHclTerraform, true)(struct!.multiZone),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadOptionsMultiZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityAi !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityAi = this._capacityAi;
    }
    if (this._capacityAiUpdateMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityAiUpdateMinutes = this._capacityAiUpdateMinutes;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
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

  public set internalValue(value: WorkloadOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityAi = undefined;
      this._capacityAiUpdateMinutes = undefined;
      this._debug = undefined;
      this._suspend = undefined;
      this._timeoutSeconds = undefined;
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
      this._capacityAi = value.capacityAi;
      this._capacityAiUpdateMinutes = value.capacityAiUpdateMinutes;
      this._debug = value.debug;
      this._suspend = value.suspend;
      this._timeoutSeconds = value.timeoutSeconds;
      this._autoscaling.internalValue = value.autoscaling;
      this._multiZone.internalValue = value.multiZone;
    }
  }

  // capacity_ai - computed: true, optional: true, required: false
  private _capacityAi?: boolean | cdktf.IResolvable; 
  public get capacityAi() {
    return this.getBooleanAttribute('capacity_ai');
  }
  public set capacityAi(value: boolean | cdktf.IResolvable) {
    this._capacityAi = value;
  }
  public resetCapacityAi() {
    this._capacityAi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAiInput() {
    return this._capacityAi;
  }

  // capacity_ai_update_minutes - computed: false, optional: true, required: false
  private _capacityAiUpdateMinutes?: number; 
  public get capacityAiUpdateMinutes() {
    return this.getNumberAttribute('capacity_ai_update_minutes');
  }
  public set capacityAiUpdateMinutes(value: number) {
    this._capacityAiUpdateMinutes = value;
  }
  public resetCapacityAiUpdateMinutes() {
    this._capacityAiUpdateMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAiUpdateMinutesInput() {
    return this._capacityAiUpdateMinutes;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // suspend - computed: true, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new WorkloadOptionsAutoscalingList(this, "autoscaling", false);
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: WorkloadOptionsAutoscaling[] | cdktf.IResolvable) {
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
  private _multiZone = new WorkloadOptionsMultiZoneList(this, "multi_zone", false);
  public get multiZone() {
    return this._multiZone;
  }
  public putMultiZone(value: WorkloadOptionsMultiZone[] | cdktf.IResolvable) {
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

export class WorkloadOptionsList extends cdktf.ComplexList {
  public internalValue? : WorkloadOptions[] | cdktf.IResolvable

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
  public get(index: number): WorkloadOptionsOutputReference {
    return new WorkloadOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadRequestRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#attempts Workload#attempts}
  */
  readonly attempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#retry_on Workload#retry_on}
  */
  readonly retryOn?: string[];
}

export function workloadRequestRetryPolicyToTerraform(struct?: WorkloadRequestRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    retry_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryOn),
  }
}


export function workloadRequestRetryPolicyToHclTerraform(struct?: WorkloadRequestRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryOn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadRequestRetryPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadRequestRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadRequestRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._retryOn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._retryOn = value.retryOn;
    }
  }

  // attempts - computed: true, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // retry_on - computed: true, optional: true, required: false
  private _retryOn?: string[]; 
  public get retryOn() {
    return cdktf.Fn.tolist(this.getListAttribute('retry_on'));
  }
  public set retryOn(value: string[]) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }
}

export class WorkloadRequestRetryPolicyList extends cdktf.ComplexList {
  public internalValue? : WorkloadRequestRetryPolicy[] | cdktf.IResolvable

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
  public get(index: number): WorkloadRequestRetryPolicyOutputReference {
    return new WorkloadRequestRetryPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadRolloutOptions {
  /**
  * The number of replicas that can be created above the desired amount of replicas during an update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#max_surge_replicas Workload#max_surge_replicas}
  */
  readonly maxSurgeReplicas?: string;
  /**
  * The number of replicas that can be unavailable during the update process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#max_unavailable_replicas Workload#max_unavailable_replicas}
  */
  readonly maxUnavailableReplicas?: string;
  /**
  * The minimum number of seconds a container must run without crashing to be considered available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#min_ready_seconds Workload#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * The strategies used to update applications and services deployed. Valid values: `OrderedReady` (Updates workloads in a rolling fashion, taking down old ones and bringing up new ones incrementally, ensuring that the service remains available during the update.), `Parallel` (Causes all pods affected by a scaling operation to be created or destroyed simultaneously. This does not affect update operations.). Default: `OrderedReady`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#scaling_policy Workload#scaling_policy}
  */
  readonly scalingPolicy?: string;
  /**
  * The amount of time in seconds a workload has to gracefully terminate before forcefully terminating it. This includes the time it takes for the preStop hook to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#termination_grace_period_seconds Workload#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
}

export function workloadRolloutOptionsToTerraform(struct?: WorkloadRolloutOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge_replicas: cdktf.stringToTerraform(struct!.maxSurgeReplicas),
    max_unavailable_replicas: cdktf.stringToTerraform(struct!.maxUnavailableReplicas),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    scaling_policy: cdktf.stringToTerraform(struct!.scalingPolicy),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
  }
}


export function workloadRolloutOptionsToHclTerraform(struct?: WorkloadRolloutOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge_replicas: {
      value: cdktf.stringToHclTerraform(struct!.maxSurgeReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable_replicas: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailableReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_policy: {
      value: cdktf.stringToHclTerraform(struct!.scalingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadRolloutOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadRolloutOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurgeReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurgeReplicas = this._maxSurgeReplicas;
    }
    if (this._maxUnavailableReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailableReplicas = this._maxUnavailableReplicas;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._scalingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingPolicy = this._scalingPolicy;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadRolloutOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurgeReplicas = undefined;
      this._maxUnavailableReplicas = undefined;
      this._minReadySeconds = undefined;
      this._scalingPolicy = undefined;
      this._terminationGracePeriodSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurgeReplicas = value.maxSurgeReplicas;
      this._maxUnavailableReplicas = value.maxUnavailableReplicas;
      this._minReadySeconds = value.minReadySeconds;
      this._scalingPolicy = value.scalingPolicy;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
    }
  }

  // max_surge_replicas - computed: false, optional: true, required: false
  private _maxSurgeReplicas?: string; 
  public get maxSurgeReplicas() {
    return this.getStringAttribute('max_surge_replicas');
  }
  public set maxSurgeReplicas(value: string) {
    this._maxSurgeReplicas = value;
  }
  public resetMaxSurgeReplicas() {
    this._maxSurgeReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeReplicasInput() {
    return this._maxSurgeReplicas;
  }

  // max_unavailable_replicas - computed: false, optional: true, required: false
  private _maxUnavailableReplicas?: string; 
  public get maxUnavailableReplicas() {
    return this.getStringAttribute('max_unavailable_replicas');
  }
  public set maxUnavailableReplicas(value: string) {
    this._maxUnavailableReplicas = value;
  }
  public resetMaxUnavailableReplicas() {
    this._maxUnavailableReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableReplicasInput() {
    return this._maxUnavailableReplicas;
  }

  // min_ready_seconds - computed: true, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy?: string; 
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }
  public set scalingPolicy(value: string) {
    this._scalingPolicy = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy;
  }

  // termination_grace_period_seconds - computed: true, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }
}

export class WorkloadRolloutOptionsList extends cdktf.ComplexList {
  public internalValue? : WorkloadRolloutOptions[] | cdktf.IResolvable

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
  public get(index: number): WorkloadRolloutOptionsOutputReference {
    return new WorkloadRolloutOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadSecurityOptions {
  /**
  * The group id assigned to any mounted volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#file_system_group_id Workload#file_system_group_id}
  */
  readonly fileSystemGroupId?: number;
}

export function workloadSecurityOptionsToTerraform(struct?: WorkloadSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_group_id: cdktf.numberToTerraform(struct!.fileSystemGroupId),
  }
}


export function workloadSecurityOptionsToHclTerraform(struct?: WorkloadSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_group_id: {
      value: cdktf.numberToHclTerraform(struct!.fileSystemGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadSecurityOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadSecurityOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemGroupId = this._fileSystemGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadSecurityOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystemGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystemGroupId = value.fileSystemGroupId;
    }
  }

  // file_system_group_id - computed: false, optional: true, required: false
  private _fileSystemGroupId?: number; 
  public get fileSystemGroupId() {
    return this.getNumberAttribute('file_system_group_id');
  }
  public set fileSystemGroupId(value: number) {
    this._fileSystemGroupId = value;
  }
  public resetFileSystemGroupId() {
    this._fileSystemGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemGroupIdInput() {
    return this._fileSystemGroupId;
  }
}

export class WorkloadSecurityOptionsList extends cdktf.ComplexList {
  public internalValue? : WorkloadSecurityOptions[] | cdktf.IResolvable

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
  public get(index: number): WorkloadSecurityOptionsOutputReference {
    return new WorkloadSecurityOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadSidecar {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#envoy Workload#envoy}
  */
  readonly envoy: string;
}

export function workloadSidecarToTerraform(struct?: WorkloadSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envoy: cdktf.stringToTerraform(struct!.envoy),
  }
}


export function workloadSidecarToHclTerraform(struct?: WorkloadSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envoy: {
      value: cdktf.stringToHclTerraform(struct!.envoy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadSidecarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadSidecar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envoy !== undefined) {
      hasAnyValues = true;
      internalValueResult.envoy = this._envoy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadSidecar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envoy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envoy = value.envoy;
    }
  }

  // envoy - computed: false, optional: false, required: true
  private _envoy?: string; 
  public get envoy() {
    return this.getStringAttribute('envoy');
  }
  public set envoy(value: string) {
    this._envoy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyInput() {
    return this._envoy;
  }
}

export class WorkloadSidecarList extends cdktf.ComplexList {
  public internalValue? : WorkloadSidecar[] | cdktf.IResolvable

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
  public get(index: number): WorkloadSidecarOutputReference {
    return new WorkloadSidecarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload cpln_workload}
*/
export class Workload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workload to import
  * @param importFromId The id of the existing Workload that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/workload cpln_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: WorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_workload',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.19',
        providerVersionConstraint: '1.2.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._extras = config.extras;
    this._gvc = config.gvc;
    this._identityLink = config.identityLink;
    this._name = config.name;
    this._supportDynamicTags = config.supportDynamicTags;
    this._tags = config.tags;
    this._type = config.type;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // extras - computed: false, optional: true, required: false
  private _extras?: string; 
  public get extras() {
    return this.getStringAttribute('extras');
  }
  public set extras(value: string) {
    this._extras = value;
  }
  public resetExtras() {
    this._extras = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extrasInput() {
    return this._extras;
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

  // identity_link - computed: false, optional: true, required: false
  private _identityLink?: string; 
  public get identityLink() {
    return this.getStringAttribute('identity_link');
  }
  public set identityLink(value: string) {
    this._identityLink = value;
  }
  public resetIdentityLink() {
    this._identityLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityLinkInput() {
    return this._identityLink;
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
  private _status = new WorkloadStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // support_dynamic_tags - computed: true, optional: true, required: false
  private _supportDynamicTags?: boolean | cdktf.IResolvable; 
  public get supportDynamicTags() {
    return this.getBooleanAttribute('support_dynamic_tags');
  }
  public set supportDynamicTags(value: boolean | cdktf.IResolvable) {
    this._supportDynamicTags = value;
  }
  public resetSupportDynamicTags() {
    this._supportDynamicTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportDynamicTagsInput() {
    return this._supportDynamicTags;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // container - computed: false, optional: true, required: false
  private _container = new WorkloadContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: WorkloadContainer[] | cdktf.IResolvable) {
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
  private _firewallSpec = new WorkloadFirewallSpecList(this, "firewall_spec", false);
  public get firewallSpec() {
    return this._firewallSpec;
  }
  public putFirewallSpec(value: WorkloadFirewallSpec[] | cdktf.IResolvable) {
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
  private _job = new WorkloadJobList(this, "job", false);
  public get job() {
    return this._job;
  }
  public putJob(value: WorkloadJob[] | cdktf.IResolvable) {
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
  private _loadBalancer = new WorkloadLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: WorkloadLoadBalancer[] | cdktf.IResolvable) {
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
  private _localOptions = new WorkloadLocalOptionsList(this, "local_options", false);
  public get localOptions() {
    return this._localOptions;
  }
  public putLocalOptions(value: WorkloadLocalOptions[] | cdktf.IResolvable) {
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
  private _options = new WorkloadOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: WorkloadOptions[] | cdktf.IResolvable) {
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
  private _requestRetryPolicy = new WorkloadRequestRetryPolicyList(this, "request_retry_policy", false);
  public get requestRetryPolicy() {
    return this._requestRetryPolicy;
  }
  public putRequestRetryPolicy(value: WorkloadRequestRetryPolicy[] | cdktf.IResolvable) {
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
  private _rolloutOptions = new WorkloadRolloutOptionsList(this, "rollout_options", false);
  public get rolloutOptions() {
    return this._rolloutOptions;
  }
  public putRolloutOptions(value: WorkloadRolloutOptions[] | cdktf.IResolvable) {
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
  private _securityOptions = new WorkloadSecurityOptionsList(this, "security_options", false);
  public get securityOptions() {
    return this._securityOptions;
  }
  public putSecurityOptions(value: WorkloadSecurityOptions[] | cdktf.IResolvable) {
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
  private _sidecar = new WorkloadSidecarList(this, "sidecar", false);
  public get sidecar() {
    return this._sidecar;
  }
  public putSidecar(value: WorkloadSidecar[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      extras: cdktf.stringToTerraform(this._extras),
      gvc: cdktf.stringToTerraform(this._gvc),
      identity_link: cdktf.stringToTerraform(this._identityLink),
      name: cdktf.stringToTerraform(this._name),
      support_dynamic_tags: cdktf.booleanToTerraform(this._supportDynamicTags),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      container: cdktf.listMapper(workloadContainerToTerraform, true)(this._container.internalValue),
      firewall_spec: cdktf.listMapper(workloadFirewallSpecToTerraform, true)(this._firewallSpec.internalValue),
      job: cdktf.listMapper(workloadJobToTerraform, true)(this._job.internalValue),
      load_balancer: cdktf.listMapper(workloadLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      local_options: cdktf.listMapper(workloadLocalOptionsToTerraform, true)(this._localOptions.internalValue),
      options: cdktf.listMapper(workloadOptionsToTerraform, true)(this._options.internalValue),
      request_retry_policy: cdktf.listMapper(workloadRequestRetryPolicyToTerraform, true)(this._requestRetryPolicy.internalValue),
      rollout_options: cdktf.listMapper(workloadRolloutOptionsToTerraform, true)(this._rolloutOptions.internalValue),
      security_options: cdktf.listMapper(workloadSecurityOptionsToTerraform, true)(this._securityOptions.internalValue),
      sidecar: cdktf.listMapper(workloadSidecarToTerraform, true)(this._sidecar.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extras: {
        value: cdktf.stringToHclTerraform(this._extras),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gvc: {
        value: cdktf.stringToHclTerraform(this._gvc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_link: {
        value: cdktf.stringToHclTerraform(this._identityLink),
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
      support_dynamic_tags: {
        value: cdktf.booleanToHclTerraform(this._supportDynamicTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container: {
        value: cdktf.listMapperHcl(workloadContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadContainerList",
      },
      firewall_spec: {
        value: cdktf.listMapperHcl(workloadFirewallSpecToHclTerraform, true)(this._firewallSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadFirewallSpecList",
      },
      job: {
        value: cdktf.listMapperHcl(workloadJobToHclTerraform, true)(this._job.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadJobList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(workloadLoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadLoadBalancerList",
      },
      local_options: {
        value: cdktf.listMapperHcl(workloadLocalOptionsToHclTerraform, true)(this._localOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadLocalOptionsList",
      },
      options: {
        value: cdktf.listMapperHcl(workloadOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadOptionsList",
      },
      request_retry_policy: {
        value: cdktf.listMapperHcl(workloadRequestRetryPolicyToHclTerraform, true)(this._requestRetryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadRequestRetryPolicyList",
      },
      rollout_options: {
        value: cdktf.listMapperHcl(workloadRolloutOptionsToHclTerraform, true)(this._rolloutOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadRolloutOptionsList",
      },
      security_options: {
        value: cdktf.listMapperHcl(workloadSecurityOptionsToHclTerraform, true)(this._securityOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadSecurityOptionsList",
      },
      sidecar: {
        value: cdktf.listMapperHcl(workloadSidecarToHclTerraform, true)(this._sidecar.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadSidecarList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
