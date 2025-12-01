// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoLogStorageV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#metadata DataK8SOperatorTigeraIoLogStorageV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata;
  /**
  * Specification of the desired state for Tigera log storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#annotations DataK8SOperatorTigeraIoLogStorageV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#labels DataK8SOperatorTigeraIoLogStorageV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoLogStorageV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources {
  /**
  * Deprecated. Please use ECKOperatorStatefulSet. ComponentName is an enum which identifies the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#component_name DataK8SOperatorTigeraIoLogStorageV1Manifest#component_name}
  */
  readonly componentName: string;
  /**
  * ResourceRequirements allows customization of limits and requests for compute resources such as cpu and memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resource_requirements DataK8SOperatorTigeraIoLogStorageV1Manifest#resource_requirements}
  */
  readonly resourceRequirements: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    resource_requirements: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsToTerraform(struct!.resourceRequirements),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentName = undefined;
      this._resourceRequirements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentName = value.componentName;
      this._resourceRequirements.internalValue = value.resourceRequirements;
    }
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // resource_requirements - computed: false, optional: false, required: true
  private _resourceRequirements = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the ECKOperator StatefulSet container by name. Supported values are: manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named ECKOperator StatefulSet container's resources. If omitted, the ECKOperator StatefulSet will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the ECKOperator StatefulSet init container by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named ECKOperator StatefulSet init container's resources. If omitted, the ECKOperator StatefulSet will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec {
  /**
  * Containers is a list of ECKOperator StatefulSet containers. If specified, this overrides the specified ECKOperator StatefulSet containers. If omitted, the ECKOperator StatefulSet will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#containers DataK8SOperatorTigeraIoLogStorageV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of ECKOperator StatefulSet init containers. If specified, this overrides the specified ECKOperator StatefulSet init containers. If omitted, the ECKOperator StatefulSet will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#init_containers DataK8SOperatorTigeraIoLogStorageV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecContainers[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate {
  /**
  * Spec is the ECKOperator StatefulSet's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec {
  /**
  * Template describes the ECKOperator StatefulSet pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#template DataK8SOperatorTigeraIoLogStorageV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecTemplate) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet {
  /**
  * Spec is the specification of the ECKOperator StatefulSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the ElasticsearchMetricsDeployment container by name. Supported values are: tigera-elasticsearch-metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named ElasticsearchMetricsDeployment container's resources. If omitted, the ElasticsearchMetrics Deployment will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the ElasticsearchMetricsDeployment init container by name. Supported values are: tigera-ee-elasticsearch-metrics-tls-key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named ElasticsearchMetricsDeployment init container's resources. If omitted, the ElasticsearchMetrics Deployment will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec {
  /**
  * Containers is a list of ElasticsearchMetricsDeployment containers. If specified, this overrides the specified ElasticsearchMetricsDeployment containers. If omitted, the ElasticsearchMetrics Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#containers DataK8SOperatorTigeraIoLogStorageV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of ElasticsearchMetricsDeployment init containers. If specified, this overrides the specified ElasticsearchMetricsDeployment init containers. If omitted, the ElasticsearchMetrics Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#init_containers DataK8SOperatorTigeraIoLogStorageV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate {
  /**
  * Spec is the ElasticsearchMetrics Deployment's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec {
  /**
  * Template describes the ElasticsearchMetrics Deployment pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#template DataK8SOperatorTigeraIoLogStorageV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecTemplate) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment {
  /**
  * Spec is the specification of the ElasticsearchMetrics Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices {
  /**
  * Replicas defines how many replicas each index will have. See https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#replicas DataK8SOperatorTigeraIoLogStorageV1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndicesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndicesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicas = value.replicas;
    }
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
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the Kibana Deployment container by name. Supported values are: kibana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Kibana container's resources. If omitted, the Kibana will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the Kibana init container by name. Supported values are: key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Kibana Deployment init container's resources. If omitted, the Kibana Deployment will use its default value for this init container's resources. If used in conjunction with the deprecated ComponentResources, then this value takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec {
  /**
  * Containers is a list of Kibana containers. If specified, this overrides the specified Kibana Deployment containers. If omitted, the Kibana Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#containers DataK8SOperatorTigeraIoLogStorageV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of Kibana init containers. If specified, this overrides the specified Kibana Deployment init containers. If omitted, the Kibana Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#init_containers DataK8SOperatorTigeraIoLogStorageV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecContainers[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate {
  /**
  * Spec is the Kibana's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec {
  /**
  * Template describes the Kibana pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#template DataK8SOperatorTigeraIoLogStorageV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecTemplate) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana {
  /**
  * Spec is the specification of the Kibana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the linseed Deployment container by name. Supported values are: tigera-linseed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named linseed Deployment container's resources. If omitted, the linseed Deployment will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the linseed Deployment init container by name. Supported values are: tigera-secure-linseed-token-tls-key-cert-provisioner,tigera-secure-linseed-cert-key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named linseed Deployment init container's resources. If omitted, the linseed Deployment will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resources DataK8SOperatorTigeraIoLogStorageV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec {
  /**
  * Containers is a list of linseed containers. If specified, this overrides the specified linseed Deployment containers. If omitted, the linseed Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#containers DataK8SOperatorTigeraIoLogStorageV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of linseed init containers. If specified, this overrides the specified linseed Deployment init containers. If omitted, the linseed Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#init_containers DataK8SOperatorTigeraIoLogStorageV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate {
  /**
  * Spec is the linseed Deployment's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec {
  /**
  * Template describes the linseed Deployment pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#template DataK8SOperatorTigeraIoLogStorageV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecTemplate) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment {
  /**
  * Spec is the specification of the linseed Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#spec DataK8SOperatorTigeraIoLogStorageV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentSpec) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#node_label DataK8SOperatorTigeraIoLogStorageV1Manifest#node_label}
  */
  readonly nodeLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#value DataK8SOperatorTigeraIoLogStorageV1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_label: cdktf.stringToTerraform(struct!.nodeLabel),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes | cdktf.IResolvable): any {
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
    node_label: {
      value: cdktf.stringToHclTerraform(struct!.nodeLabel),
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabel = this._nodeLabel;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nodeLabel = undefined;
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
      this._nodeLabel = value.nodeLabel;
      this._value = value.value;
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

  // node_label - computed: false, optional: false, required: true
  private _nodeLabel?: string; 
  public get nodeLabel() {
    return this.getStringAttribute('node_label');
  }
  public set nodeLabel(value: string) {
    this._nodeLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelInput() {
    return this._nodeLabel;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets {
  /**
  * SelectionAttributes defines K8s node attributes a NodeSet should use when setting the Node Affinity selectors and Elasticsearch cluster awareness attributes for the Elasticsearch nodes. The list of SelectionAttributes are used to define Node Affinities and set the node awareness configuration in the running Elasticsearch instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#selection_attributes DataK8SOperatorTigeraIoLogStorageV1Manifest#selection_attributes}
  */
  readonly selectionAttributes?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selection_attributes: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesToTerraform, false)(struct!.selectionAttributes),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selection_attributes: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesToHclTerraform, false)(struct!.selectionAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectionAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionAttributes = this._selectionAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectionAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectionAttributes.internalValue = value.selectionAttributes;
    }
  }

  // selection_attributes - computed: false, optional: true, required: false
  private _selectionAttributes = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributesList(this, "selection_attributes", false);
  public get selectionAttributes() {
    return this._selectionAttributes;
  }
  public putSelectionAttributes(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsSelectionAttributes[] | cdktf.IResolvable) {
    this._selectionAttributes.internalValue = value;
  }
  public resetSelectionAttributes() {
    this._selectionAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionAttributesInput() {
    return this._selectionAttributes.internalValue;
  }
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#name DataK8SOperatorTigeraIoLogStorageV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsOutputReference {
    return new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#claims DataK8SOperatorTigeraIoLogStorageV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#limits DataK8SOperatorTigeraIoLogStorageV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#requests DataK8SOperatorTigeraIoLogStorageV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsList",
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

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes {
  /**
  * Count defines the number of nodes in the Elasticsearch cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#count DataK8SOperatorTigeraIoLogStorageV1Manifest#count}
  */
  readonly count?: number;
  /**
  * NodeSets defines configuration specific to each Elasticsearch Node Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#node_sets DataK8SOperatorTigeraIoLogStorageV1Manifest#node_sets}
  */
  readonly nodeSets?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets[] | cdktf.IResolvable;
  /**
  * ResourceRequirements defines the resource limits and requirements for the Elasticsearch cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#resource_requirements DataK8SOperatorTigeraIoLogStorageV1Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    node_sets: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsToTerraform, false)(struct!.nodeSets),
    resource_requirements: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsToTerraform(struct!.resourceRequirements),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_sets: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsToHclTerraform, false)(struct!.nodeSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsList",
    },
    resource_requirements: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._nodeSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSets = this._nodeSets?.internalValue;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._nodeSets.internalValue = undefined;
      this._resourceRequirements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._nodeSets.internalValue = value.nodeSets;
      this._resourceRequirements.internalValue = value.resourceRequirements;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // node_sets - computed: false, optional: true, required: false
  private _nodeSets = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSetsList(this, "node_sets", false);
  public get nodeSets() {
    return this._nodeSets;
  }
  public putNodeSets(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesNodeSets[] | cdktf.IResolvable) {
    this._nodeSets.internalValue = value;
  }
  public resetNodeSets() {
    this._nodeSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSetsInput() {
    return this._nodeSets.internalValue;
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention {
  /**
  * AuditReports configures the retention period for audit logs, in days. Logs written on a day that started at least this long ago are removed. To keep logs for at least x days, use a retention period of x+1. Default: 91
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#audit_reports DataK8SOperatorTigeraIoLogStorageV1Manifest#audit_reports}
  */
  readonly auditReports?: number;
  /**
  * BGPLogs configures the retention period for BGP logs, in days. Logs written on a day that started at least this long ago are removed. To keep logs for at least x days, use a retention period of x+1. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#bgp_logs DataK8SOperatorTigeraIoLogStorageV1Manifest#bgp_logs}
  */
  readonly bgpLogs?: number;
  /**
  * ComplianceReports configures the retention period for compliance reports, in days. Reports are output from the analysis of the system state and audit events for compliance reporting. Consult the Compliance Reporting documentation for more details on reports. Logs written on a day that started at least this long ago are removed. To keep logs for at least x days, use a retention period of x+1. Default: 91
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#compliance_reports DataK8SOperatorTigeraIoLogStorageV1Manifest#compliance_reports}
  */
  readonly complianceReports?: number;
  /**
  * DNSLogs configures the retention period for DNS logs, in days. Logs written on a day that started at least this long ago are removed. To keep logs for at least x days, use a retention period of x+1. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#dns_logs DataK8SOperatorTigeraIoLogStorageV1Manifest#dns_logs}
  */
  readonly dnsLogs?: number;
  /**
  * Flows configures the retention period for flow logs, in days. Logs written on a day that started at least this long ago are removed. To keep logs for at least x days, use a retention period of x+1. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#flows DataK8SOperatorTigeraIoLogStorageV1Manifest#flows}
  */
  readonly flows?: number;
  /**
  * Snapshots configures the retention period for snapshots, in days. Snapshots are periodic captures of resources which along with audit events are used to generate reports. Consult the Compliance Reporting documentation for more details on snapshots. Logs written on a day that started at least this long ago are removed. To keep logs for at least x days, use a retention period of x+1. Default: 91
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#snapshots DataK8SOperatorTigeraIoLogStorageV1Manifest#snapshots}
  */
  readonly snapshots?: number;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetentionToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_reports: cdktf.numberToTerraform(struct!.auditReports),
    bgp_logs: cdktf.numberToTerraform(struct!.bgpLogs),
    compliance_reports: cdktf.numberToTerraform(struct!.complianceReports),
    dns_logs: cdktf.numberToTerraform(struct!.dnsLogs),
    flows: cdktf.numberToTerraform(struct!.flows),
    snapshots: cdktf.numberToTerraform(struct!.snapshots),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetentionToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_reports: {
      value: cdktf.numberToHclTerraform(struct!.auditReports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_logs: {
      value: cdktf.numberToHclTerraform(struct!.bgpLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compliance_reports: {
      value: cdktf.numberToHclTerraform(struct!.complianceReports),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_logs: {
      value: cdktf.numberToHclTerraform(struct!.dnsLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flows: {
      value: cdktf.numberToHclTerraform(struct!.flows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshots: {
      value: cdktf.numberToHclTerraform(struct!.snapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditReports = this._auditReports;
    }
    if (this._bgpLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLogs = this._bgpLogs;
    }
    if (this._complianceReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceReports = this._complianceReports;
    }
    if (this._dnsLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsLogs = this._dnsLogs;
    }
    if (this._flows !== undefined) {
      hasAnyValues = true;
      internalValueResult.flows = this._flows;
    }
    if (this._snapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshots = this._snapshots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditReports = undefined;
      this._bgpLogs = undefined;
      this._complianceReports = undefined;
      this._dnsLogs = undefined;
      this._flows = undefined;
      this._snapshots = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditReports = value.auditReports;
      this._bgpLogs = value.bgpLogs;
      this._complianceReports = value.complianceReports;
      this._dnsLogs = value.dnsLogs;
      this._flows = value.flows;
      this._snapshots = value.snapshots;
    }
  }

  // audit_reports - computed: false, optional: true, required: false
  private _auditReports?: number; 
  public get auditReports() {
    return this.getNumberAttribute('audit_reports');
  }
  public set auditReports(value: number) {
    this._auditReports = value;
  }
  public resetAuditReports() {
    this._auditReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditReportsInput() {
    return this._auditReports;
  }

  // bgp_logs - computed: false, optional: true, required: false
  private _bgpLogs?: number; 
  public get bgpLogs() {
    return this.getNumberAttribute('bgp_logs');
  }
  public set bgpLogs(value: number) {
    this._bgpLogs = value;
  }
  public resetBgpLogs() {
    this._bgpLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogsInput() {
    return this._bgpLogs;
  }

  // compliance_reports - computed: false, optional: true, required: false
  private _complianceReports?: number; 
  public get complianceReports() {
    return this.getNumberAttribute('compliance_reports');
  }
  public set complianceReports(value: number) {
    this._complianceReports = value;
  }
  public resetComplianceReports() {
    this._complianceReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceReportsInput() {
    return this._complianceReports;
  }

  // dns_logs - computed: false, optional: true, required: false
  private _dnsLogs?: number; 
  public get dnsLogs() {
    return this.getNumberAttribute('dns_logs');
  }
  public set dnsLogs(value: number) {
    this._dnsLogs = value;
  }
  public resetDnsLogs() {
    this._dnsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLogsInput() {
    return this._dnsLogs;
  }

  // flows - computed: false, optional: true, required: false
  private _flows?: number; 
  public get flows() {
    return this.getNumberAttribute('flows');
  }
  public set flows(value: number) {
    this._flows = value;
  }
  public resetFlows() {
    this._flows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowsInput() {
    return this._flows;
  }

  // snapshots - computed: false, optional: true, required: false
  private _snapshots?: number; 
  public get snapshots() {
    return this.getNumberAttribute('snapshots');
  }
  public set snapshots(value: number) {
    this._snapshots = value;
  }
  public resetSnapshots() {
    this._snapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotsInput() {
    return this._snapshots;
  }
}
export interface DataK8SOperatorTigeraIoLogStorageV1ManifestSpec {
  /**
  * ComponentResources can be used to customize the resource requirements for each component. Only ECKOperator is supported for this spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#component_resources DataK8SOperatorTigeraIoLogStorageV1Manifest#component_resources}
  */
  readonly componentResources?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources[] | cdktf.IResolvable;
  /**
  * DataNodeSelector gives you more control over the node that Elasticsearch will run on. The contents of DataNodeSelector will be added to the PodSpec of the Elasticsearch nodes. For the pod to be eligible to run on a node, the node must have each of the indicated key-value pairs as labels as well as access to the specified StorageClassName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#data_node_selector DataK8SOperatorTigeraIoLogStorageV1Manifest#data_node_selector}
  */
  readonly dataNodeSelector?: { [key: string]: string };
  /**
  * ECKOperatorStatefulSet configures the ECKOperator StatefulSet. If used in conjunction with the deprecated ComponentResources, then these overrides take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#eck_operator_stateful_set DataK8SOperatorTigeraIoLogStorageV1Manifest#eck_operator_stateful_set}
  */
  readonly eckOperatorStatefulSet?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet;
  /**
  * ElasticsearchMetricsDeployment configures the tigera-elasticsearch-metric Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#elasticsearch_metrics_deployment DataK8SOperatorTigeraIoLogStorageV1Manifest#elasticsearch_metrics_deployment}
  */
  readonly elasticsearchMetricsDeployment?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment;
  /**
  * Index defines the configuration for the indices in the Elasticsearch cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#indices DataK8SOperatorTigeraIoLogStorageV1Manifest#indices}
  */
  readonly indices?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices;
  /**
  * Kibana configures the Kibana Spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#kibana DataK8SOperatorTigeraIoLogStorageV1Manifest#kibana}
  */
  readonly kibana?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana;
  /**
  * LinseedDeployment configures the linseed Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#linseed_deployment DataK8SOperatorTigeraIoLogStorageV1Manifest#linseed_deployment}
  */
  readonly linseedDeployment?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment;
  /**
  * Nodes defines the configuration for a set of identical Elasticsearch cluster nodes, each of type master, data, and ingest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#nodes DataK8SOperatorTigeraIoLogStorageV1Manifest#nodes}
  */
  readonly nodes?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes;
  /**
  * Retention defines how long data is retained in the Elasticsearch cluster before it is cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#retention DataK8SOperatorTigeraIoLogStorageV1Manifest#retention}
  */
  readonly retention?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention;
  /**
  * StorageClassName will populate the PersistentVolumeClaim.StorageClassName that is used to provision disks to the Tigera Elasticsearch cluster. The StorageClassName should only be modified when no LogStorage is currently active. We recommend choosing a storage class dedicated to Tigera LogStorage only. Otherwise, data retention cannot be guaranteed during upgrades. See https://docs.tigera.io/maintenance/upgrading for up-to-date instructions. Default: tigera-elasticsearch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#storage_class_name DataK8SOperatorTigeraIoLogStorageV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_resources: cdktf.listMapper(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesToTerraform, false)(struct!.componentResources),
    data_node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dataNodeSelector),
    eck_operator_stateful_set: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetToTerraform(struct!.eckOperatorStatefulSet),
    elasticsearch_metrics_deployment: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentToTerraform(struct!.elasticsearchMetricsDeployment),
    indices: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndicesToTerraform(struct!.indices),
    kibana: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaToTerraform(struct!.kibana),
    linseed_deployment: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentToTerraform(struct!.linseedDeployment),
    nodes: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesToTerraform(struct!.nodes),
    retention: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetentionToTerraform(struct!.retention),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SOperatorTigeraIoLogStorageV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoLogStorageV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_resources: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesToHclTerraform, false)(struct!.componentResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesList",
    },
    data_node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dataNodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    eck_operator_stateful_set: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetToHclTerraform(struct!.eckOperatorStatefulSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet",
    },
    elasticsearch_metrics_deployment: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentToHclTerraform(struct!.elasticsearchMetricsDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment",
    },
    indices: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndicesToHclTerraform(struct!.indices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices",
    },
    kibana: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaToHclTerraform(struct!.kibana),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana",
    },
    linseed_deployment: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentToHclTerraform(struct!.linseedDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment",
    },
    nodes: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesToHclTerraform(struct!.nodes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes",
    },
    retention: {
      value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoLogStorageV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoLogStorageV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentResources = this._componentResources?.internalValue;
    }
    if (this._dataNodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNodeSelector = this._dataNodeSelector;
    }
    if (this._eckOperatorStatefulSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eckOperatorStatefulSet = this._eckOperatorStatefulSet?.internalValue;
    }
    if (this._elasticsearchMetricsDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearchMetricsDeployment = this._elasticsearchMetricsDeployment?.internalValue;
    }
    if (this._indices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices?.internalValue;
    }
    if (this._kibana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kibana = this._kibana?.internalValue;
    }
    if (this._linseedDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linseedDeployment = this._linseedDeployment?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentResources.internalValue = undefined;
      this._dataNodeSelector = undefined;
      this._eckOperatorStatefulSet.internalValue = undefined;
      this._elasticsearchMetricsDeployment.internalValue = undefined;
      this._indices.internalValue = undefined;
      this._kibana.internalValue = undefined;
      this._linseedDeployment.internalValue = undefined;
      this._nodes.internalValue = undefined;
      this._retention.internalValue = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentResources.internalValue = value.componentResources;
      this._dataNodeSelector = value.dataNodeSelector;
      this._eckOperatorStatefulSet.internalValue = value.eckOperatorStatefulSet;
      this._elasticsearchMetricsDeployment.internalValue = value.elasticsearchMetricsDeployment;
      this._indices.internalValue = value.indices;
      this._kibana.internalValue = value.kibana;
      this._linseedDeployment.internalValue = value.linseedDeployment;
      this._nodes.internalValue = value.nodes;
      this._retention.internalValue = value.retention;
      this._storageClassName = value.storageClassName;
    }
  }

  // component_resources - computed: false, optional: true, required: false
  private _componentResources = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResourcesList(this, "component_resources", false);
  public get componentResources() {
    return this._componentResources;
  }
  public putComponentResources(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecComponentResources[] | cdktf.IResolvable) {
    this._componentResources.internalValue = value;
  }
  public resetComponentResources() {
    this._componentResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentResourcesInput() {
    return this._componentResources.internalValue;
  }

  // data_node_selector - computed: false, optional: true, required: false
  private _dataNodeSelector?: { [key: string]: string }; 
  public get dataNodeSelector() {
    return this.getStringMapAttribute('data_node_selector');
  }
  public set dataNodeSelector(value: { [key: string]: string }) {
    this._dataNodeSelector = value;
  }
  public resetDataNodeSelector() {
    this._dataNodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNodeSelectorInput() {
    return this._dataNodeSelector;
  }

  // eck_operator_stateful_set - computed: false, optional: true, required: false
  private _eckOperatorStatefulSet = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSetOutputReference(this, "eck_operator_stateful_set");
  public get eckOperatorStatefulSet() {
    return this._eckOperatorStatefulSet;
  }
  public putEckOperatorStatefulSet(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecEckOperatorStatefulSet) {
    this._eckOperatorStatefulSet.internalValue = value;
  }
  public resetEckOperatorStatefulSet() {
    this._eckOperatorStatefulSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eckOperatorStatefulSetInput() {
    return this._eckOperatorStatefulSet.internalValue;
  }

  // elasticsearch_metrics_deployment - computed: false, optional: true, required: false
  private _elasticsearchMetricsDeployment = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeploymentOutputReference(this, "elasticsearch_metrics_deployment");
  public get elasticsearchMetricsDeployment() {
    return this._elasticsearchMetricsDeployment;
  }
  public putElasticsearchMetricsDeployment(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecElasticsearchMetricsDeployment) {
    this._elasticsearchMetricsDeployment.internalValue = value;
  }
  public resetElasticsearchMetricsDeployment() {
    this._elasticsearchMetricsDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchMetricsDeploymentInput() {
    return this._elasticsearchMetricsDeployment.internalValue;
  }

  // indices - computed: false, optional: true, required: false
  private _indices = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndicesOutputReference(this, "indices");
  public get indices() {
    return this._indices;
  }
  public putIndices(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecIndices) {
    this._indices.internalValue = value;
  }
  public resetIndices() {
    this._indices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices.internalValue;
  }

  // kibana - computed: false, optional: true, required: false
  private _kibana = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibanaOutputReference(this, "kibana");
  public get kibana() {
    return this._kibana;
  }
  public putKibana(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecKibana) {
    this._kibana.internalValue = value;
  }
  public resetKibana() {
    this._kibana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaInput() {
    return this._kibana.internalValue;
  }

  // linseed_deployment - computed: false, optional: true, required: false
  private _linseedDeployment = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeploymentOutputReference(this, "linseed_deployment");
  public get linseedDeployment() {
    return this._linseedDeployment;
  }
  public putLinseedDeployment(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecLinseedDeployment) {
    this._linseedDeployment.internalValue = value;
  }
  public resetLinseedDeployment() {
    this._linseedDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linseedDeploymentInput() {
    return this._linseedDeployment.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodesOutputReference(this, "nodes");
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecNodes) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpecRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest k8s_operator_tigera_io_log_storage_v1_manifest}
*/
export class DataK8SOperatorTigeraIoLogStorageV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_log_storage_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoLogStorageV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoLogStorageV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoLogStorageV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoLogStorageV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_log_storage_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_tigera_io_log_storage_v1_manifest k8s_operator_tigera_io_log_storage_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoLogStorageV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoLogStorageV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_log_storage_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SOperatorTigeraIoLogStorageV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoLogStorageV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoLogStorageV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoLogStorageV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoLogStorageV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoLogStorageV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoLogStorageV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
