// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata;
  /**
  * VMUserSpec defines the desired state of VMUser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#allow_list DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#deny_list DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#deny_list}
  */
  readonly denyList?: string[];
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFiltersToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    deny_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyList),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFiltersToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList;
    }
    if (this._denyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyList = this._denyList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowList = undefined;
      this._denyList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowList = value.allowList;
      this._denyList = value.denyList;
    }
  }

  // allow_list - computed: false, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // deny_list - computed: false, optional: true, required: false
  private _denyList?: string[]; 
  public get denyList() {
    return this.getListAttribute('deny_list');
  }
  public set denyList(value: string[]) {
    this._denyList = value;
  }
  public resetDenyList() {
    this._denyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyListInput() {
    return this._denyList;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd {
  /**
  * Kind one of: VMAgent,VMAlert, VMSingle, VMCluster/vmselect, VMCluster/vmstorage,VMCluster/vminsert or VMAlertManager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name target CRD object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace target CRD object namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrdToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrdToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic {
  /**
  * URL http url for given staticRef.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#url DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#url}
  */
  readonly url?: string;
  /**
  * URLs allows setting multiple urls for load-balancing at vmauth-side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#urls DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#urls}
  */
  readonly urls?: string[];
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStaticToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStaticToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
      this._urls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
      this._urls = value.urls;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth {
  /**
  * The secret in the service scrape namespace that contains the password for authentication. It must be at them same namespace as CRD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#password}
  */
  readonly password: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword;
  /**
  * The secret in the service scrape namespace that contains the username for authentication. It must be at them same namespace as CRD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#username}
  */
  readonly username: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPasswordToTerraform(struct!.password),
    username: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthUsername) {
    this._username.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs {
  /**
  * CRD describes exist operator's CRD object, operator generates access url based on CRD params.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#crd DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#crd}
  */
  readonly crd?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd;
  /**
  * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#discover_backend_ips DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#discover_backend_ips}
  */
  readonly discoverBackendIps?: boolean | cdktf.IResolvable;
  /**
  * DropSrcPathPrefixParts is the number of '/'-delimited request path prefix parts to drop before proxying the request to backend. See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#drop_src_path_prefix_parts DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#drop_src_path_prefix_parts}
  */
  readonly dropSrcPathPrefixParts?: number;
  /**
  * RequestHeaders represent additional http headers, that vmauth uses in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.68.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#hosts DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * LoadBalancingPolicy defines load balancing policy to use for backend urls. Supported policies: least_loaded, first_available. See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default 'least_loaded')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#load_balancing_policy DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#load_balancing_policy}
  */
  readonly loadBalancingPolicy?: string;
  /**
  * Paths - matched path to route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#paths DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#paths}
  */
  readonly paths?: string[];
  /**
  * ResponseHeaders represent additional http headers, that vmauth adds for request response in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.93.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#response_headers DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#response_headers}
  */
  readonly responseHeaders?: string[];
  /**
  * RetryStatusCodes defines http status codes in numeric format for request retries Can be defined per target or at VMUser.spec level e.g. [429,503]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#retry_status_codes DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#retry_status_codes}
  */
  readonly retryStatusCodes?: string[];
  /**
  * SrcHeaders is an optional list of headers, which must match request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#src_headers DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#src_headers}
  */
  readonly srcHeaders?: string[];
  /**
  * SrcQueryArgs is an optional list of query args, which must match request URL query args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#src_query_args DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#src_query_args}
  */
  readonly srcQueryArgs?: string[];
  /**
  * Static - user defined url for traffic forward, for instance http://vmsingle:8429
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#static DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#static}
  */
  readonly static?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic;
  /**
  * TargetPathSuffix allows to add some suffix to the target path It allows to hide tenant configuration from user with crd as ref. it also may contain any url encoded params.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#target_path_suffix DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#target_path_suffix}
  */
  readonly targetPathSuffix?: string;
  /**
  * TargetRefBasicAuth allow an target endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#target_ref_basic_auth DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#target_ref_basic_auth}
  */
  readonly targetRefBasicAuth?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crd: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrdToTerraform(struct!.crd),
    discover_backend_ips: cdktf.booleanToTerraform(struct!.discoverBackendIps),
    drop_src_path_prefix_parts: cdktf.numberToTerraform(struct!.dropSrcPathPrefixParts),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    load_balancing_policy: cdktf.stringToTerraform(struct!.loadBalancingPolicy),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeaders),
    retry_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryStatusCodes),
    src_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcHeaders),
    src_query_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcQueryArgs),
    static: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStaticToTerraform(struct!.static),
    target_path_suffix: cdktf.stringToTerraform(struct!.targetPathSuffix),
    target_ref_basic_auth: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthToTerraform(struct!.targetRefBasicAuth),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crd: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrdToHclTerraform(struct!.crd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd",
    },
    discover_backend_ips: {
      value: cdktf.booleanToHclTerraform(struct!.discoverBackendIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_src_path_prefix_parts: {
      value: cdktf.numberToHclTerraform(struct!.dropSrcPathPrefixParts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    load_balancing_policy: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_status_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_query_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcQueryArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    static: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic",
    },
    target_path_suffix: {
      value: cdktf.stringToHclTerraform(struct!.targetPathSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref_basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthToHclTerraform(struct!.targetRefBasicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crd = this._crd?.internalValue;
    }
    if (this._discoverBackendIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverBackendIps = this._discoverBackendIps;
    }
    if (this._dropSrcPathPrefixParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSrcPathPrefixParts = this._dropSrcPathPrefixParts;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._loadBalancingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingPolicy = this._loadBalancingPolicy;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    if (this._retryStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStatusCodes = this._retryStatusCodes;
    }
    if (this._srcHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaders = this._srcHeaders;
    }
    if (this._srcQueryArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcQueryArgs = this._srcQueryArgs;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    if (this._targetPathSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPathSuffix = this._targetPathSuffix;
    }
    if (this._targetRefBasicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefBasicAuth = this._targetRefBasicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crd.internalValue = undefined;
      this._discoverBackendIps = undefined;
      this._dropSrcPathPrefixParts = undefined;
      this._headers = undefined;
      this._hosts = undefined;
      this._loadBalancingPolicy = undefined;
      this._paths = undefined;
      this._responseHeaders = undefined;
      this._retryStatusCodes = undefined;
      this._srcHeaders = undefined;
      this._srcQueryArgs = undefined;
      this._static.internalValue = undefined;
      this._targetPathSuffix = undefined;
      this._targetRefBasicAuth.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crd.internalValue = value.crd;
      this._discoverBackendIps = value.discoverBackendIps;
      this._dropSrcPathPrefixParts = value.dropSrcPathPrefixParts;
      this._headers = value.headers;
      this._hosts = value.hosts;
      this._loadBalancingPolicy = value.loadBalancingPolicy;
      this._paths = value.paths;
      this._responseHeaders = value.responseHeaders;
      this._retryStatusCodes = value.retryStatusCodes;
      this._srcHeaders = value.srcHeaders;
      this._srcQueryArgs = value.srcQueryArgs;
      this._static.internalValue = value.static;
      this._targetPathSuffix = value.targetPathSuffix;
      this._targetRefBasicAuth.internalValue = value.targetRefBasicAuth;
    }
  }

  // crd - computed: false, optional: true, required: false
  private _crd = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrdOutputReference(this, "crd");
  public get crd() {
    return this._crd;
  }
  public putCrd(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsCrd) {
    this._crd.internalValue = value;
  }
  public resetCrd() {
    this._crd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdInput() {
    return this._crd.internalValue;
  }

  // discover_backend_ips - computed: false, optional: true, required: false
  private _discoverBackendIps?: boolean | cdktf.IResolvable; 
  public get discoverBackendIps() {
    return this.getBooleanAttribute('discover_backend_ips');
  }
  public set discoverBackendIps(value: boolean | cdktf.IResolvable) {
    this._discoverBackendIps = value;
  }
  public resetDiscoverBackendIps() {
    this._discoverBackendIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverBackendIpsInput() {
    return this._discoverBackendIps;
  }

  // drop_src_path_prefix_parts - computed: false, optional: true, required: false
  private _dropSrcPathPrefixParts?: number; 
  public get dropSrcPathPrefixParts() {
    return this.getNumberAttribute('drop_src_path_prefix_parts');
  }
  public set dropSrcPathPrefixParts(value: number) {
    this._dropSrcPathPrefixParts = value;
  }
  public resetDropSrcPathPrefixParts() {
    this._dropSrcPathPrefixParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSrcPathPrefixPartsInput() {
    return this._dropSrcPathPrefixParts;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // load_balancing_policy - computed: false, optional: true, required: false
  private _loadBalancingPolicy?: string; 
  public get loadBalancingPolicy() {
    return this.getStringAttribute('load_balancing_policy');
  }
  public set loadBalancingPolicy(value: string) {
    this._loadBalancingPolicy = value;
  }
  public resetLoadBalancingPolicy() {
    this._loadBalancingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingPolicyInput() {
    return this._loadBalancingPolicy;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders?: string[]; 
  public get responseHeaders() {
    return this.getListAttribute('response_headers');
  }
  public set responseHeaders(value: string[]) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }

  // retry_status_codes - computed: false, optional: true, required: false
  private _retryStatusCodes?: string[]; 
  public get retryStatusCodes() {
    return this.getListAttribute('retry_status_codes');
  }
  public set retryStatusCodes(value: string[]) {
    this._retryStatusCodes = value;
  }
  public resetRetryStatusCodes() {
    this._retryStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStatusCodesInput() {
    return this._retryStatusCodes;
  }

  // src_headers - computed: false, optional: true, required: false
  private _srcHeaders?: string[]; 
  public get srcHeaders() {
    return this.getListAttribute('src_headers');
  }
  public set srcHeaders(value: string[]) {
    this._srcHeaders = value;
  }
  public resetSrcHeaders() {
    this._srcHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeadersInput() {
    return this._srcHeaders;
  }

  // src_query_args - computed: false, optional: true, required: false
  private _srcQueryArgs?: string[]; 
  public get srcQueryArgs() {
    return this.getListAttribute('src_query_args');
  }
  public set srcQueryArgs(value: string[]) {
    this._srcQueryArgs = value;
  }
  public resetSrcQueryArgs() {
    this._srcQueryArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcQueryArgsInput() {
    return this._srcQueryArgs;
  }

  // static - computed: false, optional: true, required: false
  private _static = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsStatic) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }

  // target_path_suffix - computed: false, optional: true, required: false
  private _targetPathSuffix?: string; 
  public get targetPathSuffix() {
    return this.getStringAttribute('target_path_suffix');
  }
  public set targetPathSuffix(value: string) {
    this._targetPathSuffix = value;
  }
  public resetTargetPathSuffix() {
    this._targetPathSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathSuffixInput() {
    return this._targetPathSuffix;
  }

  // target_ref_basic_auth - computed: false, optional: true, required: false
  private _targetRefBasicAuth = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuthOutputReference(this, "target_ref_basic_auth");
  public get targetRefBasicAuth() {
    return this._targetRefBasicAuth;
  }
  public putTargetRefBasicAuth(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsTargetRefBasicAuth) {
    this._targetRefBasicAuth.internalValue = value;
  }
  public resetTargetRefBasicAuth() {
    this._targetRefBasicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefBasicAuthInput() {
    return this._targetRefBasicAuth.internalValue;
  }
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig {
  /**
  * Stuct containing the CA cert to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#ca DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa;
  /**
  * Path to the CA cert in the container to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#ca_file DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Struct containing the client cert file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#cert DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#cert}
  */
  readonly cert?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert;
  /**
  * Path to the client cert file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#insecure_skip_verify DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Path to the client key file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key_secret DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#server_name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaToTerraform(struct!.ca),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertToTerraform(struct!.cert),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecretToTerraform(struct!.keySecret),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._caFile = undefined;
      this._cert.internalValue = undefined;
      this._certFile = undefined;
      this._insecureSkipVerify = undefined;
      this._keyFile = undefined;
      this._keySecret.internalValue = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._caFile = value.caFile;
      this._cert.internalValue = value.cert;
      this._certFile = value.certFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keyFile = value.keyFile;
      this._keySecret.internalValue = value.keySecret;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec {
  /**
  * BearerToken Authorization header value for accessing protected endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#bearer_token DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * DefaultURLs backend url for non-matching paths filter usually used for default backend with error message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#default_url DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#default_url}
  */
  readonly defaultUrl?: string[];
  /**
  * DisableSecretCreation skips related secret creation for vmuser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#disable_secret_creation DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#disable_secret_creation}
  */
  readonly disableSecretCreation?: boolean | cdktf.IResolvable;
  /**
  * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#discover_backend_ips DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#discover_backend_ips}
  */
  readonly discoverBackendIps?: boolean | cdktf.IResolvable;
  /**
  * DropSrcPathPrefixParts is the number of '/'-delimited request path prefix parts to drop before proxying the request to backend. See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#drop_src_path_prefix_parts DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#drop_src_path_prefix_parts}
  */
  readonly dropSrcPathPrefixParts?: number;
  /**
  * GeneratePassword instructs operator to generate password for user if spec.password if empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#generate_password DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#generate_password}
  */
  readonly generatePassword?: boolean | cdktf.IResolvable;
  /**
  * Headers represent additional http headers, that vmauth uses in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.68.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * IPFilters defines per target src ip filters supported only with enterprise version of [vmauth](https://docs.victoriametrics.com/vmauth/#ip-filters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#ip_filters DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#ip_filters}
  */
  readonly ipFilters?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters;
  /**
  * LoadBalancingPolicy defines load balancing policy to use for backend urls. Supported policies: least_loaded, first_available. See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default 'least_loaded')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#load_balancing_policy DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#load_balancing_policy}
  */
  readonly loadBalancingPolicy?: string;
  /**
  * MaxConcurrentRequests defines max concurrent requests per user 300 is default value for vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#max_concurrent_requests DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * MetricLabels - additional labels for metrics exported by vmauth for given user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#metric_labels DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#metric_labels}
  */
  readonly metricLabels?: { [key: string]: string };
  /**
  * Name of the VMUser object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Password basic auth password for accessing protected endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#password}
  */
  readonly password?: string;
  /**
  * PasswordRef allows fetching password from user-create secret by its name and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#password_ref DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#password_ref}
  */
  readonly passwordRef?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef;
  /**
  * ResponseHeaders represent additional http headers, that vmauth adds for request response in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.93.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#response_headers DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#response_headers}
  */
  readonly responseHeaders?: string[];
  /**
  * RetryStatusCodes defines http status codes in numeric format for request retries e.g. [429,503]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#retry_status_codes DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#retry_status_codes}
  */
  readonly retryStatusCodes?: string[];
  /**
  * TargetRefs - reference to endpoints, which user may access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#target_refs DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#target_refs}
  */
  readonly targetRefs: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable;
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig;
  /**
  * TokenRef allows fetching token from user-created secrets by its name and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#token_ref DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#token_ref}
  */
  readonly tokenRef?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef;
  /**
  * UserName basic auth user name for accessing protected endpoint, will be replaced with metadata.name of VMUser if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    default_url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultUrl),
    disable_secret_creation: cdktf.booleanToTerraform(struct!.disableSecretCreation),
    discover_backend_ips: cdktf.booleanToTerraform(struct!.discoverBackendIps),
    drop_src_path_prefix_parts: cdktf.numberToTerraform(struct!.dropSrcPathPrefixParts),
    generate_password: cdktf.booleanToTerraform(struct!.generatePassword),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    ip_filters: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFiltersToTerraform(struct!.ipFilters),
    load_balancing_policy: cdktf.stringToTerraform(struct!.loadBalancingPolicy),
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    metric_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metricLabels),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    password_ref: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRefToTerraform(struct!.passwordRef),
    response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeaders),
    retry_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryStatusCodes),
    target_refs: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsToTerraform, false)(struct!.targetRefs),
    tls_config: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
    token_ref: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRefToTerraform(struct!.tokenRef),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultUrl),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_secret_creation: {
      value: cdktf.booleanToHclTerraform(struct!.disableSecretCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discover_backend_ips: {
      value: cdktf.booleanToHclTerraform(struct!.discoverBackendIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_src_path_prefix_parts: {
      value: cdktf.numberToHclTerraform(struct!.dropSrcPathPrefixParts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generate_password: {
      value: cdktf.booleanToHclTerraform(struct!.generatePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_filters: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFiltersToHclTerraform(struct!.ipFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters",
    },
    load_balancing_policy: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metricLabels),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_ref: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRefToHclTerraform(struct!.passwordRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef",
    },
    response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_status_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_refs: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsToHclTerraform, false)(struct!.targetRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsList",
    },
    tls_config: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig",
    },
    token_ref: {
      value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._defaultUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUrl = this._defaultUrl;
    }
    if (this._disableSecretCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSecretCreation = this._disableSecretCreation;
    }
    if (this._discoverBackendIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverBackendIps = this._discoverBackendIps;
    }
    if (this._dropSrcPathPrefixParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSrcPathPrefixParts = this._dropSrcPathPrefixParts;
    }
    if (this._generatePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.generatePassword = this._generatePassword;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ipFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilters = this._ipFilters?.internalValue;
    }
    if (this._loadBalancingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingPolicy = this._loadBalancingPolicy;
    }
    if (this._maxConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRequests = this._maxConcurrentRequests;
    }
    if (this._metricLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLabels = this._metricLabels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef?.internalValue;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    if (this._retryStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStatusCodes = this._retryStatusCodes;
    }
    if (this._targetRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefs = this._targetRefs?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerToken = undefined;
      this._defaultUrl = undefined;
      this._disableSecretCreation = undefined;
      this._discoverBackendIps = undefined;
      this._dropSrcPathPrefixParts = undefined;
      this._generatePassword = undefined;
      this._headers = undefined;
      this._ipFilters.internalValue = undefined;
      this._loadBalancingPolicy = undefined;
      this._maxConcurrentRequests = undefined;
      this._metricLabels = undefined;
      this._name = undefined;
      this._password = undefined;
      this._passwordRef.internalValue = undefined;
      this._responseHeaders = undefined;
      this._retryStatusCodes = undefined;
      this._targetRefs.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._tokenRef.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerToken = value.bearerToken;
      this._defaultUrl = value.defaultUrl;
      this._disableSecretCreation = value.disableSecretCreation;
      this._discoverBackendIps = value.discoverBackendIps;
      this._dropSrcPathPrefixParts = value.dropSrcPathPrefixParts;
      this._generatePassword = value.generatePassword;
      this._headers = value.headers;
      this._ipFilters.internalValue = value.ipFilters;
      this._loadBalancingPolicy = value.loadBalancingPolicy;
      this._maxConcurrentRequests = value.maxConcurrentRequests;
      this._metricLabels = value.metricLabels;
      this._name = value.name;
      this._password = value.password;
      this._passwordRef.internalValue = value.passwordRef;
      this._responseHeaders = value.responseHeaders;
      this._retryStatusCodes = value.retryStatusCodes;
      this._targetRefs.internalValue = value.targetRefs;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._tokenRef.internalValue = value.tokenRef;
      this._username = value.username;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // default_url - computed: false, optional: true, required: false
  private _defaultUrl?: string[]; 
  public get defaultUrl() {
    return this.getListAttribute('default_url');
  }
  public set defaultUrl(value: string[]) {
    this._defaultUrl = value;
  }
  public resetDefaultUrl() {
    this._defaultUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUrlInput() {
    return this._defaultUrl;
  }

  // disable_secret_creation - computed: false, optional: true, required: false
  private _disableSecretCreation?: boolean | cdktf.IResolvable; 
  public get disableSecretCreation() {
    return this.getBooleanAttribute('disable_secret_creation');
  }
  public set disableSecretCreation(value: boolean | cdktf.IResolvable) {
    this._disableSecretCreation = value;
  }
  public resetDisableSecretCreation() {
    this._disableSecretCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSecretCreationInput() {
    return this._disableSecretCreation;
  }

  // discover_backend_ips - computed: false, optional: true, required: false
  private _discoverBackendIps?: boolean | cdktf.IResolvable; 
  public get discoverBackendIps() {
    return this.getBooleanAttribute('discover_backend_ips');
  }
  public set discoverBackendIps(value: boolean | cdktf.IResolvable) {
    this._discoverBackendIps = value;
  }
  public resetDiscoverBackendIps() {
    this._discoverBackendIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverBackendIpsInput() {
    return this._discoverBackendIps;
  }

  // drop_src_path_prefix_parts - computed: false, optional: true, required: false
  private _dropSrcPathPrefixParts?: number; 
  public get dropSrcPathPrefixParts() {
    return this.getNumberAttribute('drop_src_path_prefix_parts');
  }
  public set dropSrcPathPrefixParts(value: number) {
    this._dropSrcPathPrefixParts = value;
  }
  public resetDropSrcPathPrefixParts() {
    this._dropSrcPathPrefixParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropSrcPathPrefixPartsInput() {
    return this._dropSrcPathPrefixParts;
  }

  // generate_password - computed: false, optional: true, required: false
  private _generatePassword?: boolean | cdktf.IResolvable; 
  public get generatePassword() {
    return this.getBooleanAttribute('generate_password');
  }
  public set generatePassword(value: boolean | cdktf.IResolvable) {
    this._generatePassword = value;
  }
  public resetGeneratePassword() {
    this._generatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePasswordInput() {
    return this._generatePassword;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // ip_filters - computed: false, optional: true, required: false
  private _ipFilters = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFiltersOutputReference(this, "ip_filters");
  public get ipFilters() {
    return this._ipFilters;
  }
  public putIpFilters(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecIpFilters) {
    this._ipFilters.internalValue = value;
  }
  public resetIpFilters() {
    this._ipFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFiltersInput() {
    return this._ipFilters.internalValue;
  }

  // load_balancing_policy - computed: false, optional: true, required: false
  private _loadBalancingPolicy?: string; 
  public get loadBalancingPolicy() {
    return this.getStringAttribute('load_balancing_policy');
  }
  public set loadBalancingPolicy(value: string) {
    this._loadBalancingPolicy = value;
  }
  public resetLoadBalancingPolicy() {
    this._loadBalancingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingPolicyInput() {
    return this._loadBalancingPolicy;
  }

  // max_concurrent_requests - computed: false, optional: true, required: false
  private _maxConcurrentRequests?: number; 
  public get maxConcurrentRequests() {
    return this.getNumberAttribute('max_concurrent_requests');
  }
  public set maxConcurrentRequests(value: number) {
    this._maxConcurrentRequests = value;
  }
  public resetMaxConcurrentRequests() {
    this._maxConcurrentRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentRequestsInput() {
    return this._maxConcurrentRequests;
  }

  // metric_labels - computed: false, optional: true, required: false
  private _metricLabels?: { [key: string]: string }; 
  public get metricLabels() {
    return this.getStringMapAttribute('metric_labels');
  }
  public set metricLabels(value: { [key: string]: string }) {
    this._metricLabels = value;
  }
  public resetMetricLabels() {
    this._metricLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLabelsInput() {
    return this._metricLabels;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_ref - computed: false, optional: true, required: false
  private _passwordRef = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRefOutputReference(this, "password_ref");
  public get passwordRef() {
    return this._passwordRef;
  }
  public putPasswordRef(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecPasswordRef) {
    this._passwordRef.internalValue = value;
  }
  public resetPasswordRef() {
    this._passwordRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders?: string[]; 
  public get responseHeaders() {
    return this.getListAttribute('response_headers');
  }
  public set responseHeaders(value: string[]) {
    this._responseHeaders = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders;
  }

  // retry_status_codes - computed: false, optional: true, required: false
  private _retryStatusCodes?: string[]; 
  public get retryStatusCodes() {
    return this.getListAttribute('retry_status_codes');
  }
  public set retryStatusCodes(value: string[]) {
    this._retryStatusCodes = value;
  }
  public resetRetryStatusCodes() {
    this._retryStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStatusCodesInput() {
    return this._retryStatusCodes;
  }

  // target_refs - computed: false, optional: false, required: true
  private _targetRefs = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefsList(this, "target_refs", false);
  public get targetRefs() {
    return this._targetRefs;
  }
  public putTargetRefs(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTargetRefs[] | cdktf.IResolvable) {
    this._targetRefs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefsInput() {
    return this._targetRefs.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest k8s_operator_victoriametrics_com_vm_user_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_user_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmUserV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_user_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_user_v1beta1_manifest k8s_operator_victoriametrics_com_vm_user_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_user_v1beta1_manifest',
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmUserV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
