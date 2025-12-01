// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#metadata DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata;
  /**
  * GooseFSRuntimeSpec defines the desired state of GooseFSRuntime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#spec DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec;
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#labels DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#namespace DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Enabled or Disabled for the components. For now, only API Gateway is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by GooseFS component. <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * NodeSelector is a selector which must be true for the master to fit on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ports used by GooseFS(e.g. rpc: 19998 for master)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the GooseFS component. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._env = undefined;
      this._jvmOptions = undefined;
      this._nodeSelector = undefined;
      this._ports = undefined;
      this._properties = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._env = value.env;
      this._jvmOptions = value.jvmOptions;
      this._nodeSelector = value.nodeSelector;
      this._ports = value.ports;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy {
  /**
  * Optional duration in seconds the cache needs to clean gracefully. May be decreased in delete runtime request. Value must be non-negative integer. The value zero indicates clean immediately via the timeout command (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with timeout command. Set this value longer than the expected cleanup time for your process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#grace_period_seconds DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#grace_period_seconds}
  */
  readonly gracePeriodSeconds?: number;
  /**
  * Optional max retry Attempts when cleanCache function returns an error after execution, runtime attempts to run it three more times by default. With Maximum Retry Attempts, you can customize the maximum number of retries. This gives you the option to continue processing retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#max_retry_attempts DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#max_retry_attempts}
  */
  readonly maxRetryAttempts?: number;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period_seconds: cdktf.numberToTerraform(struct!.gracePeriodSeconds),
    max_retry_attempts: cdktf.numberToTerraform(struct!.maxRetryAttempts),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodSeconds = this._gracePeriodSeconds;
    }
    if (this._maxRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryAttempts = this._maxRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gracePeriodSeconds = undefined;
      this._maxRetryAttempts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gracePeriodSeconds = value.gracePeriodSeconds;
      this._maxRetryAttempts = value.maxRetryAttempts;
    }
  }

  // grace_period_seconds - computed: false, optional: true, required: false
  private _gracePeriodSeconds?: number; 
  public get gracePeriodSeconds() {
    return this.getNumberAttribute('grace_period_seconds');
  }
  public set gracePeriodSeconds(value: number) {
    this._gracePeriodSeconds = value;
  }
  public resetGracePeriodSeconds() {
    this._gracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodSecondsInput() {
    return this._gracePeriodSeconds;
  }

  // max_retry_attempts - computed: false, optional: true, required: false
  private _maxRetryAttempts?: number; 
  public get maxRetryAttempts() {
    return this.getNumberAttribute('max_retry_attempts');
  }
  public set maxRetryAttempts(value: number) {
    this._maxRetryAttempts = value;
  }
  public resetMaxRetryAttempts() {
    this._maxRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryAttemptsInput() {
    return this._maxRetryAttempts;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData {
  /**
  * Pin the dataset or not. Refer to <a href='https://docs.alluxio.io/os/user/stable/en/operation/User-CLI.html#pin'>Alluxio User-CLI pin</a>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#pin DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#pin}
  */
  readonly pin?: boolean | cdktf.IResolvable;
  /**
  * The copies of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecDataToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pin: cdktf.booleanToTerraform(struct!.pin),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecDataToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pin: {
      value: cdktf.booleanToHclTerraform(struct!.pin),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pin = this._pin;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pin = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pin = value.pin;
      this._replicas = value.replicas;
    }
  }

  // pin - computed: false, optional: true, required: false
  private _pin?: boolean | cdktf.IResolvable; 
  public get pin() {
    return this.getBooleanAttribute('pin');
  }
  public set pin(value: boolean | cdktf.IResolvable) {
    this._pin = value;
  }
  public resetPin() {
    this._pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Arguments that will be passed to GooseFS Fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#args DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * CleanPolicy decides when to clean GooseFS Fuse pods. Currently Fluid supports two policies: OnDemand and OnRuntimeDeleted OnDemand cleans fuse pod once th fuse pod on some node is not needed OnRuntimeDeleted cleans fuse pod only when the cache runtime is deleted Defaults to OnRuntimeDeleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#clean_policy DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#clean_policy}
  */
  readonly cleanPolicy?: string;
  /**
  * Environment variables that will be used by GooseFS Fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Image for GooseFS Fuse(e.g. goosefs/goosefs-fuse)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * One of the three policies: 'Always', 'IfNotPresent', 'Never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image_pull_policy DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image Tag for GooseFS Fuse(e.g. v1.0.1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image_tag DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * NodeSelector is a selector which must be true for the fuse client to fit on a node, this option only effect when global is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Resources that will be requested by GooseFS Fuse. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    clean_policy: cdktf.stringToTerraform(struct!.cleanPolicy),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse | cdktf.IResolvable): any {
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
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clean_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._cleanPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanPolicy = this._cleanPolicy;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._args = undefined;
      this._cleanPolicy = undefined;
      this._env = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imageTag = undefined;
      this._jvmOptions = undefined;
      this._nodeSelector = undefined;
      this._properties = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._args = value.args;
      this._cleanPolicy = value.cleanPolicy;
      this._env = value.env;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imageTag = value.imageTag;
      this._jvmOptions = value.jvmOptions;
      this._nodeSelector = value.nodeSelector;
      this._properties = value.properties;
      this._resources.internalValue = value.resources;
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

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // clean_policy - computed: false, optional: true, required: false
  private _cleanPolicy?: string; 
  public get cleanPolicy() {
    return this.getStringAttribute('clean_policy');
  }
  public set cleanPolicy(value: string) {
    this._cleanPolicy = value;
  }
  public resetCleanPolicy() {
    this._cleanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanPolicyInput() {
    return this._cleanPolicy;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion {
  /**
  * Image (e.g. alluxio/alluxio)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * One of the three policies: 'Always', 'IfNotPresent', 'Never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image_pull_policy DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image tag (e.g. 2.3.0-SNAPSHOT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image_tag DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersionToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersionToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion | cdktf.IResolvable): any {
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
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imageTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imageTag = value.imageTag;
    }
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers {
  /**
  * Environment variables that will be used by initialize the users for runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Image for initialize the users for runtime(e.g. alluxio/alluxio-User init)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * One of the three policies: 'Always', 'IfNotPresent', 'Never'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image_pull_policy DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image Tag for initialize the users for runtime(e.g. 2.3.0-SNAPSHOT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image_tag DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Resources that will be requested by initialize the users for runtime. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imageTag = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imageTag = value.imageTag;
      this._resources.internalValue = value.resources;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Enabled or Disabled for the components. For now, only API Gateway is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by GooseFS component. <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * NodeSelector is a selector which must be true for the master to fit on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ports used by GooseFS(e.g. rpc: 19998 for master)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the GooseFS component. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._env = undefined;
      this._jvmOptions = undefined;
      this._nodeSelector = undefined;
      this._ports = undefined;
      this._properties = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._env = value.env;
      this._jvmOptions = value.jvmOptions;
      this._nodeSelector = value.nodeSelector;
      this._ports = value.ports;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Enabled or Disabled for the components. For now, only API Gateway is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by GooseFS component. <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * NodeSelector is a selector which must be true for the master to fit on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ports used by GooseFS(e.g. rpc: 19998 for master)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the GooseFS component. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._env = undefined;
      this._jvmOptions = undefined;
      this._nodeSelector = undefined;
      this._ports = undefined;
      this._properties = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._env = value.env;
      this._jvmOptions = value.jvmOptions;
      this._nodeSelector = value.nodeSelector;
      this._ports = value.ports;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Enabled or Disabled for the components. For now, only API Gateway is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by GooseFS component. <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * NodeSelector is a selector which must be true for the master to fit on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ports used by GooseFS(e.g. rpc: 19998 for master)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the GooseFS component. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._env = undefined;
      this._jvmOptions = undefined;
      this._nodeSelector = undefined;
      this._ports = undefined;
      this._properties = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._env = value.env;
      this._jvmOptions = value.jvmOptions;
      this._nodeSelector = value.nodeSelector;
      this._ports = value.ports;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs {
  /**
  * The gid to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#gid DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#gid}
  */
  readonly gid: number;
  /**
  * The group name to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#group DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#group}
  */
  readonly group: string;
  /**
  * The uid to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#uid DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#uid}
  */
  readonly uid: number;
  /**
  * The user name to run the alluxio runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#user DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#user}
  */
  readonly user: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    group: cdktf.stringToTerraform(struct!.group),
    uid: cdktf.numberToTerraform(struct!.uid),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._group = undefined;
      this._uid = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._group = value.group;
      this._uid = value.uid;
      this._user = value.user;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#partition DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_id DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStoreToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStoreToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk {
  /**
  * cachingMode is the Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#caching_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * diskName is the Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#disk_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * diskURI is the URI of data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#disk_uri DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * kind expected values are Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#kind DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDiskToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_uri: cdktf.stringToTerraform(struct!.diskUri),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDiskToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_mode: {
      value: cdktf.stringToHclTerraform(struct!.cachingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_uri: {
      value: cdktf.stringToHclTerraform(struct!.diskUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUri = this._diskUri;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachingMode = undefined;
      this._diskName = undefined;
      this._diskUri = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachingMode = value.cachingMode;
      this._diskName = value.diskName;
      this._diskUri = value.diskUri;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: true, required: false
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  public resetCachingMode() {
    this._cachingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_uri - computed: false, optional: false, required: true
  private _diskUri?: string; 
  public get diskUri() {
    return this.getStringAttribute('disk_uri');
  }
  public set diskUri(value: string) {
    this._diskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUriInput() {
    return this._diskUri;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile {
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * shareName is the azure share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#share_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFileToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFileToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
      this._shareName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._shareName = value.shareName;
    }
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs {
  /**
  * monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#monitors DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_file DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef;
  /**
  * user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#user DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    secret_file: {
      value: cdktf.stringToHclTerraform(struct!.secretFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
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

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef;
  /**
  * volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_id DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap {
  /**
  * defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#default_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#items DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi {
  /**
  * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#driver DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_publish_secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef;
  /**
  * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_attributes DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_publish_secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._nodePublishSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
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

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string }; 
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }
  public set volumeAttributes(value: { [key: string]: string }) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#api_version DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#field_path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#container_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#divisor DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resource DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#field_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resource_field_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#default_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#items DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir {
  /**
  * medium represents what type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#medium DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#size_limit DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDirToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDirToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#api_group DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#kind DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#api_group DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#kind DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#namespace DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#operator DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#values DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#match_expressions DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#match_labels DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#access_modes DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#data_source DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#data_source_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#storage_class_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_attributes_class_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
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

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#metadata DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#spec DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_claim_template DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#lun DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#target_ww_ns DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#wwids DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFcToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFcToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
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

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#driver DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#dataset_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#dataset_uuid DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlockerToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlockerToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#partition DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#pd_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDiskToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDiskToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
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
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#directory DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#repository DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#revision DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepoToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepoToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
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
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#endpoints DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPathToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPathToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#chap_auth_discovery DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#chap_auth_session DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#initiator_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#iqn DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#iscsi_interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#lun DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#portals DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#target_portal DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#server DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs | cdktf.IResolvable): any {
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claim_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaimToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaimToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
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
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#pd_id DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDiskToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDiskToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_id DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolumeToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolumeToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#operator DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#values DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#match_expressions DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#match_labels DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#label_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#signer_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector",
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._path = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._optional = value.optional;
      this._path = value.path;
      this._signerName = value.signerName;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#items DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#api_version DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#field_path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
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

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#container_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#divisor DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resource DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#field_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resource_field_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#items DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#items DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#audience DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#expiration_seconds DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#cluster_trust_bundle DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#config_map DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#downward_api DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#service_account_token DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#default_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#sources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#group DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#registry DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#tenant DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#user DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyteToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyteToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#image DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#keyring DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#monitors DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#pool DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#user DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#gateway DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#protection_domain DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ssl_enabled DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#storage_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#storage_pool DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#system DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
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
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#key DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#default_mode DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#items DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#optional DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRefToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRefToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#read_only DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret_ref DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_namespace DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    secret_ref: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fs_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#storage_policy_id DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#storage_policy_name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolumeToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolumeToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#aws_elastic_block_store DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#azure_disk DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#azure_file DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#cephfs DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#cinder DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#config_map DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#csi DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#downward_api DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#empty_dir DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ephemeral DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fc DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#flex_volume DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#flocker DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#gce_persistent_disk DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#git_repo DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#glusterfs DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#host_path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#iscsi DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#nfs DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#persistent_volume_claim DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#photon_persistent_disk DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#portworx_volume DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#projected DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#quobyte DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#rbd DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#scale_io DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#secret DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#storageos DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#vsphere_volume DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderToTerraform(struct!.cinder),
    config_map: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapToTerraform(struct!.configMap),
    csi: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiToTerraform(struct!.csi),
    downward_api: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFcToTerraform(struct!.fc),
    flex_volume: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiToTerraform(struct!.iscsi),
    nfs: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedToTerraform(struct!.projected),
    quobyte: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdToTerraform(struct!.rbd),
    scale_io: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretToTerraform(struct!.secret),
    storageos: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk",
    },
    azure_file: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile",
    },
    cephfs: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs",
    },
    cinder: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder",
    },
    config_map: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap",
    },
    csi: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi",
    },
    downward_api: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi",
    },
    empty_dir: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir",
    },
    ephemeral: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral",
    },
    fc: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc",
    },
    flex_volume: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume",
    },
    flocker: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo",
    },
    glusterfs: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs",
    },
    host_path: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath",
    },
    iscsi: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi",
    },
    nfs: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs",
    },
    persistent_volume_claim: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume",
    },
    projected: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected",
    },
    quobyte: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte",
    },
    rbd: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd",
    },
    scale_io: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo",
    },
    secret: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret",
    },
    storageos: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos",
    },
    vsphere_volume: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._ephemeral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._ephemeral.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._ephemeral.internalValue = value.ephemeral;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceEphemeral) {
    this._ephemeral.internalValue = value;
  }
  public resetEphemeral() {
    this._ephemeral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourcePortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels {
  /**
  * Ratio of high watermark of the tier (e.g. 0.9)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#high DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#high}
  */
  readonly high?: string;
  /**
  * Ratio of low watermark of the tier (e.g. 0.7)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#low DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#low}
  */
  readonly low?: string;
  /**
  * Medium Type of the tier. One of the three types: 'MEM', 'SSD', 'HDD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#mediumtype DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#mediumtype}
  */
  readonly mediumtype: string;
  /**
  * File paths to be used for the tier. Multiple paths are supported. Multiple paths should be separated with comma. For example: '/mnt/cache1,/mnt/cache2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#path DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Quota for the whole tier. (e.g. 100Gi) Please note that if there're multiple paths used for this tierstore, the quota will be equally divided into these paths. If you'd like to set quota for each, path, see QuotaList for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#quota DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#quota}
  */
  readonly quota?: string;
  /**
  * QuotaList are quotas used to set quota on multiple paths. Quotas should be separated with comma. Quotas in this list will be set to paths with the same order in Path. For example, with Path defined with '/mnt/cache1,/mnt/cache2' and QuotaList set to '100Gi, 50Gi', then we get 100GiB cache storage under '/mnt/cache1' and 50GiB under '/mnt/cache2'. Also note that num of quotas must be consistent with the num of paths defined in Path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#quota_list DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#quota_list}
  */
  readonly quotaList?: string;
  /**
  * VolumeSource is the volume source of the tier. It follows the form of corev1.VolumeSource. For now, users should only specify VolumeSource when VolumeType is set to emptyDir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_source DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_source}
  */
  readonly volumeSource?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource;
  /**
  * VolumeType is the volume type of the tier. Should be one of the three types: 'hostPath', 'emptyDir' and 'volumeTemplate'. If not set, defaults to hostPath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#volume_type DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#volume_type}
  */
  readonly volumeType?: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.stringToTerraform(struct!.high),
    low: cdktf.stringToTerraform(struct!.low),
    mediumtype: cdktf.stringToTerraform(struct!.mediumtype),
    path: cdktf.stringToTerraform(struct!.path),
    quota: cdktf.stringToTerraform(struct!.quota),
    quota_list: cdktf.stringToTerraform(struct!.quotaList),
    volume_source: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceToTerraform(struct!.volumeSource),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.stringToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low: {
      value: cdktf.stringToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mediumtype: {
      value: cdktf.stringToHclTerraform(struct!.mediumtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: cdktf.stringToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota_list: {
      value: cdktf.stringToHclTerraform(struct!.quotaList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_source: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceToHclTerraform(struct!.volumeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._mediumtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumtype = this._mediumtype;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._quotaList !== undefined) {
      hasAnyValues = true;
      internalValueResult.quotaList = this._quotaList;
    }
    if (this._volumeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource?.internalValue;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
      this._mediumtype = undefined;
      this._path = undefined;
      this._quota = undefined;
      this._quotaList = undefined;
      this._volumeSource.internalValue = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
      this._mediumtype = value.mediumtype;
      this._path = value.path;
      this._quota = value.quota;
      this._quotaList = value.quotaList;
      this._volumeSource.internalValue = value.volumeSource;
      this._volumeType = value.volumeType;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: string; 
  public get high() {
    return this.getStringAttribute('high');
  }
  public set high(value: string) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: string; 
  public get low() {
    return this.getStringAttribute('low');
  }
  public set low(value: string) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }

  // mediumtype - computed: false, optional: false, required: true
  private _mediumtype?: string; 
  public get mediumtype() {
    return this.getStringAttribute('mediumtype');
  }
  public set mediumtype(value: string) {
    this._mediumtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumtypeInput() {
    return this._mediumtype;
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

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // quota_list - computed: false, optional: true, required: false
  private _quotaList?: string; 
  public get quotaList() {
    return this.getStringAttribute('quota_list');
  }
  public set quotaList(value: string) {
    this._quotaList = value;
  }
  public resetQuotaList() {
    this._quotaList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaListInput() {
    return this._quotaList;
  }

  // volume_source - computed: false, optional: true, required: false
  private _volumeSource = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSourceOutputReference(this, "volume_source");
  public get volumeSource() {
    return this._volumeSource;
  }
  public putVolumeSource(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsVolumeSource) {
    this._volumeSource.internalValue = value;
  }
  public resetVolumeSource() {
    this._volumeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource.internalValue;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore {
  /**
  * configurations for multiple tiers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#levels DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#levels}
  */
  readonly levels?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels[] | cdktf.IResolvable;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    levels: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsToTerraform, false)(struct!.levels),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    levels: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsToHclTerraform, false)(struct!.levels),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levels = this._levels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levels.internalValue = value.levels;
    }
  }

  // levels - computed: false, optional: true, required: false
  private _levels = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevelsList(this, "levels", false);
  public get levels() {
    return this._levels;
  }
  public putLevels(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreLevels[] | cdktf.IResolvable) {
    this._levels.internalValue = value;
  }
  public resetLevels() {
    this._levels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelsInput() {
    return this._levels.internalValue;
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#name DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference {
    return new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#claims DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#limits DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#requests DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList",
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

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#annotations DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Enabled or Disabled for the components. For now, only API Gateway is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#enabled DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment variables that will be used by GooseFS component. <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#env DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * NodeSelector is a selector which must be true for the master to fit on a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#node_selector DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Ports used by GooseFS(e.g. rpc: 19998 for master)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#ports DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#ports}
  */
  readonly ports?: { [key: string]: string };
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Replicas is the desired number of replicas of the given template. If unspecified, defaults to 1. replicas is the min replicas of dataset in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources that will be requested by the GooseFS component. <br> <br> Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#resources DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    ports: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ports),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ports: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ports),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._enabled = undefined;
      this._env = undefined;
      this._jvmOptions = undefined;
      this._nodeSelector = undefined;
      this._ports = undefined;
      this._properties = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._enabled = value.enabled;
      this._env = value.env;
      this._jvmOptions = value.jvmOptions;
      this._nodeSelector = value.nodeSelector;
      this._ports = value.ports;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
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

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: { [key: string]: string }; 
  public get ports() {
    return this.getStringMapAttribute('ports');
  }
  public set ports(value: { [key: string]: string }) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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
  private _resources = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerResources) {
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
export interface DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec {
  /**
  * The component spec of GooseFS API Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#api_gateway DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#api_gateway}
  */
  readonly apiGateway?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway;
  /**
  * CleanCachePolicy defines cleanCache Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#clean_cache_policy DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#clean_cache_policy}
  */
  readonly cleanCachePolicy?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy;
  /**
  * Management strategies for the dataset to which the runtime is bound
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#data DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#data}
  */
  readonly data?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData;
  /**
  * Disable monitoring for GooseFS Runtime Prometheus is enabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#disable_prometheus DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#disable_prometheus}
  */
  readonly disablePrometheus?: boolean | cdktf.IResolvable;
  /**
  * The component spec of GooseFS Fuse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#fuse DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#fuse}
  */
  readonly fuse?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse;
  /**
  * The version information that instructs fluid to orchestrate a particular version of GooseFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#goosefs_version DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#goosefs_version}
  */
  readonly goosefsVersion?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion;
  /**
  * Name of the configMap used to support HDFS configurations when using HDFS as GooseFS's UFS. The configMap must be in the same namespace with the GooseFSRuntime. The configMap should contain user-specific HDFS conf files in it. For now, only 'hdfs-site.xml' and 'core-site.xml' are supported. It must take the filename of the conf file as the key and content of the file as the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#hadoop_config DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#hadoop_config}
  */
  readonly hadoopConfig?: string;
  /**
  * The spec of init users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#init_users DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#init_users}
  */
  readonly initUsers?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers;
  /**
  * The component spec of GooseFS job master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#job_master DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#job_master}
  */
  readonly jobMaster?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster;
  /**
  * The component spec of GooseFS job Worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#job_worker DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#job_worker}
  */
  readonly jobWorker?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker;
  /**
  * Options for JVM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#jvm_options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#jvm_options}
  */
  readonly jvmOptions?: string[];
  /**
  * The component spec of GooseFS master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#master DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#master}
  */
  readonly master?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster;
  /**
  * Configurable properties for the GOOSEFS component. <br> Refer to <a href='https://cloud.tencent.com/document/product/436/56415'>GOOSEFS Configuration Properties</a> for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#properties DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * The replicas of the worker, need to be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#replicas DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Manage the user to run GooseFS Runtime GooseFS support POSIX-ACL and Apache Ranger to manager authorization TODO(chrisydxie@tencent.com) Support Apache Ranger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#run_as DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#run_as}
  */
  readonly runAs?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs;
  /**
  * Tiered storage used by GooseFS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#tieredstore DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#tieredstore}
  */
  readonly tieredstore?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore;
  /**
  * The component spec of GooseFS worker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#worker DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest#worker}
  */
  readonly worker?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker;
}

export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_gateway: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayToTerraform(struct!.apiGateway),
    clean_cache_policy: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToTerraform(struct!.cleanCachePolicy),
    data: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecDataToTerraform(struct!.data),
    disable_prometheus: cdktf.booleanToTerraform(struct!.disablePrometheus),
    fuse: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseToTerraform(struct!.fuse),
    goosefs_version: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersionToTerraform(struct!.goosefsVersion),
    hadoop_config: cdktf.stringToTerraform(struct!.hadoopConfig),
    init_users: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersToTerraform(struct!.initUsers),
    job_master: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterToTerraform(struct!.jobMaster),
    job_worker: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerToTerraform(struct!.jobWorker),
    jvm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jvmOptions),
    master: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterToTerraform(struct!.master),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    run_as: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAsToTerraform(struct!.runAs),
    tieredstore: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreToTerraform(struct!.tieredstore),
    worker: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerToTerraform(struct!.worker),
  }
}


export function dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_gateway: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayToHclTerraform(struct!.apiGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway",
    },
    clean_cache_policy: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyToHclTerraform(struct!.cleanCachePolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy",
    },
    data: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData",
    },
    disable_prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fuse: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseToHclTerraform(struct!.fuse),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse",
    },
    goosefs_version: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersionToHclTerraform(struct!.goosefsVersion),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion",
    },
    hadoop_config: {
      value: cdktf.stringToHclTerraform(struct!.hadoopConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    init_users: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersToHclTerraform(struct!.initUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers",
    },
    job_master: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterToHclTerraform(struct!.jobMaster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster",
    },
    job_worker: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerToHclTerraform(struct!.jobWorker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker",
    },
    jvm_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jvmOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    master: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterToHclTerraform(struct!.master),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAsToHclTerraform(struct!.runAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs",
    },
    tieredstore: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreToHclTerraform(struct!.tieredstore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore",
    },
    worker: {
      value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGateway = this._apiGateway?.internalValue;
    }
    if (this._cleanCachePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanCachePolicy = this._cleanCachePolicy?.internalValue;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._disablePrometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrometheus = this._disablePrometheus;
    }
    if (this._fuse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuse = this._fuse?.internalValue;
    }
    if (this._goosefsVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goosefsVersion = this._goosefsVersion?.internalValue;
    }
    if (this._hadoopConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.hadoopConfig = this._hadoopConfig;
    }
    if (this._initUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initUsers = this._initUsers?.internalValue;
    }
    if (this._jobMaster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobMaster = this._jobMaster?.internalValue;
    }
    if (this._jobWorker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobWorker = this._jobWorker?.internalValue;
    }
    if (this._jvmOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jvmOptions = this._jvmOptions;
    }
    if (this._master?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.master = this._master?.internalValue;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._runAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAs = this._runAs?.internalValue;
    }
    if (this._tieredstore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieredstore = this._tieredstore?.internalValue;
    }
    if (this._worker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGateway.internalValue = undefined;
      this._cleanCachePolicy.internalValue = undefined;
      this._data.internalValue = undefined;
      this._disablePrometheus = undefined;
      this._fuse.internalValue = undefined;
      this._goosefsVersion.internalValue = undefined;
      this._hadoopConfig = undefined;
      this._initUsers.internalValue = undefined;
      this._jobMaster.internalValue = undefined;
      this._jobWorker.internalValue = undefined;
      this._jvmOptions = undefined;
      this._master.internalValue = undefined;
      this._properties = undefined;
      this._replicas = undefined;
      this._runAs.internalValue = undefined;
      this._tieredstore.internalValue = undefined;
      this._worker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGateway.internalValue = value.apiGateway;
      this._cleanCachePolicy.internalValue = value.cleanCachePolicy;
      this._data.internalValue = value.data;
      this._disablePrometheus = value.disablePrometheus;
      this._fuse.internalValue = value.fuse;
      this._goosefsVersion.internalValue = value.goosefsVersion;
      this._hadoopConfig = value.hadoopConfig;
      this._initUsers.internalValue = value.initUsers;
      this._jobMaster.internalValue = value.jobMaster;
      this._jobWorker.internalValue = value.jobWorker;
      this._jvmOptions = value.jvmOptions;
      this._master.internalValue = value.master;
      this._properties = value.properties;
      this._replicas = value.replicas;
      this._runAs.internalValue = value.runAs;
      this._tieredstore.internalValue = value.tieredstore;
      this._worker.internalValue = value.worker;
    }
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGatewayOutputReference(this, "api_gateway");
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecApiGateway) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // clean_cache_policy - computed: false, optional: true, required: false
  private _cleanCachePolicy = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicyOutputReference(this, "clean_cache_policy");
  public get cleanCachePolicy() {
    return this._cleanCachePolicy;
  }
  public putCleanCachePolicy(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecCleanCachePolicy) {
    this._cleanCachePolicy.internalValue = value;
  }
  public resetCleanCachePolicy() {
    this._cleanCachePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanCachePolicyInput() {
    return this._cleanCachePolicy.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // disable_prometheus - computed: false, optional: true, required: false
  private _disablePrometheus?: boolean | cdktf.IResolvable; 
  public get disablePrometheus() {
    return this.getBooleanAttribute('disable_prometheus');
  }
  public set disablePrometheus(value: boolean | cdktf.IResolvable) {
    this._disablePrometheus = value;
  }
  public resetDisablePrometheus() {
    this._disablePrometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrometheusInput() {
    return this._disablePrometheus;
  }

  // fuse - computed: false, optional: true, required: false
  private _fuse = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuseOutputReference(this, "fuse");
  public get fuse() {
    return this._fuse;
  }
  public putFuse(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecFuse) {
    this._fuse.internalValue = value;
  }
  public resetFuse() {
    this._fuse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuseInput() {
    return this._fuse.internalValue;
  }

  // goosefs_version - computed: false, optional: true, required: false
  private _goosefsVersion = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersionOutputReference(this, "goosefs_version");
  public get goosefsVersion() {
    return this._goosefsVersion;
  }
  public putGoosefsVersion(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecGoosefsVersion) {
    this._goosefsVersion.internalValue = value;
  }
  public resetGoosefsVersion() {
    this._goosefsVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goosefsVersionInput() {
    return this._goosefsVersion.internalValue;
  }

  // hadoop_config - computed: false, optional: true, required: false
  private _hadoopConfig?: string; 
  public get hadoopConfig() {
    return this.getStringAttribute('hadoop_config');
  }
  public set hadoopConfig(value: string) {
    this._hadoopConfig = value;
  }
  public resetHadoopConfig() {
    this._hadoopConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hadoopConfigInput() {
    return this._hadoopConfig;
  }

  // init_users - computed: false, optional: true, required: false
  private _initUsers = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsersOutputReference(this, "init_users");
  public get initUsers() {
    return this._initUsers;
  }
  public putInitUsers(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecInitUsers) {
    this._initUsers.internalValue = value;
  }
  public resetInitUsers() {
    this._initUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initUsersInput() {
    return this._initUsers.internalValue;
  }

  // job_master - computed: false, optional: true, required: false
  private _jobMaster = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMasterOutputReference(this, "job_master");
  public get jobMaster() {
    return this._jobMaster;
  }
  public putJobMaster(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobMaster) {
    this._jobMaster.internalValue = value;
  }
  public resetJobMaster() {
    this._jobMaster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobMasterInput() {
    return this._jobMaster.internalValue;
  }

  // job_worker - computed: false, optional: true, required: false
  private _jobWorker = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorkerOutputReference(this, "job_worker");
  public get jobWorker() {
    return this._jobWorker;
  }
  public putJobWorker(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecJobWorker) {
    this._jobWorker.internalValue = value;
  }
  public resetJobWorker() {
    this._jobWorker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobWorkerInput() {
    return this._jobWorker.internalValue;
  }

  // jvm_options - computed: false, optional: true, required: false
  private _jvmOptions?: string[]; 
  public get jvmOptions() {
    return this.getListAttribute('jvm_options');
  }
  public set jvmOptions(value: string[]) {
    this._jvmOptions = value;
  }
  public resetJvmOptions() {
    this._jvmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jvmOptionsInput() {
    return this._jvmOptions;
  }

  // master - computed: false, optional: true, required: false
  private _master = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecMaster) {
    this._master.internalValue = value;
  }
  public resetMaster() {
    this._master.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
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

  // run_as - computed: false, optional: true, required: false
  private _runAs = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAsOutputReference(this, "run_as");
  public get runAs() {
    return this._runAs;
  }
  public putRunAs(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecRunAs) {
    this._runAs.internalValue = value;
  }
  public resetRunAs() {
    this._runAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsInput() {
    return this._runAs.internalValue;
  }

  // tieredstore - computed: false, optional: true, required: false
  private _tieredstore = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstoreOutputReference(this, "tieredstore");
  public get tieredstore() {
    return this._tieredstore;
  }
  public putTieredstore(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecTieredstore) {
    this._tieredstore.internalValue = value;
  }
  public resetTieredstore() {
    this._tieredstore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieredstoreInput() {
    return this._tieredstore.internalValue;
  }

  // worker - computed: false, optional: true, required: false
  private _worker = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecWorker) {
    this._worker.internalValue = value;
  }
  public resetWorker() {
    this._worker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest k8s_data_fluid_io_goose_fs_runtime_v1alpha1_manifest}
*/
export class DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_data_fluid_io_goose_fs_runtime_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataFluidIoGooseFsRuntimeV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_data_fluid_io_goose_fs_runtime_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/data_fluid_io_goose_fs_runtime_v1alpha1_manifest k8s_data_fluid_io_goose_fs_runtime_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_data_fluid_io_goose_fs_runtime_v1alpha1_manifest',
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
  private _metadata = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataFluidIoGooseFsRuntimeV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
