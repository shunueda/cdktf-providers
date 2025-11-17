// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata;
  /**
  * VMAuthSpec defines the desired state of VMAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsList",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#nameservers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#options DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#options}
  */
  readonly options?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable;
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#searches DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#searches}
  */
  readonly searches?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    options: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsToTerraform, false)(struct!.options),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsList",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined) {
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
  private _options = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases {
  /**
  * Hostnames for the above IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#hostnames DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * IP address of the host file entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#ip DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#ip}
  */
  readonly ip: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage {
  /**
  * PullPolicy describes how to pull docker image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#pull_policy DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Repository contains name of docker image + it's repository if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#repository DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag contains desired docker image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#tag DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResourceToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResourceToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
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
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort {
  /**
  * name is the name of the port on the Service. This is a mutually exclusive setting with 'Number'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with 'Name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#number DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#number}
  */
  readonly number?: number;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePortToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePortToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._number = value.number;
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

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService {
  /**
  * name is the referenced service. The service must exist in the same namespace as the Ingress object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#port}
  */
  readonly port?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServiceToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePortToTerraform(struct!.port),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServiceToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService | cdktf.IResolvable): any {
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
    port: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePortToHclTerraform(struct!.port),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port.internalValue = value.port;
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

  // port - computed: false, optional: true, required: false
  private _port = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePortOutputReference(this, "port");
  public get port() {
    return this._port;
  }
  public putPort(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServicePort) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend {
  /**
  * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with 'Service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#resource DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#resource}
  */
  readonly resource?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource;
  /**
  * service references a service as a backend. This is a mutually exclusive setting with 'Resource'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#service DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#service}
  */
  readonly service?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResourceToTerraform(struct!.resource),
    service: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServiceToTerraform(struct!.service),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource",
    },
    service: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource.internalValue = value.resource;
      this._service.internalValue = value.service;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths {
  /**
  * backend defines the referenced service endpoint to which the traffic will be forwarded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#backend DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#backend}
  */
  readonly backend: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend;
  /**
  * path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional 'path' part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value 'Exact' or 'Prefix'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#path DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is done on a path element by element basis. A path element refers is the list of labels in the path split by the '/' separator. A request is a match for path p if every p is an element-wise prefix of p of the request path. Note that if the last element of the path is a substring of the last element in request path, it is not a match (e.g. /foo/bar matches /foo/bar/baz, but does not match /foo/barbaz). * ImplementationSpecific: Interpretation of the Path matching is up to the IngressClass. Implementations can treat this as a separate PathType or treat it identically to Prefix or Exact path types. Implementations are required to support all path types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#path_type DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#path_type}
  */
  readonly pathType: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendToTerraform(struct!.backend),
    path: cdktf.stringToTerraform(struct!.path),
    path_type: cdktf.stringToTerraform(struct!.pathType),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_type: {
      value: cdktf.stringToHclTerraform(struct!.pathType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._pathType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathType = this._pathType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._path = undefined;
      this._pathType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._path = value.path;
      this._pathType = value.pathType;
    }
  }

  // backend - computed: false, optional: false, required: true
  private _backend = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
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

  // path_type - computed: false, optional: false, required: true
  private _pathType?: string; 
  public get pathType() {
    return this.getStringAttribute('path_type');
  }
  public set pathType(value: string) {
    this._pathType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTypeInput() {
    return this._pathType;
  }
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp {
  /**
  * paths is a collection of paths that map requests to backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#paths DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#paths}
  */
  readonly paths: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsToTerraform, false)(struct!.paths),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsToHclTerraform, false)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths.internalValue = value.paths;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules {
  /**
  * host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the 'host' part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the IP in the Spec of the parent Ingress. 2. The ':' delimiter is not respected because ports are not allowed. Currently the port of an Ingress is implicitly :80 for http and :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue. host can be 'precise' which is a domain name without the terminating dot of a network host (e.g. 'foo.bar.com') or 'wildcard', which is a domain name prefixed with a single wildcard label (e.g. '*.foo.com'). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == '*'). Requests will be matched against the Host field in the following way: 1. If host is precise, the request matches this rule if the http host header is equal to Host. 2. If host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#host DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#http DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#http}
  */
  readonly http?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpToTerraform(struct!.http),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules | cdktf.IResolvable): any {
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
    http: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._http.internalValue = value.http;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls {
  /**
  * hosts is a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#hosts DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#hosts}
  */
  readonly hosts?: string[];
  /**
  * secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the 'Host' header field used by an IngressRule, the SNI host is used for termination and value of the 'Host' header is used for routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#secret_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * ClassName defines ingress class name for VMAuth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#class_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#class_name}
  */
  readonly className?: string;
  /**
  * ExtraRules - additional rules for ingress, must be checked for correctness by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#extra_rules DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#extra_rules}
  */
  readonly extraRules?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules[] | cdktf.IResolvable;
  /**
  * ExtraTLS - additional TLS configuration for ingress must be checked for correctness by user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#extra_tls DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#extra_tls}
  */
  readonly extraTls?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls[] | cdktf.IResolvable;
  /**
  * Host defines ingress host parameter for default rule It will be used, only if TlsHosts is empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#host DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * TlsHosts configures TLS access for ingress, tlsSecretName must be defined for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#tls_hosts DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#tls_hosts}
  */
  readonly tlsHosts?: string[];
  /**
  * TlsSecretName defines secretname at the VMAuth namespace with cert and key https://kubernetes.io/docs/concepts/services-networking/ingress/#tls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#tls_secret_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#tls_secret_name}
  */
  readonly tlsSecretName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    class_name: cdktf.stringToTerraform(struct!.className),
    extra_rules: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesToTerraform, false)(struct!.extraRules),
    extra_tls: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsToTerraform, false)(struct!.extraTls),
    host: cdktf.stringToTerraform(struct!.host),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    tls_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsHosts),
    tls_secret_name: cdktf.stringToTerraform(struct!.tlsSecretName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress | cdktf.IResolvable): any {
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
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_rules: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesToHclTerraform, false)(struct!.extraRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesList",
    },
    extra_tls: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsToHclTerraform, false)(struct!.extraTls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._extraRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraRules = this._extraRules?.internalValue;
    }
    if (this._extraTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraTls = this._extraTls?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tlsHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsHosts = this._tlsHosts;
    }
    if (this._tlsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretName = this._tlsSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._className = undefined;
      this._extraRules.internalValue = undefined;
      this._extraTls.internalValue = undefined;
      this._host = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._tlsHosts = undefined;
      this._tlsSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._className = value.className;
      this._extraRules.internalValue = value.extraRules;
      this._extraTls.internalValue = value.extraTls;
      this._host = value.host;
      this._labels = value.labels;
      this._name = value.name;
      this._tlsHosts = value.tlsHosts;
      this._tlsSecretName = value.tlsSecretName;
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

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // extra_rules - computed: false, optional: true, required: false
  private _extraRules = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRulesList(this, "extra_rules", false);
  public get extraRules() {
    return this._extraRules;
  }
  public putExtraRules(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraRules[] | cdktf.IResolvable) {
    this._extraRules.internalValue = value;
  }
  public resetExtraRules() {
    this._extraRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraRulesInput() {
    return this._extraRules.internalValue;
  }

  // extra_tls - computed: false, optional: true, required: false
  private _extraTls = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTlsList(this, "extra_tls", false);
  public get extraTls() {
    return this._extraTls;
  }
  public putExtraTls(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressExtraTls[] | cdktf.IResolvable) {
    this._extraTls.internalValue = value;
  }
  public resetExtraTls() {
    this._extraTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraTlsInput() {
    return this._extraTls.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // tls_hosts - computed: false, optional: true, required: false
  private _tlsHosts?: string[]; 
  public get tlsHosts() {
    return this.getListAttribute('tls_hosts');
  }
  public set tlsHosts(value: string[]) {
    this._tlsHosts = value;
  }
  public resetTlsHosts() {
    this._tlsHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsHostsInput() {
    return this._tlsHosts;
  }

  // tls_secret_name - computed: false, optional: true, required: false
  private _tlsSecretName?: string; 
  public get tlsSecretName() {
    return this.getStringAttribute('tls_secret_name');
  }
  public set tlsSecretName(value: string) {
    this._tlsSecretName = value;
  }
  public resetTlsSecretName() {
    this._tlsSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretNameInput() {
    return this._tlsSecretName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#allow_list DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#deny_list DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#deny_list}
  */
  readonly denyList?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFiltersToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    deny_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyList),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFiltersToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense {
  /**
  * Enterprise license key. This flag is available only in [VictoriaMetrics enterprise](https://docs.victoriametrics.com/enterprise). To request a trial license, [go to](https://victoriametrics.com/products/enterprise/trial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * KeyRef is reference to secret with license key for enterprise features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key_ref DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_ref: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRefToTerraform(struct!.keyRef),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense | cdktf.IResolvable): any {
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
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense | cdktf.IResolvable | undefined) {
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
  private _keyRef = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseKeyRef) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget {
  /**
  * An eviction is allowed if at most 'maxUnavailable' pods selected by 'selector' are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with 'minAvailable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#max_unavailable DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * An eviction is allowed if at least 'minAvailable' pods selected by 'selector' will still be available after the eviction, i.e. even in the absence of the evicted pod. So for example you can prevent all voluntary evictions by specifying '100%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#min_available DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * replaces default labels selector generated by operator it's useful when you need to create custom budget
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#selector_labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#selector_labels}
  */
  readonly selectorLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudgetToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudgetToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates {
  /**
  * ConditionType refers to a condition in the pod's condition list with matching type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#condition_type DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsList",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec {
  /**
  * EmbeddedObjectMetadata defines objectMeta for additional service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata;
  /**
  * ServiceSpec describes the attributes that a user creates on a service. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#spec}
  */
  readonly spec: { [key: string]: string };
  /**
  * UseAsDefault applies changes from given service definition to the main object Service Changing from headless service to clusterIP or loadbalancer may break cross-component communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#use_as_default DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#use_as_default}
  */
  readonly useAsDefault?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
    use_as_default: cdktf.booleanToTerraform(struct!.useAsDefault),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined) {
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecMetadata) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaConfigMap) {
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
  private _secret = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaSecret) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined) {
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
  private _configMap = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertConfigMap) {
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
  private _secret = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertSecret) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig {
  /**
  * Stuct containing the CA cert to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#ca DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa;
  /**
  * Path to the CA cert in the container to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#ca_file DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Struct containing the client cert file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#cert DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#cert}
  */
  readonly cert?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert;
  /**
  * Path to the client cert file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#insecure_skip_verify DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Path to the client key file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key_secret DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#server_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaToTerraform(struct!.ca),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertToTerraform(struct!.cert),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecretToTerraform(struct!.keySecret),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert",
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
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
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
  private _ca = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCa) {
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
  private _cert = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigCert) {
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
  private _keySecret = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigKeySecret) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#effect DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#toleration_seconds DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig {
  /**
  * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#discover_backend_ips DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#discover_backend_ips}
  */
  readonly discoverBackendIps?: boolean | cdktf.IResolvable;
  /**
  * DropSrcPathPrefixParts is the number of '/'-delimited request path prefix parts to drop before proxying the request to backend. See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#drop_src_path_prefix_parts DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#drop_src_path_prefix_parts}
  */
  readonly dropSrcPathPrefixParts?: number;
  /**
  * RequestHeaders represent additional http headers, that vmauth uses in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.68.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * LoadBalancingPolicy defines load balancing policy to use for backend urls. Supported policies: least_loaded, first_available. See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default 'least_loaded')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#load_balancing_policy DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#load_balancing_policy}
  */
  readonly loadBalancingPolicy?: string;
  /**
  * ResponseHeaders represent additional http headers, that vmauth adds for request response in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.93.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#response_headers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#response_headers}
  */
  readonly responseHeaders?: string[];
  /**
  * RetryStatusCodes defines http status codes in numeric format for request retries Can be defined per target or at VMUser.spec level e.g. [429,503]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#retry_status_codes DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#retry_status_codes}
  */
  readonly retryStatusCodes?: string[];
  /**
  * SrcHeaders is an optional list of headers, which must match request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#src_headers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#src_headers}
  */
  readonly srcHeaders?: string[];
  /**
  * SrcHosts is an optional list of regular expressions, which must match the request hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#src_hosts DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#src_hosts}
  */
  readonly srcHosts?: string[];
  /**
  * SrcPaths is an optional list of regular expressions, which must match the request path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#src_paths DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#src_paths}
  */
  readonly srcPaths?: string[];
  /**
  * SrcQueryArgs is an optional list of query args, which must match request URL query args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#src_query_args DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#src_query_args}
  */
  readonly srcQueryArgs?: string[];
  /**
  * UrlPrefix contains backend url prefixes for the proxied request url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#url_prefix DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#url_prefix}
  */
  readonly urlPrefix?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discover_backend_ips: cdktf.booleanToTerraform(struct!.discoverBackendIps),
    drop_src_path_prefix_parts: cdktf.numberToTerraform(struct!.dropSrcPathPrefixParts),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    load_balancing_policy: cdktf.stringToTerraform(struct!.loadBalancingPolicy),
    response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeaders),
    retry_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryStatusCodes),
    src_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcHeaders),
    src_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcHosts),
    src_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcPaths),
    src_query_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcQueryArgs),
    url_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlPrefix),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    load_balancing_policy: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    src_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    src_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcPaths),
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
    url_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlPrefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._loadBalancingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingPolicy = this._loadBalancingPolicy;
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
    if (this._srcHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHosts = this._srcHosts;
    }
    if (this._srcPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPaths = this._srcPaths;
    }
    if (this._srcQueryArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcQueryArgs = this._srcQueryArgs;
    }
    if (this._urlPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPrefix = this._urlPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoverBackendIps = undefined;
      this._dropSrcPathPrefixParts = undefined;
      this._headers = undefined;
      this._loadBalancingPolicy = undefined;
      this._responseHeaders = undefined;
      this._retryStatusCodes = undefined;
      this._srcHeaders = undefined;
      this._srcHosts = undefined;
      this._srcPaths = undefined;
      this._srcQueryArgs = undefined;
      this._urlPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoverBackendIps = value.discoverBackendIps;
      this._dropSrcPathPrefixParts = value.dropSrcPathPrefixParts;
      this._headers = value.headers;
      this._loadBalancingPolicy = value.loadBalancingPolicy;
      this._responseHeaders = value.responseHeaders;
      this._retryStatusCodes = value.retryStatusCodes;
      this._srcHeaders = value.srcHeaders;
      this._srcHosts = value.srcHosts;
      this._srcPaths = value.srcPaths;
      this._srcQueryArgs = value.srcQueryArgs;
      this._urlPrefix = value.urlPrefix;
    }
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

  // src_hosts - computed: false, optional: true, required: false
  private _srcHosts?: string[]; 
  public get srcHosts() {
    return this.getListAttribute('src_hosts');
  }
  public set srcHosts(value: string[]) {
    this._srcHosts = value;
  }
  public resetSrcHosts() {
    this._srcHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHostsInput() {
    return this._srcHosts;
  }

  // src_paths - computed: false, optional: true, required: false
  private _srcPaths?: string[]; 
  public get srcPaths() {
    return this.getListAttribute('src_paths');
  }
  public set srcPaths(value: string[]) {
    this._srcPaths = value;
  }
  public resetSrcPaths() {
    this._srcPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPathsInput() {
    return this._srcPaths;
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

  // url_prefix - computed: false, optional: true, required: false
  private _urlPrefix?: string[]; 
  public get urlPrefix() {
    return this.getListAttribute('url_prefix');
  }
  public set urlPrefix(value: string[]) {
    this._urlPrefix = value;
  }
  public resetUrlPrefix() {
    this._urlPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPrefixInput() {
    return this._urlPrefix;
  }
}

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsList",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#mount_path DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#mount_propagation DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#read_only DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#recursive_read_only DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#sub_path DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#sub_path_expr DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec {
  /**
  * Affinity If specified, the pod's scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#affinity DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#affinity}
  */
  readonly affinity?: { [key: string]: string };
  /**
  * ConfigMaps is a list of ConfigMaps in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/configs/CONFIGMAP_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_maps DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * ConfigReloaderExtraArgs that will be passed to VMAuths config-reloader container for example resyncInterval: '30s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_reloader_extra_args DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_reloader_extra_args}
  */
  readonly configReloaderExtraArgs?: { [key: string]: string };
  /**
  * ConfigReloaderImageTag defines image:tag for config-reloader container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_reloader_image_tag DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_reloader_image_tag}
  */
  readonly configReloaderImageTag?: string;
  /**
  * ConfigReloaderResources config-reloader container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_reloader_resources DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_reloader_resources}
  */
  readonly configReloaderResources?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources;
  /**
  * ConfigSecret is the name of a Kubernetes Secret in the same namespace as the VMAuth object, which contains auth configuration for vmauth, configuration must be inside secret key: config.yaml. It must be created and managed manually. If it's defined, configuration for vmauth becomes unmanaged and operator'll not create any related secrets/config-reloaders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#config_secret DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#config_secret}
  */
  readonly configSecret?: string;
  /**
  * Containers property allows to inject additions sidecars or to patch existing containers. It can be useful for proxies, backup, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#containers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#containers}
  */
  readonly containers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * DefaultURLs backend url for non-matching paths filter usually used for default backend with error message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#default_url DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#default_url}
  */
  readonly defaultUrl?: string[];
  /**
  * DisableSelfServiceScrape controls creation of VMServiceScrape by operator for the application. Has priority over 'VM_DISABLESELFSERVICESCRAPECREATION' operator env variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#disable_self_service_scrape DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#disable_self_service_scrape}
  */
  readonly disableSelfServiceScrape?: boolean | cdktf.IResolvable;
  /**
  * DiscoverBackendIPs instructs discovering URLPrefix backend IPs via DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#discover_backend_ips DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#discover_backend_ips}
  */
  readonly discoverBackendIps?: boolean | cdktf.IResolvable;
  /**
  * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#dns_config DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig;
  /**
  * DNSPolicy sets DNS policy for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#dns_policy DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * DropSrcPathPrefixParts is the number of '/'-delimited request path prefix parts to drop before proxying the request to backend. See [here](https://docs.victoriametrics.com/vmauth#dropping-request-path-prefix) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#drop_src_path_prefix_parts DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#drop_src_path_prefix_parts}
  */
  readonly dropSrcPathPrefixParts?: number;
  /**
  * ExtraArgs that will be passed to the application container for example remoteWrite.tmpDataPath: /tmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#extra_args DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * ExtraEnvs that will be passed to the application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#extra_envs DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#extra_envs}
  */
  readonly extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Headers represent additional http headers, that vmauth uses in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.68.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * HostAliases provides mapping for ip and hostname, that would be propagated to pod, cannot be used with HostNetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#host_aliases DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable;
  /**
  * HostNetwork controls whether the pod may use the node network namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#host_network DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Image - docker image settings if no specified operator uses default version from operator config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#image DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#image}
  */
  readonly image?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage;
  /**
  * ImagePullSecrets An optional list of references to secrets in the same namespace to use for pulling images from registries see https://kubernetes.io/docs/concepts/containers/images/#referring-to-an-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#image_pull_secrets DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Ingress enables ingress configuration for VMAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#ingress DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#ingress}
  */
  readonly ingress?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress;
  /**
  * InitContainers allows adding initContainers to the pod definition. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#init_containers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * IPFilters defines per target src ip filters supported only with enterprise version of [vmauth](https://docs.victoriametrics.com/vmauth/#ip-filters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#ip_filters DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#ip_filters}
  */
  readonly ipFilters?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters;
  /**
  * License allows to configure license key to be used for enterprise features. Using license key is supported starting from VictoriaMetrics v1.94.0. See [here](https://docs.victoriametrics.com/enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#license DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#license}
  */
  readonly license?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense;
  /**
  * LivenessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#liveness_probe DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: { [key: string]: string };
  /**
  * LoadBalancingPolicy defines load balancing policy to use for backend urls. Supported policies: least_loaded, first_available. See [here](https://docs.victoriametrics.com/vmauth#load-balancing) for more details (default 'least_loaded')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#load_balancing_policy DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#load_balancing_policy}
  */
  readonly loadBalancingPolicy?: string;
  /**
  * LogFormat for VMAuth to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#log_format DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * LogLevel for victoria metrics single to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#log_level DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * MaxConcurrentRequests defines max concurrent requests per user 300 is default value for vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#max_concurrent_requests DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * MinReadySeconds defines a minim number os seconds to wait before starting update next pod if previous in healthy state Has no effect for VLogs and VMSingle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#min_ready_seconds DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * NodeSelector Define which Nodes the Pods are scheduled on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#node_selector DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Paused If set to true all actions on the underlying managed objects are not going to be performed, except for delete actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#paused DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * PodDisruptionBudget created by operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#pod_disruption_budget DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#pod_disruption_budget}
  */
  readonly podDisruptionBudget?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget;
  /**
  * PodMetadata configures Labels and Annotations which are propagated to the VMAuth pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#pod_metadata DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata;
  /**
  * Port listen address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * PriorityClassName class assigned to the Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#priority_class_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * ReadinessGates defines pod readiness gates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#readiness_gates DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * ReadinessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#readiness_probe DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: { [key: string]: string };
  /**
  * ReplicaCount is the expected size of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#replica_count DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources;
  /**
  * ResponseHeaders represent additional http headers, that vmauth adds for request response in form of ['header_key: header_value'] multiple values for header key: ['header_key: value1,value2'] it's available since 1.93.0 version of vmauth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#response_headers DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#response_headers}
  */
  readonly responseHeaders?: string[];
  /**
  * RetryStatusCodes defines http status codes in numeric format for request retries e.g. [429,503]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#retry_status_codes DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#retry_status_codes}
  */
  readonly retryStatusCodes?: string[];
  /**
  * The number of old ReplicaSets to retain to allow rollback in deployment or maximum number of revisions that will be maintained in the Deployment revision history. Has no effect at StatefulSets Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#revision_history_limit_count DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#revision_history_limit_count}
  */
  readonly revisionHistoryLimitCount?: number;
  /**
  * RuntimeClassName - defines runtime class for kubernetes pod. https://kubernetes.io/docs/concepts/containers/runtime-class/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#runtime_class_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * SchedulerName - defines kubernetes scheduler name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#scheduler_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Secrets is a list of Secrets in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/secrets/SECRET_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#secrets DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#security_context DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#security_context}
  */
  readonly securityContext?: { [key: string]: string };
  /**
  * SelectAllByDefault changes default behavior for empty CRD selectors, such userSelector. with selectAllByDefault: true and empty userSelector and userNamespaceSelector Operator selects all exist users with selectAllByDefault: false - selects nothing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#select_all_by_default DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#select_all_by_default}
  */
  readonly selectAllByDefault?: boolean | cdktf.IResolvable;
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run the pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#service_account_name DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * ServiceScrapeSpec that will be added to vmauth VMServiceScrape spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#service_scrape_spec DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#service_scrape_spec}
  */
  readonly serviceScrapeSpec?: { [key: string]: string };
  /**
  * ServiceSpec that will be added to vmsingle service spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#service_spec DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#service_spec}
  */
  readonly serviceSpec?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec;
  /**
  * StartupProbe that will be added to CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#startup_probe DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: { [key: string]: string };
  /**
  * TerminationGracePeriodSeconds period for container graceful termination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#termination_grace_period_seconds DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig;
  /**
  * Tolerations If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#tolerations DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints embedded kubernetes pod configuration option, controls how pods are spread across your cluster among failure-domains such as regions, zones, nodes, and other user-defined topology domains https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#topology_spread_constraints DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * UnauthorizedAccessConfig configures access for un authorized users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#unauthorized_access_config DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#unauthorized_access_config}
  */
  readonly unauthorizedAccessConfig?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig[] | cdktf.IResolvable;
  /**
  * UseDefaultResources controls resource settings By default, operator sets built-in resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#use_default_resources DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#use_default_resources}
  */
  readonly useDefaultResources?: boolean | cdktf.IResolvable;
  /**
  * UseStrictSecurity enables strict security mode for component it restricts disk writes access uses non-root user out of the box drops not needed security permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#use_strict_security DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#use_strict_security}
  */
  readonly useStrictSecurity?: boolean | cdktf.IResolvable;
  /**
  * UseVMConfigReloader replaces prometheus-like config-reloader with vm one. It uses secrets watch instead of file watch which greatly increases speed of config updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#use_vm_config_reloader DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#use_vm_config_reloader}
  */
  readonly useVmConfigReloader?: boolean | cdktf.IResolvable;
  /**
  * UserNamespaceSelector Namespaces to be selected for VMAuth discovery. Works in combination with Selector. NamespaceSelector nil - only objects at VMAuth namespace. Selector nil - only objects at NamespaceSelector namespaces. If both nil - behaviour controlled by selectAllByDefault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#user_namespace_selector DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#user_namespace_selector}
  */
  readonly userNamespaceSelector?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector;
  /**
  * UserSelector defines VMUser to be selected for config file generation. Works in combination with NamespaceSelector. NamespaceSelector nil - only objects at VMAuth namespace. If both nil - behaviour controlled by selectAllByDefault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#user_selector DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#user_selector}
  */
  readonly userSelector?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector;
  /**
  * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment/StatefulSet definition. VolumeMounts specified will be appended to other VolumeMounts in the Application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#volume_mounts DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Volumes allows configuration of additional volumes on the output Deployment/StatefulSet definition. Volumes specified will be appended to other volumes that are generated. / +optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#volumes DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest#volumes}
  */
  readonly volumes?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.affinity),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    config_reloader_extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configReloaderExtraArgs),
    config_reloader_image_tag: cdktf.stringToTerraform(struct!.configReloaderImageTag),
    config_reloader_resources: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesToTerraform(struct!.configReloaderResources),
    config_secret: cdktf.stringToTerraform(struct!.configSecret),
    containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.containers),
    default_url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultUrl),
    disable_self_service_scrape: cdktf.booleanToTerraform(struct!.disableSelfServiceScrape),
    discover_backend_ips: cdktf.booleanToTerraform(struct!.discoverBackendIps),
    dns_config: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    drop_src_path_prefix_parts: cdktf.numberToTerraform(struct!.dropSrcPathPrefixParts),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_envs: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.extraEnvs),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    host_aliases: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImageToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    ingress: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressToTerraform(struct!.ingress),
    init_containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.initContainers),
    ip_filters: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFiltersToTerraform(struct!.ipFilters),
    license: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseToTerraform(struct!.license),
    liveness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.livenessProbe),
    load_balancing_policy: cdktf.stringToTerraform(struct!.loadBalancingPolicy),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    paused: cdktf.booleanToTerraform(struct!.paused),
    pod_disruption_budget: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudgetToTerraform(struct!.podDisruptionBudget),
    pod_metadata: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    port: cdktf.stringToTerraform(struct!.port),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    readiness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.readinessProbe),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    resources: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeaders),
    retry_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryStatusCodes),
    revision_history_limit_count: cdktf.numberToTerraform(struct!.revisionHistoryLimitCount),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    security_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityContext),
    select_all_by_default: cdktf.booleanToTerraform(struct!.selectAllByDefault),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_scrape_spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceScrapeSpec),
    service_spec: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecToTerraform(struct!.serviceSpec),
    startup_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.startupProbe),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tls_config: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
    tolerations: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.topologySpreadConstraints),
    unauthorized_access_config: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigToTerraform, false)(struct!.unauthorizedAccessConfig),
    use_default_resources: cdktf.booleanToTerraform(struct!.useDefaultResources),
    use_strict_security: cdktf.booleanToTerraform(struct!.useStrictSecurity),
    use_vm_config_reloader: cdktf.booleanToTerraform(struct!.useVmConfigReloader),
    user_namespace_selector: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorToTerraform(struct!.userNamespaceSelector),
    user_selector: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorToTerraform(struct!.userSelector),
    volume_mounts: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumes),
  }
}


