// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#metadata DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata;
  /**
  * ImageUpdateAutomationSpec defines the desired state of ImageUpdateAutomation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#spec DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec;
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#annotations DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#labels DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#namespace DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadataToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef {
  /**
  * Branch to check out, defaults to 'master' if no other field is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#branch DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#branch}
  */
  readonly branch?: string;
  /**
  * Commit SHA to check out, takes precedence over all reference fields. This can be combined with Branch to shallow clone the branch, in which the commit is expected to exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#commit DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#commit}
  */
  readonly commit?: string;
  /**
  * Name of the reference to check out; takes precedence over Branch, Tag and SemVer. It must be a valid Git reference: https://git-scm.com/docs/git-check-ref-format#_description Examples: 'refs/heads/main', 'refs/tags/v0.1.0', 'refs/pull/420/head', 'refs/merge-requests/1/head'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * SemVer tag expression to check out, takes precedence over Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#semver DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#semver}
  */
  readonly semver?: string;
  /**
  * Tag to check out, takes precedence over Branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#tag DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    commit: cdktf.stringToTerraform(struct!.commit),
    name: cdktf.stringToTerraform(struct!.name),
    semver: cdktf.stringToTerraform(struct!.semver),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit: {
      value: cdktf.stringToHclTerraform(struct!.commit),
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
    semver: {
      value: cdktf.stringToHclTerraform(struct!.semver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commit !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._semver !== undefined) {
      hasAnyValues = true;
      internalValueResult.semver = this._semver;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._commit = undefined;
      this._name = undefined;
      this._semver = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._commit = value.commit;
      this._name = value.name;
      this._semver = value.semver;
      this._tag = value.tag;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit - computed: false, optional: true, required: false
  private _commit?: string; 
  public get commit() {
    return this.getStringAttribute('commit');
  }
  public set commit(value: string) {
    this._commit = value;
  }
  public resetCommit() {
    this._commit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit;
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

  // semver - computed: false, optional: true, required: false
  private _semver?: string; 
  public get semver() {
    return this.getStringAttribute('semver');
  }
  public set semver(value: string) {
    this._semver = value;
  }
  public resetSemver() {
    this._semver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semverInput() {
    return this._semver;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout {
  /**
  * Reference gives a branch, tag or commit to clone from the Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#ref DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#ref}
  */
  readonly ref: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRefToTerraform(struct!.ref),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor {
  /**
  * Email gives the email to provide when making a commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#email DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#email}
  */
  readonly email: string;
  /**
  * Name gives the name to provide when making a commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthorToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthorToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef | cdktf.IResolvable): any {
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

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey {
  /**
  * SecretRef holds the name to a secret that contains a 'git.asc' key corresponding to the ASCII Armored file containing the GPG signing keypair as the value. It must be in the same namespace as the ImageUpdateAutomation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#secret_ref DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#secret_ref}
  */
  readonly secretRef: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeyToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeyToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeySecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit {
  /**
  * Author gives the email and optionally the name to use as the author of commits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#author DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#author}
  */
  readonly author: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor;
  /**
  * MessageTemplate provides a template for the commit message, into which will be interpolated the details of the change made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#message_template DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#message_template}
  */
  readonly messageTemplate?: string;
  /**
  * SigningKey provides the option to sign commits with a GPG key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#signing_key DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#signing_key}
  */
  readonly signingKey?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    author: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthorToTerraform(struct!.author),
    message_template: cdktf.stringToTerraform(struct!.messageTemplate),
    signing_key: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeyToTerraform(struct!.signingKey),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    author: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthorToHclTerraform(struct!.author),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor",
    },
    message_template: {
      value: cdktf.stringToHclTerraform(struct!.messageTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_key: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeyToHclTerraform(struct!.signingKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._author?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.author = this._author?.internalValue;
    }
    if (this._messageTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageTemplate = this._messageTemplate;
    }
    if (this._signingKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingKey = this._signingKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._author.internalValue = undefined;
      this._messageTemplate = undefined;
      this._signingKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._author.internalValue = value.author;
      this._messageTemplate = value.messageTemplate;
      this._signingKey.internalValue = value.signingKey;
    }
  }

  // author - computed: false, optional: false, required: true
  private _author = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthorOutputReference(this, "author");
  public get author() {
    return this._author;
  }
  public putAuthor(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitAuthor) {
    this._author.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author.internalValue;
  }

  // message_template - computed: false, optional: true, required: false
  private _messageTemplate?: string; 
  public get messageTemplate() {
    return this.getStringAttribute('message_template');
  }
  public set messageTemplate(value: string) {
    this._messageTemplate = value;
  }
  public resetMessageTemplate() {
    this._messageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTemplateInput() {
    return this._messageTemplate;
  }

  // signing_key - computed: false, optional: true, required: false
  private _signingKey = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKeyOutputReference(this, "signing_key");
  public get signingKey() {
    return this._signingKey;
  }
  public putSigningKey(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitSigningKey) {
    this._signingKey.internalValue = value;
  }
  public resetSigningKey() {
    this._signingKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey.internalValue;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush {
  /**
  * Branch specifies that commits should be pushed to the branch named. The branch is created using '.spec.checkout.branch' as the starting point, if it doesn't already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#branch DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#branch}
  */
  readonly branch?: string;
  /**
  * Options specifies the push options that are sent to the Git server when performing a push operation. For details, see: https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#options DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Refspec specifies the Git Refspec to use for a push operation. If both Branch and Refspec are provided, then the commit is pushed to the branch and also using the specified refspec. For more details about Git Refspecs, see: https://git-scm.com/book/en/v2/Git-Internals-The-Refspec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#refspec DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#refspec}
  */
  readonly refspec?: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPushToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    refspec: cdktf.stringToTerraform(struct!.refspec),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPushToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    refspec: {
      value: cdktf.stringToHclTerraform(struct!.refspec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._refspec !== undefined) {
      hasAnyValues = true;
      internalValueResult.refspec = this._refspec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._options = undefined;
      this._refspec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._options = value.options;
      this._refspec = value.refspec;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // refspec - computed: false, optional: true, required: false
  private _refspec?: string; 
  public get refspec() {
    return this.getStringAttribute('refspec');
  }
  public set refspec(value: string) {
    this._refspec = value;
  }
  public resetRefspec() {
    this._refspec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refspecInput() {
    return this._refspec;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit {
  /**
  * Checkout gives the parameters for cloning the git repository, ready to make changes. If not present, the 'spec.ref' field from the referenced 'GitRepository' or its default will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#checkout DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#checkout}
  */
  readonly checkout?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout;
  /**
  * Commit specifies how to commit to the git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#commit DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#commit}
  */
  readonly commit: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit;
  /**
  * Push specifies how and where to push commits made by the automation. If missing, commits are pushed (back) to '.spec.checkout.branch' or its default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#push DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#push}
  */
  readonly push?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkout: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutToTerraform(struct!.checkout),
    commit: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitToTerraform(struct!.commit),
    push: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPushToTerraform(struct!.push),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkout: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutToHclTerraform(struct!.checkout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout",
    },
    commit: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitToHclTerraform(struct!.commit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit",
    },
    push: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPushToHclTerraform(struct!.push),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkout = this._checkout?.internalValue;
    }
    if (this._commit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commit = this._commit?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkout.internalValue = undefined;
      this._commit.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkout.internalValue = value.checkout;
      this._commit.internalValue = value.commit;
      this._push.internalValue = value.push;
    }
  }

  // checkout - computed: false, optional: true, required: false
  private _checkout = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckoutOutputReference(this, "checkout");
  public get checkout() {
    return this._checkout;
  }
  public putCheckout(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCheckout) {
    this._checkout.internalValue = value;
  }
  public resetCheckout() {
    this._checkout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkoutInput() {
    return this._checkout.internalValue;
  }

  // commit - computed: false, optional: false, required: true
  private _commit = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }
  public putCommit(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitCommit) {
    this._commit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#key DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#operator DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#values DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsOutputReference {
    return new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#match_expressions DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#match_labels DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#api_version DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#kind DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#name DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#namespace DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRefToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRefToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate {
  /**
  * Path to the directory containing the manifests to be updated. Defaults to 'None', which translates to the root path of the GitRepositoryRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#path DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * Strategy names the strategy to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#strategy DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#strategy}
  */
  readonly strategy: string;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdateToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdateToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate | cdktf.IResolvable): any {
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
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._strategy = value.strategy;
    }
  }

  // path - computed: false, optional: true, required: false
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

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec {
  /**
  * GitSpec contains all the git-specific definitions. This is technically optional, but in practice mandatory until there are other kinds of source allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#git DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#git}
  */
  readonly git?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit;
  /**
  * Interval gives an lower bound for how often the automation run should be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#interval DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#interval}
  */
  readonly interval: string;
  /**
  * PolicySelector allows to filter applied policies based on labels. By default includes all policies in namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#policy_selector DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#policy_selector}
  */
  readonly policySelector?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector;
  /**
  * SourceRef refers to the resource giving access details to a git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#source_ref DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#source_ref}
  */
  readonly sourceRef: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef;
  /**
  * Suspend tells the controller to not run this automation, until it is unset (or set to false). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#suspend DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * Update gives the specification for how to update the files in the repository. This can be left empty, to use the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#update DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest#update}
  */
  readonly update?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate;
}

export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecToTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    git: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitToTerraform(struct!.git),
    interval: cdktf.stringToTerraform(struct!.interval),
    policy_selector: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorToTerraform(struct!.policySelector),
    source_ref: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRefToTerraform(struct!.sourceRef),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    update: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdateToTerraform(struct!.update),
  }
}


export function dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    git: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitToHclTerraform(struct!.git),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_selector: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorToHclTerraform(struct!.policySelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector",
    },
    source_ref: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdateToHclTerraform(struct!.update),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._policySelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySelector = this._policySelector?.internalValue;
    }
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._update?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._git.internalValue = undefined;
      this._interval = undefined;
      this._policySelector.internalValue = undefined;
      this._sourceRef.internalValue = undefined;
      this._suspend = undefined;
      this._update.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._git.internalValue = value.git;
      this._interval = value.interval;
      this._policySelector.internalValue = value.policySelector;
      this._sourceRef.internalValue = value.sourceRef;
      this._suspend = value.suspend;
      this._update.internalValue = value.update;
    }
  }

  // git - computed: false, optional: true, required: false
  private _git = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // policy_selector - computed: false, optional: true, required: false
  private _policySelector = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelectorOutputReference(this, "policy_selector");
  public get policySelector() {
    return this._policySelector;
  }
  public putPolicySelector(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecPolicySelector) {
    this._policySelector.internalValue = value;
  }
  public resetPolicySelector() {
    this._policySelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySelectorInput() {
    return this._policySelector.internalValue;
  }

  // source_ref - computed: false, optional: false, required: true
  private _sourceRef = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecSourceRef) {
    this._sourceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
  }

  // suspend - computed: false, optional: true, required: false
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

  // update - computed: false, optional: true, required: false
  private _update = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecUpdate) {
    this._update.internalValue = value;
  }
  public resetUpdate() {
    this._update.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest k8s_image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest}
*/
export class DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest k8s_image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_image_toolkit_fluxcd_io_image_update_automation_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec) {
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
      metadata: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImageToolkitFluxcdIoImageUpdateAutomationV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
