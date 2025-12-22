// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#metadata DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata;
  /**
  * APIcastSpec defines the desired state of APIcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#spec DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec;
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#annotations DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#labels DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#namespace DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments {
  /**
  * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#secret_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments | cdktf.IResolvable | undefined) {
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
  private _secretRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsOutputReference {
    return new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies {
  /**
  * Name specifies the name of the custom policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * SecretRef specifies the secret holding the custom policy metadata and lua code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#secret_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef;
  /**
  * Version specifies the name of the custom policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#version DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secret_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRefToTerraform(struct!.secretRef),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies | cdktf.IResolvable): any {
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
    secret_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef",
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secretRef.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secretRef.internalValue = value.secretRef;
      this._version = value.version;
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesOutputReference {
    return new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls {
  /**
  * hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#hosts DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the 'Host' header field used by an IngressRule, the SNI host is used for termination and value of the 'Host' header is used for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#secret_name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._secretName = value.secretName;
    }
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

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsOutputReference {
    return new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#host DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#tls DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls[] | cdktf.IResolvable;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    tls: cdktf.listMapper(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsToTerraform, false)(struct!.tls),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: cdktf.listMapperHcl(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsToHclTerraform, false)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._tls.internalValue = value.tls;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostTls[] | cdktf.IResolvable) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry {
  /**
  * Enabled controls whether OpenTelemetry integration with APIcast is enabled. By default it is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#enabled DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * TracingConfigSecretKey contains the key of the secret to select the configuration from. if unspecified, the first secret key in lexicographical order will be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#tracing_config_secret_key DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#tracing_config_secret_key}
  */
  readonly tracingConfigSecretKey?: string;
  /**
  * TracingConfigSecretRef contains a Secret reference the Opentelemetry configuration. The configuration file specification is defined in the Nginx instrumentation library repo https://github.com/open-telemetry/opentelemetry-cpp-contrib/tree/main/instrumentation/nginx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#tracing_config_secret_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#tracing_config_secret_ref}
  */
  readonly tracingConfigSecretRef?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    tracing_config_secret_key: cdktf.stringToTerraform(struct!.tracingConfigSecretKey),
    tracing_config_secret_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRefToTerraform(struct!.tracingConfigSecretRef),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry | cdktf.IResolvable): any {
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
    tracing_config_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.tracingConfigSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracing_config_secret_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRefToHclTerraform(struct!.tracingConfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._tracingConfigSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfigSecretKey = this._tracingConfigSecretKey;
    }
    if (this._tracingConfigSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfigSecretRef = this._tracingConfigSecretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._tracingConfigSecretKey = undefined;
      this._tracingConfigSecretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._tracingConfigSecretKey = value.tracingConfigSecretKey;
      this._tracingConfigSecretRef.internalValue = value.tracingConfigSecretRef;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // tracing_config_secret_key - computed: false, optional: true, required: false
  private _tracingConfigSecretKey?: string; 
  public get tracingConfigSecretKey() {
    return this.getStringAttribute('tracing_config_secret_key');
  }
  public set tracingConfigSecretKey(value: string) {
    this._tracingConfigSecretKey = value;
  }
  public resetTracingConfigSecretKey() {
    this._tracingConfigSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigSecretKeyInput() {
    return this._tracingConfigSecretKey;
  }

  // tracing_config_secret_ref - computed: false, optional: true, required: false
  private _tracingConfigSecretRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRefOutputReference(this, "tracing_config_secret_ref");
  public get tracingConfigSecretRef() {
    return this._tracingConfigSecretRef;
  }
  public putTracingConfigSecretRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryTracingConfigSecretRef) {
    this._tracingConfigSecretRef.internalValue = value;
  }
  public resetTracingConfigSecretRef() {
    this._tracingConfigSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigSecretRefInput() {
    return this._tracingConfigSecretRef.internalValue;
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRefToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRefToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing {
  /**
  * Enabled controls whether OpenTracing integration with APIcast is enabled. By default it is not enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#enabled DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * TracingConfigSecretRef contains a Secret reference the OpenTracing configuration. Each supported tracing library provides a default configuration file that is used if TracingConfig is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#tracing_config_secret_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#tracing_config_secret_ref}
  */
  readonly tracingConfigSecretRef?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef;
  /**
  * TracingLibrary controls which OpenTracing library is loaded. At the moment the only supported tracer is 'jaeger'. If not set, 'jaeger' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#tracing_library DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#tracing_library}
  */
  readonly tracingLibrary?: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    tracing_config_secret_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRefToTerraform(struct!.tracingConfigSecretRef),
    tracing_library: cdktf.stringToTerraform(struct!.tracingLibrary),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing | cdktf.IResolvable): any {
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
    tracing_config_secret_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRefToHclTerraform(struct!.tracingConfigSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef",
    },
    tracing_library: {
      value: cdktf.stringToHclTerraform(struct!.tracingLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._tracingConfigSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingConfigSecretRef = this._tracingConfigSecretRef?.internalValue;
    }
    if (this._tracingLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracingLibrary = this._tracingLibrary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._tracingConfigSecretRef.internalValue = undefined;
      this._tracingLibrary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._tracingConfigSecretRef.internalValue = value.tracingConfigSecretRef;
      this._tracingLibrary = value.tracingLibrary;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // tracing_config_secret_ref - computed: false, optional: true, required: false
  private _tracingConfigSecretRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRefOutputReference(this, "tracing_config_secret_ref");
  public get tracingConfigSecretRef() {
    return this._tracingConfigSecretRef;
  }
  public putTracingConfigSecretRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingTracingConfigSecretRef) {
    this._tracingConfigSecretRef.internalValue = value;
  }
  public resetTracingConfigSecretRef() {
    this._tracingConfigSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigSecretRefInput() {
    return this._tracingConfigSecretRef.internalValue;
  }

  // tracing_library - computed: false, optional: true, required: false
  private _tracingLibrary?: string; 
  public get tracingLibrary() {
    return this.getStringAttribute('tracing_library');
  }
  public set tracingLibrary(value: string) {
    this._tracingLibrary = value;
  }
  public resetTracingLibrary() {
    this._tracingLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingLibraryInput() {
    return this._tracingLibrary;
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#name DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#claims DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#limits DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#requests DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec {
  /**
  * Secret reference to a Kubernetes Secret containing the admin portal endpoint URL. The Secret must be located in the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#admin_portal_credentials_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#admin_portal_credentials_ref}
  */
  readonly adminPortalCredentialsRef?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef;
  /**
  * AllProxy specifies a HTTP(S) proxy to be used for connecting to services if a protocol-specific proxy is not specified. Authentication is not supported. Format is <scheme>://<host>:<port>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#all_proxy DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#all_proxy}
  */
  readonly allProxy?: string;
  /**
  * The period (in seconds) that the APIcast configuration will be stored in APIcast's cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#cache_configuration_seconds DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#cache_configuration_seconds}
  */
  readonly cacheConfigurationSeconds?: number;
  /**
  * CacheMaxTime indicates the maximum time to be cached. If cache-control header is not set, the time to be cached will be the defined one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#cache_max_time DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#cache_max_time}
  */
  readonly cacheMaxTime?: string;
  /**
  * CacheStatusCodes defines the status codes for which the response content will be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#cache_status_codes DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#cache_status_codes}
  */
  readonly cacheStatusCodes?: string;
  /**
  * ConfigurationLoadMode can be used to set APIcast's configuration load mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#configuration_load_mode DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#configuration_load_mode}
  */
  readonly configurationLoadMode?: string;
  /**
  * CustomEnvironments specifies an array of defined custome environments to be loaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#custom_environments DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#custom_environments}
  */
  readonly customEnvironments?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments[] | cdktf.IResolvable;
  /**
  * CustomPolicies specifies an array of defined custome policies to be loaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#custom_policies DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#custom_policies}
  */
  readonly customPolicies?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies[] | cdktf.IResolvable;
  /**
  * DeploymentEnvironment is the environment for which the configuration will be downloaded from 3scale (Staging or Production), when using APIcast. The value will also be used in the header X-3scale-User-Agent in the authorize/report requests made to 3scale Service Management API. It is used by 3scale for statistics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#deployment_environment DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#deployment_environment}
  */
  readonly deploymentEnvironment?: string;
  /**
  * DNSResolverAddress can be used to specify a custom DNS resolver address to be used by OpenResty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#dns_resolver_address DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#dns_resolver_address}
  */
  readonly dnsResolverAddress?: string;
  /**
  * Secret reference to a Kubernetes secret containing the gateway configuration. The Secret must be located in the same namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#embedded_configuration_secret_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#embedded_configuration_secret_ref}
  */
  readonly embeddedConfigurationSecretRef?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef;
  /**
  * EnabledServices can be used to specify a list of service IDs used to filter the configured services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#enabled_services DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#enabled_services}
  */
  readonly enabledServices?: string[];
  /**
  * ExposedHost is the domain name used for external access. By default no external access is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#exposed_host DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#exposed_host}
  */
  readonly exposedHost?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost;
  /**
  * ExtendedMetrics enables additional information on Prometheus metrics; some labels will be used with specific information that will provide more in-depth details about APIcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#extended_metrics DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#extended_metrics}
  */
  readonly extendedMetrics?: boolean | cdktf.IResolvable;
  /**
  * Enables/disables HPA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#hpa DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#hpa}
  */
  readonly hpa?: boolean | cdktf.IResolvable;
  /**
  * HTTPProxy specifies a HTTP(S) Proxy to be used for connecting to HTTP services. Authentication is not supported. Format is <scheme>://<host>:<port>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#http_proxy DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPSCertificateSecretRef references secret containing the X.509 certificate in the PEM format and the X.509 certificate secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#https_certificate_secret_ref DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#https_certificate_secret_ref}
  */
  readonly httpsCertificateSecretRef?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef;
  /**
  * HttpsPort controls on which port APIcast should start listening for HTTPS connections. If this clashes with HTTP port it will be used only for HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#https_port DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#https_port}
  */
  readonly httpsPort?: number;
  /**
  * HTTPSProxy specifies a HTTP(S) Proxy to be used for connecting to HTTPS services. Authentication is not supported. Format is <scheme>://<host>:<port>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#https_proxy DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * HTTPSVerifyDepth defines the maximum length of the client certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#https_verify_depth DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#https_verify_depth}
  */
  readonly httpsVerifyDepth?: number;
  /**
  * Image allows overriding the default APIcast gateway container image. This setting should only be used for dev/testing purposes. Setting this disables automated upgrades of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#image DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * LoadServicesWhenNeeded makes the configurations to be loaded lazily. APIcast will only load the ones configured for the host specified in the host header of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#load_services_when_needed DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#load_services_when_needed}
  */
  readonly loadServicesWhenNeeded?: boolean | cdktf.IResolvable;
  /**
  * LogLevel controls the log level of APIcast's OpenResty logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#log_level DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * ManagementAPIScope controls APIcast Management API scope. The Management API is powerful and can control the APIcast configuration. debug level should only be enabled for debugging purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#management_api_scope DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#management_api_scope}
  */
  readonly managementApiScope?: string;
  /**
  * NoProxy specifies a comma-separated list of hostnames and domain names for which the requests should not be proxied. Setting to a single * character, which matches all hosts, effectively disables the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#no_proxy DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * OidcLogLevel allows to set the log level for the logs related to OpenID Connect integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#oidc_log_level DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#oidc_log_level}
  */
  readonly oidcLogLevel?: string;
  /**
  * OpenSSLPeerVerificationEnabled controls OpenSSL peer verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#open_ssl_peer_verification_enabled DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#open_ssl_peer_verification_enabled}
  */
  readonly openSslPeerVerificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * OpenTelemetry contains the gateway instrumentation configuration with APIcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#open_telemetry DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#open_telemetry}
  */
  readonly openTelemetry?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry;
  /**
  * OpenTracingSpec contains the OpenTracing integration configuration with APIcast. Deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#open_tracing DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#open_tracing}
  */
  readonly openTracing?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing;
  /**
  * PathRoutingEnabled can be used to enable APIcast's path-based routing in addition to to the default host-based routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#path_routing_enabled DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#path_routing_enabled}
  */
  readonly pathRoutingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number of replicas of the APIcast Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#replicas DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources can be used to set custom compute Kubernetes Resource Requirements for the APIcast deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#resources DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources;
  /**
  * ResponseCodesIncluded can be set to log the response codes of the responses in Apisonator, so they can then be visualized in the 3scale admin portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#response_codes_included DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#response_codes_included}
  */
  readonly responseCodesIncluded?: boolean | cdktf.IResolvable;
  /**
  * Kubernetes Service Account name to be used for the APIcast Deployment. The Service Account must exist beforehand.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#service_account DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * ServiceCacheSize specifies the number of services that APICast can store in the internal cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#service_cache_size DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#service_cache_size}
  */
  readonly serviceCacheSize?: number;
  /**
  * ServiceConfigurationVersionOverride contains service configuration version map to prevent it from auto-updating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#service_configuration_version_override DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#service_configuration_version_override}
  */
  readonly serviceConfigurationVersionOverride?: { [key: string]: string };
  /**
  * ServicesFilterByURL is used to filter the service configured in the 3scale API Manager, the filter matches with the public base URL (Staging or production).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#services_filter_by_url DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#services_filter_by_url}
  */
  readonly servicesFilterByUrl?: string;
  /**
  * Timezone specifies the local timezone of the APIcast deployment pods. A timezone value available in the TZ database must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#timezone DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#timezone}
  */
  readonly timezone?: string;
  /**
  * UpstreamRetryCases Used only when the retry policy is configured. Specified in which cases a request to the upstream API should be retried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#upstream_retry_cases DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#upstream_retry_cases}
  */
  readonly upstreamRetryCases?: string;
  /**
  * Workers defines the number of APIcast's worker processes per pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#workers DataK8SApps3ScaleNetApIcastV1Alpha1Manifest#workers}
  */
  readonly workers?: number;
}

export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_portal_credentials_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRefToTerraform(struct!.adminPortalCredentialsRef),
    all_proxy: cdktf.stringToTerraform(struct!.allProxy),
    cache_configuration_seconds: cdktf.numberToTerraform(struct!.cacheConfigurationSeconds),
    cache_max_time: cdktf.stringToTerraform(struct!.cacheMaxTime),
    cache_status_codes: cdktf.stringToTerraform(struct!.cacheStatusCodes),
    configuration_load_mode: cdktf.stringToTerraform(struct!.configurationLoadMode),
    custom_environments: cdktf.listMapper(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsToTerraform, false)(struct!.customEnvironments),
    custom_policies: cdktf.listMapper(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesToTerraform, false)(struct!.customPolicies),
    deployment_environment: cdktf.stringToTerraform(struct!.deploymentEnvironment),
    dns_resolver_address: cdktf.stringToTerraform(struct!.dnsResolverAddress),
    embedded_configuration_secret_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRefToTerraform(struct!.embeddedConfigurationSecretRef),
    enabled_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledServices),
    exposed_host: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostToTerraform(struct!.exposedHost),
    extended_metrics: cdktf.booleanToTerraform(struct!.extendedMetrics),
    hpa: cdktf.booleanToTerraform(struct!.hpa),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_certificate_secret_ref: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRefToTerraform(struct!.httpsCertificateSecretRef),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    https_verify_depth: cdktf.numberToTerraform(struct!.httpsVerifyDepth),
    image: cdktf.stringToTerraform(struct!.image),
    load_services_when_needed: cdktf.booleanToTerraform(struct!.loadServicesWhenNeeded),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    management_api_scope: cdktf.stringToTerraform(struct!.managementApiScope),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    oidc_log_level: cdktf.stringToTerraform(struct!.oidcLogLevel),
    open_ssl_peer_verification_enabled: cdktf.booleanToTerraform(struct!.openSslPeerVerificationEnabled),
    open_telemetry: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryToTerraform(struct!.openTelemetry),
    open_tracing: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingToTerraform(struct!.openTracing),
    path_routing_enabled: cdktf.booleanToTerraform(struct!.pathRoutingEnabled),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    response_codes_included: cdktf.booleanToTerraform(struct!.responseCodesIncluded),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_cache_size: cdktf.numberToTerraform(struct!.serviceCacheSize),
    service_configuration_version_override: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceConfigurationVersionOverride),
    services_filter_by_url: cdktf.stringToTerraform(struct!.servicesFilterByUrl),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    upstream_retry_cases: cdktf.stringToTerraform(struct!.upstreamRetryCases),
    workers: cdktf.numberToTerraform(struct!.workers),
  }
}


export function dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_portal_credentials_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRefToHclTerraform(struct!.adminPortalCredentialsRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef",
    },
    all_proxy: {
      value: cdktf.stringToHclTerraform(struct!.allProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_configuration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cacheConfigurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_max_time: {
      value: cdktf.stringToHclTerraform(struct!.cacheMaxTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_status_codes: {
      value: cdktf.stringToHclTerraform(struct!.cacheStatusCodes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_load_mode: {
      value: cdktf.stringToHclTerraform(struct!.configurationLoadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_environments: {
      value: cdktf.listMapperHcl(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsToHclTerraform, false)(struct!.customEnvironments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsList",
    },
    custom_policies: {
      value: cdktf.listMapperHcl(dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesToHclTerraform, false)(struct!.customPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesList",
    },
    deployment_environment: {
      value: cdktf.stringToHclTerraform(struct!.deploymentEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_resolver_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsResolverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedded_configuration_secret_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRefToHclTerraform(struct!.embeddedConfigurationSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef",
    },
    enabled_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_host: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostToHclTerraform(struct!.exposedHost),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost",
    },
    extended_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.extendedMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hpa: {
      value: cdktf.booleanToHclTerraform(struct!.hpa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_certificate_secret_ref: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRefToHclTerraform(struct!.httpsCertificateSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_verify_depth: {
      value: cdktf.numberToHclTerraform(struct!.httpsVerifyDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_services_when_needed: {
      value: cdktf.booleanToHclTerraform(struct!.loadServicesWhenNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_api_scope: {
      value: cdktf.stringToHclTerraform(struct!.managementApiScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_log_level: {
      value: cdktf.stringToHclTerraform(struct!.oidcLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_ssl_peer_verification_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.openSslPeerVerificationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_telemetry: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryToHclTerraform(struct!.openTelemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry",
    },
    open_tracing: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingToHclTerraform(struct!.openTracing),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing",
    },
    path_routing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pathRoutingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources",
    },
    response_codes_included: {
      value: cdktf.booleanToHclTerraform(struct!.responseCodesIncluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.serviceCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_configuration_version_override: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceConfigurationVersionOverride),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    services_filter_by_url: {
      value: cdktf.stringToHclTerraform(struct!.servicesFilterByUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_retry_cases: {
      value: cdktf.stringToHclTerraform(struct!.upstreamRetryCases),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workers: {
      value: cdktf.numberToHclTerraform(struct!.workers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPortalCredentialsRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPortalCredentialsRef = this._adminPortalCredentialsRef?.internalValue;
    }
    if (this._allProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProxy = this._allProxy;
    }
    if (this._cacheConfigurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheConfigurationSeconds = this._cacheConfigurationSeconds;
    }
    if (this._cacheMaxTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMaxTime = this._cacheMaxTime;
    }
    if (this._cacheStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheStatusCodes = this._cacheStatusCodes;
    }
    if (this._configurationLoadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationLoadMode = this._configurationLoadMode;
    }
    if (this._customEnvironments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEnvironments = this._customEnvironments?.internalValue;
    }
    if (this._customPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPolicies = this._customPolicies?.internalValue;
    }
    if (this._deploymentEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentEnvironment = this._deploymentEnvironment;
    }
    if (this._dnsResolverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolverAddress = this._dnsResolverAddress;
    }
    if (this._embeddedConfigurationSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddedConfigurationSecretRef = this._embeddedConfigurationSecretRef?.internalValue;
    }
    if (this._enabledServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledServices = this._enabledServices;
    }
    if (this._exposedHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHost = this._exposedHost?.internalValue;
    }
    if (this._extendedMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedMetrics = this._extendedMetrics;
    }
    if (this._hpa !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpa = this._hpa;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsCertificateSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsCertificateSecretRef = this._httpsCertificateSecretRef?.internalValue;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._httpsVerifyDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsVerifyDepth = this._httpsVerifyDepth;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._loadServicesWhenNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadServicesWhenNeeded = this._loadServicesWhenNeeded;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._managementApiScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementApiScope = this._managementApiScope;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._oidcLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcLogLevel = this._oidcLogLevel;
    }
    if (this._openSslPeerVerificationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSslPeerVerificationEnabled = this._openSslPeerVerificationEnabled;
    }
    if (this._openTelemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTelemetry = this._openTelemetry?.internalValue;
    }
    if (this._openTracing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTracing = this._openTracing?.internalValue;
    }
    if (this._pathRoutingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRoutingEnabled = this._pathRoutingEnabled;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._responseCodesIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodesIncluded = this._responseCodesIncluded;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._serviceCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCacheSize = this._serviceCacheSize;
    }
    if (this._serviceConfigurationVersionOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConfigurationVersionOverride = this._serviceConfigurationVersionOverride;
    }
    if (this._servicesFilterByUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesFilterByUrl = this._servicesFilterByUrl;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._upstreamRetryCases !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamRetryCases = this._upstreamRetryCases;
    }
    if (this._workers !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPortalCredentialsRef.internalValue = undefined;
      this._allProxy = undefined;
      this._cacheConfigurationSeconds = undefined;
      this._cacheMaxTime = undefined;
      this._cacheStatusCodes = undefined;
      this._configurationLoadMode = undefined;
      this._customEnvironments.internalValue = undefined;
      this._customPolicies.internalValue = undefined;
      this._deploymentEnvironment = undefined;
      this._dnsResolverAddress = undefined;
      this._embeddedConfigurationSecretRef.internalValue = undefined;
      this._enabledServices = undefined;
      this._exposedHost.internalValue = undefined;
      this._extendedMetrics = undefined;
      this._hpa = undefined;
      this._httpProxy = undefined;
      this._httpsCertificateSecretRef.internalValue = undefined;
      this._httpsPort = undefined;
      this._httpsProxy = undefined;
      this._httpsVerifyDepth = undefined;
      this._image = undefined;
      this._loadServicesWhenNeeded = undefined;
      this._logLevel = undefined;
      this._managementApiScope = undefined;
      this._noProxy = undefined;
      this._oidcLogLevel = undefined;
      this._openSslPeerVerificationEnabled = undefined;
      this._openTelemetry.internalValue = undefined;
      this._openTracing.internalValue = undefined;
      this._pathRoutingEnabled = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._responseCodesIncluded = undefined;
      this._serviceAccount = undefined;
      this._serviceCacheSize = undefined;
      this._serviceConfigurationVersionOverride = undefined;
      this._servicesFilterByUrl = undefined;
      this._timezone = undefined;
      this._upstreamRetryCases = undefined;
      this._workers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPortalCredentialsRef.internalValue = value.adminPortalCredentialsRef;
      this._allProxy = value.allProxy;
      this._cacheConfigurationSeconds = value.cacheConfigurationSeconds;
      this._cacheMaxTime = value.cacheMaxTime;
      this._cacheStatusCodes = value.cacheStatusCodes;
      this._configurationLoadMode = value.configurationLoadMode;
      this._customEnvironments.internalValue = value.customEnvironments;
      this._customPolicies.internalValue = value.customPolicies;
      this._deploymentEnvironment = value.deploymentEnvironment;
      this._dnsResolverAddress = value.dnsResolverAddress;
      this._embeddedConfigurationSecretRef.internalValue = value.embeddedConfigurationSecretRef;
      this._enabledServices = value.enabledServices;
      this._exposedHost.internalValue = value.exposedHost;
      this._extendedMetrics = value.extendedMetrics;
      this._hpa = value.hpa;
      this._httpProxy = value.httpProxy;
      this._httpsCertificateSecretRef.internalValue = value.httpsCertificateSecretRef;
      this._httpsPort = value.httpsPort;
      this._httpsProxy = value.httpsProxy;
      this._httpsVerifyDepth = value.httpsVerifyDepth;
      this._image = value.image;
      this._loadServicesWhenNeeded = value.loadServicesWhenNeeded;
      this._logLevel = value.logLevel;
      this._managementApiScope = value.managementApiScope;
      this._noProxy = value.noProxy;
      this._oidcLogLevel = value.oidcLogLevel;
      this._openSslPeerVerificationEnabled = value.openSslPeerVerificationEnabled;
      this._openTelemetry.internalValue = value.openTelemetry;
      this._openTracing.internalValue = value.openTracing;
      this._pathRoutingEnabled = value.pathRoutingEnabled;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._responseCodesIncluded = value.responseCodesIncluded;
      this._serviceAccount = value.serviceAccount;
      this._serviceCacheSize = value.serviceCacheSize;
      this._serviceConfigurationVersionOverride = value.serviceConfigurationVersionOverride;
      this._servicesFilterByUrl = value.servicesFilterByUrl;
      this._timezone = value.timezone;
      this._upstreamRetryCases = value.upstreamRetryCases;
      this._workers = value.workers;
    }
  }

  // admin_portal_credentials_ref - computed: false, optional: true, required: false
  private _adminPortalCredentialsRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRefOutputReference(this, "admin_portal_credentials_ref");
  public get adminPortalCredentialsRef() {
    return this._adminPortalCredentialsRef;
  }
  public putAdminPortalCredentialsRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecAdminPortalCredentialsRef) {
    this._adminPortalCredentialsRef.internalValue = value;
  }
  public resetAdminPortalCredentialsRef() {
    this._adminPortalCredentialsRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPortalCredentialsRefInput() {
    return this._adminPortalCredentialsRef.internalValue;
  }

  // all_proxy - computed: false, optional: true, required: false
  private _allProxy?: string; 
  public get allProxy() {
    return this.getStringAttribute('all_proxy');
  }
  public set allProxy(value: string) {
    this._allProxy = value;
  }
  public resetAllProxy() {
    this._allProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProxyInput() {
    return this._allProxy;
  }

  // cache_configuration_seconds - computed: false, optional: true, required: false
  private _cacheConfigurationSeconds?: number; 
  public get cacheConfigurationSeconds() {
    return this.getNumberAttribute('cache_configuration_seconds');
  }
  public set cacheConfigurationSeconds(value: number) {
    this._cacheConfigurationSeconds = value;
  }
  public resetCacheConfigurationSeconds() {
    this._cacheConfigurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigurationSecondsInput() {
    return this._cacheConfigurationSeconds;
  }

  // cache_max_time - computed: false, optional: true, required: false
  private _cacheMaxTime?: string; 
  public get cacheMaxTime() {
    return this.getStringAttribute('cache_max_time');
  }
  public set cacheMaxTime(value: string) {
    this._cacheMaxTime = value;
  }
  public resetCacheMaxTime() {
    this._cacheMaxTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMaxTimeInput() {
    return this._cacheMaxTime;
  }

  // cache_status_codes - computed: false, optional: true, required: false
  private _cacheStatusCodes?: string; 
  public get cacheStatusCodes() {
    return this.getStringAttribute('cache_status_codes');
  }
  public set cacheStatusCodes(value: string) {
    this._cacheStatusCodes = value;
  }
  public resetCacheStatusCodes() {
    this._cacheStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheStatusCodesInput() {
    return this._cacheStatusCodes;
  }

  // configuration_load_mode - computed: false, optional: true, required: false
  private _configurationLoadMode?: string; 
  public get configurationLoadMode() {
    return this.getStringAttribute('configuration_load_mode');
  }
  public set configurationLoadMode(value: string) {
    this._configurationLoadMode = value;
  }
  public resetConfigurationLoadMode() {
    this._configurationLoadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationLoadModeInput() {
    return this._configurationLoadMode;
  }

  // custom_environments - computed: false, optional: true, required: false
  private _customEnvironments = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironmentsList(this, "custom_environments", false);
  public get customEnvironments() {
    return this._customEnvironments;
  }
  public putCustomEnvironments(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomEnvironments[] | cdktf.IResolvable) {
    this._customEnvironments.internalValue = value;
  }
  public resetCustomEnvironments() {
    this._customEnvironments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEnvironmentsInput() {
    return this._customEnvironments.internalValue;
  }

  // custom_policies - computed: false, optional: true, required: false
  private _customPolicies = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPoliciesList(this, "custom_policies", false);
  public get customPolicies() {
    return this._customPolicies;
  }
  public putCustomPolicies(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecCustomPolicies[] | cdktf.IResolvable) {
    this._customPolicies.internalValue = value;
  }
  public resetCustomPolicies() {
    this._customPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPoliciesInput() {
    return this._customPolicies.internalValue;
  }

  // deployment_environment - computed: false, optional: true, required: false
  private _deploymentEnvironment?: string; 
  public get deploymentEnvironment() {
    return this.getStringAttribute('deployment_environment');
  }
  public set deploymentEnvironment(value: string) {
    this._deploymentEnvironment = value;
  }
  public resetDeploymentEnvironment() {
    this._deploymentEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentEnvironmentInput() {
    return this._deploymentEnvironment;
  }

  // dns_resolver_address - computed: false, optional: true, required: false
  private _dnsResolverAddress?: string; 
  public get dnsResolverAddress() {
    return this.getStringAttribute('dns_resolver_address');
  }
  public set dnsResolverAddress(value: string) {
    this._dnsResolverAddress = value;
  }
  public resetDnsResolverAddress() {
    this._dnsResolverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverAddressInput() {
    return this._dnsResolverAddress;
  }

  // embedded_configuration_secret_ref - computed: false, optional: true, required: false
  private _embeddedConfigurationSecretRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRefOutputReference(this, "embedded_configuration_secret_ref");
  public get embeddedConfigurationSecretRef() {
    return this._embeddedConfigurationSecretRef;
  }
  public putEmbeddedConfigurationSecretRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecEmbeddedConfigurationSecretRef) {
    this._embeddedConfigurationSecretRef.internalValue = value;
  }
  public resetEmbeddedConfigurationSecretRef() {
    this._embeddedConfigurationSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddedConfigurationSecretRefInput() {
    return this._embeddedConfigurationSecretRef.internalValue;
  }

  // enabled_services - computed: false, optional: true, required: false
  private _enabledServices?: string[]; 
  public get enabledServices() {
    return this.getListAttribute('enabled_services');
  }
  public set enabledServices(value: string[]) {
    this._enabledServices = value;
  }
  public resetEnabledServices() {
    this._enabledServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledServicesInput() {
    return this._enabledServices;
  }

  // exposed_host - computed: false, optional: true, required: false
  private _exposedHost = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHostOutputReference(this, "exposed_host");
  public get exposedHost() {
    return this._exposedHost;
  }
  public putExposedHost(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecExposedHost) {
    this._exposedHost.internalValue = value;
  }
  public resetExposedHost() {
    this._exposedHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHostInput() {
    return this._exposedHost.internalValue;
  }

  // extended_metrics - computed: false, optional: true, required: false
  private _extendedMetrics?: boolean | cdktf.IResolvable; 
  public get extendedMetrics() {
    return this.getBooleanAttribute('extended_metrics');
  }
  public set extendedMetrics(value: boolean | cdktf.IResolvable) {
    this._extendedMetrics = value;
  }
  public resetExtendedMetrics() {
    this._extendedMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedMetricsInput() {
    return this._extendedMetrics;
  }

  // hpa - computed: false, optional: true, required: false
  private _hpa?: boolean | cdktf.IResolvable; 
  public get hpa() {
    return this.getBooleanAttribute('hpa');
  }
  public set hpa(value: boolean | cdktf.IResolvable) {
    this._hpa = value;
  }
  public resetHpa() {
    this._hpa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpaInput() {
    return this._hpa;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_certificate_secret_ref - computed: false, optional: true, required: false
  private _httpsCertificateSecretRef = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRefOutputReference(this, "https_certificate_secret_ref");
  public get httpsCertificateSecretRef() {
    return this._httpsCertificateSecretRef;
  }
  public putHttpsCertificateSecretRef(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecHttpsCertificateSecretRef) {
    this._httpsCertificateSecretRef.internalValue = value;
  }
  public resetHttpsCertificateSecretRef() {
    this._httpsCertificateSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsCertificateSecretRefInput() {
    return this._httpsCertificateSecretRef.internalValue;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // https_verify_depth - computed: false, optional: true, required: false
  private _httpsVerifyDepth?: number; 
  public get httpsVerifyDepth() {
    return this.getNumberAttribute('https_verify_depth');
  }
  public set httpsVerifyDepth(value: number) {
    this._httpsVerifyDepth = value;
  }
  public resetHttpsVerifyDepth() {
    this._httpsVerifyDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsVerifyDepthInput() {
    return this._httpsVerifyDepth;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // load_services_when_needed - computed: false, optional: true, required: false
  private _loadServicesWhenNeeded?: boolean | cdktf.IResolvable; 
  public get loadServicesWhenNeeded() {
    return this.getBooleanAttribute('load_services_when_needed');
  }
  public set loadServicesWhenNeeded(value: boolean | cdktf.IResolvable) {
    this._loadServicesWhenNeeded = value;
  }
  public resetLoadServicesWhenNeeded() {
    this._loadServicesWhenNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadServicesWhenNeededInput() {
    return this._loadServicesWhenNeeded;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // management_api_scope - computed: false, optional: true, required: false
  private _managementApiScope?: string; 
  public get managementApiScope() {
    return this.getStringAttribute('management_api_scope');
  }
  public set managementApiScope(value: string) {
    this._managementApiScope = value;
  }
  public resetManagementApiScope() {
    this._managementApiScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementApiScopeInput() {
    return this._managementApiScope;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // oidc_log_level - computed: false, optional: true, required: false
  private _oidcLogLevel?: string; 
  public get oidcLogLevel() {
    return this.getStringAttribute('oidc_log_level');
  }
  public set oidcLogLevel(value: string) {
    this._oidcLogLevel = value;
  }
  public resetOidcLogLevel() {
    this._oidcLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcLogLevelInput() {
    return this._oidcLogLevel;
  }

  // open_ssl_peer_verification_enabled - computed: false, optional: true, required: false
  private _openSslPeerVerificationEnabled?: boolean | cdktf.IResolvable; 
  public get openSslPeerVerificationEnabled() {
    return this.getBooleanAttribute('open_ssl_peer_verification_enabled');
  }
  public set openSslPeerVerificationEnabled(value: boolean | cdktf.IResolvable) {
    this._openSslPeerVerificationEnabled = value;
  }
  public resetOpenSslPeerVerificationEnabled() {
    this._openSslPeerVerificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSslPeerVerificationEnabledInput() {
    return this._openSslPeerVerificationEnabled;
  }

  // open_telemetry - computed: false, optional: true, required: false
  private _openTelemetry = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetryOutputReference(this, "open_telemetry");
  public get openTelemetry() {
    return this._openTelemetry;
  }
  public putOpenTelemetry(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTelemetry) {
    this._openTelemetry.internalValue = value;
  }
  public resetOpenTelemetry() {
    this._openTelemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTelemetryInput() {
    return this._openTelemetry.internalValue;
  }

  // open_tracing - computed: false, optional: true, required: false
  private _openTracing = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracingOutputReference(this, "open_tracing");
  public get openTracing() {
    return this._openTracing;
  }
  public putOpenTracing(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOpenTracing) {
    this._openTracing.internalValue = value;
  }
  public resetOpenTracing() {
    this._openTracing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTracingInput() {
    return this._openTracing.internalValue;
  }

  // path_routing_enabled - computed: false, optional: true, required: false
  private _pathRoutingEnabled?: boolean | cdktf.IResolvable; 
  public get pathRoutingEnabled() {
    return this.getBooleanAttribute('path_routing_enabled');
  }
  public set pathRoutingEnabled(value: boolean | cdktf.IResolvable) {
    this._pathRoutingEnabled = value;
  }
  public resetPathRoutingEnabled() {
    this._pathRoutingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRoutingEnabledInput() {
    return this._pathRoutingEnabled;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // response_codes_included - computed: false, optional: true, required: false
  private _responseCodesIncluded?: boolean | cdktf.IResolvable; 
  public get responseCodesIncluded() {
    return this.getBooleanAttribute('response_codes_included');
  }
  public set responseCodesIncluded(value: boolean | cdktf.IResolvable) {
    this._responseCodesIncluded = value;
  }
  public resetResponseCodesIncluded() {
    this._responseCodesIncluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodesIncludedInput() {
    return this._responseCodesIncluded;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_cache_size - computed: false, optional: true, required: false
  private _serviceCacheSize?: number; 
  public get serviceCacheSize() {
    return this.getNumberAttribute('service_cache_size');
  }
  public set serviceCacheSize(value: number) {
    this._serviceCacheSize = value;
  }
  public resetServiceCacheSize() {
    this._serviceCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCacheSizeInput() {
    return this._serviceCacheSize;
  }

  // service_configuration_version_override - computed: false, optional: true, required: false
  private _serviceConfigurationVersionOverride?: { [key: string]: string }; 
  public get serviceConfigurationVersionOverride() {
    return this.getStringMapAttribute('service_configuration_version_override');
  }
  public set serviceConfigurationVersionOverride(value: { [key: string]: string }) {
    this._serviceConfigurationVersionOverride = value;
  }
  public resetServiceConfigurationVersionOverride() {
    this._serviceConfigurationVersionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigurationVersionOverrideInput() {
    return this._serviceConfigurationVersionOverride;
  }

  // services_filter_by_url - computed: false, optional: true, required: false
  private _servicesFilterByUrl?: string; 
  public get servicesFilterByUrl() {
    return this.getStringAttribute('services_filter_by_url');
  }
  public set servicesFilterByUrl(value: string) {
    this._servicesFilterByUrl = value;
  }
  public resetServicesFilterByUrl() {
    this._servicesFilterByUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesFilterByUrlInput() {
    return this._servicesFilterByUrl;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // upstream_retry_cases - computed: false, optional: true, required: false
  private _upstreamRetryCases?: string; 
  public get upstreamRetryCases() {
    return this.getStringAttribute('upstream_retry_cases');
  }
  public set upstreamRetryCases(value: string) {
    this._upstreamRetryCases = value;
  }
  public resetUpstreamRetryCases() {
    this._upstreamRetryCases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamRetryCasesInput() {
    return this._upstreamRetryCases;
  }

  // workers - computed: false, optional: true, required: false
  private _workers?: number; 
  public get workers() {
    return this.getNumberAttribute('workers');
  }
  public set workers(value: number) {
    this._workers = value;
  }
  public resetWorkers() {
    this._workers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest k8s_apps_3scale_net_ap_icast_v1alpha1_manifest}
*/
export class DataK8SApps3ScaleNetApIcastV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_3scale_net_ap_icast_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApps3ScaleNetApIcastV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApps3ScaleNetApIcastV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApps3ScaleNetApIcastV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApps3ScaleNetApIcastV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_3scale_net_ap_icast_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/apps_3scale_net_ap_icast_v1alpha1_manifest k8s_apps_3scale_net_ap_icast_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApps3ScaleNetApIcastV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_3scale_net_ap_icast_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApps3ScaleNetApIcastV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
