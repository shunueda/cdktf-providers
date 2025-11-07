// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackageRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, Package Repository is disabled for cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#disabled PackageRepository#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#id PackageRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the package repository resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#name PackageRepository#name}
  */
  readonly name: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#meta PackageRepository#meta}
  */
  readonly meta?: PackageRepositoryMeta;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#scope PackageRepository#scope}
  */
  readonly scope: PackageRepositoryScope;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#spec PackageRepository#spec}
  */
  readonly spec: PackageRepositorySpec;
}
export interface PackageRepositoryState {
}

export function packageRepositoryStateToTerraform(struct?: PackageRepositoryState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function packageRepositoryStateToHclTerraform(struct?: PackageRepositoryState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PackageRepositoryStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PackageRepositoryState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageRepositoryState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // managed - computed: true, optional: false, required: false
  public get managed() {
    return this.getBooleanAttribute('managed');
  }

  // package_repository_phase - computed: true, optional: false, required: false
  public get packageRepositoryPhase() {
    return this.getStringAttribute('package_repository_phase');
  }

  // subscribed - computed: true, optional: false, required: false
  public get subscribed() {
    return this.getBooleanAttribute('subscribed');
  }
}

export class PackageRepositoryStateList extends cdktf.ComplexList {

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
  public get(index: number): PackageRepositoryStateOutputReference {
    return new PackageRepositoryStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PackageRepositoryMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#annotations PackageRepository#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#description PackageRepository#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#labels PackageRepository#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function packageRepositoryMetaToTerraform(struct?: PackageRepositoryMetaOutputReference | PackageRepositoryMeta): any {
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


export function packageRepositoryMetaToHclTerraform(struct?: PackageRepositoryMetaOutputReference | PackageRepositoryMeta): any {
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

export class PackageRepositoryMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageRepositoryMeta | undefined {
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

  public set internalValue(value: PackageRepositoryMeta | undefined) {
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
export interface PackageRepositoryScopeCluster {
  /**
  * Name of the management cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#management_cluster_name PackageRepository#management_cluster_name}
  */
  readonly managementClusterName?: string;
  /**
  * Name of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#name PackageRepository#name}
  */
  readonly name: string;
  /**
  * Provisioner of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#provisioner_name PackageRepository#provisioner_name}
  */
  readonly provisionerName?: string;
}

export function packageRepositoryScopeClusterToTerraform(struct?: PackageRepositoryScopeClusterOutputReference | PackageRepositoryScopeCluster): any {
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


export function packageRepositoryScopeClusterToHclTerraform(struct?: PackageRepositoryScopeClusterOutputReference | PackageRepositoryScopeCluster): any {
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

export class PackageRepositoryScopeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageRepositoryScopeCluster | undefined {
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

  public set internalValue(value: PackageRepositoryScopeCluster | undefined) {
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
export interface PackageRepositoryScope {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#cluster PackageRepository#cluster}
  */
  readonly cluster?: PackageRepositoryScopeCluster;
}

export function packageRepositoryScopeToTerraform(struct?: PackageRepositoryScopeOutputReference | PackageRepositoryScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: packageRepositoryScopeClusterToTerraform(struct!.cluster),
  }
}


export function packageRepositoryScopeToHclTerraform(struct?: PackageRepositoryScopeOutputReference | PackageRepositoryScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: packageRepositoryScopeClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "PackageRepositoryScopeClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageRepositoryScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageRepositoryScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageRepositoryScope | undefined) {
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
  private _cluster = new PackageRepositoryScopeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: PackageRepositoryScopeCluster) {
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
export interface PackageRepositorySpecImgpkgBundle {
  /**
  * image url string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#image PackageRepository#image}
  */
  readonly image: string;
}

export function packageRepositorySpecImgpkgBundleToTerraform(struct?: PackageRepositorySpecImgpkgBundleOutputReference | PackageRepositorySpecImgpkgBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function packageRepositorySpecImgpkgBundleToHclTerraform(struct?: PackageRepositorySpecImgpkgBundleOutputReference | PackageRepositorySpecImgpkgBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageRepositorySpecImgpkgBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageRepositorySpecImgpkgBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageRepositorySpecImgpkgBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
    }
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
}
export interface PackageRepositorySpec {
  /**
  * imgpkg_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#imgpkg_bundle PackageRepository#imgpkg_bundle}
  */
  readonly imgpkgBundle?: PackageRepositorySpecImgpkgBundle;
}

export function packageRepositorySpecToTerraform(struct?: PackageRepositorySpecOutputReference | PackageRepositorySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imgpkg_bundle: packageRepositorySpecImgpkgBundleToTerraform(struct!.imgpkgBundle),
  }
}


export function packageRepositorySpecToHclTerraform(struct?: PackageRepositorySpecOutputReference | PackageRepositorySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imgpkg_bundle: {
      value: packageRepositorySpecImgpkgBundleToHclTerraform(struct!.imgpkgBundle),
      isBlock: true,
      type: "list",
      storageClassType: "PackageRepositorySpecImgpkgBundleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PackageRepositorySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PackageRepositorySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imgpkgBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgpkgBundle = this._imgpkgBundle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PackageRepositorySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imgpkgBundle.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imgpkgBundle.internalValue = value.imgpkgBundle;
    }
  }

  // imgpkg_bundle - computed: false, optional: true, required: false
  private _imgpkgBundle = new PackageRepositorySpecImgpkgBundleOutputReference(this, "imgpkg_bundle");
  public get imgpkgBundle() {
    return this._imgpkgBundle;
  }
  public putImgpkgBundle(value: PackageRepositorySpecImgpkgBundle) {
    this._imgpkgBundle.internalValue = value;
  }
  public resetImgpkgBundle() {
    this._imgpkgBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgpkgBundleInput() {
    return this._imgpkgBundle.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository tanzu-mission-control_package_repository}
*/
export class PackageRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_package_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackageRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackageRepository to import
  * @param importFromId The id of the existing PackageRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackageRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_package_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/resources/package_repository tanzu-mission-control_package_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackageRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: PackageRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_package_repository',
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
    this._disabled = config.disabled;
    this._id = config.id;
    this._name = config.name;
    this._meta.internalValue = config.meta;
    this._scope.internalValue = config.scope;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // state - computed: true, optional: false, required: false
  private _state = new PackageRepositoryStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new PackageRepositoryMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: PackageRepositoryMeta) {
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
  private _scope = new PackageRepositoryScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: PackageRepositoryScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PackageRepositorySpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PackageRepositorySpec) {
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
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      meta: packageRepositoryMetaToTerraform(this._meta.internalValue),
      scope: packageRepositoryScopeToTerraform(this._scope.internalValue),
      spec: packageRepositorySpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      meta: {
        value: packageRepositoryMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackageRepositoryMetaList",
      },
      scope: {
        value: packageRepositoryScopeToHclTerraform(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackageRepositoryScopeList",
      },
      spec: {
        value: packageRepositorySpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PackageRepositorySpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