export function dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec | cdktf.IResolvable): any {
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
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesToHclTerraform(struct!.configReloaderResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources",
    },
    config_secret: {
      value: cdktf.stringToHclTerraform(struct!.configSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    default_url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultUrl),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_self_service_scrape: {
      value: cdktf.booleanToHclTerraform(struct!.disableSelfServiceScrape),
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
    dns_config: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_src_path_prefix_parts: {
      value: cdktf.numberToHclTerraform(struct!.dropSrcPathPrefixParts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsList",
    },
    ingress: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress",
    },
    init_containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.initContainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    ip_filters: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFiltersToHclTerraform(struct!.ipFilters),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters",
    },
    license: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseToHclTerraform(struct!.license),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense",
    },
    liveness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.livenessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    load_balancing_policy: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    max_concurrent_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_disruption_budget: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudgetToHclTerraform(struct!.podDisruptionBudget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget",
    },
    pod_metadata: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata",
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
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesList",
    },
    readiness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.readinessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources",
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
    revision_history_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecToHclTerraform(struct!.serviceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec",
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
    tls_config: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.topologySpreadConstraints),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    unauthorized_access_config: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigToHclTerraform, false)(struct!.unauthorizedAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigList",
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
    user_namespace_selector: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorToHclTerraform(struct!.userNamespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector",
    },
    user_selector: {
      value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorToHclTerraform(struct!.userSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsList",
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

export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._configSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSecret = this._configSecret;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._defaultUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUrl = this._defaultUrl;
    }
    if (this._disableSelfServiceScrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSelfServiceScrape = this._disableSelfServiceScrape;
    }
    if (this._discoverBackendIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverBackendIps = this._discoverBackendIps;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._dropSrcPathPrefixParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropSrcPathPrefixParts = this._dropSrcPathPrefixParts;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvs = this._extraEnvs;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
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
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    if (this._ipFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilters = this._ipFilters?.internalValue;
    }
    if (this._license?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license?.internalValue;
    }
    if (this._livenessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe;
    }
    if (this._loadBalancingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingPolicy = this._loadBalancingPolicy;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxConcurrentRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentRequests = this._maxConcurrentRequests;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
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
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._responseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders;
    }
    if (this._retryStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryStatusCodes = this._retryStatusCodes;
    }
    if (this._revisionHistoryLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimitCount = this._revisionHistoryLimitCount;
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
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints;
    }
    if (this._unauthorizedAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorizedAccessConfig = this._unauthorizedAccessConfig?.internalValue;
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
    if (this._userNamespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNamespaceSelector = this._userNamespaceSelector?.internalValue;
    }
    if (this._userSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSelector = this._userSelector?.internalValue;
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._configMaps = undefined;
      this._configReloaderExtraArgs = undefined;
      this._configReloaderImageTag = undefined;
      this._configReloaderResources.internalValue = undefined;
      this._configSecret = undefined;
      this._containers = undefined;
      this._defaultUrl = undefined;
      this._disableSelfServiceScrape = undefined;
      this._discoverBackendIps = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._dropSrcPathPrefixParts = undefined;
      this._extraArgs = undefined;
      this._extraEnvs = undefined;
      this._headers = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._initContainers = undefined;
      this._ipFilters.internalValue = undefined;
      this._license.internalValue = undefined;
      this._livenessProbe = undefined;
      this._loadBalancingPolicy = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._maxConcurrentRequests = undefined;
      this._minReadySeconds = undefined;
      this._nodeSelector = undefined;
      this._paused = undefined;
      this._podDisruptionBudget.internalValue = undefined;
      this._podMetadata.internalValue = undefined;
      this._port = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._readinessProbe = undefined;
      this._replicaCount = undefined;
      this._resources.internalValue = undefined;
      this._responseHeaders = undefined;
      this._retryStatusCodes = undefined;
      this._revisionHistoryLimitCount = undefined;
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
      this._tlsConfig.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints = undefined;
      this._unauthorizedAccessConfig.internalValue = undefined;
      this._useDefaultResources = undefined;
      this._useStrictSecurity = undefined;
      this._useVmConfigReloader = undefined;
      this._userNamespaceSelector.internalValue = undefined;
      this._userSelector.internalValue = undefined;
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
      this._configSecret = value.configSecret;
      this._containers = value.containers;
      this._defaultUrl = value.defaultUrl;
      this._disableSelfServiceScrape = value.disableSelfServiceScrape;
      this._discoverBackendIps = value.discoverBackendIps;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._dropSrcPathPrefixParts = value.dropSrcPathPrefixParts;
      this._extraArgs = value.extraArgs;
      this._extraEnvs = value.extraEnvs;
      this._headers = value.headers;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostNetwork = value.hostNetwork;
      this._image.internalValue = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._ingress.internalValue = value.ingress;
      this._initContainers = value.initContainers;
      this._ipFilters.internalValue = value.ipFilters;
      this._license.internalValue = value.license;
      this._livenessProbe = value.livenessProbe;
      this._loadBalancingPolicy = value.loadBalancingPolicy;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._maxConcurrentRequests = value.maxConcurrentRequests;
      this._minReadySeconds = value.minReadySeconds;
      this._nodeSelector = value.nodeSelector;
      this._paused = value.paused;
      this._podDisruptionBudget.internalValue = value.podDisruptionBudget;
      this._podMetadata.internalValue = value.podMetadata;
      this._port = value.port;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._readinessProbe = value.readinessProbe;
      this._replicaCount = value.replicaCount;
      this._resources.internalValue = value.resources;
      this._responseHeaders = value.responseHeaders;
      this._retryStatusCodes = value.retryStatusCodes;
      this._revisionHistoryLimitCount = value.revisionHistoryLimitCount;
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
      this._tlsConfig.internalValue = value.tlsConfig;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints = value.topologySpreadConstraints;
      this._unauthorizedAccessConfig.internalValue = value.unauthorizedAccessConfig;
      this._useDefaultResources = value.useDefaultResources;
      this._useStrictSecurity = value.useStrictSecurity;
      this._useVmConfigReloader = value.useVmConfigReloader;
      this._userNamespaceSelector.internalValue = value.userNamespaceSelector;
      this._userSelector.internalValue = value.userSelector;
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
  private _configReloaderResources = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResourcesOutputReference(this, "config_reloader_resources");
  public get configReloaderResources() {
    return this._configReloaderResources;
  }
  public putConfigReloaderResources(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecConfigReloaderResources) {
    this._configReloaderResources.internalValue = value;
  }
  public resetConfigReloaderResources() {
    this._configReloaderResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configReloaderResourcesInput() {
    return this._configReloaderResources.internalValue;
  }

  // config_secret - computed: false, optional: true, required: false
  private _configSecret?: string; 
  public get configSecret() {
    return this.getStringAttribute('config_secret');
  }
  public set configSecret(value: string) {
    this._configSecret = value;
  }
  public resetConfigSecret() {
    this._configSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSecretInput() {
    return this._configSecret;
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

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecDnsConfig) {
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

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable) {
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
  private _image = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImage) {
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
  private _imagePullSecrets = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
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

  // ip_filters - computed: false, optional: true, required: false
  private _ipFilters = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFiltersOutputReference(this, "ip_filters");
  public get ipFilters() {
    return this._ipFilters;
  }
  public putIpFilters(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecIpFilters) {
    this._ipFilters.internalValue = value;
  }
  public resetIpFilters() {
    this._ipFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFiltersInput() {
    return this._ipFilters.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecLicense) {
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
  private _podDisruptionBudget = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudgetOutputReference(this, "pod_disruption_budget");
  public get podDisruptionBudget() {
    return this._podDisruptionBudget;
  }
  public putPodDisruptionBudget(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodDisruptionBudget) {
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
  private _podMetadata = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecPodMetadata) {
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
  private _readinessGates = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable) {
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
  private _resources = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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
  private _serviceSpec = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpecOutputReference(this, "service_spec");
  public get serviceSpec() {
    return this._serviceSpec;
  }
  public putServiceSpec(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecServiceSpec) {
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

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable) {
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

  // unauthorized_access_config - computed: false, optional: true, required: false
  private _unauthorizedAccessConfig = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfigList(this, "unauthorized_access_config", false);
  public get unauthorizedAccessConfig() {
    return this._unauthorizedAccessConfig;
  }
  public putUnauthorizedAccessConfig(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUnauthorizedAccessConfig[] | cdktf.IResolvable) {
    this._unauthorizedAccessConfig.internalValue = value;
  }
  public resetUnauthorizedAccessConfig() {
    this._unauthorizedAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedAccessConfigInput() {
    return this._unauthorizedAccessConfig.internalValue;
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

  // user_namespace_selector - computed: false, optional: true, required: false
  private _userNamespaceSelector = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelectorOutputReference(this, "user_namespace_selector");
  public get userNamespaceSelector() {
    return this._userNamespaceSelector;
  }
  public putUserNamespaceSelector(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserNamespaceSelector) {
    this._userNamespaceSelector.internalValue = value;
  }
  public resetUserNamespaceSelector() {
    this._userNamespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNamespaceSelectorInput() {
    return this._userNamespaceSelector.internalValue;
  }

  // user_selector - computed: false, optional: true, required: false
  private _userSelector = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelectorOutputReference(this, "user_selector");
  public get userSelector() {
    return this._userSelector;
  }
  public putUserSelector(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecUserSelector) {
    this._userSelector.internalValue = value;
  }
  public resetUserSelector() {
    this._userSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSelectorInput() {
    return this._userSelector.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest k8s_operator_victoriametrics_com_vm_auth_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_auth_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmAuthV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_auth_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_victoriametrics_com_vm_auth_v1beta1_manifest k8s_operator_victoriametrics_com_vm_auth_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_auth_v1beta1_manifest',
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmAuthV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
