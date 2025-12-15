// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#metadata DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata;
  /**
  * Specification of the desired state for Tigera intrusion detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#spec DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#annotations DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#labels DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection {
  /**
  * StorageClassName is now deprecated, and configuring it has no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#storage_class_name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetectionToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetectionToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storageClassName = value.storageClassName;
    }
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#claims DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#limits DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#requests DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsList",
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources {
  /**
  * ComponentName is an enum which identifies the component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#component_name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#component_name}
  */
  readonly componentName: string;
  /**
  * ResourceRequirements allows customization of limits and requests for compute resources such as cpu and memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#resource_requirements DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#resource_requirements}
  */
  readonly resourceRequirements: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    resource_requirements: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsToTerraform(struct!.resourceRequirements),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources | cdktf.IResolvable | undefined) {
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
  private _resourceRequirements = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#claims DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#limits DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#requests DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers {
  /**
  * Image name for the init container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#image DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#image}
  */
  readonly image: string;
  /**
  * Name is an enum that identifies the init container by its name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the init container's resources. If omitted, the default values will be used for the init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#resources DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
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
      this._image = value.image;
      this._name = value.name;
      this._resources.internalValue = value.resources;
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
  private _resources = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec {
  /**
  * List of DPI Daemonset Init containers definitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#init_containers DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initContainers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initContainers.internalValue = value.initContainers;
    }
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate {
  /**
  * Spec specifies DPI Daemonset Template Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#spec DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec {
  /**
  * Template specifies DPI Daemonset Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#template DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecTemplate) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset {
  /**
  * DPIDaemonsetSpec configures the DPI Daemonset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#spec DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetSpec) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#claims DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#limits DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#requests DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers {
  /**
  * Name is an enum which identifies the IntrusionDetectionController Deployment container by name. Supported values are: controller, webhooks-processor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named IntrusionDetectionController Deployment container's resources. If omitted, the IntrusionDetection Deployment will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#resources DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersResources) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#claims DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#limits DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#requests DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers {
  /**
  * Name is an enum which identifies the IntrusionDetectionController Deployment init container by name. Supported values are: intrusion-detection-tls-key-cert-provisioner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#name DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named IntrusionDetectionController Deployment init container's resources. If omitted, the IntrusionDetectionController Deployment will use its default value for this init container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#resources DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersResources) {
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

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersOutputReference {
    return new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec {
  /**
  * Containers is a list of IntrusionDetectionController containers. If specified, this overrides the specified IntrusionDetectionController Deployment containers. If omitted, the IntrusionDetectionController Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#containers DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable;
  /**
  * InitContainers is a list of IntrusionDetectionController init containers. If specified, this overrides the specified IntrusionDetectionController Deployment init containers. If omitted, the IntrusionDetectionController Deployment will use its default values for its init containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#init_containers DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersToTerraform, false)(struct!.containers),
    init_containers: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _containers = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecContainers[] | cdktf.IResolvable) {
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
  private _initContainers = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecInitContainers[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate {
  /**
  * Spec is the IntrusionDetectionController Deployment's PodSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#spec DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateSpec) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec {
  /**
  * Template describes the IntrusionDetectionController Deployment pod that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#template DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#template}
  */
  readonly template?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec | cdktf.IResolvable | undefined) {
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
  private _template = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecTemplate) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment {
  /**
  * Spec is the specification of the IntrusionDetectionController Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#spec DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentSpec) {
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
export interface DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec {
  /**
  * AnomalyDetection is now deprecated, and configuring it has no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#anomaly_detection DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#anomaly_detection}
  */
  readonly anomalyDetection?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection;
  /**
  * ComponentResources can be used to customize the resource requirements for each component. Only DeepPacketInspection is supported for this spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#component_resources DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#component_resources}
  */
  readonly componentResources?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources[] | cdktf.IResolvable;
  /**
  * DeepPacketInspectionDaemonset configures the DPI Daemonset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#deep_packet_inspection_daemonset DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#deep_packet_inspection_daemonset}
  */
  readonly deepPacketInspectionDaemonset?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset;
  /**
  * IntrusionDetectionControllerDeployment configures the IntrusionDetection Controller Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#intrusion_detection_controller_deployment DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest#intrusion_detection_controller_deployment}
  */
  readonly intrusionDetectionControllerDeployment?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment;
}

