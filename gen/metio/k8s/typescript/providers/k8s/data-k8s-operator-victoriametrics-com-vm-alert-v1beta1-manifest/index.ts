// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata;
  /**
  * VMAlertSpec defines the desired state of VMAlert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
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
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource {
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth;
  /**
  * Path to bearer token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Optional bearer auth token to use for -remoteWrite.url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_secret DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret;
  /**
  * Headers allow configuring custom http headers Must be in form of semicolon separated header with value e.g. headerName:headerValue vmalert supports it since 1.79.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * OAuth2 defines OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#oauth2 DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: { [key: string]: string };
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
  /**
  * Victoria Metrics or VMSelect url. Required parameter. E.g. http://127.0.0.1:8428
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#url DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    bearer_token_secret: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    oauth2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oauth2),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_secret: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oauth2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oauth2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._oauth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._headers = undefined;
      this._oauth2 = undefined;
      this._tlsConfig = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenFile = value.bearerTokenFile;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._headers = value.headers;
      this._oauth2 = value.oauth2;
      this._tlsConfig = value.tlsConfig;
      this._url = value.url;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
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

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2?: { [key: string]: string }; 
  public get oauth2() {
    return this.getStringMapAttribute('oauth2');
  }
  public set oauth2(value: { [key: string]: string }) {
    this._oauth2 = value;
  }
  public resetOauth2() {
    this._oauth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#nameservers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#options DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#options}
  */
  readonly options?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable;
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#searches DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#searches}
  */
  readonly searches?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    options: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsToTerraform, false)(struct!.options),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsList",
    },
    searches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameservers = undefined;
      this._options.internalValue = undefined;
      this._searches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameservers = value.nameservers;
      this._options.internalValue = value.options;
      this._searches = value.searches;
    }
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases {
  /**
  * Hostnames for the above IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#hostnames DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * IP address of the host file entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#ip DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#ip}
  */
  readonly ip: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage {
  /**
  * PullPolicy describes how to pull docker image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#pull_policy DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Repository contains name of docker image + it's repository if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#repository DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag contains desired docker image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tag DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense {
  /**
  * Enterprise license key. This flag is available only in [VictoriaMetrics enterprise](https://docs.victoriametrics.com/enterprise). To request a trial license, [go to](https://victoriametrics.com/products/enterprise/trial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * KeyRef is reference to secret with license key for enterprise features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key_ref DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_ref: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRefToTerraform(struct!.keyRef),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense | cdktf.IResolvable): any {
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
    key_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRef = this._keyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyRef.internalValue = value.keyRef;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_ref - computed: false, optional: true, required: false
  private _keyRef = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseKeyRef) {
    this._keyRef.internalValue = value;
  }
  public resetKeyRef() {
    this._keyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
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
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector {
  /**
  * Boolean describing whether all namespaces are selected in contrast to a list restricting them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#any DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * List of namespace names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_names DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_names}
  */
  readonly matchNames?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    match_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchNames),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._matchNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNames = this._matchNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._matchNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._matchNames = value.matchNames;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // match_names - computed: false, optional: true, required: false
  private _matchNames?: string[]; 
  public get matchNames() {
    return this.getListAttribute('match_names');
  }
  public set matchNames(value: string[]) {
    this._matchNames = value;
  }
  public resetMatchNames() {
    this._matchNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNamesInput() {
    return this._matchNames;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector {
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#label_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector;
  /**
  * NamespaceSelector is a selector for selecting either all namespaces or a list of namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#namespace_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector",
    },
    namespace_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier {
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth;
  /**
  * Path to bearer token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Optional bearer auth token to use for -remoteWrite.url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_secret DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret;
  /**
  * Headers allow configuring custom http headers Must be in form of semicolon separated header with value e.g. headerName:headerValue vmalert supports it since 1.79.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * OAuth2 defines OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#oauth2 DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: { [key: string]: string };
  /**
  * Selector allows service discovery for alertmanager in this case all matched vmalertmanager replicas will be added into vmalert notifier.url as statefulset pod.fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector;
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
  /**
  * AlertManager url. E.g. http://127.0.0.1:9093
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#url DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    bearer_token_secret: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    oauth2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oauth2),
    selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorToTerraform(struct!.selector),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_secret: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oauth2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oauth2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._oauth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._headers = undefined;
      this._oauth2 = undefined;
      this._selector.internalValue = undefined;
      this._tlsConfig = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenFile = value.bearerTokenFile;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._headers = value.headers;
      this._oauth2 = value.oauth2;
      this._selector.internalValue = value.selector;
      this._tlsConfig = value.tlsConfig;
      this._url = value.url;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
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

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2?: { [key: string]: string }; 
  public get oauth2() {
    return this.getStringMapAttribute('oauth2');
  }
  public set oauth2(value: { [key: string]: string }) {
    this._oauth2 = value;
  }
  public resetOauth2() {
    this._oauth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
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
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
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
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector {
  /**
  * Boolean describing whether all namespaces are selected in contrast to a list restricting them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#any DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * List of namespace names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_names DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_names}
  */
  readonly matchNames?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    match_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchNames),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._matchNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchNames = this._matchNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._any = undefined;
      this._matchNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._any = value.any;
      this._matchNames = value.matchNames;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // match_names - computed: false, optional: true, required: false
  private _matchNames?: string[]; 
  public get matchNames() {
    return this.getListAttribute('match_names');
  }
  public set matchNames(value: string[]) {
    this._matchNames = value;
  }
  public resetMatchNames() {
    this._matchNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNamesInput() {
    return this._matchNames;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector {
  /**
  * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#label_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector;
  /**
  * NamespaceSelector is a selector for selecting either all namespaces or a list of namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#namespace_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector",
    },
    namespace_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers {
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth;
  /**
  * Path to bearer token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Optional bearer auth token to use for -remoteWrite.url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_secret DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret;
  /**
  * Headers allow configuring custom http headers Must be in form of semicolon separated header with value e.g. headerName:headerValue vmalert supports it since 1.79.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * OAuth2 defines OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#oauth2 DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: { [key: string]: string };
  /**
  * Selector allows service discovery for alertmanager in this case all matched vmalertmanager replicas will be added into vmalert notifier.url as statefulset pod.fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector;
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
  /**
  * AlertManager url. E.g. http://127.0.0.1:9093
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#url DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    bearer_token_secret: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    oauth2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oauth2),
    selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorToTerraform(struct!.selector),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_secret: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    oauth2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oauth2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._oauth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._headers = undefined;
      this._oauth2 = undefined;
      this._selector.internalValue = undefined;
      this._tlsConfig = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenFile = value.bearerTokenFile;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._headers = value.headers;
      this._oauth2 = value.oauth2;
      this._selector.internalValue = value.selector;
      this._tlsConfig = value.tlsConfig;
      this._url = value.url;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
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

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2?: { [key: string]: string }; 
  public get oauth2() {
    return this.getStringMapAttribute('oauth2');
  }
  public set oauth2(value: { [key: string]: string }) {
    this._oauth2 = value;
  }
  public resetOauth2() {
    this._oauth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
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
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget {
  /**
  * An eviction is allowed if at most 'maxUnavailable' pods selected by 'selector' are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with 'minAvailable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#max_unavailable DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * An eviction is allowed if at least 'minAvailable' pods selected by 'selector' will still be available after the eviction, i.e. even in the absence of the evicted pod. So for example you can prevent all voluntary evictions by specifying '100%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#min_available DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * replaces default labels selector generated by operator it's useful when you need to create custom budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#selector_labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#selector_labels}
  */
  readonly selectorLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudgetToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    selector_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.selectorLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudgetToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.selectorLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._selectorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectorLabels = this._selectorLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
      this._selectorLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
      this._selectorLabels = value.selectorLabels;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }

  // selector_labels - computed: false, optional: true, required: false
  private _selectorLabels?: { [key: string]: string }; 
  public get selectorLabels() {
    return this.getStringMapAttribute('selector_labels');
  }
  public set selectorLabels(value: { [key: string]: string }) {
    this._selectorLabels = value;
  }
  public resetSelectorLabels() {
    this._selectorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorLabelsInput() {
    return this._selectorLabels;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates {
  /**
  * ConditionType refers to a condition in the pod's condition list with matching type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#condition_type DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
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
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead {
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth;
  /**
  * Path to bearer token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Optional bearer auth token to use for -remoteWrite.url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_secret DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret;
  /**
  * Headers allow configuring custom http headers Must be in form of semicolon separated header with value e.g. headerName:headerValue vmalert supports it since 1.79.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Lookback defines how far to look into past for alerts timeseries. For example, if lookback=1h then range from now() to now()-1h will be scanned. (default 1h0m0s) Applied only to RemoteReadSpec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#lookback DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#lookback}
  */
  readonly lookback?: string;
  /**
  * OAuth2 defines OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#oauth2 DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: { [key: string]: string };
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
  /**
  * URL of the endpoint to send samples to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#url DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    bearer_token_secret: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    lookback: cdktf.stringToTerraform(struct!.lookback),
    oauth2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oauth2),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_secret: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lookback: {
      value: cdktf.stringToHclTerraform(struct!.lookback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oauth2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._lookback !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookback = this._lookback;
    }
    if (this._oauth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._headers = undefined;
      this._lookback = undefined;
      this._oauth2 = undefined;
      this._tlsConfig = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenFile = value.bearerTokenFile;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._headers = value.headers;
      this._lookback = value.lookback;
      this._oauth2 = value.oauth2;
      this._tlsConfig = value.tlsConfig;
      this._url = value.url;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
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

  // lookback - computed: false, optional: true, required: false
  private _lookback?: string; 
  public get lookback() {
    return this.getStringAttribute('lookback');
  }
  public set lookback(value: string) {
    this._lookback = value;
  }
  public resetLookback() {
    this._lookback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackInput() {
    return this._lookback;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2?: { [key: string]: string }; 
  public get oauth2() {
    return this.getStringMapAttribute('oauth2');
  }
  public set oauth2(value: { [key: string]: string }) {
    this._oauth2 = value;
  }
  public resetOauth2() {
    this._oauth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
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
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite {
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth;
  /**
  * Path to bearer token file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Optional bearer auth token to use for -remoteWrite.url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#bearer_token_secret DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret;
  /**
  * Defines number of readers that concurrently write into remote storage (default 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#concurrency DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Defines interval of flushes to remote write endpoint (default 5s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#flush_interval DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#flush_interval}
  */
  readonly flushInterval?: string;
  /**
  * Headers allow configuring custom http headers Must be in form of semicolon separated header with value e.g. headerName:headerValue vmalert supports it since 1.79.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Defines defines max number of timeseries to be flushed at once (default 1000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#max_batch_size DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Defines the max number of pending datapoints to remote write endpoint (default 100000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#max_queue_size DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#max_queue_size}
  */
  readonly maxQueueSize?: number;
  /**
  * OAuth2 defines OAuth2 configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#oauth2 DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: { [key: string]: string };
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: { [key: string]: string };
  /**
  * URL of the endpoint to send samples to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#url DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    bearer_token_secret: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    flush_interval: cdktf.stringToTerraform(struct!.flushInterval),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    max_batch_size: cdktf.numberToTerraform(struct!.maxBatchSize),
    max_queue_size: cdktf.numberToTerraform(struct!.maxQueueSize),
    oauth2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oauth2),
    tls_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tlsConfig),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_secret: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.flushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.maxQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oauth2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oauth2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tlsConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._flushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushInterval = this._flushInterval;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._maxQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQueueSize = this._maxQueueSize;
    }
    if (this._oauth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2;
    }
    if (this._tlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._concurrency = undefined;
      this._flushInterval = undefined;
      this._headers = undefined;
      this._maxBatchSize = undefined;
      this._maxQueueSize = undefined;
      this._oauth2 = undefined;
      this._tlsConfig = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenFile = value.bearerTokenFile;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._concurrency = value.concurrency;
      this._flushInterval = value.flushInterval;
      this._headers = value.headers;
      this._maxBatchSize = value.maxBatchSize;
      this._maxQueueSize = value.maxQueueSize;
      this._oauth2 = value.oauth2;
      this._tlsConfig = value.tlsConfig;
      this._url = value.url;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // flush_interval - computed: false, optional: true, required: false
  private _flushInterval?: string; 
  public get flushInterval() {
    return this.getStringAttribute('flush_interval');
  }
  public set flushInterval(value: string) {
    this._flushInterval = value;
  }
  public resetFlushInterval() {
    this._flushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushIntervalInput() {
    return this._flushInterval;
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

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // max_queue_size - computed: false, optional: true, required: false
  private _maxQueueSize?: number; 
  public get maxQueueSize() {
    return this.getNumberAttribute('max_queue_size');
  }
  public set maxQueueSize(value: number) {
    this._maxQueueSize = value;
  }
  public resetMaxQueueSize() {
    this._maxQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQueueSizeInput() {
    return this._maxQueueSize;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2?: { [key: string]: string }; 
  public get oauth2() {
    return this.getStringMapAttribute('oauth2');
  }
  public set oauth2(value: { [key: string]: string }) {
    this._oauth2 = value;
  }
  public resetOauth2() {
    this._oauth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: { [key: string]: string }; 
  public get tlsConfig() {
    return this.getStringMapAttribute('tls_config');
  }
  public set tlsConfig(value: { [key: string]: string }) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#max_surge DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#max_unavailable DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdateToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdateToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec {
  /**
  * EmbeddedObjectMetadata defines objectMeta for additional service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata;
  /**
  * ServiceSpec describes the attributes that a user creates on a service. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#spec}
  */
  readonly spec: { [key: string]: string };
  /**
  * UseAsDefault applies changes from given service definition to the main object Service Changing from headless service to clusterIP or loadbalancer may break cross-component communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#use_as_default DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#use_as_default}
  */
  readonly useAsDefault?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
    use_as_default: cdktf.booleanToTerraform(struct!.useAsDefault),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata",
    },
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.useAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._useAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAsDefault = this._useAsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec = undefined;
      this._useAsDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec = value.spec;
      this._useAsDefault = value.useAsDefault;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // use_as_default - computed: false, optional: true, required: false
  private _useAsDefault?: boolean | cdktf.IResolvable; 
  public get useAsDefault() {
    return this.getBooleanAttribute('use_as_default');
  }
  public set useAsDefault(value: boolean | cdktf.IResolvable) {
    this._useAsDefault = value;
  }
  public resetUseAsDefault() {
    this._useAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsDefaultInput() {
    return this._useAsDefault;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#effect DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#toleration_seconds DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#mount_path DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#mount_propagation DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#read_only DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#recursive_read_only DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#sub_path DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#sub_path_expr DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec {
  /**
  * Affinity If specified, the pod's scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#affinity DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#affinity}
  */
  readonly affinity?: { [key: string]: string };
  /**
  * ConfigMaps is a list of ConfigMaps in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/configs/CONFIGMAP_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#config_maps DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * ConfigReloaderExtraArgs that will be passed to VMAuths config-reloader container for example resyncInterval: '30s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#config_reloader_extra_args DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#config_reloader_extra_args}
  */
  readonly configReloaderExtraArgs?: { [key: string]: string };
  /**
  * ConfigReloaderImageTag defines image:tag for config-reloader container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#config_reloader_image_tag DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#config_reloader_image_tag}
  */
  readonly configReloaderImageTag?: string;
  /**
  * ConfigReloaderResources config-reloader container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#config_reloader_resources DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#config_reloader_resources}
  */
  readonly configReloaderResources?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources;
  /**
  * Containers property allows to inject additions sidecars or to patch existing containers. It can be useful for proxies, backup, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#containers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#containers}
  */
  readonly containers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Datasource Victoria Metrics or VMSelect url. Required parameter. e.g. http://127.0.0.1:8428
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#datasource DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#datasource}
  */
  readonly datasource: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource;
  /**
  * DisableSelfServiceScrape controls creation of VMServiceScrape by operator for the application. Has priority over 'VM_DISABLESELFSERVICESCRAPECREATION' operator env variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#disable_self_service_scrape DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#disable_self_service_scrape}
  */
  readonly disableSelfServiceScrape?: boolean | cdktf.IResolvable;
  /**
  * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#dns_config DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig;
  /**
  * DNSPolicy sets DNS policy for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#dns_policy DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * EnforcedNamespaceLabel enforces adding a namespace label of origin for each alert and metric that is user created. The label value will always be the namespace of the object that is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#enforced_namespace_label DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#enforced_namespace_label}
  */
  readonly enforcedNamespaceLabel?: string;
  /**
  * EvaluationInterval defines how often to evaluate rules by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#evaluation_interval DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * ExternalLabels in the form 'name: value' to add to all generated recording rules and alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#external_labels DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#external_labels}
  */
  readonly externalLabels?: { [key: string]: string };
  /**
  * ExtraArgs that will be passed to the application container for example remoteWrite.tmpDataPath: /tmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#extra_args DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * ExtraEnvs that will be passed to the application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#extra_envs DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#extra_envs}
  */
  readonly extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * HostAliases provides mapping for ip and hostname, that would be propagated to pod, cannot be used with HostNetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#host_aliases DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable;
  /**
  * HostNetwork controls whether the pod may use the node network namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#host_network DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Image - docker image settings if no specified operator uses default version from operator config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#image DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#image}
  */
  readonly image?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage;
  /**
  * ImagePullSecrets An optional list of references to secrets in the same namespace to use for pulling images from registries see https://kubernetes.io/docs/concepts/containers/images/#referring-to-an-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#image_pull_secrets DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * InitContainers allows adding initContainers to the pod definition. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#init_containers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * License allows to configure license key to be used for enterprise features. Using license key is supported starting from VictoriaMetrics v1.94.0. See [here](https://docs.victoriametrics.com/enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#license DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#license}
  */
  readonly license?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense;
  /**
  * LivenessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#liveness_probe DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: { [key: string]: string };
  /**
  * LogFormat for VMAlert to be configured with. default or json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#log_format DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * LogLevel for VMAlert to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#log_level DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * MinReadySeconds defines a minim number os seconds to wait before starting update next pod if previous in healthy state Has no effect for VLogs and VMSingle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#min_ready_seconds DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * NodeSelector Define which Nodes the Pods are scheduled on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#node_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Notifier prometheus alertmanager endpoint spec. Required at least one of notifier or notifiers when there are alerting rules. e.g. http://127.0.0.1:9093 If specified both notifier and notifiers, notifier will be added as last element to notifiers. only one of notifier options could be chosen: notifierConfigRef or notifiers + notifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#notifier DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#notifier}
  */
  readonly notifier?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier;
  /**
  * NotifierConfigRef reference for secret with notifier configuration for vmalert only one of notifier options could be chosen: notifierConfigRef or notifiers + notifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#notifier_config_ref DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#notifier_config_ref}
  */
  readonly notifierConfigRef?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef;
  /**
  * Notifiers prometheus alertmanager endpoints. Required at least one of notifier or notifiers when there are alerting rules. e.g. http://127.0.0.1:9093 If specified both notifier and notifiers, notifier will be added as last element to notifiers. only one of notifier options could be chosen: notifierConfigRef or notifiers + notifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#notifiers DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#notifiers}
  */
  readonly notifiers?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers[] | cdktf.IResolvable;
  /**
  * Paused If set to true all actions on the underlying managed objects are not going to be performed, except for delete actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#paused DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * PodDisruptionBudget created by operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#pod_disruption_budget DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget;
  /**
  * PodMetadata configures Labels and Annotations which are propagated to the VMAlert pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#pod_metadata DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata;
  /**
  * Port listen address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * PriorityClassName class assigned to the Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#priority_class_name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * ReadinessGates defines pod readiness gates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#readiness_gates DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * ReadinessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#readiness_probe DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: { [key: string]: string };
  /**
  * RemoteRead Optional URL to read vmalert state (persisted via RemoteWrite) This configuration only makes sense if alerts state has been successfully persisted (via RemoteWrite) before. see -remoteRead.url docs in vmalerts for details. E.g. http://127.0.0.1:8428
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#remote_read DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#remote_read}
  */
  readonly remoteRead?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead;
  /**
  * RemoteWrite Optional URL to remote-write compatible storage to persist vmalert state and rule results to. Rule results will be persisted according to each rule. Alerts state will be persisted in the form of time series named ALERTS and ALERTS_FOR_STATE see -remoteWrite.url docs in vmalerts for details. E.g. http://127.0.0.1:8428
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#remote_write DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#remote_write}
  */
  readonly remoteWrite?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite;
  /**
  * ReplicaCount is the expected size of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#replica_count DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources;
  /**
  * The number of old ReplicaSets to retain to allow rollback in deployment or maximum number of revisions that will be maintained in the Deployment revision history. Has no effect at StatefulSets Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#revision_history_limit_count DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#revision_history_limit_count}
  */
  readonly revisionHistoryLimitCount?: number;
  /**
  * RollingUpdate - overrides deployment update params.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#rolling_update DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate;
  /**
  * RuleNamespaceSelector to be selected for VMRules discovery. Works in combination with Selector. If both nil - behaviour controlled by selectAllByDefault NamespaceSelector nil - only objects at VMAlert namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#rule_namespace_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#rule_namespace_selector}
  */
  readonly ruleNamespaceSelector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector;
  /**
  * RulePath to the file with alert rules. Supports patterns. Flag can be specified multiple times. Examples: -rule /path/to/file. Path to a single file with alerting rules -rule dir/*.yaml -rule /*.yaml. Relative path to all .yaml files in folder, absolute path to all .yaml files in root. by default operator adds /etc/vmalert/configs/base/vmalert.yaml
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#rule_path DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#rule_path}
  */
  readonly rulePath?: string[];
  /**
  * RuleSelector selector to select which VMRules to mount for loading alerting rules from. Works in combination with NamespaceSelector. If both nil - behaviour controlled by selectAllByDefault NamespaceSelector nil - only objects at VMAlert namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#rule_selector DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#rule_selector}
  */
  readonly ruleSelector?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector;
  /**
  * RuntimeClassName - defines runtime class for kubernetes pod. https://kubernetes.io/docs/concepts/containers/runtime-class/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#runtime_class_name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * SchedulerName - defines kubernetes scheduler name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#scheduler_name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Secrets is a list of Secrets in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/secrets/SECRET_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#secrets DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#security_context DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#security_context}
  */
  readonly securityContext?: { [key: string]: string };
  /**
  * SelectAllByDefault changes default behavior for empty CRD selectors, such RuleSelector. with selectAllByDefault: true and empty serviceScrapeSelector and RuleNamespaceSelector Operator selects all exist serviceScrapes with selectAllByDefault: false - selects nothing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#select_all_by_default DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#select_all_by_default}
  */
  readonly selectAllByDefault?: boolean | cdktf.IResolvable;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run the pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#service_account_name DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * ServiceScrapeSpec that will be added to vmalert VMServiceScrape spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#service_scrape_spec DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#service_scrape_spec}
  */
  readonly serviceScrapeSpec?: { [key: string]: string };
  /**
  * ServiceSpec that will be added to vmalert service spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#service_spec DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#service_spec}
  */
  readonly serviceSpec?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec;
  /**
  * StartupProbe that will be added to CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#startup_probe DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: { [key: string]: string };
  /**
  * TerminationGracePeriodSeconds period for container graceful termination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#termination_grace_period_seconds DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Tolerations If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#tolerations DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints embedded kubernetes pod configuration option, controls how pods are spread across your cluster among failure-domains such as regions, zones, nodes, and other user-defined topology domains https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#topology_spread_constraints DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * UpdateStrategy - overrides default update strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#update_strategy DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * UseDefaultResources controls resource settings By default, operator sets built-in resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#use_default_resources DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#use_default_resources}
  */
  readonly useDefaultResources?: boolean | cdktf.IResolvable;
  /**
  * UseStrictSecurity enables strict security mode for component it restricts disk writes access uses non-root user out of the box drops not needed security permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#use_strict_security DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#use_strict_security}
  */
  readonly useStrictSecurity?: boolean | cdktf.IResolvable;
  /**
  * UseVMConfigReloader replaces prometheus-like config-reloader with vm one. It uses secrets watch instead of file watch which greatly increases speed of config updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#use_vm_config_reloader DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#use_vm_config_reloader}
  */
  readonly useVmConfigReloader?: boolean | cdktf.IResolvable;
  /**
  * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment/StatefulSet definition. VolumeMounts specified will be appended to other VolumeMounts in the Application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#volume_mounts DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Volumes allows configuration of additional volumes on the output Deployment/StatefulSet definition. Volumes specified will be appended to other volumes that are generated. / +optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#volumes DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest#volumes}
  */
  readonly volumes?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.affinity),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    config_reloader_extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configReloaderExtraArgs),
    config_reloader_image_tag: cdktf.stringToTerraform(struct!.configReloaderImageTag),
    config_reloader_resources: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesToTerraform(struct!.configReloaderResources),
    containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.containers),
    datasource: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceToTerraform(struct!.datasource),
    disable_self_service_scrape: cdktf.booleanToTerraform(struct!.disableSelfServiceScrape),
    dns_config: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    enforced_namespace_label: cdktf.stringToTerraform(struct!.enforcedNamespaceLabel),
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    external_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.externalLabels),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_envs: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.extraEnvs),
    host_aliases: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImageToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.initContainers),
    license: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseToTerraform(struct!.license),
    liveness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.livenessProbe),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    notifier: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierToTerraform(struct!.notifier),
    notifier_config_ref: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRefToTerraform(struct!.notifierConfigRef),
    notifiers: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersToTerraform, false)(struct!.notifiers),
    paused: cdktf.booleanToTerraform(struct!.paused),
    pod_disruption_budget: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_metadata: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    port: cdktf.stringToTerraform(struct!.port),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    readiness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.readinessProbe),
    remote_read: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadToTerraform(struct!.remoteRead),
    remote_write: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteToTerraform(struct!.remoteWrite),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    resources: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    revision_history_limit_count: cdktf.numberToTerraform(struct!.revisionHistoryLimitCount),
    rolling_update: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdateToTerraform(struct!.rollingUpdate),
    rule_namespace_selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorToTerraform(struct!.ruleNamespaceSelector),
    rule_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePath),
    rule_selector: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorToTerraform(struct!.ruleSelector),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    security_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityContext),
    select_all_by_default: cdktf.booleanToTerraform(struct!.selectAllByDefault),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_scrape_spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceScrapeSpec),
    service_spec: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecToTerraform(struct!.serviceSpec),
    startup_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.startupProbe),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.topologySpreadConstraints),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
    use_default_resources: cdktf.booleanToTerraform(struct!.useDefaultResources),
    use_strict_security: cdktf.booleanToTerraform(struct!.useStrictSecurity),
    use_vm_config_reloader: cdktf.booleanToTerraform(struct!.useVmConfigReloader),
    volume_mounts: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumes),
  }
}


