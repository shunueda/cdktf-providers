// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata;
  /**
  * EKSAReleaseSpec defines the desired state of EKSARelease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
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
}
export interface DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef {
  /**
  * APIVersion refers to the Bundles APIVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#api_version DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Name refers to the name of the Bundles object in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace refers to the Bundles's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRefToTerraform(struct?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRefToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
}
export interface DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec {
  /**
  * Manifest url to parse bundle information from for this EKS-A release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#bundle_manifest_url DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#bundle_manifest_url}
  */
  readonly bundleManifestUrl: string;
  /**
  * Reference to a Bundles resource in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#bundles_ref DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#bundles_ref}
  */
  readonly bundlesRef: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef;
  /**
  * Git commit the component is built from, before any patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#git_commit DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#git_commit}
  */
  readonly gitCommit: string;
  /**
  * Date of EKS-A Release
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#release_date DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#release_date}
  */
  readonly releaseDate: string;
  /**
  * EKS-A release semantic version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#version DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_manifest_url: cdktf.stringToTerraform(struct!.bundleManifestUrl),
    bundles_ref: dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRefToTerraform(struct!.bundlesRef),
    git_commit: cdktf.stringToTerraform(struct!.gitCommit),
    release_date: cdktf.stringToTerraform(struct!.releaseDate),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_manifest_url: {
      value: cdktf.stringToHclTerraform(struct!.bundleManifestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundles_ref: {
      value: dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRefToHclTerraform(struct!.bundlesRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef",
    },
    git_commit: {
      value: cdktf.stringToHclTerraform(struct!.gitCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_date: {
      value: cdktf.stringToHclTerraform(struct!.releaseDate),
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

export class DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleManifestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleManifestUrl = this._bundleManifestUrl;
    }
    if (this._bundlesRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundlesRef = this._bundlesRef?.internalValue;
    }
    if (this._gitCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitCommit = this._gitCommit;
    }
    if (this._releaseDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseDate = this._releaseDate;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleManifestUrl = undefined;
      this._bundlesRef.internalValue = undefined;
      this._gitCommit = undefined;
      this._releaseDate = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleManifestUrl = value.bundleManifestUrl;
      this._bundlesRef.internalValue = value.bundlesRef;
      this._gitCommit = value.gitCommit;
      this._releaseDate = value.releaseDate;
      this._version = value.version;
    }
  }

  // bundle_manifest_url - computed: false, optional: false, required: true
  private _bundleManifestUrl?: string; 
  public get bundleManifestUrl() {
    return this.getStringAttribute('bundle_manifest_url');
  }
  public set bundleManifestUrl(value: string) {
    this._bundleManifestUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleManifestUrlInput() {
    return this._bundleManifestUrl;
  }

  // bundles_ref - computed: false, optional: false, required: true
  private _bundlesRef = new DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRefOutputReference(this, "bundles_ref");
  public get bundlesRef() {
    return this._bundlesRef;
  }
  public putBundlesRef(value: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecBundlesRef) {
    this._bundlesRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesRefInput() {
    return this._bundlesRef.internalValue;
  }

  // git_commit - computed: false, optional: false, required: true
  private _gitCommit?: string; 
  public get gitCommit() {
    return this.getStringAttribute('git_commit');
  }
  public set gitCommit(value: string) {
    this._gitCommit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommitInput() {
    return this._gitCommit;
  }

  // release_date - computed: false, optional: false, required: true
  private _releaseDate?: string; 
  public get releaseDate() {
    return this.getStringAttribute('release_date');
  }
  public set releaseDate(value: string) {
    this._releaseDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseDateInput() {
    return this._releaseDate;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_eksa_release_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComEksaReleaseV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
