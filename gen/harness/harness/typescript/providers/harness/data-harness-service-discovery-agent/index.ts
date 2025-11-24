// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessServiceDiscoveryAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The environment identifier of the agent. This is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent#environment_identifier DataHarnessServiceDiscoveryAgent#environment_identifier}
  */
  readonly environmentIdentifier: string;
  /**
  * The unique identity of the agent. Either this or 'name' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent#identity DataHarnessServiceDiscoveryAgent#identity}
  */
  readonly identity?: string;
  /**
  * The name of the agent. Either this or 'identity' must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent#name DataHarnessServiceDiscoveryAgent#name}
  */
  readonly name?: string;
  /**
  * The organization identifier of the agent (optional). Must be 1-64 characters and contain only alphanumeric characters, hyphens, or underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent#org_identifier DataHarnessServiceDiscoveryAgent#org_identifier}
  */
  readonly orgIdentifier?: string;
  /**
  * The project identifier of the agent (optional). Must be 1-64 characters and contain only alphanumeric characters, hyphens, or underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent#project_identifier DataHarnessServiceDiscoveryAgent#project_identifier}
  */
  readonly projectIdentifier?: string;
}
export interface DataHarnessServiceDiscoveryAgentConfigDataCron {
}

export function dataHarnessServiceDiscoveryAgentConfigDataCronToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigDataCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigDataCronToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigDataCron): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigDataCronOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigDataCron | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigDataCron | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigDataCronList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigDataCronOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigDataCronOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigData {
}

export function dataHarnessServiceDiscoveryAgentConfigDataToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigDataToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blacklisted_namespaces - computed: true, optional: false, required: false
  public get blacklistedNamespaces() {
    return this.getListAttribute('blacklisted_namespaces');
  }

  // collection_window_in_min - computed: true, optional: false, required: false
  public get collectionWindowInMin() {
    return this.getNumberAttribute('collection_window_in_min');
  }

  // cron - computed: true, optional: false, required: false
  private _cron = new DataHarnessServiceDiscoveryAgentConfigDataCronList(this, "cron", false);
  public get cron() {
    return this._cron;
  }

  // enable_batch_resources - computed: true, optional: false, required: false
  public get enableBatchResources() {
    return this.getBooleanAttribute('enable_batch_resources');
  }

  // enable_node_agent - computed: true, optional: false, required: false
  public get enableNodeAgent() {
    return this.getBooleanAttribute('enable_node_agent');
  }

  // enable_orphaned_pod - computed: true, optional: false, required: false
  public get enableOrphanedPod() {
    return this.getBooleanAttribute('enable_orphaned_pod');
  }

  // namespace_selector - computed: true, optional: false, required: false
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }

  // node_agent_selector - computed: true, optional: false, required: false
  public get nodeAgentSelector() {
    return this.getStringAttribute('node_agent_selector');
  }

  // observed_namespaces - computed: true, optional: false, required: false
  public get observedNamespaces() {
    return this.getListAttribute('observed_namespaces');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigDataList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigDataOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimits {
}

export function dataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequests {
}

export function dataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getStringAttribute('memory');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigKubernetesResources {
}

export function dataHarnessServiceDiscoveryAgentConfigKubernetesResourcesToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigKubernetesResourcesToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigKubernetesResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigKubernetesResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }

  // requests - computed: true, optional: false, required: false
  private _requests = new DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesRequestsList(this, "requests", false);
  public get requests() {
    return this._requests;
  }
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigKubernetesTolerations {
}

export function dataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetesTolerations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigKubernetesTolerations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigKubernetesTolerations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: false
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigKubernetes {
}