export function dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.affinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    config_reloader_extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configReloaderExtraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_reloader_image_tag: {
      value: cdktf.stringToHclTerraform(struct!.configReloaderImageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_reloader_resources: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesToHclTerraform(struct!.configReloaderResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources",
    },
    containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    datasource: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceToHclTerraform(struct!.datasource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource",
    },
    disable_self_service_scrape: {
      value: cdktf.booleanToHclTerraform(struct!.disableSelfServiceScrape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_config: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_namespace_label: {
      value: cdktf.stringToHclTerraform(struct!.enforcedNamespaceLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_interval: {
      value: cdktf.stringToHclTerraform(struct!.evaluationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.externalLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_envs: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.extraEnvs),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.initContainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    license: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseToHclTerraform(struct!.license),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense",
    },
    liveness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.livenessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    notifier: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierToHclTerraform(struct!.notifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier",
    },
    notifier_config_ref: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRefToHclTerraform(struct!.notifierConfigRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef",
    },
    notifiers: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersToHclTerraform, false)(struct!.notifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersList",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_disruption_budget: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget",
    },
    pod_metadata: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesList",
    },
    readiness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.readinessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remote_read: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadToHclTerraform(struct!.remoteRead),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead",
    },
    remote_write: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteToHclTerraform(struct!.remoteWrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources",
    },
    revision_history_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rolling_update: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate",
    },
    rule_namespace_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorToHclTerraform(struct!.ruleNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector",
    },
    rule_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePath),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_selector: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorToHclTerraform(struct!.ruleSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    select_all_by_default: {
      value: cdktf.booleanToHclTerraform(struct!.selectAllByDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_scrape_spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceScrapeSpec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_spec: {
      value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecToHclTerraform(struct!.serviceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec",
    },
    startup_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.startupProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.topologySpreadConstraints),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_resources: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_strict_security: {
      value: cdktf.booleanToHclTerraform(struct!.useStrictSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_vm_config_reloader: {
      value: cdktf.booleanToHclTerraform(struct!.useVmConfigReloader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._configReloaderExtraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.configReloaderExtraArgs = this._configReloaderExtraArgs;
    }
    if (this._configReloaderImageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.configReloaderImageTag = this._configReloaderImageTag;
    }
    if (this._configReloaderResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configReloaderResources = this._configReloaderResources?.internalValue;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._datasource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource?.internalValue;
    }
    if (this._disableSelfServiceScrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSelfServiceScrape = this._disableSelfServiceScrape;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._enforcedNamespaceLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedNamespaceLabel = this._enforcedNamespaceLabel;
    }
    if (this._evaluationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationInterval = this._evaluationInterval;
    }
    if (this._externalLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLabels = this._externalLabels;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvs = this._extraEnvs;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    if (this._license?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license?.internalValue;
    }
    if (this._livenessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._notifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifier = this._notifier?.internalValue;
    }
    if (this._notifierConfigRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifierConfigRef = this._notifierConfigRef?.internalValue;
    }
    if (this._notifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifiers = this._notifiers?.internalValue;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._podDisruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podDisruptionBudget = this._podDisruptionBudget?.internalValue;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._readinessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe;
    }
    if (this._remoteRead?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteRead = this._remoteRead?.internalValue;
    }
    if (this._remoteWrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteWrite = this._remoteWrite?.internalValue;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._revisionHistoryLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimitCount = this._revisionHistoryLimitCount;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._ruleNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleNamespaceSelector = this._ruleNamespaceSelector?.internalValue;
    }
    if (this._rulePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePath = this._rulePath;
    }
    if (this._ruleSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSelector = this._ruleSelector?.internalValue;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._securityContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext;
    }
    if (this._selectAllByDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAllByDefault = this._selectAllByDefault;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._serviceScrapeSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceScrapeSpec = this._serviceScrapeSpec;
    }
    if (this._serviceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSpec = this._serviceSpec?.internalValue;
    }
    if (this._startupProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._useDefaultResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultResources = this._useDefaultResources;
    }
    if (this._useStrictSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStrictSecurity = this._useStrictSecurity;
    }
    if (this._useVmConfigReloader !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVmConfigReloader = this._useVmConfigReloader;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._configMaps = undefined;
      this._configReloaderExtraArgs = undefined;
      this._configReloaderImageTag = undefined;
      this._configReloaderResources.internalValue = undefined;
      this._containers = undefined;
      this._datasource.internalValue = undefined;
      this._disableSelfServiceScrape = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._enforcedNamespaceLabel = undefined;
      this._evaluationInterval = undefined;
      this._externalLabels = undefined;
      this._extraArgs = undefined;
      this._extraEnvs = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers = undefined;
      this._license.internalValue = undefined;
      this._livenessProbe = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._minReadySeconds = undefined;
      this._nodeSelector = undefined;
      this._notifier.internalValue = undefined;
      this._notifierConfigRef.internalValue = undefined;
      this._notifiers.internalValue = undefined;
      this._paused = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._port = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._readinessProbe = undefined;
      this._remoteRead.internalValue = undefined;
      this._remoteWrite.internalValue = undefined;
      this._replicaCount = undefined;
      this._resources.internalValue = undefined;
      this._revisionHistoryLimitCount = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._ruleNamespaceSelector.internalValue = undefined;
      this._rulePath = undefined;
      this._ruleSelector.internalValue = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._secrets = undefined;
      this._securityContext = undefined;
      this._selectAllByDefault = undefined;
      this._serviceAccountName = undefined;
      this._serviceScrapeSpec = undefined;
      this._serviceSpec.internalValue = undefined;
      this._startupProbe = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints = undefined;
      this._updateStrategy = undefined;
      this._useDefaultResources = undefined;
      this._useStrictSecurity = undefined;
      this._useVmConfigReloader = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._configMaps = value.configMaps;
      this._configReloaderExtraArgs = value.configReloaderExtraArgs;
      this._configReloaderImageTag = value.configReloaderImageTag;
      this._configReloaderResources.internalValue = value.configReloaderResources;
      this._containers = value.containers;
      this._datasource.internalValue = value.datasource;
      this._disableSelfServiceScrape = value.disableSelfServiceScrape;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._enforcedNamespaceLabel = value.enforcedNamespaceLabel;
      this._evaluationInterval = value.evaluationInterval;
      this._externalLabels = value.externalLabels;
      this._extraArgs = value.extraArgs;
      this._extraEnvs = value.extraEnvs;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostNetwork = value.hostNetwork;
      this._image.internalValue = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers = value.initContainers;
      this._license.internalValue = value.license;
      this._livenessProbe = value.livenessProbe;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._minReadySeconds = value.minReadySeconds;
      this._nodeSelector = value.nodeSelector;
      this._notifier.internalValue = value.notifier;
      this._notifierConfigRef.internalValue = value.notifierConfigRef;
      this._notifiers.internalValue = value.notifiers;
      this._paused = value.paused;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podMetadata.internalValue = value.podMetadata;
      this._port = value.port;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._readinessProbe = value.readinessProbe;
      this._remoteRead.internalValue = value.remoteRead;
      this._remoteWrite.internalValue = value.remoteWrite;
      this._replicaCount = value.replicaCount;
      this._resources.internalValue = value.resources;
      this._revisionHistoryLimitCount = value.revisionHistoryLimitCount;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._ruleNamespaceSelector.internalValue = value.ruleNamespaceSelector;
      this._rulePath = value.rulePath;
      this._ruleSelector.internalValue = value.ruleSelector;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._secrets = value.secrets;
      this._securityContext = value.securityContext;
      this._selectAllByDefault = value.selectAllByDefault;
      this._serviceAccountName = value.serviceAccountName;
      this._serviceScrapeSpec = value.serviceScrapeSpec;
      this._serviceSpec.internalValue = value.serviceSpec;
      this._startupProbe = value.startupProbe;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints = value.topologySpreadConstraints;
      this._updateStrategy = value.updateStrategy;
      this._useDefaultResources = value.useDefaultResources;
      this._useStrictSecurity = value.useStrictSecurity;
      this._useVmConfigReloader = value.useVmConfigReloader;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: { [key: string]: string }; 
  public get affinity() {
    return this.getStringMapAttribute('affinity');
  }
  public set affinity(value: { [key: string]: string }) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // config_reloader_extra_args - computed: false, optional: true, required: false
  private _configReloaderExtraArgs?: { [key: string]: string }; 
  public get configReloaderExtraArgs() {
    return this.getStringMapAttribute('config_reloader_extra_args');
  }
  public set configReloaderExtraArgs(value: { [key: string]: string }) {
    this._configReloaderExtraArgs = value;
  }
  public resetConfigReloaderExtraArgs() {
    this._configReloaderExtraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderExtraArgsInput() {
    return this._configReloaderExtraArgs;
  }

  // config_reloader_image_tag - computed: false, optional: true, required: false
  private _configReloaderImageTag?: string; 
  public get configReloaderImageTag() {
    return this.getStringAttribute('config_reloader_image_tag');
  }
  public set configReloaderImageTag(value: string) {
    this._configReloaderImageTag = value;
  }
  public resetConfigReloaderImageTag() {
    this._configReloaderImageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderImageTagInput() {
    return this._configReloaderImageTag;
  }

  // config_reloader_resources - computed: false, optional: true, required: false
  private _configReloaderResources = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResourcesOutputReference(this, "config_reloader_resources");
  public get configReloaderResources() {
    return this._configReloaderResources;
  }
  public putConfigReloaderResources(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecConfigReloaderResources) {
    this._configReloaderResources.internalValue = value;
  }
  public resetConfigReloaderResources() {
    this._configReloaderResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderResourcesInput() {
    return this._configReloaderResources.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get containers() {
    return this.interpolationForAttribute('containers');
  }
  public set containers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // datasource - computed: false, optional: false, required: true
  private _datasource = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasourceOutputReference(this, "datasource");
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDatasource) {
    this._datasource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }

  // disable_self_service_scrape - computed: false, optional: true, required: false
  private _disableSelfServiceScrape?: boolean | cdktf.IResolvable; 
  public get disableSelfServiceScrape() {
    return this.getBooleanAttribute('disable_self_service_scrape');
  }
  public set disableSelfServiceScrape(value: boolean | cdktf.IResolvable) {
    this._disableSelfServiceScrape = value;
  }
  public resetDisableSelfServiceScrape() {
    this._disableSelfServiceScrape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSelfServiceScrapeInput() {
    return this._disableSelfServiceScrape;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // enforced_namespace_label - computed: false, optional: true, required: false
  private _enforcedNamespaceLabel?: string; 
  public get enforcedNamespaceLabel() {
    return this.getStringAttribute('enforced_namespace_label');
  }
  public set enforcedNamespaceLabel(value: string) {
    this._enforcedNamespaceLabel = value;
  }
  public resetEnforcedNamespaceLabel() {
    this._enforcedNamespaceLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedNamespaceLabelInput() {
    return this._enforcedNamespaceLabel;
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: string; 
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: string) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
  }

  // external_labels - computed: false, optional: true, required: false
  private _externalLabels?: { [key: string]: string }; 
  public get externalLabels() {
    return this.getStringMapAttribute('external_labels');
  }
  public set externalLabels(value: { [key: string]: string }) {
    this._externalLabels = value;
  }
  public resetExternalLabels() {
    this._externalLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLabelsInput() {
    return this._externalLabels;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_envs - computed: false, optional: true, required: false
  private _extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get extraEnvs() {
    return this.interpolationForAttribute('extra_envs');
  }
  public set extraEnvs(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._extraEnvs = value;
  }
  public resetExtraEnvs() {
    this._extraEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvsInput() {
    return this._extraEnvs;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get initContainers() {
    return this.interpolationForAttribute('init_containers');
  }
  public set initContainers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._initContainers = value;
  }
  public resetInitContainers() {
    this._initContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers;
  }

  // license - computed: false, optional: true, required: false
  private _license = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe?: { [key: string]: string }; 
  public get livenessProbe() {
    return this.getStringMapAttribute('liveness_probe');
  }
  public set livenessProbe(value: { [key: string]: string }) {
    this._livenessProbe = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
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

  // min_ready_seconds - computed: false, optional: true, required: false
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

  // notifier - computed: false, optional: true, required: false
  private _notifier = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierOutputReference(this, "notifier");
  public get notifier() {
    return this._notifier;
  }
  public putNotifier(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifier) {
    this._notifier.internalValue = value;
  }
  public resetNotifier() {
    this._notifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifierInput() {
    return this._notifier.internalValue;
  }

  // notifier_config_ref - computed: false, optional: true, required: false
  private _notifierConfigRef = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRefOutputReference(this, "notifier_config_ref");
  public get notifierConfigRef() {
    return this._notifierConfigRef;
  }
  public putNotifierConfigRef(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifierConfigRef) {
    this._notifierConfigRef.internalValue = value;
  }
  public resetNotifierConfigRef() {
    this._notifierConfigRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifierConfigRefInput() {
    return this._notifierConfigRef.internalValue;
  }

  // notifiers - computed: false, optional: true, required: false
  private _notifiers = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiersList(this, "notifiers", false);
  public get notifiers() {
    return this._notifiers;
  }
  public putNotifiers(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecNotifiers[] | cdktf.IResolvable) {
    this._notifiers.internalValue = value;
  }
  public resetNotifiers() {
    this._notifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifiersInput() {
    return this._notifiers.internalValue;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pod_disruption_budget - computed: false, optional: true, required: false
  private _podDisruptionBudget = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodDisruptionBudget) {
    this._podDisruptionBudget.internalValue = value;
  }
  public resetPodDisruptionBudget() {
    this._podDisruptionBudget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podDisruptionBudgetInput() {
    return this._podDisruptionBudget.internalValue;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // readiness_gates - computed: false, optional: true, required: false
  private _readinessGates = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe?: { [key: string]: string }; 
  public get readinessProbe() {
    return this.getStringMapAttribute('readiness_probe');
  }
  public set readinessProbe(value: { [key: string]: string }) {
    this._readinessProbe = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe;
  }

  // remote_read - computed: false, optional: true, required: false
  private _remoteRead = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteReadOutputReference(this, "remote_read");
  public get remoteRead() {
    return this._remoteRead;
  }
  public putRemoteRead(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteRead) {
    this._remoteRead.internalValue = value;
  }
  public resetRemoteRead() {
    this._remoteRead.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteReadInput() {
    return this._remoteRead.internalValue;
  }

  // remote_write - computed: false, optional: true, required: false
  private _remoteWrite = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWriteOutputReference(this, "remote_write");
  public get remoteWrite() {
    return this._remoteWrite;
  }
  public putRemoteWrite(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRemoteWrite) {
    this._remoteWrite.internalValue = value;
  }
  public resetRemoteWrite() {
    this._remoteWrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteWriteInput() {
    return this._remoteWrite.internalValue;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // revision_history_limit_count - computed: false, optional: true, required: false
  private _revisionHistoryLimitCount?: number; 
  public get revisionHistoryLimitCount() {
    return this.getNumberAttribute('revision_history_limit_count');
  }
  public set revisionHistoryLimitCount(value: number) {
    this._revisionHistoryLimitCount = value;
  }
  public resetRevisionHistoryLimitCount() {
    this._revisionHistoryLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitCountInput() {
    return this._revisionHistoryLimitCount;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
  }

  // rule_namespace_selector - computed: false, optional: true, required: false
  private _ruleNamespaceSelector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelectorOutputReference(this, "rule_namespace_selector");
  public get ruleNamespaceSelector() {
    return this._ruleNamespaceSelector;
  }
  public putRuleNamespaceSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleNamespaceSelector) {
    this._ruleNamespaceSelector.internalValue = value;
  }
  public resetRuleNamespaceSelector() {
    this._ruleNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNamespaceSelectorInput() {
    return this._ruleNamespaceSelector.internalValue;
  }

  // rule_path - computed: false, optional: true, required: false
  private _rulePath?: string[]; 
  public get rulePath() {
    return this.getListAttribute('rule_path');
  }
  public set rulePath(value: string[]) {
    this._rulePath = value;
  }
  public resetRulePath() {
    this._rulePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathInput() {
    return this._rulePath;
  }

  // rule_selector - computed: false, optional: true, required: false
  private _ruleSelector = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelectorOutputReference(this, "rule_selector");
  public get ruleSelector() {
    return this._ruleSelector;
  }
  public putRuleSelector(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecRuleSelector) {
    this._ruleSelector.internalValue = value;
  }
  public resetRuleSelector() {
    this._ruleSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSelectorInput() {
    return this._ruleSelector.internalValue;
  }

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext?: { [key: string]: string }; 
  public get securityContext() {
    return this.getStringMapAttribute('security_context');
  }
  public set securityContext(value: { [key: string]: string }) {
    this._securityContext = value;
  }
  public resetSecurityContext() {
    this._securityContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext;
  }

  // select_all_by_default - computed: false, optional: true, required: false
  private _selectAllByDefault?: boolean | cdktf.IResolvable; 
  public get selectAllByDefault() {
    return this.getBooleanAttribute('select_all_by_default');
  }
  public set selectAllByDefault(value: boolean | cdktf.IResolvable) {
    this._selectAllByDefault = value;
  }
  public resetSelectAllByDefault() {
    this._selectAllByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllByDefaultInput() {
    return this._selectAllByDefault;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // service_scrape_spec - computed: false, optional: true, required: false
  private _serviceScrapeSpec?: { [key: string]: string }; 
  public get serviceScrapeSpec() {
    return this.getStringMapAttribute('service_scrape_spec');
  }
  public set serviceScrapeSpec(value: { [key: string]: string }) {
    this._serviceScrapeSpec = value;
  }
  public resetServiceScrapeSpec() {
    this._serviceScrapeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceScrapeSpecInput() {
    return this._serviceScrapeSpec;
  }

  // service_spec - computed: false, optional: true, required: false
  private _serviceSpec = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpecOutputReference(this, "service_spec");
  public get serviceSpec() {
    return this._serviceSpec;
  }
  public putServiceSpec(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecServiceSpec) {
    this._serviceSpec.internalValue = value;
  }
  public resetServiceSpec() {
    this._serviceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSpecInput() {
    return this._serviceSpec.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe?: { [key: string]: string }; 
  public get startupProbe() {
    return this.getStringMapAttribute('startup_probe');
  }
  public set startupProbe(value: { [key: string]: string }) {
    this._startupProbe = value;
  }
  public resetStartupProbe() {
    this._startupProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get topologySpreadConstraints() {
    return this.interpolationForAttribute('topology_spread_constraints');
  }
  public set topologySpreadConstraints(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._topologySpreadConstraints = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }

  // use_default_resources - computed: false, optional: true, required: false
  private _useDefaultResources?: boolean | cdktf.IResolvable; 
  public get useDefaultResources() {
    return this.getBooleanAttribute('use_default_resources');
  }
  public set useDefaultResources(value: boolean | cdktf.IResolvable) {
    this._useDefaultResources = value;
  }
  public resetUseDefaultResources() {
    this._useDefaultResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultResourcesInput() {
    return this._useDefaultResources;
  }

  // use_strict_security - computed: false, optional: true, required: false
  private _useStrictSecurity?: boolean | cdktf.IResolvable; 
  public get useStrictSecurity() {
    return this.getBooleanAttribute('use_strict_security');
  }
  public set useStrictSecurity(value: boolean | cdktf.IResolvable) {
    this._useStrictSecurity = value;
  }
  public resetUseStrictSecurity() {
    this._useStrictSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStrictSecurityInput() {
    return this._useStrictSecurity;
  }

  // use_vm_config_reloader - computed: false, optional: true, required: false
  private _useVmConfigReloader?: boolean | cdktf.IResolvable; 
  public get useVmConfigReloader() {
    return this.getBooleanAttribute('use_vm_config_reloader');
  }
  public set useVmConfigReloader(value: boolean | cdktf.IResolvable) {
    this._useVmConfigReloader = value;
  }
  public resetUseVmConfigReloader() {
    this._useVmConfigReloader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVmConfigReloaderInput() {
    return this._useVmConfigReloader;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumes() {
    return this.interpolationForAttribute('volumes');
  }
  public set volumes(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest k8s_operator_victoriametrics_com_vm_alert_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_alert_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmAlertV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_alert_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_alert_v1beta1_manifest k8s_operator_victoriametrics_com_vm_alert_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_alert_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmAlertV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
