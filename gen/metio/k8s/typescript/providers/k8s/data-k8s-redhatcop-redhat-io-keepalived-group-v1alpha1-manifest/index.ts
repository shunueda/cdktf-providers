// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#metadata DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata;
  /**
  * KeepalivedGroupSpec defines the desired state of KeepalivedGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#spec DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec;
}
export interface DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#annotations DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#labels DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#name DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#namespace DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#name DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRefToTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRefToHclTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#secret_key DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#secret_key}
  */
  readonly secretKey?: string;
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#secret_ref DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef;
}

export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthToTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    secret_ref: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthToHclTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretKey = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretKey = value.secretKey;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec {
  /**
  * // +kubebuilder:validation:UniqueItems=true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#blacklist_router_i_ds DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#blacklist_router_i_ds}
  */
  readonly blacklistRouterIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#daemonset_pod_annotations DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#daemonset_pod_annotations}
  */
  readonly daemonsetPodAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#daemonset_pod_priority_class_name DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#daemonset_pod_priority_class_name}
  */
  readonly daemonsetPodPriorityClassName?: string;
  /**
  * //+kubebuilder:validation:Optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#image DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#interface DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#interface_from_ip DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#interface_from_ip}
  */
  readonly interfaceFromIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#node_selector DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PasswordAuth references a Kubernetes secret to extract the password for VRRP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#password_auth DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#password_auth}
  */
  readonly passwordAuth?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#unicast_enabled DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#unicast_enabled}
  */
  readonly unicastEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#verbatim_config DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest#verbatim_config}
  */
  readonly verbatimConfig?: { [key: string]: string };
}

export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklist_router_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklistRouterIDs),
    daemonset_pod_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.daemonsetPodAnnotations),
    daemonset_pod_priority_class_name: cdktf.stringToTerraform(struct!.daemonsetPodPriorityClassName),
    image: cdktf.stringToTerraform(struct!.image),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_from_ip: cdktf.stringToTerraform(struct!.interfaceFromIp),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    password_auth: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthToTerraform(struct!.passwordAuth),
    unicast_enabled: cdktf.booleanToTerraform(struct!.unicastEnabled),
    verbatim_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.verbatimConfig),
  }
}