export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly_detection: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetectionToTerraform(struct!.anomalyDetection),
    component_resources: cdktf.listMapper(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesToTerraform, false)(struct!.componentResources),
    deep_packet_inspection_daemonset: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetToTerraform(struct!.deepPacketInspectionDaemonset),
    intrusion_detection_controller_deployment: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentToTerraform(struct!.intrusionDetectionControllerDeployment),
  }
}


export function dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anomaly_detection: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetectionToHclTerraform(struct!.anomalyDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection",
    },
    component_resources: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesToHclTerraform, false)(struct!.componentResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesList",
    },
    deep_packet_inspection_daemonset: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetToHclTerraform(struct!.deepPacketInspectionDaemonset),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset",
    },
    intrusion_detection_controller_deployment: {
      value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentToHclTerraform(struct!.intrusionDetectionControllerDeployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anomalyDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyDetection = this._anomalyDetection?.internalValue;
    }
    if (this._componentResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentResources = this._componentResources?.internalValue;
    }
    if (this._deepPacketInspectionDaemonset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepPacketInspectionDaemonset = this._deepPacketInspectionDaemonset?.internalValue;
    }
    if (this._intrusionDetectionControllerDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intrusionDetectionControllerDeployment = this._intrusionDetectionControllerDeployment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anomalyDetection.internalValue = undefined;
      this._componentResources.internalValue = undefined;
      this._deepPacketInspectionDaemonset.internalValue = undefined;
      this._intrusionDetectionControllerDeployment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anomalyDetection.internalValue = value.anomalyDetection;
      this._componentResources.internalValue = value.componentResources;
      this._deepPacketInspectionDaemonset.internalValue = value.deepPacketInspectionDaemonset;
      this._intrusionDetectionControllerDeployment.internalValue = value.intrusionDetectionControllerDeployment;
    }
  }

  // anomaly_detection - computed: false, optional: true, required: false
  private _anomalyDetection = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetectionOutputReference(this, "anomaly_detection");
  public get anomalyDetection() {
    return this._anomalyDetection;
  }
  public putAnomalyDetection(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecAnomalyDetection) {
    this._anomalyDetection.internalValue = value;
  }
  public resetAnomalyDetection() {
    this._anomalyDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionInput() {
    return this._anomalyDetection.internalValue;
  }

  // component_resources - computed: false, optional: true, required: false
  private _componentResources = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResourcesList(this, "component_resources", false);
  public get componentResources() {
    return this._componentResources;
  }
  public putComponentResources(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecComponentResources[] | cdktf.IResolvable) {
    this._componentResources.internalValue = value;
  }
  public resetComponentResources() {
    this._componentResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentResourcesInput() {
    return this._componentResources.internalValue;
  }

  // deep_packet_inspection_daemonset - computed: false, optional: true, required: false
  private _deepPacketInspectionDaemonset = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonsetOutputReference(this, "deep_packet_inspection_daemonset");
  public get deepPacketInspectionDaemonset() {
    return this._deepPacketInspectionDaemonset;
  }
  public putDeepPacketInspectionDaemonset(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecDeepPacketInspectionDaemonset) {
    this._deepPacketInspectionDaemonset.internalValue = value;
  }
  public resetDeepPacketInspectionDaemonset() {
    this._deepPacketInspectionDaemonset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepPacketInspectionDaemonsetInput() {
    return this._deepPacketInspectionDaemonset.internalValue;
  }

  // intrusion_detection_controller_deployment - computed: false, optional: true, required: false
  private _intrusionDetectionControllerDeployment = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeploymentOutputReference(this, "intrusion_detection_controller_deployment");
  public get intrusionDetectionControllerDeployment() {
    return this._intrusionDetectionControllerDeployment;
  }
  public putIntrusionDetectionControllerDeployment(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecIntrusionDetectionControllerDeployment) {
    this._intrusionDetectionControllerDeployment.internalValue = value;
  }
  public resetIntrusionDetectionControllerDeployment() {
    this._intrusionDetectionControllerDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intrusionDetectionControllerDeploymentInput() {
    return this._intrusionDetectionControllerDeployment.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest k8s_operator_tigera_io_intrusion_detection_v1_manifest}
*/
export class DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_intrusion_detection_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoIntrusionDetectionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_intrusion_detection_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_tigera_io_intrusion_detection_v1_manifest k8s_operator_tigera_io_intrusion_detection_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_intrusion_detection_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoIntrusionDetectionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
