// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackageInstallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#id PackageInstall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the package install resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#name PackageInstall#name}
  */
  readonly name: string;
  /**
  * Name of Namespace where package install will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#namespace PackageInstall#namespace}
  */
  readonly namespace: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#meta PackageInstall#meta}
  */
  readonly meta?: PackageInstallMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#scope PackageInstall#scope}
  */
  readonly scope: PackageInstallScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#spec PackageInstall#spec}
  */
  readonly spec: PackageInstallSpec;
}
export interface PackageInstallStatusGeneratedResources {
}

export function packageInstallStatusGeneratedResourcesToTerraform(struct?: PackageInstallStatusGeneratedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function packageInstallStatusGeneratedResourcesToHclTerraform(struct?: PackageInstallStatusGeneratedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PackageInstallStatusGeneratedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackageInstallStatusGeneratedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageInstallStatusGeneratedResources | undefined) {
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

export class PackageInstallStatusGeneratedResourcesList extends cdktf.ComplexList {

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
  public get(index: number): PackageInstallStatusGeneratedResourcesOutputReference {
    return new PackageInstallStatusGeneratedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PackageInstallStatus {
}

export function packageInstallStatusToTerraform(struct?: PackageInstallStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function packageInstallStatusToHclTerraform(struct?: PackageInstallStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PackageInstallStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackageInstallStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageInstallStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // generated_resources - computed: true, optional: false, required: false
  private _generatedResources = new PackageInstallStatusGeneratedResourcesList(this, "generated_resources", false);
  public get generatedResources() {
    return this._generatedResources;
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // package_install_phase - computed: true, optional: false, required: false
  public get packageInstallPhase() {
    return this.getStringAttribute('package_install_phase');
  }

  // referred_by - computed: true, optional: false, required: false
  public get referredBy() {
    return this.getListAttribute('referred_by');
  }

  // resolved_version - computed: true, optional: false, required: false
  public get resolvedVersion() {
    return this.getStringAttribute('resolved_version');
  }
}

export class PackageInstallStatusList extends cdktf.ComplexList {

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
  public get(index: number): PackageInstallStatusOutputReference {
    return new PackageInstallStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PackageInstallMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#annotations PackageInstall#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#description PackageInstall#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#labels PackageInstall#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function packageInstallMetaToTerraform(struct?: PackageInstallMetaOutputReference | PackageInstallMeta): any {
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


export function packageInstallMetaToHclTerraform(struct?: PackageInstallMetaOutputReference | PackageInstallMeta): any {
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

export class PackageInstallMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageInstallMeta | undefined {
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

  public set internalValue(value: PackageInstallMeta | undefined) {
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
export interface PackageInstallScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#management_cluster_name PackageInstall#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#name PackageInstall#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#provisioner_name PackageInstall#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function packageInstallScopeClusterToTerraform(struct?: PackageInstallScopeClusterOutputReference | PackageInstallScopeCluster): any {
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


export function packageInstallScopeClusterToHclTerraform(struct?: PackageInstallScopeClusterOutputReference | PackageInstallScopeCluster): any {
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

export class PackageInstallScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageInstallScopeCluster | undefined {
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

  public set internalValue(value: PackageInstallScopeCluster | undefined) {
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
export interface PackageInstallScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#cluster PackageInstall#cluster}
  */
  readonly cluster?: PackageInstallScopeCluster;
}

export function packageInstallScopeToTerraform(struct?: PackageInstallScopeOutputReference | PackageInstallScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: packageInstallScopeClusterToTerraform(struct!.cluster),
  }
}


export function packageInstallScopeToHclTerraform(struct?: PackageInstallScopeOutputReference | PackageInstallScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: packageInstallScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "PackageInstallScopeClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageInstallScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageInstallScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageInstallScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
    }
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new PackageInstallScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: PackageInstallScopeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }
}
export interface PackageInstallSpecPackageRefVersionSelection {
  /**
  * Constraints to select Package. Example: constraints: 'v1.2.3', constraints: '<v1.4.0' etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#constraints PackageInstall#constraints}
  */
  readonly constraints: string;
}

export function packageInstallSpecPackageRefVersionSelectionToTerraform(struct?: PackageInstallSpecPackageRefVersionSelectionOutputReference | PackageInstallSpecPackageRefVersionSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: cdktf.stringToTerraform(struct!.constraints),
  }
}


export function packageInstallSpecPackageRefVersionSelectionToHclTerraform(struct?: PackageInstallSpecPackageRefVersionSelectionOutputReference | PackageInstallSpecPackageRefVersionSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: cdktf.stringToHclTerraform(struct!.constraints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageInstallSpecPackageRefVersionSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageInstallSpecPackageRefVersionSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageInstallSpecPackageRefVersionSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constraints = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constraints = value.constraints;
    }
  }

  // constraints - computed: false, optional: false, required: true
  private _constraints?: string; 
  public get constraints() {
    return this.getStringAttribute('constraints');
  }
  public set constraints(value: string) {
    this._constraints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
  }
}
export interface PackageInstallSpecPackageRef {
  /**
  * Name of the Package Metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#package_metadata_name PackageInstall#package_metadata_name}
  */
  readonly packageMetadataName: string;
  /**
  * version_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#version_selection PackageInstall#version_selection}
  */
  readonly versionSelection: PackageInstallSpecPackageRefVersionSelection;
}

export function packageInstallSpecPackageRefToTerraform(struct?: PackageInstallSpecPackageRefOutputReference | PackageInstallSpecPackageRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_metadata_name: cdktf.stringToTerraform(struct!.packageMetadataName),
    version_selection: packageInstallSpecPackageRefVersionSelectionToTerraform(struct!.versionSelection),
  }
}


export function packageInstallSpecPackageRefToHclTerraform(struct?: PackageInstallSpecPackageRefOutputReference | PackageInstallSpecPackageRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_metadata_name: {
      value: cdktf.stringToHclTerraform(struct!.packageMetadataName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_selection: {
      value: packageInstallSpecPackageRefVersionSelectionToHclTerraform(struct!.versionSelection),
      isBlock: true,
      type: "list",
      storageClassType: "PackageInstallSpecPackageRefVersionSelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageInstallSpecPackageRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageInstallSpecPackageRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageMetadataName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageMetadataName = this._packageMetadataName;
    }
    if (this._versionSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionSelection = this._versionSelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageInstallSpecPackageRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packageMetadataName = undefined;
      this._versionSelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packageMetadataName = value.packageMetadataName;
      this._versionSelection.internalValue = value.versionSelection;
    }
  }

  // package_metadata_name - computed: false, optional: false, required: true
  private _packageMetadataName?: string; 
  public get packageMetadataName() {
    return this.getStringAttribute('package_metadata_name');
  }
  public set packageMetadataName(value: string) {
    this._packageMetadataName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageMetadataNameInput() {
    return this._packageMetadataName;
  }

  // version_selection - computed: false, optional: false, required: true
  private _versionSelection = new PackageInstallSpecPackageRefVersionSelectionOutputReference(this, "version_selection");
  public get versionSelection() {
    return this._versionSelection;
  }
  public putVersionSelection(value: PackageInstallSpecPackageRefVersionSelection) {
    this._versionSelection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionSelectionInput() {
    return this._versionSelection.internalValue;
  }
}
export interface PackageInstallSpec {
  /**
  * Deprecated, Use `path_to_inline_values` instead. Inline values to configure the Package Install.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#inline_values PackageInstall#inline_values}
  */
  readonly inlineValues?: { [key: string]: string };
  /**
  * File to read inline values from (in yaml format). User needs to specify the file path for inline values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#path_to_inline_values PackageInstall#path_to_inline_values}
  */
  readonly pathToInlineValues?: string;
  /**
  * package_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#package_ref PackageInstall#package_ref}
  */
  readonly packageRef: PackageInstallSpecPackageRef;
}

export function packageInstallSpecToTerraform(struct?: PackageInstallSpecOutputReference | PackageInstallSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inlineValues),
    path_to_inline_values: cdktf.stringToTerraform(struct!.pathToInlineValues),
    package_ref: packageInstallSpecPackageRefToTerraform(struct!.packageRef),
  }
}


export function packageInstallSpecToHclTerraform(struct?: PackageInstallSpecOutputReference | PackageInstallSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inlineValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path_to_inline_values: {
      value: cdktf.stringToHclTerraform(struct!.pathToInlineValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_ref: {
      value: packageInstallSpecPackageRefToHclTerraform(struct!.packageRef),
      isBlock: true,
      type: "list",
      storageClassType: "PackageInstallSpecPackageRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageInstallSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageInstallSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineValues = this._inlineValues;
    }
    if (this._pathToInlineValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathToInlineValues = this._pathToInlineValues;
    }
    if (this._packageRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageRef = this._packageRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageInstallSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inlineValues = undefined;
      this._pathToInlineValues = undefined;
      this._packageRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inlineValues = value.inlineValues;
      this._pathToInlineValues = value.pathToInlineValues;
      this._packageRef.internalValue = value.packageRef;
    }
  }

  // inline_values - computed: false, optional: true, required: false
  private _inlineValues?: { [key: string]: string }; 
  public get inlineValues() {
    return this.getStringMapAttribute('inline_values');
  }
  public set inlineValues(value: { [key: string]: string }) {
    this._inlineValues = value;
  }
  public resetInlineValues() {
    this._inlineValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineValuesInput() {
    return this._inlineValues;
  }

  // path_to_inline_values - computed: false, optional: true, required: false
  private _pathToInlineValues?: string; 
  public get pathToInlineValues() {
    return this.getStringAttribute('path_to_inline_values');
  }
  public set pathToInlineValues(value: string) {
    this._pathToInlineValues = value;
  }
  public resetPathToInlineValues() {
    this._pathToInlineValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathToInlineValuesInput() {
    return this._pathToInlineValues;
  }

  // role_binding_scope - computed: true, optional: false, required: false
  public get roleBindingScope() {
    return this.getStringAttribute('role_binding_scope');
  }

  // package_ref - computed: false, optional: false, required: true
  private _packageRef = new PackageInstallSpecPackageRefOutputReference(this, "package_ref");
  public get packageRef() {
    return this._packageRef;
  }
  public putPackageRef(value: PackageInstallSpecPackageRef) {
    this._packageRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRefInput() {
    return this._packageRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install tanzu-mission-control_package_install}
*/
export class PackageInstall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_package_install";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackageInstall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackageInstall to import
  * @param importFromId The id of the existing PackageInstall that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackageInstall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_package_install", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_install tanzu-mission-control_package_install} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackageInstallConfig
  */
  public constructor(scope: Construct, id: string, config: PackageInstallConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_package_install',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
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
    this._name = config.name;
    this._namespace = config.namespace;
    this._meta.internalValue = config.meta;
    this._scope.internalValue = config.scope;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // status - computed: true, optional: false, required: false
  private _status = new PackageInstallStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new PackageInstallMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: PackageInstallMeta) {
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
  private _scope = new PackageInstallScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: PackageInstallScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PackageInstallSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PackageInstallSpec) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      meta: packageInstallMetaToTerraform(this._meta.internalValue),
      scope: packageInstallScopeToTerraform(this._scope.internalValue),
      spec: packageInstallSpecToTerraform(this._spec.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: packageInstallMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackageInstallMetaList",
      },
      scope: {
        value: packageInstallScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackageInstallScopeList",
      },
      spec: {
        value: packageInstallSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackageInstallSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