export function dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklist_router_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklistRouterIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    daemonset_pod_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.daemonsetPodAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    daemonset_pod_priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.daemonsetPodPriorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_from_ip: {
      value: cdktf.stringToHclTerraform(struct!.interfaceFromIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    password_auth: {
      value: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthToHclTerraform(struct!.passwordAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth",
    },
    unicast_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unicastEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verbatim_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.verbatimConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklistRouterIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistRouterIDs = this._blacklistRouterIDs;
    }
    if (this._daemonsetPodAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonsetPodAnnotations = this._daemonsetPodAnnotations;
    }
    if (this._daemonsetPodPriorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.daemonsetPodPriorityClassName = this._daemonsetPodPriorityClassName;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceFromIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceFromIp = this._interfaceFromIp;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._passwordAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuth = this._passwordAuth?.internalValue;
    }
    if (this._unicastEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastEnabled = this._unicastEnabled;
    }
    if (this._verbatimConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimConfig = this._verbatimConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklistRouterIDs = undefined;
      this._daemonsetPodAnnotations = undefined;
      this._daemonsetPodPriorityClassName = undefined;
      this._image = undefined;
      this._interface = undefined;
      this._interfaceFromIp = undefined;
      this._nodeSelector = undefined;
      this._passwordAuth.internalValue = undefined;
      this._unicastEnabled = undefined;
      this._verbatimConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklistRouterIDs = value.blacklistRouterIDs;
      this._daemonsetPodAnnotations = value.daemonsetPodAnnotations;
      this._daemonsetPodPriorityClassName = value.daemonsetPodPriorityClassName;
      this._image = value.image;
      this._interface = value.interface;
      this._interfaceFromIp = value.interfaceFromIp;
      this._nodeSelector = value.nodeSelector;
      this._passwordAuth.internalValue = value.passwordAuth;
      this._unicastEnabled = value.unicastEnabled;
      this._verbatimConfig = value.verbatimConfig;
    }
  }

  // blacklist_router_i_ds - computed: false, optional: true, required: false
  private _blacklistRouterIDs?: string[]; 
  public get blacklistRouterIDs() {
    return this.getListAttribute('blacklist_router_i_ds');
  }
  public set blacklistRouterIDs(value: string[]) {
    this._blacklistRouterIDs = value;
  }
  public resetBlacklistRouterIDs() {
    this._blacklistRouterIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistRouterIDsInput() {
    return this._blacklistRouterIDs;
  }

  // daemonset_pod_annotations - computed: false, optional: true, required: false
  private _daemonsetPodAnnotations?: { [key: string]: string }; 
  public get daemonsetPodAnnotations() {
    return this.getStringMapAttribute('daemonset_pod_annotations');
  }
  public set daemonsetPodAnnotations(value: { [key: string]: string }) {
    this._daemonsetPodAnnotations = value;
  }
  public resetDaemonsetPodAnnotations() {
    this._daemonsetPodAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetPodAnnotationsInput() {
    return this._daemonsetPodAnnotations;
  }

  // daemonset_pod_priority_class_name - computed: false, optional: true, required: false
  private _daemonsetPodPriorityClassName?: string; 
  public get daemonsetPodPriorityClassName() {
    return this.getStringAttribute('daemonset_pod_priority_class_name');
  }
  public set daemonsetPodPriorityClassName(value: string) {
    this._daemonsetPodPriorityClassName = value;
  }
  public resetDaemonsetPodPriorityClassName() {
    this._daemonsetPodPriorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonsetPodPriorityClassNameInput() {
    return this._daemonsetPodPriorityClassName;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_from_ip - computed: false, optional: true, required: false
  private _interfaceFromIp?: string; 
  public get interfaceFromIp() {
    return this.getStringAttribute('interface_from_ip');
  }
  public set interfaceFromIp(value: string) {
    this._interfaceFromIp = value;
  }
  public resetInterfaceFromIp() {
    this._interfaceFromIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceFromIpInput() {
    return this._interfaceFromIp;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // password_auth - computed: false, optional: true, required: false
  private _passwordAuth = new DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuthOutputReference(this, "password_auth");
  public get passwordAuth() {
    return this._passwordAuth;
  }
  public putPasswordAuth(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecPasswordAuth) {
    this._passwordAuth.internalValue = value;
  }
  public resetPasswordAuth() {
    this._passwordAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthInput() {
    return this._passwordAuth.internalValue;
  }

  // unicast_enabled - computed: false, optional: true, required: false
  private _unicastEnabled?: boolean | cdktf.IResolvable; 
  public get unicastEnabled() {
    return this.getBooleanAttribute('unicast_enabled');
  }
  public set unicastEnabled(value: boolean | cdktf.IResolvable) {
    this._unicastEnabled = value;
  }
  public resetUnicastEnabled() {
    this._unicastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastEnabledInput() {
    return this._unicastEnabled;
  }

  // verbatim_config - computed: false, optional: true, required: false
  private _verbatimConfig?: { [key: string]: string }; 
  public get verbatimConfig() {
    return this.getStringMapAttribute('verbatim_config');
  }
  public set verbatimConfig(value: { [key: string]: string }) {
    this._verbatimConfig = value;
  }
  public resetVerbatimConfig() {
    this._verbatimConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimConfigInput() {
    return this._verbatimConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest k8s_redhatcop_redhat_io_keepalived_group_v1alpha1_manifest}
*/
export class DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_redhatcop_redhat_io_keepalived_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_redhatcop_redhat_io_keepalived_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/redhatcop_redhat_io_keepalived_group_v1alpha1_manifest k8s_redhatcop_redhat_io_keepalived_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_redhatcop_redhat_io_keepalived_group_v1alpha1_manifest',
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
  private _metadata = new DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRedhatcopRedhatIoKeepalivedGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