export function dataHarnessServiceDiscoveryAgentConfigKubernetesToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigKubernetesToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // disable_namespace_creation - computed: true, optional: false, required: false
  public get disableNamespaceCreation() {
    return this.getBooleanAttribute('disable_namespace_creation');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // namespaced - computed: true, optional: false, required: false
  public get namespaced() {
    return this.getBooleanAttribute('namespaced');
  }

  // node_selector - computed: true, optional: false, required: false
  private _nodeSelector = new cdktf.StringMap(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataHarnessServiceDiscoveryAgentConfigKubernetesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // tolerations - computed: true, optional: false, required: false
  private _tolerations = new DataHarnessServiceDiscoveryAgentConfigKubernetesTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
}

export class DataHarnessServiceDiscoveryAgentConfigKubernetesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigKubernetesOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigKubernetesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigMtls {
}

export function dataHarnessServiceDiscoveryAgentConfigMtlsToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigMtlsToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigMtlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_path - computed: true, optional: false, required: false
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }

  // key_path - computed: true, optional: false, required: false
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigMtlsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigMtlsOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigMtlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigProxy {
}

export function dataHarnessServiceDiscoveryAgentConfigProxyToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigProxyToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_proxy - computed: true, optional: false, required: false
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }

  // https_proxy - computed: true, optional: false, required: false
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }

  // no_proxy - computed: true, optional: false, required: false
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigProxyList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigProxyOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentConfigA {
}

export function dataHarnessServiceDiscoveryAgentConfigAToTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentConfigAToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collector_image - computed: true, optional: false, required: false
  public get collectorImage() {
    return this.getStringAttribute('collector_image');
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataHarnessServiceDiscoveryAgentConfigDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }

  // kubernetes - computed: true, optional: false, required: false
  private _kubernetes = new DataHarnessServiceDiscoveryAgentConfigKubernetesList(this, "kubernetes", false);
  public get kubernetes() {
    return this._kubernetes;
  }

  // log_watcher_image - computed: true, optional: false, required: false
  public get logWatcherImage() {
    return this.getStringAttribute('log_watcher_image');
  }

  // mtls - computed: true, optional: false, required: false
  private _mtls = new DataHarnessServiceDiscoveryAgentConfigMtlsList(this, "mtls", false);
  public get mtls() {
    return this._mtls;
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataHarnessServiceDiscoveryAgentConfigProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }

  // skip_secure_verify - computed: true, optional: false, required: false
  public get skipSecureVerify() {
    return this.getBooleanAttribute('skip_secure_verify');
  }
}

