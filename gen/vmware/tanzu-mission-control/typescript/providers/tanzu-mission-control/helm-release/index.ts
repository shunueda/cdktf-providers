// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HelmReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * when specified, ensures clean up of this Terraform resource from the state file by creating a dependency on the Helm feature when the Helm feature is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#feature_ref HelmRelease#feature_ref}
  */
  readonly featureRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#id HelmRelease#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#name HelmRelease#name}
  */
  readonly name: string;
  /**
  * Name of Namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#namespace_name HelmRelease#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#meta HelmRelease#meta}
  */
  readonly meta?: HelmReleaseMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#scope HelmRelease#scope}
  */
  readonly scope: HelmReleaseScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#spec HelmRelease#spec}
  */
  readonly spec: HelmReleaseSpec;
}
export interface HelmReleaseStatusGeneratedResources {
}

export function helmReleaseStatusGeneratedResourcesToTerraform(struct?: HelmReleaseStatusGeneratedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function helmReleaseStatusGeneratedResourcesToHclTerraform(struct?: HelmReleaseStatusGeneratedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HelmReleaseStatusGeneratedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HelmReleaseStatusGeneratedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseStatusGeneratedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_role_name - computed: true, optional: false, required: false
  public get clusterRoleName() {
    return this.getStringAttribute('cluster_role_name');
  }

  // role_binding_name - computed: true, optional: false, required: false
  public get roleBindingName() {
    return this.getStringAttribute('role_binding_name');
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
}

export class HelmReleaseStatusGeneratedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): HelmReleaseStatusGeneratedResourcesOutputReference {
    return new HelmReleaseStatusGeneratedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HelmReleaseStatus {
}

export function helmReleaseStatusToTerraform(struct?: HelmReleaseStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function helmReleaseStatusToHclTerraform(struct?: HelmReleaseStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HelmReleaseStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HelmReleaseStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generated_resources - computed: true, optional: false, required: false
  private _generatedResources = new HelmReleaseStatusGeneratedResourcesList(this, "generated_resources", false);
  public get generatedResources() {
    return this._generatedResources;
  }

  // phase - computed: true, optional: false, required: false
  public get phase() {
    return this.getStringAttribute('phase');
  }
}

export class HelmReleaseStatusList extends cdktf.ComplexList {

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
  public get(index: number): HelmReleaseStatusOutputReference {
    return new HelmReleaseStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HelmReleaseMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#annotations HelmRelease#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#description HelmRelease#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#labels HelmRelease#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function helmReleaseMetaToTerraform(struct?: HelmReleaseMetaOutputReference | HelmReleaseMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function helmReleaseMetaToHclTerraform(struct?: HelmReleaseMetaOutputReference | HelmReleaseMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // description - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface HelmReleaseScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#management_cluster_name HelmRelease#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#name HelmRelease#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#provisioner_name HelmRelease#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function helmReleaseScopeClusterToTerraform(struct?: HelmReleaseScopeClusterOutputReference | HelmReleaseScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_cluster_name: cdktf.stringToTerraform(struct!.managementClusterName),
    name: cdktf.stringToTerraform(struct!.name),
    provisioner_name: cdktf.stringToTerraform(struct!.provisionerName),
  }
}


export function helmReleaseScopeClusterToHclTerraform(struct?: HelmReleaseScopeClusterOutputReference | HelmReleaseScopeCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.managementClusterName),
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
    provisioner_name: {
      value: cdktf.stringToHclTerraform(struct!.provisionerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseScopeCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementClusterName = this._managementClusterName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisionerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerName = this._provisionerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseScopeCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementClusterName = undefined;
      this._name = undefined;
      this._provisionerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementClusterName = value.managementClusterName;
      this._name = value.name;
      this._provisionerName = value.provisionerName;
    }
  }

  // management_cluster_name - computed: false, optional: true, required: false
  private _managementClusterName?: string; 
  public get managementClusterName() {
    return this.getStringAttribute('management_cluster_name');
  }
  public set managementClusterName(value: string) {
    this._managementClusterName = value;
  }
  public resetManagementClusterName() {
    this._managementClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterNameInput() {
    return this._managementClusterName;
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

  // provisioner_name - computed: false, optional: true, required: false
  private _provisionerName?: string; 
  public get provisionerName() {
    return this.getStringAttribute('provisioner_name');
  }
  public set provisionerName(value: string) {
    this._provisionerName = value;
  }
  public resetProvisionerName() {
    this._provisionerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerNameInput() {
    return this._provisionerName;
  }
}
export interface HelmReleaseScopeClusterGroup {
  /**
  * Name of the cluster group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#name HelmRelease#name}
  */
  readonly name: string;
}

export function helmReleaseScopeClusterGroupToTerraform(struct?: HelmReleaseScopeClusterGroupOutputReference | HelmReleaseScopeClusterGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function helmReleaseScopeClusterGroupToHclTerraform(struct?: HelmReleaseScopeClusterGroupOutputReference | HelmReleaseScopeClusterGroup): any {
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

export class HelmReleaseScopeClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseScopeClusterGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseScopeClusterGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface HelmReleaseScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#cluster HelmRelease#cluster}
  */
  readonly cluster?: HelmReleaseScopeCluster;
  /**
  * cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#cluster_group HelmRelease#cluster_group}
  */
  readonly clusterGroup?: HelmReleaseScopeClusterGroup;
}

export function helmReleaseScopeToTerraform(struct?: HelmReleaseScopeOutputReference | HelmReleaseScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: helmReleaseScopeClusterToTerraform(struct!.cluster),
    cluster_group: helmReleaseScopeClusterGroupToTerraform(struct!.clusterGroup),
  }
}


export function helmReleaseScopeToHclTerraform(struct?: HelmReleaseScopeOutputReference | HelmReleaseScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: helmReleaseScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "HelmReleaseScopeClusterList",
    },
    cluster_group: {
      value: helmReleaseScopeClusterGroupToHclTerraform(struct!.clusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "HelmReleaseScopeClusterGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._clusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterGroup = this._clusterGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
      this._clusterGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
      this._clusterGroup.internalValue = value.clusterGroup;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new HelmReleaseScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: HelmReleaseScopeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup = new HelmReleaseScopeClusterGroupOutputReference(this, "cluster_group");
  public get clusterGroup() {
    return this._clusterGroup;
  }
  public putClusterGroup(value: HelmReleaseScopeClusterGroup) {
    this._clusterGroup.internalValue = value;
  }
  public resetClusterGroup() {
    this._clusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup.internalValue;
  }
}
export interface HelmReleaseSpecChartRefGitRepository {
  /**
  * Path of the chart in the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#chart_path HelmRelease#chart_path}
  */
  readonly chartPath: string;
  /**
  * Name of the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#repository_name HelmRelease#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Namespace Name for the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#repository_namespace HelmRelease#repository_namespace}
  */
  readonly repositoryNamespace: string;
}

export function helmReleaseSpecChartRefGitRepositoryToTerraform(struct?: HelmReleaseSpecChartRefGitRepositoryOutputReference | HelmReleaseSpecChartRefGitRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_path: cdktf.stringToTerraform(struct!.chartPath),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    repository_namespace: cdktf.stringToTerraform(struct!.repositoryNamespace),
  }
}


export function helmReleaseSpecChartRefGitRepositoryToHclTerraform(struct?: HelmReleaseSpecChartRefGitRepositoryOutputReference | HelmReleaseSpecChartRefGitRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_path: {
      value: cdktf.stringToHclTerraform(struct!.chartPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_namespace: {
      value: cdktf.stringToHclTerraform(struct!.repositoryNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseSpecChartRefGitRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseSpecChartRefGitRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartPath = this._chartPath;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._repositoryNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryNamespace = this._repositoryNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseSpecChartRefGitRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chartPath = undefined;
      this._repositoryName = undefined;
      this._repositoryNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chartPath = value.chartPath;
      this._repositoryName = value.repositoryName;
      this._repositoryNamespace = value.repositoryNamespace;
    }
  }

  // chart_path - computed: false, optional: false, required: true
  private _chartPath?: string; 
  public get chartPath() {
    return this.getStringAttribute('chart_path');
  }
  public set chartPath(value: string) {
    this._chartPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartPathInput() {
    return this._chartPath;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // repository_namespace - computed: false, optional: false, required: true
  private _repositoryNamespace?: string; 
  public get repositoryNamespace() {
    return this.getStringAttribute('repository_namespace');
  }
  public set repositoryNamespace(value: string) {
    this._repositoryNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNamespaceInput() {
    return this._repositoryNamespace;
  }
}
export interface HelmReleaseSpecChartRefHelmRepository {
  /**
  * Name of the chart in the helm repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#chart_name HelmRelease#chart_name}
  */
  readonly chartName: string;
  /**
  * Name of the Helm repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#repository_name HelmRelease#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Namespace Name for the Helm repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#repository_namespace HelmRelease#repository_namespace}
  */
  readonly repositoryNamespace: string;
  /**
  * Chart version, applicable for helm repository type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#version HelmRelease#version}
  */
  readonly version: string;
}

export function helmReleaseSpecChartRefHelmRepositoryToTerraform(struct?: HelmReleaseSpecChartRefHelmRepositoryOutputReference | HelmReleaseSpecChartRefHelmRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_name: cdktf.stringToTerraform(struct!.chartName),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    repository_namespace: cdktf.stringToTerraform(struct!.repositoryNamespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function helmReleaseSpecChartRefHelmRepositoryToHclTerraform(struct?: HelmReleaseSpecChartRefHelmRepositoryOutputReference | HelmReleaseSpecChartRefHelmRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_name: {
      value: cdktf.stringToHclTerraform(struct!.chartName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_namespace: {
      value: cdktf.stringToHclTerraform(struct!.repositoryNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseSpecChartRefHelmRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseSpecChartRefHelmRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartName = this._chartName;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._repositoryNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryNamespace = this._repositoryNamespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseSpecChartRefHelmRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chartName = undefined;
      this._repositoryName = undefined;
      this._repositoryNamespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chartName = value.chartName;
      this._repositoryName = value.repositoryName;
      this._repositoryNamespace = value.repositoryNamespace;
      this._version = value.version;
    }
  }

  // chart_name - computed: false, optional: false, required: true
  private _chartName?: string; 
  public get chartName() {
    return this.getStringAttribute('chart_name');
  }
  public set chartName(value: string) {
    this._chartName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNameInput() {
    return this._chartName;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // repository_namespace - computed: false, optional: false, required: true
  private _repositoryNamespace?: string; 
  public get repositoryNamespace() {
    return this.getStringAttribute('repository_namespace');
  }
  public set repositoryNamespace(value: string) {
    this._repositoryNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNamespaceInput() {
    return this._repositoryNamespace;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface HelmReleaseSpecChartRef {
  /**
  * git_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#git_repository HelmRelease#git_repository}
  */
  readonly gitRepository?: HelmReleaseSpecChartRefGitRepository;
  /**
  * helm_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#helm_repository HelmRelease#helm_repository}
  */
  readonly helmRepository?: HelmReleaseSpecChartRefHelmRepository;
}

export function helmReleaseSpecChartRefToTerraform(struct?: HelmReleaseSpecChartRefOutputReference | HelmReleaseSpecChartRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    git_repository: helmReleaseSpecChartRefGitRepositoryToTerraform(struct!.gitRepository),
    helm_repository: helmReleaseSpecChartRefHelmRepositoryToTerraform(struct!.helmRepository),
  }
}


export function helmReleaseSpecChartRefToHclTerraform(struct?: HelmReleaseSpecChartRefOutputReference | HelmReleaseSpecChartRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    git_repository: {
      value: helmReleaseSpecChartRefGitRepositoryToHclTerraform(struct!.gitRepository),
      isBlock: true,
      type: "list",
      storageClassType: "HelmReleaseSpecChartRefGitRepositoryList",
    },
    helm_repository: {
      value: helmReleaseSpecChartRefHelmRepositoryToHclTerraform(struct!.helmRepository),
      isBlock: true,
      type: "list",
      storageClassType: "HelmReleaseSpecChartRefHelmRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseSpecChartRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseSpecChartRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gitRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepository = this._gitRepository?.internalValue;
    }
    if (this._helmRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmRepository = this._helmRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseSpecChartRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gitRepository.internalValue = undefined;
      this._helmRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gitRepository.internalValue = value.gitRepository;
      this._helmRepository.internalValue = value.helmRepository;
    }
  }

  // git_repository - computed: false, optional: true, required: false
  private _gitRepository = new HelmReleaseSpecChartRefGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }
  public putGitRepository(value: HelmReleaseSpecChartRefGitRepository) {
    this._gitRepository.internalValue = value;
  }
  public resetGitRepository() {
    this._gitRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepositoryInput() {
    return this._gitRepository.internalValue;
  }

  // helm_repository - computed: false, optional: true, required: false
  private _helmRepository = new HelmReleaseSpecChartRefHelmRepositoryOutputReference(this, "helm_repository");
  public get helmRepository() {
    return this._helmRepository;
  }
  public putHelmRepository(value: HelmReleaseSpecChartRefHelmRepository) {
    this._helmRepository.internalValue = value;
  }
  public resetHelmRepository() {
    this._helmRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmRepositoryInput() {
    return this._helmRepository.internalValue;
  }
}
export interface HelmReleaseSpec {
  /**
  * File to read inline values from (in yaml format).User need to specify the file path for inline config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#inline_config HelmRelease#inline_config}
  */
  readonly inlineConfig?: string;
  /**
  * Interval at which to reconcile the Helm release. This is the interval at which Tanzu Mission Control will attempt to reconcile changes in the helm release to the cluster. A sync interval of 0 would result in no future syncs. If no value is entered, a default interval of 5 minutes will be applied as `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#interval HelmRelease#interval}
  */
  readonly interval?: string;
  /**
  * TargetNamespace sets or overrides the namespaces of resources yaml while applying on cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#target_namespace HelmRelease#target_namespace}
  */
  readonly targetNamespace?: string;
  /**
  * chart_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#chart_ref HelmRelease#chart_ref}
  */
  readonly chartRef: HelmReleaseSpecChartRef;
}

export function helmReleaseSpecToTerraform(struct?: HelmReleaseSpecOutputReference | HelmReleaseSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_config: cdktf.stringToTerraform(struct!.inlineConfig),
    interval: cdktf.stringToTerraform(struct!.interval),
    target_namespace: cdktf.stringToTerraform(struct!.targetNamespace),
    chart_ref: helmReleaseSpecChartRefToTerraform(struct!.chartRef),
  }
}


export function helmReleaseSpecToHclTerraform(struct?: HelmReleaseSpecOutputReference | HelmReleaseSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_config: {
      value: cdktf.stringToHclTerraform(struct!.inlineConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_namespace: {
      value: cdktf.stringToHclTerraform(struct!.targetNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_ref: {
      value: helmReleaseSpecChartRefToHclTerraform(struct!.chartRef),
      isBlock: true,
      type: "list",
      storageClassType: "HelmReleaseSpecChartRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HelmReleaseSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HelmReleaseSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineConfig = this._inlineConfig;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._targetNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNamespace = this._targetNamespace;
    }
    if (this._chartRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartRef = this._chartRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HelmReleaseSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inlineConfig = undefined;
      this._interval = undefined;
      this._targetNamespace = undefined;
      this._chartRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inlineConfig = value.inlineConfig;
      this._interval = value.interval;
      this._targetNamespace = value.targetNamespace;
      this._chartRef.internalValue = value.chartRef;
    }
  }

  // inline_config - computed: false, optional: true, required: false
  private _inlineConfig?: string; 
  public get inlineConfig() {
    return this.getStringAttribute('inline_config');
  }
  public set inlineConfig(value: string) {
    this._inlineConfig = value;
  }
  public resetInlineConfig() {
    this._inlineConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineConfigInput() {
    return this._inlineConfig;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // target_namespace - computed: false, optional: true, required: false
  private _targetNamespace?: string; 
  public get targetNamespace() {
    return this.getStringAttribute('target_namespace');
  }
  public set targetNamespace(value: string) {
    this._targetNamespace = value;
  }
  public resetTargetNamespace() {
    this._targetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceInput() {
    return this._targetNamespace;
  }

  // chart_ref - computed: false, optional: false, required: true
  private _chartRef = new HelmReleaseSpecChartRefOutputReference(this, "chart_ref");
  public get chartRef() {
    return this._chartRef;
  }
  public putChartRef(value: HelmReleaseSpecChartRef) {
    this._chartRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartRefInput() {
    return this._chartRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release tanzu-mission-control_helm_release}
*/
export class HelmRelease extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_helm_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HelmRelease resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HelmRelease to import
  * @param importFromId The id of the existing HelmRelease that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HelmRelease to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_helm_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/helm_release tanzu-mission-control_helm_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HelmReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: HelmReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_helm_release',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9',
        providerVersionConstraint: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureRef = config.featureRef;
    this._id = config.id;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._meta.internalValue = config.meta;
    this._scope.internalValue = config.scope;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_ref - computed: false, optional: true, required: false
  private _featureRef?: string; 
  public get featureRef() {
    return this.getStringAttribute('feature_ref');
  }
  public set featureRef(value: string) {
    this._featureRef = value;
  }
  public resetFeatureRef() {
    this._featureRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureRefInput() {
    return this._featureRef;
  }

  // id - computed: true, optional: true, required: false
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // status - computed: true, optional: false, required: false
  private _status = new HelmReleaseStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new HelmReleaseMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: HelmReleaseMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new HelmReleaseScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: HelmReleaseScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new HelmReleaseSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: HelmReleaseSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_ref: cdktf.stringToTerraform(this._featureRef),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      meta: helmReleaseMetaToTerraform(this._meta.internalValue),
      scope: helmReleaseScopeToTerraform(this._scope.internalValue),
      spec: helmReleaseSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_ref: {
        value: cdktf.stringToHclTerraform(this._featureRef),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: helmReleaseMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HelmReleaseMetaList",
      },
      scope: {
        value: helmReleaseScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HelmReleaseScopeList",
      },
      spec: {
        value: helmReleaseSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HelmReleaseSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
