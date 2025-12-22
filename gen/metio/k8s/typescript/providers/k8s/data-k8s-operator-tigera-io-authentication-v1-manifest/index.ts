// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#metadata DataK8SOperatorTigeraIoAuthenticationV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata;
  /**
  * AuthenticationSpec defines the desired state of Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#spec DataK8SOperatorTigeraIoAuthenticationV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#annotations DataK8SOperatorTigeraIoAuthenticationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#labels DataK8SOperatorTigeraIoAuthenticationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name DataK8SOperatorTigeraIoAuthenticationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name DataK8SOperatorTigeraIoAuthenticationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#claims DataK8SOperatorTigeraIoAuthenticationV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#limits DataK8SOperatorTigeraIoAuthenticationV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#requests DataK8SOperatorTigeraIoAuthenticationV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the Dex Deployment container by name. Supported values are: tigera-dex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name DataK8SOperatorTigeraIoAuthenticationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Dex Deployment container's resources. If omitted, the Dex Deployment will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#resources DataK8SOperatorTigeraIoAuthenticationV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name DataK8SOperatorTigeraIoAuthenticationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#claims DataK8SOperatorTigeraIoAuthenticationV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#limits DataK8SOperatorTigeraIoAuthenticationV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#requests DataK8SOperatorTigeraIoAuthenticationV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the Dex Deployment init container by name. Supported values are: tigera-dex-tls-key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name DataK8SOperatorTigeraIoAuthenticationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Dex Deployment init container's resources. If omitted, the Dex Deployment will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#resources DataK8SOperatorTigeraIoAuthenticationV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
    resources: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec {
  /**
  * Containers is a list of Dex containers. If specified, this overrides the specified Dex Deployment containers. If omitted, the Dex Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#containers DataK8SOperatorTigeraIoAuthenticationV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of Dex init containers. If specified, this overrides the specified Dex Deployment init containers. If omitted, the Dex Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#init_containers DataK8SOperatorTigeraIoAuthenticationV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._initContainers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._initContainers.internalValue = value.initContainers;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate {
  /**
  * Spec is the Dex Deployment's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#spec DataK8SOperatorTigeraIoAuthenticationV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec {
  /**
  * Template describes the Dex Deployment pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#template DataK8SOperatorTigeraIoAuthenticationV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment {
  /**
  * Spec is the specification of the Dex Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#spec DataK8SOperatorTigeraIoAuthenticationV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers {
  /**
  * The attribute of a group that links it to a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#group_attribute DataK8SOperatorTigeraIoAuthenticationV1Manifest#group_attribute}
  */
  readonly groupAttribute: string;
  /**
  * The attribute of a user that links it to a group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#user_attribute DataK8SOperatorTigeraIoAuthenticationV1Manifest#user_attribute}
  */
  readonly userAttribute: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_attribute: cdktf.stringToTerraform(struct!.groupAttribute),
    user_attribute: cdktf.stringToTerraform(struct!.userAttribute),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttribute = this._groupAttribute;
    }
    if (this._userAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAttribute = this._userAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAttribute = undefined;
      this._userAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAttribute = value.groupAttribute;
      this._userAttribute = value.userAttribute;
    }
  }

  // group_attribute - computed: false, optional: false, required: true
  private _groupAttribute?: string; 
  public get groupAttribute() {
    return this.getStringAttribute('group_attribute');
  }
  public set groupAttribute(value: string) {
    this._groupAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeInput() {
    return this._groupAttribute;
  }

  // user_attribute - computed: false, optional: false, required: true
  private _userAttribute?: string; 
  public get userAttribute() {
    return this.getStringAttribute('user_attribute');
  }
  public set userAttribute(value: string) {
    this._userAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAttributeInput() {
    return this._userAttribute;
  }
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersOutputReference {
    return new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch {
  /**
  * BaseDN to start the search from. For example 'cn=groups,dc=example,dc=com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#base_dn DataK8SOperatorTigeraIoAuthenticationV1Manifest#base_dn}
  */
  readonly baseDn: string;
  /**
  * Optional filter to apply when searching the directory. For example '(objectClass=posixGroup)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#filter DataK8SOperatorTigeraIoAuthenticationV1Manifest#filter}
  */
  readonly filter?: string;
  /**
  * The attribute of the group that represents its name. This attribute can be used to apply RBAC to a user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name_attribute DataK8SOperatorTigeraIoAuthenticationV1Manifest#name_attribute}
  */
  readonly nameAttribute: string;
  /**
  * Following list contains field pairs that are used to match a user to a group. It adds an additional requirement to the filter that an attribute in the group must match the user's attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#user_matchers DataK8SOperatorTigeraIoAuthenticationV1Manifest#user_matchers}
  */
  readonly userMatchers: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    filter: cdktf.stringToTerraform(struct!.filter),
    name_attribute: cdktf.stringToTerraform(struct!.nameAttribute),
    user_matchers: cdktf.listMapper(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersToTerraform, false)(struct!.userMatchers),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.nameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_matchers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersToHclTerraform, false)(struct!.userMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._nameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAttribute = this._nameAttribute;
    }
    if (this._userMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMatchers = this._userMatchers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._filter = undefined;
      this._nameAttribute = undefined;
      this._userMatchers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._filter = value.filter;
      this._nameAttribute = value.nameAttribute;
      this._userMatchers.internalValue = value.userMatchers;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // name_attribute - computed: false, optional: false, required: true
  private _nameAttribute?: string; 
  public get nameAttribute() {
    return this.getStringAttribute('name_attribute');
  }
  public set nameAttribute(value: string) {
    this._nameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAttributeInput() {
    return this._nameAttribute;
  }

  // user_matchers - computed: false, optional: false, required: true
  private _userMatchers = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchersList(this, "user_matchers", false);
  public get userMatchers() {
    return this._userMatchers;
  }
  public putUserMatchers(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchUserMatchers[] | cdktf.IResolvable) {
    this._userMatchers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchersInput() {
    return this._userMatchers.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch {
  /**
  * BaseDN to start the search from. For example 'cn=users,dc=example,dc=com'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#base_dn DataK8SOperatorTigeraIoAuthenticationV1Manifest#base_dn}
  */
  readonly baseDn: string;
  /**
  * Optional filter to apply when searching the directory. For example '(objectClass=person)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#filter DataK8SOperatorTigeraIoAuthenticationV1Manifest#filter}
  */
  readonly filter?: string;
  /**
  * A mapping of the attribute that is used as the username. This attribute can be used to apply RBAC to a user. Default: uid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#name_attribute DataK8SOperatorTigeraIoAuthenticationV1Manifest#name_attribute}
  */
  readonly nameAttribute?: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearchToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    filter: cdktf.stringToTerraform(struct!.filter),
    name_attribute: cdktf.stringToTerraform(struct!.nameAttribute),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearchToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_attribute: {
      value: cdktf.stringToHclTerraform(struct!.nameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._nameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAttribute = this._nameAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._filter = undefined;
      this._nameAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._filter = value.filter;
      this._nameAttribute = value.nameAttribute;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // name_attribute - computed: false, optional: true, required: false
  private _nameAttribute?: string; 
  public get nameAttribute() {
    return this.getStringAttribute('name_attribute');
  }
  public set nameAttribute(value: string) {
    this._nameAttribute = value;
  }
  public resetNameAttribute() {
    this._nameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAttributeInput() {
    return this._nameAttribute;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap {
  /**
  * Group search configuration to find the groups that a user is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#group_search DataK8SOperatorTigeraIoAuthenticationV1Manifest#group_search}
  */
  readonly groupSearch?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch;
  /**
  * The host and port of the LDAP server. Example: ad.example.com:636
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#host DataK8SOperatorTigeraIoAuthenticationV1Manifest#host}
  */
  readonly host: string;
  /**
  * StartTLS whether to enable the startTLS feature for establishing TLS on an existing LDAP session. If true, the ldap:// protocol is used and then issues a StartTLS command, otherwise, connections will use the ldaps:// protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#start_tls DataK8SOperatorTigeraIoAuthenticationV1Manifest#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * User entry search configuration to match the credentials with a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#user_search DataK8SOperatorTigeraIoAuthenticationV1Manifest#user_search}
  */
  readonly userSearch: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_search: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchToTerraform(struct!.groupSearch),
    host: cdktf.stringToTerraform(struct!.host),
    start_tls: cdktf.booleanToTerraform(struct!.startTls),
    user_search: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearchToTerraform(struct!.userSearch),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_search: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchToHclTerraform(struct!.groupSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.startTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_search: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearchToHclTerraform(struct!.userSearch),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearch = this._groupSearch?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._startTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTls = this._startTls;
    }
    if (this._userSearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearch = this._userSearch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupSearch.internalValue = undefined;
      this._host = undefined;
      this._startTls = undefined;
      this._userSearch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupSearch.internalValue = value.groupSearch;
      this._host = value.host;
      this._startTls = value.startTls;
      this._userSearch.internalValue = value.userSearch;
    }
  }

  // group_search - computed: false, optional: true, required: false
  private _groupSearch = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearchOutputReference(this, "group_search");
  public get groupSearch() {
    return this._groupSearch;
  }
  public putGroupSearch(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapGroupSearch) {
    this._groupSearch.internalValue = value;
  }
  public resetGroupSearch() {
    this._groupSearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchInput() {
    return this._groupSearch.internalValue;
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

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this.getBooleanAttribute('start_tls');
  }
  public set startTls(value: boolean | cdktf.IResolvable) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
  }

  // user_search - computed: false, optional: false, required: true
  private _userSearch = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearchOutputReference(this, "user_search");
  public get userSearch() {
    return this._userSearch;
  }
  public putUserSearch(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapUserSearch) {
    this._userSearch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchInput() {
    return this._userSearch.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc {
  /**
  * Some providers do not include the claim 'email_verified' when there is no verification in the user enrollment process or if they are acting as a proxy for another identity provider. By default those tokens are deemed invalid. To skip this check, set the value to 'InsecureSkip'. Default: Verify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#email_verification DataK8SOperatorTigeraIoAuthenticationV1Manifest#email_verification}
  */
  readonly emailVerification?: string;
  /**
  * GroupsClaim specifies which claim to use from the OIDC provider as the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#groups_claim DataK8SOperatorTigeraIoAuthenticationV1Manifest#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Deprecated. Please use Authentication.Spec.GroupsPrefix instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#groups_prefix DataK8SOperatorTigeraIoAuthenticationV1Manifest#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * IssuerURL is the URL to the OIDC provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#issuer_url DataK8SOperatorTigeraIoAuthenticationV1Manifest#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * PromptTypes is an optional list of string values that specifies whether the identity provider prompts the end user for re-authentication and consent. See the RFC for more information on prompt types: https://openid.net/specs/openid-connect-core-1_0.html. Default: 'Consent'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#prompt_types DataK8SOperatorTigeraIoAuthenticationV1Manifest#prompt_types}
  */
  readonly promptTypes?: string[];
  /**
  * RequestedScopes is a list of scopes to request from the OIDC provider. If not provided, the following scopes are requested: ['openid', 'email', 'profile', 'groups', 'offline_access'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#requested_scopes DataK8SOperatorTigeraIoAuthenticationV1Manifest#requested_scopes}
  */
  readonly requestedScopes?: string[];
  /**
  * Default: 'Dex'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#type DataK8SOperatorTigeraIoAuthenticationV1Manifest#type}
  */
  readonly type?: string;
  /**
  * UsernameClaim specifies which claim to use from the OIDC provider as the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#username_claim DataK8SOperatorTigeraIoAuthenticationV1Manifest#username_claim}
  */
  readonly usernameClaim: string;
  /**
  * Deprecated. Please use Authentication.Spec.UsernamePrefix instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#username_prefix DataK8SOperatorTigeraIoAuthenticationV1Manifest#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidcToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_verification: cdktf.stringToTerraform(struct!.emailVerification),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    prompt_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.promptTypes),
    requested_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestedScopes),
    type: cdktf.stringToTerraform(struct!.type),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidcToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_verification: {
      value: cdktf.stringToHclTerraform(struct!.emailVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupsClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_prefix: {
      value: cdktf.stringToHclTerraform(struct!.groupsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.promptTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    requested_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestedScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerification = this._emailVerification;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._promptTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptTypes = this._promptTypes;
    }
    if (this._requestedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedScopes = this._requestedScopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailVerification = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._issuerUrl = undefined;
      this._promptTypes = undefined;
      this._requestedScopes = undefined;
      this._type = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailVerification = value.emailVerification;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._issuerUrl = value.issuerUrl;
      this._promptTypes = value.promptTypes;
      this._requestedScopes = value.requestedScopes;
      this._type = value.type;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // email_verification - computed: false, optional: true, required: false
  private _emailVerification?: string; 
  public get emailVerification() {
    return this.getStringAttribute('email_verification');
  }
  public set emailVerification(value: string) {
    this._emailVerification = value;
  }
  public resetEmailVerification() {
    this._emailVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationInput() {
    return this._emailVerification;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // prompt_types - computed: false, optional: true, required: false
  private _promptTypes?: string[]; 
  public get promptTypes() {
    return this.getListAttribute('prompt_types');
  }
  public set promptTypes(value: string[]) {
    this._promptTypes = value;
  }
  public resetPromptTypes() {
    this._promptTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptTypesInput() {
    return this._promptTypes;
  }

  // requested_scopes - computed: false, optional: true, required: false
  private _requestedScopes?: string[]; 
  public get requestedScopes() {
    return this.getListAttribute('requested_scopes');
  }
  public set requestedScopes(value: string[]) {
    this._requestedScopes = value;
  }
  public resetRequestedScopes() {
    this._requestedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedScopesInput() {
    return this._requestedScopes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username_claim - computed: false, optional: false, required: true
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift {
  /**
  * IssuerURL is the URL to the Openshift OAuth provider. Ex.: https://api.my-ocp-domain.com:6443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#issuer_url DataK8SOperatorTigeraIoAuthenticationV1Manifest#issuer_url}
  */
  readonly issuerUrl: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshiftToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshiftToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issuerUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issuerUrl = value.issuerUrl;
    }
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }
}
export interface DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec {
  /**
  * DexDeployment configures the Dex Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#dex_deployment DataK8SOperatorTigeraIoAuthenticationV1Manifest#dex_deployment}
  */
  readonly dexDeployment?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment;
  /**
  * If specified, GroupsPrefix is prepended to each group obtained from the identity provider. Note that Kibana does not support a groups prefix, so this prefix is removed from Kubernetes Groups when translating log access ClusterRoleBindings into Elastic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#groups_prefix DataK8SOperatorTigeraIoAuthenticationV1Manifest#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * LDAP contains the configuration needed to setup LDAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#ldap DataK8SOperatorTigeraIoAuthenticationV1Manifest#ldap}
  */
  readonly ldap?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap;
  /**
  * ManagerDomain is the domain name of the Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#manager_domain DataK8SOperatorTigeraIoAuthenticationV1Manifest#manager_domain}
  */
  readonly managerDomain?: string;
  /**
  * OIDC contains the configuration needed to setup OIDC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#oidc DataK8SOperatorTigeraIoAuthenticationV1Manifest#oidc}
  */
  readonly oidc?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc;
  /**
  * Openshift contains the configuration needed to setup Openshift OAuth authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#openshift DataK8SOperatorTigeraIoAuthenticationV1Manifest#openshift}
  */
  readonly openshift?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift;
  /**
  * If specified, UsernamePrefix is prepended to each user obtained from the identity provider. Note that Kibana does not support a user prefix, so this prefix is removed from Kubernetes User when translating log access ClusterRoleBindings into Elastic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#username_prefix DataK8SOperatorTigeraIoAuthenticationV1Manifest#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dex_deployment: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentToTerraform(struct!.dexDeployment),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    ldap: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapToTerraform(struct!.ldap),
    manager_domain: cdktf.stringToTerraform(struct!.managerDomain),
    oidc: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidcToTerraform(struct!.oidc),
    openshift: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshiftToTerraform(struct!.openshift),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dex_deployment: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentToHclTerraform(struct!.dexDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment",
    },
    groups_prefix: {
      value: cdktf.stringToHclTerraform(struct!.groupsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap",
    },
    manager_domain: {
      value: cdktf.stringToHclTerraform(struct!.managerDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc",
    },
    openshift: {
      value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshiftToHclTerraform(struct!.openshift),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dexDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dexDeployment = this._dexDeployment?.internalValue;
    }
    if (this._groupsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._managerDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.managerDomain = this._managerDomain;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    if (this._openshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshift = this._openshift?.internalValue;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dexDeployment.internalValue = undefined;
      this._groupsPrefix = undefined;
      this._ldap.internalValue = undefined;
      this._managerDomain = undefined;
      this._oidc.internalValue = undefined;
      this._openshift.internalValue = undefined;
      this._usernamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dexDeployment.internalValue = value.dexDeployment;
      this._groupsPrefix = value.groupsPrefix;
      this._ldap.internalValue = value.ldap;
      this._managerDomain = value.managerDomain;
      this._oidc.internalValue = value.oidc;
      this._openshift.internalValue = value.openshift;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // dex_deployment - computed: false, optional: true, required: false
  private _dexDeployment = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeploymentOutputReference(this, "dex_deployment");
  public get dexDeployment() {
    return this._dexDeployment;
  }
  public putDexDeployment(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecDexDeployment) {
    this._dexDeployment.internalValue = value;
  }
  public resetDexDeployment() {
    this._dexDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dexDeploymentInput() {
    return this._dexDeployment.internalValue;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // manager_domain - computed: false, optional: true, required: false
  private _managerDomain?: string; 
  public get managerDomain() {
    return this.getStringAttribute('manager_domain');
  }
  public set managerDomain(value: string) {
    this._managerDomain = value;
  }
  public resetManagerDomain() {
    this._managerDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerDomainInput() {
    return this._managerDomain;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // openshift - computed: false, optional: true, required: false
  private _openshift = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshiftOutputReference(this, "openshift");
  public get openshift() {
    return this._openshift;
  }
  public putOpenshift(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOpenshift) {
    this._openshift.internalValue = value;
  }
  public resetOpenshift() {
    this._openshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftInput() {
    return this._openshift.internalValue;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest k8s_operator_tigera_io_authentication_v1_manifest}
*/
export class DataK8SOperatorTigeraIoAuthenticationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_authentication_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoAuthenticationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoAuthenticationV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoAuthenticationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoAuthenticationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_authentication_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/operator_tigera_io_authentication_v1_manifest k8s_operator_tigera_io_authentication_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoAuthenticationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoAuthenticationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_authentication_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoAuthenticationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoAuthenticationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoAuthenticationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoAuthenticationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoAuthenticationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