export class DataHarnessServiceDiscoveryAgentConfigAList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentConfigAOutputReference {
    return new DataHarnessServiceDiscoveryAgentConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster {
}

export function dataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterToTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster | undefined) {
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterOutputReference {
    return new DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNode {
}

export function dataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeToTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNode | undefined) {
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

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeOutputReference {
    return new DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetails {
}

export function dataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsToTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // node - computed: true, optional: false, required: false
  private _node = new DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsOutputReference {
    return new DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessServiceDiscoveryAgentInstallationDetails {
}

export function dataHarnessServiceDiscoveryAgentInstallationDetailsToTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessServiceDiscoveryAgentInstallationDetailsToHclTerraform(struct?: DataHarnessServiceDiscoveryAgentInstallationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessServiceDiscoveryAgentInstallationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessServiceDiscoveryAgentInstallationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_identifier - computed: true, optional: false, required: false
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }

  // agent_details - computed: true, optional: false, required: false
  private _agentDetails = new DataHarnessServiceDiscoveryAgentInstallationDetailsAgentDetailsList(this, "agent_details", false);
  public get agentDetails() {
    return this._agentDetails;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // delegate_id - computed: true, optional: false, required: false
  public get delegateId() {
    return this.getStringAttribute('delegate_id');
  }

  // delegate_task_id - computed: true, optional: false, required: false
  public get delegateTaskId() {
    return this.getStringAttribute('delegate_task_id');
  }

  // delegate_task_status - computed: true, optional: false, required: false
  public get delegateTaskStatus() {
    return this.getStringAttribute('delegate_task_status');
  }

  // environment_identifier - computed: true, optional: false, required: false
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cron_triggered - computed: true, optional: false, required: false
  public get isCronTriggered() {
    return this.getBooleanAttribute('is_cron_triggered');
  }

  // log_stream_created_at - computed: true, optional: false, required: false
  public get logStreamCreatedAt() {
    return this.getStringAttribute('log_stream_created_at');
  }

  // log_stream_id - computed: true, optional: false, required: false
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }

  // org_identifier - computed: true, optional: false, required: false
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }

  // removed - computed: true, optional: false, required: false
  public get removed() {
    return this.getBooleanAttribute('removed');
  }

  // removed_at - computed: true, optional: false, required: false
  public get removedAt() {
    return this.getStringAttribute('removed_at');
  }

  // stopped - computed: true, optional: false, required: false
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataHarnessServiceDiscoveryAgentInstallationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessServiceDiscoveryAgentInstallationDetailsOutputReference {
    return new DataHarnessServiceDiscoveryAgentInstallationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent harness_service_discovery_agent}
*/
export class DataHarnessServiceDiscoveryAgent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_service_discovery_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessServiceDiscoveryAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessServiceDiscoveryAgent to import
  * @param importFromId The id of the existing DataHarnessServiceDiscoveryAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessServiceDiscoveryAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_service_discovery_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/service_discovery_agent harness_service_discovery_agent} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessServiceDiscoveryAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessServiceDiscoveryAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_service_discovery_agent',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentIdentifier = config.environmentIdentifier;
    this._identity = config.identity;
    this._name = config.name;
    this._orgIdentifier = config.orgIdentifier;
    this._projectIdentifier = config.projectIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataHarnessServiceDiscoveryAgentConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_identifier - computed: false, optional: false, required: true
  private _environmentIdentifier?: string; 
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
  }
  public set environmentIdentifier(value: string) {
    this._environmentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdentifierInput() {
    return this._environmentIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // installation_details - computed: true, optional: false, required: false
  private _installationDetails = new DataHarnessServiceDiscoveryAgentInstallationDetailsList(this, "installation_details", false);
  public get installationDetails() {
    return this._installationDetails;
  }

  // installation_type - computed: true, optional: false, required: false
  public get installationType() {
    return this.getStringAttribute('installation_type');
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

  // network_map_count - computed: true, optional: false, required: false
  public get networkMapCount() {
    return this.getNumberAttribute('network_map_count');
  }

  // org_identifier - computed: false, optional: true, required: false
  private _orgIdentifier?: string; 
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }
  public set orgIdentifier(value: string) {
    this._orgIdentifier = value;
  }
  public resetOrgIdentifier() {
    this._orgIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdentifierInput() {
    return this._orgIdentifier;
  }

  // permanent_installation - computed: true, optional: false, required: false
  public get permanentInstallation() {
    return this.getBooleanAttribute('permanent_installation');
  }

  // project_identifier - computed: false, optional: true, required: false
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  public resetProjectIdentifier() {
    this._projectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // removed - computed: true, optional: false, required: false
  public get removed() {
    return this.getBooleanAttribute('removed');
  }

  // removed_at - computed: true, optional: false, required: false
  public get removedAt() {
    return this.getStringAttribute('removed_at');
  }

  // service_count - computed: true, optional: false, required: false
  public get serviceCount() {
    return this.getNumberAttribute('service_count');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_identifier: cdktf.stringToTerraform(this._environmentIdentifier),
      identity: cdktf.stringToTerraform(this._identity),
      name: cdktf.stringToTerraform(this._name),
      org_identifier: cdktf.stringToTerraform(this._orgIdentifier),
      project_identifier: cdktf.stringToTerraform(this._projectIdentifier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_identifier: {
        value: cdktf.stringToHclTerraform(this._environmentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
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
      org_identifier: {
        value: cdktf.stringToHclTerraform(this._orgIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_identifier: {
        value: cdktf.stringToHclTerraform(this._projectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
