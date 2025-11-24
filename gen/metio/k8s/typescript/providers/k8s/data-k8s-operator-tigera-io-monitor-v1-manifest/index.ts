// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoMonitorV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#metadata DataK8SOperatorTigeraIoMonitorV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoMonitorV1ManifestMetadata;
  /**
  * MonitorSpec defines the desired state of Tigera monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#spec DataK8SOperatorTigeraIoMonitorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoMonitorV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#annotations DataK8SOperatorTigeraIoMonitorV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#labels DataK8SOperatorTigeraIoMonitorV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#name DataK8SOperatorTigeraIoMonitorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoMonitorV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#name DataK8SOperatorTigeraIoMonitorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#claims DataK8SOperatorTigeraIoMonitorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#limits DataK8SOperatorTigeraIoMonitorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#requests DataK8SOperatorTigeraIoMonitorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec {
  /**
  * Define resources requests and limits for single Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#resources DataK8SOperatorTigeraIoMonitorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecResources) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager {
  /**
  * Spec is the specification of the Alertmanager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#spec DataK8SOperatorTigeraIoMonitorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerSpec) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#key DataK8SOperatorTigeraIoMonitorV1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#name DataK8SOperatorTigeraIoMonitorV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#optional DataK8SOperatorTigeraIoMonitorV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecretToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret | cdktf.IResolvable): any {
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


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings {
  /**
  * Action to perform based on regex matching. Default is 'replace'. uppercase and lowercase actions require Prometheus >= 2.36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#action DataK8SOperatorTigeraIoMonitorV1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#modulus DataK8SOperatorTigeraIoMonitorV1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#regex DataK8SOperatorTigeraIoMonitorV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#replacement DataK8SOperatorTigeraIoMonitorV1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#separator DataK8SOperatorTigeraIoMonitorV1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#source_labels DataK8SOperatorTigeraIoMonitorV1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#target_label DataK8SOperatorTigeraIoMonitorV1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings {
  /**
  * Action to perform based on regex matching. Default is 'replace'. uppercase and lowercase actions require Prometheus >= 2.36.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#action DataK8SOperatorTigeraIoMonitorV1Manifest#action}
  */
  readonly action?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#modulus DataK8SOperatorTigeraIoMonitorV1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#regex DataK8SOperatorTigeraIoMonitorV1Manifest#regex}
  */
  readonly regex?: string;
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#replacement DataK8SOperatorTigeraIoMonitorV1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#separator DataK8SOperatorTigeraIoMonitorV1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#source_labels DataK8SOperatorTigeraIoMonitorV1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#target_label DataK8SOperatorTigeraIoMonitorV1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.stringToTerraform(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints {
  /**
  * Secret to mount to read bearer token for scraping targets. Recommended: when unset, the operator will create a Secret, a ClusterRole and a ClusterRoleBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#bearer_token_secret DataK8SOperatorTigeraIoMonitorV1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret;
  /**
  * HonorLabels chooses the metric's labels on collisions with target labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#honor_labels DataK8SOperatorTigeraIoMonitorV1Manifest#honor_labels}
  */
  readonly honorLabels?: boolean | cdktf.IResolvable;
  /**
  * HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#honor_timestamps DataK8SOperatorTigeraIoMonitorV1Manifest#honor_timestamps}
  */
  readonly honorTimestamps?: boolean | cdktf.IResolvable;
  /**
  * Interval at which metrics should be scraped. If not specified Prometheus' global scrape interval is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#interval DataK8SOperatorTigeraIoMonitorV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * MetricRelabelConfigs to apply to samples before ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#metric_relabelings DataK8SOperatorTigeraIoMonitorV1Manifest#metric_relabelings}
  */
  readonly metricRelabelings?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings[] | cdktf.IResolvable;
  /**
  * Optional HTTP URL parameters Default: scrape all metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#params DataK8SOperatorTigeraIoMonitorV1Manifest#params}
  */
  readonly params?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * RelabelConfigs to apply to samples before scraping. Prometheus Operator automatically adds relabelings for a few standard Kubernetes fields. The original scrape job's name is available via the '__tmp_prometheus_job_name' label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#relabelings DataK8SOperatorTigeraIoMonitorV1Manifest#relabelings}
  */
  readonly relabelings?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings[] | cdktf.IResolvable;
  /**
  * Timeout after which the scrape is ended. If not specified, the Prometheus global scrape timeout is used unless it is less than 'Interval' in which the latter is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#scrape_timeout DataK8SOperatorTigeraIoMonitorV1Manifest#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token_secret: dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    honor_labels: cdktf.booleanToTerraform(struct!.honorLabels),
    honor_timestamps: cdktf.booleanToTerraform(struct!.honorTimestamps),
    interval: cdktf.stringToTerraform(struct!.interval),
    metric_relabelings: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsToTerraform, false)(struct!.metricRelabelings),
    params: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.params),
    relabelings: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsToTerraform, false)(struct!.relabelings),
    scrape_timeout: cdktf.stringToTerraform(struct!.scrapeTimeout),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token_secret: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret",
    },
    honor_labels: {
      value: cdktf.booleanToHclTerraform(struct!.honorLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honor_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.honorTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_relabelings: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsToHclTerraform, false)(struct!.metricRelabelings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsList",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    relabelings: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsToHclTerraform, false)(struct!.relabelings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsList",
    },
    scrape_timeout: {
      value: cdktf.stringToHclTerraform(struct!.scrapeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._honorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorLabels = this._honorLabels;
    }
    if (this._honorTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorTimestamps = this._honorTimestamps;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._metricRelabelings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRelabelings = this._metricRelabelings?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._relabelings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelings = this._relabelings?.internalValue;
    }
    if (this._scrapeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeout = this._scrapeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._honorLabels = undefined;
      this._honorTimestamps = undefined;
      this._interval = undefined;
      this._metricRelabelings.internalValue = undefined;
      this._params = undefined;
      this._relabelings.internalValue = undefined;
      this._scrapeTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._honorLabels = value.honorLabels;
      this._honorTimestamps = value.honorTimestamps;
      this._interval = value.interval;
      this._metricRelabelings.internalValue = value.metricRelabelings;
      this._params = value.params;
      this._relabelings.internalValue = value.relabelings;
      this._scrapeTimeout = value.scrapeTimeout;
    }
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
  }

  // honor_labels - computed: false, optional: true, required: false
  private _honorLabels?: boolean | cdktf.IResolvable; 
  public get honorLabels() {
    return this.getBooleanAttribute('honor_labels');
  }
  public set honorLabels(value: boolean | cdktf.IResolvable) {
    this._honorLabels = value;
  }
  public resetHonorLabels() {
    this._honorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorLabelsInput() {
    return this._honorLabels;
  }

  // honor_timestamps - computed: false, optional: true, required: false
  private _honorTimestamps?: boolean | cdktf.IResolvable; 
  public get honorTimestamps() {
    return this.getBooleanAttribute('honor_timestamps');
  }
  public set honorTimestamps(value: boolean | cdktf.IResolvable) {
    this._honorTimestamps = value;
  }
  public resetHonorTimestamps() {
    this._honorTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorTimestampsInput() {
    return this._honorTimestamps;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metric_relabelings - computed: false, optional: true, required: false
  private _metricRelabelings = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelingsList(this, "metric_relabelings", false);
  public get metricRelabelings() {
    return this._metricRelabelings;
  }
  public putMetricRelabelings(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsMetricRelabelings[] | cdktf.IResolvable) {
    this._metricRelabelings.internalValue = value;
  }
  public resetMetricRelabelings() {
    this._metricRelabelings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRelabelingsInput() {
    return this._metricRelabelings.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get params() {
    return this.interpolationForAttribute('params');
  }
  public set params(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // relabelings - computed: false, optional: true, required: false
  private _relabelings = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelingsList(this, "relabelings", false);
  public get relabelings() {
    return this._relabelings;
  }
  public putRelabelings(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsRelabelings[] | cdktf.IResolvable) {
    this._relabelings.internalValue = value;
  }
  public resetRelabelings() {
    this._relabelings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelingsInput() {
    return this._relabelings.internalValue;
  }

  // scrape_timeout - computed: false, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor {
  /**
  * The endpoints to scrape. This struct contains a subset of the Endpoint as defined in the prometheus docs. Fields related to connecting to our Prometheus server are automatically set by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#endpoints DataK8SOperatorTigeraIoMonitorV1Manifest#endpoints}
  */
  readonly endpoints?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints[] | cdktf.IResolvable;
  /**
  * Labels are the metadata.labels of the ServiceMonitor. When combined with spec.serviceMonitorSelector.matchLabels on your prometheus instance, the service monitor will automatically be picked up. Default: k8s-app=tigera-prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#labels DataK8SOperatorTigeraIoMonitorV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsToTerraform, false)(struct!.endpoints),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsToHclTerraform, false)(struct!.endpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints?.internalValue;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints.internalValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints.internalValue = value.endpoints;
      this._labels = value.labels;
    }
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
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
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus {
  /**
  * Namespace is the namespace where the operator will create resources for your Prometheus instance. The namespace must be created before the operator will create Prometheus resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#namespace DataK8SOperatorTigeraIoMonitorV1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * ServiceMonitor when specified, the operator will create a ServiceMonitor object in the namespace. It is recommended that you configure labels if you want your prometheus instance to pick up the configuration automatically. The operator will configure 1 endpoint by default: - Params to scrape all metrics available in Calico Enterprise. - BearerTokenSecret (If not overridden, the operator will also create corresponding RBAC that allows authz to the metrics.) - TLSConfig, containing the caFile and serverName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#service_monitor DataK8SOperatorTigeraIoMonitorV1Manifest#service_monitor}
  */
  readonly serviceMonitor?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    service_monitor: dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorToTerraform(struct!.serviceMonitor),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_monitor: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorToHclTerraform(struct!.serviceMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._serviceMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMonitor = this._serviceMonitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._serviceMonitor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._serviceMonitor.internalValue = value.serviceMonitor;
    }
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

  // service_monitor - computed: false, optional: true, required: false
  private _serviceMonitor = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitorOutputReference(this, "service_monitor");
  public get serviceMonitor() {
    return this._serviceMonitor;
  }
  public putServiceMonitor(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusServiceMonitor) {
    this._serviceMonitor.internalValue = value;
  }
  public resetServiceMonitor() {
    this._serviceMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorInput() {
    return this._serviceMonitor.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#name DataK8SOperatorTigeraIoMonitorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#claims DataK8SOperatorTigeraIoMonitorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#limits DataK8SOperatorTigeraIoMonitorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#requests DataK8SOperatorTigeraIoMonitorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers {
  /**
  * Name is an enum which identifies the Prometheus Deployment container by name. Supported values are: authn-proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#name DataK8SOperatorTigeraIoMonitorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Resources allows customization of limits and requests for compute resources such as cpu and memory. If specified, this overrides the named Prometheus container's resources. If omitted, the Prometheus will use its default value for this container's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#resources DataK8SOperatorTigeraIoMonitorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers | cdktf.IResolvable): any {
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
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers | cdktf.IResolvable | undefined) {
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
  private _resources = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersResources) {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#name DataK8SOperatorTigeraIoMonitorV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsOutputReference {
    return new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#claims DataK8SOperatorTigeraIoMonitorV1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#limits DataK8SOperatorTigeraIoMonitorV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#requests DataK8SOperatorTigeraIoMonitorV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsList",
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

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields {
  /**
  * Containers is a list of Prometheus containers. If specified, this overrides the specified Prometheus Deployment containers. If omitted, the Prometheus Deployment will use its default values for its containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#containers DataK8SOperatorTigeraIoMonitorV1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers[] | cdktf.IResolvable;
  /**
  * Define resources requests and limits for single Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#resources DataK8SOperatorTigeraIoMonitorV1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersToTerraform, false)(struct!.containers),
    resources: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersList",
    },
    resources: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._resources.internalValue = value.resources;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsResources) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec {
  /**
  * CommonPrometheusFields are the options available to both the Prometheus server and agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#common_prometheus_fields DataK8SOperatorTigeraIoMonitorV1Manifest#common_prometheus_fields}
  */
  readonly commonPrometheusFields?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_prometheus_fields: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsToTerraform(struct!.commonPrometheusFields),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_prometheus_fields: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsToHclTerraform(struct!.commonPrometheusFields),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonPrometheusFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonPrometheusFields = this._commonPrometheusFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonPrometheusFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonPrometheusFields.internalValue = value.commonPrometheusFields;
    }
  }

  // common_prometheus_fields - computed: false, optional: true, required: false
  private _commonPrometheusFields = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFieldsOutputReference(this, "common_prometheus_fields");
  public get commonPrometheusFields() {
    return this._commonPrometheusFields;
  }
  public putCommonPrometheusFields(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecCommonPrometheusFields) {
    this._commonPrometheusFields.internalValue = value;
  }
  public resetCommonPrometheusFields() {
    this._commonPrometheusFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonPrometheusFieldsInput() {
    return this._commonPrometheusFields.internalValue;
  }
}
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus {
  /**
  * Spec is the specification of the Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#spec DataK8SOperatorTigeraIoMonitorV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecToTerraform(struct!.spec),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus | cdktf.IResolvable | undefined) {
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
  private _spec = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusSpec) {
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
export interface DataK8SOperatorTigeraIoMonitorV1ManifestSpec {
  /**
  * AlertManager is the configuration for the AlertManager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#alert_manager DataK8SOperatorTigeraIoMonitorV1Manifest#alert_manager}
  */
  readonly alertManager?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager;
  /**
  * ExternalPrometheus optionally configures integration with an external Prometheus for scraping Calico metrics. When specified, the operator will render resources in the defined namespace. This option can be useful for configuring scraping from git-ops tools without the need of post-installation steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#external_prometheus DataK8SOperatorTigeraIoMonitorV1Manifest#external_prometheus}
  */
  readonly externalPrometheus?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus;
  /**
  * Prometheus is the configuration for the Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#prometheus DataK8SOperatorTigeraIoMonitorV1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus;
}

export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_manager: dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerToTerraform(struct!.alertManager),
    external_prometheus: dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusToTerraform(struct!.externalPrometheus),
    prometheus: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusToTerraform(struct!.prometheus),
  }
}


export function dataK8SOperatorTigeraIoMonitorV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoMonitorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_manager: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerToHclTerraform(struct!.alertManager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager",
    },
    external_prometheus: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusToHclTerraform(struct!.externalPrometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus",
    },
    prometheus: {
      value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoMonitorV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoMonitorV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertManager = this._alertManager?.internalValue;
    }
    if (this._externalPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPrometheus = this._externalPrometheus?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertManager.internalValue = undefined;
      this._externalPrometheus.internalValue = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertManager.internalValue = value.alertManager;
      this._externalPrometheus.internalValue = value.externalPrometheus;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // alert_manager - computed: false, optional: true, required: false
  private _alertManager = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManagerOutputReference(this, "alert_manager");
  public get alertManager() {
    return this._alertManager;
  }
  public putAlertManager(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecAlertManager) {
    this._alertManager.internalValue = value;
  }
  public resetAlertManager() {
    this._alertManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertManagerInput() {
    return this._alertManager.internalValue;
  }

  // external_prometheus - computed: false, optional: true, required: false
  private _externalPrometheus = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheusOutputReference(this, "external_prometheus");
  public get externalPrometheus() {
    return this._externalPrometheus;
  }
  public putExternalPrometheus(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecExternalPrometheus) {
    this._externalPrometheus.internalValue = value;
  }
  public resetExternalPrometheus() {
    this._externalPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPrometheusInput() {
    return this._externalPrometheus.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpecPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest k8s_operator_tigera_io_monitor_v1_manifest}
*/
export class DataK8SOperatorTigeraIoMonitorV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_monitor_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoMonitorV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoMonitorV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoMonitorV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoMonitorV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_monitor_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/operator_tigera_io_monitor_v1_manifest k8s_operator_tigera_io_monitor_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoMonitorV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoMonitorV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_monitor_v1_manifest',
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
  private _metadata = new DataK8SOperatorTigeraIoMonitorV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoMonitorV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoMonitorV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoMonitorV1ManifestSpec) {
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
      metadata: dataK8SOperatorTigeraIoMonitorV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoMonitorV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoMonitorV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoMonitorV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoMonitorV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
